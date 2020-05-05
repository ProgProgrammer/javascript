// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"libraryStringManagment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringManagment = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringManagment = /*#__PURE__*/function () {
  function StringManagment(object) {
    _classCallCheck(this, StringManagment);

    this.buttonId;
    this.buttons = object.buttons;
    this.tabs = object.tabs;
    this.input = object.input;
    this.blockEditor;
    this.blockPreview;
    this.cloneBlock;
    this.columnEditor = object.columnEditor;
    this.stringsEditorText = object.stringsEditorText;
    this.columnPreview = object.columnPreview;
    this.stringsPreviewText = object.stringsPreviewText;
    this.stringsPreviewDate = object.stringsPreviewDate;
    this.stringsPreviewTime = object.stringsPreviewTime;
    this.date;
    this.elementDate;
    this.variableDate;
    this.day;
    this.month;
    this.year;
    this.hours;
    this.minutes;
  }

  _createClass(StringManagment, [{
    key: "openCloseTabs",
    value: function openCloseTabs() {
      for (this.i = 0; this.i < this.tabs.length; this.i++) {
        this.buttons[this.i].style.background = "transparent";
        this.tabs[this.i].style.display = "none";
      }
    }
  }, {
    key: "tabSwitching",
    value: function tabSwitching(id) {
      this.buttonId = id;
      this.openCloseTabs();
      this.buttons[this.buttonId].style.background = "buttonface";
      this.tabs[this.buttonId].style.display = "flex";
    }
  }, {
    key: "getDate",
    value: function getDate(numberDate, number) {
      this.elementDate = numberDate;
      this.number = number;

      if (this.elementDate < 10) {
        if (this.number === 1) {
          this.elementDate += 1;
        }

        return "0" + this.elementDate;
      } else {
        if (this.number === 1) {
          this.elementDate += 1;
        }

        return this.elementDate;
      }
    }
  }, {
    key: "addDateTime",
    value: function addDateTime(id) {
      this.buttonId = id;
      this.date = new Date();
      this.variableDate = this.date.getDate();
      this.day = this.getDate(this.variableDate);
      this.variableDate = this.date.getMonth();
      this.month = this.getDate(this.variableDate, 1);
      this.year = this.date.getFullYear();
      this.year = String(this.year);
      this.year = this.year.substr(2, 2);
      this.variableDate = this.date.getHours();
      this.hours = this.getDate(this.variableDate);
      this.variableDate = this.date.getMinutes();
      this.minutes = this.getDate(this.variableDate);

      if (this.buttonId === true) {
        this.stringsPreviewDate = document.querySelectorAll(".date");
        this.stringsPreviewTime = document.querySelectorAll(".time");
        this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML = this.day;
        this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += ".";
        this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += this.month;
        this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += ".";
        this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += this.year;
        this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML = this.hours;
        this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML += ":";
        this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML += this.minutes;
      } else {
        this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML = this.day;
        this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += ".";
        this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += this.month;
        this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += ".";
        this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += this.year;
        this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML = this.hours;
        this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML += ":";
        this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML += this.minutes;
      }
    }
  }, {
    key: "addString",
    value: function addString(editorBlock, previewBlock) {
      this.blockEditor = editorBlock;
      this.blockPreview = previewBlock;
      this.stringsEditorText.innerHTML = this.input.value;
      this.stringsPreviewText.innerHTML = this.input.value;
      this.addDateTime();
      this.cloneBlock = this.blockEditor.cloneNode(true);
      this.columnEditor.append(this.cloneBlock);
      this.cloneBlock = this.blockPreview.cloneNode(true);
      this.columnPreview.append(this.cloneBlock);
    }
  }, {
    key: "copyString",
    value: function copyString(editorBlock, previewBlock) {
      this.buttonId = true;
      this.blockEditor = editorBlock;
      this.blockPreview = previewBlock;
      this.cloneBlock = this.blockEditor.cloneNode(true);
      this.columnEditor.append(this.cloneBlock);
      this.cloneBlock = this.blockPreview.cloneNode(true);
      this.columnPreview.append(this.cloneBlock);
      this.addDateTime(this.buttonId);
    }
  }, {
    key: "removeString",
    value: function removeString(editorBlock, previewBlock) {
      this.blockEditor = editorBlock;
      this.blockPreview = previewBlock;
      this.blockEditor.remove();
      this.blockPreview.remove();
    }
  }]);

  return StringManagment;
}();

