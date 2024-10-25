// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _easytimer = require("easytimer.js/dist/easytimer");
let selectedView = "analog";
// Skapa en instans av EasyTimer.js
let timer;
try {
    timer = new (0, _easytimer.Timer)();
    console.log("Timer instantiated:", timer);
} catch (error) {
    console.error("Timer initialization failed:", error);
}
// Kontrollera att vi hittar skärmarna
const loadingScreen = document.getElementById("loadingScreen");
const setTimerScreen = document.getElementById("setTimerScreen");
const analogTimerScreen = document.getElementById("analogTimerScreen");
const digitalTimerScreen = document.getElementById("digitalTimerScreen");
const alarmScreen = document.getElementById("alarmScreen");
const backToSetTimerBtn = document.getElementById("backToSetTimer");
// Kontrollera att vi hittar element för minuter och knappar
const minutesInput = document.getElementById("minutes");
const startTimerBtn = document.getElementById("startTimer");
// const startAppButton = document.getElementById('startApp');
const logo = document.getElementById("logo");
const cancelTimerBtn = document.getElementById("cancelTimer");
const cancelDigitalTimerBtn = document.getElementById("cancelDigitalTimer");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");
// Meny-relaterade element för analog timer
const menuButtonAnalog = document.getElementById("menuButtonAnalog");
const menuAnalog = document.getElementById("menuAnalog");
// Meny-relaterade element för digital timer
const menuButtonDigital = document.getElementById("menuButtonDigital");
const menuDigital = document.getElementById("menuDigital");
// Växla-knapparna
const switchToAnalogBtn = document.getElementById("switchToAnalogFromDigital");
const switchToDigitalBtn = document.getElementById("switchToDigitalFromAnalog");
// Animera knappar när användaren hovrar över dem
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    // När musen hovrar över knappen
    button.addEventListener("mouseenter", ()=>{
        anime({
            targets: button,
            scale: 1.1,
            duration: 300,
            easing: "easeInOutQuad"
        });
    });
    // När musen lämnar knappen
    button.addEventListener("mouseleave", ()=>{
        anime({
            targets: button,
            scale: 1,
            duration: 300,
            easing: "easeInOutQuad"
        });
    });
});
buttons.forEach((button)=>{
    // När knappen klickas
    button.addEventListener("mousedown", ()=>{
        anime({
            targets: button,
            scale: 0.9,
            duration: 100,
            easing: "easeInOutQuad"
        });
    });
    // När klicket släpps
    button.addEventListener("mouseup", ()=>{
        anime({
            targets: button,
            scale: 1,
            duration: 200,
            easing: "easeInOutQuad"
        });
    });
});
// Logga för felsökning
// console.log('Screens:', { loadingScreen, setTimerScreen, analogTimerScreen, digitalTimerScreen });
// console.log('Elements:', { minutesInput, startTimerBtn, startAppButton, cancelTimerBtn, cancelDigitalTimerBtn });
// Funktion för att visa/dölja skärmar (endast en vy synlig)
function showScreen(screenToShow) {
    document.querySelectorAll(".screen").forEach((screen)=>{
        screen.classList.remove("visible"); // Tar bort "visible" från alla skärmar
        console.log(`Hiding screen: ${screen.id}`); // Loggar vilka skärmar som döljs
    });
    console.log(screenToShow);
    // Lägg till "visible" till den valda skärmen
    screenToShow.classList.add("visible");
    console.log(`Switched to screen: ${screenToShow.id}`); // Loggar vilken skärm som visades
    console.log(`Classes for ${screenToShow.id}:`, screenToShow.classList);
}
window.addEventListener("load", ()=>{
    anime({
        targets: "body",
        opacity: [
            0,
            1
        ],
        duration: 1000,
        easing: "easeInOutQuad"
    });
});
// Animation för logotypen med en pulserande effekt
anime({
    targets: "#logo",
    scale: [
        {
            value: 1.2,
            duration: 1000,
            easing: "easeInOutQuad"
        },
        {
            value: 1,
            duration: 1000,
            easing: "easeInOutQuad"
        }
    ],
    loop: true // Loopa animationen
});
// Event: Klicka på logotypen för att gå till set timer-skärmen
logo.addEventListener("click", ()=>{
    showScreen(setTimerScreen); // Byt till setTimerScreen när logotypen klickas
});
// Event: Starta timer och gå till analog timer-vy
startTimerBtn.addEventListener("click", ()=>{
    const minutes = parseInt(minutesInput.value, 10);
    if (!isNaN(minutes) && minutes > 0) {
        timer.start({
            countdown: true,
            startValues: {
                minutes: minutes
            }
        });
        console.log(selectedView);
        // Kontrollera om användaren valt den digitala eller analoga timern
        if (selectedView === "analog") {
            console.log("analog vy");
            showScreen(analogTimerScreen); // Visa analog timer
        } else if (selectedView === "digital") {
            console.log("digital vy");
            showScreen(digitalTimerScreen);
        // Visa digital timer
        }
    } else alert("Please enter a valid number of minutes.");
});
// Funktion för att uppdatera visarnas positioner
function updateAnalogClock(minuteDegrees, secondDegrees) {
    if (minuteHand && secondHand) {
        minuteHand.style.transform = `rotate(${minuteDegrees - 90}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees - 90}deg)`;
    } else console.error("Minute hand or second hand not found!"); // Felsökningsmeddelande om de saknas
}
// Uppdatera varje sekund med timerns värden för att animera visarna
timer.addEventListener("secondsUpdated", function() {
    const timeValues = timer.getTimeValues();
    // Beräkna graderna för visarna (motsols)
    const secondDegrees = -(timeValues.seconds * 6); // 360 / 60 = 6 grader per sekund, negativ för motsols
    const minuteDegrees = -(timeValues.minutes * 6 + timeValues.seconds / 60 * 6);
    // Uppdatera visarnas positioner
    updateAnalogClock(minuteDegrees, secondDegrees);
});
// När timern är slut, visa alarm-skärmen och stoppa timern
timer.addEventListener("targetAchieved", function() {
    timer.stop(); // Se till att timern stannar när tiden är slut
    showScreen(alarmScreen);
});
// Event: Gå tillbaka till set timer från alarm-skärmen
if (backToSetTimerBtn) backToSetTimerBtn.addEventListener("click", ()=>{
    showScreen(setTimerScreen);
});
// Event: Avbryt timer och gå tillbaka till set timer
if (cancelTimerBtn && timer) cancelTimerBtn.addEventListener("click", ()=>{
    timer.stop(); // Stoppa timern
    showScreen(setTimerScreen);
});
// Digital timer-vy relaterade funktioner och events
// Funktion för att uppdatera den digitala tiden
function updateDigitalTimeDisplay(hours, minutes, seconds) {
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    const digitalTimeDisplay = document.getElementById("digitalTimeDisplay");
    if (digitalTimeDisplay) digitalTimeDisplay.textContent = formattedTime;
}
// Uppdatera varje sekund med timerns värden för digital visning
timer.addEventListener("secondsUpdated", function() {
    const timeValues = timer.getTimeValues();
    updateDigitalTimeDisplay(timeValues.hours, timeValues.minutes, timeValues.seconds);
});
// När timern är slut, visa alarm-skärmen
timer.addEventListener("targetAchieved", function() {
    timer.stop(); // Se till att timern stannar när tiden är slut
    showScreen(alarmScreen);
});
// Alarmljud vid slut av timern
const alarmSound = document.getElementById("alarmSound");
// const clockIcon = document.getElementById('clockIcon');
// Spela ljud och animera klockan när timern når målet
timer.addEventListener("targetAchieved", function() {
    alarmSound.play(); // Spela upp ljudet
    showScreen(alarmScreen); // Visa alarm-skärmen
    // Skapandet av en skakande animation med Anime.js
    anime({
        targets: "#clockIcon",
        translateX: [
            {
                value: -10,
                duration: 100,
                easing: "easeInOutSine"
            },
            {
                value: 10,
                duration: 100,
                easing: "easeInOutSine"
            }
        ],
        loop: true
    });
});
// Event: Avbryt digital timer och gå tillbaka till set timer
if (cancelDigitalTimerBtn) cancelDigitalTimerBtn.addEventListener("click", ()=>{
    timer.stop(); // Stoppa timern
    showScreen(setTimerScreen);
});
// Menyhantering för att växla mellan vyer utan att avbryta timern
// Visa/dölj menyn när menyikonen klickas (Analog Timer)
if (menuButtonAnalog) menuButtonAnalog.addEventListener("click", ()=>{
    console.log("Analog Menu button clicked");
    menuAnalog.classList.toggle("hidden");
    console.log("Menu hidden state:", menuAnalog.classList.contains("hidden"));
});
// Visa/dölj menyn när menyikonen klickas (Digital Timer)
if (menuButtonDigital) menuButtonDigital.addEventListener("click", ()=>{
    console.log("Digital Menu button clicked");
    menuDigital.classList.toggle("hidden");
});
// Växla till analog timer-vy utan att avbryta timern
if (switchToAnalogBtn) switchToAnalogBtn.addEventListener("click", ()=>{
    selectedView = "analog"; // Uppdatera till analog vy
    console.log(`Selected view is now: ${selectedView}`);
    showScreen(analogTimerScreen);
    menuAnalog.classList.add("hidden");
    menuDigital.classList.add("hidden");
});
// Växla till digital timer-vy utan att avbryta timern
if (switchToDigitalBtn) switchToDigitalBtn.addEventListener("click", ()=>{
    selectedView = "digital"; // Uppdatera till digital vy
    console.log(`Selected view is now: ${selectedView}`);
    showScreen(digitalTimerScreen);
    menuAnalog.classList.add("hidden");
    menuDigital.classList.add("hidden");
});

},{"easytimer.js/dist/easytimer":"a8NBE"}],"a8NBE":[function(require,module,exports) {
/**
 * easytimer.js
 * Generated: 2023-08-28
 * Version: 4.6.0
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread2(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }
    function leftPadding(string, padLength, character) {
        var i;
        var characters = "";
        string = typeof string === "number" ? String(string) : string;
        if (string.length > padLength) return string;
        for(i = 0; i < padLength; i = i + 1)characters += String(character);
        return (characters + string).slice(-characters.length);
    }
    function TimeCounter() {
        this.reset();
    }
    /**
   * [toString convert the counted values on a string]
   * @param  {array} units           [array with the units to display]
   * @param  {string} separator       [separator of the units]
   * @param  {number} leftZeroPadding [number of zero padding]
   * @return {string}                 [result string]
   */ TimeCounter.prototype.toString = function() {
        var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [
            "hours",
            "minutes",
            "seconds"
        ];
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ":";
        var leftZeroPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
        units = units || [
            "hours",
            "minutes",
            "seconds"
        ];
        separator = separator || ":";
        leftZeroPadding = leftZeroPadding || 2;
        var arrayTime = [];
        var i;
        for(i = 0; i < units.length; i = i + 1)if (this[units[i]] !== undefined) {
            if (units[i] === "secondTenths") arrayTime.push(this[units[i]]);
            else arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, "0"));
        }
        return arrayTime.join(separator);
    };
    /**
   * [reset reset counter]
   */ TimeCounter.prototype.reset = function() {
        this.secondTenths = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
    };
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.on = function(event, listener) {
        var _this = this;
        if (!Array.isArray(this.events[event])) this.events[event] = [];
        this.events[event].push(listener);
        return function() {
            return _this.removeListener(event, listener);
        };
    };
    EventEmitter.prototype.removeListener = function(event, listener) {
        if (Array.isArray(this.events[event])) {
            var eventIndex = this.events[event].indexOf(listener);
            if (eventIndex > -1) this.events[event].splice(eventIndex, 1);
        }
    };
    EventEmitter.prototype.removeAllListeners = function(event) {
        if (!event) this.events = {};
        else if (Array.isArray(this.events[event])) this.events[event] = [];
    };
    EventEmitter.prototype.emit = function(event) {
        var _this2 = this;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (Array.isArray(this.events[event])) this.events[event].forEach(function(listener) {
            return listener.apply(_this2, args);
        });
    };
    /*
   * General functions, variables and constants
   */ var SECOND_TENTHS_PER_SECOND = 10;
    var SECONDS_PER_MINUTE = 60;
    var MINUTES_PER_HOUR = 60;
    var HOURS_PER_DAY = 24;
    var SECOND_TENTHS_POSITION = 0;
    var SECONDS_POSITION = 1;
    var MINUTES_POSITION = 2;
    var HOURS_POSITION = 3;
    var DAYS_POSITION = 4;
    var SECOND_TENTHS = "secondTenths";
    var SECONDS = "seconds";
    var MINUTES = "minutes";
    var HOURS = "hours";
    var DAYS = "days";
    var VALID_INPUT_VALUES = [
        SECOND_TENTHS,
        SECONDS,
        MINUTES,
        HOURS,
        DAYS
    ];
    var unitsInMilliseconds = {
        secondTenths: 100,
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000
    };
    var groupedUnits = {
        secondTenths: SECOND_TENTHS_PER_SECOND,
        seconds: SECONDS_PER_MINUTE,
        minutes: MINUTES_PER_HOUR,
        hours: HOURS_PER_DAY
    };
    function mod(number, module) {
        return (number % module + module) % module;
    }
    /**
   * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.
   * Can update time values with different time intervals: tenth of seconds,
   * seconds, minutes and hours.]
   */ function Timer() {
        var defaultParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        /*
    * PRIVATE variables and Functions
    */ var counters = new TimeCounter();
        var totalCounters = new TimeCounter();
        var intervalId;
        var eventEmitter = new EventEmitter();
        var running = false;
        var paused = false;
        var precision;
        var timerTypeFactor;
        var customCallback;
        var timerConfig = {};
        var currentParams;
        var targetValues;
        var startValues;
        var countdown;
        var startingDate;
        var targetDate;
        var eventData = {
            detail: {
                timer: this
            }
        };
        setParams(defaultParams);
        function updateCounters(precision, roundedValue) {
            var unitsPerGroup = groupedUnits[precision];
            totalCounters[precision] = roundedValue;
            if (precision === DAYS) counters[precision] = Math.abs(roundedValue);
            else if (roundedValue >= 0) counters[precision] = mod(roundedValue, unitsPerGroup);
            else counters[precision] = mod(unitsPerGroup - mod(roundedValue, unitsPerGroup), unitsPerGroup);
        }
        function updateDays(value) {
            return updateUnitByPrecision(value, DAYS);
        }
        function updateHours(value) {
            return updateUnitByPrecision(value, HOURS);
        }
        function updateMinutes(value) {
            return updateUnitByPrecision(value, MINUTES);
        }
        function updateSeconds(value) {
            return updateUnitByPrecision(value, SECONDS);
        }
        function updateSecondTenths(value) {
            return updateUnitByPrecision(value, SECOND_TENTHS);
        }
        function updateUnitByPrecision(value, precision) {
            var previousValue = totalCounters[precision];
            updateCounters(precision, calculateIntegerUnitQuotient(value, unitsInMilliseconds[precision]));
            return totalCounters[precision] !== previousValue;
        }
        function stopTimerAndResetCounters() {
            stopTimer();
            resetCounters();
        }
        function stopTimer() {
            clearInterval(intervalId);
            intervalId = undefined;
            running = false;
            paused = false;
        }
        function setParamsAndStartTimer(params) {
            if (!isPaused()) setParams(params);
            else {
                startingDate = calculateStartingDate();
                targetValues = setTarget(currentParams.target);
            }
            startTimer();
        }
        function startTimer() {
            var interval = unitsInMilliseconds[precision];
            if (isTargetAchieved(roundTimestamp(Date.now()))) return;
            intervalId = setInterval(updateTimerAndDispatchEvents, interval);
            running = true;
            paused = false;
        }
        function calculateStartingDate() {
            return roundTimestamp(Date.now()) - totalCounters.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
        }
        function updateTimerAndDispatchEvents() {
            var currentTime = roundTimestamp(Date.now());
            var valuesUpdated = updateTimer();
            dispatchEvents(valuesUpdated);
            customCallback(eventData.detail.timer);
            if (isTargetAchieved(currentTime)) {
                stop();
                dispatchEvent("targetAchieved", eventData);
            }
        }
        function updateTimer() {
            var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roundTimestamp(Date.now());
            var elapsedTime = timerTypeFactor > 0 ? currentTime - startingDate : startingDate - currentTime;
            var valuesUpdated = {};
            valuesUpdated[SECOND_TENTHS] = updateSecondTenths(elapsedTime);
            valuesUpdated[SECONDS] = updateSeconds(elapsedTime);
            valuesUpdated[MINUTES] = updateMinutes(elapsedTime);
            valuesUpdated[HOURS] = updateHours(elapsedTime);
            valuesUpdated[DAYS] = updateDays(elapsedTime);
            return valuesUpdated;
        }
        function roundTimestamp(timestamp) {
            return Math.floor(timestamp / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];
        }
        function dispatchEvents(valuesUpdated) {
            if (valuesUpdated[SECOND_TENTHS]) dispatchEvent("secondTenthsUpdated", eventData);
            if (valuesUpdated[SECONDS]) dispatchEvent("secondsUpdated", eventData);
            if (valuesUpdated[MINUTES]) dispatchEvent("minutesUpdated", eventData);
            if (valuesUpdated[HOURS]) dispatchEvent("hoursUpdated", eventData);
            if (valuesUpdated[DAYS]) dispatchEvent("daysUpdated", eventData);
        }
        function isTargetAchieved(currentDate) {
            return targetValues instanceof Array && currentDate >= targetDate;
        }
        function resetCounters() {
            counters.reset();
            totalCounters.reset();
        }
        function setParams(params) {
            params = params || {};
            precision = checkPrecision(params.precision);
            customCallback = typeof params.callback === "function" ? params.callback : function() {};
            countdown = params.countdown === true;
            timerTypeFactor = countdown === true ? -1 : 1;
            if (_typeof(params.startValues) === "object") setStartValues(params.startValues);
            else startValues = null;
            startingDate = calculateStartingDate();
            updateTimer();
            if (_typeof(params.target) === "object") targetValues = setTarget(params.target);
            else if (countdown) {
                params.target = {
                    seconds: 0
                };
                targetValues = setTarget(params.target);
            } else targetValues = null;
            timerConfig = {
                precision: precision,
                callback: customCallback,
                countdown: _typeof(params) === "object" && params.countdown === true,
                target: targetValues,
                startValues: startValues
            };
            currentParams = params;
        }
        function checkPrecision(precision) {
            precision = typeof precision === "string" ? precision : SECONDS;
            if (!isValidInputValue(precision)) throw new Error("Error in precision parameter: ".concat(precision, " is not a valid value"));
            return precision;
        }
        function isValidInputValue(value) {
            return VALID_INPUT_VALUES.indexOf(value) >= 0;
        }
        function configInputValues(inputValues) {
            var values;
            if (_typeof(inputValues) === "object") {
                if (inputValues instanceof Array) {
                    if (inputValues.length !== 5) throw new Error("Array size not valid");
                    values = inputValues;
                } else {
                    for(var value in inputValues){
                        if (VALID_INPUT_VALUES.indexOf(value) < 0) throw new Error("Error in startValues or target parameter: ".concat(value, " is not a valid input value"));
                    }
                    values = [
                        inputValues.secondTenths || 0,
                        inputValues.seconds || 0,
                        inputValues.minutes || 0,
                        inputValues.hours || 0,
                        inputValues.days || 0
                    ];
                }
            }
            values = values.map(function(value) {
                return parseInt(value, 10);
            });
            var secondTenths = values[SECOND_TENTHS_POSITION];
            var seconds = values[SECONDS_POSITION] + calculateIntegerUnitQuotient(secondTenths, SECOND_TENTHS_PER_SECOND);
            var minutes = values[MINUTES_POSITION] + calculateIntegerUnitQuotient(seconds, SECONDS_PER_MINUTE);
            var hours = values[HOURS_POSITION] + calculateIntegerUnitQuotient(minutes, MINUTES_PER_HOUR);
            var days = values[DAYS_POSITION] + calculateIntegerUnitQuotient(hours, HOURS_PER_DAY);
            values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;
            values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;
            values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;
            values[HOURS_POSITION] = hours % HOURS_PER_DAY;
            values[DAYS_POSITION] = days;
            return values;
        }
        function calculateIntegerUnitQuotient(unit, divisor) {
            var quotient = unit / divisor;
            return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
        }
        function setTarget(inputTarget) {
            if (!inputTarget) return;
            targetValues = configInputValues(inputTarget);
            var targetCounter = calculateTotalCounterFromValues(targetValues);
            targetDate = startingDate + targetCounter.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
            return targetValues;
        }
        function setStartValues(inputStartValues) {
            startValues = configInputValues(inputStartValues);
            counters.secondTenths = startValues[SECOND_TENTHS_POSITION];
            counters.seconds = startValues[SECONDS_POSITION];
            counters.minutes = startValues[MINUTES_POSITION];
            counters.hours = startValues[HOURS_POSITION];
            counters.days = startValues[DAYS_POSITION];
            totalCounters = calculateTotalCounterFromValues(startValues, totalCounters);
        }
        function calculateTotalCounterFromValues(values, outputCounter) {
            var total = outputCounter || {};
            total.days = values[DAYS_POSITION];
            total.hours = total.days * HOURS_PER_DAY + values[HOURS_POSITION];
            total.minutes = total.hours * MINUTES_PER_HOUR + values[MINUTES_POSITION];
            total.seconds = total.minutes * SECONDS_PER_MINUTE + values[SECONDS_POSITION];
            total.secondTenths = total.seconds * SECOND_TENTHS_PER_SECOND + values[[
                SECOND_TENTHS_POSITION
            ]];
            return total;
        }
        /*
     * PUBLIC functions
     */ /**
     * [stop stops the timer and resets the counters. Dispatch stopped event]
     */ function stop() {
            stopTimerAndResetCounters();
            dispatchEvent("stopped", eventData);
        }
        /**
     * [stop stops and starts the timer. Dispatch stopped event]
     */ function reset() {
            stopTimerAndResetCounters();
            setParamsAndStartTimer(currentParams);
            dispatchEvent("reset", eventData);
        }
        /**
     * [start starts the timer configured by the params object. Dispatch started event]
     * @param  {object} params [Configuration parameters]
     */ function start() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            params = _objectSpread2(_objectSpread2({}, defaultParams), params);
            if (isRunning()) return;
            setParamsAndStartTimer(params);
            dispatchEvent("started", eventData);
        }
        /**
     * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.
     * Dispatch paused event]
     * @return {type} [description]
     */ function pause() {
            stopTimer();
            paused = true;
            dispatchEvent("paused", eventData);
        }
        /**
     * [addEventListener Adds event listener to the timer]
     * @param {string} eventType      [event to listen]
     * @param {function} listener   [the event listener function]
     */ function addEventListener(eventType, listener) {
            eventEmitter.on(eventType, listener);
        }
        /**
     * [removeEventListener Removes event listener to the timer]
     * @param  {string} eventType    [event to remove listener]
     * @param  {function} listener [listener to remove]
     */ function removeEventListener(eventType, listener) {
            eventEmitter.removeListener(eventType, listener);
        }
        /**
     * [removeAllEventListeners Removes all events listeners for the given type, no type to remove all types]
     * @param  {string} [eventType]  [event to remove listener]
     */ function removeAllEventListeners(eventType) {
            eventEmitter.removeAllListeners(eventType);
        }
        /**
     * [dispatchEvent dispatches an event]
     * @param  {string} eventType [event to dispatch]
     * @param data
     */ function dispatchEvent(eventType, data) {
            eventEmitter.emit(eventType, data);
        }
        /**
     * [isRunning return true if the timer is running]
     * @return {Boolean}
     */ function isRunning() {
            return running;
        }
        /**
     * [isPaused returns true if the timer is paused]
     * @return {Boolean}
     */ function isPaused() {
            return paused;
        }
        /**
     * [getTimeValues returns the counter with the current timer values]
     * @return {TimeCounter}
     */ function getTimeValues() {
            return counters;
        }
        /**
     * [getTotalTimeValues returns the counter with the current timer total values]
     * @return {TimeCounter}
     */ function getTotalTimeValues() {
            return totalCounters;
        }
        /**
     * [getConfig returns the configuration parameters]
     * @return {type}
     */ function getConfig() {
            return timerConfig;
        }
        /**
     * Public API
     * Definition of Timer instance public functions
     */ if (typeof this !== "undefined") {
            this.start = start;
            this.pause = pause;
            this.stop = stop;
            this.reset = reset;
            this.isRunning = isRunning;
            this.isPaused = isPaused;
            this.getTimeValues = getTimeValues;
            this.getTotalTimeValues = getTotalTimeValues;
            this.getConfig = getConfig;
            this.addEventListener = addEventListener;
            this.on = addEventListener;
            this.removeEventListener = removeEventListener;
            this.removeAllEventListeners = removeAllEventListeners;
            this.off = removeEventListener;
        }
    }
    exports1.Timer = Timer;
    exports1.default = Timer;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{}]},["86oZd","6rimH"], "6rimH", "parcelRequire9680")

//# sourceMappingURL=index.8cfc62b9.js.map
