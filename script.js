import { Timer } from "easytimer.js/dist/easytimer";

let selectedView = 'analog';

// Skapa en instans av EasyTimer.js
let timer;
try {
    timer = new Timer();
    console.log("Timer instantiated:", timer);
} catch (error) {
    console.error("Timer initialization failed:", error);
}

// Kontrollera att vi hittar skärmarna
const loadingScreen = document.getElementById('loadingScreen');
const setTimerScreen = document.getElementById('setTimerScreen');
const analogTimerScreen = document.getElementById('analogTimerScreen');
const digitalTimerScreen = document.getElementById('digitalTimerScreen');
const alarmScreen = document.getElementById('alarmScreen');
const backToSetTimerBtn = document.getElementById('backToSetTimer');

// Kontrollera att vi hittar element för minuter och knappar
const minutesInput = document.getElementById('minutes');
const startTimerBtn = document.getElementById('startTimer');
// const startAppButton = document.getElementById('startApp');
const logo = document.getElementById('logo');
const cancelTimerBtn = document.getElementById('cancelTimer');
const cancelDigitalTimerBtn = document.getElementById('cancelDigitalTimer');

const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

// Meny-relaterade element för analog timer
const menuButtonAnalog = document.getElementById('menuButtonAnalog');
const menuAnalog = document.getElementById('menuAnalog');

// Meny-relaterade element för digital timer
const menuButtonDigital = document.getElementById('menuButtonDigital');
const menuDigital = document.getElementById('menuDigital');

// Växla-knapparna
const switchToAnalogBtn = document.getElementById('switchToAnalogFromDigital');
const switchToDigitalBtn = document.getElementById('switchToDigitalFromAnalog');

// Animera knappar när användaren hovrar över dem
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    // När musen hovrar över knappen
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.1, // Gör knappen 10% större
            duration: 300, // Animationens längd
            easing: 'easeInOutQuad'
        });
    });

    // När musen lämnar knappen
    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1, // Återställ storleken
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });
});
buttons.forEach(button => {
    // När knappen klickas
    button.addEventListener('mousedown', () => {
        anime({
            targets: button,
            scale: 0.9, // Gör knappen 10% mindre för "tryck in"-effekten
            duration: 100,
            easing: 'easeInOutQuad'
        });
    });

    // När klicket släpps
    button.addEventListener('mouseup', () => {
        anime({
            targets: button,
            scale: 1, // Återställ storleken
            duration: 200,
            easing: 'easeInOutQuad'
        });
    });
});

// Logga för felsökning
// console.log('Screens:', { loadingScreen, setTimerScreen, analogTimerScreen, digitalTimerScreen });
// console.log('Elements:', { minutesInput, startTimerBtn, startAppButton, cancelTimerBtn, cancelDigitalTimerBtn });

// Funktion för att visa/dölja skärmar (endast en vy synlig)
function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('visible'); // Tar bort "visible" från alla skärmar
        console.log(`Hiding screen: ${screen.id}`); // Loggar vilka skärmar som döljs
    });
console.log(screenToShow);

    // Lägg till "visible" till den valda skärmen
    screenToShow.classList.add('visible');
    console.log(`Switched to screen: ${screenToShow.id}`); // Loggar vilken skärm som visades
    console.log(`Classes for ${screenToShow.id}:`, screenToShow.classList);
}

window.addEventListener('load', () => {
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
});

// Animation för logotypen med en pulserande effekt
anime({
    targets: '#logo',
    scale: [
        { value: 1.2, duration: 1000, easing: 'easeInOutQuad' },
        { value: 1, duration: 1000, easing: 'easeInOutQuad' }
    ],
    loop: true // Loopa animationen
});
// Event: Klicka på logotypen för att gå till set timer-skärmen
logo.addEventListener('click', () => {
    showScreen(setTimerScreen); // Byt till setTimerScreen när logotypen klickas
});

// Event: Starta timer och gå till analog timer-vy
startTimerBtn.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value, 10);
    if (!isNaN(minutes) && minutes > 0) {
        timer.start({ countdown: true, startValues: { minutes: minutes } });
        console.log(selectedView);
        
        // Kontrollera om användaren valt den digitala eller analoga timern
        if (selectedView === 'analog') {
            console.log("analog vy");
            
            showScreen(analogTimerScreen); // Visa analog timer
        } else if (selectedView === 'digital') {
            console.log("digital vy");
            showScreen(digitalTimerScreen);
            
             // Visa digital timer
        }
    } else {
        alert('Please enter a valid number of minutes.');
    }
});