exports.StringManagment = StringManagment;
},{}],"task.js":[function(require,module,exports) {
"use strict";

var _libraryStringManagment = require("./libraryStringManagment.js");

(function () {
  var stringManagment;
  var objectStringManagment = {};
  objectStringManagment.buttons;
  objectStringManagment.tabs;
  var addButton;
  objectStringManagment.input;
  objectStringManagment.columnEditor;
  objectStringManagment.stringsEditorText;
  objectStringManagment.columnPreview;
  objectStringManagment.stringsPreviewText;
  objectStringManagment.stringsPreviewDate;
  objectStringManagment.stringsPreviewTime;
  objectStringManagment.copy;
  objectStringManagment.delete;
  window.addEventListener('DOMContentLoaded', function () {
    objectStringManagment.buttons = document.querySelectorAll(".button");
    objectStringManagment.tabs = document.querySelectorAll(".tab");
    addButton = document.querySelector(".preview-adding-button");
    objectStringManagment.input = document.querySelector(".preview-adding-input");
    objectStringManagment.columnEditor = document.querySelector(".preview-column");
    objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
    objectStringManagment.stringsEditorText = objectStringManagment.editorBlock[objectStringManagment.editorBlock.length - 1].querySelector(".text");
    objectStringManagment.columnPreview = document.querySelector(".editor-column");
    objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");
    objectStringManagment.stringsPreviewText = objectStringManagment.previewBlock[objectStringManagment.previewBlock.length - 1].querySelector(".text");
    objectStringManagment.stringsPreviewDate = document.querySelectorAll(".date");
    objectStringManagment.stringsPreviewTime = document.querySelectorAll(".time");
    objectStringManagment.copy = document.querySelectorAll(".copy");
    objectStringManagment.delete = document.querySelectorAll(".delete");
    stringManagment = new _libraryStringManagment.StringManagment(objectStringManagment);

    var _loop = function _loop(i) {
      objectStringManagment.buttons[i].addEventListener('click', function () {
        stringManagment.tabSwitching(i);
      });
    };

    for (var i = 0; i < objectStringManagment.buttons.length; i++) {
      _loop(i);
    }

    var copyBlock = function copyBlock() {
      objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
      objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");

      var _loop2 = function _loop2(a) {
        objectStringManagment.copy[a].onclick = function () {
          stringManagment.copyString(objectStringManagment.editorBlock[a], objectStringManagment.previewBlock[a]);
          objectStringManagment.copy = document.querySelectorAll(".copy");
          objectStringManagment.delete = document.querySelectorAll(".delete");
          copyBlock();
          deleteBlock();
        };
      };

      for (var a = 0; a < objectStringManagment.copy.length; a++) {
        _loop2(a);
      }
    };

    var deleteBlock = function deleteBlock() {
      objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
      objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");

      var _loop3 = function _loop3(b) {
        objectStringManagment.delete[b].onclick = function () {
          stringManagment.removeString(objectStringManagment.editorBlock[b], objectStringManagment.previewBlock[b]);
          objectStringManagment.copy = document.querySelectorAll(".copy");
          objectStringManagment.delete = document.querySelectorAll(".delete");
          copyBlock();
          deleteBlock();
          return false;
        };
      };

      for (var b = 0; b < objectStringManagment.delete.length; b++) {
        _loop3(b);
      }
    };

    addButton.addEventListener("click", function () {
      stringManagment.addString(objectStringManagment.editorBlock[objectStringManagment.editorBlock.length - 1], objectStringManagment.previewBlock[objectStringManagment.previewBlock.length - 1]);
      objectStringManagment.copy = document.querySelectorAll(".copy");
      objectStringManagment.delete = document.querySelectorAll(".delete");
      copyBlock();
      deleteBlock();
    });
    copyBlock();
    deleteBlock();
  });
})();
},{"./libraryStringManagment.js":"libraryStringManagment.js"}],"../../../../../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60262" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","task.js"], null)
//# sourceMappingURL=/task.js.map