// Funktion för att uppdatera visarnas positioner
function updateAnalogClock(minuteDegrees, secondDegrees) {
    if (minuteHand && secondHand) {
        minuteHand.style.transform = `rotate(${minuteDegrees - 90}deg)`; 
        secondHand.style.transform = `rotate(${secondDegrees - 90}deg)`; 
    } else {
        console.error("Minute hand or second hand not found!"); // Felsökningsmeddelande om de saknas
    }
}


// Uppdatera varje sekund med timerns värden för att animera visarna
timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();

    // Beräkna graderna för visarna (motsols)
    const secondDegrees = -(timeValues.seconds * 6); // 360 / 60 = 6 grader per sekund, negativ för motsols
    const minuteDegrees = -(timeValues.minutes * 6 + (timeValues.seconds / 60) * 6); 

    // Uppdatera visarnas positioner
    updateAnalogClock(minuteDegrees, secondDegrees);
});

// När timern är slut, visa alarm-skärmen och stoppa timern
timer.addEventListener('targetAchieved', function () {
    timer.stop(); // Se till att timern stannar när tiden är slut
    showScreen(alarmScreen);
});

// Event: Gå tillbaka till set timer från alarm-skärmen
if (backToSetTimerBtn) {
    backToSetTimerBtn.addEventListener('click', () => {
        showScreen(setTimerScreen);
    });
}

// Event: Avbryt timer och gå tillbaka till set timer
if (cancelTimerBtn && timer) {
    cancelTimerBtn.addEventListener('click', () => {
        timer.stop(); // Stoppa timern
        showScreen(setTimerScreen);
    });
}

// Digital timer-vy relaterade funktioner och events

// Funktion för att uppdatera den digitala tiden
function updateDigitalTimeDisplay(hours, minutes, seconds) {
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const digitalTimeDisplay = document.getElementById('digitalTimeDisplay');
    if (digitalTimeDisplay) {
        digitalTimeDisplay.textContent = formattedTime;
    }
}

// Uppdatera varje sekund med timerns värden för digital visning
timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    updateDigitalTimeDisplay(timeValues.hours, timeValues.minutes, timeValues.seconds);
});

// När timern är slut, visa alarm-skärmen
timer.addEventListener('targetAchieved', function () {
    timer.stop(); // Se till att timern stannar när tiden är slut
    showScreen(alarmScreen);
});

// Alarmljud vid slut av timern
const alarmSound = document.getElementById('alarmSound');

// const clockIcon = document.getElementById('clockIcon');

// Spela ljud och animera klockan när timern når målet
timer.addEventListener('targetAchieved', function () {
    alarmSound.play(); // Spela upp ljudet
    showScreen(alarmScreen); // Visa alarm-skärmen
    
    // Skapandet av en skakande animation med Anime.js
    anime({
        targets: '#clockIcon',
        translateX: [
            { value: -10, duration: 100, easing: 'easeInOutSine' },
            { value: 10, duration: 100, easing: 'easeInOutSine' }
        ],
        loop: true, // Gör animationen oändlig
    });
});


// Event: Avbryt digital timer och gå tillbaka till set timer
if (cancelDigitalTimerBtn) {
    cancelDigitalTimerBtn.addEventListener('click', () => {
        timer.stop(); // Stoppa timern
        showScreen(setTimerScreen);
    });
}

// Menyhantering för att växla mellan vyer utan att avbryta timern

// Visa/dölj menyn när menyikonen klickas (Analog Timer)
if (menuButtonAnalog) {
    menuButtonAnalog.addEventListener('click', () => {
        console.log("Analog Menu button clicked");
        menuAnalog.classList.toggle('hidden');
        console.log('Menu hidden state:', menuAnalog.classList.contains('hidden'));
    });
}

// Visa/dölj menyn när menyikonen klickas (Digital Timer)
if (menuButtonDigital) {
    menuButtonDigital.addEventListener('click', () => {
        console.log("Digital Menu button clicked");
        menuDigital.classList.toggle('hidden');
    });
}

// Växla till analog timer-vy utan att avbryta timern
if (switchToAnalogBtn) {
    switchToAnalogBtn.addEventListener('click', () => {
        selectedView = 'analog'; // Uppdatera till analog vy
        console.log(`Selected view is now: ${selectedView}`);
        showScreen(analogTimerScreen);
        menuAnalog.classList.add('hidden');
        menuDigital.classList.add('hidden');
    });
}

// Växla till digital timer-vy utan att avbryta timern
if (switchToDigitalBtn) {
    switchToDigitalBtn.addEventListener('click', () => {
        selectedView = 'digital'; // Uppdatera till digital vy
        console.log(`Selected view is now: ${selectedView}`);
        showScreen(digitalTimerScreen);
        menuAnalog.classList.add('hidden');
        menuDigital.classList.add('hidden');
    });
};
