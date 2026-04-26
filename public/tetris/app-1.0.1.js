(function (modules) {
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) return installedModules[moduleId].exports;
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.loaded = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.p = "";
	return __webpack_require__(0);
})([function (module, exports, __webpack_require__) {
	"use strict";
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _reactDom = __webpack_require__(34);
	var _reactRedux = __webpack_require__(173);
	var _store = __webpack_require__(204);
	var _store2 = _interopRequireDefault(_store);
	var _containers = __webpack_require__(243);
	var _containers2 = _interopRequireDefault(_containers);
	__webpack_require__(215);
	__webpack_require__(308);
	var _unit = __webpack_require__(221);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	(0, _unit.subscribeRecord)(_store2.default);
	(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, {
		store: _store2.default
	}, _react2.default.createElement(_containers2.default, null)), document.getElementById("root"));
}, function (module, exports, __webpack_require__) {
	"use strict";
	module.exports = __webpack_require__(2);
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var ReactBaseClasses = __webpack_require__(4);
	var ReactChildren = __webpack_require__(13);
	var ReactDOMFactories = __webpack_require__(21);
	var ReactElement = __webpack_require__(15);
	var ReactPropTypes = __webpack_require__(22);
	var ReactVersion = __webpack_require__(30);
	var createReactClass = __webpack_require__(31);
	var onlyChild = __webpack_require__(33);
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	if (false) {
		var lowPriorityWarning = require("./lowPriorityWarning");
		var canDefineProperty = require("./canDefineProperty");
		var ReactElementValidator = require("./ReactElementValidator");
		var didWarnPropTypesDeprecated = false;
		createElement = ReactElementValidator.createElement;
		createFactory = ReactElementValidator.createFactory;
		cloneElement = ReactElementValidator.cloneElement;
	}
	var __spread = _assign;
	var createMixin = function (mixin) {
		return mixin;
	};
	if (false) {
		var warnedForSpread = false;
		var warnedForCreateMixin = false;
		__spread = function () {
			lowPriorityWarning(warnedForSpread, "React.__spread is deprecated and should not be used. Use " + "Object.assign directly or another helper function with similar " + "semantics. You may be seeing this warning due to your compiler. " + "See https://fb.me/react-spread-deprecation for more details.");
			warnedForSpread = true;
			return _assign.apply(null, arguments);
		};
		createMixin = function (mixin) {
			lowPriorityWarning(warnedForCreateMixin, "React.createMixin is deprecated and should not be used. " + "In React v16.0, it will be removed. " + "You can use this mixin directly instead. " + "See https://fb.me/createmixin-was-never-implemented for more info.");
			warnedForCreateMixin = true;
			return mixin;
		};
	}
	var React = {
		Children: {
			map: ReactChildren.map,
			forEach: ReactChildren.forEach,
			count: ReactChildren.count,
			toArray: ReactChildren.toArray,
			only: onlyChild
		},
		Component: ReactBaseClasses.Component,
		PureComponent: ReactBaseClasses.PureComponent,
		createElement: createElement,
		cloneElement: cloneElement,
		isValidElement: ReactElement.isValidElement,
		PropTypes: ReactPropTypes,
		createClass: createReactClass,
		createFactory: createFactory,
		createMixin: createMixin,
		DOM: ReactDOMFactories,
		version: ReactVersion,
		__spread: __spread
	};
	if (false) {
		var warnedForCreateClass = false;
		if (canDefineProperty) {
			Object.defineProperty(React, "PropTypes", {
				get: function () {
					lowPriorityWarning(didWarnPropTypesDeprecated, "Accessing PropTypes via the main React package is deprecated," + " and will be removed in  React v16.0." + " Use the latest available v15.* prop-types package from npm instead." + " For info on usage, compatibility, migration and more, see " + "https://fb.me/prop-types-docs");
					didWarnPropTypesDeprecated = true;
					return ReactPropTypes;
				}
			});
			Object.defineProperty(React, "createClass", {
				get: function () {
					lowPriorityWarning(warnedForCreateClass, "Accessing createClass via the main React package is deprecated," + " and will be removed in React v16.0." + " Use a plain JavaScript class instead. If you're not yet " + "ready to migrate, create-react-class v15.* is available " + "on npm as a temporary, drop-in replacement. " + "For more info see https://fb.me/react-create-class");
					warnedForCreateClass = true;
					return createReactClass;
				}
			});
		}
		React.DOM = {};
		var warnedForFactories = false;
		Object.keys(ReactDOMFactories).forEach(function (factory) {
			React.DOM[factory] = function () {
				if (!warnedForFactories) {
					lowPriorityWarning(false, "Accessing factories like React.DOM.%s has been deprecated " + "and will be removed in v16.0+. Use the " + "react-dom-factories package instead. " + " Version 1.0 provides a drop-in replacement." + " For more info, see https://fb.me/react-dom-factories", factory);
					warnedForFactories = true;
				}
				return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
			};
		});
	}
	module.exports = React;
}, function (module, exports) {
	"use strict";
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError("Object.assign cannot be called with null or undefined");
		}
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
			var test1 = new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") {
				return false;
			}
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2["_" + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join("") !== "0123456789") {
				return false;
			}
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
				return false;
			}
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
		return to;
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(5), _assign = __webpack_require__(3);
	var ReactNoopUpdateQueue = __webpack_require__(6);
	var canDefineProperty = __webpack_require__(9);
	var emptyObject = __webpack_require__(10);
	var invariant = __webpack_require__(11);
	var lowPriorityWarning = __webpack_require__(12);
	function ReactComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	ReactComponent.prototype.isReactComponent = {};
	ReactComponent.prototype.setState = function (partialState, callback) {
		!(typeof partialState === "object" || typeof partialState === "function" || partialState == null) ? false ? invariant(false, "setState(...): takes an object of state variables to update or a function which returns an object of state variables.") : _prodInvariant("85") : void 0;
		this.updater.enqueueSetState(this, partialState);
		if (callback) {
			this.updater.enqueueCallback(this, callback, "setState");
		}
	};
	ReactComponent.prototype.forceUpdate = function (callback) {
		this.updater.enqueueForceUpdate(this);
		if (callback) {
			this.updater.enqueueCallback(this, callback, "forceUpdate");
		}
	};
	if (false) {
		var deprecatedAPIs = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."]
		};
		var defineDeprecationWarning = function (methodName, info) {
			if (canDefineProperty) {
				Object.defineProperty(ReactComponent.prototype, methodName, {
					get: function () {
						lowPriorityWarning(false, "%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
						return undefined;
					}
				});
			}
		};
		for (var fnName in deprecatedAPIs) {
			if (deprecatedAPIs.hasOwnProperty(fnName)) {
				defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
			}
		}
	}
	function ReactPureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	function ComponentDummy() { }
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy;
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	module.exports = {
		Component: ReactComponent,
		PureComponent: ReactPureComponent
	};
}, function (module, exports) {
	"use strict";
	function reactProdInvariant(code) {
		var argCount = arguments.length - 1;
		var message = "Minified React error #" + code + "; visit " + "http://facebook.github.io/react/docs/error-decoder.html?invariant=" + code;
		for (var argIdx = 0; argIdx < argCount; argIdx++) {
			message += "&args[]=" + encodeURIComponent(arguments[argIdx + 1]);
		}
		message += " for the full message or use the non-minified dev environment" + " for full errors and additional helpful warnings.";
		var error = new Error(message);
		error.name = "Invariant Violation";
		error.framesToPop = 1;
		throw error;
	}
	module.exports = reactProdInvariant;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var warning = __webpack_require__(7);
	function warnNoop(publicInstance, callerName) {
		if (false) {
			var constructor = publicInstance.constructor;
			process.env.NODE_ENV !== "production" ? warning(false, "%s(...): Can only update a mounted or mounting component. " + "This usually means you called %s() on an unmounted component. " + "This is a no-op. Please check the code for the %s component.", callerName, callerName, constructor && (constructor.displayName || constructor.name) || "ReactClass") : void 0;
		}
	}
	var ReactNoopUpdateQueue = {
		isMounted: function (publicInstance) {
			return false;
		},
		enqueueCallback: function (publicInstance, callback) { },
		enqueueForceUpdate: function (publicInstance) {
			warnNoop(publicInstance, "forceUpdate");
		},
		enqueueReplaceState: function (publicInstance, completeState) {
			warnNoop(publicInstance, "replaceState");
		},
		enqueueSetState: function (publicInstance, partialState) {
			warnNoop(publicInstance, "setState");
		}
	};
	module.exports = ReactNoopUpdateQueue;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var emptyFunction = __webpack_require__(8);
	var warning = emptyFunction;
	if (false) {
		var printWarning = function printWarning(format) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}
			var argIndex = 0;
			var message = "Warning: " + format.replace(/%s/g, function () {
				return args[argIndex++];
			});
			if (typeof console !== "undefined") {
				console.error(message);
			}
			try {
				throw new Error(message);
			} catch (x) { }
		};
		warning = function warning(condition, format) {
			if (format === undefined) {
				throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument");
			}
			if (format.indexOf("Failed Composite propType: ") === 0) {
				return;
			}
			if (!condition) {
				for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
					args[_key2 - 2] = arguments[_key2];
				}
				printWarning.apply(undefined, [format].concat(args));
			}
		};
	}
	module.exports = warning;
}, function (module, exports) {
	"use strict";
	function makeEmptyFunction(arg) {
		return function () {
			return arg;
		};
	}
	var emptyFunction = function emptyFunction() { };
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
		return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
		return arg;
	};
	module.exports = emptyFunction;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var canDefineProperty = false;
	if (false) {
		try {
			Object.defineProperty({}, "x", {
				get: function () { }
			});
			canDefineProperty = true;
		} catch (x) { }
	}
	module.exports = canDefineProperty;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var emptyObject = {};
	if (false) {
		Object.freeze(emptyObject);
	}
	module.exports = emptyObject;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var validateFormat = function validateFormat(format) { };
	if (false) {
		validateFormat = function validateFormat(format) {
			if (format === undefined) {
				throw new Error("invariant requires an error message argument");
			}
		};
	}
	function invariant(condition, format, a, b, c, d, e, f) {
		validateFormat(format);
		if (!condition) {
			var error;
			if (format === undefined) {
				error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
			} else {
				var args = [a, b, c, d, e, f];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function () {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	}
	module.exports = invariant;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var lowPriorityWarning = function () { };
	if (false) {
		var printWarning = function (format) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}
			var argIndex = 0;
			var message = "Warning: " + format.replace(/%s/g, function () {
				return args[argIndex++];
			});
			if (typeof console !== "undefined") {
				console.warn(message);
			}
			try {
				throw new Error(message);
			} catch (x) { }
		};
		lowPriorityWarning = function (condition, format) {
			if (format === undefined) {
				throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument");
			}
			if (!condition) {
				for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
					args[_key2 - 2] = arguments[_key2];
				}
				printWarning.apply(undefined, [format].concat(args));
			}
		};
	}
	module.exports = lowPriorityWarning;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var PooledClass = __webpack_require__(14);
	var ReactElement = __webpack_require__(15);
	var emptyFunction = __webpack_require__(8);
	var traverseAllChildren = __webpack_require__(18);
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
		return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
	}
	function ForEachBookKeeping(forEachFunction, forEachContext) {
		this.func = forEachFunction;
		this.context = forEachContext;
		this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
		this.func = null;
		this.context = null;
		this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	function forEachSingleChild(bookKeeping, child, name) {
		var func = bookKeeping.func, context = bookKeeping.context;
		func.call(context, child, bookKeeping.count++);
	}
	function forEachChildren(children, forEachFunc, forEachContext) {
		if (children == null) {
			return children;
		}
		var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
		traverseAllChildren(children, forEachSingleChild, traverseContext);
		ForEachBookKeeping.release(traverseContext);
	}
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
		this.result = mapResult;
		this.keyPrefix = keyPrefix;
		this.func = mapFunction;
		this.context = mapContext;
		this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
		this.result = null;
		this.keyPrefix = null;
		this.func = null;
		this.context = null;
		this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
		var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
		var mappedChild = func.call(context, child, bookKeeping.count++);
		if (Array.isArray(mappedChild)) {
			mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
		} else if (mappedChild != null) {
			if (ReactElement.isValidElement(mappedChild)) {
				mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey);
			}
			result.push(mappedChild);
		}
	}
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
		var escapedPrefix = "";
		if (prefix != null) {
			escapedPrefix = escapeUserProvidedKey(prefix) + "/";
		}
		var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
		traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
		MapBookKeeping.release(traverseContext);
	}
	function mapChildren(children, func, context) {
		if (children == null) {
			return children;
		}
		var result = [];
		mapIntoWithKeyPrefixInternal(children, result, null, func, context);
		return result;
	}
	function forEachSingleChildDummy(traverseContext, child, name) {
		return null;
	}
	function countChildren(children, context) {
		return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	function toArray(children) {
		var result = [];
		mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
		return result;
	}
	var ReactChildren = {
		forEach: forEachChildren,
		map: mapChildren,
		mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
		count: countChildren,
		toArray: toArray
	};
	module.exports = ReactChildren;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(5);
	var invariant = __webpack_require__(11);
	var oneArgumentPooler = function (copyFieldsFrom) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, copyFieldsFrom);
			return instance;
		} else {
			return new Klass(copyFieldsFrom);
		}
	};
	var twoArgumentPooler = function (a1, a2) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2);
			return instance;
		} else {
			return new Klass(a1, a2);
		}
	};
	var threeArgumentPooler = function (a1, a2, a3) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2, a3);
			return instance;
		} else {
			return new Klass(a1, a2, a3);
		}
	};
	var fourArgumentPooler = function (a1, a2, a3, a4) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2, a3, a4);
			return instance;
		} else {
			return new Klass(a1, a2, a3, a4);
		}
	};
	var standardReleaser = function (instance) {
		var Klass = this;
		!(instance instanceof Klass) ? false ? invariant(false, "Trying to release an instance into a pool of a different type.") : _prodInvariant("25") : void 0;
		instance.destructor();
		if (Klass.instancePool.length < Klass.poolSize) {
			Klass.instancePool.push(instance);
		}
	};
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	var addPoolingTo = function (CopyConstructor, pooler) {
		var NewKlass = CopyConstructor;
		NewKlass.instancePool = [];
		NewKlass.getPooled = pooler || DEFAULT_POOLER;
		if (!NewKlass.poolSize) {
			NewKlass.poolSize = DEFAULT_POOL_SIZE;
		}
		NewKlass.release = standardReleaser;
		return NewKlass;
	};
	var PooledClass = {
		addPoolingTo: addPoolingTo,
		oneArgumentPooler: oneArgumentPooler,
		twoArgumentPooler: twoArgumentPooler,
		threeArgumentPooler: threeArgumentPooler,
		fourArgumentPooler: fourArgumentPooler
	};
	module.exports = PooledClass;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var ReactCurrentOwner = __webpack_require__(16);
	var warning = __webpack_require__(7);
	var canDefineProperty = __webpack_require__(9);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var REACT_ELEMENT_TYPE = __webpack_require__(17);
	var RESERVED_PROPS = {
		key: true,
		ref: true,
		__self: true,
		__source: true
	};
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	function hasValidRef(config) {
		if (false) {
			if (hasOwnProperty.call(config, "ref")) {
				var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
				if (getter && getter.isReactWarning) {
					return false;
				}
			}
		}
		return config.ref !== undefined;
	}
	function hasValidKey(config) {
		if (false) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) {
					return false;
				}
			}
		}
		return config.key !== undefined;
	}
	function defineKeyPropWarningGetter(props, displayName) {
		var warnAboutAccessingKey = function () {
			if (!specialPropKeyWarningShown) {
				specialPropKeyWarningShown = true;
				false ? warning(false, "%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://fb.me/react-special-props)", displayName) : void 0;
			}
		};
		warnAboutAccessingKey.isReactWarning = true;
		Object.defineProperty(props, "key", {
			get: warnAboutAccessingKey,
			configurable: true
		});
	}
	function defineRefPropWarningGetter(props, displayName) {
		var warnAboutAccessingRef = function () {
			if (!specialPropRefWarningShown) {
				specialPropRefWarningShown = true;
				false ? warning(false, "%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://fb.me/react-special-props)", displayName) : void 0;
			}
		};
		warnAboutAccessingRef.isReactWarning = true;
		Object.defineProperty(props, "ref", {
			get: warnAboutAccessingRef,
			configurable: true
		});
	}
	var ReactElement = function (type, key, ref, self, source, owner, props) {
		var element = {
			$$typeof: REACT_ELEMENT_TYPE,
			type: type,
			key: key,
			ref: ref,
			props: props,
			_owner: owner
		};
		if (false) {
			element._store = {};
			if (canDefineProperty) {
				Object.defineProperty(element._store, "validated", {
					configurable: false,
					enumerable: false,
					writable: true,
					value: false
				});
				Object.defineProperty(element, "_self", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: self
				});
				Object.defineProperty(element, "_source", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: source
				});
			} else {
				element._store.validated = false;
				element._self = self;
				element._source = source;
			}
			if (Object.freeze) {
				Object.freeze(element.props);
				Object.freeze(element);
			}
		}
		return element;
	};
	ReactElement.createElement = function (type, config, children) {
		var propName;
		var props = {};
		var key = null;
		var ref = null;
		var self = null;
		var source = null;
		if (config != null) {
			if (hasValidRef(config)) {
				ref = config.ref;
			}
			if (hasValidKey(config)) {
				key = "" + config.key;
			}
			self = config.__self === undefined ? null : config.__self;
			source = config.__source === undefined ? null : config.__source;
			for (propName in config) {
				if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
					props[propName] = config[propName];
				}
			}
		}
		var childrenLength = arguments.length - 2;
		if (childrenLength === 1) {
			props.children = children;
		} else if (childrenLength > 1) {
			var childArray = Array(childrenLength);
			for (var i = 0; i < childrenLength; i++) {
				childArray[i] = arguments[i + 2];
			}
			if (false) {
				if (Object.freeze) {
					Object.freeze(childArray);
				}
			}
			props.children = childArray;
		}
		if (type && type.defaultProps) {
			var defaultProps = type.defaultProps;
			for (propName in defaultProps) {
				if (props[propName] === undefined) {
					props[propName] = defaultProps[propName];
				}
			}
		}
		if (false) {
			if (key || ref) {
				if (typeof props.$$typeof === "undefined" || props.$$typeof !== REACT_ELEMENT_TYPE) {
					var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
					if (key) {
						defineKeyPropWarningGetter(props, displayName);
					}
					if (ref) {
						defineRefPropWarningGetter(props, displayName);
					}
				}
			}
		}
		return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	ReactElement.createFactory = function (type) {
		var factory = ReactElement.createElement.bind(null, type);
		factory.type = type;
		return factory;
	};
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
		var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		return newElement;
	};
	ReactElement.cloneElement = function (element, config, children) {
		var propName;
		var props = _assign({}, element.props);
		var key = element.key;
		var ref = element.ref;
		var self = element._self;
		var source = element._source;
		var owner = element._owner;
		if (config != null) {
			if (hasValidRef(config)) {
				ref = config.ref;
				owner = ReactCurrentOwner.current;
			}
			if (hasValidKey(config)) {
				key = "" + config.key;
			}
			var defaultProps;
			if (element.type && element.type.defaultProps) {
				defaultProps = element.type.defaultProps;
			}
			for (propName in config) {
				if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
					if (config[propName] === undefined && defaultProps !== undefined) {
						props[propName] = defaultProps[propName];
					} else {
						props[propName] = config[propName];
					}
				}
			}
		}
		var childrenLength = arguments.length - 2;
		if (childrenLength === 1) {
			props.children = children;
		} else if (childrenLength > 1) {
			var childArray = Array(childrenLength);
			for (var i = 0; i < childrenLength; i++) {
				childArray[i] = arguments[i + 2];
			}
			props.children = childArray;
		}
		return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	ReactElement.isValidElement = function (object) {
		return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	module.exports = ReactElement;
}, function (module, exports) {
	"use strict";
	var ReactCurrentOwner = {
		current: null
	};
	module.exports = ReactCurrentOwner;
}, function (module, exports) {
	"use strict";
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
	module.exports = REACT_ELEMENT_TYPE;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(5);
	var ReactCurrentOwner = __webpack_require__(16);
	var REACT_ELEMENT_TYPE = __webpack_require__(17);
	var getIteratorFn = __webpack_require__(19);
	var invariant = __webpack_require__(11);
	var KeyEscapeUtils = __webpack_require__(20);
	var warning = __webpack_require__(7);
	var SEPARATOR = ".";
	var SUBSEPARATOR = ":";
	var didWarnAboutMaps = false;
	function getComponentKey(component, index) {
		if (component && typeof component === "object" && component.key != null) {
			return KeyEscapeUtils.escape(component.key);
		}
		return index.toString(36);
	}
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
		var type = typeof children;
		if (type === "undefined" || type === "boolean") {
			children = null;
		}
		if (children === null || type === "string" || type === "number" || type === "object" && children.$$typeof === REACT_ELEMENT_TYPE) {
			callback(traverseContext, children, nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
			return 1;
		}
		var child;
		var nextName;
		var subtreeCount = 0;
		var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
		if (Array.isArray(children)) {
			for (var i = 0; i < children.length; i++) {
				child = children[i];
				nextName = nextNamePrefix + getComponentKey(child, i);
				subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
			}
		} else {
			var iteratorFn = getIteratorFn(children);
			if (iteratorFn) {
				var iterator = iteratorFn.call(children);
				var step;
				if (iteratorFn !== children.entries) {
					var ii = 0;
					while (!(step = iterator.next()).done) {
						child = step.value;
						nextName = nextNamePrefix + getComponentKey(child, ii++);
						subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
					}
				} else {
					if (false) {
						var mapsAsChildrenAddendum = "";
						if (ReactCurrentOwner.current) {
							var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
							if (mapsAsChildrenOwnerName) {
								mapsAsChildrenAddendum = " Check the render method of `" + mapsAsChildrenOwnerName + "`.";
							}
						}
						process.env.NODE_ENV !== "production" ? warning(didWarnAboutMaps, "Using Maps as children is not yet fully supported. It is an " + "experimental feature that might be removed. Convert it to a " + "sequence / iterable of keyed ReactElements instead.%s", mapsAsChildrenAddendum) : void 0;
						didWarnAboutMaps = true;
					}
					while (!(step = iterator.next()).done) {
						var entry = step.value;
						if (entry) {
							child = entry[1];
							nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
							subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
						}
					}
				}
			} else if (type === "object") {
				var addendum = "";
				if (false) {
					addendum = " If you meant to render a collection of children, use an array " + "instead or wrap the object using createFragment(object) from the " + "React add-ons.";
					if (children._isReactElement) {
						addendum = " It looks like you're using an element created by a different " + "version of React. Make sure to use only one copy of React.";
					}
					if (ReactCurrentOwner.current) {
						var name = ReactCurrentOwner.current.getName();
						if (name) {
							addendum += " Check the render method of `" + name + "`.";
						}
					}
				}
				var childrenString = String(children);
				true ? false ? invariant(false, "Objects are not valid as a React child (found: %s).%s", childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum) : _prodInvariant("31", childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum) : void 0;
			}
		}
		return subtreeCount;
	}
	function traverseAllChildren(children, callback, traverseContext) {
		if (children == null) {
			return 0;
		}
		return traverseAllChildrenImpl(children, "", callback, traverseContext);
	}
	module.exports = traverseAllChildren;
}, function (module, exports) {
	"use strict";
	var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = "@@iterator";
	function getIteratorFn(maybeIterable) {
		var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
		if (typeof iteratorFn === "function") {
			return iteratorFn;
		}
	}
	module.exports = getIteratorFn;
}, function (module, exports) {
	"use strict";
	function escape(key) {
		var escapeRegex = /[=:]/g;
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		var escapedString = ("" + key).replace(escapeRegex, function (match) {
			return escaperLookup[match];
		});
		return "$" + escapedString;
	}
	function unescape(key) {
		var unescapeRegex = /(=0|=2)/g;
		var unescaperLookup = {
			"=0": "=",
			"=2": ":"
		};
		var keySubstring = key[0] === "." && key[1] === "$" ? key.substring(2) : key.substring(1);
		return ("" + keySubstring).replace(unescapeRegex, function (match) {
			return unescaperLookup[match];
		});
	}
	var KeyEscapeUtils = {
		escape: escape,
		unescape: unescape
	};
	module.exports = KeyEscapeUtils;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactElement = __webpack_require__(15);
	var createDOMFactory = ReactElement.createFactory;
	if (false) {
		var ReactElementValidator = require("./ReactElementValidator");
		createDOMFactory = ReactElementValidator.createFactory;
	}
	var ReactDOMFactories = {
		a: createDOMFactory("a"),
		abbr: createDOMFactory("abbr"),
		address: createDOMFactory("address"),
		area: createDOMFactory("area"),
		article: createDOMFactory("article"),
		aside: createDOMFactory("aside"),
		audio: createDOMFactory("audio"),
		b: createDOMFactory("b"),
		base: createDOMFactory("base"),
		bdi: createDOMFactory("bdi"),
		bdo: createDOMFactory("bdo"),
		big: createDOMFactory("big"),
		blockquote: createDOMFactory("blockquote"),
		body: createDOMFactory("body"),
		br: createDOMFactory("br"),
		button: createDOMFactory("button"),
		canvas: createDOMFactory("canvas"),
		caption: createDOMFactory("caption"),
		cite: createDOMFactory("cite"),
		code: createDOMFactory("code"),
		col: createDOMFactory("col"),
		colgroup: createDOMFactory("colgroup"),
		data: createDOMFactory("data"),
		datalist: createDOMFactory("datalist"),
		dd: createDOMFactory("dd"),
		del: createDOMFactory("del"),
		details: createDOMFactory("details"),
		dfn: createDOMFactory("dfn"),
		dialog: createDOMFactory("dialog"),
		div: createDOMFactory("div"),
		dl: createDOMFactory("dl"),
		dt: createDOMFactory("dt"),
		em: createDOMFactory("em"),
		embed: createDOMFactory("embed"),
		fieldset: createDOMFactory("fieldset"),
		figcaption: createDOMFactory("figcaption"),
		figure: createDOMFactory("figure"),
		footer: createDOMFactory("footer"),
		form: createDOMFactory("form"),
		h1: createDOMFactory("h1"),
		h2: createDOMFactory("h2"),
		h3: createDOMFactory("h3"),
		h4: createDOMFactory("h4"),
		h5: createDOMFactory("h5"),
		h6: createDOMFactory("h6"),
		head: createDOMFactory("head"),
		header: createDOMFactory("header"),
		hgroup: createDOMFactory("hgroup"),
		hr: createDOMFactory("hr"),
		html: createDOMFactory("html"),
		i: createDOMFactory("i"),
		iframe: createDOMFactory("iframe"),
		img: createDOMFactory("img"),
		input: createDOMFactory("input"),
		ins: createDOMFactory("ins"),
		kbd: createDOMFactory("kbd"),
		keygen: createDOMFactory("keygen"),
		label: createDOMFactory("label"),
		legend: createDOMFactory("legend"),
		li: createDOMFactory("li"),
		link: createDOMFactory("link"),
		main: createDOMFactory("main"),
		map: createDOMFactory("map"),
		mark: createDOMFactory("mark"),
		menu: createDOMFactory("menu"),
		menuitem: createDOMFactory("menuitem"),
		meta: createDOMFactory("meta"),
		meter: createDOMFactory("meter"),
		nav: createDOMFactory("nav"),
		noscript: createDOMFactory("noscript"),
		object: createDOMFactory("object"),
		ol: createDOMFactory("ol"),
		optgroup: createDOMFactory("optgroup"),
		option: createDOMFactory("option"),
		output: createDOMFactory("output"),
		p: createDOMFactory("p"),
		param: createDOMFactory("param"),
		picture: createDOMFactory("picture"),
		pre: createDOMFactory("pre"),
		progress: createDOMFactory("progress"),
		q: createDOMFactory("q"),
		rp: createDOMFactory("rp"),
		rt: createDOMFactory("rt"),
		ruby: createDOMFactory("ruby"),
		s: createDOMFactory("s"),
		samp: createDOMFactory("samp"),
		script: createDOMFactory("script"),
		section: createDOMFactory("section"),
		select: createDOMFactory("select"),
		small: createDOMFactory("small"),
		source: createDOMFactory("source"),
		span: createDOMFactory("span"),
		strong: createDOMFactory("strong"),
		style: createDOMFactory("style"),
		sub: createDOMFactory("sub"),
		summary: createDOMFactory("summary"),
		sup: createDOMFactory("sup"),
		table: createDOMFactory("table"),
		tbody: createDOMFactory("tbody"),
		td: createDOMFactory("td"),
		textarea: createDOMFactory("textarea"),
		tfoot: createDOMFactory("tfoot"),
		th: createDOMFactory("th"),
		thead: createDOMFactory("thead"),
		time: createDOMFactory("time"),
		title: createDOMFactory("title"),
		tr: createDOMFactory("tr"),
		track: createDOMFactory("track"),
		u: createDOMFactory("u"),
		ul: createDOMFactory("ul"),
		var: createDOMFactory("var"),
		video: createDOMFactory("video"),
		wbr: createDOMFactory("wbr"),
		circle: createDOMFactory("circle"),
		clipPath: createDOMFactory("clipPath"),
		defs: createDOMFactory("defs"),
		ellipse: createDOMFactory("ellipse"),
		g: createDOMFactory("g"),
		image: createDOMFactory("image"),
		line: createDOMFactory("line"),
		linearGradient: createDOMFactory("linearGradient"),
		mask: createDOMFactory("mask"),
		path: createDOMFactory("path"),
		pattern: createDOMFactory("pattern"),
		polygon: createDOMFactory("polygon"),
		polyline: createDOMFactory("polyline"),
		radialGradient: createDOMFactory("radialGradient"),
		rect: createDOMFactory("rect"),
		stop: createDOMFactory("stop"),
		svg: createDOMFactory("svg"),
		text: createDOMFactory("text"),
		tspan: createDOMFactory("tspan")
	};
	module.exports = ReactDOMFactories;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _require = __webpack_require__(15), isValidElement = _require.isValidElement;
	var factory = __webpack_require__(23);
	module.exports = factory(isValidElement);
}, function (module, exports, __webpack_require__) {
	"use strict";
	var factory = __webpack_require__(24);
	module.exports = function (isValidElement) {
		var throwOnDirectAccess = false;
		return factory(isValidElement, throwOnDirectAccess);
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactIs = __webpack_require__(25);
	var assign = __webpack_require__(3);
	var ReactPropTypesSecret = __webpack_require__(27);
	var has = __webpack_require__(28);
	var checkPropTypes = __webpack_require__(29);
	var printWarning = function () { };
	if (false) {
		printWarning = function (text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") {
				console.error(message);
			}
			try {
				throw new Error(message);
			} catch (x) { }
		};
	}
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function (isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") {
				return iteratorFn;
			}
		}
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		function is(x, y) {
			if (x === y) {
				return x !== 0 || 1 / x === 1 / y;
			} else {
				return x !== x && y !== y;
			}
		}
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			if (false) {
				var manualPropTypeCallCache = {};
				var manualPropTypeWarningCount = 0;
			}
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use `PropTypes.checkPropTypes()` to call them. " + "Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (false) {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation " + "function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated " + "and will throw in the standalone `prop-types` package. " + "You may be seeing this warning due to a third-party PropTypes " + "library. See https://fb.me/react-warning-dont-call-proptypes " + "for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) {
							return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						}
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else {
					return validate(props, propName, componentName, location, propFullName);
				}
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), {
						expectedType: expectedType
					});
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") {
					return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				}
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) {
						return error;
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (false) {
					if (arguments.length > 1) {
						printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. " + "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
					} else {
						printWarning("Invalid argument supplied to oneOf, expected an array.");
					}
				}
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) {
					if (is(propValue, expectedValues[i])) {
						return null;
					}
				}
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					var type = getPreciseType(value);
					if (type === "symbol") {
						return String(value);
					}
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") {
					return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				}
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") {
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				}
				for (var key in propValue) {
					if (has(propValue, key)) {
						var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error instanceof Error) {
							return error;
						}
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				false ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but " + "received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) {
						return null;
					}
					if (checkerResult.data && has(checkerResult.data, "expectedType")) {
						expectedTypes.push(checkerResult.data.expectedType);
					}
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) {
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") {
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				}
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") {
						return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					}
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) {
						return error;
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") {
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				}
				var allKeys = assign({}, props[propName], shapeTypes);
				for (var key in allKeys) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") {
						return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					}
					if (!checker) {
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`." + "\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					}
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) {
						return error;
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined":
					return true;

				case "boolean":
					return !propValue;

				case "object":
					if (Array.isArray(propValue)) {
						return propValue.every(isNode);
					}
					if (propValue === null || isValidElement(propValue)) {
						return true;
					}
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) {
								if (!isNode(step.value)) {
									return false;
								}
							}
						} else {
							while (!(step = iterator.next()).done) {
								var entry = step.value;
								if (entry) {
									if (!isNode(entry[1])) {
										return false;
									}
								}
							}
						}
					} else {
						return false;
					}
					return true;

				default:
					return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") {
				return true;
			}
			if (!propValue) {
				return false;
			}
			if (propValue["@@toStringTag"] === "Symbol") {
				return true;
			}
			if (typeof Symbol === "function" && propValue instanceof Symbol) {
				return true;
			}
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) {
				return "array";
			}
			if (propValue instanceof RegExp) {
				return "object";
			}
			if (isSymbol(propType, propValue)) {
				return "symbol";
			}
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) {
				return "" + propValue;
			}
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) {
					return "date";
				} else if (propValue instanceof RegExp) {
					return "regexp";
				}
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object":
					return "an " + type;

				case "boolean":
				case "date":
				case "regexp":
					return "a " + type;

				default:
					return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) {
				return ANONYMOUS;
			}
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	if (true) {
		module.exports = __webpack_require__(26);
	} else {
		module.exports = require("./cjs/react-is.development.js");
	}
}, function (module, exports) {
	"use strict";
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c:
					switch (a = a.type, a) {
						case l:
						case m:
						case e:
						case g:
						case f:
						case p:
							return a;

						default:
							switch (a = a && a.$$typeof, a) {
								case k:
								case n:
								case t:
								case r:
								case h:
									return a;

								default:
									return u;
							}
					}

				case d:
					return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function (a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function (a) {
		return z(a) === k;
	};
	exports.isContextProvider = function (a) {
		return z(a) === h;
	};
	exports.isElement = function (a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function (a) {
		return z(a) === n;
	};
	exports.isFragment = function (a) {
		return z(a) === e;
	};
	exports.isLazy = function (a) {
		return z(a) === t;
	};
	exports.isMemo = function (a) {
		return z(a) === r;
	};
	exports.isPortal = function (a) {
		return z(a) === d;
	};
	exports.isProfiler = function (a) {
		return z(a) === g;
	};
	exports.isStrictMode = function (a) {
		return z(a) === f;
	};
	exports.isSuspense = function (a) {
		return z(a) === p;
	};
	exports.isValidElementType = function (a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}, function (module, exports) {
	"use strict";
	var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	module.exports = ReactPropTypesSecret;
}, function (module, exports) {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}, function (module, exports, __webpack_require__) {
	"use strict";
	var printWarning = function () { };
	if (false) {
		var ReactPropTypesSecret = require("./lib/ReactPropTypesSecret");
		var loggedTypeFailures = {};
		var has = require("./lib/has");
		printWarning = function (text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") {
				console.error(message);
			}
			try {
				throw new Error(message);
			} catch (x) { }
		};
	}
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		if (false) {
			for (var typeSpecName in typeSpecs) {
				if (has(typeSpecs, typeSpecName)) {
					var error;
					try {
						if (typeof typeSpecs[typeSpecName] !== "function") {
							var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
							err.name = "Invariant Violation";
							throw err;
						}
						error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
					} catch (ex) {
						error = ex;
					}
					if (error && !(error instanceof Error)) {
						printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker " + "function must return `null` or an `Error` but returned a " + typeof error + ". " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).");
					}
					if (error instanceof Error && !(error.message in loggedTypeFailures)) {
						loggedTypeFailures[error.message] = true;
						var stack = getStack ? getStack() : "";
						printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
					}
				}
			}
		}
	}
	checkPropTypes.resetWarningCache = function () {
		if (false) {
			loggedTypeFailures = {};
		}
	};
	module.exports = checkPropTypes;
}, function (module, exports) {
	"use strict";
	module.exports = "15.7.0";
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _require = __webpack_require__(4), Component = _require.Component;
	var _require2 = __webpack_require__(15), isValidElement = _require2.isValidElement;
	var ReactNoopUpdateQueue = __webpack_require__(6);
	var factory = __webpack_require__(32);
	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var emptyObject = {};
	if (false) {
		Object.freeze(emptyObject);
	}
	var validateFormat = function validateFormat(format) { };
	if (false) {
		validateFormat = function validateFormat(format) {
			if (format === undefined) {
				throw new Error("invariant requires an error message argument");
			}
		};
	}
	function _invariant(condition, format, a, b, c, d, e, f) {
		validateFormat(format);
		if (!condition) {
			var error;
			if (format === undefined) {
				error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
			} else {
				var args = [a, b, c, d, e, f];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function () {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	}
	var warning = function () { };
	if (false) {
		var printWarning = function printWarning(format) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}
			var argIndex = 0;
			var message = "Warning: " + format.replace(/%s/g, function () {
				return args[argIndex++];
			});
			if (typeof console !== "undefined") {
				console.error(message);
			}
			try {
				throw new Error(message);
			} catch (x) { }
		};
		warning = function warning(condition, format) {
			if (format === undefined) {
				throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument");
			}
			if (format.indexOf("Failed Composite propType: ") === 0) {
				return;
			}
			if (!condition) {
				for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
					args[_key2 - 2] = arguments[_key2];
				}
				printWarning.apply(undefined, [format].concat(args));
			}
		};
	}
	var MIXINS_KEY = "mixins";
	function identity(fn) {
		return fn;
	}
	var ReactPropTypeLocationNames;
	if (false) {
		ReactPropTypeLocationNames = {
			prop: "prop",
			context: "context",
			childContext: "child context"
		};
	} else {
		ReactPropTypeLocationNames = {};
	}
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
		var injectedMixins = [];
		var ReactClassInterface = {
			mixins: "DEFINE_MANY",
			statics: "DEFINE_MANY",
			propTypes: "DEFINE_MANY",
			contextTypes: "DEFINE_MANY",
			childContextTypes: "DEFINE_MANY",
			getDefaultProps: "DEFINE_MANY_MERGED",
			getInitialState: "DEFINE_MANY_MERGED",
			getChildContext: "DEFINE_MANY_MERGED",
			render: "DEFINE_ONCE",
			componentWillMount: "DEFINE_MANY",
			componentDidMount: "DEFINE_MANY",
			componentWillReceiveProps: "DEFINE_MANY",
			shouldComponentUpdate: "DEFINE_ONCE",
			componentWillUpdate: "DEFINE_MANY",
			componentDidUpdate: "DEFINE_MANY",
			componentWillUnmount: "DEFINE_MANY",
			UNSAFE_componentWillMount: "DEFINE_MANY",
			UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
			UNSAFE_componentWillUpdate: "DEFINE_MANY",
			updateComponent: "OVERRIDE_BASE"
		};
		var ReactClassStaticInterface = {
			getDerivedStateFromProps: "DEFINE_MANY_MERGED"
		};
		var RESERVED_SPEC_KEYS = {
			displayName: function (Constructor, displayName) {
				Constructor.displayName = displayName;
			},
			mixins: function (Constructor, mixins) {
				if (mixins) {
					for (var i = 0; i < mixins.length; i++) {
						mixSpecIntoComponent(Constructor, mixins[i]);
					}
				}
			},
			childContextTypes: function (Constructor, childContextTypes) {
				if (false) {
					validateTypeDef(Constructor, childContextTypes, "childContext");
				}
				Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
			},
			contextTypes: function (Constructor, contextTypes) {
				if (false) {
					validateTypeDef(Constructor, contextTypes, "context");
				}
				Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
			},
			getDefaultProps: function (Constructor, getDefaultProps) {
				if (Constructor.getDefaultProps) {
					Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
				} else {
					Constructor.getDefaultProps = getDefaultProps;
				}
			},
			propTypes: function (Constructor, propTypes) {
				if (false) {
					validateTypeDef(Constructor, propTypes, "prop");
				}
				Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
			},
			statics: function (Constructor, statics) {
				mixStaticSpecIntoComponent(Constructor, statics);
			},
			autobind: function () { }
		};
		function validateTypeDef(Constructor, typeDef, location) {
			for (var propName in typeDef) {
				if (typeDef.hasOwnProperty(propName)) {
					if (false) {
						warning(typeof typeDef[propName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from " + "React.PropTypes.", Constructor.displayName || "ReactClass", ReactPropTypeLocationNames[location], propName);
					}
				}
			}
		}
		function validateMethodOverride(isAlreadyDefined, name) {
			var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
			if (ReactClassMixin.hasOwnProperty(name)) {
				_invariant(specPolicy === "OVERRIDE_BASE", "ReactClassInterface: You are attempting to override " + "`%s` from your class specification. Ensure that your method names " + "do not overlap with React methods.", name);
			}
			if (isAlreadyDefined) {
				_invariant(specPolicy === "DEFINE_MANY" || specPolicy === "DEFINE_MANY_MERGED", "ReactClassInterface: You are attempting to define " + "`%s` on your component more than once. This conflict may be due " + "to a mixin.", name);
			}
		}
		function mixSpecIntoComponent(Constructor, spec) {
			if (!spec) {
				if (false) {
					var typeofSpec = typeof spec;
					var isMixinValid = typeofSpec === "object" && spec !== null;
					if (process.env.NODE_ENV !== "production") {
						warning(isMixinValid, "%s: You're attempting to include a mixin that is either null " + "or not an object. Check the mixins included by the component, " + "as well as any mixins they include themselves. " + "Expected object but got %s.", Constructor.displayName || "ReactClass", spec === null ? null : typeofSpec);
					}
				}
				return;
			}
			_invariant(typeof spec !== "function", "ReactClass: You're attempting to " + "use a component class or function as a mixin. Instead, just use a " + "regular object.");
			_invariant(!isValidElement(spec), "ReactClass: You're attempting to " + "use a component as a mixin. Instead, just use a regular object.");
			var proto = Constructor.prototype;
			var autoBindPairs = proto.__reactAutoBindPairs;
			if (spec.hasOwnProperty(MIXINS_KEY)) {
				RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
			}
			for (var name in spec) {
				if (!spec.hasOwnProperty(name)) {
					continue;
				}
				if (name === MIXINS_KEY) {
					continue;
				}
				var property = spec[name];
				var isAlreadyDefined = proto.hasOwnProperty(name);
				validateMethodOverride(isAlreadyDefined, name);
				if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
					RESERVED_SPEC_KEYS[name](Constructor, property);
				} else {
					var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
					var isFunction = typeof property === "function";
					var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
					if (shouldAutoBind) {
						autoBindPairs.push(name, property);
						proto[name] = property;
					} else {
						if (isAlreadyDefined) {
							var specPolicy = ReactClassInterface[name];
							_invariant(isReactClassMethod && (specPolicy === "DEFINE_MANY_MERGED" || specPolicy === "DEFINE_MANY"), "ReactClass: Unexpected spec policy %s for key %s " + "when mixing in component specs.", specPolicy, name);
							if (specPolicy === "DEFINE_MANY_MERGED") {
								proto[name] = createMergedResultFunction(proto[name], property);
							} else if (specPolicy === "DEFINE_MANY") {
								proto[name] = createChainedFunction(proto[name], property);
							}
						} else {
							proto[name] = property;
							if (false) {
								if (typeof property === "function" && spec.displayName) {
									proto[name].displayName = spec.displayName + "_" + name;
								}
							}
						}
					}
				}
			}
		}
		function mixStaticSpecIntoComponent(Constructor, statics) {
			if (!statics) {
				return;
			}
			for (var name in statics) {
				var property = statics[name];
				if (!statics.hasOwnProperty(name)) {
					continue;
				}
				var isReserved = name in RESERVED_SPEC_KEYS;
				_invariant(!isReserved, "ReactClass: You are attempting to define a reserved " + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + "as an instance property instead; it will still be accessible on the " + "constructor.", name);
				var isAlreadyDefined = name in Constructor;
				if (isAlreadyDefined) {
					var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;
					_invariant(specPolicy === "DEFINE_MANY_MERGED", "ReactClass: You are attempting to define " + "`%s` on your component more than once. This conflict may be " + "due to a mixin.", name);
					Constructor[name] = createMergedResultFunction(Constructor[name], property);
					return;
				}
				Constructor[name] = property;
			}
		}
		function mergeIntoWithNoDuplicateKeys(one, two) {
			_invariant(one && two && typeof one === "object" && typeof two === "object", "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
			for (var key in two) {
				if (two.hasOwnProperty(key)) {
					_invariant(one[key] === undefined, "mergeIntoWithNoDuplicateKeys(): " + "Tried to merge two objects with the same key: `%s`. This conflict " + "may be due to a mixin; in particular, this may be caused by two " + "getInitialState() or getDefaultProps() methods returning objects " + "with clashing keys.", key);
					one[key] = two[key];
				}
			}
			return one;
		}
		function createMergedResultFunction(one, two) {
			return function mergedResult() {
				var a = one.apply(this, arguments);
				var b = two.apply(this, arguments);
				if (a == null) {
					return b;
				} else if (b == null) {
					return a;
				}
				var c = {};
				mergeIntoWithNoDuplicateKeys(c, a);
				mergeIntoWithNoDuplicateKeys(c, b);
				return c;
			};
		}
		function createChainedFunction(one, two) {
			return function chainedFunction() {
				one.apply(this, arguments);
				two.apply(this, arguments);
			};
		}
		function bindAutoBindMethod(component, method) {
			var boundMethod = method.bind(component);
			if (false) {
				boundMethod.__reactBoundContext = component;
				boundMethod.__reactBoundMethod = method;
				boundMethod.__reactBoundArguments = null;
				var componentName = component.constructor.displayName;
				var _bind = boundMethod.bind;
				boundMethod.bind = function (newThis) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}
					if (newThis !== component && newThis !== null) {
						if (process.env.NODE_ENV !== "production") {
							warning(false, "bind(): React component methods may only be bound to the " + "component instance. See %s", componentName);
						}
					} else if (!args.length) {
						if (process.env.NODE_ENV !== "production") {
							warning(false, "bind(): You are binding a component method to the component. " + "React does this for you automatically in a high-performance " + "way, so you can safely remove this call. See %s", componentName);
						}
						return boundMethod;
					}
					var reboundMethod = _bind.apply(boundMethod, arguments);
					reboundMethod.__reactBoundContext = component;
					reboundMethod.__reactBoundMethod = method;
					reboundMethod.__reactBoundArguments = args;
					return reboundMethod;
				};
			}
			return boundMethod;
		}
		function bindAutoBindMethods(component) {
			var pairs = component.__reactAutoBindPairs;
			for (var i = 0; i < pairs.length; i += 2) {
				var autoBindKey = pairs[i];
				var method = pairs[i + 1];
				component[autoBindKey] = bindAutoBindMethod(component, method);
			}
		}
		var IsMountedPreMixin = {
			componentDidMount: function () {
				this.__isMounted = true;
			}
		};
		var IsMountedPostMixin = {
			componentWillUnmount: function () {
				this.__isMounted = false;
			}
		};
		var ReactClassMixin = {
			replaceState: function (newState, callback) {
				this.updater.enqueueReplaceState(this, newState, callback);
			},
			isMounted: function () {
				if (false) {
					warning(this.__didWarnIsMounted, "%s: isMounted is deprecated. Instead, make sure to clean up " + "subscriptions and pending requests in componentWillUnmount to " + "prevent memory leaks.", this.constructor && this.constructor.displayName || this.name || "Component");
					this.__didWarnIsMounted = true;
				}
				return !!this.__isMounted;
			}
		};
		var ReactClassComponent = function () { };
		_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
		function createClass(spec) {
			var Constructor = identity(function (props, context, updater) {
				if (false) {
					warning(this instanceof Constructor, "Something is calling a React component directly. Use a factory or " + "JSX instead. See: https://fb.me/react-legacyfactory");
				}
				if (this.__reactAutoBindPairs.length) {
					bindAutoBindMethods(this);
				}
				this.props = props;
				this.context = context;
				this.refs = emptyObject;
				this.updater = updater || ReactNoopUpdateQueue;
				this.state = null;
				var initialState = this.getInitialState ? this.getInitialState() : null;
				if (false) {
					if (initialState === undefined && this.getInitialState._isMockFunction) {
						initialState = null;
					}
				}
				_invariant(typeof initialState === "object" && !Array.isArray(initialState), "%s.getInitialState(): must return an object or null", Constructor.displayName || "ReactCompositeComponent");
				this.state = initialState;
			});
			Constructor.prototype = new ReactClassComponent;
			Constructor.prototype.constructor = Constructor;
			Constructor.prototype.__reactAutoBindPairs = [];
			injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
			mixSpecIntoComponent(Constructor, IsMountedPreMixin);
			mixSpecIntoComponent(Constructor, spec);
			mixSpecIntoComponent(Constructor, IsMountedPostMixin);
			if (Constructor.getDefaultProps) {
				Constructor.defaultProps = Constructor.getDefaultProps();
			}
			if (false) {
				if (Constructor.getDefaultProps) {
					Constructor.getDefaultProps.isReactClassApproved = {};
				}
				if (Constructor.prototype.getInitialState) {
					Constructor.prototype.getInitialState.isReactClassApproved = {};
				}
			}
			_invariant(Constructor.prototype.render, "createClass(...): Class specification must implement a `render` method.");
			if (false) {
				warning(!Constructor.prototype.componentShouldUpdate, "%s has a method called " + "componentShouldUpdate(). Did you mean shouldComponentUpdate()? " + "The name is phrased as a question because the function is " + "expected to return a value.", spec.displayName || "A component");
				warning(!Constructor.prototype.componentWillRecieveProps, "%s has a method called " + "componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", spec.displayName || "A component");
				warning(!Constructor.prototype.UNSAFE_componentWillRecieveProps, "%s has a method called UNSAFE_componentWillRecieveProps(). " + "Did you mean UNSAFE_componentWillReceiveProps()?", spec.displayName || "A component");
			}
			for (var methodName in ReactClassInterface) {
				if (!Constructor.prototype[methodName]) {
					Constructor.prototype[methodName] = null;
				}
			}
			return Constructor;
		}
		return createClass;
	}
	module.exports = factory;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(5);
	var ReactElement = __webpack_require__(15);
	var invariant = __webpack_require__(11);
	function onlyChild(children) {
		!ReactElement.isValidElement(children) ? false ? invariant(false, "React.Children.only expected to receive a single React element child.") : _prodInvariant("143") : void 0;
		return children;
	}
	module.exports = onlyChild;
}, function (module, exports, __webpack_require__) {
	"use strict";
	module.exports = __webpack_require__(35);
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDefaultInjection = __webpack_require__(40);
	var ReactMount = __webpack_require__(164);
	var ReactReconciler = __webpack_require__(61);
	var ReactUpdates = __webpack_require__(58);
	var ReactVersion = __webpack_require__(169);
	var findDOMNode = __webpack_require__(170);
	var getHostComponentFromComposite = __webpack_require__(171);
	var renderSubtreeIntoContainer = __webpack_require__(172);
	var warning = __webpack_require__(7);
	ReactDefaultInjection.inject();
	var ReactDOM = {
		findDOMNode: findDOMNode,
		render: ReactMount.render,
		unmountComponentAtNode: ReactMount.unmountComponentAtNode,
		version: ReactVersion,
		unstable_batchedUpdates: ReactUpdates.batchedUpdates,
		unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === "function") {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
			ComponentTree: {
				getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
				getNodeFromInstance: function (inst) {
					if (inst._renderedComponent) {
						inst = getHostComponentFromComposite(inst);
					}
					if (inst) {
						return ReactDOMComponentTree.getNodeFromInstance(inst);
					} else {
						return null;
					}
				}
			},
			Mount: ReactMount,
			Reconciler: ReactReconciler
		});
	}
	if (false) {
		var ExecutionEnvironment = require("fbjs/lib/ExecutionEnvironment");
		if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
				if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
					var showFileUrlMessage = window.location.protocol.indexOf("http") === -1 && navigator.userAgent.indexOf("Firefox") === -1;
					console.debug("Download the React DevTools " + (showFileUrlMessage ? "and use an HTTP server (instead of a file: URL) " : "") + "for a better development experience: " + "https://fb.me/react-devtools");
				}
			}
			var testFunc = function testFn() { };
			process.env.NODE_ENV !== "production" ? warning((testFunc.name || testFunc.toString()).indexOf("testFn") !== -1, "It looks like you're using a minified copy of the development build " + "of React. When deploying React apps to production, make sure to use " + "the production build which skips development warnings and is faster. " + "See https://fb.me/react-minification for more details.") : void 0;
			var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
			process.env.NODE_ENV !== "production" ? warning(!ieCompatibilityMode, "Internet Explorer is running in compatibility mode; please add the " + "following tag to your HTML to prevent this from happening: " + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
			var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.trim];
			for (var i = 0; i < expectedFeatures.length; i++) {
				if (!expectedFeatures[i]) {
					process.env.NODE_ENV !== "production" ? warning(false, "One or more ES5 shims expected by React are not available: " + "https://fb.me/react-warning-polyfills") : void 0;
					break;
				}
			}
		}
	}
	if (false) {
		var ReactInstrumentation = require("./ReactInstrumentation");
		var ReactDOMUnknownPropertyHook = require("./ReactDOMUnknownPropertyHook");
		var ReactDOMNullInputValuePropHook = require("./ReactDOMNullInputValuePropHook");
		var ReactDOMInvalidARIAHook = require("./ReactDOMInvalidARIAHook");
		ReactInstrumentation.debugTool.addHook(ReactDOMUnknownPropertyHook);
		ReactInstrumentation.debugTool.addHook(ReactDOMNullInputValuePropHook);
		ReactInstrumentation.debugTool.addHook(ReactDOMInvalidARIAHook);
	}
	module.exports = ReactDOM;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var DOMProperty = __webpack_require__(38);
	var ReactDOMComponentFlags = __webpack_require__(39);
	var invariant = __webpack_require__(11);
	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var Flags = ReactDOMComponentFlags;
	var internalInstanceKey = "__reactInternalInstance$" + Math.random().toString(36).slice(2);
	function shouldPrecacheNode(node, nodeID) {
		return node.nodeType === 1 && node.getAttribute(ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === " react-text: " + nodeID + " " || node.nodeType === 8 && node.nodeValue === " react-empty: " + nodeID + " ";
	}
	function getRenderedHostOrTextFromComponent(component) {
		var rendered;
		while (rendered = component._renderedComponent) {
			component = rendered;
		}
		return component;
	}
	function precacheNode(inst, node) {
		var hostInst = getRenderedHostOrTextFromComponent(inst);
		hostInst._hostNode = node;
		node[internalInstanceKey] = hostInst;
	}
	function uncacheNode(inst) {
		var node = inst._hostNode;
		if (node) {
			delete node[internalInstanceKey];
			inst._hostNode = null;
		}
	}
	function precacheChildNodes(inst, node) {
		if (inst._flags & Flags.hasCachedChildNodes) {
			return;
		}
		var children = inst._renderedChildren;
		var childNode = node.firstChild;
		outer: for (var name in children) {
			if (!children.hasOwnProperty(name)) {
				continue;
			}
			var childInst = children[name];
			var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
			if (childID === 0) {
				continue;
			}
			for (; childNode !== null; childNode = childNode.nextSibling) {
				if (shouldPrecacheNode(childNode, childID)) {
					precacheNode(childInst, childNode);
					continue outer;
				}
			}
			true ? false ? invariant(false, "Unable to find element with ID %s.", childID) : _prodInvariant("32", childID) : void 0;
		}
		inst._flags |= Flags.hasCachedChildNodes;
	}
	function getClosestInstanceFromNode(node) {
		if (node[internalInstanceKey]) {
			return node[internalInstanceKey];
		}
		var parents = [];
		while (!node[internalInstanceKey]) {
			parents.push(node);
			if (node.parentNode) {
				node = node.parentNode;
			} else {
				return null;
			}
		}
		var closest;
		var inst;
		for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
			closest = inst;
			if (parents.length) {
				precacheChildNodes(inst, node);
			}
		}
		return closest;
	}
	function getInstanceFromNode(node) {
		var inst = getClosestInstanceFromNode(node);
		if (inst != null && inst._hostNode === node) {
			return inst;
		} else {
			return null;
		}
	}
	function getNodeFromInstance(inst) {
		!(inst._hostNode !== undefined) ? false ? invariant(false, "getNodeFromInstance: Invalid argument.") : _prodInvariant("33") : void 0;
		if (inst._hostNode) {
			return inst._hostNode;
		}
		var parents = [];
		while (!inst._hostNode) {
			parents.push(inst);
			!inst._hostParent ? false ? invariant(false, "React DOM tree root should always have a node reference.") : _prodInvariant("34") : void 0;
			inst = inst._hostParent;
		}
		for (; parents.length; inst = parents.pop()) {
			precacheChildNodes(inst, inst._hostNode);
		}
		return inst._hostNode;
	}
	var ReactDOMComponentTree = {
		getClosestInstanceFromNode: getClosestInstanceFromNode,
		getInstanceFromNode: getInstanceFromNode,
		getNodeFromInstance: getNodeFromInstance,
		precacheChildNodes: precacheChildNodes,
		precacheNode: precacheNode,
		uncacheNode: uncacheNode
	};
	module.exports = ReactDOMComponentTree;
}, function (module, exports) {
	"use strict";
	function reactProdInvariant(code) {
		var argCount = arguments.length - 1;
		var message = "Minified React error #" + code + "; visit " + "http://facebook.github.io/react/docs/error-decoder.html?invariant=" + code;
		for (var argIdx = 0; argIdx < argCount; argIdx++) {
			message += "&args[]=" + encodeURIComponent(arguments[argIdx + 1]);
		}
		message += " for the full message or use the non-minified dev environment" + " for full errors and additional helpful warnings.";
		var error = new Error(message);
		error.name = "Invariant Violation";
		error.framesToPop = 1;
		throw error;
	}
	module.exports = reactProdInvariant;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	function checkMask(value, bitmask) {
		return (value & bitmask) === bitmask;
	}
	var DOMPropertyInjection = {
		MUST_USE_PROPERTY: 1,
		HAS_BOOLEAN_VALUE: 4,
		HAS_NUMERIC_VALUE: 8,
		HAS_POSITIVE_NUMERIC_VALUE: 16 | 8,
		HAS_OVERLOADED_BOOLEAN_VALUE: 32,
		injectDOMPropertyConfig: function (domPropertyConfig) {
			var Injection = DOMPropertyInjection;
			var Properties = domPropertyConfig.Properties || {};
			var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
			var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
			var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
			var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
			if (domPropertyConfig.isCustomAttribute) {
				DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
			}
			for (var propName in Properties) {
				!!DOMProperty.properties.hasOwnProperty(propName) ? false ? invariant(false, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", propName) : _prodInvariant("48", propName) : void 0;
				var lowerCased = propName.toLowerCase();
				var propConfig = Properties[propName];
				var propertyInfo = {
					attributeName: lowerCased,
					attributeNamespace: null,
					propertyName: propName,
					mutationMethod: null,
					mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
					hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
					hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
					hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
					hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
				};
				!(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? false ? invariant(false, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", propName) : _prodInvariant("50", propName) : void 0;
				if (false) {
					DOMProperty.getPossibleStandardName[lowerCased] = propName;
				}
				if (DOMAttributeNames.hasOwnProperty(propName)) {
					var attributeName = DOMAttributeNames[propName];
					propertyInfo.attributeName = attributeName;
					if (false) {
						DOMProperty.getPossibleStandardName[attributeName] = propName;
					}
				}
				if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
					propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
				}
				if (DOMPropertyNames.hasOwnProperty(propName)) {
					propertyInfo.propertyName = DOMPropertyNames[propName];
				}
				if (DOMMutationMethods.hasOwnProperty(propName)) {
					propertyInfo.mutationMethod = DOMMutationMethods[propName];
				}
				DOMProperty.properties[propName] = propertyInfo;
			}
		}
	};
	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	var DOMProperty = {
		ID_ATTRIBUTE_NAME: "data-reactid",
		ROOT_ATTRIBUTE_NAME: "data-reactroot",
		ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
		ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
		properties: {},
		getPossibleStandardName: false ? {
			autofocus: "autoFocus"
		} : null,
		_isCustomAttributeFunctions: [],
		isCustomAttribute: function (attributeName) {
			for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
				var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
				if (isCustomAttributeFn(attributeName)) {
					return true;
				}
			}
			return false;
		},
		injection: DOMPropertyInjection
	};
	module.exports = DOMProperty;
}, function (module, exports) {
	"use strict";
	var ReactDOMComponentFlags = {
		hasCachedChildNodes: 1 << 0
	};
	module.exports = ReactDOMComponentFlags;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ARIADOMPropertyConfig = __webpack_require__(41);
	var BeforeInputEventPlugin = __webpack_require__(42);
	var ChangeEventPlugin = __webpack_require__(57);
	var DefaultEventPluginOrder = __webpack_require__(70);
	var EnterLeaveEventPlugin = __webpack_require__(71);
	var HTMLDOMPropertyConfig = __webpack_require__(76);
	var ReactComponentBrowserEnvironment = __webpack_require__(77);
	var ReactDOMComponent = __webpack_require__(90);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMEmptyComponent = __webpack_require__(135);
	var ReactDOMTreeTraversal = __webpack_require__(136);
	var ReactDOMTextComponent = __webpack_require__(137);
	var ReactDefaultBatchingStrategy = __webpack_require__(138);
	var ReactEventListener = __webpack_require__(139);
	var ReactInjection = __webpack_require__(142);
	var ReactReconcileTransaction = __webpack_require__(143);
	var SVGDOMPropertyConfig = __webpack_require__(151);
	var SelectEventPlugin = __webpack_require__(152);
	var SimpleEventPlugin = __webpack_require__(153);
	var alreadyInjected = false;
	function inject() {
		if (alreadyInjected) {
			return;
		}
		alreadyInjected = true;
		ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
		ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
		ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
		ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
		ReactInjection.EventPluginHub.injectEventPluginsByName({
			SimpleEventPlugin: SimpleEventPlugin,
			EnterLeaveEventPlugin: EnterLeaveEventPlugin,
			ChangeEventPlugin: ChangeEventPlugin,
			SelectEventPlugin: SelectEventPlugin,
			BeforeInputEventPlugin: BeforeInputEventPlugin
		});
		ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);
		ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);
		ReactInjection.DOMProperty.injectDOMPropertyConfig(ARIADOMPropertyConfig);
		ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
		ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
		ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
			return new ReactDOMEmptyComponent(instantiate);
		});
		ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
		ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
		ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	}
	module.exports = {
		inject: inject
	};
}, function (module, exports) {
	"use strict";
	var ARIADOMPropertyConfig = {
		Properties: {
			"aria-current": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0
		},
		DOMAttributeNames: {},
		DOMPropertyNames: {}
	};
	module.exports = ARIADOMPropertyConfig;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPropagators = __webpack_require__(43);
	var ExecutionEnvironment = __webpack_require__(50);
	var FallbackCompositionState = __webpack_require__(51);
	var SyntheticCompositionEvent = __webpack_require__(54);
	var SyntheticInputEvent = __webpack_require__(56);
	var END_KEYCODES = [9, 13, 27, 32];
	var START_KEYCODE = 229;
	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && "CompositionEvent" in window;
	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && "documentMode" in document) {
		documentMode = document.documentMode;
	}
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && "TextEvent" in window && !documentMode && !isPresto();
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
	function isPresto() {
		var opera = window.opera;
		return typeof opera === "object" && typeof opera.version === "function" && parseInt(opera.version(), 10) <= 12;
	}
	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
	var eventTypes = {
		beforeInput: {
			phasedRegistrationNames: {
				bubbled: "onBeforeInput",
				captured: "onBeforeInputCapture"
			},
			dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
		},
		compositionEnd: {
			phasedRegistrationNames: {
				bubbled: "onCompositionEnd",
				captured: "onCompositionEndCapture"
			},
			dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
		},
		compositionStart: {
			phasedRegistrationNames: {
				bubbled: "onCompositionStart",
				captured: "onCompositionStartCapture"
			},
			dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
		},
		compositionUpdate: {
			phasedRegistrationNames: {
				bubbled: "onCompositionUpdate",
				captured: "onCompositionUpdateCapture"
			},
			dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
		}
	};
	var hasSpaceKeypress = false;
	function isKeypressCommand(nativeEvent) {
		return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}
	function getCompositionEventType(topLevelType) {
		switch (topLevelType) {
			case "topCompositionStart":
				return eventTypes.compositionStart;

			case "topCompositionEnd":
				return eventTypes.compositionEnd;

			case "topCompositionUpdate":
				return eventTypes.compositionUpdate;
		}
	}
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
		return topLevelType === "topKeyDown" && nativeEvent.keyCode === START_KEYCODE;
	}
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
		switch (topLevelType) {
			case "topKeyUp":
				return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;

			case "topKeyDown":
				return nativeEvent.keyCode !== START_KEYCODE;

			case "topKeyPress":
			case "topMouseDown":
			case "topBlur":
				return true;

			default:
				return false;
		}
	}
	function getDataFromCustomEvent(nativeEvent) {
		var detail = nativeEvent.detail;
		if (typeof detail === "object" && "data" in detail) {
			return detail.data;
		}
		return null;
	}
	var currentComposition = null;
	function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
		var eventType;
		var fallbackData;
		if (canUseCompositionEvent) {
			eventType = getCompositionEventType(topLevelType);
		} else if (!currentComposition) {
			if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
				eventType = eventTypes.compositionStart;
			}
		} else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
			eventType = eventTypes.compositionEnd;
		}
		if (!eventType) {
			return null;
		}
		if (useFallbackCompositionData) {
			if (!currentComposition && eventType === eventTypes.compositionStart) {
				currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
			} else if (eventType === eventTypes.compositionEnd) {
				if (currentComposition) {
					fallbackData = currentComposition.getData();
				}
			}
		}
		var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
		if (fallbackData) {
			event.data = fallbackData;
		} else {
			var customData = getDataFromCustomEvent(nativeEvent);
			if (customData !== null) {
				event.data = customData;
			}
		}
		EventPropagators.accumulateTwoPhaseDispatches(event);
		return event;
	}
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
		switch (topLevelType) {
			case "topCompositionEnd":
				return getDataFromCustomEvent(nativeEvent);

			case "topKeyPress":
				var which = nativeEvent.which;
				if (which !== SPACEBAR_CODE) {
					return null;
				}
				hasSpaceKeypress = true;
				return SPACEBAR_CHAR;

			case "topTextInput":
				var chars = nativeEvent.data;
				if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
					return null;
				}
				return chars;

			default:
				return null;
		}
	}
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
		if (currentComposition) {
			if (topLevelType === "topCompositionEnd" || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
				var chars = currentComposition.getData();
				FallbackCompositionState.release(currentComposition);
				currentComposition = null;
				return chars;
			}
			return null;
		}
		switch (topLevelType) {
			case "topPaste":
				return null;

			case "topKeyPress":
				if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
					return String.fromCharCode(nativeEvent.which);
				}
				return null;

			case "topCompositionEnd":
				return useFallbackCompositionData ? null : nativeEvent.data;

			default:
				return null;
		}
	}
	function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
		var chars;
		if (canUseTextInputEvent) {
			chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
		} else {
			chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
		}
		if (!chars) {
			return null;
		}
		var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
		event.data = chars;
		EventPropagators.accumulateTwoPhaseDispatches(event);
		return event;
	}
	var BeforeInputEventPlugin = {
		eventTypes: eventTypes,
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
		}
	};
	module.exports = BeforeInputEventPlugin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPluginHub = __webpack_require__(44);
	var EventPluginUtils = __webpack_require__(46);
	var accumulateInto = __webpack_require__(48);
	var forEachAccumulated = __webpack_require__(49);
	var warning = __webpack_require__(7);
	var getListener = EventPluginHub.getListener;
	function listenerAtPhase(inst, event, propagationPhase) {
		var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
		return getListener(inst, registrationName);
	}
	function accumulateDirectionalDispatches(inst, phase, event) {
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(inst, "Dispatching inst must not be null") : void 0;
		}
		var listener = listenerAtPhase(inst, event, phase);
		if (listener) {
			event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
			event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
		}
	}
	function accumulateTwoPhaseDispatchesSingle(event) {
		if (event && event.dispatchConfig.phasedRegistrationNames) {
			EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
		}
	}
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
		if (event && event.dispatchConfig.phasedRegistrationNames) {
			var targetInst = event._targetInst;
			var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
			EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
		}
	}
	function accumulateDispatches(inst, ignoredDirection, event) {
		if (event && event.dispatchConfig.registrationName) {
			var registrationName = event.dispatchConfig.registrationName;
			var listener = getListener(inst, registrationName);
			if (listener) {
				event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
				event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
			}
		}
	}
	function accumulateDirectDispatchesSingle(event) {
		if (event && event.dispatchConfig.registrationName) {
			accumulateDispatches(event._targetInst, null, event);
		}
	}
	function accumulateTwoPhaseDispatches(events) {
		forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}
	function accumulateTwoPhaseDispatchesSkipTarget(events) {
		forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}
	function accumulateEnterLeaveDispatches(leave, enter, from, to) {
		EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
	}
	function accumulateDirectDispatches(events) {
		forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}
	var EventPropagators = {
		accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
		accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
		accumulateDirectDispatches: accumulateDirectDispatches,
		accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};
	module.exports = EventPropagators;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var EventPluginRegistry = __webpack_require__(45);
	var EventPluginUtils = __webpack_require__(46);
	var ReactErrorUtils = __webpack_require__(47);
	var accumulateInto = __webpack_require__(48);
	var forEachAccumulated = __webpack_require__(49);
	var invariant = __webpack_require__(11);
	var listenerBank = {};
	var eventQueue = null;
	var executeDispatchesAndRelease = function (event, simulated) {
		if (event) {
			EventPluginUtils.executeDispatchesInOrder(event, simulated);
			if (!event.isPersistent()) {
				event.constructor.release(event);
			}
		}
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
		return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
		return executeDispatchesAndRelease(e, false);
	};
	var getDictionaryKey = function (inst) {
		return "." + inst._rootNodeID;
	};
	function isInteractive(tag) {
		return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
	}
	function shouldPreventMouseEvent(name, type, props) {
		switch (name) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
				return !!(props.disabled && isInteractive(type));

			default:
				return false;
		}
	}
	var EventPluginHub = {
		injection: {
			injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
			injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
		},
		putListener: function (inst, registrationName, listener) {
			!(typeof listener === "function") ? false ? invariant(false, "Expected %s listener to be a function, instead got type %s", registrationName, typeof listener) : _prodInvariant("94", registrationName, typeof listener) : void 0;
			var key = getDictionaryKey(inst);
			var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
			bankForRegistrationName[key] = listener;
			var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
			if (PluginModule && PluginModule.didPutListener) {
				PluginModule.didPutListener(inst, registrationName, listener);
			}
		},
		getListener: function (inst, registrationName) {
			var bankForRegistrationName = listenerBank[registrationName];
			if (shouldPreventMouseEvent(registrationName, inst._currentElement.type, inst._currentElement.props)) {
				return null;
			}
			var key = getDictionaryKey(inst);
			return bankForRegistrationName && bankForRegistrationName[key];
		},
		deleteListener: function (inst, registrationName) {
			var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
			if (PluginModule && PluginModule.willDeleteListener) {
				PluginModule.willDeleteListener(inst, registrationName);
			}
			var bankForRegistrationName = listenerBank[registrationName];
			if (bankForRegistrationName) {
				var key = getDictionaryKey(inst);
				delete bankForRegistrationName[key];
			}
		},
		deleteAllListeners: function (inst) {
			var key = getDictionaryKey(inst);
			for (var registrationName in listenerBank) {
				if (!listenerBank.hasOwnProperty(registrationName)) {
					continue;
				}
				if (!listenerBank[registrationName][key]) {
					continue;
				}
				var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
				if (PluginModule && PluginModule.willDeleteListener) {
					PluginModule.willDeleteListener(inst, registrationName);
				}
				delete listenerBank[registrationName][key];
			}
		},
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			var events;
			var plugins = EventPluginRegistry.plugins;
			for (var i = 0; i < plugins.length; i++) {
				var possiblePlugin = plugins[i];
				if (possiblePlugin) {
					var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
					if (extractedEvents) {
						events = accumulateInto(events, extractedEvents);
					}
				}
			}
			return events;
		},
		enqueueEvents: function (events) {
			if (events) {
				eventQueue = accumulateInto(eventQueue, events);
			}
		},
		processEventQueue: function (simulated) {
			var processingEventQueue = eventQueue;
			eventQueue = null;
			if (simulated) {
				forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
			} else {
				forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
			}
			!!eventQueue ? false ? invariant(false, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.") : _prodInvariant("95") : void 0;
			ReactErrorUtils.rethrowCaughtError();
		},
		__purge: function () {
			listenerBank = {};
		},
		__getListenerBank: function () {
			return listenerBank;
		}
	};
	module.exports = EventPluginHub;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	var eventPluginOrder = null;
	var namesToPlugins = {};
	function recomputePluginOrdering() {
		if (!eventPluginOrder) {
			return;
		}
		for (var pluginName in namesToPlugins) {
			var pluginModule = namesToPlugins[pluginName];
			var pluginIndex = eventPluginOrder.indexOf(pluginName);
			!(pluginIndex > -1) ? false ? invariant(false, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", pluginName) : _prodInvariant("96", pluginName) : void 0;
			if (EventPluginRegistry.plugins[pluginIndex]) {
				continue;
			}
			!pluginModule.extractEvents ? false ? invariant(false, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", pluginName) : _prodInvariant("97", pluginName) : void 0;
			EventPluginRegistry.plugins[pluginIndex] = pluginModule;
			var publishedEvents = pluginModule.eventTypes;
			for (var eventName in publishedEvents) {
				!publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? false ? invariant(false, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", eventName, pluginName) : _prodInvariant("98", eventName, pluginName) : void 0;
			}
		}
	}
	function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
		!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? false ? invariant(false, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", eventName) : _prodInvariant("99", eventName) : void 0;
		EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
		var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
		if (phasedRegistrationNames) {
			for (var phaseName in phasedRegistrationNames) {
				if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
					var phasedRegistrationName = phasedRegistrationNames[phaseName];
					publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
				}
			}
			return true;
		} else if (dispatchConfig.registrationName) {
			publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
			return true;
		}
		return false;
	}
	function publishRegistrationName(registrationName, pluginModule, eventName) {
		!!EventPluginRegistry.registrationNameModules[registrationName] ? false ? invariant(false, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", registrationName) : _prodInvariant("100", registrationName) : void 0;
		EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
		EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;
		if (false) {
			var lowerCasedName = registrationName.toLowerCase();
			EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;
			if (registrationName === "onDoubleClick") {
				EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
			}
		}
	}
	var EventPluginRegistry = {
		plugins: [],
		eventNameDispatchConfigs: {},
		registrationNameModules: {},
		registrationNameDependencies: {},
		possibleRegistrationNames: false ? {} : null,
		injectEventPluginOrder: function (injectedEventPluginOrder) {
			!!eventPluginOrder ? false ? invariant(false, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.") : _prodInvariant("101") : void 0;
			eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
			recomputePluginOrdering();
		},
		injectEventPluginsByName: function (injectedNamesToPlugins) {
			var isOrderingDirty = false;
			for (var pluginName in injectedNamesToPlugins) {
				if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
					continue;
				}
				var pluginModule = injectedNamesToPlugins[pluginName];
				if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
					!!namesToPlugins[pluginName] ? false ? invariant(false, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", pluginName) : _prodInvariant("102", pluginName) : void 0;
					namesToPlugins[pluginName] = pluginModule;
					isOrderingDirty = true;
				}
			}
			if (isOrderingDirty) {
				recomputePluginOrdering();
			}
		},
		getPluginModuleForEvent: function (event) {
			var dispatchConfig = event.dispatchConfig;
			if (dispatchConfig.registrationName) {
				return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
			}
			if (dispatchConfig.phasedRegistrationNames !== undefined) {
				var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
				for (var phase in phasedRegistrationNames) {
					if (!phasedRegistrationNames.hasOwnProperty(phase)) {
						continue;
					}
					var pluginModule = EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
					if (pluginModule) {
						return pluginModule;
					}
				}
			}
			return null;
		},
		_resetEventPlugins: function () {
			eventPluginOrder = null;
			for (var pluginName in namesToPlugins) {
				if (namesToPlugins.hasOwnProperty(pluginName)) {
					delete namesToPlugins[pluginName];
				}
			}
			EventPluginRegistry.plugins.length = 0;
			var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
			for (var eventName in eventNameDispatchConfigs) {
				if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
					delete eventNameDispatchConfigs[eventName];
				}
			}
			var registrationNameModules = EventPluginRegistry.registrationNameModules;
			for (var registrationName in registrationNameModules) {
				if (registrationNameModules.hasOwnProperty(registrationName)) {
					delete registrationNameModules[registrationName];
				}
			}
			if (false) {
				var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
				for (var lowerCasedName in possibleRegistrationNames) {
					if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
						delete possibleRegistrationNames[lowerCasedName];
					}
				}
			}
		}
	};
	module.exports = EventPluginRegistry;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactErrorUtils = __webpack_require__(47);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	var ComponentTree;
	var TreeTraversal;
	var injection = {
		injectComponentTree: function (Injected) {
			ComponentTree = Injected;
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, "EventPluginUtils.injection.injectComponentTree(...): Injected " + "module is missing getNodeFromInstance or getInstanceFromNode.") : void 0;
			}
		},
		injectTreeTraversal: function (Injected) {
			TreeTraversal = Injected;
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, "EventPluginUtils.injection.injectTreeTraversal(...): Injected " + "module is missing isAncestor or getLowestCommonAncestor.") : void 0;
			}
		}
	};
	function isEndish(topLevelType) {
		return topLevelType === "topMouseUp" || topLevelType === "topTouchEnd" || topLevelType === "topTouchCancel";
	}
	function isMoveish(topLevelType) {
		return topLevelType === "topMouseMove" || topLevelType === "topTouchMove";
	}
	function isStartish(topLevelType) {
		return topLevelType === "topMouseDown" || topLevelType === "topTouchStart";
	}
	var validateEventDispatches;
	if (false) {
		validateEventDispatches = function (event) {
			var dispatchListeners = event._dispatchListeners;
			var dispatchInstances = event._dispatchInstances;
			var listenersIsArr = Array.isArray(dispatchListeners);
			var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
			var instancesIsArr = Array.isArray(dispatchInstances);
			var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
			process.env.NODE_ENV !== "production" ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, "EventPluginUtils: Invalid `event`.") : void 0;
		};
	}
	function executeDispatch(event, simulated, listener, inst) {
		var type = event.type || "unknown-event";
		event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
		if (simulated) {
			ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
		} else {
			ReactErrorUtils.invokeGuardedCallback(type, listener, event);
		}
		event.currentTarget = null;
	}
	function executeDispatchesInOrder(event, simulated) {
		var dispatchListeners = event._dispatchListeners;
		var dispatchInstances = event._dispatchInstances;
		if (false) {
			validateEventDispatches(event);
		}
		if (Array.isArray(dispatchListeners)) {
			for (var i = 0; i < dispatchListeners.length; i++) {
				if (event.isPropagationStopped()) {
					break;
				}
				executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
			}
		} else if (dispatchListeners) {
			executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
		}
		event._dispatchListeners = null;
		event._dispatchInstances = null;
	}
	function executeDispatchesInOrderStopAtTrueImpl(event) {
		var dispatchListeners = event._dispatchListeners;
		var dispatchInstances = event._dispatchInstances;
		if (false) {
			validateEventDispatches(event);
		}
		if (Array.isArray(dispatchListeners)) {
			for (var i = 0; i < dispatchListeners.length; i++) {
				if (event.isPropagationStopped()) {
					break;
				}
				if (dispatchListeners[i](event, dispatchInstances[i])) {
					return dispatchInstances[i];
				}
			}
		} else if (dispatchListeners) {
			if (dispatchListeners(event, dispatchInstances)) {
				return dispatchInstances;
			}
		}
		return null;
	}
	function executeDispatchesInOrderStopAtTrue(event) {
		var ret = executeDispatchesInOrderStopAtTrueImpl(event);
		event._dispatchInstances = null;
		event._dispatchListeners = null;
		return ret;
	}
	function executeDirectDispatch(event) {
		if (false) {
			validateEventDispatches(event);
		}
		var dispatchListener = event._dispatchListeners;
		var dispatchInstance = event._dispatchInstances;
		!!Array.isArray(dispatchListener) ? false ? invariant(false, "executeDirectDispatch(...): Invalid `event`.") : _prodInvariant("103") : void 0;
		event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
		var res = dispatchListener ? dispatchListener(event) : null;
		event.currentTarget = null;
		event._dispatchListeners = null;
		event._dispatchInstances = null;
		return res;
	}
	function hasDispatches(event) {
		return !!event._dispatchListeners;
	}
	var EventPluginUtils = {
		isEndish: isEndish,
		isMoveish: isMoveish,
		isStartish: isStartish,
		executeDirectDispatch: executeDirectDispatch,
		executeDispatchesInOrder: executeDispatchesInOrder,
		executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
		hasDispatches: hasDispatches,
		getInstanceFromNode: function (node) {
			return ComponentTree.getInstanceFromNode(node);
		},
		getNodeFromInstance: function (node) {
			return ComponentTree.getNodeFromInstance(node);
		},
		isAncestor: function (a, b) {
			return TreeTraversal.isAncestor(a, b);
		},
		getLowestCommonAncestor: function (a, b) {
			return TreeTraversal.getLowestCommonAncestor(a, b);
		},
		getParentInstance: function (inst) {
			return TreeTraversal.getParentInstance(inst);
		},
		traverseTwoPhase: function (target, fn, arg) {
			return TreeTraversal.traverseTwoPhase(target, fn, arg);
		},
		traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
			return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
		},
		injection: injection
	};
	module.exports = EventPluginUtils;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var caughtError = null;
	function invokeGuardedCallback(name, func, a) {
		try {
			func(a);
		} catch (x) {
			if (caughtError === null) {
				caughtError = x;
			}
		}
	}
	var ReactErrorUtils = {
		invokeGuardedCallback: invokeGuardedCallback,
		invokeGuardedCallbackWithCatch: invokeGuardedCallback,
		rethrowCaughtError: function () {
			if (caughtError) {
				var error = caughtError;
				caughtError = null;
				throw error;
			}
		}
	};
	if (false) {
		if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
			var fakeNode = document.createElement("react");
			ReactErrorUtils.invokeGuardedCallback = function (name, func, a) {
				var boundFunc = function () {
					func(a);
				};
				var evtType = "react-" + name;
				fakeNode.addEventListener(evtType, boundFunc, false);
				var evt = document.createEvent("Event");
				evt.initEvent(evtType, false, false);
				fakeNode.dispatchEvent(evt);
				fakeNode.removeEventListener(evtType, boundFunc, false);
			};
		}
	}
	module.exports = ReactErrorUtils;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	function accumulateInto(current, next) {
		!(next != null) ? false ? invariant(false, "accumulateInto(...): Accumulated items must not be null or undefined.") : _prodInvariant("30") : void 0;
		if (current == null) {
			return next;
		}
		if (Array.isArray(current)) {
			if (Array.isArray(next)) {
				current.push.apply(current, next);
				return current;
			}
			current.push(next);
			return current;
		}
		if (Array.isArray(next)) {
			return [current].concat(next);
		}
		return [current, next];
	}
	module.exports = accumulateInto;
}, function (module, exports) {
	"use strict";
	function forEachAccumulated(arr, cb, scope) {
		if (Array.isArray(arr)) {
			arr.forEach(cb, scope);
		} else if (arr) {
			cb.call(scope, arr);
		}
	}
	module.exports = forEachAccumulated;
}, function (module, exports) {
	"use strict";
	var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	var ExecutionEnvironment = {
		canUseDOM: canUseDOM,
		canUseWorkers: typeof Worker !== "undefined",
		canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
		canUseViewport: canUseDOM && !!window.screen,
		isInWorker: !canUseDOM
	};
	module.exports = ExecutionEnvironment;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var PooledClass = __webpack_require__(52);
	var getTextContentAccessor = __webpack_require__(53);
	function FallbackCompositionState(root) {
		this._root = root;
		this._startText = this.getText();
		this._fallbackText = null;
	}
	_assign(FallbackCompositionState.prototype, {
		destructor: function () {
			this._root = null;
			this._startText = null;
			this._fallbackText = null;
		},
		getText: function () {
			if ("value" in this._root) {
				return this._root.value;
			}
			return this._root[getTextContentAccessor()];
		},
		getData: function () {
			if (this._fallbackText) {
				return this._fallbackText;
			}
			var start;
			var startValue = this._startText;
			var startLength = startValue.length;
			var end;
			var endValue = this.getText();
			var endLength = endValue.length;
			for (start = 0; start < startLength; start++) {
				if (startValue[start] !== endValue[start]) {
					break;
				}
			}
			var minEnd = startLength - start;
			for (end = 1; end <= minEnd; end++) {
				if (startValue[startLength - end] !== endValue[endLength - end]) {
					break;
				}
			}
			var sliceTail = end > 1 ? 1 - end : undefined;
			this._fallbackText = endValue.slice(start, sliceTail);
			return this._fallbackText;
		}
	});
	PooledClass.addPoolingTo(FallbackCompositionState);
	module.exports = FallbackCompositionState;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	var oneArgumentPooler = function (copyFieldsFrom) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, copyFieldsFrom);
			return instance;
		} else {
			return new Klass(copyFieldsFrom);
		}
	};
	var twoArgumentPooler = function (a1, a2) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2);
			return instance;
		} else {
			return new Klass(a1, a2);
		}
	};
	var threeArgumentPooler = function (a1, a2, a3) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2, a3);
			return instance;
		} else {
			return new Klass(a1, a2, a3);
		}
	};
	var fourArgumentPooler = function (a1, a2, a3, a4) {
		var Klass = this;
		if (Klass.instancePool.length) {
			var instance = Klass.instancePool.pop();
			Klass.call(instance, a1, a2, a3, a4);
			return instance;
		} else {
			return new Klass(a1, a2, a3, a4);
		}
	};
	var standardReleaser = function (instance) {
		var Klass = this;
		!(instance instanceof Klass) ? false ? invariant(false, "Trying to release an instance into a pool of a different type.") : _prodInvariant("25") : void 0;
		instance.destructor();
		if (Klass.instancePool.length < Klass.poolSize) {
			Klass.instancePool.push(instance);
		}
	};
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	var addPoolingTo = function (CopyConstructor, pooler) {
		var NewKlass = CopyConstructor;
		NewKlass.instancePool = [];
		NewKlass.getPooled = pooler || DEFAULT_POOLER;
		if (!NewKlass.poolSize) {
			NewKlass.poolSize = DEFAULT_POOL_SIZE;
		}
		NewKlass.release = standardReleaser;
		return NewKlass;
	};
	var PooledClass = {
		addPoolingTo: addPoolingTo,
		oneArgumentPooler: oneArgumentPooler,
		twoArgumentPooler: twoArgumentPooler,
		threeArgumentPooler: threeArgumentPooler,
		fourArgumentPooler: fourArgumentPooler
	};
	module.exports = PooledClass;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var contentKey = null;
	function getTextContentAccessor() {
		if (!contentKey && ExecutionEnvironment.canUseDOM) {
			contentKey = "textContent" in document.documentElement ? "textContent" : "innerText";
		}
		return contentKey;
	}
	module.exports = getTextContentAccessor;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var CompositionEventInterface = {
		data: null
	};
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
	module.exports = SyntheticCompositionEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var PooledClass = __webpack_require__(52);
	var emptyFunction = __webpack_require__(8);
	var warning = __webpack_require__(7);
	var didWarnForAddedNewProperty = false;
	var isProxySupported = typeof Proxy === "function";
	var shouldBeReleasedProperties = ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"];
	var EventInterface = {
		type: null,
		target: null,
		currentTarget: emptyFunction.thatReturnsNull,
		eventPhase: null,
		bubbles: null,
		cancelable: null,
		timeStamp: function (event) {
			return event.timeStamp || Date.now();
		},
		defaultPrevented: null,
		isTrusted: null
	};
	function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
		if (false) {
			delete this.nativeEvent;
			delete this.preventDefault;
			delete this.stopPropagation;
		}
		this.dispatchConfig = dispatchConfig;
		this._targetInst = targetInst;
		this.nativeEvent = nativeEvent;
		var Interface = this.constructor.Interface;
		for (var propName in Interface) {
			if (!Interface.hasOwnProperty(propName)) {
				continue;
			}
			if (false) {
				delete this[propName];
			}
			var normalize = Interface[propName];
			if (normalize) {
				this[propName] = normalize(nativeEvent);
			} else {
				if (propName === "target") {
					this.target = nativeEventTarget;
				} else {
					this[propName] = nativeEvent[propName];
				}
			}
		}
		var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
		if (defaultPrevented) {
			this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
		} else {
			this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
		}
		this.isPropagationStopped = emptyFunction.thatReturnsFalse;
		return this;
	}
	_assign(SyntheticEvent.prototype, {
		preventDefault: function () {
			this.defaultPrevented = true;
			var event = this.nativeEvent;
			if (!event) {
				return;
			}
			if (event.preventDefault) {
				event.preventDefault();
			} else if (typeof event.returnValue !== "unknown") {
				event.returnValue = false;
			}
			this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
		},
		stopPropagation: function () {
			var event = this.nativeEvent;
			if (!event) {
				return;
			}
			if (event.stopPropagation) {
				event.stopPropagation();
			} else if (typeof event.cancelBubble !== "unknown") {
				event.cancelBubble = true;
			}
			this.isPropagationStopped = emptyFunction.thatReturnsTrue;
		},
		persist: function () {
			this.isPersistent = emptyFunction.thatReturnsTrue;
		},
		isPersistent: emptyFunction.thatReturnsFalse,
		destructor: function () {
			var Interface = this.constructor.Interface;
			for (var propName in Interface) {
				if (false) {
					Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
				} else {
					this[propName] = null;
				}
			}
			for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
				this[shouldBeReleasedProperties[i]] = null;
			}
			if (false) {
				Object.defineProperty(this, "nativeEvent", getPooledWarningPropertyDefinition("nativeEvent", null));
				Object.defineProperty(this, "preventDefault", getPooledWarningPropertyDefinition("preventDefault", emptyFunction));
				Object.defineProperty(this, "stopPropagation", getPooledWarningPropertyDefinition("stopPropagation", emptyFunction));
			}
		}
	});
	SyntheticEvent.Interface = EventInterface;
	SyntheticEvent.augmentClass = function (Class, Interface) {
		var Super = this;
		var E = function () { };
		E.prototype = Super.prototype;
		var prototype = new E;
		_assign(prototype, Class.prototype);
		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.Interface = _assign({}, Super.Interface, Interface);
		Class.augmentClass = Super.augmentClass;
		PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};
	if (false) {
		if (isProxySupported) {
			SyntheticEvent = new Proxy(SyntheticEvent, {
				construct: function (target, args) {
					return this.apply(target, Object.create(target.prototype), args);
				},
				apply: function (constructor, that, args) {
					return new Proxy(constructor.apply(that, args), {
						set: function (target, prop, value) {
							if (prop !== "isPersistent" && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
								process.env.NODE_ENV !== "production" ? warning(didWarnForAddedNewProperty || target.isPersistent(), "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + "The property is never released. See " + "https://fb.me/react-event-pooling for more information.") : void 0;
								didWarnForAddedNewProperty = true;
							}
							target[prop] = value;
							return true;
						}
					});
				}
			});
		}
	}
	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
	module.exports = SyntheticEvent;
	function getPooledWarningPropertyDefinition(propName, getVal) {
		var isFunction = typeof getVal === "function";
		return {
			configurable: true,
			set: set,
			get: get
		};
		function set(val) {
			var action = isFunction ? "setting the method" : "setting the property";
			warn(action, "This is effectively a no-op");
			return val;
		}
		function get() {
			var action = isFunction ? "accessing the method" : "accessing the property";
			var result = isFunction ? "This is a no-op function" : "This is set to null";
			warn(action, result);
			return getVal;
		}
		function warn(action, result) {
			var warningCondition = false;
			false ? warning(warningCondition, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + "If you must keep the original synthetic event around, use event.persist(). " + "See https://fb.me/react-event-pooling for more information.", action, propName, result) : void 0;
		}
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var InputEventInterface = {
		data: null
	};
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
	module.exports = SyntheticInputEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPluginHub = __webpack_require__(44);
	var EventPropagators = __webpack_require__(43);
	var ExecutionEnvironment = __webpack_require__(50);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactUpdates = __webpack_require__(58);
	var SyntheticEvent = __webpack_require__(55);
	var inputValueTracking = __webpack_require__(66);
	var getEventTarget = __webpack_require__(67);
	var isEventSupported = __webpack_require__(68);
	var isTextInputElement = __webpack_require__(69);
	var eventTypes = {
		change: {
			phasedRegistrationNames: {
				bubbled: "onChange",
				captured: "onChangeCapture"
			},
			dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
		}
	};
	function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
		var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, target);
		event.type = "change";
		EventPropagators.accumulateTwoPhaseDispatches(event);
		return event;
	}
	var activeElement = null;
	var activeElementInst = null;
	function shouldUseChangeEvent(elem) {
		var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
		return nodeName === "select" || nodeName === "input" && elem.type === "file";
	}
	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
		doesChangeEventBubble = isEventSupported("change") && (!document.documentMode || document.documentMode > 8);
	}
	function manualDispatchChangeEvent(nativeEvent) {
		var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));
		ReactUpdates.batchedUpdates(runEventInBatch, event);
	}
	function runEventInBatch(event) {
		EventPluginHub.enqueueEvents(event);
		EventPluginHub.processEventQueue(false);
	}
	function startWatchingForChangeEventIE8(target, targetInst) {
		activeElement = target;
		activeElementInst = targetInst;
		activeElement.attachEvent("onchange", manualDispatchChangeEvent);
	}
	function stopWatchingForChangeEventIE8() {
		if (!activeElement) {
			return;
		}
		activeElement.detachEvent("onchange", manualDispatchChangeEvent);
		activeElement = null;
		activeElementInst = null;
	}
	function getInstIfValueChanged(targetInst, nativeEvent) {
		var updated = inputValueTracking.updateValueIfChanged(targetInst);
		var simulated = nativeEvent.simulated === true && ChangeEventPlugin._allowSimulatedPassThrough;
		if (updated || simulated) {
			return targetInst;
		}
	}
	function getTargetInstForChangeEvent(topLevelType, targetInst) {
		if (topLevelType === "topChange") {
			return targetInst;
		}
	}
	function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
		if (topLevelType === "topFocus") {
			stopWatchingForChangeEventIE8();
			startWatchingForChangeEventIE8(target, targetInst);
		} else if (topLevelType === "topBlur") {
			stopWatchingForChangeEventIE8();
		}
	}
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
		isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9);
	}
	function startWatchingForValueChange(target, targetInst) {
		activeElement = target;
		activeElementInst = targetInst;
		activeElement.attachEvent("onpropertychange", handlePropertyChange);
	}
	function stopWatchingForValueChange() {
		if (!activeElement) {
			return;
		}
		activeElement.detachEvent("onpropertychange", handlePropertyChange);
		activeElement = null;
		activeElementInst = null;
	}
	function handlePropertyChange(nativeEvent) {
		if (nativeEvent.propertyName !== "value") {
			return;
		}
		if (getInstIfValueChanged(activeElementInst, nativeEvent)) {
			manualDispatchChangeEvent(nativeEvent);
		}
	}
	function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
		if (topLevelType === "topFocus") {
			stopWatchingForValueChange();
			startWatchingForValueChange(target, targetInst);
		} else if (topLevelType === "topBlur") {
			stopWatchingForValueChange();
		}
	}
	function getTargetInstForInputEventPolyfill(topLevelType, targetInst, nativeEvent) {
		if (topLevelType === "topSelectionChange" || topLevelType === "topKeyUp" || topLevelType === "topKeyDown") {
			return getInstIfValueChanged(activeElementInst, nativeEvent);
		}
	}
	function shouldUseClickEvent(elem) {
		var nodeName = elem.nodeName;
		return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
	}
	function getTargetInstForClickEvent(topLevelType, targetInst, nativeEvent) {
		if (topLevelType === "topClick") {
			return getInstIfValueChanged(targetInst, nativeEvent);
		}
	}
	function getTargetInstForInputOrChangeEvent(topLevelType, targetInst, nativeEvent) {
		if (topLevelType === "topInput" || topLevelType === "topChange") {
			return getInstIfValueChanged(targetInst, nativeEvent);
		}
	}
	function handleControlledInputBlur(inst, node) {
		if (inst == null) {
			return;
		}
		var state = inst._wrapperState || node._wrapperState;
		if (!state || !state.controlled || node.type !== "number") {
			return;
		}
		var value = "" + node.value;
		if (node.getAttribute("value") !== value) {
			node.setAttribute("value", value);
		}
	}
	var ChangeEventPlugin = {
		eventTypes: eventTypes,
		_allowSimulatedPassThrough: true,
		_isInputEventSupported: isInputEventSupported,
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
			var getTargetInstFunc, handleEventFunc;
			if (shouldUseChangeEvent(targetNode)) {
				if (doesChangeEventBubble) {
					getTargetInstFunc = getTargetInstForChangeEvent;
				} else {
					handleEventFunc = handleEventsForChangeEventIE8;
				}
			} else if (isTextInputElement(targetNode)) {
				if (isInputEventSupported) {
					getTargetInstFunc = getTargetInstForInputOrChangeEvent;
				} else {
					getTargetInstFunc = getTargetInstForInputEventPolyfill;
					handleEventFunc = handleEventsForInputEventPolyfill;
				}
			} else if (shouldUseClickEvent(targetNode)) {
				getTargetInstFunc = getTargetInstForClickEvent;
			}
			if (getTargetInstFunc) {
				var inst = getTargetInstFunc(topLevelType, targetInst, nativeEvent);
				if (inst) {
					var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
					return event;
				}
			}
			if (handleEventFunc) {
				handleEventFunc(topLevelType, targetNode, targetInst);
			}
			if (topLevelType === "topBlur") {
				handleControlledInputBlur(targetInst, targetNode);
			}
		}
	};
	module.exports = ChangeEventPlugin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var CallbackQueue = __webpack_require__(59);
	var PooledClass = __webpack_require__(52);
	var ReactFeatureFlags = __webpack_require__(60);
	var ReactReconciler = __webpack_require__(61);
	var Transaction = __webpack_require__(65);
	var invariant = __webpack_require__(11);
	var dirtyComponents = [];
	var updateBatchNumber = 0;
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;
	var batchingStrategy = null;
	function ensureInjected() {
		!(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? false ? invariant(false, "ReactUpdates: must inject a reconcile transaction class and batching strategy") : _prodInvariant("123") : void 0;
	}
	var NESTED_UPDATES = {
		initialize: function () {
			this.dirtyComponentsLength = dirtyComponents.length;
		},
		close: function () {
			if (this.dirtyComponentsLength !== dirtyComponents.length) {
				dirtyComponents.splice(0, this.dirtyComponentsLength);
				flushBatchedUpdates();
			} else {
				dirtyComponents.length = 0;
			}
		}
	};
	var UPDATE_QUEUEING = {
		initialize: function () {
			this.callbackQueue.reset();
		},
		close: function () {
			this.callbackQueue.notifyAll();
		}
	};
	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
	function ReactUpdatesFlushTransaction() {
		this.reinitializeTransaction();
		this.dirtyComponentsLength = null;
		this.callbackQueue = CallbackQueue.getPooled();
		this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
	}
	_assign(ReactUpdatesFlushTransaction.prototype, Transaction, {
		getTransactionWrappers: function () {
			return TRANSACTION_WRAPPERS;
		},
		destructor: function () {
			this.dirtyComponentsLength = null;
			CallbackQueue.release(this.callbackQueue);
			this.callbackQueue = null;
			ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
			this.reconcileTransaction = null;
		},
		perform: function (method, scope, a) {
			return Transaction.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
		}
	});
	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
	function batchedUpdates(callback, a, b, c, d, e) {
		ensureInjected();
		return batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
	}
	function mountOrderComparator(c1, c2) {
		return c1._mountOrder - c2._mountOrder;
	}
	function runBatchedUpdates(transaction) {
		var len = transaction.dirtyComponentsLength;
		!(len === dirtyComponents.length) ? false ? invariant(false, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", len, dirtyComponents.length) : _prodInvariant("124", len, dirtyComponents.length) : void 0;
		dirtyComponents.sort(mountOrderComparator);
		updateBatchNumber++;
		for (var i = 0; i < len; i++) {
			var component = dirtyComponents[i];
			var callbacks = component._pendingCallbacks;
			component._pendingCallbacks = null;
			var markerName;
			if (ReactFeatureFlags.logTopLevelRenders) {
				var namedComponent = component;
				if (component._currentElement.type.isReactTopLevelWrapper) {
					namedComponent = component._renderedComponent;
				}
				markerName = "React update: " + namedComponent.getName();
				console.time(markerName);
			}
			ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);
			if (markerName) {
				console.timeEnd(markerName);
			}
			if (callbacks) {
				for (var j = 0; j < callbacks.length; j++) {
					transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
				}
			}
		}
	}
	var flushBatchedUpdates = function () {
		while (dirtyComponents.length || asapEnqueued) {
			if (dirtyComponents.length) {
				var transaction = ReactUpdatesFlushTransaction.getPooled();
				transaction.perform(runBatchedUpdates, null, transaction);
				ReactUpdatesFlushTransaction.release(transaction);
			}
			if (asapEnqueued) {
				asapEnqueued = false;
				var queue = asapCallbackQueue;
				asapCallbackQueue = CallbackQueue.getPooled();
				queue.notifyAll();
				CallbackQueue.release(queue);
			}
		}
	};
	function enqueueUpdate(component) {
		ensureInjected();
		if (!batchingStrategy.isBatchingUpdates) {
			batchingStrategy.batchedUpdates(enqueueUpdate, component);
			return;
		}
		dirtyComponents.push(component);
		if (component._updateBatchNumber == null) {
			component._updateBatchNumber = updateBatchNumber + 1;
		}
	}
	function asap(callback, context) {
		invariant(batchingStrategy.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context where" + "updates are not being batched.");
		asapCallbackQueue.enqueue(callback, context);
		asapEnqueued = true;
	}
	var ReactUpdatesInjection = {
		injectReconcileTransaction: function (ReconcileTransaction) {
			!ReconcileTransaction ? false ? invariant(false, "ReactUpdates: must provide a reconcile transaction class") : _prodInvariant("126") : void 0;
			ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
		},
		injectBatchingStrategy: function (_batchingStrategy) {
			!_batchingStrategy ? false ? invariant(false, "ReactUpdates: must provide a batching strategy") : _prodInvariant("127") : void 0;
			!(typeof _batchingStrategy.batchedUpdates === "function") ? false ? invariant(false, "ReactUpdates: must provide a batchedUpdates() function") : _prodInvariant("128") : void 0;
			!(typeof _batchingStrategy.isBatchingUpdates === "boolean") ? false ? invariant(false, "ReactUpdates: must provide an isBatchingUpdates boolean attribute") : _prodInvariant("129") : void 0;
			batchingStrategy = _batchingStrategy;
		}
	};
	var ReactUpdates = {
		ReactReconcileTransaction: null,
		batchedUpdates: batchedUpdates,
		enqueueUpdate: enqueueUpdate,
		flushBatchedUpdates: flushBatchedUpdates,
		injection: ReactUpdatesInjection,
		asap: asap
	};
	module.exports = ReactUpdates;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	var PooledClass = __webpack_require__(52);
	var invariant = __webpack_require__(11);
	var CallbackQueue = function () {
		function CallbackQueue(arg) {
			_classCallCheck(this, CallbackQueue);
			this._callbacks = null;
			this._contexts = null;
			this._arg = arg;
		}
		CallbackQueue.prototype.enqueue = function enqueue(callback, context) {
			this._callbacks = this._callbacks || [];
			this._callbacks.push(callback);
			this._contexts = this._contexts || [];
			this._contexts.push(context);
		};
		CallbackQueue.prototype.notifyAll = function notifyAll() {
			var callbacks = this._callbacks;
			var contexts = this._contexts;
			var arg = this._arg;
			if (callbacks && contexts) {
				!(callbacks.length === contexts.length) ? false ? invariant(false, "Mismatched list of contexts in callback queue") : _prodInvariant("24") : void 0;
				this._callbacks = null;
				this._contexts = null;
				for (var i = 0; i < callbacks.length; i++) {
					callbacks[i].call(contexts[i], arg);
				}
				callbacks.length = 0;
				contexts.length = 0;
			}
		};
		CallbackQueue.prototype.checkpoint = function checkpoint() {
			return this._callbacks ? this._callbacks.length : 0;
		};
		CallbackQueue.prototype.rollback = function rollback(len) {
			if (this._callbacks && this._contexts) {
				this._callbacks.length = len;
				this._contexts.length = len;
			}
		};
		CallbackQueue.prototype.reset = function reset() {
			this._callbacks = null;
			this._contexts = null;
		};
		CallbackQueue.prototype.destructor = function destructor() {
			this.reset();
		};
		return CallbackQueue;
	}();
	module.exports = PooledClass.addPoolingTo(CallbackQueue);
}, function (module, exports) {
	"use strict";
	var ReactFeatureFlags = {
		logTopLevelRenders: false
	};
	module.exports = ReactFeatureFlags;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactRef = __webpack_require__(62);
	var ReactInstrumentation = __webpack_require__(64);
	var warning = __webpack_require__(7);
	function attachRefs() {
		ReactRef.attachRefs(this, this._currentElement);
	}
	var ReactReconciler = {
		mountComponent: function (internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID) {
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
				}
			}
			var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
			if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
				transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
			}
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
				}
			}
			return markup;
		},
		getHostNode: function (internalInstance) {
			return internalInstance.getHostNode();
		},
		unmountComponent: function (internalInstance, safely) {
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
				}
			}
			ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
			internalInstance.unmountComponent(safely);
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
				}
			}
		},
		receiveComponent: function (internalInstance, nextElement, transaction, context) {
			var prevElement = internalInstance._currentElement;
			if (nextElement === prevElement && context === internalInstance._context) {
				return;
			}
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
				}
			}
			var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
			if (refsChanged) {
				ReactRef.detachRefs(internalInstance, prevElement);
			}
			internalInstance.receiveComponent(nextElement, transaction, context);
			if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
				transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
			}
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
				}
			}
		},
		performUpdateIfNecessary: function (internalInstance, transaction, updateBatchNumber) {
			if (internalInstance._updateBatchNumber !== updateBatchNumber) {
				false ? warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, "performUpdateIfNecessary: Unexpected batch number (current %s, " + "pending %s)", updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
				return;
			}
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
				}
			}
			internalInstance.performUpdateIfNecessary(transaction);
			if (false) {
				if (internalInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
				}
			}
		}
	};
	module.exports = ReactReconciler;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactOwner = __webpack_require__(63);
	var ReactRef = {};
	function attachRef(ref, component, owner) {
		if (typeof ref === "function") {
			ref(component.getPublicInstance());
		} else {
			ReactOwner.addComponentAsRefTo(component, ref, owner);
		}
	}
	function detachRef(ref, component, owner) {
		if (typeof ref === "function") {
			ref(null);
		} else {
			ReactOwner.removeComponentAsRefFrom(component, ref, owner);
		}
	}
	ReactRef.attachRefs = function (instance, element) {
		if (element === null || typeof element !== "object") {
			return;
		}
		var ref = element.ref;
		if (ref != null) {
			attachRef(ref, instance, element._owner);
		}
	};
	ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
		var prevRef = null;
		var prevOwner = null;
		if (prevElement !== null && typeof prevElement === "object") {
			prevRef = prevElement.ref;
			prevOwner = prevElement._owner;
		}
		var nextRef = null;
		var nextOwner = null;
		if (nextElement !== null && typeof nextElement === "object") {
			nextRef = nextElement.ref;
			nextOwner = nextElement._owner;
		}
		return prevRef !== nextRef || typeof nextRef === "string" && nextOwner !== prevOwner;
	};
	ReactRef.detachRefs = function (instance, element) {
		if (element === null || typeof element !== "object") {
			return;
		}
		var ref = element.ref;
		if (ref != null) {
			detachRef(ref, instance, element._owner);
		}
	};
	module.exports = ReactRef;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	function isValidOwner(object) {
		return !!(object && typeof object.attachRef === "function" && typeof object.detachRef === "function");
	}
	var ReactOwner = {
		addComponentAsRefTo: function (component, ref, owner) {
			!isValidOwner(owner) ? false ? invariant(false, "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : _prodInvariant("119") : void 0;
			owner.attachRef(ref, component);
		},
		removeComponentAsRefFrom: function (component, ref, owner) {
			!isValidOwner(owner) ? false ? invariant(false, "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : _prodInvariant("120") : void 0;
			var ownerPublicInstance = owner.getPublicInstance();
			if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
				owner.detachRef(ref);
			}
		}
	};
	module.exports = ReactOwner;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var debugTool = null;
	if (false) {
		var ReactDebugTool = require("./ReactDebugTool");
		debugTool = ReactDebugTool;
	}
	module.exports = {
		debugTool: debugTool
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	var OBSERVED_ERROR = {};
	var TransactionImpl = {
		reinitializeTransaction: function () {
			this.transactionWrappers = this.getTransactionWrappers();
			if (this.wrapperInitData) {
				this.wrapperInitData.length = 0;
			} else {
				this.wrapperInitData = [];
			}
			this._isInTransaction = false;
		},
		_isInTransaction: false,
		getTransactionWrappers: null,
		isInTransaction: function () {
			return !!this._isInTransaction;
		},
		perform: function (method, scope, a, b, c, d, e, f) {
			!!this.isInTransaction() ? false ? invariant(false, "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.") : _prodInvariant("27") : void 0;
			var errorThrown;
			var ret;
			try {
				this._isInTransaction = true;
				errorThrown = true;
				this.initializeAll(0);
				ret = method.call(scope, a, b, c, d, e, f);
				errorThrown = false;
			} finally {
				try {
					if (errorThrown) {
						try {
							this.closeAll(0);
						} catch (err) { }
					} else {
						this.closeAll(0);
					}
				} finally {
					this._isInTransaction = false;
				}
			}
			return ret;
		},
		initializeAll: function (startIndex) {
			var transactionWrappers = this.transactionWrappers;
			for (var i = startIndex; i < transactionWrappers.length; i++) {
				var wrapper = transactionWrappers[i];
				try {
					this.wrapperInitData[i] = OBSERVED_ERROR;
					this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
				} finally {
					if (this.wrapperInitData[i] === OBSERVED_ERROR) {
						try {
							this.initializeAll(i + 1);
						} catch (err) { }
					}
				}
			}
		},
		closeAll: function (startIndex) {
			!this.isInTransaction() ? false ? invariant(false, "Transaction.closeAll(): Cannot close transaction when none are open.") : _prodInvariant("28") : void 0;
			var transactionWrappers = this.transactionWrappers;
			for (var i = startIndex; i < transactionWrappers.length; i++) {
				var wrapper = transactionWrappers[i];
				var initData = this.wrapperInitData[i];
				var errorThrown;
				try {
					errorThrown = true;
					if (initData !== OBSERVED_ERROR && wrapper.close) {
						wrapper.close.call(this, initData);
					}
					errorThrown = false;
				} finally {
					if (errorThrown) {
						try {
							this.closeAll(i + 1);
						} catch (e) { }
					}
				}
			}
			this.wrapperInitData.length = 0;
		}
	};
	module.exports = TransactionImpl;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactDOMComponentTree = __webpack_require__(36);
	function isCheckable(elem) {
		var type = elem.type;
		var nodeName = elem.nodeName;
		return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
	}
	function getTracker(inst) {
		return inst._wrapperState.valueTracker;
	}
	function attachTracker(inst, tracker) {
		inst._wrapperState.valueTracker = tracker;
	}
	function detachTracker(inst) {
		inst._wrapperState.valueTracker = null;
	}
	function getValueFromNode(node) {
		var value;
		if (node) {
			value = isCheckable(node) ? "" + node.checked : node.value;
		}
		return value;
	}
	var inputValueTracking = {
		_getTrackerFromNode: function (node) {
			return getTracker(ReactDOMComponentTree.getInstanceFromNode(node));
		},
		track: function (inst) {
			if (getTracker(inst)) {
				return;
			}
			var node = ReactDOMComponentTree.getNodeFromInstance(inst);
			var valueField = isCheckable(node) ? "checked" : "value";
			var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
			var currentValue = "" + node[valueField];
			if (node.hasOwnProperty(valueField) || typeof descriptor.get !== "function" || typeof descriptor.set !== "function") {
				return;
			}
			Object.defineProperty(node, valueField, {
				enumerable: descriptor.enumerable,
				configurable: true,
				get: function () {
					return descriptor.get.call(this);
				},
				set: function (value) {
					currentValue = "" + value;
					descriptor.set.call(this, value);
				}
			});
			attachTracker(inst, {
				getValue: function () {
					return currentValue;
				},
				setValue: function (value) {
					currentValue = "" + value;
				},
				stopTracking: function () {
					detachTracker(inst);
					delete node[valueField];
				}
			});
		},
		updateValueIfChanged: function (inst) {
			if (!inst) {
				return false;
			}
			var tracker = getTracker(inst);
			if (!tracker) {
				inputValueTracking.track(inst);
				return true;
			}
			var lastValue = tracker.getValue();
			var nextValue = getValueFromNode(ReactDOMComponentTree.getNodeFromInstance(inst));
			if (nextValue !== lastValue) {
				tracker.setValue(nextValue);
				return true;
			}
			return false;
		},
		stopTracking: function (inst) {
			var tracker = getTracker(inst);
			if (tracker) {
				tracker.stopTracking();
			}
		}
	};
	module.exports = inputValueTracking;
}, function (module, exports) {
	"use strict";
	function getEventTarget(nativeEvent) {
		var target = nativeEvent.target || nativeEvent.srcElement || window;
		if (target.correspondingUseElement) {
			target = target.correspondingUseElement;
		}
		return target.nodeType === 3 ? target.parentNode : target;
	}
	module.exports = getEventTarget;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
		useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
	}
	function isEventSupported(eventNameSuffix, capture) {
		if (!ExecutionEnvironment.canUseDOM || capture && !("addEventListener" in document)) {
			return false;
		}
		var eventName = "on" + eventNameSuffix;
		var isSupported = eventName in document;
		if (!isSupported) {
			var element = document.createElement("div");
			element.setAttribute(eventName, "return;");
			isSupported = typeof element[eventName] === "function";
		}
		if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
			isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
		}
		return isSupported;
	}
	module.exports = isEventSupported;
}, function (module, exports) {
	"use strict";
	var supportedInputTypes = {
		color: true,
		date: true,
		datetime: true,
		"datetime-local": true,
		email: true,
		month: true,
		number: true,
		password: true,
		range: true,
		search: true,
		tel: true,
		text: true,
		time: true,
		url: true,
		week: true
	};
	function isTextInputElement(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		if (nodeName === "input") {
			return !!supportedInputTypes[elem.type];
		}
		if (nodeName === "textarea") {
			return true;
		}
		return false;
	}
	module.exports = isTextInputElement;
}, function (module, exports) {
	"use strict";
	var DefaultEventPluginOrder = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
	module.exports = DefaultEventPluginOrder;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPropagators = __webpack_require__(43);
	var ReactDOMComponentTree = __webpack_require__(36);
	var SyntheticMouseEvent = __webpack_require__(72);
	var eventTypes = {
		mouseEnter: {
			registrationName: "onMouseEnter",
			dependencies: ["topMouseOut", "topMouseOver"]
		},
		mouseLeave: {
			registrationName: "onMouseLeave",
			dependencies: ["topMouseOut", "topMouseOver"]
		}
	};
	var EnterLeaveEventPlugin = {
		eventTypes: eventTypes,
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			if (topLevelType === "topMouseOver" && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
				return null;
			}
			if (topLevelType !== "topMouseOut" && topLevelType !== "topMouseOver") {
				return null;
			}
			var win;
			if (nativeEventTarget.window === nativeEventTarget) {
				win = nativeEventTarget;
			} else {
				var doc = nativeEventTarget.ownerDocument;
				if (doc) {
					win = doc.defaultView || doc.parentWindow;
				} else {
					win = window;
				}
			}
			var from;
			var to;
			if (topLevelType === "topMouseOut") {
				from = targetInst;
				var related = nativeEvent.relatedTarget || nativeEvent.toElement;
				to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
			} else {
				from = null;
				to = targetInst;
			}
			if (from === to) {
				return null;
			}
			var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
			var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);
			var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
			leave.type = "mouseleave";
			leave.target = fromNode;
			leave.relatedTarget = toNode;
			var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
			enter.type = "mouseenter";
			enter.target = toNode;
			enter.relatedTarget = fromNode;
			EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);
			return [leave, enter];
		}
	};
	module.exports = EnterLeaveEventPlugin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticUIEvent = __webpack_require__(73);
	var ViewportMetrics = __webpack_require__(74);
	var getEventModifierState = __webpack_require__(75);
	var MouseEventInterface = {
		screenX: null,
		screenY: null,
		clientX: null,
		clientY: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		getModifierState: getEventModifierState,
		button: function (event) {
			var button = event.button;
			if ("which" in event) {
				return button;
			}
			return button === 2 ? 2 : button === 4 ? 1 : 0;
		},
		buttons: null,
		relatedTarget: function (event) {
			return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
		},
		pageX: function (event) {
			return "pageX" in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
		},
		pageY: function (event) {
			return "pageY" in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
		}
	};
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
	module.exports = SyntheticMouseEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var getEventTarget = __webpack_require__(67);
	var UIEventInterface = {
		view: function (event) {
			if (event.view) {
				return event.view;
			}
			var target = getEventTarget(event);
			if (target.window === target) {
				return target;
			}
			var doc = target.ownerDocument;
			if (doc) {
				return doc.defaultView || doc.parentWindow;
			} else {
				return window;
			}
		},
		detail: function (event) {
			return event.detail || 0;
		}
	};
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
	module.exports = SyntheticUIEvent;
}, function (module, exports) {
	"use strict";
	var ViewportMetrics = {
		currentScrollLeft: 0,
		currentScrollTop: 0,
		refreshScrollValues: function (scrollPosition) {
			ViewportMetrics.currentScrollLeft = scrollPosition.x;
			ViewportMetrics.currentScrollTop = scrollPosition.y;
		}
	};
	module.exports = ViewportMetrics;
}, function (module, exports) {
	"use strict";
	var modifierKeyToProp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function modifierStateGetter(keyArg) {
		var syntheticEvent = this;
		var nativeEvent = syntheticEvent.nativeEvent;
		if (nativeEvent.getModifierState) {
			return nativeEvent.getModifierState(keyArg);
		}
		var keyProp = modifierKeyToProp[keyArg];
		return keyProp ? !!nativeEvent[keyProp] : false;
	}
	function getEventModifierState(nativeEvent) {
		return modifierStateGetter;
	}
	module.exports = getEventModifierState;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMProperty = __webpack_require__(38);
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	var HTMLDOMPropertyConfig = {
		isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + DOMProperty.ATTRIBUTE_NAME_CHAR + "]*$")),
		Properties: {
			accept: 0,
			acceptCharset: 0,
			accessKey: 0,
			action: 0,
			allowFullScreen: HAS_BOOLEAN_VALUE,
			allowTransparency: 0,
			alt: 0,
			as: 0,
			async: HAS_BOOLEAN_VALUE,
			autoComplete: 0,
			autoPlay: HAS_BOOLEAN_VALUE,
			capture: HAS_BOOLEAN_VALUE,
			cellPadding: 0,
			cellSpacing: 0,
			charSet: 0,
			challenge: 0,
			checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
			cite: 0,
			classID: 0,
			className: 0,
			cols: HAS_POSITIVE_NUMERIC_VALUE,
			colSpan: 0,
			content: 0,
			contentEditable: 0,
			contextMenu: 0,
			controls: HAS_BOOLEAN_VALUE,
			controlsList: 0,
			coords: 0,
			crossOrigin: 0,
			data: 0,
			dateTime: 0,
			default: HAS_BOOLEAN_VALUE,
			defer: HAS_BOOLEAN_VALUE,
			dir: 0,
			disabled: HAS_BOOLEAN_VALUE,
			download: HAS_OVERLOADED_BOOLEAN_VALUE,
			draggable: 0,
			encType: 0,
			form: 0,
			formAction: 0,
			formEncType: 0,
			formMethod: 0,
			formNoValidate: HAS_BOOLEAN_VALUE,
			formTarget: 0,
			frameBorder: 0,
			headers: 0,
			height: 0,
			hidden: HAS_BOOLEAN_VALUE,
			high: 0,
			href: 0,
			hrefLang: 0,
			htmlFor: 0,
			httpEquiv: 0,
			icon: 0,
			id: 0,
			inputMode: 0,
			integrity: 0,
			is: 0,
			keyParams: 0,
			keyType: 0,
			kind: 0,
			label: 0,
			lang: 0,
			list: 0,
			loop: HAS_BOOLEAN_VALUE,
			low: 0,
			manifest: 0,
			marginHeight: 0,
			marginWidth: 0,
			max: 0,
			maxLength: 0,
			media: 0,
			mediaGroup: 0,
			method: 0,
			min: 0,
			minLength: 0,
			multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
			muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
			name: 0,
			nonce: 0,
			noValidate: HAS_BOOLEAN_VALUE,
			open: HAS_BOOLEAN_VALUE,
			optimum: 0,
			pattern: 0,
			placeholder: 0,
			playsInline: HAS_BOOLEAN_VALUE,
			poster: 0,
			preload: 0,
			profile: 0,
			radioGroup: 0,
			readOnly: HAS_BOOLEAN_VALUE,
			referrerPolicy: 0,
			rel: 0,
			required: HAS_BOOLEAN_VALUE,
			reversed: HAS_BOOLEAN_VALUE,
			role: 0,
			rows: HAS_POSITIVE_NUMERIC_VALUE,
			rowSpan: HAS_NUMERIC_VALUE,
			sandbox: 0,
			scope: 0,
			scoped: HAS_BOOLEAN_VALUE,
			scrolling: 0,
			seamless: HAS_BOOLEAN_VALUE,
			selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
			shape: 0,
			size: HAS_POSITIVE_NUMERIC_VALUE,
			sizes: 0,
			span: HAS_POSITIVE_NUMERIC_VALUE,
			spellCheck: 0,
			src: 0,
			srcDoc: 0,
			srcLang: 0,
			srcSet: 0,
			start: HAS_NUMERIC_VALUE,
			step: 0,
			style: 0,
			summary: 0,
			tabIndex: 0,
			target: 0,
			title: 0,
			type: 0,
			useMap: 0,
			value: 0,
			width: 0,
			wmode: 0,
			wrap: 0,
			about: 0,
			datatype: 0,
			inlist: 0,
			prefix: 0,
			property: 0,
			resource: 0,
			typeof: 0,
			vocab: 0,
			autoCapitalize: 0,
			autoCorrect: 0,
			autoSave: 0,
			color: 0,
			itemProp: 0,
			itemScope: HAS_BOOLEAN_VALUE,
			itemType: 0,
			itemID: 0,
			itemRef: 0,
			results: 0,
			security: 0,
			unselectable: 0
		},
		DOMAttributeNames: {
			acceptCharset: "accept-charset",
			className: "class",
			htmlFor: "for",
			httpEquiv: "http-equiv"
		},
		DOMPropertyNames: {},
		DOMMutationMethods: {
			value: function (node, value) {
				if (value == null) {
					return node.removeAttribute("value");
				}
				if (node.type !== "number" || node.hasAttribute("value") === false) {
					node.setAttribute("value", "" + value);
				} else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
					node.setAttribute("value", "" + value);
				}
			}
		}
	};
	module.exports = HTMLDOMPropertyConfig;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMChildrenOperations = __webpack_require__(78);
	var ReactDOMIDOperations = __webpack_require__(89);
	var ReactComponentBrowserEnvironment = {
		processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
		replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup
	};
	module.exports = ReactComponentBrowserEnvironment;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMLazyTree = __webpack_require__(79);
	var Danger = __webpack_require__(85);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactInstrumentation = __webpack_require__(64);
	var createMicrosoftUnsafeLocalFunction = __webpack_require__(82);
	var setInnerHTML = __webpack_require__(81);
	var setTextContent = __webpack_require__(83);
	function getNodeAfter(parentNode, node) {
		if (Array.isArray(node)) {
			node = node[1];
		}
		return node ? node.nextSibling : parentNode.firstChild;
	}
	var insertChildAt = createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
		parentNode.insertBefore(childNode, referenceNode);
	});
	function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
		DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
	}
	function moveChild(parentNode, childNode, referenceNode) {
		if (Array.isArray(childNode)) {
			moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
		} else {
			insertChildAt(parentNode, childNode, referenceNode);
		}
	}
	function removeChild(parentNode, childNode) {
		if (Array.isArray(childNode)) {
			var closingComment = childNode[1];
			childNode = childNode[0];
			removeDelimitedText(parentNode, childNode, closingComment);
			parentNode.removeChild(closingComment);
		}
		parentNode.removeChild(childNode);
	}
	function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
		var node = openingComment;
		while (true) {
			var nextNode = node.nextSibling;
			insertChildAt(parentNode, node, referenceNode);
			if (node === closingComment) {
				break;
			}
			node = nextNode;
		}
	}
	function removeDelimitedText(parentNode, startNode, closingComment) {
		while (true) {
			var node = startNode.nextSibling;
			if (node === closingComment) {
				break;
			} else {
				parentNode.removeChild(node);
			}
		}
	}
	function replaceDelimitedText(openingComment, closingComment, stringText) {
		var parentNode = openingComment.parentNode;
		var nodeAfterComment = openingComment.nextSibling;
		if (nodeAfterComment === closingComment) {
			if (stringText) {
				insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
			}
		} else {
			if (stringText) {
				setTextContent(nodeAfterComment, stringText);
				removeDelimitedText(parentNode, nodeAfterComment, closingComment);
			} else {
				removeDelimitedText(parentNode, openingComment, closingComment);
			}
		}
		if (false) {
			ReactInstrumentation.debugTool.onHostOperation({
				instanceID: ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,
				type: "replace text",
				payload: stringText
			});
		}
	}
	var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
	if (false) {
		dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
			Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
			if (prevInstance._debugID !== 0) {
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: prevInstance._debugID,
					type: "replace with",
					payload: markup.toString()
				});
			} else {
				var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
				if (nextInstance._debugID !== 0) {
					ReactInstrumentation.debugTool.onHostOperation({
						instanceID: nextInstance._debugID,
						type: "mount",
						payload: markup.toString()
					});
				}
			}
		};
	}
	var DOMChildrenOperations = {
		dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,
		replaceDelimitedText: replaceDelimitedText,
		processUpdates: function (parentNode, updates) {
			if (false) {
				var parentNodeDebugID = ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
			}
			for (var k = 0; k < updates.length; k++) {
				var update = updates[k];
				switch (update.type) {
					case "INSERT_MARKUP":
						insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
						if (false) {
							ReactInstrumentation.debugTool.onHostOperation({
								instanceID: parentNodeDebugID,
								type: "insert child",
								payload: {
									toIndex: update.toIndex,
									content: update.content.toString()
								}
							});
						}
						break;

					case "MOVE_EXISTING":
						moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
						if (false) {
							ReactInstrumentation.debugTool.onHostOperation({
								instanceID: parentNodeDebugID,
								type: "move child",
								payload: {
									fromIndex: update.fromIndex,
									toIndex: update.toIndex
								}
							});
						}
						break;

					case "SET_MARKUP":
						setInnerHTML(parentNode, update.content);
						if (false) {
							ReactInstrumentation.debugTool.onHostOperation({
								instanceID: parentNodeDebugID,
								type: "replace children",
								payload: update.content.toString()
							});
						}
						break;

					case "TEXT_CONTENT":
						setTextContent(parentNode, update.content);
						if (false) {
							ReactInstrumentation.debugTool.onHostOperation({
								instanceID: parentNodeDebugID,
								type: "replace text",
								payload: update.content.toString()
							});
						}
						break;

					case "REMOVE_NODE":
						removeChild(parentNode, update.fromNode);
						if (false) {
							ReactInstrumentation.debugTool.onHostOperation({
								instanceID: parentNodeDebugID,
								type: "remove child",
								payload: {
									fromIndex: update.fromIndex
								}
							});
						}
						break;
				}
			}
		}
	};
	module.exports = DOMChildrenOperations;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMNamespaces = __webpack_require__(80);
	var setInnerHTML = __webpack_require__(81);
	var createMicrosoftUnsafeLocalFunction = __webpack_require__(82);
	var setTextContent = __webpack_require__(83);
	var ELEMENT_NODE_TYPE = 1;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
	var enableLazy = typeof document !== "undefined" && typeof document.documentMode === "number" || typeof navigator !== "undefined" && typeof navigator.userAgent === "string" && /\bEdge\/\d/.test(navigator.userAgent);
	function insertTreeChildren(tree) {
		if (!enableLazy) {
			return;
		}
		var node = tree.node;
		var children = tree.children;
		if (children.length) {
			for (var i = 0; i < children.length; i++) {
				insertTreeBefore(node, children[i], null);
			}
		} else if (tree.html != null) {
			setInnerHTML(node, tree.html);
		} else if (tree.text != null) {
			setTextContent(node, tree.text);
		}
	}
	var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
		if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === "object" && (tree.node.namespaceURI == null || tree.node.namespaceURI === DOMNamespaces.html)) {
			insertTreeChildren(tree);
			parentNode.insertBefore(tree.node, referenceNode);
		} else {
			parentNode.insertBefore(tree.node, referenceNode);
			insertTreeChildren(tree);
		}
	});
	function replaceChildWithTree(oldNode, newTree) {
		oldNode.parentNode.replaceChild(newTree.node, oldNode);
		insertTreeChildren(newTree);
	}
	function queueChild(parentTree, childTree) {
		if (enableLazy) {
			parentTree.children.push(childTree);
		} else {
			parentTree.node.appendChild(childTree.node);
		}
	}
	function queueHTML(tree, html) {
		if (enableLazy) {
			tree.html = html;
		} else {
			setInnerHTML(tree.node, html);
		}
	}
	function queueText(tree, text) {
		if (enableLazy) {
			tree.text = text;
		} else {
			setTextContent(tree.node, text);
		}
	}
	function toString() {
		return this.node.nodeName;
	}
	function DOMLazyTree(node) {
		return {
			node: node,
			children: [],
			html: null,
			text: null,
			toString: toString
		};
	}
	DOMLazyTree.insertTreeBefore = insertTreeBefore;
	DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
	DOMLazyTree.queueChild = queueChild;
	DOMLazyTree.queueHTML = queueHTML;
	DOMLazyTree.queueText = queueText;
	module.exports = DOMLazyTree;
}, function (module, exports) {
	"use strict";
	var DOMNamespaces = {
		html: "http://www.w3.org/1999/xhtml",
		mathml: "http://www.w3.org/1998/Math/MathML",
		svg: "http://www.w3.org/2000/svg"
	};
	module.exports = DOMNamespaces;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var DOMNamespaces = __webpack_require__(80);
	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
	var createMicrosoftUnsafeLocalFunction = __webpack_require__(82);
	var reusableSVGContainer;
	var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
		if (node.namespaceURI === DOMNamespaces.svg && !("innerHTML" in node)) {
			reusableSVGContainer = reusableSVGContainer || document.createElement("div");
			reusableSVGContainer.innerHTML = "<svg>" + html + "</svg>";
			var svgNode = reusableSVGContainer.firstChild;
			while (svgNode.firstChild) {
				node.appendChild(svgNode.firstChild);
			}
		} else {
			node.innerHTML = html;
		}
	});
	if (ExecutionEnvironment.canUseDOM) {
		var testElement = document.createElement("div");
		testElement.innerHTML = " ";
		if (testElement.innerHTML === "") {
			setInnerHTML = function (node, html) {
				if (node.parentNode) {
					node.parentNode.replaceChild(node, node);
				}
				if (WHITESPACE_TEST.test(html) || html[0] === "<" && NONVISIBLE_TEST.test(html)) {
					node.innerHTML = String.fromCharCode(65279) + html;
					var textNode = node.firstChild;
					if (textNode.data.length === 1) {
						node.removeChild(textNode);
					} else {
						textNode.deleteData(0, 1);
					}
				} else {
					node.innerHTML = html;
				}
			};
		}
		testElement = null;
	}
	module.exports = setInnerHTML;
}, function (module, exports) {
	"use strict";
	var createMicrosoftUnsafeLocalFunction = function (func) {
		if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
			return function (arg0, arg1, arg2, arg3) {
				MSApp.execUnsafeLocalFunction(function () {
					return func(arg0, arg1, arg2, arg3);
				});
			};
		} else {
			return func;
		}
	};
	module.exports = createMicrosoftUnsafeLocalFunction;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var escapeTextContentForBrowser = __webpack_require__(84);
	var setInnerHTML = __webpack_require__(81);
	var setTextContent = function (node, text) {
		if (text) {
			var firstChild = node.firstChild;
			if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
				firstChild.nodeValue = text;
				return;
			}
		}
		node.textContent = text;
	};
	if (ExecutionEnvironment.canUseDOM) {
		if (!("textContent" in document.documentElement)) {
			setTextContent = function (node, text) {
				if (node.nodeType === 3) {
					node.nodeValue = text;
					return;
				}
				setInnerHTML(node, escapeTextContentForBrowser(text));
			};
		}
	}
	module.exports = setTextContent;
}, function (module, exports) {
	"use strict";
	var matchHtmlRegExp = /["'&<>]/;
	function escapeHtml(string) {
		var str = "" + string;
		var match = matchHtmlRegExp.exec(str);
		if (!match) {
			return str;
		}
		var escape;
		var html = "";
		var index = 0;
		var lastIndex = 0;
		for (index = match.index; index < str.length; index++) {
			switch (str.charCodeAt(index)) {
				case 34:
					escape = "&quot;";
					break;

				case 38:
					escape = "&amp;";
					break;

				case 39:
					escape = "&#x27;";
					break;

				case 60:
					escape = "&lt;";
					break;

				case 62:
					escape = "&gt;";
					break;

				default:
					continue;
			}
			if (lastIndex !== index) {
				html += str.substring(lastIndex, index);
			}
			lastIndex = index + 1;
			html += escape;
		}
		return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}
	function escapeTextContentForBrowser(text) {
		if (typeof text === "boolean" || typeof text === "number") {
			return "" + text;
		}
		return escapeHtml(text);
	}
	module.exports = escapeTextContentForBrowser;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var DOMLazyTree = __webpack_require__(79);
	var ExecutionEnvironment = __webpack_require__(50);
	var createNodesFromMarkup = __webpack_require__(86);
	var emptyFunction = __webpack_require__(8);
	var invariant = __webpack_require__(11);
	var Danger = {
		dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
			!ExecutionEnvironment.canUseDOM ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.") : _prodInvariant("56") : void 0;
			!markup ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Missing markup.") : _prodInvariant("57") : void 0;
			!(oldChild.nodeName !== "HTML") ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().") : _prodInvariant("58") : void 0;
			if (typeof markup === "string") {
				var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
				oldChild.parentNode.replaceChild(newChild, oldChild);
			} else {
				DOMLazyTree.replaceChildWithTree(oldChild, markup);
			}
		}
	};
	module.exports = Danger;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var createArrayFromMixed = __webpack_require__(87);
	var getMarkupWrap = __webpack_require__(88);
	var invariant = __webpack_require__(11);
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement("div") : null;
	var nodeNamePattern = /^\s*<(\w+)/;
	function getNodeName(markup) {
		var nodeNameMatch = markup.match(nodeNamePattern);
		return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}
	function createNodesFromMarkup(markup, handleScript) {
		var node = dummyNode;
		!!!dummyNode ? false ? invariant(false, "createNodesFromMarkup dummy not initialized") : invariant(false) : void 0;
		var nodeName = getNodeName(markup);
		var wrap = nodeName && getMarkupWrap(nodeName);
		if (wrap) {
			node.innerHTML = wrap[1] + markup + wrap[2];
			var wrapDepth = wrap[0];
			while (wrapDepth--) {
				node = node.lastChild;
			}
		} else {
			node.innerHTML = markup;
		}
		var scripts = node.getElementsByTagName("script");
		if (scripts.length) {
			!handleScript ? false ? invariant(false, "createNodesFromMarkup(...): Unexpected <script> element rendered.") : invariant(false) : void 0;
			createArrayFromMixed(scripts).forEach(handleScript);
		}
		var nodes = Array.from(node.childNodes);
		while (node.lastChild) {
			node.removeChild(node.lastChild);
		}
		return nodes;
	}
	module.exports = createNodesFromMarkup;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var invariant = __webpack_require__(11);
	function toArray(obj) {
		var length = obj.length;
		!(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function")) ? false ? invariant(false, "toArray: Array-like object expected") : invariant(false) : void 0;
		!(typeof length === "number") ? false ? invariant(false, "toArray: Object needs a length property") : invariant(false) : void 0;
		!(length === 0 || length - 1 in obj) ? false ? invariant(false, "toArray: Object should have keys for indices") : invariant(false) : void 0;
		!(typeof obj.callee !== "function") ? false ? invariant(false, "toArray: Object can't be `arguments`. Use rest params " + "(function(...args) {}) or Array.from() instead.") : invariant(false) : void 0;
		if (obj.hasOwnProperty) {
			try {
				return Array.prototype.slice.call(obj);
			} catch (e) { }
		}
		var ret = Array(length);
		for (var ii = 0; ii < length; ii++) {
			ret[ii] = obj[ii];
		}
		return ret;
	}
	function hasArrayNature(obj) {
		return !!obj && (typeof obj == "object" || typeof obj == "function") && "length" in obj && !("setInterval" in obj) && typeof obj.nodeType != "number" && (Array.isArray(obj) || "callee" in obj || "item" in obj);
	}
	function createArrayFromMixed(obj) {
		if (!hasArrayNature(obj)) {
			return [obj];
		} else if (Array.isArray(obj)) {
			return obj.slice();
		} else {
			return toArray(obj);
		}
	}
	module.exports = createArrayFromMixed;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var invariant = __webpack_require__(11);
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement("div") : null;
	var shouldWrap = {};
	var selectWrap = [1, '<select multiple="true">', "</select>"];
	var tableWrap = [1, "<table>", "</table>"];
	var trWrap = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"];
	var markupWrap = {
		"*": [1, "?<div>", "</div>"],
		area: [1, "<map>", "</map>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		param: [1, "<object>", "</object>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		optgroup: selectWrap,
		option: selectWrap,
		caption: tableWrap,
		colgroup: tableWrap,
		tbody: tableWrap,
		tfoot: tableWrap,
		thead: tableWrap,
		td: trWrap,
		th: trWrap
	};
	var svgElements = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
	svgElements.forEach(function (nodeName) {
		markupWrap[nodeName] = svgWrap;
		shouldWrap[nodeName] = true;
	});
	function getMarkupWrap(nodeName) {
		!!!dummyNode ? false ? invariant(false, "Markup wrapping node not initialized") : invariant(false) : void 0;
		if (!markupWrap.hasOwnProperty(nodeName)) {
			nodeName = "*";
		}
		if (!shouldWrap.hasOwnProperty(nodeName)) {
			if (nodeName === "*") {
				dummyNode.innerHTML = "<link />";
			} else {
				dummyNode.innerHTML = "<" + nodeName + "></" + nodeName + ">";
			}
			shouldWrap[nodeName] = !dummyNode.firstChild;
		}
		return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}
	module.exports = getMarkupWrap;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMChildrenOperations = __webpack_require__(78);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMIDOperations = {
		dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
			var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
			DOMChildrenOperations.processUpdates(node, updates);
		}
	};
	module.exports = ReactDOMIDOperations;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var AutoFocusUtils = __webpack_require__(91);
	var CSSPropertyOperations = __webpack_require__(93);
	var DOMLazyTree = __webpack_require__(79);
	var DOMNamespaces = __webpack_require__(80);
	var DOMProperty = __webpack_require__(38);
	var DOMPropertyOperations = __webpack_require__(101);
	var EventPluginHub = __webpack_require__(44);
	var EventPluginRegistry = __webpack_require__(45);
	var ReactBrowserEventEmitter = __webpack_require__(103);
	var ReactDOMComponentFlags = __webpack_require__(39);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMInput = __webpack_require__(106);
	var ReactDOMOption = __webpack_require__(109);
	var ReactDOMSelect = __webpack_require__(110);
	var ReactDOMTextarea = __webpack_require__(111);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactMultiChild = __webpack_require__(112);
	var ReactServerRenderingTransaction = __webpack_require__(131);
	var emptyFunction = __webpack_require__(8);
	var escapeTextContentForBrowser = __webpack_require__(84);
	var invariant = __webpack_require__(11);
	var isEventSupported = __webpack_require__(68);
	var shallowEqual = __webpack_require__(120);
	var inputValueTracking = __webpack_require__(66);
	var validateDOMNesting = __webpack_require__(134);
	var warning = __webpack_require__(7);
	var Flags = ReactDOMComponentFlags;
	var deleteListener = EventPluginHub.deleteListener;
	var getNode = ReactDOMComponentTree.getNodeFromInstance;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = EventPluginRegistry.registrationNameModules;
	var CONTENT_TYPES = {
		string: true,
		number: true
	};
	var STYLE = "style";
	var HTML = "__html";
	var RESERVED_PROPS = {
		children: null,
		dangerouslySetInnerHTML: null,
		suppressContentEditableWarning: null
	};
	var DOC_FRAGMENT_TYPE = 11;
	function getDeclarationErrorAddendum(internalInstance) {
		if (internalInstance) {
			var owner = internalInstance._currentElement._owner || null;
			if (owner) {
				var name = owner.getName();
				if (name) {
					return " This DOM node was rendered by `" + name + "`.";
				}
			}
		}
		return "";
	}
	function friendlyStringify(obj) {
		if (typeof obj === "object") {
			if (Array.isArray(obj)) {
				return "[" + obj.map(friendlyStringify).join(", ") + "]";
			} else {
				var pairs = [];
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) {
						var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
						pairs.push(keyEscaped + ": " + friendlyStringify(obj[key]));
					}
				}
				return "{" + pairs.join(", ") + "}";
			}
		} else if (typeof obj === "string") {
			return JSON.stringify(obj);
		} else if (typeof obj === "function") {
			return "[function object]";
		}
		return String(obj);
	}
	var styleMutationWarning = {};
	function checkAndWarnForMutatedStyle(style1, style2, component) {
		if (style1 == null || style2 == null) {
			return;
		}
		if (shallowEqual(style1, style2)) {
			return;
		}
		var componentName = component._tag;
		var owner = component._currentElement._owner;
		var ownerName;
		if (owner) {
			ownerName = owner.getName();
		}
		var hash = ownerName + "|" + componentName;
		if (styleMutationWarning.hasOwnProperty(hash)) {
			return;
		}
		styleMutationWarning[hash] = true;
		false ? warning(false, "`%s` was passed a style object that has previously been mutated. " + "Mutating `style` is deprecated. Consider cloning it beforehand. Check " + "the `render` %s. Previous style: %s. Mutated style: %s.", componentName, owner ? "of `" + ownerName + "`" : "using <" + componentName + ">", friendlyStringify(style1), friendlyStringify(style2)) : void 0;
	}
	function assertValidProps(component, props) {
		if (!props) {
			return;
		}
		if (voidElementTags[component._tag]) {
			!(props.children == null && props.dangerouslySetInnerHTML == null) ? false ? invariant(false, "%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s", component._tag, component._currentElement._owner ? " Check the render method of " + component._currentElement._owner.getName() + "." : "") : _prodInvariant("137", component._tag, component._currentElement._owner ? " Check the render method of " + component._currentElement._owner.getName() + "." : "") : void 0;
		}
		if (props.dangerouslySetInnerHTML != null) {
			!(props.children == null) ? false ? invariant(false, "Can only set one of `children` or `props.dangerouslySetInnerHTML`.") : _prodInvariant("60") : void 0;
			!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML) ? false ? invariant(false, "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.") : _prodInvariant("61") : void 0;
		}
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(props.innerHTML == null, "Directly setting property `innerHTML` is not permitted. " + "For more information, lookup documentation on `dangerouslySetInnerHTML`.") : void 0;
			process.env.NODE_ENV !== "production" ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, "A component is `contentEditable` and contains `children` managed by " + "React. It is now your responsibility to guarantee that none of " + "those nodes are unexpectedly modified or duplicated. This is " + "probably not intentional.") : void 0;
			process.env.NODE_ENV !== "production" ? warning(props.onFocusIn == null && props.onFocusOut == null, "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. " + "All React events are normalized to bubble, so onFocusIn and onFocusOut " + "are not needed/supported by React.") : void 0;
		}
		!(props.style == null || typeof props.style === "object") ? false ? invariant(false, "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s", getDeclarationErrorAddendum(component)) : _prodInvariant("62", getDeclarationErrorAddendum(component)) : void 0;
	}
	function enqueuePutListener(inst, registrationName, listener, transaction) {
		if (transaction instanceof ReactServerRenderingTransaction) {
			return;
		}
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(registrationName !== "onScroll" || isEventSupported("scroll", true), "This browser doesn't support the `onScroll` event") : void 0;
		}
		var containerInfo = inst._hostContainerInfo;
		var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
		var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
		listenTo(registrationName, doc);
		transaction.getReactMountReady().enqueue(putListener, {
			inst: inst,
			registrationName: registrationName,
			listener: listener
		});
	}
	function putListener() {
		var listenerToPut = this;
		EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
	}
	function inputPostMount() {
		var inst = this;
		ReactDOMInput.postMountWrapper(inst);
	}
	function textareaPostMount() {
		var inst = this;
		ReactDOMTextarea.postMountWrapper(inst);
	}
	function optionPostMount() {
		var inst = this;
		ReactDOMOption.postMountWrapper(inst);
	}
	var setAndValidateContentChildDev = emptyFunction;
	if (false) {
		setAndValidateContentChildDev = function (content) {
			var hasExistingContent = this._contentDebugID != null;
			var debugID = this._debugID;
			var contentDebugID = -debugID;
			if (content == null) {
				if (hasExistingContent) {
					ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
				}
				this._contentDebugID = null;
				return;
			}
			validateDOMNesting(null, String(content), this, this._ancestorInfo);
			this._contentDebugID = contentDebugID;
			if (hasExistingContent) {
				ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
				ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
			} else {
				ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
				ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
				ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
			}
		};
	}
	var mediaEvents = {
		topAbort: "abort",
		topCanPlay: "canplay",
		topCanPlayThrough: "canplaythrough",
		topDurationChange: "durationchange",
		topEmptied: "emptied",
		topEncrypted: "encrypted",
		topEnded: "ended",
		topError: "error",
		topLoadedData: "loadeddata",
		topLoadedMetadata: "loadedmetadata",
		topLoadStart: "loadstart",
		topPause: "pause",
		topPlay: "play",
		topPlaying: "playing",
		topProgress: "progress",
		topRateChange: "ratechange",
		topSeeked: "seeked",
		topSeeking: "seeking",
		topStalled: "stalled",
		topSuspend: "suspend",
		topTimeUpdate: "timeupdate",
		topVolumeChange: "volumechange",
		topWaiting: "waiting"
	};
	function trackInputValue() {
		inputValueTracking.track(this);
	}
	function trapBubbledEventsLocal() {
		var inst = this;
		!inst._rootNodeID ? false ? invariant(false, "Must be mounted to trap events") : _prodInvariant("63") : void 0;
		var node = getNode(inst);
		!node ? false ? invariant(false, "trapBubbledEvent(...): Requires node to be rendered.") : _prodInvariant("64") : void 0;
		switch (inst._tag) {
			case "iframe":
			case "object":
				inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent("topLoad", "load", node)];
				break;

			case "video":
			case "audio":
				inst._wrapperState.listeners = [];
				for (var event in mediaEvents) {
					if (mediaEvents.hasOwnProperty(event)) {
						inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(event, mediaEvents[event], node));
					}
				}
				break;

			case "source":
				inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent("topError", "error", node)];
				break;

			case "img":
				inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent("topError", "error", node), ReactBrowserEventEmitter.trapBubbledEvent("topLoad", "load", node)];
				break;

			case "form":
				inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent("topReset", "reset", node), ReactBrowserEventEmitter.trapBubbledEvent("topSubmit", "submit", node)];
				break;

			case "input":
			case "select":
			case "textarea":
				inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent("topInvalid", "invalid", node)];
				break;
		}
	}
	function postUpdateSelectWrapper() {
		ReactDOMSelect.postUpdateWrapper(this);
	}
	var omittedCloseTags = {
		area: true,
		base: true,
		br: true,
		col: true,
		embed: true,
		hr: true,
		img: true,
		input: true,
		keygen: true,
		link: true,
		meta: true,
		param: true,
		source: true,
		track: true,
		wbr: true
	};
	var newlineEatingTags = {
		listing: true,
		pre: true,
		textarea: true
	};
	var voidElementTags = _assign({
		menuitem: true
	}, omittedCloseTags);
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;
	function validateDangerousTag(tag) {
		if (!hasOwnProperty.call(validatedTagCache, tag)) {
			!VALID_TAG_REGEX.test(tag) ? false ? invariant(false, "Invalid tag: %s", tag) : _prodInvariant("65", tag) : void 0;
			validatedTagCache[tag] = true;
		}
	}
	function isCustomComponent(tagName, props) {
		return tagName.indexOf("-") >= 0 || props.is != null;
	}
	var globalIdCounter = 1;
	function ReactDOMComponent(element) {
		var tag = element.type;
		validateDangerousTag(tag);
		this._currentElement = element;
		this._tag = tag.toLowerCase();
		this._namespaceURI = null;
		this._renderedChildren = null;
		this._previousStyle = null;
		this._previousStyleCopy = null;
		this._hostNode = null;
		this._hostParent = null;
		this._rootNodeID = 0;
		this._domID = 0;
		this._hostContainerInfo = null;
		this._wrapperState = null;
		this._topLevelWrapper = null;
		this._flags = 0;
		if (false) {
			this._ancestorInfo = null;
			setAndValidateContentChildDev.call(this, null);
		}
	}
	ReactDOMComponent.displayName = "ReactDOMComponent";
	ReactDOMComponent.Mixin = {
		mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
			this._rootNodeID = globalIdCounter++;
			this._domID = hostContainerInfo._idCounter++;
			this._hostParent = hostParent;
			this._hostContainerInfo = hostContainerInfo;
			var props = this._currentElement.props;
			switch (this._tag) {
				case "audio":
				case "form":
				case "iframe":
				case "img":
				case "link":
				case "object":
				case "source":
				case "video":
					this._wrapperState = {
						listeners: null
					};
					transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
					break;

				case "input":
					ReactDOMInput.mountWrapper(this, props, hostParent);
					props = ReactDOMInput.getHostProps(this, props);
					transaction.getReactMountReady().enqueue(trackInputValue, this);
					transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
					break;

				case "option":
					ReactDOMOption.mountWrapper(this, props, hostParent);
					props = ReactDOMOption.getHostProps(this, props);
					break;

				case "select":
					ReactDOMSelect.mountWrapper(this, props, hostParent);
					props = ReactDOMSelect.getHostProps(this, props);
					transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
					break;

				case "textarea":
					ReactDOMTextarea.mountWrapper(this, props, hostParent);
					props = ReactDOMTextarea.getHostProps(this, props);
					transaction.getReactMountReady().enqueue(trackInputValue, this);
					transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
					break;
			}
			assertValidProps(this, props);
			var namespaceURI;
			var parentTag;
			if (hostParent != null) {
				namespaceURI = hostParent._namespaceURI;
				parentTag = hostParent._tag;
			} else if (hostContainerInfo._tag) {
				namespaceURI = hostContainerInfo._namespaceURI;
				parentTag = hostContainerInfo._tag;
			}
			if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === "foreignobject") {
				namespaceURI = DOMNamespaces.html;
			}
			if (namespaceURI === DOMNamespaces.html) {
				if (this._tag === "svg") {
					namespaceURI = DOMNamespaces.svg;
				} else if (this._tag === "math") {
					namespaceURI = DOMNamespaces.mathml;
				}
			}
			this._namespaceURI = namespaceURI;
			if (false) {
				var parentInfo;
				if (hostParent != null) {
					parentInfo = hostParent._ancestorInfo;
				} else if (hostContainerInfo._tag) {
					parentInfo = hostContainerInfo._ancestorInfo;
				}
				if (parentInfo) {
					validateDOMNesting(this._tag, null, this, parentInfo);
				}
				this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
			}
			var mountImage;
			if (transaction.useCreateElement) {
				var ownerDocument = hostContainerInfo._ownerDocument;
				var el;
				if (namespaceURI === DOMNamespaces.html) {
					if (this._tag === "script") {
						var div = ownerDocument.createElement("div");
						var type = this._currentElement.type;
						div.innerHTML = "<" + type + "></" + type + ">";
						el = div.removeChild(div.firstChild);
					} else if (props.is) {
						el = ownerDocument.createElement(this._currentElement.type, props.is);
					} else {
						el = ownerDocument.createElement(this._currentElement.type);
					}
				} else {
					el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
				}
				ReactDOMComponentTree.precacheNode(this, el);
				this._flags |= Flags.hasCachedChildNodes;
				if (!this._hostParent) {
					DOMPropertyOperations.setAttributeForRoot(el);
				}
				this._updateDOMProperties(null, props, transaction);
				var lazyTree = DOMLazyTree(el);
				this._createInitialChildren(transaction, props, context, lazyTree);
				mountImage = lazyTree;
			} else {
				var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
				var tagContent = this._createContentMarkup(transaction, props, context);
				if (!tagContent && omittedCloseTags[this._tag]) {
					mountImage = tagOpen + "/>";
				} else {
					mountImage = tagOpen + ">" + tagContent + "</" + this._currentElement.type + ">";
				}
			}
			switch (this._tag) {
				case "input":
					transaction.getReactMountReady().enqueue(inputPostMount, this);
					if (props.autoFocus) {
						transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
					}
					break;

				case "textarea":
					transaction.getReactMountReady().enqueue(textareaPostMount, this);
					if (props.autoFocus) {
						transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
					}
					break;

				case "select":
					if (props.autoFocus) {
						transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
					}
					break;

				case "button":
					if (props.autoFocus) {
						transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
					}
					break;

				case "option":
					transaction.getReactMountReady().enqueue(optionPostMount, this);
					break;
			}
			return mountImage;
		},
		_createOpenTagMarkupAndPutListeners: function (transaction, props) {
			var ret = "<" + this._currentElement.type;
			for (var propKey in props) {
				if (!props.hasOwnProperty(propKey)) {
					continue;
				}
				var propValue = props[propKey];
				if (propValue == null) {
					continue;
				}
				if (registrationNameModules.hasOwnProperty(propKey)) {
					if (propValue) {
						enqueuePutListener(this, propKey, propValue, transaction);
					}
				} else {
					if (propKey === STYLE) {
						if (propValue) {
							if (false) {
								this._previousStyle = propValue;
							}
							propValue = this._previousStyleCopy = _assign({}, props.style);
						}
						propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
					}
					var markup = null;
					if (this._tag != null && isCustomComponent(this._tag, props)) {
						if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
							markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
						}
					} else {
						markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
					}
					if (markup) {
						ret += " " + markup;
					}
				}
			}
			if (transaction.renderToStaticMarkup) {
				return ret;
			}
			if (!this._hostParent) {
				ret += " " + DOMPropertyOperations.createMarkupForRoot();
			}
			ret += " " + DOMPropertyOperations.createMarkupForID(this._domID);
			return ret;
		},
		_createContentMarkup: function (transaction, props, context) {
			var ret = "";
			var innerHTML = props.dangerouslySetInnerHTML;
			if (innerHTML != null) {
				if (innerHTML.__html != null) {
					ret = innerHTML.__html;
				}
			} else {
				var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
				var childrenToUse = contentToUse != null ? null : props.children;
				if (contentToUse != null) {
					ret = escapeTextContentForBrowser(contentToUse);
					if (false) {
						setAndValidateContentChildDev.call(this, contentToUse);
					}
				} else if (childrenToUse != null) {
					var mountImages = this.mountChildren(childrenToUse, transaction, context);
					ret = mountImages.join("");
				}
			}
			if (newlineEatingTags[this._tag] && ret.charAt(0) === "\n") {
				return "\n" + ret;
			} else {
				return ret;
			}
		},
		_createInitialChildren: function (transaction, props, context, lazyTree) {
			var innerHTML = props.dangerouslySetInnerHTML;
			if (innerHTML != null) {
				if (innerHTML.__html != null) {
					DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
				}
			} else {
				var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
				var childrenToUse = contentToUse != null ? null : props.children;
				if (contentToUse != null) {
					if (contentToUse !== "") {
						if (false) {
							setAndValidateContentChildDev.call(this, contentToUse);
						}
						DOMLazyTree.queueText(lazyTree, contentToUse);
					}
				} else if (childrenToUse != null) {
					var mountImages = this.mountChildren(childrenToUse, transaction, context);
					for (var i = 0; i < mountImages.length; i++) {
						DOMLazyTree.queueChild(lazyTree, mountImages[i]);
					}
				}
			}
		},
		receiveComponent: function (nextElement, transaction, context) {
			var prevElement = this._currentElement;
			this._currentElement = nextElement;
			this.updateComponent(transaction, prevElement, nextElement, context);
		},
		updateComponent: function (transaction, prevElement, nextElement, context) {
			var lastProps = prevElement.props;
			var nextProps = this._currentElement.props;
			switch (this._tag) {
				case "input":
					lastProps = ReactDOMInput.getHostProps(this, lastProps);
					nextProps = ReactDOMInput.getHostProps(this, nextProps);
					break;

				case "option":
					lastProps = ReactDOMOption.getHostProps(this, lastProps);
					nextProps = ReactDOMOption.getHostProps(this, nextProps);
					break;

				case "select":
					lastProps = ReactDOMSelect.getHostProps(this, lastProps);
					nextProps = ReactDOMSelect.getHostProps(this, nextProps);
					break;

				case "textarea":
					lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
					nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
					break;
			}
			assertValidProps(this, nextProps);
			this._updateDOMProperties(lastProps, nextProps, transaction);
			this._updateDOMChildren(lastProps, nextProps, transaction, context);
			switch (this._tag) {
				case "input":
					ReactDOMInput.updateWrapper(this);
					inputValueTracking.updateValueIfChanged(this);
					break;

				case "textarea":
					ReactDOMTextarea.updateWrapper(this);
					break;

				case "select":
					transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
					break;
			}
		},
		_updateDOMProperties: function (lastProps, nextProps, transaction) {
			var propKey;
			var styleName;
			var styleUpdates;
			for (propKey in lastProps) {
				if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
					continue;
				}
				if (propKey === STYLE) {
					var lastStyle = this._previousStyleCopy;
					for (styleName in lastStyle) {
						if (lastStyle.hasOwnProperty(styleName)) {
							styleUpdates = styleUpdates || {};
							styleUpdates[styleName] = "";
						}
					}
					this._previousStyleCopy = null;
				} else if (registrationNameModules.hasOwnProperty(propKey)) {
					if (lastProps[propKey]) {
						deleteListener(this, propKey);
					}
				} else if (isCustomComponent(this._tag, lastProps)) {
					if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
						DOMPropertyOperations.deleteValueForAttribute(getNode(this), propKey);
					}
				} else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
					DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
				}
			}
			for (propKey in nextProps) {
				var nextProp = nextProps[propKey];
				var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
				if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
					continue;
				}
				if (propKey === STYLE) {
					if (nextProp) {
						if (false) {
							checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
							this._previousStyle = nextProp;
						}
						nextProp = this._previousStyleCopy = _assign({}, nextProp);
					} else {
						this._previousStyleCopy = null;
					}
					if (lastProp) {
						for (styleName in lastProp) {
							if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
								styleUpdates = styleUpdates || {};
								styleUpdates[styleName] = "";
							}
						}
						for (styleName in nextProp) {
							if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
								styleUpdates = styleUpdates || {};
								styleUpdates[styleName] = nextProp[styleName];
							}
						}
					} else {
						styleUpdates = nextProp;
					}
				} else if (registrationNameModules.hasOwnProperty(propKey)) {
					if (nextProp) {
						enqueuePutListener(this, propKey, nextProp, transaction);
					} else if (lastProp) {
						deleteListener(this, propKey);
					}
				} else if (isCustomComponent(this._tag, nextProps)) {
					if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
						DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
					}
				} else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
					var node = getNode(this);
					if (nextProp != null) {
						DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
					} else {
						DOMPropertyOperations.deleteValueForProperty(node, propKey);
					}
				}
			}
			if (styleUpdates) {
				CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
			}
		},
		_updateDOMChildren: function (lastProps, nextProps, transaction, context) {
			var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
			var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
			var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
			var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
			var lastChildren = lastContent != null ? null : lastProps.children;
			var nextChildren = nextContent != null ? null : nextProps.children;
			var lastHasContentOrHtml = lastContent != null || lastHtml != null;
			var nextHasContentOrHtml = nextContent != null || nextHtml != null;
			if (lastChildren != null && nextChildren == null) {
				this.updateChildren(null, transaction, context);
			} else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
				this.updateTextContent("");
				if (false) {
					ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
				}
			}
			if (nextContent != null) {
				if (lastContent !== nextContent) {
					this.updateTextContent("" + nextContent);
					if (false) {
						setAndValidateContentChildDev.call(this, nextContent);
					}
				}
			} else if (nextHtml != null) {
				if (lastHtml !== nextHtml) {
					this.updateMarkup("" + nextHtml);
				}
				if (false) {
					ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
				}
			} else if (nextChildren != null) {
				if (false) {
					setAndValidateContentChildDev.call(this, null);
				}
				this.updateChildren(nextChildren, transaction, context);
			}
		},
		getHostNode: function () {
			return getNode(this);
		},
		unmountComponent: function (safely) {
			switch (this._tag) {
				case "audio":
				case "form":
				case "iframe":
				case "img":
				case "link":
				case "object":
				case "source":
				case "video":
					var listeners = this._wrapperState.listeners;
					if (listeners) {
						for (var i = 0; i < listeners.length; i++) {
							listeners[i].remove();
						}
					}
					break;

				case "input":
				case "textarea":
					inputValueTracking.stopTracking(this);
					break;

				case "html":
				case "head":
				case "body":
					true ? false ? invariant(false, "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.", this._tag) : _prodInvariant("66", this._tag) : void 0;
					break;
			}
			this.unmountChildren(safely);
			ReactDOMComponentTree.uncacheNode(this);
			EventPluginHub.deleteAllListeners(this);
			this._rootNodeID = 0;
			this._domID = 0;
			this._wrapperState = null;
			if (false) {
				setAndValidateContentChildDev.call(this, null);
			}
		},
		getPublicInstance: function () {
			return getNode(this);
		}
	};
	_assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
	module.exports = ReactDOMComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactDOMComponentTree = __webpack_require__(36);
	var focusNode = __webpack_require__(92);
	var AutoFocusUtils = {
		focusDOMComponent: function () {
			focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
		}
	};
	module.exports = AutoFocusUtils;
}, function (module, exports) {
	"use strict";
	function focusNode(node) {
		try {
			node.focus();
		} catch (e) { }
	}
	module.exports = focusNode;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var CSSProperty = __webpack_require__(94);
	var ExecutionEnvironment = __webpack_require__(50);
	var ReactInstrumentation = __webpack_require__(64);
	var camelizeStyleName = __webpack_require__(95);
	var dangerousStyleValue = __webpack_require__(97);
	var hyphenateStyleName = __webpack_require__(98);
	var memoizeStringOnly = __webpack_require__(100);
	var warning = __webpack_require__(7);
	var processStyleName = memoizeStringOnly(function (styleName) {
		return hyphenateStyleName(styleName);
	});
	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = "cssFloat";
	if (ExecutionEnvironment.canUseDOM) {
		var tempStyle = document.createElement("div").style;
		try {
			tempStyle.font = "";
		} catch (e) {
			hasShorthandPropertyBug = true;
		}
		if (document.documentElement.style.cssFloat === undefined) {
			styleFloatAccessor = "styleFloat";
		}
	}
	if (false) {
		var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
		var badStyleValueWithSemicolonPattern = /;\s*$/;
		var warnedStyleNames = {};
		var warnedStyleValues = {};
		var warnedForNaNValue = false;
		var warnHyphenatedStyleName = function (name, owner) {
			if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
				return;
			}
			warnedStyleNames[name] = true;
			process.env.NODE_ENV !== "production" ? warning(false, "Unsupported style property %s. Did you mean %s?%s", name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
		};
		var warnBadVendoredStyleName = function (name, owner) {
			if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
				return;
			}
			warnedStyleNames[name] = true;
			process.env.NODE_ENV !== "production" ? warning(false, "Unsupported vendor-prefixed style property %s. Did you mean %s?%s", name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
		};
		var warnStyleValueWithSemicolon = function (name, value, owner) {
			if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
				return;
			}
			warnedStyleValues[value] = true;
			process.env.NODE_ENV !== "production" ? warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, "")) : void 0;
		};
		var warnStyleValueIsNaN = function (name, value, owner) {
			if (warnedForNaNValue) {
				return;
			}
			warnedForNaNValue = true;
			process.env.NODE_ENV !== "production" ? warning(false, "`NaN` is an invalid value for the `%s` css style property.%s", name, checkRenderMessage(owner)) : void 0;
		};
		var checkRenderMessage = function (owner) {
			if (owner) {
				var name = owner.getName();
				if (name) {
					return " Check the render method of `" + name + "`.";
				}
			}
			return "";
		};
		var warnValidStyle = function (name, value, component) {
			var owner;
			if (component) {
				owner = component._currentElement._owner;
			}
			if (name.indexOf("-") > -1) {
				warnHyphenatedStyleName(name, owner);
			} else if (badVendoredStyleNamePattern.test(name)) {
				warnBadVendoredStyleName(name, owner);
			} else if (badStyleValueWithSemicolonPattern.test(value)) {
				warnStyleValueWithSemicolon(name, value, owner);
			}
			if (typeof value === "number" && isNaN(value)) {
				warnStyleValueIsNaN(name, value, owner);
			}
		};
	}
	var CSSPropertyOperations = {
		createMarkupForStyles: function (styles, component) {
			var serialized = "";
			for (var styleName in styles) {
				if (!styles.hasOwnProperty(styleName)) {
					continue;
				}
				var isCustomProperty = styleName.indexOf("--") === 0;
				var styleValue = styles[styleName];
				if (false) {
					if (!isCustomProperty) {
						warnValidStyle(styleName, styleValue, component);
					}
				}
				if (styleValue != null) {
					serialized += processStyleName(styleName) + ":";
					serialized += dangerousStyleValue(styleName, styleValue, component, isCustomProperty) + ";";
				}
			}
			return serialized || null;
		},
		setValueForStyles: function (node, styles, component) {
			if (false) {
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: component._debugID,
					type: "update styles",
					payload: styles
				});
			}
			var style = node.style;
			for (var styleName in styles) {
				if (!styles.hasOwnProperty(styleName)) {
					continue;
				}
				var isCustomProperty = styleName.indexOf("--") === 0;
				if (false) {
					if (!isCustomProperty) {
						warnValidStyle(styleName, styles[styleName], component);
					}
				}
				var styleValue = dangerousStyleValue(styleName, styles[styleName], component, isCustomProperty);
				if (styleName === "float" || styleName === "cssFloat") {
					styleName = styleFloatAccessor;
				}
				if (isCustomProperty) {
					style.setProperty(styleName, styleValue);
				} else if (styleValue) {
					style[styleName] = styleValue;
				} else {
					var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
					if (expansion) {
						for (var individualStyleName in expansion) {
							style[individualStyleName] = "";
						}
					} else {
						style[styleName] = "";
					}
				}
			}
		}
	};
	module.exports = CSSPropertyOperations;
}, function (module, exports) {
	"use strict";
	var isUnitlessNumber = {
		animationIterationCount: true,
		borderImageOutset: true,
		borderImageSlice: true,
		borderImageWidth: true,
		boxFlex: true,
		boxFlexGroup: true,
		boxOrdinalGroup: true,
		columnCount: true,
		columns: true,
		flex: true,
		flexGrow: true,
		flexPositive: true,
		flexShrink: true,
		flexNegative: true,
		flexOrder: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowSpan: true,
		gridRowStart: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnSpan: true,
		gridColumnStart: true,
		fontWeight: true,
		lineClamp: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		tabSize: true,
		widows: true,
		zIndex: true,
		zoom: true,
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeDasharray: true,
		strokeDashoffset: true,
		strokeMiterlimit: true,
		strokeOpacity: true,
		strokeWidth: true
	};
	function prefixKey(prefix, key) {
		return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	var prefixes = ["Webkit", "ms", "Moz", "O"];
	Object.keys(isUnitlessNumber).forEach(function (prop) {
		prefixes.forEach(function (prefix) {
			isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
		});
	});
	var shorthandPropertyExpansions = {
		background: {
			backgroundAttachment: true,
			backgroundColor: true,
			backgroundImage: true,
			backgroundPositionX: true,
			backgroundPositionY: true,
			backgroundRepeat: true
		},
		backgroundPosition: {
			backgroundPositionX: true,
			backgroundPositionY: true
		},
		border: {
			borderWidth: true,
			borderStyle: true,
			borderColor: true
		},
		borderBottom: {
			borderBottomWidth: true,
			borderBottomStyle: true,
			borderBottomColor: true
		},
		borderLeft: {
			borderLeftWidth: true,
			borderLeftStyle: true,
			borderLeftColor: true
		},
		borderRight: {
			borderRightWidth: true,
			borderRightStyle: true,
			borderRightColor: true
		},
		borderTop: {
			borderTopWidth: true,
			borderTopStyle: true,
			borderTopColor: true
		},
		font: {
			fontStyle: true,
			fontVariant: true,
			fontWeight: true,
			fontSize: true,
			lineHeight: true,
			fontFamily: true
		},
		outline: {
			outlineWidth: true,
			outlineStyle: true,
			outlineColor: true
		}
	};
	var CSSProperty = {
		isUnitlessNumber: isUnitlessNumber,
		shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	module.exports = CSSProperty;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var camelize = __webpack_require__(96);
	var msPattern = /^-ms-/;
	function camelizeStyleName(string) {
		return camelize(string.replace(msPattern, "ms-"));
	}
	module.exports = camelizeStyleName;
}, function (module, exports) {
	"use strict";
	var _hyphenPattern = /-(.)/g;
	function camelize(string) {
		return string.replace(_hyphenPattern, function (_, character) {
			return character.toUpperCase();
		});
	}
	module.exports = camelize;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var CSSProperty = __webpack_require__(94);
	var warning = __webpack_require__(7);
	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};
	function dangerousStyleValue(name, value, component, isCustomProperty) {
		var isEmpty = value == null || typeof value === "boolean" || value === "";
		if (isEmpty) {
			return "";
		}
		var isNonNumeric = isNaN(value);
		if (isCustomProperty || isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
			return "" + value;
		}
		if (typeof value === "string") {
			if (false) {
				if (component && value !== "0") {
					var owner = component._currentElement._owner;
					var ownerName = owner ? owner.getName() : null;
					if (ownerName && !styleWarnings[ownerName]) {
						styleWarnings[ownerName] = {};
					}
					var warned = false;
					if (ownerName) {
						var warnings = styleWarnings[ownerName];
						warned = warnings[name];
						if (!warned) {
							warnings[name] = true;
						}
					}
					if (!warned) {
						process.env.NODE_ENV !== "production" ? warning(false, "a `%s` tag (owner: `%s`) was passed a numeric string value " + "for CSS property `%s` (value: `%s`) which will be treated " + "as a unitless number in a future version of React.", component._currentElement.type, ownerName || "unknown", name, value) : void 0;
					}
				}
			}
			value = value.trim();
		}
		return value + "px";
	}
	module.exports = dangerousStyleValue;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var hyphenate = __webpack_require__(99);
	var msPattern = /^ms-/;
	function hyphenateStyleName(string) {
		return hyphenate(string).replace(msPattern, "-ms-");
	}
	module.exports = hyphenateStyleName;
}, function (module, exports) {
	"use strict";
	var _uppercasePattern = /([A-Z])/g;
	function hyphenate(string) {
		return string.replace(_uppercasePattern, "-$1").toLowerCase();
	}
	module.exports = hyphenate;
}, function (module, exports) {
	"use strict";
	function memoizeStringOnly(callback) {
		var cache = {};
		return function (string) {
			if (!cache.hasOwnProperty(string)) {
				cache[string] = callback.call(this, string);
			}
			return cache[string];
		};
	}
	module.exports = memoizeStringOnly;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMProperty = __webpack_require__(38);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactInstrumentation = __webpack_require__(64);
	var quoteAttributeValueForBrowser = __webpack_require__(102);
	var warning = __webpack_require__(7);
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + DOMProperty.ATTRIBUTE_NAME_START_CHAR + "][" + DOMProperty.ATTRIBUTE_NAME_CHAR + "]*$");
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
			return true;
		}
		if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
			return false;
		}
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
			validatedAttributeNameCache[attributeName] = true;
			return true;
		}
		illegalAttributeNameCache[attributeName] = true;
		false ? warning(false, "Invalid attribute name: `%s`", attributeName) : void 0;
		return false;
	}
	function shouldIgnoreValue(propertyInfo, value) {
		return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}
	var DOMPropertyOperations = {
		createMarkupForID: function (id) {
			return DOMProperty.ID_ATTRIBUTE_NAME + "=" + quoteAttributeValueForBrowser(id);
		},
		setAttributeForID: function (node, id) {
			node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
		},
		createMarkupForRoot: function () {
			return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
		},
		setAttributeForRoot: function (node) {
			node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, "");
		},
		createMarkupForProperty: function (name, value) {
			var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
			if (propertyInfo) {
				if (shouldIgnoreValue(propertyInfo, value)) {
					return "";
				}
				var attributeName = propertyInfo.attributeName;
				if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
					return attributeName + '=""';
				}
				return attributeName + "=" + quoteAttributeValueForBrowser(value);
			} else if (DOMProperty.isCustomAttribute(name)) {
				if (value == null) {
					return "";
				}
				return name + "=" + quoteAttributeValueForBrowser(value);
			}
			return null;
		},
		createMarkupForCustomAttribute: function (name, value) {
			if (!isAttributeNameSafe(name) || value == null) {
				return "";
			}
			return name + "=" + quoteAttributeValueForBrowser(value);
		},
		setValueForProperty: function (node, name, value) {
			var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
			if (propertyInfo) {
				var mutationMethod = propertyInfo.mutationMethod;
				if (mutationMethod) {
					mutationMethod(node, value);
				} else if (shouldIgnoreValue(propertyInfo, value)) {
					this.deleteValueForProperty(node, name);
					return;
				} else if (propertyInfo.mustUseProperty) {
					node[propertyInfo.propertyName] = value;
				} else {
					var attributeName = propertyInfo.attributeName;
					var namespace = propertyInfo.attributeNamespace;
					if (namespace) {
						node.setAttributeNS(namespace, attributeName, "" + value);
					} else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
						node.setAttribute(attributeName, "");
					} else {
						node.setAttribute(attributeName, "" + value);
					}
				}
			} else if (DOMProperty.isCustomAttribute(name)) {
				DOMPropertyOperations.setValueForAttribute(node, name, value);
				return;
			}
			if (false) {
				var payload = {};
				payload[name] = value;
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
					type: "update attribute",
					payload: payload
				});
			}
		},
		setValueForAttribute: function (node, name, value) {
			if (!isAttributeNameSafe(name)) {
				return;
			}
			if (value == null) {
				node.removeAttribute(name);
			} else {
				node.setAttribute(name, "" + value);
			}
			if (false) {
				var payload = {};
				payload[name] = value;
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
					type: "update attribute",
					payload: payload
				});
			}
		},
		deleteValueForAttribute: function (node, name) {
			node.removeAttribute(name);
			if (false) {
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
					type: "remove attribute",
					payload: name
				});
			}
		},
		deleteValueForProperty: function (node, name) {
			var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
			if (propertyInfo) {
				var mutationMethod = propertyInfo.mutationMethod;
				if (mutationMethod) {
					mutationMethod(node, undefined);
				} else if (propertyInfo.mustUseProperty) {
					var propName = propertyInfo.propertyName;
					if (propertyInfo.hasBooleanValue) {
						node[propName] = false;
					} else {
						node[propName] = "";
					}
				} else {
					node.removeAttribute(propertyInfo.attributeName);
				}
			} else if (DOMProperty.isCustomAttribute(name)) {
				node.removeAttribute(name);
			}
			if (false) {
				ReactInstrumentation.debugTool.onHostOperation({
					instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
					type: "remove attribute",
					payload: name
				});
			}
		}
	};
	module.exports = DOMPropertyOperations;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var escapeTextContentForBrowser = __webpack_require__(84);
	function quoteAttributeValueForBrowser(value) {
		return '"' + escapeTextContentForBrowser(value) + '"';
	}
	module.exports = quoteAttributeValueForBrowser;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var EventPluginRegistry = __webpack_require__(45);
	var ReactEventEmitterMixin = __webpack_require__(104);
	var ViewportMetrics = __webpack_require__(74);
	var getVendorPrefixedEventName = __webpack_require__(105);
	var isEventSupported = __webpack_require__(68);
	var hasEventPageXY;
	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;
	var topEventMapping = {
		topAbort: "abort",
		topAnimationEnd: getVendorPrefixedEventName("animationend") || "animationend",
		topAnimationIteration: getVendorPrefixedEventName("animationiteration") || "animationiteration",
		topAnimationStart: getVendorPrefixedEventName("animationstart") || "animationstart",
		topBlur: "blur",
		topCanPlay: "canplay",
		topCanPlayThrough: "canplaythrough",
		topChange: "change",
		topClick: "click",
		topCompositionEnd: "compositionend",
		topCompositionStart: "compositionstart",
		topCompositionUpdate: "compositionupdate",
		topContextMenu: "contextmenu",
		topCopy: "copy",
		topCut: "cut",
		topDoubleClick: "dblclick",
		topDrag: "drag",
		topDragEnd: "dragend",
		topDragEnter: "dragenter",
		topDragExit: "dragexit",
		topDragLeave: "dragleave",
		topDragOver: "dragover",
		topDragStart: "dragstart",
		topDrop: "drop",
		topDurationChange: "durationchange",
		topEmptied: "emptied",
		topEncrypted: "encrypted",
		topEnded: "ended",
		topError: "error",
		topFocus: "focus",
		topInput: "input",
		topKeyDown: "keydown",
		topKeyPress: "keypress",
		topKeyUp: "keyup",
		topLoadedData: "loadeddata",
		topLoadedMetadata: "loadedmetadata",
		topLoadStart: "loadstart",
		topMouseDown: "mousedown",
		topMouseMove: "mousemove",
		topMouseOut: "mouseout",
		topMouseOver: "mouseover",
		topMouseUp: "mouseup",
		topPaste: "paste",
		topPause: "pause",
		topPlay: "play",
		topPlaying: "playing",
		topProgress: "progress",
		topRateChange: "ratechange",
		topScroll: "scroll",
		topSeeked: "seeked",
		topSeeking: "seeking",
		topSelectionChange: "selectionchange",
		topStalled: "stalled",
		topSuspend: "suspend",
		topTextInput: "textInput",
		topTimeUpdate: "timeupdate",
		topTouchCancel: "touchcancel",
		topTouchEnd: "touchend",
		topTouchMove: "touchmove",
		topTouchStart: "touchstart",
		topTransitionEnd: getVendorPrefixedEventName("transitionend") || "transitionend",
		topVolumeChange: "volumechange",
		topWaiting: "waiting",
		topWheel: "wheel"
	};
	var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);
	function getListeningForDocument(mountAt) {
		if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
			mountAt[topListenersIDKey] = reactTopListenersCounter++;
			alreadyListeningTo[mountAt[topListenersIDKey]] = {};
		}
		return alreadyListeningTo[mountAt[topListenersIDKey]];
	}
	var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {
		ReactEventListener: null,
		injection: {
			injectReactEventListener: function (ReactEventListener) {
				ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
				ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
			}
		},
		setEnabled: function (enabled) {
			if (ReactBrowserEventEmitter.ReactEventListener) {
				ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
			}
		},
		isEnabled: function () {
			return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
		},
		listenTo: function (registrationName, contentDocumentHandle) {
			var mountAt = contentDocumentHandle;
			var isListening = getListeningForDocument(mountAt);
			var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
			for (var i = 0; i < dependencies.length; i++) {
				var dependency = dependencies[i];
				if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
					if (dependency === "topWheel") {
						if (isEventSupported("wheel")) {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topWheel", "wheel", mountAt);
						} else if (isEventSupported("mousewheel")) {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", mountAt);
						} else {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", mountAt);
						}
					} else if (dependency === "topScroll") {
						if (isEventSupported("scroll", true)) {
							ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent("topScroll", "scroll", mountAt);
						} else {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topScroll", "scroll", ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
						}
					} else if (dependency === "topFocus" || dependency === "topBlur") {
						if (isEventSupported("focus", true)) {
							ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent("topFocus", "focus", mountAt);
							ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent("topBlur", "blur", mountAt);
						} else if (isEventSupported("focusin")) {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topFocus", "focusin", mountAt);
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent("topBlur", "focusout", mountAt);
						}
						isListening.topBlur = true;
						isListening.topFocus = true;
					} else if (topEventMapping.hasOwnProperty(dependency)) {
						ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
					}
					isListening[dependency] = true;
				}
			}
		},
		trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
			return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
		},
		trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
			return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
		},
		supportsEventPageXY: function () {
			if (!document.createEvent) {
				return false;
			}
			var ev = document.createEvent("MouseEvent");
			return ev != null && "pageX" in ev;
		},
		ensureScrollValueMonitoring: function () {
			if (hasEventPageXY === undefined) {
				hasEventPageXY = ReactBrowserEventEmitter.supportsEventPageXY();
			}
			if (!hasEventPageXY && !isMonitoringScrollValue) {
				var refresh = ViewportMetrics.refreshScrollValues;
				ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
				isMonitoringScrollValue = true;
			}
		}
	});
	module.exports = ReactBrowserEventEmitter;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPluginHub = __webpack_require__(44);
	function runEventQueueInBatch(events) {
		EventPluginHub.enqueueEvents(events);
		EventPluginHub.processEventQueue(false);
	}
	var ReactEventEmitterMixin = {
		handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
			runEventQueueInBatch(events);
		}
	};
	module.exports = ReactEventEmitterMixin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	function makePrefixMap(styleProp, eventName) {
		var prefixes = {};
		prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
		prefixes["Webkit" + styleProp] = "webkit" + eventName;
		prefixes["Moz" + styleProp] = "moz" + eventName;
		prefixes["ms" + styleProp] = "MS" + eventName;
		prefixes["O" + styleProp] = "o" + eventName.toLowerCase();
		return prefixes;
	}
	var vendorPrefixes = {
		animationend: makePrefixMap("Animation", "AnimationEnd"),
		animationiteration: makePrefixMap("Animation", "AnimationIteration"),
		animationstart: makePrefixMap("Animation", "AnimationStart"),
		transitionend: makePrefixMap("Transition", "TransitionEnd")
	};
	var prefixedEventNames = {};
	var style = {};
	if (ExecutionEnvironment.canUseDOM) {
		style = document.createElement("div").style;
		if (!("AnimationEvent" in window)) {
			delete vendorPrefixes.animationend.animation;
			delete vendorPrefixes.animationiteration.animation;
			delete vendorPrefixes.animationstart.animation;
		}
		if (!("TransitionEvent" in window)) {
			delete vendorPrefixes.transitionend.transition;
		}
	}
	function getVendorPrefixedEventName(eventName) {
		if (prefixedEventNames[eventName]) {
			return prefixedEventNames[eventName];
		} else if (!vendorPrefixes[eventName]) {
			return eventName;
		}
		var prefixMap = vendorPrefixes[eventName];
		for (var styleProp in prefixMap) {
			if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
				return prefixedEventNames[eventName] = prefixMap[styleProp];
			}
		}
		return "";
	}
	module.exports = getVendorPrefixedEventName;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var DOMPropertyOperations = __webpack_require__(101);
	var LinkedValueUtils = __webpack_require__(107);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactUpdates = __webpack_require__(58);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	var didWarnValueLink = false;
	var didWarnCheckedLink = false;
	var didWarnValueDefaultValue = false;
	var didWarnCheckedDefaultChecked = false;
	var didWarnControlledToUncontrolled = false;
	var didWarnUncontrolledToControlled = false;
	function forceUpdateIfMounted() {
		if (this._rootNodeID) {
			ReactDOMInput.updateWrapper(this);
		}
	}
	function isControlled(props) {
		var usesChecked = props.type === "checkbox" || props.type === "radio";
		return usesChecked ? props.checked != null : props.value != null;
	}
	var ReactDOMInput = {
		getHostProps: function (inst, props) {
			var value = LinkedValueUtils.getValue(props);
			var checked = LinkedValueUtils.getChecked(props);
			var hostProps = _assign({
				type: undefined,
				step: undefined,
				min: undefined,
				max: undefined
			}, props, {
				defaultChecked: undefined,
				defaultValue: undefined,
				value: value != null ? value : inst._wrapperState.initialValue,
				checked: checked != null ? checked : inst._wrapperState.initialChecked,
				onChange: inst._wrapperState.onChange
			});
			return hostProps;
		},
		mountWrapper: function (inst, props) {
			if (false) {
				LinkedValueUtils.checkPropTypes("input", props, inst._currentElement._owner);
				var owner = inst._currentElement._owner;
				if (props.valueLink !== undefined && !didWarnValueLink) {
					process.env.NODE_ENV !== "production" ? warning(false, "`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.") : void 0;
					didWarnValueLink = true;
				}
				if (props.checkedLink !== undefined && !didWarnCheckedLink) {
					process.env.NODE_ENV !== "production" ? warning(false, "`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.") : void 0;
					didWarnCheckedLink = true;
				}
				if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
					process.env.NODE_ENV !== "production" ? warning(false, "%s contains an input of type %s with both checked and defaultChecked props. " + "Input elements must be either controlled or uncontrolled " + "(specify either the checked prop, or the defaultChecked prop, but not " + "both). Decide between using a controlled or uncontrolled input " + "element and remove one of these props. More info: " + "https://fb.me/react-controlled-components", owner && owner.getName() || "A component", props.type) : void 0;
					didWarnCheckedDefaultChecked = true;
				}
				if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
					process.env.NODE_ENV !== "production" ? warning(false, "%s contains an input of type %s with both value and defaultValue props. " + "Input elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled input " + "element and remove one of these props. More info: " + "https://fb.me/react-controlled-components", owner && owner.getName() || "A component", props.type) : void 0;
					didWarnValueDefaultValue = true;
				}
			}
			var defaultValue = props.defaultValue;
			inst._wrapperState = {
				initialChecked: props.checked != null ? props.checked : props.defaultChecked,
				initialValue: props.value != null ? props.value : defaultValue,
				listeners: null,
				onChange: _handleChange.bind(inst),
				controlled: isControlled(props)
			};
		},
		updateWrapper: function (inst) {
			var props = inst._currentElement.props;
			if (false) {
				var controlled = isControlled(props);
				var owner = inst._currentElement._owner;
				if (!inst._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
					process.env.NODE_ENV !== "production" ? warning(false, "%s is changing an uncontrolled input of type %s to be controlled. " + "Input elements should not switch from uncontrolled to controlled (or vice versa). " + "Decide between using a controlled or uncontrolled input " + "element for the lifetime of the component. More info: https://fb.me/react-controlled-components", owner && owner.getName() || "A component", props.type) : void 0;
					didWarnUncontrolledToControlled = true;
				}
				if (inst._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
					process.env.NODE_ENV !== "production" ? warning(false, "%s is changing a controlled input of type %s to be uncontrolled. " + "Input elements should not switch from controlled to uncontrolled (or vice versa). " + "Decide between using a controlled or uncontrolled input " + "element for the lifetime of the component. More info: https://fb.me/react-controlled-components", owner && owner.getName() || "A component", props.type) : void 0;
					didWarnControlledToUncontrolled = true;
				}
			}
			var checked = props.checked;
			if (checked != null) {
				DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), "checked", checked || false);
			}
			var node = ReactDOMComponentTree.getNodeFromInstance(inst);
			var value = LinkedValueUtils.getValue(props);
			if (value != null) {
				if (value === 0 && node.value === "") {
					node.value = "0";
				} else if (props.type === "number") {
					var valueAsNumber = parseFloat(node.value, 10) || 0;
					if (value != valueAsNumber || value == valueAsNumber && node.value != value) {
						node.value = "" + value;
					}
				} else if (node.value !== "" + value) {
					node.value = "" + value;
				}
			} else {
				if (props.value == null && props.defaultValue != null) {
					if (node.defaultValue !== "" + props.defaultValue) {
						node.defaultValue = "" + props.defaultValue;
					}
				}
				if (props.checked == null && props.defaultChecked != null) {
					node.defaultChecked = !!props.defaultChecked;
				}
			}
		},
		postMountWrapper: function (inst) {
			var props = inst._currentElement.props;
			var node = ReactDOMComponentTree.getNodeFromInstance(inst);
			switch (props.type) {
				case "submit":
				case "reset":
					break;

				case "color":
				case "date":
				case "datetime":
				case "datetime-local":
				case "month":
				case "time":
				case "week":
					node.value = "";
					node.value = node.defaultValue;
					break;

				default:
					node.value = node.value;
					break;
			}
			var name = node.name;
			if (name !== "") {
				node.name = "";
			}
			node.defaultChecked = !node.defaultChecked;
			node.defaultChecked = !node.defaultChecked;
			if (name !== "") {
				node.name = name;
			}
		}
	};
	function _handleChange(event) {
		var props = this._currentElement.props;
		var returnValue = LinkedValueUtils.executeOnChange(props, event);
		ReactUpdates.asap(forceUpdateIfMounted, this);
		var name = props.name;
		if (props.type === "radio" && name != null) {
			var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
			var queryRoot = rootNode;
			while (queryRoot.parentNode) {
				queryRoot = queryRoot.parentNode;
			}
			var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]');
			for (var i = 0; i < group.length; i++) {
				var otherNode = group[i];
				if (otherNode === rootNode || otherNode.form !== rootNode.form) {
					continue;
				}
				var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
				!otherInstance ? false ? invariant(false, "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.") : _prodInvariant("90") : void 0;
				ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
			}
		}
		return returnValue;
	}
	module.exports = ReactDOMInput;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactPropTypesSecret = __webpack_require__(108);
	var propTypesFactory = __webpack_require__(23);
	var React = __webpack_require__(2);
	var PropTypes = propTypesFactory(React.isValidElement);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	var hasReadOnlyValue = {
		button: true,
		checkbox: true,
		image: true,
		hidden: true,
		radio: true,
		reset: true,
		submit: true
	};
	function _assertSingleLink(inputProps) {
		!(inputProps.checkedLink == null || inputProps.valueLink == null) ? false ? invariant(false, "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.") : _prodInvariant("87") : void 0;
	}
	function _assertValueLink(inputProps) {
		_assertSingleLink(inputProps);
		!(inputProps.value == null && inputProps.onChange == null) ? false ? invariant(false, "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.") : _prodInvariant("88") : void 0;
	}
	function _assertCheckedLink(inputProps) {
		_assertSingleLink(inputProps);
		!(inputProps.checked == null && inputProps.onChange == null) ? false ? invariant(false, "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink") : _prodInvariant("89") : void 0;
	}
	var propTypes = {
		value: function (props, propName, componentName) {
			if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
				return null;
			}
			return new Error("You provided a `value` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultValue`. Otherwise, " + "set either `onChange` or `readOnly`.");
		},
		checked: function (props, propName, componentName) {
			if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
				return null;
			}
			return new Error("You provided a `checked` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultChecked`. Otherwise, " + "set either `onChange` or `readOnly`.");
		},
		onChange: PropTypes.func
	};
	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
		if (owner) {
			var name = owner.getName();
			if (name) {
				return " Check the render method of `" + name + "`.";
			}
		}
		return "";
	}
	var LinkedValueUtils = {
		checkPropTypes: function (tagName, props, owner) {
			for (var propName in propTypes) {
				if (propTypes.hasOwnProperty(propName)) {
					var error = propTypes[propName](props, propName, tagName, "prop", null, ReactPropTypesSecret);
				}
				if (error instanceof Error && !(error.message in loggedTypeFailures)) {
					loggedTypeFailures[error.message] = true;
					var addendum = getDeclarationErrorAddendum(owner);
					false ? warning(false, "Failed form propType: %s%s", error.message, addendum) : void 0;
				}
			}
		},
		getValue: function (inputProps) {
			if (inputProps.valueLink) {
				_assertValueLink(inputProps);
				return inputProps.valueLink.value;
			}
			return inputProps.value;
		},
		getChecked: function (inputProps) {
			if (inputProps.checkedLink) {
				_assertCheckedLink(inputProps);
				return inputProps.checkedLink.value;
			}
			return inputProps.checked;
		},
		executeOnChange: function (inputProps, event) {
			if (inputProps.valueLink) {
				_assertValueLink(inputProps);
				return inputProps.valueLink.requestChange(event.target.value);
			} else if (inputProps.checkedLink) {
				_assertCheckedLink(inputProps);
				return inputProps.checkedLink.requestChange(event.target.checked);
			} else if (inputProps.onChange) {
				return inputProps.onChange.call(undefined, event);
			}
		}
	};
	module.exports = LinkedValueUtils;
}, function (module, exports) {
	"use strict";
	var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	module.exports = ReactPropTypesSecret;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var React = __webpack_require__(2);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMSelect = __webpack_require__(110);
	var warning = __webpack_require__(7);
	var didWarnInvalidOptionChildren = false;
	function flattenChildren(children) {
		var content = "";
		React.Children.forEach(children, function (child) {
			if (child == null) {
				return;
			}
			if (typeof child === "string" || typeof child === "number") {
				content += child;
			} else if (!didWarnInvalidOptionChildren) {
				didWarnInvalidOptionChildren = true;
				false ? warning(false, "Only strings and numbers are supported as <option> children.") : void 0;
			}
		});
		return content;
	}
	var ReactDOMOption = {
		mountWrapper: function (inst, props, hostParent) {
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(props.selected == null, "Use the `defaultValue` or `value` props on <select> instead of " + "setting `selected` on <option>.") : void 0;
			}
			var selectValue = null;
			if (hostParent != null) {
				var selectParent = hostParent;
				if (selectParent._tag === "optgroup") {
					selectParent = selectParent._hostParent;
				}
				if (selectParent != null && selectParent._tag === "select") {
					selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
				}
			}
			var selected = null;
			if (selectValue != null) {
				var value;
				if (props.value != null) {
					value = props.value + "";
				} else {
					value = flattenChildren(props.children);
				}
				selected = false;
				if (Array.isArray(selectValue)) {
					for (var i = 0; i < selectValue.length; i++) {
						if ("" + selectValue[i] === value) {
							selected = true;
							break;
						}
					}
				} else {
					selected = "" + selectValue === value;
				}
			}
			inst._wrapperState = {
				selected: selected
			};
		},
		postMountWrapper: function (inst) {
			var props = inst._currentElement.props;
			if (props.value != null) {
				var node = ReactDOMComponentTree.getNodeFromInstance(inst);
				node.setAttribute("value", props.value);
			}
		},
		getHostProps: function (inst, props) {
			var hostProps = _assign({
				selected: undefined,
				children: undefined
			}, props);
			if (inst._wrapperState.selected != null) {
				hostProps.selected = inst._wrapperState.selected;
			}
			var content = flattenChildren(props.children);
			if (content) {
				hostProps.children = content;
			}
			return hostProps;
		}
	};
	module.exports = ReactDOMOption;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var LinkedValueUtils = __webpack_require__(107);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactUpdates = __webpack_require__(58);
	var warning = __webpack_require__(7);
	var didWarnValueLink = false;
	var didWarnValueDefaultValue = false;
	function updateOptionsIfPendingUpdateAndMounted() {
		if (this._rootNodeID && this._wrapperState.pendingUpdate) {
			this._wrapperState.pendingUpdate = false;
			var props = this._currentElement.props;
			var value = LinkedValueUtils.getValue(props);
			if (value != null) {
				updateOptions(this, Boolean(props.multiple), value);
			}
		}
	}
	function getDeclarationErrorAddendum(owner) {
		if (owner) {
			var name = owner.getName();
			if (name) {
				return " Check the render method of `" + name + "`.";
			}
		}
		return "";
	}
	var valuePropNames = ["value", "defaultValue"];
	function checkSelectPropTypes(inst, props) {
		var owner = inst._currentElement._owner;
		LinkedValueUtils.checkPropTypes("select", props, owner);
		if (props.valueLink !== undefined && !didWarnValueLink) {
			false ? warning(false, "`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.") : void 0;
			didWarnValueLink = true;
		}
		for (var i = 0; i < valuePropNames.length; i++) {
			var propName = valuePropNames[i];
			if (props[propName] == null) {
				continue;
			}
			var isArray = Array.isArray(props[propName]);
			if (props.multiple && !isArray) {
				false ? warning(false, "The `%s` prop supplied to <select> must be an array if " + "`multiple` is true.%s", propName, getDeclarationErrorAddendum(owner)) : void 0;
			} else if (!props.multiple && isArray) {
				false ? warning(false, "The `%s` prop supplied to <select> must be a scalar " + "value if `multiple` is false.%s", propName, getDeclarationErrorAddendum(owner)) : void 0;
			}
		}
	}
	function updateOptions(inst, multiple, propValue) {
		var selectedValue, i;
		var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;
		if (multiple) {
			selectedValue = {};
			for (i = 0; i < propValue.length; i++) {
				selectedValue["" + propValue[i]] = true;
			}
			for (i = 0; i < options.length; i++) {
				var selected = selectedValue.hasOwnProperty(options[i].value);
				if (options[i].selected !== selected) {
					options[i].selected = selected;
				}
			}
		} else {
			selectedValue = "" + propValue;
			for (i = 0; i < options.length; i++) {
				if (options[i].value === selectedValue) {
					options[i].selected = true;
					return;
				}
			}
			if (options.length) {
				options[0].selected = true;
			}
		}
	}
	var ReactDOMSelect = {
		getHostProps: function (inst, props) {
			return _assign({}, props, {
				onChange: inst._wrapperState.onChange,
				value: undefined
			});
		},
		mountWrapper: function (inst, props) {
			if (false) {
				checkSelectPropTypes(inst, props);
			}
			var value = LinkedValueUtils.getValue(props);
			inst._wrapperState = {
				pendingUpdate: false,
				initialValue: value != null ? value : props.defaultValue,
				listeners: null,
				onChange: _handleChange.bind(inst),
				wasMultiple: Boolean(props.multiple)
			};
			if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
				false ? warning(false, "Select elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled select " + "element and remove one of these props. More info: " + "https://fb.me/react-controlled-components") : void 0;
				didWarnValueDefaultValue = true;
			}
		},
		getSelectValueContext: function (inst) {
			return inst._wrapperState.initialValue;
		},
		postUpdateWrapper: function (inst) {
			var props = inst._currentElement.props;
			inst._wrapperState.initialValue = undefined;
			var wasMultiple = inst._wrapperState.wasMultiple;
			inst._wrapperState.wasMultiple = Boolean(props.multiple);
			var value = LinkedValueUtils.getValue(props);
			if (value != null) {
				inst._wrapperState.pendingUpdate = false;
				updateOptions(inst, Boolean(props.multiple), value);
			} else if (wasMultiple !== Boolean(props.multiple)) {
				if (props.defaultValue != null) {
					updateOptions(inst, Boolean(props.multiple), props.defaultValue);
				} else {
					updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : "");
				}
			}
		}
	};
	function _handleChange(event) {
		var props = this._currentElement.props;
		var returnValue = LinkedValueUtils.executeOnChange(props, event);
		if (this._rootNodeID) {
			this._wrapperState.pendingUpdate = true;
		}
		ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
		return returnValue;
	}
	module.exports = ReactDOMSelect;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var LinkedValueUtils = __webpack_require__(107);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactUpdates = __webpack_require__(58);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	var didWarnValueLink = false;
	var didWarnValDefaultVal = false;
	function forceUpdateIfMounted() {
		if (this._rootNodeID) {
			ReactDOMTextarea.updateWrapper(this);
		}
	}
	var ReactDOMTextarea = {
		getHostProps: function (inst, props) {
			!(props.dangerouslySetInnerHTML == null) ? false ? invariant(false, "`dangerouslySetInnerHTML` does not make sense on <textarea>.") : _prodInvariant("91") : void 0;
			var hostProps = _assign({}, props, {
				value: undefined,
				defaultValue: undefined,
				children: "" + inst._wrapperState.initialValue,
				onChange: inst._wrapperState.onChange
			});
			return hostProps;
		},
		mountWrapper: function (inst, props) {
			if (false) {
				LinkedValueUtils.checkPropTypes("textarea", props, inst._currentElement._owner);
				if (props.valueLink !== undefined && !didWarnValueLink) {
					process.env.NODE_ENV !== "production" ? warning(false, "`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.") : void 0;
					didWarnValueLink = true;
				}
				if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
					process.env.NODE_ENV !== "production" ? warning(false, "Textarea elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled textarea " + "and remove one of these props. More info: " + "https://fb.me/react-controlled-components") : void 0;
					didWarnValDefaultVal = true;
				}
			}
			var value = LinkedValueUtils.getValue(props);
			var initialValue = value;
			if (value == null) {
				var defaultValue = props.defaultValue;
				var children = props.children;
				if (children != null) {
					if (false) {
						process.env.NODE_ENV !== "production" ? warning(false, "Use the `defaultValue` or `value` props instead of setting " + "children on <textarea>.") : void 0;
					}
					!(defaultValue == null) ? false ? invariant(false, "If you supply `defaultValue` on a <textarea>, do not pass children.") : _prodInvariant("92") : void 0;
					if (Array.isArray(children)) {
						!(children.length <= 1) ? false ? invariant(false, "<textarea> can only have at most one child.") : _prodInvariant("93") : void 0;
						children = children[0];
					}
					defaultValue = "" + children;
				}
				if (defaultValue == null) {
					defaultValue = "";
				}
				initialValue = defaultValue;
			}
			inst._wrapperState = {
				initialValue: "" + initialValue,
				listeners: null,
				onChange: _handleChange.bind(inst)
			};
		},
		updateWrapper: function (inst) {
			var props = inst._currentElement.props;
			var node = ReactDOMComponentTree.getNodeFromInstance(inst);
			var value = LinkedValueUtils.getValue(props);
			if (value != null) {
				var newValue = "" + value;
				if (newValue !== node.value) {
					node.value = newValue;
				}
				if (props.defaultValue == null) {
					node.defaultValue = newValue;
				}
			}
			if (props.defaultValue != null) {
				node.defaultValue = props.defaultValue;
			}
		},
		postMountWrapper: function (inst) {
			var node = ReactDOMComponentTree.getNodeFromInstance(inst);
			var textContent = node.textContent;
			if (textContent === inst._wrapperState.initialValue) {
				node.value = textContent;
			}
		}
	};
	function _handleChange(event) {
		var props = this._currentElement.props;
		var returnValue = LinkedValueUtils.executeOnChange(props, event);
		ReactUpdates.asap(forceUpdateIfMounted, this);
		return returnValue;
	}
	module.exports = ReactDOMTextarea;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactComponentEnvironment = __webpack_require__(113);
	var ReactInstanceMap = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactCurrentOwner = __webpack_require__(16);
	var ReactReconciler = __webpack_require__(61);
	var ReactChildReconciler = __webpack_require__(115);
	var emptyFunction = __webpack_require__(8);
	var flattenChildren = __webpack_require__(130);
	var invariant = __webpack_require__(11);
	function makeInsertMarkup(markup, afterNode, toIndex) {
		return {
			type: "INSERT_MARKUP",
			content: markup,
			fromIndex: null,
			fromNode: null,
			toIndex: toIndex,
			afterNode: afterNode
		};
	}
	function makeMove(child, afterNode, toIndex) {
		return {
			type: "MOVE_EXISTING",
			content: null,
			fromIndex: child._mountIndex,
			fromNode: ReactReconciler.getHostNode(child),
			toIndex: toIndex,
			afterNode: afterNode
		};
	}
	function makeRemove(child, node) {
		return {
			type: "REMOVE_NODE",
			content: null,
			fromIndex: child._mountIndex,
			fromNode: node,
			toIndex: null,
			afterNode: null
		};
	}
	function makeSetMarkup(markup) {
		return {
			type: "SET_MARKUP",
			content: markup,
			fromIndex: null,
			fromNode: null,
			toIndex: null,
			afterNode: null
		};
	}
	function makeTextContent(textContent) {
		return {
			type: "TEXT_CONTENT",
			content: textContent,
			fromIndex: null,
			fromNode: null,
			toIndex: null,
			afterNode: null
		};
	}
	function enqueue(queue, update) {
		if (update) {
			queue = queue || [];
			queue.push(update);
		}
		return queue;
	}
	function processQueue(inst, updateQueue) {
		ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
	}
	var setChildrenForInstrumentation = emptyFunction;
	if (false) {
		var getDebugID = function (inst) {
			if (!inst._debugID) {
				var internal;
				if (internal = ReactInstanceMap.get(inst)) {
					inst = internal;
				}
			}
			return inst._debugID;
		};
		setChildrenForInstrumentation = function (children) {
			var debugID = getDebugID(this);
			if (debugID !== 0) {
				ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
					return children[key]._debugID;
				}) : []);
			}
		};
	}
	var ReactMultiChild = {
		Mixin: {
			_reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
				if (false) {
					var selfDebugID = getDebugID(this);
					if (this._currentElement) {
						try {
							ReactCurrentOwner.current = this._currentElement._owner;
							return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
						} finally {
							ReactCurrentOwner.current = null;
						}
					}
				}
				return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
			},
			_reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
				var nextChildren;
				var selfDebugID = 0;
				if (false) {
					selfDebugID = getDebugID(this);
					if (this._currentElement) {
						try {
							ReactCurrentOwner.current = this._currentElement._owner;
							nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
						} finally {
							ReactCurrentOwner.current = null;
						}
						ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
						return nextChildren;
					}
				}
				nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
				ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
				return nextChildren;
			},
			mountChildren: function (nestedChildren, transaction, context) {
				var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
				this._renderedChildren = children;
				var mountImages = [];
				var index = 0;
				for (var name in children) {
					if (children.hasOwnProperty(name)) {
						var child = children[name];
						var selfDebugID = 0;
						if (false) {
							selfDebugID = getDebugID(this);
						}
						var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
						child._mountIndex = index++;
						mountImages.push(mountImage);
					}
				}
				if (false) {
					setChildrenForInstrumentation.call(this, children);
				}
				return mountImages;
			},
			updateTextContent: function (nextContent) {
				var prevChildren = this._renderedChildren;
				ReactChildReconciler.unmountChildren(prevChildren, false);
				for (var name in prevChildren) {
					if (prevChildren.hasOwnProperty(name)) {
						true ? false ? invariant(false, "updateTextContent called on non-empty component.") : _prodInvariant("118") : void 0;
					}
				}
				var updates = [makeTextContent(nextContent)];
				processQueue(this, updates);
			},
			updateMarkup: function (nextMarkup) {
				var prevChildren = this._renderedChildren;
				ReactChildReconciler.unmountChildren(prevChildren, false);
				for (var name in prevChildren) {
					if (prevChildren.hasOwnProperty(name)) {
						true ? false ? invariant(false, "updateTextContent called on non-empty component.") : _prodInvariant("118") : void 0;
					}
				}
				var updates = [makeSetMarkup(nextMarkup)];
				processQueue(this, updates);
			},
			updateChildren: function (nextNestedChildrenElements, transaction, context) {
				this._updateChildren(nextNestedChildrenElements, transaction, context);
			},
			_updateChildren: function (nextNestedChildrenElements, transaction, context) {
				var prevChildren = this._renderedChildren;
				var removedNodes = {};
				var mountImages = [];
				var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
				if (!nextChildren && !prevChildren) {
					return;
				}
				var updates = null;
				var name;
				var nextIndex = 0;
				var lastIndex = 0;
				var nextMountIndex = 0;
				var lastPlacedNode = null;
				for (name in nextChildren) {
					if (!nextChildren.hasOwnProperty(name)) {
						continue;
					}
					var prevChild = prevChildren && prevChildren[name];
					var nextChild = nextChildren[name];
					if (prevChild === nextChild) {
						updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
						lastIndex = Math.max(prevChild._mountIndex, lastIndex);
						prevChild._mountIndex = nextIndex;
					} else {
						if (prevChild) {
							lastIndex = Math.max(prevChild._mountIndex, lastIndex);
						}
						updates = enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
						nextMountIndex++;
					}
					nextIndex++;
					lastPlacedNode = ReactReconciler.getHostNode(nextChild);
				}
				for (name in removedNodes) {
					if (removedNodes.hasOwnProperty(name)) {
						updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
					}
				}
				if (updates) {
					processQueue(this, updates);
				}
				this._renderedChildren = nextChildren;
				if (false) {
					setChildrenForInstrumentation.call(this, nextChildren);
				}
			},
			unmountChildren: function (safely) {
				var renderedChildren = this._renderedChildren;
				ReactChildReconciler.unmountChildren(renderedChildren, safely);
				this._renderedChildren = null;
			},
			moveChild: function (child, afterNode, toIndex, lastIndex) {
				if (child._mountIndex < lastIndex) {
					return makeMove(child, afterNode, toIndex);
				}
			},
			createChild: function (child, afterNode, mountImage) {
				return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
			},
			removeChild: function (child, node) {
				return makeRemove(child, node);
			},
			_mountChildAtIndex: function (child, mountImage, afterNode, index, transaction, context) {
				child._mountIndex = index;
				return this.createChild(child, afterNode, mountImage);
			},
			_unmountChild: function (child, node) {
				var update = this.removeChild(child, node);
				child._mountIndex = null;
				return update;
			}
		}
	};
	module.exports = ReactMultiChild;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	var injected = false;
	var ReactComponentEnvironment = {
		replaceNodeWithMarkup: null,
		processChildrenUpdates: null,
		injection: {
			injectEnvironment: function (environment) {
				!!injected ? false ? invariant(false, "ReactCompositeComponent: injectEnvironment() can only be called once.") : _prodInvariant("104") : void 0;
				ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
				ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
				injected = true;
			}
		}
	};
	module.exports = ReactComponentEnvironment;
}, function (module, exports) {
	"use strict";
	var ReactInstanceMap = {
		remove: function (key) {
			key._reactInternalInstance = undefined;
		},
		get: function (key) {
			return key._reactInternalInstance;
		},
		has: function (key) {
			return key._reactInternalInstance !== undefined;
		},
		set: function (key, value) {
			key._reactInternalInstance = value;
		}
	};
	module.exports = ReactInstanceMap;
}, function (module, exports, __webpack_require__) {
	(function (process) {
		"use strict";
		var ReactReconciler = __webpack_require__(61);
		var instantiateReactComponent = __webpack_require__(117);
		var KeyEscapeUtils = __webpack_require__(125);
		var shouldUpdateReactComponent = __webpack_require__(121);
		var traverseAllChildren = __webpack_require__(126);
		var warning = __webpack_require__(7);
		var ReactComponentTreeHook;
		if (typeof process !== "undefined" && process.env && "production" === "test") {
			ReactComponentTreeHook = __webpack_require__(129);
		}
		function instantiateChild(childInstances, child, name, selfDebugID) {
			var keyUnique = childInstances[name] === undefined;
			if (false) {
				if (!ReactComponentTreeHook) {
					ReactComponentTreeHook = require("react/lib/ReactComponentTreeHook");
				}
				if (!keyUnique) {
					process.env.NODE_ENV !== "production" ? warning(false, "flattenChildren(...): Encountered two children with the same key, " + "`%s`. Child keys must be unique; when two children share a key, only " + "the first child will be used.%s", KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
				}
			}
			if (child != null && keyUnique) {
				childInstances[name] = instantiateReactComponent(child, true);
			}
		}
		var ReactChildReconciler = {
			instantiateChildren: function (nestedChildNodes, transaction, context, selfDebugID) {
				if (nestedChildNodes == null) {
					return null;
				}
				var childInstances = {};
				if (false) {
					traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
						return instantiateChild(childInsts, child, name, selfDebugID);
					}, childInstances);
				} else {
					traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
				}
				return childInstances;
			},
			updateChildren: function (prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID) {
				if (!nextChildren && !prevChildren) {
					return;
				}
				var name;
				var prevChild;
				for (name in nextChildren) {
					if (!nextChildren.hasOwnProperty(name)) {
						continue;
					}
					prevChild = prevChildren && prevChildren[name];
					var prevElement = prevChild && prevChild._currentElement;
					var nextElement = nextChildren[name];
					if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
						ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
						nextChildren[name] = prevChild;
					} else {
						if (prevChild) {
							removedNodes[name] = ReactReconciler.getHostNode(prevChild);
							ReactReconciler.unmountComponent(prevChild, false);
						}
						var nextChildInstance = instantiateReactComponent(nextElement, true);
						nextChildren[name] = nextChildInstance;
						var nextChildMountImage = ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
						mountImages.push(nextChildMountImage);
					}
				}
				for (name in prevChildren) {
					if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
						prevChild = prevChildren[name];
						removedNodes[name] = ReactReconciler.getHostNode(prevChild);
						ReactReconciler.unmountComponent(prevChild, false);
					}
				}
			},
			unmountChildren: function (renderedChildren, safely) {
				for (var name in renderedChildren) {
					if (renderedChildren.hasOwnProperty(name)) {
						var renderedChild = renderedChildren[name];
						ReactReconciler.unmountComponent(renderedChild, safely);
					}
				}
			}
		};
		module.exports = ReactChildReconciler;
	}).call(exports, __webpack_require__(116));
}, function (module, exports) {
	var process = module.exports = {};
	var cachedSetTimeout;
	var cachedClearTimeout;
	function defaultSetTimout() {
		throw new Error("setTimeout has not been defined");
	}
	function defaultClearTimeout() {
		throw new Error("clearTimeout has not been defined");
	}
	(function () {
		try {
			if (typeof setTimeout === "function") {
				cachedSetTimeout = setTimeout;
			} else {
				cachedSetTimeout = defaultSetTimout;
			}
		} catch (e) {
			cachedSetTimeout = defaultSetTimout;
		}
		try {
			if (typeof clearTimeout === "function") {
				cachedClearTimeout = clearTimeout;
			} else {
				cachedClearTimeout = defaultClearTimeout;
			}
		} catch (e) {
			cachedClearTimeout = defaultClearTimeout;
		}
	})();
	function runTimeout(fun) {
		if (cachedSetTimeout === setTimeout) {
			return setTimeout(fun, 0);
		}
		if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
			cachedSetTimeout = setTimeout;
			return setTimeout(fun, 0);
		}
		try {
			return cachedSetTimeout(fun, 0);
		} catch (e) {
			try {
				return cachedSetTimeout.call(null, fun, 0);
			} catch (e) {
				return cachedSetTimeout.call(this, fun, 0);
			}
		}
	}
	function runClearTimeout(marker) {
		if (cachedClearTimeout === clearTimeout) {
			return clearTimeout(marker);
		}
		if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
			cachedClearTimeout = clearTimeout;
			return clearTimeout(marker);
		}
		try {
			return cachedClearTimeout(marker);
		} catch (e) {
			try {
				return cachedClearTimeout.call(null, marker);
			} catch (e) {
				return cachedClearTimeout.call(this, marker);
			}
		}
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	function cleanUpNextTick() {
		if (!draining || !currentQueue) {
			return;
		}
		draining = false;
		if (currentQueue.length) {
			queue = currentQueue.concat(queue);
		} else {
			queueIndex = -1;
		}
		if (queue.length) {
			drainQueue();
		}
	}
	function drainQueue() {
		if (draining) {
			return;
		}
		var timeout = runTimeout(cleanUpNextTick);
		draining = true;
		var len = queue.length;
		while (len) {
			currentQueue = queue;
			queue = [];
			while (++queueIndex < len) {
				if (currentQueue) {
					currentQueue[queueIndex].run();
				}
			}
			queueIndex = -1;
			len = queue.length;
		}
		currentQueue = null;
		draining = false;
		runClearTimeout(timeout);
	}
	process.nextTick = function (fun) {
		var args = new Array(arguments.length - 1);
		if (arguments.length > 1) {
			for (var i = 1; i < arguments.length; i++) {
				args[i - 1] = arguments[i];
			}
		}
		queue.push(new Item(fun, args));
		if (queue.length === 1 && !draining) {
			runTimeout(drainQueue);
		}
	};
	function Item(fun, array) {
		this.fun = fun;
		this.array = array;
	}
	Item.prototype.run = function () {
		this.fun.apply(null, this.array);
	};
	process.title = "browser";
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = "";
	process.versions = {};
	function noop() { }
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	process.listeners = function (name) {
		return [];
	};
	process.binding = function (name) {
		throw new Error("process.binding is not supported");
	};
	process.cwd = function () {
		return "/";
	};
	process.chdir = function (dir) {
		throw new Error("process.chdir is not supported");
	};
	process.umask = function () {
		return 0;
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var ReactCompositeComponent = __webpack_require__(118);
	var ReactEmptyComponent = __webpack_require__(122);
	var ReactHostComponent = __webpack_require__(123);
	var getNextDebugID = __webpack_require__(124);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	var ReactCompositeComponentWrapper = function (element) {
		this.construct(element);
	};
	function getDeclarationErrorAddendum(owner) {
		if (owner) {
			var name = owner.getName();
			if (name) {
				return " Check the render method of `" + name + "`.";
			}
		}
		return "";
	}
	function isInternalComponentType(type) {
		return typeof type === "function" && typeof type.prototype !== "undefined" && typeof type.prototype.mountComponent === "function" && typeof type.prototype.receiveComponent === "function";
	}
	function instantiateReactComponent(node, shouldHaveDebugID) {
		var instance;
		if (node === null || node === false) {
			instance = ReactEmptyComponent.create(instantiateReactComponent);
		} else if (typeof node === "object") {
			var element = node;
			var type = element.type;
			if (typeof type !== "function" && typeof type !== "string") {
				var info = "";
				if (false) {
					if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
						info += " You likely forgot to export your component from the file " + "it's defined in.";
					}
				}
				info += getDeclarationErrorAddendum(element._owner);
				true ? false ? invariant(false, "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", type == null ? type : typeof type, info) : _prodInvariant("130", type == null ? type : typeof type, info) : void 0;
			}
			if (typeof element.type === "string") {
				instance = ReactHostComponent.createInternalComponent(element);
			} else if (isInternalComponentType(element.type)) {
				instance = new element.type(element);
				if (!instance.getHostNode) {
					instance.getHostNode = instance.getNativeNode;
				}
			} else {
				instance = new ReactCompositeComponentWrapper(element);
			}
		} else if (typeof node === "string" || typeof node === "number") {
			instance = ReactHostComponent.createInstanceForText(node);
		} else {
			true ? false ? invariant(false, "Encountered invalid React node of type %s", typeof node) : _prodInvariant("131", typeof node) : void 0;
		}
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(typeof instance.mountComponent === "function" && typeof instance.receiveComponent === "function" && typeof instance.getHostNode === "function" && typeof instance.unmountComponent === "function", "Only React Components can be mounted.") : void 0;
		}
		instance._mountIndex = 0;
		instance._mountImage = null;
		if (false) {
			instance._debugID = shouldHaveDebugID ? getNextDebugID() : 0;
		}
		if (false) {
			if (Object.preventExtensions) {
				Object.preventExtensions(instance);
			}
		}
		return instance;
	}
	_assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent, {
		_instantiateReactComponent: instantiateReactComponent
	});
	module.exports = instantiateReactComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var React = __webpack_require__(2);
	var ReactComponentEnvironment = __webpack_require__(113);
	var ReactCurrentOwner = __webpack_require__(16);
	var ReactErrorUtils = __webpack_require__(47);
	var ReactInstanceMap = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactNodeTypes = __webpack_require__(119);
	var ReactReconciler = __webpack_require__(61);
	if (false) {
		var checkReactTypeSpec = require("./checkReactTypeSpec");
	}
	var emptyObject = __webpack_require__(10);
	var invariant = __webpack_require__(11);
	var shallowEqual = __webpack_require__(120);
	var shouldUpdateReactComponent = __webpack_require__(121);
	var warning = __webpack_require__(7);
	var CompositeTypes = {
		ImpureClass: 0,
		PureClass: 1,
		StatelessFunctional: 2
	};
	function StatelessComponent(Component) { }
	StatelessComponent.prototype.render = function () {
		var Component = ReactInstanceMap.get(this)._currentElement.type;
		var element = Component(this.props, this.context, this.updater);
		warnIfInvalidElement(Component, element);
		return element;
	};
	function warnIfInvalidElement(Component, element) {
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(element === null || element === false || React.isValidElement(element), "%s(...): A valid React element (or null) must be returned. You may have " + "returned undefined, an array or some other invalid object.", Component.displayName || Component.name || "Component") : void 0;
			process.env.NODE_ENV !== "production" ? warning(!Component.childContextTypes, "%s(...): childContextTypes cannot be defined on a functional component.", Component.displayName || Component.name || "Component") : void 0;
		}
	}
	function shouldConstruct(Component) {
		return !!(Component.prototype && Component.prototype.isReactComponent);
	}
	function isPureComponent(Component) {
		return !!(Component.prototype && Component.prototype.isPureReactComponent);
	}
	function measureLifeCyclePerf(fn, debugID, timerType) {
		if (debugID === 0) {
			return fn();
		}
		ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
		try {
			return fn();
		} finally {
			ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
		}
	}
	var nextMountID = 1;
	var ReactCompositeComponent = {
		construct: function (element) {
			this._currentElement = element;
			this._rootNodeID = 0;
			this._compositeType = null;
			this._instance = null;
			this._hostParent = null;
			this._hostContainerInfo = null;
			this._updateBatchNumber = null;
			this._pendingElement = null;
			this._pendingStateQueue = null;
			this._pendingReplaceState = false;
			this._pendingForceUpdate = false;
			this._renderedNodeType = null;
			this._renderedComponent = null;
			this._context = null;
			this._mountOrder = 0;
			this._topLevelWrapper = null;
			this._pendingCallbacks = null;
			this._calledComponentWillUnmount = false;
			if (false) {
				this._warnedAboutRefsInRender = false;
			}
		},
		mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
			var _this = this;
			this._context = context;
			this._mountOrder = nextMountID++;
			this._hostParent = hostParent;
			this._hostContainerInfo = hostContainerInfo;
			var publicProps = this._currentElement.props;
			var publicContext = this._processContext(context);
			var Component = this._currentElement.type;
			var updateQueue = transaction.getUpdateQueue();
			var doConstruct = shouldConstruct(Component);
			var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
			var renderedElement;
			if (!doConstruct && (inst == null || inst.render == null)) {
				renderedElement = inst;
				warnIfInvalidElement(Component, renderedElement);
				!(inst === null || inst === false || React.isValidElement(inst)) ? false ? invariant(false, "%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.", Component.displayName || Component.name || "Component") : _prodInvariant("105", Component.displayName || Component.name || "Component") : void 0;
				inst = new StatelessComponent(Component);
				this._compositeType = CompositeTypes.StatelessFunctional;
			} else {
				if (isPureComponent(Component)) {
					this._compositeType = CompositeTypes.PureClass;
				} else {
					this._compositeType = CompositeTypes.ImpureClass;
				}
			}
			if (false) {
				if (inst.render == null) {
					process.env.NODE_ENV !== "production" ? warning(false, "%s(...): No `render` method found on the returned component " + "instance: you may have forgotten to define `render`.", Component.displayName || Component.name || "Component") : void 0;
				}
				var propsMutated = inst.props !== publicProps;
				var componentName = Component.displayName || Component.name || "Component";
				process.env.NODE_ENV !== "production" ? warning(inst.props === undefined || !propsMutated, "%s(...): When calling super() in `%s`, make sure to pass " + "up the same props that your component's constructor was passed.", componentName, componentName) : void 0;
			}
			inst.props = publicProps;
			inst.context = publicContext;
			inst.refs = emptyObject;
			inst.updater = updateQueue;
			this._instance = inst;
			ReactInstanceMap.set(inst, this);
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved || inst.state, "getInitialState was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Did you mean to define a state property instead?", this.getName() || "a component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, "getDefaultProps was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Use a static property to define defaultProps instead.", this.getName() || "a component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(!inst.propTypes, "propTypes was defined as an instance property on %s. Use a static " + "property to define propTypes instead.", this.getName() || "a component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(!inst.contextTypes, "contextTypes was defined as an instance property on %s. Use a " + "static property to define contextTypes instead.", this.getName() || "a component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(typeof inst.componentShouldUpdate !== "function", "%s has a method called " + "componentShouldUpdate(). Did you mean shouldComponentUpdate()? " + "The name is phrased as a question because the function is " + "expected to return a value.", this.getName() || "A component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(typeof inst.componentDidUnmount !== "function", "%s has a method called " + "componentDidUnmount(). But there is no such lifecycle method. " + "Did you mean componentWillUnmount()?", this.getName() || "A component") : void 0;
				process.env.NODE_ENV !== "production" ? warning(typeof inst.componentWillRecieveProps !== "function", "%s has a method called " + "componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", this.getName() || "A component") : void 0;
			}
			var initialState = inst.state;
			if (initialState === undefined) {
				inst.state = initialState = null;
			}
			!(typeof initialState === "object" && !Array.isArray(initialState)) ? false ? invariant(false, "%s.state: must be set to an object or null", this.getName() || "ReactCompositeComponent") : _prodInvariant("106", this.getName() || "ReactCompositeComponent") : void 0;
			this._pendingStateQueue = null;
			this._pendingReplaceState = false;
			this._pendingForceUpdate = false;
			var markup;
			if (inst.unstable_handleError) {
				markup = this.performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context);
			} else {
				markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
			}
			if (inst.componentDidMount) {
				if (false) {
					transaction.getReactMountReady().enqueue(function () {
						measureLifeCyclePerf(function () {
							return inst.componentDidMount();
						}, _this._debugID, "componentDidMount");
					});
				} else {
					transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
				}
			}
			return markup;
		},
		_constructComponent: function (doConstruct, publicProps, publicContext, updateQueue) {
			if (false) {
				ReactCurrentOwner.current = this;
				try {
					return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
				} finally {
					ReactCurrentOwner.current = null;
				}
			} else {
				return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
			}
		},
		_constructComponentWithoutOwner: function (doConstruct, publicProps, publicContext, updateQueue) {
			var Component = this._currentElement.type;
			if (doConstruct) {
				if (false) {
					return measureLifeCyclePerf(function () {
						return new Component(publicProps, publicContext, updateQueue);
					}, this._debugID, "ctor");
				} else {
					return new Component(publicProps, publicContext, updateQueue);
				}
			}
			if (false) {
				return measureLifeCyclePerf(function () {
					return Component(publicProps, publicContext, updateQueue);
				}, this._debugID, "render");
			} else {
				return Component(publicProps, publicContext, updateQueue);
			}
		},
		performInitialMountWithErrorHandling: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
			var markup;
			var checkpoint = transaction.checkpoint();
			try {
				markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
			} catch (e) {
				transaction.rollback(checkpoint);
				this._instance.unstable_handleError(e);
				if (this._pendingStateQueue) {
					this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
				}
				checkpoint = transaction.checkpoint();
				this._renderedComponent.unmountComponent(true);
				transaction.rollback(checkpoint);
				markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
			}
			return markup;
		},
		performInitialMount: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
			var inst = this._instance;
			var debugID = 0;
			if (false) {
				debugID = this._debugID;
			}
			if (inst.componentWillMount) {
				if (false) {
					measureLifeCyclePerf(function () {
						return inst.componentWillMount();
					}, debugID, "componentWillMount");
				} else {
					inst.componentWillMount();
				}
				if (this._pendingStateQueue) {
					inst.state = this._processPendingState(inst.props, inst.context);
				}
			}
			if (renderedElement === undefined) {
				renderedElement = this._renderValidatedComponent();
			}
			var nodeType = ReactNodeTypes.getType(renderedElement);
			this._renderedNodeType = nodeType;
			var child = this._instantiateReactComponent(renderedElement, nodeType !== ReactNodeTypes.EMPTY);
			this._renderedComponent = child;
			var markup = ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);
			if (false) {
				if (debugID !== 0) {
					var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
					ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
				}
			}
			return markup;
		},
		getHostNode: function () {
			return ReactReconciler.getHostNode(this._renderedComponent);
		},
		unmountComponent: function (safely) {
			if (!this._renderedComponent) {
				return;
			}
			var inst = this._instance;
			if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
				inst._calledComponentWillUnmount = true;
				if (safely) {
					var name = this.getName() + ".componentWillUnmount()";
					ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
				} else {
					if (false) {
						measureLifeCyclePerf(function () {
							return inst.componentWillUnmount();
						}, this._debugID, "componentWillUnmount");
					} else {
						inst.componentWillUnmount();
					}
				}
			}
			if (this._renderedComponent) {
				ReactReconciler.unmountComponent(this._renderedComponent, safely);
				this._renderedNodeType = null;
				this._renderedComponent = null;
				this._instance = null;
			}
			this._pendingStateQueue = null;
			this._pendingReplaceState = false;
			this._pendingForceUpdate = false;
			this._pendingCallbacks = null;
			this._pendingElement = null;
			this._context = null;
			this._rootNodeID = 0;
			this._topLevelWrapper = null;
			ReactInstanceMap.remove(inst);
		},
		_maskContext: function (context) {
			var Component = this._currentElement.type;
			var contextTypes = Component.contextTypes;
			if (!contextTypes) {
				return emptyObject;
			}
			var maskedContext = {};
			for (var contextName in contextTypes) {
				maskedContext[contextName] = context[contextName];
			}
			return maskedContext;
		},
		_processContext: function (context) {
			var maskedContext = this._maskContext(context);
			if (false) {
				var Component = this._currentElement.type;
				if (Component.contextTypes) {
					this._checkContextTypes(Component.contextTypes, maskedContext, "context");
				}
			}
			return maskedContext;
		},
		_processChildContext: function (currentContext) {
			var Component = this._currentElement.type;
			var inst = this._instance;
			var childContext;
			if (inst.getChildContext) {
				if (false) {
					ReactInstrumentation.debugTool.onBeginProcessingChildContext();
					try {
						childContext = inst.getChildContext();
					} finally {
						ReactInstrumentation.debugTool.onEndProcessingChildContext();
					}
				} else {
					childContext = inst.getChildContext();
				}
			}
			if (childContext) {
				!(typeof Component.childContextTypes === "object") ? false ? invariant(false, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", this.getName() || "ReactCompositeComponent") : _prodInvariant("107", this.getName() || "ReactCompositeComponent") : void 0;
				if (false) {
					this._checkContextTypes(Component.childContextTypes, childContext, "child context");
				}
				for (var name in childContext) {
					!(name in Component.childContextTypes) ? false ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || "ReactCompositeComponent", name) : _prodInvariant("108", this.getName() || "ReactCompositeComponent", name) : void 0;
				}
				return _assign({}, currentContext, childContext);
			}
			return currentContext;
		},
		_checkContextTypes: function (typeSpecs, values, location) {
			if (false) {
				checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
			}
		},
		receiveComponent: function (nextElement, transaction, nextContext) {
			var prevElement = this._currentElement;
			var prevContext = this._context;
			this._pendingElement = null;
			this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
		},
		performUpdateIfNecessary: function (transaction) {
			if (this._pendingElement != null) {
				ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
			} else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
				this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
			} else {
				this._updateBatchNumber = null;
			}
		},
		updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
			var inst = this._instance;
			!(inst != null) ? false ? invariant(false, "Attempted to update component `%s` that has already been unmounted (or failed to mount).", this.getName() || "ReactCompositeComponent") : _prodInvariant("136", this.getName() || "ReactCompositeComponent") : void 0;
			var willReceive = false;
			var nextContext;
			if (this._context === nextUnmaskedContext) {
				nextContext = inst.context;
			} else {
				nextContext = this._processContext(nextUnmaskedContext);
				willReceive = true;
			}
			var prevProps = prevParentElement.props;
			var nextProps = nextParentElement.props;
			if (prevParentElement !== nextParentElement) {
				willReceive = true;
			}
			if (willReceive && inst.componentWillReceiveProps) {
				if (false) {
					measureLifeCyclePerf(function () {
						return inst.componentWillReceiveProps(nextProps, nextContext);
					}, this._debugID, "componentWillReceiveProps");
				} else {
					inst.componentWillReceiveProps(nextProps, nextContext);
				}
			}
			var nextState = this._processPendingState(nextProps, nextContext);
			var shouldUpdate = true;
			if (!this._pendingForceUpdate) {
				if (inst.shouldComponentUpdate) {
					if (false) {
						shouldUpdate = measureLifeCyclePerf(function () {
							return inst.shouldComponentUpdate(nextProps, nextState, nextContext);
						}, this._debugID, "shouldComponentUpdate");
					} else {
						shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
					}
				} else {
					if (this._compositeType === CompositeTypes.PureClass) {
						shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
					}
				}
			}
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(shouldUpdate !== undefined, "%s.shouldComponentUpdate(): Returned undefined instead of a " + "boolean value. Make sure to return true or false.", this.getName() || "ReactCompositeComponent") : void 0;
			}
			this._updateBatchNumber = null;
			if (shouldUpdate) {
				this._pendingForceUpdate = false;
				this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
			} else {
				this._currentElement = nextParentElement;
				this._context = nextUnmaskedContext;
				inst.props = nextProps;
				inst.state = nextState;
				inst.context = nextContext;
			}
		},
		_processPendingState: function (props, context) {
			var inst = this._instance;
			var queue = this._pendingStateQueue;
			var replace = this._pendingReplaceState;
			this._pendingReplaceState = false;
			this._pendingStateQueue = null;
			if (!queue) {
				return inst.state;
			}
			if (replace && queue.length === 1) {
				return queue[0];
			}
			var nextState = _assign({}, replace ? queue[0] : inst.state);
			for (var i = replace ? 1 : 0; i < queue.length; i++) {
				var partial = queue[i];
				_assign(nextState, typeof partial === "function" ? partial.call(inst, nextState, props, context) : partial);
			}
			return nextState;
		},
		_performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
			var _this2 = this;
			var inst = this._instance;
			var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
			var prevProps;
			var prevState;
			var prevContext;
			if (hasComponentDidUpdate) {
				prevProps = inst.props;
				prevState = inst.state;
				prevContext = inst.context;
			}
			if (inst.componentWillUpdate) {
				if (false) {
					measureLifeCyclePerf(function () {
						return inst.componentWillUpdate(nextProps, nextState, nextContext);
					}, this._debugID, "componentWillUpdate");
				} else {
					inst.componentWillUpdate(nextProps, nextState, nextContext);
				}
			}
			this._currentElement = nextElement;
			this._context = unmaskedContext;
			inst.props = nextProps;
			inst.state = nextState;
			inst.context = nextContext;
			this._updateRenderedComponent(transaction, unmaskedContext);
			if (hasComponentDidUpdate) {
				if (false) {
					transaction.getReactMountReady().enqueue(function () {
						measureLifeCyclePerf(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), _this2._debugID, "componentDidUpdate");
					});
				} else {
					transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
				}
			}
		},
		_updateRenderedComponent: function (transaction, context) {
			var prevComponentInstance = this._renderedComponent;
			var prevRenderedElement = prevComponentInstance._currentElement;
			var nextRenderedElement = this._renderValidatedComponent();
			var debugID = 0;
			if (false) {
				debugID = this._debugID;
			}
			if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
				ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
			} else {
				var oldHostNode = ReactReconciler.getHostNode(prevComponentInstance);
				ReactReconciler.unmountComponent(prevComponentInstance, false);
				var nodeType = ReactNodeTypes.getType(nextRenderedElement);
				this._renderedNodeType = nodeType;
				var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== ReactNodeTypes.EMPTY);
				this._renderedComponent = child;
				var nextMarkup = ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);
				if (false) {
					if (debugID !== 0) {
						var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
						ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
					}
				}
				this._replaceNodeWithMarkup(oldHostNode, nextMarkup, prevComponentInstance);
			}
		},
		_replaceNodeWithMarkup: function (oldHostNode, nextMarkup, prevInstance) {
			ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
		},
		_renderValidatedComponentWithoutOwnerOrContext: function () {
			var inst = this._instance;
			var renderedElement;
			if (false) {
				renderedElement = measureLifeCyclePerf(function () {
					return inst.render();
				}, this._debugID, "render");
			} else {
				renderedElement = inst.render();
			}
			if (false) {
				if (renderedElement === undefined && inst.render._isMockFunction) {
					renderedElement = null;
				}
			}
			return renderedElement;
		},
		_renderValidatedComponent: function () {
			var renderedElement;
			if ("production" !== "production" || this._compositeType !== CompositeTypes.StatelessFunctional) {
				ReactCurrentOwner.current = this;
				try {
					renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
				} finally {
					ReactCurrentOwner.current = null;
				}
			} else {
				renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
			}
			!(renderedElement === null || renderedElement === false || React.isValidElement(renderedElement)) ? false ? invariant(false, "%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.", this.getName() || "ReactCompositeComponent") : _prodInvariant("109", this.getName() || "ReactCompositeComponent") : void 0;
			return renderedElement;
		},
		attachRef: function (ref, component) {
			var inst = this.getPublicInstance();
			!(inst != null) ? false ? invariant(false, "Stateless function components cannot have refs.") : _prodInvariant("110") : void 0;
			var publicComponentInstance = component.getPublicInstance();
			if (false) {
				var componentName = component && component.getName ? component.getName() : "a component";
				process.env.NODE_ENV !== "production" ? warning(publicComponentInstance != null || component._compositeType !== CompositeTypes.StatelessFunctional, "Stateless function components cannot be given refs " + '(See ref "%s" in %s created by %s). ' + "Attempts to access this ref will fail.", ref, componentName, this.getName()) : void 0;
			}
			var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
			refs[ref] = publicComponentInstance;
		},
		detachRef: function (ref) {
			var refs = this.getPublicInstance().refs;
			delete refs[ref];
		},
		getName: function () {
			var type = this._currentElement.type;
			var constructor = this._instance && this._instance.constructor;
			return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
		},
		getPublicInstance: function () {
			var inst = this._instance;
			if (this._compositeType === CompositeTypes.StatelessFunctional) {
				return null;
			}
			return inst;
		},
		_instantiateReactComponent: null
	};
	module.exports = ReactCompositeComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var React = __webpack_require__(2);
	var invariant = __webpack_require__(11);
	var ReactNodeTypes = {
		HOST: 0,
		COMPOSITE: 1,
		EMPTY: 2,
		getType: function (node) {
			if (node === null || node === false) {
				return ReactNodeTypes.EMPTY;
			} else if (React.isValidElement(node)) {
				if (typeof node.type === "function") {
					return ReactNodeTypes.COMPOSITE;
				} else {
					return ReactNodeTypes.HOST;
				}
			}
			true ? false ? invariant(false, "Unexpected node: %s", node) : _prodInvariant("26", node) : void 0;
		}
	};
	module.exports = ReactNodeTypes;
}, function (module, exports) {
	"use strict";
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function is(x, y) {
		if (x === y) {
			return x !== 0 || y !== 0 || 1 / x === 1 / y;
		} else {
			return x !== x && y !== y;
		}
	}
	function shallowEqual(objA, objB) {
		if (is(objA, objB)) {
			return true;
		}
		if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
			return false;
		}
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) {
			return false;
		}
		for (var i = 0; i < keysA.length; i++) {
			if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
				return false;
			}
		}
		return true;
	}
	module.exports = shallowEqual;
}, function (module, exports) {
	"use strict";
	function shouldUpdateReactComponent(prevElement, nextElement) {
		var prevEmpty = prevElement === null || prevElement === false;
		var nextEmpty = nextElement === null || nextElement === false;
		if (prevEmpty || nextEmpty) {
			return prevEmpty === nextEmpty;
		}
		var prevType = typeof prevElement;
		var nextType = typeof nextElement;
		if (prevType === "string" || prevType === "number") {
			return nextType === "string" || nextType === "number";
		} else {
			return nextType === "object" && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
		}
	}
	module.exports = shouldUpdateReactComponent;
}, function (module, exports) {
	"use strict";
	var emptyComponentFactory;
	var ReactEmptyComponentInjection = {
		injectEmptyComponentFactory: function (factory) {
			emptyComponentFactory = factory;
		}
	};
	var ReactEmptyComponent = {
		create: function (instantiate) {
			return emptyComponentFactory(instantiate);
		}
	};
	ReactEmptyComponent.injection = ReactEmptyComponentInjection;
	module.exports = ReactEmptyComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	var genericComponentClass = null;
	var textComponentClass = null;
	var ReactHostComponentInjection = {
		injectGenericComponentClass: function (componentClass) {
			genericComponentClass = componentClass;
		},
		injectTextComponentClass: function (componentClass) {
			textComponentClass = componentClass;
		}
	};
	function createInternalComponent(element) {
		!genericComponentClass ? false ? invariant(false, "There is no registered component for the tag %s", element.type) : _prodInvariant("111", element.type) : void 0;
		return new genericComponentClass(element);
	}
	function createInstanceForText(text) {
		return new textComponentClass(text);
	}
	function isTextComponent(component) {
		return component instanceof textComponentClass;
	}
	var ReactHostComponent = {
		createInternalComponent: createInternalComponent,
		createInstanceForText: createInstanceForText,
		isTextComponent: isTextComponent,
		injection: ReactHostComponentInjection
	};
	module.exports = ReactHostComponent;
}, function (module, exports) {
	"use strict";
	var nextDebugID = 1;
	function getNextDebugID() {
		return nextDebugID++;
	}
	module.exports = getNextDebugID;
}, function (module, exports) {
	"use strict";
	function escape(key) {
		var escapeRegex = /[=:]/g;
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		var escapedString = ("" + key).replace(escapeRegex, function (match) {
			return escaperLookup[match];
		});
		return "$" + escapedString;
	}
	function unescape(key) {
		var unescapeRegex = /(=0|=2)/g;
		var unescaperLookup = {
			"=0": "=",
			"=2": ":"
		};
		var keySubstring = key[0] === "." && key[1] === "$" ? key.substring(2) : key.substring(1);
		return ("" + keySubstring).replace(unescapeRegex, function (match) {
			return unescaperLookup[match];
		});
	}
	var KeyEscapeUtils = {
		escape: escape,
		unescape: unescape
	};
	module.exports = KeyEscapeUtils;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactCurrentOwner = __webpack_require__(16);
	var REACT_ELEMENT_TYPE = __webpack_require__(127);
	var getIteratorFn = __webpack_require__(128);
	var invariant = __webpack_require__(11);
	var KeyEscapeUtils = __webpack_require__(125);
	var warning = __webpack_require__(7);
	var SEPARATOR = ".";
	var SUBSEPARATOR = ":";
	var didWarnAboutMaps = false;
	function getComponentKey(component, index) {
		if (component && typeof component === "object" && component.key != null) {
			return KeyEscapeUtils.escape(component.key);
		}
		return index.toString(36);
	}
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
		var type = typeof children;
		if (type === "undefined" || type === "boolean") {
			children = null;
		}
		if (children === null || type === "string" || type === "number" || type === "object" && children.$$typeof === REACT_ELEMENT_TYPE) {
			callback(traverseContext, children, nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
			return 1;
		}
		var child;
		var nextName;
		var subtreeCount = 0;
		var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
		if (Array.isArray(children)) {
			for (var i = 0; i < children.length; i++) {
				child = children[i];
				nextName = nextNamePrefix + getComponentKey(child, i);
				subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
			}
		} else {
			var iteratorFn = getIteratorFn(children);
			if (iteratorFn) {
				var iterator = iteratorFn.call(children);
				var step;
				if (iteratorFn !== children.entries) {
					var ii = 0;
					while (!(step = iterator.next()).done) {
						child = step.value;
						nextName = nextNamePrefix + getComponentKey(child, ii++);
						subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
					}
				} else {
					if (false) {
						var mapsAsChildrenAddendum = "";
						if (ReactCurrentOwner.current) {
							var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
							if (mapsAsChildrenOwnerName) {
								mapsAsChildrenAddendum = " Check the render method of `" + mapsAsChildrenOwnerName + "`.";
							}
						}
						process.env.NODE_ENV !== "production" ? warning(didWarnAboutMaps, "Using Maps as children is not yet fully supported. It is an " + "experimental feature that might be removed. Convert it to a " + "sequence / iterable of keyed ReactElements instead.%s", mapsAsChildrenAddendum) : void 0;
						didWarnAboutMaps = true;
					}
					while (!(step = iterator.next()).done) {
						var entry = step.value;
						if (entry) {
							child = entry[1];
							nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
							subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
						}
					}
				}
			} else if (type === "object") {
				var addendum = "";
				if (false) {
					addendum = " If you meant to render a collection of children, use an array " + "instead or wrap the object using createFragment(object) from the " + "React add-ons.";
					if (children._isReactElement) {
						addendum = " It looks like you're using an element created by a different " + "version of React. Make sure to use only one copy of React.";
					}
					if (ReactCurrentOwner.current) {
						var name = ReactCurrentOwner.current.getName();
						if (name) {
							addendum += " Check the render method of `" + name + "`.";
						}
					}
				}
				var childrenString = String(children);
				true ? false ? invariant(false, "Objects are not valid as a React child (found: %s).%s", childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum) : _prodInvariant("31", childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum) : void 0;
			}
		}
		return subtreeCount;
	}
	function traverseAllChildren(children, callback, traverseContext) {
		if (children == null) {
			return 0;
		}
		return traverseAllChildrenImpl(children, "", callback, traverseContext);
	}
	module.exports = traverseAllChildren;
}, function (module, exports) {
	"use strict";
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
	module.exports = REACT_ELEMENT_TYPE;
}, function (module, exports) {
	"use strict";
	var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = "@@iterator";
	function getIteratorFn(maybeIterable) {
		var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
		if (typeof iteratorFn === "function") {
			return iteratorFn;
		}
	}
	module.exports = getIteratorFn;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(5);
	var ReactCurrentOwner = __webpack_require__(16);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	function isNative(fn) {
		var funcToString = Function.prototype.toString;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		try {
			var source = funcToString.call(fn);
			return reIsNative.test(source);
		} catch (err) {
			return false;
		}
	}
	var canUseCollections = typeof Array.from === "function" && typeof Map === "function" && isNative(Map) && Map.prototype != null && typeof Map.prototype.keys === "function" && isNative(Map.prototype.keys) && typeof Set === "function" && isNative(Set) && Set.prototype != null && typeof Set.prototype.keys === "function" && isNative(Set.prototype.keys);
	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;
	if (canUseCollections) {
		var itemMap = new Map;
		var rootIDSet = new Set;
		setItem = function (id, item) {
			itemMap.set(id, item);
		};
		getItem = function (id) {
			return itemMap.get(id);
		};
		removeItem = function (id) {
			itemMap["delete"](id);
		};
		getItemIDs = function () {
			return Array.from(itemMap.keys());
		};
		addRoot = function (id) {
			rootIDSet.add(id);
		};
		removeRoot = function (id) {
			rootIDSet["delete"](id);
		};
		getRootIDs = function () {
			return Array.from(rootIDSet.keys());
		};
	} else {
		var itemByKey = {};
		var rootByKey = {};
		var getKeyFromID = function (id) {
			return "." + id;
		};
		var getIDFromKey = function (key) {
			return parseInt(key.substr(1), 10);
		};
		setItem = function (id, item) {
			var key = getKeyFromID(id);
			itemByKey[key] = item;
		};
		getItem = function (id) {
			var key = getKeyFromID(id);
			return itemByKey[key];
		};
		removeItem = function (id) {
			var key = getKeyFromID(id);
			delete itemByKey[key];
		};
		getItemIDs = function () {
			return Object.keys(itemByKey).map(getIDFromKey);
		};
		addRoot = function (id) {
			var key = getKeyFromID(id);
			rootByKey[key] = true;
		};
		removeRoot = function (id) {
			var key = getKeyFromID(id);
			delete rootByKey[key];
		};
		getRootIDs = function () {
			return Object.keys(rootByKey).map(getIDFromKey);
		};
	}
	var unmountedIDs = [];
	function purgeDeep(id) {
		var item = getItem(id);
		if (item) {
			var childIDs = item.childIDs;
			removeItem(id);
			childIDs.forEach(purgeDeep);
		}
	}
	function describeComponentFrame(name, source, ownerName) {
		return "\n    in " + (name || "Unknown") + (source ? " (at " + source.fileName.replace(/^.*[\\\/]/, "") + ":" + source.lineNumber + ")" : ownerName ? " (created by " + ownerName + ")" : "");
	}
	function getDisplayName(element) {
		if (element == null) {
			return "#empty";
		} else if (typeof element === "string" || typeof element === "number") {
			return "#text";
		} else if (typeof element.type === "string") {
			return element.type;
		} else {
			return element.type.displayName || element.type.name || "Unknown";
		}
	}
	function describeID(id) {
		var name = ReactComponentTreeHook.getDisplayName(id);
		var element = ReactComponentTreeHook.getElement(id);
		var ownerID = ReactComponentTreeHook.getOwnerID(id);
		var ownerName;
		if (ownerID) {
			ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
		}
		false ? warning(element, "ReactComponentTreeHook: Missing React element for debugID %s when " + "building stack", id) : void 0;
		return describeComponentFrame(name, element && element._source, ownerName);
	}
	var ReactComponentTreeHook = {
		onSetChildren: function (id, nextChildIDs) {
			var item = getItem(id);
			!item ? false ? invariant(false, "Item must have been set") : _prodInvariant("144") : void 0;
			item.childIDs = nextChildIDs;
			for (var i = 0; i < nextChildIDs.length; i++) {
				var nextChildID = nextChildIDs[i];
				var nextChild = getItem(nextChildID);
				!nextChild ? false ? invariant(false, "Expected hook events to fire for the child before its parent includes it in onSetChildren().") : _prodInvariant("140") : void 0;
				!(nextChild.childIDs != null || typeof nextChild.element !== "object" || nextChild.element == null) ? false ? invariant(false, "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().") : _prodInvariant("141") : void 0;
				!nextChild.isMounted ? false ? invariant(false, "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().") : _prodInvariant("71") : void 0;
				if (nextChild.parentID == null) {
					nextChild.parentID = id;
				}
				!(nextChild.parentID === id) ? false ? invariant(false, "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).", nextChildID, nextChild.parentID, id) : _prodInvariant("142", nextChildID, nextChild.parentID, id) : void 0;
			}
		},
		onBeforeMountComponent: function (id, element, parentID) {
			var item = {
				element: element,
				parentID: parentID,
				text: null,
				childIDs: [],
				isMounted: false,
				updateCount: 0
			};
			setItem(id, item);
		},
		onBeforeUpdateComponent: function (id, element) {
			var item = getItem(id);
			if (!item || !item.isMounted) {
				return;
			}
			item.element = element;
		},
		onMountComponent: function (id) {
			var item = getItem(id);
			!item ? false ? invariant(false, "Item must have been set") : _prodInvariant("144") : void 0;
			item.isMounted = true;
			var isRoot = item.parentID === 0;
			if (isRoot) {
				addRoot(id);
			}
		},
		onUpdateComponent: function (id) {
			var item = getItem(id);
			if (!item || !item.isMounted) {
				return;
			}
			item.updateCount++;
		},
		onUnmountComponent: function (id) {
			var item = getItem(id);
			if (item) {
				item.isMounted = false;
				var isRoot = item.parentID === 0;
				if (isRoot) {
					removeRoot(id);
				}
			}
			unmountedIDs.push(id);
		},
		purgeUnmountedComponents: function () {
			if (ReactComponentTreeHook._preventPurging) {
				return;
			}
			for (var i = 0; i < unmountedIDs.length; i++) {
				var id = unmountedIDs[i];
				purgeDeep(id);
			}
			unmountedIDs.length = 0;
		},
		isMounted: function (id) {
			var item = getItem(id);
			return item ? item.isMounted : false;
		},
		getCurrentStackAddendum: function (topElement) {
			var info = "";
			if (topElement) {
				var name = getDisplayName(topElement);
				var owner = topElement._owner;
				info += describeComponentFrame(name, topElement._source, owner && owner.getName());
			}
			var currentOwner = ReactCurrentOwner.current;
			var id = currentOwner && currentOwner._debugID;
			info += ReactComponentTreeHook.getStackAddendumByID(id);
			return info;
		},
		getStackAddendumByID: function (id) {
			var info = "";
			while (id) {
				info += describeID(id);
				id = ReactComponentTreeHook.getParentID(id);
			}
			return info;
		},
		getChildIDs: function (id) {
			var item = getItem(id);
			return item ? item.childIDs : [];
		},
		getDisplayName: function (id) {
			var element = ReactComponentTreeHook.getElement(id);
			if (!element) {
				return null;
			}
			return getDisplayName(element);
		},
		getElement: function (id) {
			var item = getItem(id);
			return item ? item.element : null;
		},
		getOwnerID: function (id) {
			var element = ReactComponentTreeHook.getElement(id);
			if (!element || !element._owner) {
				return null;
			}
			return element._owner._debugID;
		},
		getParentID: function (id) {
			var item = getItem(id);
			return item ? item.parentID : null;
		},
		getSource: function (id) {
			var item = getItem(id);
			var element = item ? item.element : null;
			var source = element != null ? element._source : null;
			return source;
		},
		getText: function (id) {
			var element = ReactComponentTreeHook.getElement(id);
			if (typeof element === "string") {
				return element;
			} else if (typeof element === "number") {
				return "" + element;
			} else {
				return null;
			}
		},
		getUpdateCount: function (id) {
			var item = getItem(id);
			return item ? item.updateCount : 0;
		},
		getRootIDs: getRootIDs,
		getRegisteredIDs: getItemIDs,
		pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
			if (typeof console.reactStack !== "function") {
				return;
			}
			var stack = [];
			var currentOwner = ReactCurrentOwner.current;
			var id = currentOwner && currentOwner._debugID;
			try {
				if (isCreatingElement) {
					stack.push({
						name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
						fileName: currentSource ? currentSource.fileName : null,
						lineNumber: currentSource ? currentSource.lineNumber : null
					});
				}
				while (id) {
					var element = ReactComponentTreeHook.getElement(id);
					var parentID = ReactComponentTreeHook.getParentID(id);
					var ownerID = ReactComponentTreeHook.getOwnerID(id);
					var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
					var source = element && element._source;
					stack.push({
						name: ownerName,
						fileName: source ? source.fileName : null,
						lineNumber: source ? source.lineNumber : null
					});
					id = parentID;
				}
			} catch (err) { }
			console.reactStack(stack);
		},
		popNonStandardWarningStack: function () {
			if (typeof console.reactStackEnd !== "function") {
				return;
			}
			console.reactStackEnd();
		}
	};
	module.exports = ReactComponentTreeHook;
}, function (module, exports, __webpack_require__) {
	(function (process) {
		"use strict";
		var KeyEscapeUtils = __webpack_require__(125);
		var traverseAllChildren = __webpack_require__(126);
		var warning = __webpack_require__(7);
		var ReactComponentTreeHook;
		if (typeof process !== "undefined" && process.env && "production" === "test") {
			ReactComponentTreeHook = __webpack_require__(129);
		}
		function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
			if (traverseContext && typeof traverseContext === "object") {
				var result = traverseContext;
				var keyUnique = result[name] === undefined;
				if (false) {
					if (!ReactComponentTreeHook) {
						ReactComponentTreeHook = require("react/lib/ReactComponentTreeHook");
					}
					if (!keyUnique) {
						process.env.NODE_ENV !== "production" ? warning(false, "flattenChildren(...): Encountered two children with the same key, " + "`%s`. Child keys must be unique; when two children share a key, only " + "the first child will be used.%s", KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
					}
				}
				if (keyUnique && child != null) {
					result[name] = child;
				}
			}
		}
		function flattenChildren(children, selfDebugID) {
			if (children == null) {
				return children;
			}
			var result = {};
			if (false) {
				traverseAllChildren(children, function (traverseContext, child, name) {
					return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
				}, result);
			} else {
				traverseAllChildren(children, flattenSingleChildIntoContext, result);
			}
			return result;
		}
		module.exports = flattenChildren;
	}).call(exports, __webpack_require__(116));
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var PooledClass = __webpack_require__(52);
	var Transaction = __webpack_require__(65);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactServerUpdateQueue = __webpack_require__(132);
	var TRANSACTION_WRAPPERS = [];
	if (false) {
		TRANSACTION_WRAPPERS.push({
			initialize: ReactInstrumentation.debugTool.onBeginFlush,
			close: ReactInstrumentation.debugTool.onEndFlush
		});
	}
	var noopCallbackQueue = {
		enqueue: function () { }
	};
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
		this.reinitializeTransaction();
		this.renderToStaticMarkup = renderToStaticMarkup;
		this.useCreateElement = false;
		this.updateQueue = new ReactServerUpdateQueue(this);
	}
	var Mixin = {
		getTransactionWrappers: function () {
			return TRANSACTION_WRAPPERS;
		},
		getReactMountReady: function () {
			return noopCallbackQueue;
		},
		getUpdateQueue: function () {
			return this.updateQueue;
		},
		destructor: function () { },
		checkpoint: function () { },
		rollback: function () { }
	};
	_assign(ReactServerRenderingTransaction.prototype, Transaction, Mixin);
	PooledClass.addPoolingTo(ReactServerRenderingTransaction);
	module.exports = ReactServerRenderingTransaction;
}, function (module, exports, __webpack_require__) {
	"use strict";
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	var ReactUpdateQueue = __webpack_require__(133);
	var warning = __webpack_require__(7);
	function warnNoop(publicInstance, callerName) {
		if (false) {
			var constructor = publicInstance.constructor;
			process.env.NODE_ENV !== "production" ? warning(false, "%s(...): Can only update a mounting component. " + "This usually means you called %s() outside componentWillMount() on the server. " + "This is a no-op. Please check the code for the %s component.", callerName, callerName, constructor && (constructor.displayName || constructor.name) || "ReactClass") : void 0;
		}
	}
	var ReactServerUpdateQueue = function () {
		function ReactServerUpdateQueue(transaction) {
			_classCallCheck(this, ReactServerUpdateQueue);
			this.transaction = transaction;
		}
		ReactServerUpdateQueue.prototype.isMounted = function isMounted(publicInstance) {
			return false;
		};
		ReactServerUpdateQueue.prototype.enqueueCallback = function enqueueCallback(publicInstance, callback, callerName) {
			if (this.transaction.isInTransaction()) {
				ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
			}
		};
		ReactServerUpdateQueue.prototype.enqueueForceUpdate = function enqueueForceUpdate(publicInstance) {
			if (this.transaction.isInTransaction()) {
				ReactUpdateQueue.enqueueForceUpdate(publicInstance);
			} else {
				warnNoop(publicInstance, "forceUpdate");
			}
		};
		ReactServerUpdateQueue.prototype.enqueueReplaceState = function enqueueReplaceState(publicInstance, completeState) {
			if (this.transaction.isInTransaction()) {
				ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
			} else {
				warnNoop(publicInstance, "replaceState");
			}
		};
		ReactServerUpdateQueue.prototype.enqueueSetState = function enqueueSetState(publicInstance, partialState) {
			if (this.transaction.isInTransaction()) {
				ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
			} else {
				warnNoop(publicInstance, "setState");
			}
		};
		return ReactServerUpdateQueue;
	}();
	module.exports = ReactServerUpdateQueue;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactCurrentOwner = __webpack_require__(16);
	var ReactInstanceMap = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactUpdates = __webpack_require__(58);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	function enqueueUpdate(internalInstance) {
		ReactUpdates.enqueueUpdate(internalInstance);
	}
	function formatUnexpectedArgument(arg) {
		var type = typeof arg;
		if (type !== "object") {
			return type;
		}
		var displayName = arg.constructor && arg.constructor.name || type;
		var keys = Object.keys(arg);
		if (keys.length > 0 && keys.length < 20) {
			return displayName + " (keys: " + keys.join(", ") + ")";
		}
		return displayName;
	}
	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
		var internalInstance = ReactInstanceMap.get(publicInstance);
		if (!internalInstance) {
			if (false) {
				var ctor = publicInstance.constructor;
				process.env.NODE_ENV !== "production" ? warning(!callerName, "%s(...): Can only update a mounted or mounting component. " + "This usually means you called %s() on an unmounted component. " + "This is a no-op. Please check the code for the %s component.", callerName, callerName, ctor && (ctor.displayName || ctor.name) || "ReactClass") : void 0;
			}
			return null;
		}
		if (false) {
			process.env.NODE_ENV !== "production" ? warning(ReactCurrentOwner.current == null, "%s(...): Cannot update during an existing state transition (such as " + "within `render` or another component's constructor). Render methods " + "should be a pure function of props and state; constructor " + "side-effects are an anti-pattern, but can be moved to " + "`componentWillMount`.", callerName) : void 0;
		}
		return internalInstance;
	}
	var ReactUpdateQueue = {
		isMounted: function (publicInstance) {
			if (false) {
				var owner = ReactCurrentOwner.current;
				if (owner !== null) {
					process.env.NODE_ENV !== "production" ? warning(owner._warnedAboutRefsInRender, "%s is accessing isMounted inside its render() function. " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", owner.getName() || "A component") : void 0;
					owner._warnedAboutRefsInRender = true;
				}
			}
			var internalInstance = ReactInstanceMap.get(publicInstance);
			if (internalInstance) {
				return !!internalInstance._renderedComponent;
			} else {
				return false;
			}
		},
		enqueueCallback: function (publicInstance, callback, callerName) {
			ReactUpdateQueue.validateCallback(callback, callerName);
			var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
			if (!internalInstance) {
				return null;
			}
			if (internalInstance._pendingCallbacks) {
				internalInstance._pendingCallbacks.push(callback);
			} else {
				internalInstance._pendingCallbacks = [callback];
			}
			enqueueUpdate(internalInstance);
		},
		enqueueCallbackInternal: function (internalInstance, callback) {
			if (internalInstance._pendingCallbacks) {
				internalInstance._pendingCallbacks.push(callback);
			} else {
				internalInstance._pendingCallbacks = [callback];
			}
			enqueueUpdate(internalInstance);
		},
		enqueueForceUpdate: function (publicInstance) {
			var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "forceUpdate");
			if (!internalInstance) {
				return;
			}
			internalInstance._pendingForceUpdate = true;
			enqueueUpdate(internalInstance);
		},
		enqueueReplaceState: function (publicInstance, completeState, callback) {
			var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "replaceState");
			if (!internalInstance) {
				return;
			}
			internalInstance._pendingStateQueue = [completeState];
			internalInstance._pendingReplaceState = true;
			if (callback !== undefined && callback !== null) {
				ReactUpdateQueue.validateCallback(callback, "replaceState");
				if (internalInstance._pendingCallbacks) {
					internalInstance._pendingCallbacks.push(callback);
				} else {
					internalInstance._pendingCallbacks = [callback];
				}
			}
			enqueueUpdate(internalInstance);
		},
		enqueueSetState: function (publicInstance, partialState) {
			if (false) {
				ReactInstrumentation.debugTool.onSetState();
				process.env.NODE_ENV !== "production" ? warning(partialState != null, "setState(...): You passed an undefined or null state object; " + "instead, use forceUpdate().") : void 0;
			}
			var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "setState");
			if (!internalInstance) {
				return;
			}
			var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
			queue.push(partialState);
			enqueueUpdate(internalInstance);
		},
		enqueueElementInternal: function (internalInstance, nextElement, nextContext) {
			internalInstance._pendingElement = nextElement;
			internalInstance._context = nextContext;
			enqueueUpdate(internalInstance);
		},
		validateCallback: function (callback, callerName) {
			!(!callback || typeof callback === "function") ? false ? invariant(false, "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, formatUnexpectedArgument(callback)) : _prodInvariant("122", callerName, formatUnexpectedArgument(callback)) : void 0;
		}
	};
	module.exports = ReactUpdateQueue;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var emptyFunction = __webpack_require__(8);
	var warning = __webpack_require__(7);
	var validateDOMNesting = emptyFunction;
	if (false) {
		var specialTags = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"];
		var inScopeTags = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"];
		var buttonScopeTags = inScopeTags.concat(["button"]);
		var impliedEndTags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"];
		var emptyAncestorInfo = {
			current: null,
			formTag: null,
			aTagInScope: null,
			buttonTagInScope: null,
			nobrTagInScope: null,
			pTagInButtonScope: null,
			listItemTagAutoclosing: null,
			dlItemTagAutoclosing: null
		};
		var updatedAncestorInfo = function (oldInfo, tag, instance) {
			var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
			var info = {
				tag: tag,
				instance: instance
			};
			if (inScopeTags.indexOf(tag) !== -1) {
				ancestorInfo.aTagInScope = null;
				ancestorInfo.buttonTagInScope = null;
				ancestorInfo.nobrTagInScope = null;
			}
			if (buttonScopeTags.indexOf(tag) !== -1) {
				ancestorInfo.pTagInButtonScope = null;
			}
			if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
				ancestorInfo.listItemTagAutoclosing = null;
				ancestorInfo.dlItemTagAutoclosing = null;
			}
			ancestorInfo.current = info;
			if (tag === "form") {
				ancestorInfo.formTag = info;
			}
			if (tag === "a") {
				ancestorInfo.aTagInScope = info;
			}
			if (tag === "button") {
				ancestorInfo.buttonTagInScope = info;
			}
			if (tag === "nobr") {
				ancestorInfo.nobrTagInScope = info;
			}
			if (tag === "p") {
				ancestorInfo.pTagInButtonScope = info;
			}
			if (tag === "li") {
				ancestorInfo.listItemTagAutoclosing = info;
			}
			if (tag === "dd" || tag === "dt") {
				ancestorInfo.dlItemTagAutoclosing = info;
			}
			return ancestorInfo;
		};
		var isTagValidWithParent = function (tag, parentTag) {
			switch (parentTag) {
				case "select":
					return tag === "option" || tag === "optgroup" || tag === "#text";

				case "optgroup":
					return tag === "option" || tag === "#text";

				case "option":
					return tag === "#text";

				case "tr":
					return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";

				case "tbody":
				case "thead":
				case "tfoot":
					return tag === "tr" || tag === "style" || tag === "script" || tag === "template";

				case "colgroup":
					return tag === "col" || tag === "template";

				case "table":
					return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";

				case "head":
					return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";

				case "html":
					return tag === "head" || tag === "body";

				case "#document":
					return tag === "html";
			}
			switch (tag) {
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6":
					return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";

				case "rp":
				case "rt":
					return impliedEndTags.indexOf(parentTag) === -1;

				case "body":
				case "caption":
				case "col":
				case "colgroup":
				case "frame":
				case "head":
				case "html":
				case "tbody":
				case "td":
				case "tfoot":
				case "th":
				case "thead":
				case "tr":
					return parentTag == null;
			}
			return true;
		};
		var findInvalidAncestorForTag = function (tag, ancestorInfo) {
			switch (tag) {
				case "address":
				case "article":
				case "aside":
				case "blockquote":
				case "center":
				case "details":
				case "dialog":
				case "dir":
				case "div":
				case "dl":
				case "fieldset":
				case "figcaption":
				case "figure":
				case "footer":
				case "header":
				case "hgroup":
				case "main":
				case "menu":
				case "nav":
				case "ol":
				case "p":
				case "section":
				case "summary":
				case "ul":
				case "pre":
				case "listing":
				case "table":
				case "hr":
				case "xmp":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6":
					return ancestorInfo.pTagInButtonScope;

				case "form":
					return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

				case "li":
					return ancestorInfo.listItemTagAutoclosing;

				case "dd":
				case "dt":
					return ancestorInfo.dlItemTagAutoclosing;

				case "button":
					return ancestorInfo.buttonTagInScope;

				case "a":
					return ancestorInfo.aTagInScope;

				case "nobr":
					return ancestorInfo.nobrTagInScope;
			}
			return null;
		};
		var findOwnerStack = function (instance) {
			if (!instance) {
				return [];
			}
			var stack = [];
			do {
				stack.push(instance);
			} while (instance = instance._currentElement._owner);
			stack.reverse();
			return stack;
		};
		var didWarn = {};
		validateDOMNesting = function (childTag, childText, childInstance, ancestorInfo) {
			ancestorInfo = ancestorInfo || emptyAncestorInfo;
			var parentInfo = ancestorInfo.current;
			var parentTag = parentInfo && parentInfo.tag;
			if (childText != null) {
				process.env.NODE_ENV !== "production" ? warning(childTag == null, "validateDOMNesting: when childText is passed, childTag should be null") : void 0;
				childTag = "#text";
			}
			var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
			var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
			var problematic = invalidParent || invalidAncestor;
			if (problematic) {
				var ancestorTag = problematic.tag;
				var ancestorInstance = problematic.instance;
				var childOwner = childInstance && childInstance._currentElement._owner;
				var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
				var childOwners = findOwnerStack(childOwner);
				var ancestorOwners = findOwnerStack(ancestorOwner);
				var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
				var i;
				var deepestCommon = -1;
				for (i = 0; i < minStackLen; i++) {
					if (childOwners[i] === ancestorOwners[i]) {
						deepestCommon = i;
					} else {
						break;
					}
				}
				var UNKNOWN = "(unknown)";
				var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
					return inst.getName() || UNKNOWN;
				});
				var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
					return inst.getName() || UNKNOWN;
				});
				var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ["..."] : [], childOwnerNames, childTag).join(" > ");
				var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag + "|" + ownerInfo;
				if (didWarn[warnKey]) {
					return;
				}
				didWarn[warnKey] = true;
				var tagDisplayName = childTag;
				var whitespaceInfo = "";
				if (childTag === "#text") {
					if (/\S/.test(childText)) {
						tagDisplayName = "Text nodes";
					} else {
						tagDisplayName = "Whitespace text nodes";
						whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + "each line of your source code.";
					}
				} else {
					tagDisplayName = "<" + childTag + ">";
				}
				if (invalidParent) {
					var info = "";
					if (ancestorTag === "table" && childTag === "tr") {
						info += " Add a <tbody> to your code to match the DOM tree generated by " + "the browser.";
					}
					process.env.NODE_ENV !== "production" ? warning(false, "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s " + "See %s.%s", tagDisplayName, ancestorTag, whitespaceInfo, ownerInfo, info) : void 0;
				} else {
					process.env.NODE_ENV !== "production" ? warning(false, "validateDOMNesting(...): %s cannot appear as a descendant of " + "<%s>. See %s.", tagDisplayName, ancestorTag, ownerInfo) : void 0;
				}
			}
		};
		validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
		validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
			ancestorInfo = ancestorInfo || emptyAncestorInfo;
			var parentInfo = ancestorInfo.current;
			var parentTag = parentInfo && parentInfo.tag;
			return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
		};
	}
	module.exports = validateDOMNesting;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var DOMLazyTree = __webpack_require__(79);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMEmptyComponent = function (instantiate) {
		this._currentElement = null;
		this._hostNode = null;
		this._hostParent = null;
		this._hostContainerInfo = null;
		this._domID = 0;
	};
	_assign(ReactDOMEmptyComponent.prototype, {
		mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
			var domID = hostContainerInfo._idCounter++;
			this._domID = domID;
			this._hostParent = hostParent;
			this._hostContainerInfo = hostContainerInfo;
			var nodeValue = " react-empty: " + this._domID + " ";
			if (transaction.useCreateElement) {
				var ownerDocument = hostContainerInfo._ownerDocument;
				var node = ownerDocument.createComment(nodeValue);
				ReactDOMComponentTree.precacheNode(this, node);
				return DOMLazyTree(node);
			} else {
				if (transaction.renderToStaticMarkup) {
					return "";
				}
				return "\x3c!--" + nodeValue + "--\x3e";
			}
		},
		receiveComponent: function () { },
		getHostNode: function () {
			return ReactDOMComponentTree.getNodeFromInstance(this);
		},
		unmountComponent: function () {
			ReactDOMComponentTree.uncacheNode(this);
		}
	});
	module.exports = ReactDOMEmptyComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var invariant = __webpack_require__(11);
	function getLowestCommonAncestor(instA, instB) {
		!("_hostNode" in instA) ? false ? invariant(false, "getNodeFromInstance: Invalid argument.") : _prodInvariant("33") : void 0;
		!("_hostNode" in instB) ? false ? invariant(false, "getNodeFromInstance: Invalid argument.") : _prodInvariant("33") : void 0;
		var depthA = 0;
		for (var tempA = instA; tempA; tempA = tempA._hostParent) {
			depthA++;
		}
		var depthB = 0;
		for (var tempB = instB; tempB; tempB = tempB._hostParent) {
			depthB++;
		}
		while (depthA - depthB > 0) {
			instA = instA._hostParent;
			depthA--;
		}
		while (depthB - depthA > 0) {
			instB = instB._hostParent;
			depthB--;
		}
		var depth = depthA;
		while (depth--) {
			if (instA === instB) {
				return instA;
			}
			instA = instA._hostParent;
			instB = instB._hostParent;
		}
		return null;
	}
	function isAncestor(instA, instB) {
		!("_hostNode" in instA) ? false ? invariant(false, "isAncestor: Invalid argument.") : _prodInvariant("35") : void 0;
		!("_hostNode" in instB) ? false ? invariant(false, "isAncestor: Invalid argument.") : _prodInvariant("35") : void 0;
		while (instB) {
			if (instB === instA) {
				return true;
			}
			instB = instB._hostParent;
		}
		return false;
	}
	function getParentInstance(inst) {
		!("_hostNode" in inst) ? false ? invariant(false, "getParentInstance: Invalid argument.") : _prodInvariant("36") : void 0;
		return inst._hostParent;
	}
	function traverseTwoPhase(inst, fn, arg) {
		var path = [];
		while (inst) {
			path.push(inst);
			inst = inst._hostParent;
		}
		var i;
		for (i = path.length; i-- > 0;) {
			fn(path[i], "captured", arg);
		}
		for (i = 0; i < path.length; i++) {
			fn(path[i], "bubbled", arg);
		}
	}
	function traverseEnterLeave(from, to, fn, argFrom, argTo) {
		var common = from && to ? getLowestCommonAncestor(from, to) : null;
		var pathFrom = [];
		while (from && from !== common) {
			pathFrom.push(from);
			from = from._hostParent;
		}
		var pathTo = [];
		while (to && to !== common) {
			pathTo.push(to);
			to = to._hostParent;
		}
		var i;
		for (i = 0; i < pathFrom.length; i++) {
			fn(pathFrom[i], "bubbled", argFrom);
		}
		for (i = pathTo.length; i-- > 0;) {
			fn(pathTo[i], "captured", argTo);
		}
	}
	module.exports = {
		isAncestor: isAncestor,
		getLowestCommonAncestor: getLowestCommonAncestor,
		getParentInstance: getParentInstance,
		traverseTwoPhase: traverseTwoPhase,
		traverseEnterLeave: traverseEnterLeave
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37), _assign = __webpack_require__(3);
	var DOMChildrenOperations = __webpack_require__(78);
	var DOMLazyTree = __webpack_require__(79);
	var ReactDOMComponentTree = __webpack_require__(36);
	var escapeTextContentForBrowser = __webpack_require__(84);
	var invariant = __webpack_require__(11);
	var validateDOMNesting = __webpack_require__(134);
	var ReactDOMTextComponent = function (text) {
		this._currentElement = text;
		this._stringText = "" + text;
		this._hostNode = null;
		this._hostParent = null;
		this._domID = 0;
		this._mountIndex = 0;
		this._closingComment = null;
		this._commentNodes = null;
	};
	_assign(ReactDOMTextComponent.prototype, {
		mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
			if (false) {
				var parentInfo;
				if (hostParent != null) {
					parentInfo = hostParent._ancestorInfo;
				} else if (hostContainerInfo != null) {
					parentInfo = hostContainerInfo._ancestorInfo;
				}
				if (parentInfo) {
					validateDOMNesting(null, this._stringText, this, parentInfo);
				}
			}
			var domID = hostContainerInfo._idCounter++;
			var openingValue = " react-text: " + domID + " ";
			var closingValue = " /react-text ";
			this._domID = domID;
			this._hostParent = hostParent;
			if (transaction.useCreateElement) {
				var ownerDocument = hostContainerInfo._ownerDocument;
				var openingComment = ownerDocument.createComment(openingValue);
				var closingComment = ownerDocument.createComment(closingValue);
				var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
				DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
				if (this._stringText) {
					DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
				}
				DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
				ReactDOMComponentTree.precacheNode(this, openingComment);
				this._closingComment = closingComment;
				return lazyTree;
			} else {
				var escapedText = escapeTextContentForBrowser(this._stringText);
				if (transaction.renderToStaticMarkup) {
					return escapedText;
				}
				return "\x3c!--" + openingValue + "--\x3e" + escapedText + "\x3c!--" + closingValue + "--\x3e";
			}
		},
		receiveComponent: function (nextText, transaction) {
			if (nextText !== this._currentElement) {
				this._currentElement = nextText;
				var nextStringText = "" + nextText;
				if (nextStringText !== this._stringText) {
					this._stringText = nextStringText;
					var commentNodes = this.getHostNode();
					DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
				}
			}
		},
		getHostNode: function () {
			var hostNode = this._commentNodes;
			if (hostNode) {
				return hostNode;
			}
			if (!this._closingComment) {
				var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
				var node = openingComment.nextSibling;
				while (true) {
					!(node != null) ? false ? invariant(false, "Missing closing comment for text component %s", this._domID) : _prodInvariant("67", this._domID) : void 0;
					if (node.nodeType === 8 && node.nodeValue === " /react-text ") {
						this._closingComment = node;
						break;
					}
					node = node.nextSibling;
				}
			}
			hostNode = [this._hostNode, this._closingComment];
			this._commentNodes = hostNode;
			return hostNode;
		},
		unmountComponent: function () {
			this._closingComment = null;
			this._commentNodes = null;
			ReactDOMComponentTree.uncacheNode(this);
		}
	});
	module.exports = ReactDOMTextComponent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var ReactUpdates = __webpack_require__(58);
	var Transaction = __webpack_require__(65);
	var emptyFunction = __webpack_require__(8);
	var RESET_BATCHED_UPDATES = {
		initialize: emptyFunction,
		close: function () {
			ReactDefaultBatchingStrategy.isBatchingUpdates = false;
		}
	};
	var FLUSH_BATCHED_UPDATES = {
		initialize: emptyFunction,
		close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};
	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
	function ReactDefaultBatchingStrategyTransaction() {
		this.reinitializeTransaction();
	}
	_assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction, {
		getTransactionWrappers: function () {
			return TRANSACTION_WRAPPERS;
		}
	});
	var transaction = new ReactDefaultBatchingStrategyTransaction;
	var ReactDefaultBatchingStrategy = {
		isBatchingUpdates: false,
		batchedUpdates: function (callback, a, b, c, d, e) {
			var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
			ReactDefaultBatchingStrategy.isBatchingUpdates = true;
			if (alreadyBatchingUpdates) {
				return callback(a, b, c, d, e);
			} else {
				return transaction.perform(callback, null, a, b, c, d, e);
			}
		}
	};
	module.exports = ReactDefaultBatchingStrategy;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var EventListener = __webpack_require__(140);
	var ExecutionEnvironment = __webpack_require__(50);
	var PooledClass = __webpack_require__(52);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactUpdates = __webpack_require__(58);
	var getEventTarget = __webpack_require__(67);
	var getUnboundedScrollPosition = __webpack_require__(141);
	function findParent(inst) {
		while (inst._hostParent) {
			inst = inst._hostParent;
		}
		var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
		var container = rootNode.parentNode;
		return ReactDOMComponentTree.getClosestInstanceFromNode(container);
	}
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
		this.topLevelType = topLevelType;
		this.nativeEvent = nativeEvent;
		this.ancestors = [];
	}
	_assign(TopLevelCallbackBookKeeping.prototype, {
		destructor: function () {
			this.topLevelType = null;
			this.nativeEvent = null;
			this.ancestors.length = 0;
		}
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
	function handleTopLevelImpl(bookKeeping) {
		var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
		var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
		var ancestor = targetInst;
		do {
			bookKeeping.ancestors.push(ancestor);
			ancestor = ancestor && findParent(ancestor);
		} while (ancestor);
		for (var i = 0; i < bookKeeping.ancestors.length; i++) {
			targetInst = bookKeeping.ancestors[i];
			ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
		}
	}
	function scrollValueMonitor(cb) {
		var scrollPosition = getUnboundedScrollPosition(window);
		cb(scrollPosition);
	}
	var ReactEventListener = {
		_enabled: true,
		_handleTopLevel: null,
		WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
		setHandleTopLevel: function (handleTopLevel) {
			ReactEventListener._handleTopLevel = handleTopLevel;
		},
		setEnabled: function (enabled) {
			ReactEventListener._enabled = !!enabled;
		},
		isEnabled: function () {
			return ReactEventListener._enabled;
		},
		trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
			if (!element) {
				return null;
			}
			return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
		},
		trapCapturedEvent: function (topLevelType, handlerBaseName, element) {
			if (!element) {
				return null;
			}
			return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
		},
		monitorScrollValue: function (refresh) {
			var callback = scrollValueMonitor.bind(null, refresh);
			EventListener.listen(window, "scroll", callback);
		},
		dispatchEvent: function (topLevelType, nativeEvent) {
			if (!ReactEventListener._enabled) {
				return;
			}
			var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
			try {
				ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
			} finally {
				TopLevelCallbackBookKeeping.release(bookKeeping);
			}
		}
	};
	module.exports = ReactEventListener;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var emptyFunction = __webpack_require__(8);
	var EventListener = {
		listen: function listen(target, eventType, callback) {
			if (target.addEventListener) {
				target.addEventListener(eventType, callback, false);
				return {
					remove: function remove() {
						target.removeEventListener(eventType, callback, false);
					}
				};
			} else if (target.attachEvent) {
				target.attachEvent("on" + eventType, callback);
				return {
					remove: function remove() {
						target.detachEvent("on" + eventType, callback);
					}
				};
			}
		},
		capture: function capture(target, eventType, callback) {
			if (target.addEventListener) {
				target.addEventListener(eventType, callback, true);
				return {
					remove: function remove() {
						target.removeEventListener(eventType, callback, true);
					}
				};
			} else {
				if (false) {
					console.error("Attempted to listen to events during the capture phase on a " + "browser that does not support the capture phase. Your application " + "will not receive some events.");
				}
				return {
					remove: emptyFunction
				};
			}
		},
		registerDefault: function registerDefault() { }
	};
	module.exports = EventListener;
}, function (module, exports) {
	"use strict";
	function getUnboundedScrollPosition(scrollable) {
		if (scrollable.Window && scrollable instanceof scrollable.Window) {
			return {
				x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
				y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
			};
		}
		return {
			x: scrollable.scrollLeft,
			y: scrollable.scrollTop
		};
	}
	module.exports = getUnboundedScrollPosition;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var DOMProperty = __webpack_require__(38);
	var EventPluginHub = __webpack_require__(44);
	var EventPluginUtils = __webpack_require__(46);
	var ReactComponentEnvironment = __webpack_require__(113);
	var ReactEmptyComponent = __webpack_require__(122);
	var ReactBrowserEventEmitter = __webpack_require__(103);
	var ReactHostComponent = __webpack_require__(123);
	var ReactUpdates = __webpack_require__(58);
	var ReactInjection = {
		Component: ReactComponentEnvironment.injection,
		DOMProperty: DOMProperty.injection,
		EmptyComponent: ReactEmptyComponent.injection,
		EventPluginHub: EventPluginHub.injection,
		EventPluginUtils: EventPluginUtils.injection,
		EventEmitter: ReactBrowserEventEmitter.injection,
		HostComponent: ReactHostComponent.injection,
		Updates: ReactUpdates.injection
	};
	module.exports = ReactInjection;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _assign = __webpack_require__(3);
	var CallbackQueue = __webpack_require__(59);
	var PooledClass = __webpack_require__(52);
	var ReactBrowserEventEmitter = __webpack_require__(103);
	var ReactInputSelection = __webpack_require__(144);
	var ReactInstrumentation = __webpack_require__(64);
	var Transaction = __webpack_require__(65);
	var ReactUpdateQueue = __webpack_require__(133);
	var SELECTION_RESTORATION = {
		initialize: ReactInputSelection.getSelectionInformation,
		close: ReactInputSelection.restoreSelection
	};
	var EVENT_SUPPRESSION = {
		initialize: function () {
			var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
			ReactBrowserEventEmitter.setEnabled(false);
			return currentlyEnabled;
		},
		close: function (previouslyEnabled) {
			ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
		}
	};
	var ON_DOM_READY_QUEUEING = {
		initialize: function () {
			this.reactMountReady.reset();
		},
		close: function () {
			this.reactMountReady.notifyAll();
		}
	};
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
	if (false) {
		TRANSACTION_WRAPPERS.push({
			initialize: ReactInstrumentation.debugTool.onBeginFlush,
			close: ReactInstrumentation.debugTool.onEndFlush
		});
	}
	function ReactReconcileTransaction(useCreateElement) {
		this.reinitializeTransaction();
		this.renderToStaticMarkup = false;
		this.reactMountReady = CallbackQueue.getPooled(null);
		this.useCreateElement = useCreateElement;
	}
	var Mixin = {
		getTransactionWrappers: function () {
			return TRANSACTION_WRAPPERS;
		},
		getReactMountReady: function () {
			return this.reactMountReady;
		},
		getUpdateQueue: function () {
			return ReactUpdateQueue;
		},
		checkpoint: function () {
			return this.reactMountReady.checkpoint();
		},
		rollback: function (checkpoint) {
			this.reactMountReady.rollback(checkpoint);
		},
		destructor: function () {
			CallbackQueue.release(this.reactMountReady);
			this.reactMountReady = null;
		}
	};
	_assign(ReactReconcileTransaction.prototype, Transaction, Mixin);
	PooledClass.addPoolingTo(ReactReconcileTransaction);
	module.exports = ReactReconcileTransaction;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactDOMSelection = __webpack_require__(145);
	var containsNode = __webpack_require__(147);
	var focusNode = __webpack_require__(92);
	var getActiveElement = __webpack_require__(150);
	function isInDocument(node) {
		return containsNode(document.documentElement, node);
	}
	var ReactInputSelection = {
		hasSelectionCapabilities: function (elem) {
			var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
			return nodeName && (nodeName === "input" && elem.type === "text" || nodeName === "textarea" || elem.contentEditable === "true");
		},
		getSelectionInformation: function () {
			var focusedElem = getActiveElement();
			return {
				focusedElem: focusedElem,
				selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
			};
		},
		restoreSelection: function (priorSelectionInformation) {
			var curFocusedElem = getActiveElement();
			var priorFocusedElem = priorSelectionInformation.focusedElem;
			var priorSelectionRange = priorSelectionInformation.selectionRange;
			if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
				if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
					ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
				}
				focusNode(priorFocusedElem);
			}
		},
		getSelection: function (input) {
			var selection;
			if ("selectionStart" in input) {
				selection = {
					start: input.selectionStart,
					end: input.selectionEnd
				};
			} else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === "input") {
				var range = document.selection.createRange();
				if (range.parentElement() === input) {
					selection = {
						start: -range.moveStart("character", -input.value.length),
						end: -range.moveEnd("character", -input.value.length)
					};
				}
			} else {
				selection = ReactDOMSelection.getOffsets(input);
			}
			return selection || {
				start: 0,
				end: 0
			};
		},
		setSelection: function (input, offsets) {
			var start = offsets.start;
			var end = offsets.end;
			if (end === undefined) {
				end = start;
			}
			if ("selectionStart" in input) {
				input.selectionStart = start;
				input.selectionEnd = Math.min(end, input.value.length);
			} else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === "input") {
				var range = input.createTextRange();
				range.collapse(true);
				range.moveStart("character", start);
				range.moveEnd("character", end - start);
				range.select();
			} else {
				ReactDOMSelection.setOffsets(input, offsets);
			}
		}
	};
	module.exports = ReactInputSelection;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ExecutionEnvironment = __webpack_require__(50);
	var getNodeForCharacterOffset = __webpack_require__(146);
	var getTextContentAccessor = __webpack_require__(53);
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
		return anchorNode === focusNode && anchorOffset === focusOffset;
	}
	function getIEOffsets(node) {
		var selection = document.selection;
		var selectedRange = selection.createRange();
		var selectedLength = selectedRange.text.length;
		var fromStart = selectedRange.duplicate();
		fromStart.moveToElementText(node);
		fromStart.setEndPoint("EndToStart", selectedRange);
		var startOffset = fromStart.text.length;
		var endOffset = startOffset + selectedLength;
		return {
			start: startOffset,
			end: endOffset
		};
	}
	function getModernOffsets(node) {
		var selection = window.getSelection && window.getSelection();
		if (!selection || selection.rangeCount === 0) {
			return null;
		}
		var anchorNode = selection.anchorNode;
		var anchorOffset = selection.anchorOffset;
		var focusNode = selection.focusNode;
		var focusOffset = selection.focusOffset;
		var currentRange = selection.getRangeAt(0);
		try {
			currentRange.startContainer.nodeType;
			currentRange.endContainer.nodeType;
		} catch (e) {
			return null;
		}
		var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
		var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
		var tempRange = currentRange.cloneRange();
		tempRange.selectNodeContents(node);
		tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
		var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
		var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
		var end = start + rangeLength;
		var detectionRange = document.createRange();
		detectionRange.setStart(anchorNode, anchorOffset);
		detectionRange.setEnd(focusNode, focusOffset);
		var isBackward = detectionRange.collapsed;
		return {
			start: isBackward ? end : start,
			end: isBackward ? start : end
		};
	}
	function setIEOffsets(node, offsets) {
		var range = document.selection.createRange().duplicate();
		var start, end;
		if (offsets.end === undefined) {
			start = offsets.start;
			end = start;
		} else if (offsets.start > offsets.end) {
			start = offsets.end;
			end = offsets.start;
		} else {
			start = offsets.start;
			end = offsets.end;
		}
		range.moveToElementText(node);
		range.moveStart("character", start);
		range.setEndPoint("EndToStart", range);
		range.moveEnd("character", end - start);
		range.select();
	}
	function setModernOffsets(node, offsets) {
		if (!window.getSelection) {
			return;
		}
		var selection = window.getSelection();
		var length = node[getTextContentAccessor()].length;
		var start = Math.min(offsets.start, length);
		var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
		if (!selection.extend && start > end) {
			var temp = end;
			end = start;
			start = temp;
		}
		var startMarker = getNodeForCharacterOffset(node, start);
		var endMarker = getNodeForCharacterOffset(node, end);
		if (startMarker && endMarker) {
			var range = document.createRange();
			range.setStart(startMarker.node, startMarker.offset);
			selection.removeAllRanges();
			if (start > end) {
				selection.addRange(range);
				selection.extend(endMarker.node, endMarker.offset);
			} else {
				range.setEnd(endMarker.node, endMarker.offset);
				selection.addRange(range);
			}
		}
	}
	var useIEOffsets = ExecutionEnvironment.canUseDOM && "selection" in document && !("getSelection" in window);
	var ReactDOMSelection = {
		getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
		setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};
	module.exports = ReactDOMSelection;
}, function (module, exports) {
	"use strict";
	function getLeafNode(node) {
		while (node && node.firstChild) {
			node = node.firstChild;
		}
		return node;
	}
	function getSiblingNode(node) {
		while (node) {
			if (node.nextSibling) {
				return node.nextSibling;
			}
			node = node.parentNode;
		}
	}
	function getNodeForCharacterOffset(root, offset) {
		var node = getLeafNode(root);
		var nodeStart = 0;
		var nodeEnd = 0;
		while (node) {
			if (node.nodeType === 3) {
				nodeEnd = nodeStart + node.textContent.length;
				if (nodeStart <= offset && nodeEnd >= offset) {
					return {
						node: node,
						offset: offset - nodeStart
					};
				}
				nodeStart = nodeEnd;
			}
			node = getLeafNode(getSiblingNode(node));
		}
	}
	module.exports = getNodeForCharacterOffset;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var isTextNode = __webpack_require__(148);
	function containsNode(outerNode, innerNode) {
		if (!outerNode || !innerNode) {
			return false;
		} else if (outerNode === innerNode) {
			return true;
		} else if (isTextNode(outerNode)) {
			return false;
		} else if (isTextNode(innerNode)) {
			return containsNode(outerNode, innerNode.parentNode);
		} else if ("contains" in outerNode) {
			return outerNode.contains(innerNode);
		} else if (outerNode.compareDocumentPosition) {
			return !!(outerNode.compareDocumentPosition(innerNode) & 16);
		} else {
			return false;
		}
	}
	module.exports = containsNode;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var isNode = __webpack_require__(149);
	function isTextNode(object) {
		return isNode(object) && object.nodeType == 3;
	}
	module.exports = isTextNode;
}, function (module, exports) {
	"use strict";
	function isNode(object) {
		var doc = object ? object.ownerDocument || object : document;
		var defaultView = doc.defaultView || window;
		return !!(object && (typeof defaultView.Node === "function" ? object instanceof defaultView.Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"));
	}
	module.exports = isNode;
}, function (module, exports) {
	"use strict";
	function getActiveElement(doc) {
		doc = doc || (typeof document !== "undefined" ? document : undefined);
		if (typeof doc === "undefined") {
			return null;
		}
		try {
			return doc.activeElement || doc.body;
		} catch (e) {
			return doc.body;
		}
	}
	module.exports = getActiveElement;
}, function (module, exports) {
	"use strict";
	var NS = {
		xlink: "http://www.w3.org/1999/xlink",
		xml: "http://www.w3.org/XML/1998/namespace"
	};
	var ATTRS = {
		accentHeight: "accent-height",
		accumulate: 0,
		additive: 0,
		alignmentBaseline: "alignment-baseline",
		allowReorder: "allowReorder",
		alphabetic: 0,
		amplitude: 0,
		arabicForm: "arabic-form",
		ascent: 0,
		attributeName: "attributeName",
		attributeType: "attributeType",
		autoReverse: "autoReverse",
		azimuth: 0,
		baseFrequency: "baseFrequency",
		baseProfile: "baseProfile",
		baselineShift: "baseline-shift",
		bbox: 0,
		begin: 0,
		bias: 0,
		by: 0,
		calcMode: "calcMode",
		capHeight: "cap-height",
		clip: 0,
		clipPath: "clip-path",
		clipRule: "clip-rule",
		clipPathUnits: "clipPathUnits",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		contentScriptType: "contentScriptType",
		contentStyleType: "contentStyleType",
		cursor: 0,
		cx: 0,
		cy: 0,
		d: 0,
		decelerate: 0,
		descent: 0,
		diffuseConstant: "diffuseConstant",
		direction: 0,
		display: 0,
		divisor: 0,
		dominantBaseline: "dominant-baseline",
		dur: 0,
		dx: 0,
		dy: 0,
		edgeMode: "edgeMode",
		elevation: 0,
		enableBackground: "enable-background",
		end: 0,
		exponent: 0,
		externalResourcesRequired: "externalResourcesRequired",
		fill: 0,
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		filter: 0,
		filterRes: "filterRes",
		filterUnits: "filterUnits",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		focusable: 0,
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		format: 0,
		from: 0,
		fx: 0,
		fy: 0,
		g1: 0,
		g2: 0,
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		glyphRef: "glyphRef",
		gradientTransform: "gradientTransform",
		gradientUnits: "gradientUnits",
		hanging: 0,
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		ideographic: 0,
		imageRendering: "image-rendering",
		in: 0,
		in2: 0,
		intercept: 0,
		k: 0,
		k1: 0,
		k2: 0,
		k3: 0,
		k4: 0,
		kernelMatrix: "kernelMatrix",
		kernelUnitLength: "kernelUnitLength",
		kerning: 0,
		keyPoints: "keyPoints",
		keySplines: "keySplines",
		keyTimes: "keyTimes",
		lengthAdjust: "lengthAdjust",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		limitingConeAngle: "limitingConeAngle",
		local: 0,
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		markerHeight: "markerHeight",
		markerUnits: "markerUnits",
		markerWidth: "markerWidth",
		mask: 0,
		maskContentUnits: "maskContentUnits",
		maskUnits: "maskUnits",
		mathematical: 0,
		mode: 0,
		numOctaves: "numOctaves",
		offset: 0,
		opacity: 0,
		operator: 0,
		order: 0,
		orient: 0,
		orientation: 0,
		origin: 0,
		overflow: 0,
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pathLength: "pathLength",
		patternContentUnits: "patternContentUnits",
		patternTransform: "patternTransform",
		patternUnits: "patternUnits",
		pointerEvents: "pointer-events",
		points: 0,
		pointsAtX: "pointsAtX",
		pointsAtY: "pointsAtY",
		pointsAtZ: "pointsAtZ",
		preserveAlpha: "preserveAlpha",
		preserveAspectRatio: "preserveAspectRatio",
		primitiveUnits: "primitiveUnits",
		r: 0,
		radius: 0,
		refX: "refX",
		refY: "refY",
		renderingIntent: "rendering-intent",
		repeatCount: "repeatCount",
		repeatDur: "repeatDur",
		requiredExtensions: "requiredExtensions",
		requiredFeatures: "requiredFeatures",
		restart: 0,
		result: 0,
		rotate: 0,
		rx: 0,
		ry: 0,
		scale: 0,
		seed: 0,
		shapeRendering: "shape-rendering",
		slope: 0,
		spacing: 0,
		specularConstant: "specularConstant",
		specularExponent: "specularExponent",
		speed: 0,
		spreadMethod: "spreadMethod",
		startOffset: "startOffset",
		stdDeviation: "stdDeviation",
		stemh: 0,
		stemv: 0,
		stitchTiles: "stitchTiles",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		string: 0,
		stroke: 0,
		strokeDasharray: "stroke-dasharray",
		strokeDashoffset: "stroke-dashoffset",
		strokeLinecap: "stroke-linecap",
		strokeLinejoin: "stroke-linejoin",
		strokeMiterlimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		surfaceScale: "surfaceScale",
		systemLanguage: "systemLanguage",
		tableValues: "tableValues",
		targetX: "targetX",
		targetY: "targetY",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		textLength: "textLength",
		to: 0,
		transform: 0,
		u1: 0,
		u2: 0,
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicode: 0,
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		values: 0,
		vectorEffect: "vector-effect",
		version: 0,
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		viewBox: "viewBox",
		viewTarget: "viewTarget",
		visibility: 0,
		widths: 0,
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		x: 0,
		xHeight: "x-height",
		x1: 0,
		x2: 0,
		xChannelSelector: "xChannelSelector",
		xlinkActuate: "xlink:actuate",
		xlinkArcrole: "xlink:arcrole",
		xlinkHref: "xlink:href",
		xlinkRole: "xlink:role",
		xlinkShow: "xlink:show",
		xlinkTitle: "xlink:title",
		xlinkType: "xlink:type",
		xmlBase: "xml:base",
		xmlns: 0,
		xmlnsXlink: "xmlns:xlink",
		xmlLang: "xml:lang",
		xmlSpace: "xml:space",
		y: 0,
		y1: 0,
		y2: 0,
		yChannelSelector: "yChannelSelector",
		z: 0,
		zoomAndPan: "zoomAndPan"
	};
	var SVGDOMPropertyConfig = {
		Properties: {},
		DOMAttributeNamespaces: {
			xlinkActuate: NS.xlink,
			xlinkArcrole: NS.xlink,
			xlinkHref: NS.xlink,
			xlinkRole: NS.xlink,
			xlinkShow: NS.xlink,
			xlinkTitle: NS.xlink,
			xlinkType: NS.xlink,
			xmlBase: NS.xml,
			xmlLang: NS.xml,
			xmlSpace: NS.xml
		},
		DOMAttributeNames: {}
	};
	Object.keys(ATTRS).forEach(function (key) {
		SVGDOMPropertyConfig.Properties[key] = 0;
		if (ATTRS[key]) {
			SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
		}
	});
	module.exports = SVGDOMPropertyConfig;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var EventPropagators = __webpack_require__(43);
	var ExecutionEnvironment = __webpack_require__(50);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactInputSelection = __webpack_require__(144);
	var SyntheticEvent = __webpack_require__(55);
	var getActiveElement = __webpack_require__(150);
	var isTextInputElement = __webpack_require__(69);
	var shallowEqual = __webpack_require__(120);
	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && "documentMode" in document && document.documentMode <= 11;
	var eventTypes = {
		select: {
			phasedRegistrationNames: {
				bubbled: "onSelect",
				captured: "onSelectCapture"
			},
			dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
		}
	};
	var activeElement = null;
	var activeElementInst = null;
	var lastSelection = null;
	var mouseDown = false;
	var hasListener = false;
	function getSelection(node) {
		if ("selectionStart" in node && ReactInputSelection.hasSelectionCapabilities(node)) {
			return {
				start: node.selectionStart,
				end: node.selectionEnd
			};
		} else if (window.getSelection) {
			var selection = window.getSelection();
			return {
				anchorNode: selection.anchorNode,
				anchorOffset: selection.anchorOffset,
				focusNode: selection.focusNode,
				focusOffset: selection.focusOffset
			};
		} else if (document.selection) {
			var range = document.selection.createRange();
			return {
				parentElement: range.parentElement(),
				text: range.text,
				top: range.boundingTop,
				left: range.boundingLeft
			};
		}
	}
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
		if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
			return null;
		}
		var currentSelection = getSelection(activeElement);
		if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
			lastSelection = currentSelection;
			var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);
			syntheticEvent.type = "select";
			syntheticEvent.target = activeElement;
			EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
			return syntheticEvent;
		}
		return null;
	}
	var SelectEventPlugin = {
		eventTypes: eventTypes,
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			if (!hasListener) {
				return null;
			}
			var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
			switch (topLevelType) {
				case "topFocus":
					if (isTextInputElement(targetNode) || targetNode.contentEditable === "true") {
						activeElement = targetNode;
						activeElementInst = targetInst;
						lastSelection = null;
					}
					break;

				case "topBlur":
					activeElement = null;
					activeElementInst = null;
					lastSelection = null;
					break;

				case "topMouseDown":
					mouseDown = true;
					break;

				case "topContextMenu":
				case "topMouseUp":
					mouseDown = false;
					return constructSelectEvent(nativeEvent, nativeEventTarget);

				case "topSelectionChange":
					if (skipSelectionChangeEvent) {
						break;
					}

				case "topKeyDown":
				case "topKeyUp":
					return constructSelectEvent(nativeEvent, nativeEventTarget);
			}
			return null;
		},
		didPutListener: function (inst, registrationName, listener) {
			if (registrationName === "onSelect") {
				hasListener = true;
			}
		}
	};
	module.exports = SelectEventPlugin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var EventListener = __webpack_require__(140);
	var EventPropagators = __webpack_require__(43);
	var ReactDOMComponentTree = __webpack_require__(36);
	var SyntheticAnimationEvent = __webpack_require__(154);
	var SyntheticClipboardEvent = __webpack_require__(155);
	var SyntheticEvent = __webpack_require__(55);
	var SyntheticFocusEvent = __webpack_require__(156);
	var SyntheticKeyboardEvent = __webpack_require__(157);
	var SyntheticMouseEvent = __webpack_require__(72);
	var SyntheticDragEvent = __webpack_require__(160);
	var SyntheticTouchEvent = __webpack_require__(161);
	var SyntheticTransitionEvent = __webpack_require__(162);
	var SyntheticUIEvent = __webpack_require__(73);
	var SyntheticWheelEvent = __webpack_require__(163);
	var emptyFunction = __webpack_require__(8);
	var getEventCharCode = __webpack_require__(158);
	var invariant = __webpack_require__(11);
	var eventTypes = {};
	var topLevelEventsToDispatchConfig = {};
	["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function (event) {
		var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
		var onEvent = "on" + capitalizedEvent;
		var topEvent = "top" + capitalizedEvent;
		var type = {
			phasedRegistrationNames: {
				bubbled: onEvent,
				captured: onEvent + "Capture"
			},
			dependencies: [topEvent]
		};
		eventTypes[event] = type;
		topLevelEventsToDispatchConfig[topEvent] = type;
	});
	var onClickListeners = {};
	function getDictionaryKey(inst) {
		return "." + inst._rootNodeID;
	}
	function isInteractive(tag) {
		return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
	}
	var SimpleEventPlugin = {
		eventTypes: eventTypes,
		extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
			if (!dispatchConfig) {
				return null;
			}
			var EventConstructor;
			switch (topLevelType) {
				case "topAbort":
				case "topCanPlay":
				case "topCanPlayThrough":
				case "topDurationChange":
				case "topEmptied":
				case "topEncrypted":
				case "topEnded":
				case "topError":
				case "topInput":
				case "topInvalid":
				case "topLoad":
				case "topLoadedData":
				case "topLoadedMetadata":
				case "topLoadStart":
				case "topPause":
				case "topPlay":
				case "topPlaying":
				case "topProgress":
				case "topRateChange":
				case "topReset":
				case "topSeeked":
				case "topSeeking":
				case "topStalled":
				case "topSubmit":
				case "topSuspend":
				case "topTimeUpdate":
				case "topVolumeChange":
				case "topWaiting":
					EventConstructor = SyntheticEvent;
					break;

				case "topKeyPress":
					if (getEventCharCode(nativeEvent) === 0) {
						return null;
					}

				case "topKeyDown":
				case "topKeyUp":
					EventConstructor = SyntheticKeyboardEvent;
					break;

				case "topBlur":
				case "topFocus":
					EventConstructor = SyntheticFocusEvent;
					break;

				case "topClick":
					if (nativeEvent.button === 2) {
						return null;
					}

				case "topDoubleClick":
				case "topMouseDown":
				case "topMouseMove":
				case "topMouseUp":
				case "topMouseOut":
				case "topMouseOver":
				case "topContextMenu":
					EventConstructor = SyntheticMouseEvent;
					break;

				case "topDrag":
				case "topDragEnd":
				case "topDragEnter":
				case "topDragExit":
				case "topDragLeave":
				case "topDragOver":
				case "topDragStart":
				case "topDrop":
					EventConstructor = SyntheticDragEvent;
					break;

				case "topTouchCancel":
				case "topTouchEnd":
				case "topTouchMove":
				case "topTouchStart":
					EventConstructor = SyntheticTouchEvent;
					break;

				case "topAnimationEnd":
				case "topAnimationIteration":
				case "topAnimationStart":
					EventConstructor = SyntheticAnimationEvent;
					break;

				case "topTransitionEnd":
					EventConstructor = SyntheticTransitionEvent;
					break;

				case "topScroll":
					EventConstructor = SyntheticUIEvent;
					break;

				case "topWheel":
					EventConstructor = SyntheticWheelEvent;
					break;

				case "topCopy":
				case "topCut":
				case "topPaste":
					EventConstructor = SyntheticClipboardEvent;
					break;
			}
			!EventConstructor ? false ? invariant(false, "SimpleEventPlugin: Unhandled event type, `%s`.", topLevelType) : _prodInvariant("86", topLevelType) : void 0;
			var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
			EventPropagators.accumulateTwoPhaseDispatches(event);
			return event;
		},
		didPutListener: function (inst, registrationName, listener) {
			if (registrationName === "onClick" && !isInteractive(inst._tag)) {
				var key = getDictionaryKey(inst);
				var node = ReactDOMComponentTree.getNodeFromInstance(inst);
				if (!onClickListeners[key]) {
					onClickListeners[key] = EventListener.listen(node, "click", emptyFunction);
				}
			}
		},
		willDeleteListener: function (inst, registrationName) {
			if (registrationName === "onClick" && !isInteractive(inst._tag)) {
				var key = getDictionaryKey(inst);
				onClickListeners[key].remove();
				delete onClickListeners[key];
			}
		}
	};
	module.exports = SimpleEventPlugin;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var AnimationEventInterface = {
		animationName: null,
		elapsedTime: null,
		pseudoElement: null
	};
	function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);
	module.exports = SyntheticAnimationEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var ClipboardEventInterface = {
		clipboardData: function (event) {
			return "clipboardData" in event ? event.clipboardData : window.clipboardData;
		}
	};
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
	module.exports = SyntheticClipboardEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticUIEvent = __webpack_require__(73);
	var FocusEventInterface = {
		relatedTarget: null
	};
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
	module.exports = SyntheticFocusEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticUIEvent = __webpack_require__(73);
	var getEventCharCode = __webpack_require__(158);
	var getEventKey = __webpack_require__(159);
	var getEventModifierState = __webpack_require__(75);
	var KeyboardEventInterface = {
		key: getEventKey,
		location: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		repeat: null,
		locale: null,
		getModifierState: getEventModifierState,
		charCode: function (event) {
			if (event.type === "keypress") {
				return getEventCharCode(event);
			}
			return 0;
		},
		keyCode: function (event) {
			if (event.type === "keydown" || event.type === "keyup") {
				return event.keyCode;
			}
			return 0;
		},
		which: function (event) {
			if (event.type === "keypress") {
				return getEventCharCode(event);
			}
			if (event.type === "keydown" || event.type === "keyup") {
				return event.keyCode;
			}
			return 0;
		}
	};
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
	module.exports = SyntheticKeyboardEvent;
}, function (module, exports) {
	"use strict";
	function getEventCharCode(nativeEvent) {
		var charCode;
		var keyCode = nativeEvent.keyCode;
		if ("charCode" in nativeEvent) {
			charCode = nativeEvent.charCode;
			if (charCode === 0 && keyCode === 13) {
				charCode = 13;
			}
		} else {
			charCode = keyCode;
		}
		if (charCode >= 32 || charCode === 13) {
			return charCode;
		}
		return 0;
	}
	module.exports = getEventCharCode;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var getEventCharCode = __webpack_require__(158);
	var normalizeKey = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	};
	var translateToKey = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	};
	function getEventKey(nativeEvent) {
		if (nativeEvent.key) {
			var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
			if (key !== "Unidentified") {
				return key;
			}
		}
		if (nativeEvent.type === "keypress") {
			var charCode = getEventCharCode(nativeEvent);
			return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
		}
		if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
			return translateToKey[nativeEvent.keyCode] || "Unidentified";
		}
		return "";
	}
	module.exports = getEventKey;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticMouseEvent = __webpack_require__(72);
	var DragEventInterface = {
		dataTransfer: null
	};
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
	module.exports = SyntheticDragEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticUIEvent = __webpack_require__(73);
	var getEventModifierState = __webpack_require__(75);
	var TouchEventInterface = {
		touches: null,
		targetTouches: null,
		changedTouches: null,
		altKey: null,
		metaKey: null,
		ctrlKey: null,
		shiftKey: null,
		getModifierState: getEventModifierState
	};
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
	module.exports = SyntheticTouchEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticEvent = __webpack_require__(55);
	var TransitionEventInterface = {
		propertyName: null,
		elapsedTime: null,
		pseudoElement: null
	};
	function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);
	module.exports = SyntheticTransitionEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var SyntheticMouseEvent = __webpack_require__(72);
	var WheelEventInterface = {
		deltaX: function (event) {
			return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
		},
		deltaY: function (event) {
			return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
		},
		deltaZ: null,
		deltaMode: null
	};
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
		return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
	module.exports = SyntheticWheelEvent;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var DOMLazyTree = __webpack_require__(79);
	var DOMProperty = __webpack_require__(38);
	var React = __webpack_require__(2);
	var ReactBrowserEventEmitter = __webpack_require__(103);
	var ReactCurrentOwner = __webpack_require__(16);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactDOMContainerInfo = __webpack_require__(165);
	var ReactDOMFeatureFlags = __webpack_require__(166);
	var ReactFeatureFlags = __webpack_require__(60);
	var ReactInstanceMap = __webpack_require__(114);
	var ReactInstrumentation = __webpack_require__(64);
	var ReactMarkupChecksum = __webpack_require__(167);
	var ReactReconciler = __webpack_require__(61);
	var ReactUpdateQueue = __webpack_require__(133);
	var ReactUpdates = __webpack_require__(58);
	var emptyObject = __webpack_require__(10);
	var instantiateReactComponent = __webpack_require__(117);
	var invariant = __webpack_require__(11);
	var setInnerHTML = __webpack_require__(81);
	var shouldUpdateReactComponent = __webpack_require__(121);
	var warning = __webpack_require__(7);
	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;
	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
	var instancesByReactRootID = {};
	function firstDifferenceIndex(string1, string2) {
		var minLen = Math.min(string1.length, string2.length);
		for (var i = 0; i < minLen; i++) {
			if (string1.charAt(i) !== string2.charAt(i)) {
				return i;
			}
		}
		return string1.length === string2.length ? -1 : minLen;
	}
	function getReactRootElementInContainer(container) {
		if (!container) {
			return null;
		}
		if (container.nodeType === DOC_NODE_TYPE) {
			return container.documentElement;
		} else {
			return container.firstChild;
		}
	}
	function internalGetID(node) {
		return node.getAttribute && node.getAttribute(ATTR_NAME) || "";
	}
	function mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
		var markerName;
		if (ReactFeatureFlags.logTopLevelRenders) {
			var wrappedElement = wrapperInstance._currentElement.props.child;
			var type = wrappedElement.type;
			markerName = "React mount: " + (typeof type === "string" ? type : type.displayName || type.name);
			console.time(markerName);
		}
		var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context, 0);
		if (markerName) {
			console.timeEnd(markerName);
		}
		wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
		ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
	}
	function batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
		var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(!shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);
		transaction.perform(mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
		ReactUpdates.ReactReconcileTransaction.release(transaction);
	}
	function unmountComponentFromNode(instance, container, safely) {
		if (false) {
			ReactInstrumentation.debugTool.onBeginFlush();
		}
		ReactReconciler.unmountComponent(instance, safely);
		if (false) {
			ReactInstrumentation.debugTool.onEndFlush();
		}
		if (container.nodeType === DOC_NODE_TYPE) {
			container = container.documentElement;
		}
		while (container.lastChild) {
			container.removeChild(container.lastChild);
		}
	}
	function hasNonRootReactChild(container) {
		var rootEl = getReactRootElementInContainer(container);
		if (rootEl) {
			var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
			return !!(inst && inst._hostParent);
		}
	}
	function nodeIsRenderedByOtherInstance(container) {
		var rootEl = getReactRootElementInContainer(container);
		return !!(rootEl && isReactNode(rootEl) && !ReactDOMComponentTree.getInstanceFromNode(rootEl));
	}
	function isValidContainer(node) {
		return !!(node && (node.nodeType === ELEMENT_NODE_TYPE || node.nodeType === DOC_NODE_TYPE || node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE));
	}
	function isReactNode(node) {
		return isValidContainer(node) && (node.hasAttribute(ROOT_ATTR_NAME) || node.hasAttribute(ATTR_NAME));
	}
	function getHostRootInstanceInContainer(container) {
		var rootEl = getReactRootElementInContainer(container);
		var prevHostInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
		return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
	}
	function getTopLevelWrapperInContainer(container) {
		var root = getHostRootInstanceInContainer(container);
		return root ? root._hostContainerInfo._topLevelWrapper : null;
	}
	var topLevelRootCounter = 1;
	var TopLevelWrapper = function () {
		this.rootID = topLevelRootCounter++;
	};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (false) {
		TopLevelWrapper.displayName = "TopLevelWrapper";
	}
	TopLevelWrapper.prototype.render = function () {
		return this.props.child;
	};
	TopLevelWrapper.isReactTopLevelWrapper = true;
	var ReactMount = {
		TopLevelWrapper: TopLevelWrapper,
		_instancesByReactRootID: instancesByReactRootID,
		scrollMonitor: function (container, renderCallback) {
			renderCallback();
		},
		_updateRootComponent: function (prevComponent, nextElement, nextContext, container, callback) {
			ReactMount.scrollMonitor(container, function () {
				ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
				if (callback) {
					ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
				}
			});
			return prevComponent;
		},
		_renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
			false ? warning(ReactCurrentOwner.current == null, "_renderNewRootComponent(): Render methods should be a pure function " + "of props and state; triggering nested component updates from " + "render is not allowed. If necessary, trigger nested updates in " + "componentDidUpdate. Check the render method of %s.", ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || "ReactCompositeComponent") : void 0;
			!isValidContainer(container) ? false ? invariant(false, "_registerComponent(...): Target container is not a DOM element.") : _prodInvariant("37") : void 0;
			ReactBrowserEventEmitter.ensureScrollValueMonitoring();
			var componentInstance = instantiateReactComponent(nextElement, false);
			ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
			var wrapperID = componentInstance._instance.rootID;
			instancesByReactRootID[wrapperID] = componentInstance;
			return componentInstance;
		},
		renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
			!(parentComponent != null && ReactInstanceMap.has(parentComponent)) ? false ? invariant(false, "parentComponent must be a valid React Component") : _prodInvariant("38") : void 0;
			return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
		},
		_renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
			ReactUpdateQueue.validateCallback(callback, "ReactDOM.render");
			!React.isValidElement(nextElement) ? false ? invariant(false, "ReactDOM.render(): Invalid component element.%s", typeof nextElement === "string" ? " Instead of passing a string like 'div', pass " + "React.createElement('div') or <div />." : typeof nextElement === "function" ? " Instead of passing a class like Foo, pass " + "React.createElement(Foo) or <Foo />." : nextElement != null && nextElement.props !== undefined ? " This may be caused by unintentionally loading two independent " + "copies of React." : "") : _prodInvariant("39", typeof nextElement === "string" ? " Instead of passing a string like 'div', pass " + "React.createElement('div') or <div />." : typeof nextElement === "function" ? " Instead of passing a class like Foo, pass " + "React.createElement(Foo) or <Foo />." : nextElement != null && nextElement.props !== undefined ? " This may be caused by unintentionally loading two independent " + "copies of React." : "") : void 0;
			false ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== "BODY", "render(): Rendering components directly into document.body is " + "discouraged, since its children are often manipulated by third-party " + "scripts and browser extensions. This may lead to subtle " + "reconciliation issues. Try rendering into a container element created " + "for your app.") : void 0;
			var nextWrappedElement = React.createElement(TopLevelWrapper, {
				child: nextElement
			});
			var nextContext;
			if (parentComponent) {
				var parentInst = ReactInstanceMap.get(parentComponent);
				nextContext = parentInst._processChildContext(parentInst._context);
			} else {
				nextContext = emptyObject;
			}
			var prevComponent = getTopLevelWrapperInContainer(container);
			if (prevComponent) {
				var prevWrappedElement = prevComponent._currentElement;
				var prevElement = prevWrappedElement.props.child;
				if (shouldUpdateReactComponent(prevElement, nextElement)) {
					var publicInst = prevComponent._renderedComponent.getPublicInstance();
					var updatedCallback = callback && function () {
						callback.call(publicInst);
					};
					ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
					return publicInst;
				} else {
					ReactMount.unmountComponentAtNode(container);
				}
			}
			var reactRootElement = getReactRootElementInContainer(container);
			var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
			var containerHasNonRootReactChild = hasNonRootReactChild(container);
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(!containerHasNonRootReactChild, "render(...): Replacing React-rendered children with a new root " + "component. If you intended to update the children of this node, " + "you should instead have the existing children update their state " + "and render the new components instead of calling ReactDOM.render.") : void 0;
				if (!containerHasReactMarkup || reactRootElement.nextSibling) {
					var rootElementSibling = reactRootElement;
					while (rootElementSibling) {
						if (internalGetID(rootElementSibling)) {
							process.env.NODE_ENV !== "production" ? warning(false, "render(): Target node has markup rendered by React, but there " + "are unrelated nodes as well. This is most commonly caused by " + "white-space inserted around server-rendered markup.") : void 0;
							break;
						}
						rootElementSibling = rootElementSibling.nextSibling;
					}
				}
			}
			var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
			var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
			if (callback) {
				callback.call(component);
			}
			return component;
		},
		render: function (nextElement, container, callback) {
			return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
		},
		unmountComponentAtNode: function (container) {
			false ? warning(ReactCurrentOwner.current == null, "unmountComponentAtNode(): Render methods should be a pure function " + "of props and state; triggering nested component updates from render " + "is not allowed. If necessary, trigger nested updates in " + "componentDidUpdate. Check the render method of %s.", ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || "ReactCompositeComponent") : void 0;
			!isValidContainer(container) ? false ? invariant(false, "unmountComponentAtNode(...): Target container is not a DOM element.") : _prodInvariant("40") : void 0;
			if (false) {
				process.env.NODE_ENV !== "production" ? warning(!nodeIsRenderedByOtherInstance(container), "unmountComponentAtNode(): The node you're attempting to unmount " + "was rendered by another copy of React.") : void 0;
			}
			var prevComponent = getTopLevelWrapperInContainer(container);
			if (!prevComponent) {
				var containerHasNonRootReactChild = hasNonRootReactChild(container);
				var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);
				if (false) {
					process.env.NODE_ENV !== "production" ? warning(!containerHasNonRootReactChild, "unmountComponentAtNode(): The node you're attempting to unmount " + "was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead " + "of its container." : "Instead, have the parent component update its state and " + "rerender in order to remove this component.") : void 0;
				}
				return false;
			}
			delete instancesByReactRootID[prevComponent._instance.rootID];
			ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
			return true;
		},
		_mountImageIntoNode: function (markup, container, instance, shouldReuseMarkup, transaction) {
			!isValidContainer(container) ? false ? invariant(false, "mountComponentIntoNode(...): Target container is not valid.") : _prodInvariant("41") : void 0;
			if (shouldReuseMarkup) {
				var rootElement = getReactRootElementInContainer(container);
				if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
					ReactDOMComponentTree.precacheNode(instance, rootElement);
					return;
				} else {
					var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
					rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
					var rootMarkup = rootElement.outerHTML;
					rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
					var normalizedMarkup = markup;
					if (false) {
						var normalizer;
						if (container.nodeType === ELEMENT_NODE_TYPE) {
							normalizer = document.createElement("div");
							normalizer.innerHTML = markup;
							normalizedMarkup = normalizer.innerHTML;
						} else {
							normalizer = document.createElement("iframe");
							document.body.appendChild(normalizer);
							normalizer.contentDocument.write(markup);
							normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
							document.body.removeChild(normalizer);
						}
					}
					var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
					var difference = " (client) " + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + "\n (server) " + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
					!(container.nodeType !== DOC_NODE_TYPE) ? false ? invariant(false, "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s", difference) : _prodInvariant("42", difference) : void 0;
					if (false) {
						process.env.NODE_ENV !== "production" ? warning(false, "React attempted to reuse markup in a container but the " + "checksum was invalid. This generally means that you are " + "using server rendering and the markup generated on the " + "server was not what the client was expecting. React injected " + "new markup to compensate which works but you have lost many " + "of the benefits of server rendering. Instead, figure out " + "why the markup being generated is different on the client " + "or server:\n%s", difference) : void 0;
					}
				}
			}
			!(container.nodeType !== DOC_NODE_TYPE) ? false ? invariant(false, "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.") : _prodInvariant("43") : void 0;
			if (transaction.useCreateElement) {
				while (container.lastChild) {
					container.removeChild(container.lastChild);
				}
				DOMLazyTree.insertTreeBefore(container, markup, null);
			} else {
				setInnerHTML(container, markup);
				ReactDOMComponentTree.precacheNode(instance, container.firstChild);
			}
			if (false) {
				var hostNode = ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
				if (hostNode._debugID !== 0) {
					ReactInstrumentation.debugTool.onHostOperation({
						instanceID: hostNode._debugID,
						type: "mount",
						payload: markup.toString()
					});
				}
			}
		}
	};
	module.exports = ReactMount;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var validateDOMNesting = __webpack_require__(134);
	var DOC_NODE_TYPE = 9;
	function ReactDOMContainerInfo(topLevelWrapper, node) {
		var info = {
			_topLevelWrapper: topLevelWrapper,
			_idCounter: 1,
			_ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
			_node: node,
			_tag: node ? node.nodeName.toLowerCase() : null,
			_namespaceURI: node ? node.namespaceURI : null
		};
		if (false) {
			info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
		}
		return info;
	}
	module.exports = ReactDOMContainerInfo;
}, function (module, exports) {
	"use strict";
	var ReactDOMFeatureFlags = {
		useCreateElement: true,
		useFiber: false
	};
	module.exports = ReactDOMFeatureFlags;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var adler32 = __webpack_require__(168);
	var TAG_END = /\/?>/;
	var COMMENT_START = /^<\!\-\-/;
	var ReactMarkupChecksum = {
		CHECKSUM_ATTR_NAME: "data-react-checksum",
		addChecksumToMarkup: function (markup) {
			var checksum = adler32(markup);
			if (COMMENT_START.test(markup)) {
				return markup;
			} else {
				return markup.replace(TAG_END, " " + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
			}
		},
		canReuseMarkup: function (markup, element) {
			var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
			existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
			var markupChecksum = adler32(markup);
			return markupChecksum === existingChecksum;
		}
	};
	module.exports = ReactMarkupChecksum;
}, function (module, exports) {
	"use strict";
	var MOD = 65521;
	function adler32(data) {
		var a = 1;
		var b = 0;
		var i = 0;
		var l = data.length;
		var m = l & ~3;
		while (i < m) {
			var n = Math.min(i + 4096, m);
			for (; i < n; i += 4) {
				b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
			}
			a %= MOD;
			b %= MOD;
		}
		for (; i < l; i++) {
			b += a += data.charCodeAt(i);
		}
		a %= MOD;
		b %= MOD;
		return a | b << 16;
	}
	module.exports = adler32;
}, function (module, exports) {
	"use strict";
	module.exports = "15.6.2";
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _prodInvariant = __webpack_require__(37);
	var ReactCurrentOwner = __webpack_require__(16);
	var ReactDOMComponentTree = __webpack_require__(36);
	var ReactInstanceMap = __webpack_require__(114);
	var getHostComponentFromComposite = __webpack_require__(171);
	var invariant = __webpack_require__(11);
	var warning = __webpack_require__(7);
	function findDOMNode(componentOrElement) {
		if (false) {
			var owner = ReactCurrentOwner.current;
			if (owner !== null) {
				process.env.NODE_ENV !== "production" ? warning(owner._warnedAboutRefsInRender, "%s is accessing findDOMNode inside its render(). " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", owner.getName() || "A component") : void 0;
				owner._warnedAboutRefsInRender = true;
			}
		}
		if (componentOrElement == null) {
			return null;
		}
		if (componentOrElement.nodeType === 1) {
			return componentOrElement;
		}
		var inst = ReactInstanceMap.get(componentOrElement);
		if (inst) {
			inst = getHostComponentFromComposite(inst);
			return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
		}
		if (typeof componentOrElement.render === "function") {
			true ? false ? invariant(false, "findDOMNode was called on an unmounted component.") : _prodInvariant("44") : void 0;
		} else {
			true ? false ? invariant(false, "Element appears to be neither ReactComponent nor DOMNode (keys: %s)", Object.keys(componentOrElement)) : _prodInvariant("45", Object.keys(componentOrElement)) : void 0;
		}
	}
	module.exports = findDOMNode;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactNodeTypes = __webpack_require__(119);
	function getHostComponentFromComposite(inst) {
		var type;
		while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
			inst = inst._renderedComponent;
		}
		if (type === ReactNodeTypes.HOST) {
			return inst._renderedComponent;
		} else if (type === ReactNodeTypes.EMPTY) {
			return null;
		}
	}
	module.exports = getHostComponentFromComposite;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactMount = __webpack_require__(164);
	module.exports = ReactMount.renderSubtreeIntoContainer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	var _Provider = __webpack_require__(174);
	var _Provider2 = _interopRequireDefault(_Provider);
	var _connect = __webpack_require__(179);
	var _connect2 = _interopRequireDefault(_connect);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = undefined;
	var _react = __webpack_require__(1);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _storeShape = __webpack_require__(177);
	var _storeShape2 = _interopRequireDefault(_storeShape);
	var _warning = __webpack_require__(178);
	var _warning2 = _interopRequireDefault(_warning);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
		if (didWarnAboutReceivingStore) {
			return;
		}
		didWarnAboutReceivingStore = true;
		(0, _warning2["default"])("<Provider> does not support changing `store` on the fly. " + "It is most likely that you see this error because you updated to " + "Redux 2.x and React Redux 2.x which no longer hot reload reducers " + "automatically. See https://github.com/reactjs/react-redux/releases/" + "tag/v2.0.0 for the migration instructions.");
	}
	var Provider = function (_Component) {
		_inherits(Provider, _Component);
		Provider.prototype.getChildContext = function getChildContext() {
			return {
				store: this.store
			};
		};
		function Provider(props, context) {
			_classCallCheck(this, Provider);
			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
			_this.store = props.store;
			return _this;
		}
		Provider.prototype.render = function render() {
			return _react.Children.only(this.props.children);
		};
		return Provider;
	}(_react.Component);
	exports["default"] = Provider;
	if (false) {
		Provider.prototype.componentWillReceiveProps = function (nextProps) {
			var store = this.store;
			var nextStore = nextProps.store;
			if (store !== nextStore) {
				warnAboutReceivingStore();
			}
		};
	}
	Provider.propTypes = {
		store: _storeShape2["default"].isRequired,
		children: _propTypes2["default"].element.isRequired
	};
	Provider.childContextTypes = {
		store: _storeShape2["default"].isRequired
	};
}, function (module, exports, __webpack_require__) {
	if (false) {
		var ReactIs = require("react-is");
		var throwOnDirectAccess = true;
		module.exports = require("./factoryWithTypeCheckers")(ReactIs.isElement, throwOnDirectAccess);
	} else {
		module.exports = __webpack_require__(176)();
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	var ReactPropTypesSecret = __webpack_require__(27);
	function emptyFunction() { }
	function emptyFunctionWithReset() { }
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	module.exports = function () {
		function shim(props, propName, componentName, location, propFullName, secret) {
			if (secret === ReactPropTypesSecret) {
				return;
			}
			var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use PropTypes.checkPropTypes() to call them. " + "Read more at http://fb.me/use-check-prop-types");
			err.name = "Invariant Violation";
			throw err;
		}
		shim.isRequired = shim;
		function getShim() {
			return shim;
		}
		var ReactPropTypes = {
			array: shim,
			bigint: shim,
			bool: shim,
			func: shim,
			number: shim,
			object: shim,
			string: shim,
			symbol: shim,
			any: shim,
			arrayOf: getShim,
			element: shim,
			elementType: shim,
			instanceOf: getShim,
			node: shim,
			objectOf: getShim,
			oneOf: getShim,
			oneOfType: getShim,
			shape: getShim,
			exact: getShim,
			checkPropTypes: emptyFunctionWithReset,
			resetWarningCache: emptyFunction
		};
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports["default"] = _propTypes2["default"].shape({
		subscribe: _propTypes2["default"].func.isRequired,
		dispatch: _propTypes2["default"].func.isRequired,
		getState: _propTypes2["default"].func.isRequired
	});
}, function (module, exports) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = warning;
	function warning(message) {
		if (typeof console !== "undefined" && typeof console.error === "function") {
			console.error(message);
		}
		try {
			throw new Error(message);
		} catch (e) { }
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
	exports["default"] = connect;
	var _react = __webpack_require__(1);
	var _storeShape = __webpack_require__(177);
	var _storeShape2 = _interopRequireDefault(_storeShape);
	var _shallowEqual = __webpack_require__(180);
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	var _wrapActionCreators = __webpack_require__(181);
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	var _warning = __webpack_require__(178);
	var _warning2 = _interopRequireDefault(_warning);
	var _isPlainObject = __webpack_require__(184);
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	var _hoistNonReactStatics = __webpack_require__(202);
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	var _invariant = __webpack_require__(203);
	var _invariant2 = _interopRequireDefault(_invariant);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
		return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
		return {
			dispatch: dispatch
		};
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
		return _extends({}, parentProps, stateProps, dispatchProps);
	};
	function getDisplayName(WrappedComponent) {
		return WrappedComponent.displayName || WrappedComponent.name || "Component";
	}
	var errorObject = {
		value: null
	};
	function tryCatch(fn, ctx) {
		try {
			return fn.apply(ctx);
		} catch (e) {
			errorObject.value = e;
			return errorObject;
		}
	}
	var nextVersion = 0;
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var shouldSubscribe = Boolean(mapStateToProps);
		var mapState = mapStateToProps || defaultMapStateToProps;
		var mapDispatch = void 0;
		if (typeof mapDispatchToProps === "function") {
			mapDispatch = mapDispatchToProps;
		} else if (!mapDispatchToProps) {
			mapDispatch = defaultMapDispatchToProps;
		} else {
			mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
		}
		var finalMergeProps = mergeProps || defaultMergeProps;
		var _options$pure = options.pure, pure = _options$pure === undefined ? true : _options$pure, _options$withRef = options.withRef, withRef = _options$withRef === undefined ? false : _options$withRef;
		var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
		var version = nextVersion++;
		return function wrapWithConnect(WrappedComponent) {
			var connectDisplayName = "Connect(" + getDisplayName(WrappedComponent) + ")";
			function checkStateShape(props, methodName) {
				if (!(0, _isPlainObject2["default"])(props)) {
					(0, _warning2["default"])(methodName + "() in " + connectDisplayName + " must return a plain object. " + ("Instead received " + props + "."));
				}
			}
			function computeMergedProps(stateProps, dispatchProps, parentProps) {
				var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
				if (false) {
					checkStateShape(mergedProps, "mergeProps");
				}
				return mergedProps;
			}
			var Connect = function (_Component) {
				_inherits(Connect, _Component);
				Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
					return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
				};
				function Connect(props, context) {
					_classCallCheck(this, Connect);
					var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
					_this.version = version;
					_this.store = props.store || context.store;
					(0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
					var storeState = _this.store.getState();
					_this.state = {
						storeState: storeState
					};
					_this.clearCache();
					return _this;
				}
				Connect.prototype.computeStateProps = function computeStateProps(store, props) {
					if (!this.finalMapStateToProps) {
						return this.configureFinalMapState(store, props);
					}
					var state = store.getState();
					var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
					if (false) {
						checkStateShape(stateProps, "mapStateToProps");
					}
					return stateProps;
				};
				Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
					var mappedState = mapState(store.getState(), props);
					var isFactory = typeof mappedState === "function";
					this.finalMapStateToProps = isFactory ? mappedState : mapState;
					this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
					if (isFactory) {
						return this.computeStateProps(store, props);
					}
					if (false) {
						checkStateShape(mappedState, "mapStateToProps");
					}
					return mappedState;
				};
				Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
					if (!this.finalMapDispatchToProps) {
						return this.configureFinalMapDispatch(store, props);
					}
					var dispatch = store.dispatch;
					var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
					if (false) {
						checkStateShape(dispatchProps, "mapDispatchToProps");
					}
					return dispatchProps;
				};
				Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
					var mappedDispatch = mapDispatch(store.dispatch, props);
					var isFactory = typeof mappedDispatch === "function";
					this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
					this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
					if (isFactory) {
						return this.computeDispatchProps(store, props);
					}
					if (false) {
						checkStateShape(mappedDispatch, "mapDispatchToProps");
					}
					return mappedDispatch;
				};
				Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
					var nextStateProps = this.computeStateProps(this.store, this.props);
					if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
						return false;
					}
					this.stateProps = nextStateProps;
					return true;
				};
				Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
					var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
					if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
						return false;
					}
					this.dispatchProps = nextDispatchProps;
					return true;
				};
				Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
					var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
					if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
						return false;
					}
					this.mergedProps = nextMergedProps;
					return true;
				};
				Connect.prototype.isSubscribed = function isSubscribed() {
					return typeof this.unsubscribe === "function";
				};
				Connect.prototype.trySubscribe = function trySubscribe() {
					if (shouldSubscribe && !this.unsubscribe) {
						this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
						this.handleChange();
					}
				};
				Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
					if (this.unsubscribe) {
						this.unsubscribe();
						this.unsubscribe = null;
					}
				};
				Connect.prototype.componentDidMount = function componentDidMount() {
					this.trySubscribe();
				};
				Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
					if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
						this.haveOwnPropsChanged = true;
					}
				};
				Connect.prototype.componentWillUnmount = function componentWillUnmount() {
					this.tryUnsubscribe();
					this.clearCache();
				};
				Connect.prototype.clearCache = function clearCache() {
					this.dispatchProps = null;
					this.stateProps = null;
					this.mergedProps = null;
					this.haveOwnPropsChanged = true;
					this.hasStoreStateChanged = true;
					this.haveStatePropsBeenPrecalculated = false;
					this.statePropsPrecalculationError = null;
					this.renderedElement = null;
					this.finalMapDispatchToProps = null;
					this.finalMapStateToProps = null;
				};
				Connect.prototype.handleChange = function handleChange() {
					if (!this.unsubscribe) {
						return;
					}
					var storeState = this.store.getState();
					var prevStoreState = this.state.storeState;
					if (pure && prevStoreState === storeState) {
						return;
					}
					if (pure && !this.doStatePropsDependOnOwnProps) {
						var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
						if (!haveStatePropsChanged) {
							return;
						}
						if (haveStatePropsChanged === errorObject) {
							this.statePropsPrecalculationError = errorObject.value;
						}
						this.haveStatePropsBeenPrecalculated = true;
					}
					this.hasStoreStateChanged = true;
					this.setState({
						storeState: storeState
					});
				};
				Connect.prototype.getWrappedInstance = function getWrappedInstance() {
					(0, _invariant2["default"])(withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } as the fourth argument of the connect() call.");
					return this.refs.wrappedInstance;
				};
				Connect.prototype.render = function render() {
					var haveOwnPropsChanged = this.haveOwnPropsChanged, hasStoreStateChanged = this.hasStoreStateChanged, haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated, statePropsPrecalculationError = this.statePropsPrecalculationError, renderedElement = this.renderedElement;
					this.haveOwnPropsChanged = false;
					this.hasStoreStateChanged = false;
					this.haveStatePropsBeenPrecalculated = false;
					this.statePropsPrecalculationError = null;
					if (statePropsPrecalculationError) {
						throw statePropsPrecalculationError;
					}
					var shouldUpdateStateProps = true;
					var shouldUpdateDispatchProps = true;
					if (pure && renderedElement) {
						shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
						shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
					}
					var haveStatePropsChanged = false;
					var haveDispatchPropsChanged = false;
					if (haveStatePropsBeenPrecalculated) {
						haveStatePropsChanged = true;
					} else if (shouldUpdateStateProps) {
						haveStatePropsChanged = this.updateStatePropsIfNeeded();
					}
					if (shouldUpdateDispatchProps) {
						haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
					}
					var haveMergedPropsChanged = true;
					if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
						haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
					} else {
						haveMergedPropsChanged = false;
					}
					if (!haveMergedPropsChanged && renderedElement) {
						return renderedElement;
					}
					if (withRef) {
						this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
							ref: "wrappedInstance"
						}));
					} else {
						this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
					}
					return this.renderedElement;
				};
				return Connect;
			}(_react.Component);
			Connect.displayName = connectDisplayName;
			Connect.WrappedComponent = WrappedComponent;
			Connect.contextTypes = {
				store: _storeShape2["default"]
			};
			Connect.propTypes = {
				store: _storeShape2["default"]
			};
			if (false) {
				Connect.prototype.componentWillUpdate = function componentWillUpdate() {
					if (this.version === version) {
						return;
					}
					this.version = version;
					this.trySubscribe();
					this.clearCache();
				};
			}
			return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
		};
	}
}, function (module, exports) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
		if (objA === objB) {
			return true;
		}
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) {
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty;
		for (var i = 0; i < keysA.length; i++) {
			if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
				return false;
			}
		}
		return true;
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	var _redux = __webpack_require__(182);
	function wrapActionCreators(actionCreators) {
		return function (dispatch) {
			return (0, _redux.bindActionCreators)(actionCreators, dispatch);
		};
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	var _createStore = __webpack_require__(183);
	var _createStore2 = _interopRequireDefault(_createStore);
	var _combineReducers = __webpack_require__(197);
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	var _bindActionCreators = __webpack_require__(199);
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	var _applyMiddleware = __webpack_require__(200);
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	var _compose = __webpack_require__(201);
	var _compose2 = _interopRequireDefault(_compose);
	var _warning = __webpack_require__(198);
	var _warning2 = _interopRequireDefault(_warning);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function isCrushed() { }
	if (false) {
		(0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. " + "This means that you are running a slower development build of Redux. " + "You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify " + "or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) " + "to ensure you have the correct code for your production build.");
	}
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	var _isPlainObject = __webpack_require__(184);
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	var _symbolObservable = __webpack_require__(194);
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var ActionTypes = exports.ActionTypes = {
		INIT: "@@redux/INIT"
	};
	function createStore(reducer, preloadedState, enhancer) {
		var _ref2;
		if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
			enhancer = preloadedState;
			preloadedState = undefined;
		}
		if (typeof enhancer !== "undefined") {
			if (typeof enhancer !== "function") {
				throw new Error("Expected the enhancer to be a function.");
			}
			return enhancer(createStore)(reducer, preloadedState);
		}
		if (typeof reducer !== "function") {
			throw new Error("Expected the reducer to be a function.");
		}
		var currentReducer = reducer;
		var currentState = preloadedState;
		var currentListeners = [];
		var nextListeners = currentListeners;
		var isDispatching = false;
		function ensureCanMutateNextListeners() {
			if (nextListeners === currentListeners) {
				nextListeners = currentListeners.slice();
			}
		}
		function getState() {
			return currentState;
		}
		function subscribe(listener) {
			if (typeof listener !== "function") {
				throw new Error("Expected listener to be a function.");
			}
			var isSubscribed = true;
			ensureCanMutateNextListeners();
			nextListeners.push(listener);
			return function unsubscribe() {
				if (!isSubscribed) {
					return;
				}
				isSubscribed = false;
				ensureCanMutateNextListeners();
				var index = nextListeners.indexOf(listener);
				nextListeners.splice(index, 1);
			};
		}
		function dispatch(action) {
			if (!(0, _isPlainObject2["default"])(action)) {
				throw new Error("Actions must be plain objects. " + "Use custom middleware for async actions.");
			}
			if (typeof action.type === "undefined") {
				throw new Error('Actions may not have an undefined "type" property. ' + "Have you misspelled a constant?");
			}
			if (isDispatching) {
				throw new Error("Reducers may not dispatch actions.");
			}
			try {
				isDispatching = true;
				currentState = currentReducer(currentState, action);
			} finally {
				isDispatching = false;
			}
			var listeners = currentListeners = nextListeners;
			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i];
				listener();
			}
			return action;
		}
		function replaceReducer(nextReducer) {
			if (typeof nextReducer !== "function") {
				throw new Error("Expected the nextReducer to be a function.");
			}
			currentReducer = nextReducer;
			dispatch({
				type: ActionTypes.INIT
			});
		}
		function observable() {
			var _ref;
			var outerSubscribe = subscribe;
			return _ref = {
				subscribe: function subscribe(observer) {
					if (typeof observer !== "object") {
						throw new TypeError("Expected the observer to be an object.");
					}
					function observeState() {
						if (observer.next) {
							observer.next(getState());
						}
					}
					observeState();
					var unsubscribe = outerSubscribe(observeState);
					return {
						unsubscribe: unsubscribe
					};
				}
			}, _ref[_symbolObservable2["default"]] = function () {
				return this;
			}, _ref;
		}
		dispatch({
			type: ActionTypes.INIT
		});
		return _ref2 = {
			dispatch: dispatch,
			subscribe: subscribe,
			getState: getState,
			replaceReducer: replaceReducer
		}, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}
}, function (module, exports, __webpack_require__) {
	var baseGetTag = __webpack_require__(185), getPrototype = __webpack_require__(191), isObjectLike = __webpack_require__(193);
	var objectTag = "[object Object]";
	var funcProto = Function.prototype, objectProto = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var objectCtorString = funcToString.call(Object);
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
			return false;
		}
		var proto = getPrototype(value);
		if (proto === null) {
			return true;
		}
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	module.exports = isPlainObject;
}, function (module, exports, __webpack_require__) {
	var Symbol = __webpack_require__(186), getRawTag = __webpack_require__(189), objectToString = __webpack_require__(190);
	var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	function baseGetTag(value) {
		if (value == null) {
			return value === undefined ? undefinedTag : nullTag;
		}
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag;
}, function (module, exports, __webpack_require__) {
	var root = __webpack_require__(187);
	var Symbol = root.Symbol;
	module.exports = Symbol;
}, function (module, exports, __webpack_require__) {
	var freeGlobal = __webpack_require__(188);
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	var root = freeGlobal || freeSelf || Function("return this")();
	module.exports = root;
}, function (module, exports) {
	(function (global) {
		var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
		module.exports = freeGlobal;
	}).call(exports, function () {
		return this;
	}());
}, function (module, exports, __webpack_require__) {
	var Symbol = __webpack_require__(186);
	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var nativeObjectToString = objectProto.toString;
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = undefined;
			var unmasked = true;
		} catch (e) { }
		var result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) {
				value[symToStringTag] = tag;
			} else {
				delete value[symToStringTag];
			}
		}
		return result;
	}
	module.exports = getRawTag;
}, function (module, exports) {
	var objectProto = Object.prototype;
	var nativeObjectToString = objectProto.toString;
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString;
}, function (module, exports, __webpack_require__) {
	var overArg = __webpack_require__(192);
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	module.exports = getPrototype;
}, function (module, exports) {
	function overArg(func, transform) {
		return function (arg) {
			return func(transform(arg));
		};
	}
	module.exports = overArg;
}, function (module, exports) {
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}, function (module, exports, __webpack_require__) {
	(function (global, module) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _ponyfill = __webpack_require__(196);
		var _ponyfill2 = _interopRequireDefault(_ponyfill);
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}
		var root;
		if (typeof self !== "undefined") {
			root = self;
		} else if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (true) {
			root = module;
		} else {
			root = Function("return this")();
		}
		var result = (0, _ponyfill2["default"])(root);
		exports["default"] = result;
	}).call(exports, function () {
		return this;
	}(), __webpack_require__(195)(module));
}, function (module, exports) {
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () { };
			module.paths = [];
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};
}, function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
		if (typeof _Symbol === "function") {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol("observable");
				_Symbol.observable = result;
			}
		} else {
			result = "@@observable";
		}
		return result;
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = combineReducers;
	var _createStore = __webpack_require__(183);
	var _isPlainObject = __webpack_require__(184);
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	var _warning = __webpack_require__(198);
	var _warning2 = _interopRequireDefault(_warning);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function getUndefinedStateErrorMessage(key, action) {
		var actionType = action && action.type;
		var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
		return "Given action " + actionName + ', reducer "' + key + '" returned undefined. ' + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
	}
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
		var reducerKeys = Object.keys(reducers);
		var argumentName = action && action.type === _createStore.ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
		if (reducerKeys.length === 0) {
			return "Store does not have a valid reducer. Make sure the argument passed " + "to combineReducers is an object whose values are reducers.";
		}
		if (!(0, _isPlainObject2["default"])(inputState)) {
			return "The " + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
		}
		var unexpectedKeys = Object.keys(inputState).filter(function (key) {
			return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
		});
		unexpectedKeys.forEach(function (key) {
			unexpectedKeyCache[key] = true;
		});
		if (unexpectedKeys.length > 0) {
			return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
		}
	}
	function assertReducerShape(reducers) {
		Object.keys(reducers).forEach(function (key) {
			var reducer = reducers[key];
			var initialState = reducer(undefined, {
				type: _createStore.ActionTypes.INIT
			});
			if (typeof initialState === "undefined") {
				throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
			}
			var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
			if (typeof reducer(undefined, {
				type: type
			}) === "undefined") {
				throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
			}
		});
	}
	function combineReducers(reducers) {
		var reducerKeys = Object.keys(reducers);
		var finalReducers = {};
		for (var i = 0; i < reducerKeys.length; i++) {
			var key = reducerKeys[i];
			if (false) {
				if (typeof reducers[key] === "undefined") {
					(0, _warning2["default"])('No reducer provided for key "' + key + '"');
				}
			}
			if (typeof reducers[key] === "function") {
				finalReducers[key] = reducers[key];
			}
		}
		var finalReducerKeys = Object.keys(finalReducers);
		var unexpectedKeyCache = void 0;
		if (false) {
			unexpectedKeyCache = {};
		}
		var shapeAssertionError = void 0;
		try {
			assertReducerShape(finalReducers);
		} catch (e) {
			shapeAssertionError = e;
		}
		return function combination() {
			var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var action = arguments[1];
			if (shapeAssertionError) {
				throw shapeAssertionError;
			}
			if (false) {
				var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
				if (warningMessage) {
					(0, _warning2["default"])(warningMessage);
				}
			}
			var hasChanged = false;
			var nextState = {};
			for (var _i = 0; _i < finalReducerKeys.length; _i++) {
				var _key = finalReducerKeys[_i];
				var reducer = finalReducers[_key];
				var previousStateForKey = state[_key];
				var nextStateForKey = reducer(previousStateForKey, action);
				if (typeof nextStateForKey === "undefined") {
					var errorMessage = getUndefinedStateErrorMessage(_key, action);
					throw new Error(errorMessage);
				}
				nextState[_key] = nextStateForKey;
				hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
			}
			return hasChanged ? nextState : state;
		};
	}
}, function (module, exports) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = warning;
	function warning(message) {
		if (typeof console !== "undefined" && typeof console.error === "function") {
			console.error(message);
		}
		try {
			throw new Error(message);
		} catch (e) { }
	}
}, function (module, exports) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
		return function () {
			return dispatch(actionCreator.apply(undefined, arguments));
		};
	}
	function bindActionCreators(actionCreators, dispatch) {
		if (typeof actionCreators === "function") {
			return bindActionCreator(actionCreators, dispatch);
		}
		if (typeof actionCreators !== "object" || actionCreators === null) {
			throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + ". " + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
		}
		var keys = Object.keys(actionCreators);
		var boundActionCreators = {};
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var actionCreator = actionCreators[key];
			if (typeof actionCreator === "function") {
				boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
			}
		}
		return boundActionCreators;
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	exports.__esModule = true;
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
	exports["default"] = applyMiddleware;
	var _compose = __webpack_require__(201);
	var _compose2 = _interopRequireDefault(_compose);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function applyMiddleware() {
		for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
			middlewares[_key] = arguments[_key];
		}
		return function (createStore) {
			return function (reducer, preloadedState, enhancer) {
				var store = createStore(reducer, preloadedState, enhancer);
				var _dispatch = store.dispatch;
				var chain = [];
				var middlewareAPI = {
					getState: store.getState,
					dispatch: function dispatch(action) {
						return _dispatch(action);
					}
				};
				chain = middlewares.map(function (middleware) {
					return middleware(middlewareAPI);
				});
				_dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
				return _extends({}, store, {
					dispatch: _dispatch
				});
			};
		};
	}
}, function (module, exports) {
	"use strict";
	exports.__esModule = true;
	exports["default"] = compose;
	function compose() {
		for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
			funcs[_key] = arguments[_key];
		}
		if (funcs.length === 0) {
			return function (arg) {
				return arg;
			};
		}
		if (funcs.length === 1) {
			return funcs[0];
		}
		return funcs.reduce(function (a, b) {
			return function () {
				return a(b.apply(undefined, arguments));
			};
		});
	}
}, function (module, exports, __webpack_require__) {
	"use strict";
	var reactIs = __webpack_require__(25);
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		$$typeof: true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		$$typeof: true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) {
			return MEMO_STATICS;
		}
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) {
					hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
				}
			}
			var keys = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) {
				keys = keys.concat(getOwnPropertySymbols(sourceComponent));
			}
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e) { }
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var invariant = function (condition, format, a, b, c, d, e, f) {
		if (false) {
			if (format === undefined) {
				throw new Error("invariant requires an error message argument");
			}
		}
		if (!condition) {
			var error;
			if (format === undefined) {
				error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
			} else {
				var args = [a, b, c, d, e, f];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function () {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	};
	module.exports = invariant;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _redux = __webpack_require__(182);
	var _reducers = __webpack_require__(205);
	var _reducers2 = _interopRequireDefault(_reducers);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var store = (0, _redux.createStore)(_reducers2.default, window.devToolsExtension && window.devToolsExtension());
	exports.default = store;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reduxImmutable = __webpack_require__(206);
	var _pause = __webpack_require__(213);
	var _pause2 = _interopRequireDefault(_pause);
	var _music = __webpack_require__(217);
	var _music2 = _interopRequireDefault(_music);
	var _matrix = __webpack_require__(219);
	var _matrix2 = _interopRequireDefault(_matrix);
	var _next = __webpack_require__(220);
	var _next2 = _interopRequireDefault(_next);
	var _cur = __webpack_require__(222);
	var _cur2 = _interopRequireDefault(_cur);
	var _startLines = __webpack_require__(224);
	var _startLines2 = _interopRequireDefault(_startLines);
	var _max = __webpack_require__(225);
	var _max2 = _interopRequireDefault(_max);
	var _points = __webpack_require__(226);
	var _points2 = _interopRequireDefault(_points);
	var _speedStart = __webpack_require__(227);
	var _speedStart2 = _interopRequireDefault(_speedStart);
	var _speedRun = __webpack_require__(228);
	var _speedRun2 = _interopRequireDefault(_speedRun);
	var _lock = __webpack_require__(229);
	var _lock2 = _interopRequireDefault(_lock);
	var _clearLines = __webpack_require__(230);
	var _clearLines2 = _interopRequireDefault(_clearLines);
	var _reset = __webpack_require__(231);
	var _reset2 = _interopRequireDefault(_reset);
	var _drop = __webpack_require__(232);
	var _drop2 = _interopRequireDefault(_drop);
	var _keyboard = __webpack_require__(233);
	var _keyboard2 = _interopRequireDefault(_keyboard);
	var _focus = __webpack_require__(242);
	var _focus2 = _interopRequireDefault(_focus);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var rootReducer = (0, _reduxImmutable.combineReducers)({
		pause: _pause2.default,
		music: _music2.default,
		matrix: _matrix2.default,
		next: _next2.default,
		cur: _cur2.default,
		startLines: _startLines2.default,
		max: _max2.default,
		points: _points2.default,
		speedStart: _speedStart2.default,
		speedRun: _speedRun2.default,
		lock: _lock2.default,
		clearLines: _clearLines2.default,
		reset: _reset2.default,
		drop: _drop2.default,
		keyboard: _keyboard2.default,
		focus: _focus2.default
	});
	exports.default = rootReducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.combineReducers = undefined;
	var _combineReducers2 = __webpack_require__(207);
	var _combineReducers3 = _interopRequireDefault(_combineReducers2);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.combineReducers = _combineReducers3.default;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _immutable = __webpack_require__(208);
	var _immutable2 = _interopRequireDefault(_immutable);
	var _utilities = __webpack_require__(209);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.default = function (reducers) {
		var getDefaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _immutable2.default.Map;
		var reducerKeys = Object.keys(reducers);
		return function () {
			var inputState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultState();
			var action = arguments[1];
			if (false) {
				var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);
				if (warningMessage) {
					console.error(warningMessage);
				}
			}
			return inputState.withMutations(function (temporaryState) {
				reducerKeys.forEach(function (reducerName) {
					var reducer = reducers[reducerName];
					var currentDomainState = temporaryState.get(reducerName);
					var nextDomainState = reducer(currentDomainState, action);
					(0, _utilities.validateNextState)(nextDomainState, reducerName, action);
					temporaryState.set(reducerName, nextDomainState);
				});
			});
		};
	};
	module.exports = exports["default"];
}, function (module, exports, __webpack_require__) {
	(function (global, factory) {
		true ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.Immutable = factory();
	})(this, function () {
		"use strict";
		var SLICE$0 = Array.prototype.slice;
		function createClass(ctor, superClass) {
			if (superClass) {
				ctor.prototype = Object.create(superClass.prototype);
			}
			ctor.prototype.constructor = ctor;
		}
		function Iterable(value) {
			return isIterable(value) ? value : Seq(value);
		}
		createClass(KeyedIterable, Iterable);
		function KeyedIterable(value) {
			return isKeyed(value) ? value : KeyedSeq(value);
		}
		createClass(IndexedIterable, Iterable);
		function IndexedIterable(value) {
			return isIndexed(value) ? value : IndexedSeq(value);
		}
		createClass(SetIterable, Iterable);
		function SetIterable(value) {
			return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
		}
		function isIterable(maybeIterable) {
			return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
		}
		function isKeyed(maybeKeyed) {
			return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
		}
		function isIndexed(maybeIndexed) {
			return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
		}
		function isAssociative(maybeAssociative) {
			return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
		}
		function isOrdered(maybeOrdered) {
			return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
		}
		Iterable.isIterable = isIterable;
		Iterable.isKeyed = isKeyed;
		Iterable.isIndexed = isIndexed;
		Iterable.isAssociative = isAssociative;
		Iterable.isOrdered = isOrdered;
		Iterable.Keyed = KeyedIterable;
		Iterable.Indexed = IndexedIterable;
		Iterable.Set = SetIterable;
		var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
		var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
		var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
		var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
		var DELETE = "delete";
		var SHIFT = 5;
		var SIZE = 1 << SHIFT;
		var MASK = SIZE - 1;
		var NOT_SET = {};
		var CHANGE_LENGTH = {
			value: false
		};
		var DID_ALTER = {
			value: false
		};
		function MakeRef(ref) {
			ref.value = false;
			return ref;
		}
		function SetRef(ref) {
			ref && (ref.value = true);
		}
		function OwnerID() { }
		function arrCopy(arr, offset) {
			offset = offset || 0;
			var len = Math.max(0, arr.length - offset);
			var newArr = new Array(len);
			for (var ii = 0; ii < len; ii++) {
				newArr[ii] = arr[ii + offset];
			}
			return newArr;
		}
		function ensureSize(iter) {
			if (iter.size === undefined) {
				iter.size = iter.__iterate(returnTrue);
			}
			return iter.size;
		}
		function wrapIndex(iter, index) {
			if (typeof index !== "number") {
				var uint32Index = index >>> 0;
				if ("" + uint32Index !== index || uint32Index === 4294967295) {
					return NaN;
				}
				index = uint32Index;
			}
			return index < 0 ? ensureSize(iter) + index : index;
		}
		function returnTrue() {
			return true;
		}
		function wholeSlice(begin, end, size) {
			return (begin === 0 || size !== undefined && begin <= -size) && (end === undefined || size !== undefined && end >= size);
		}
		function resolveBegin(begin, size) {
			return resolveIndex(begin, size, 0);
		}
		function resolveEnd(end, size) {
			return resolveIndex(end, size, size);
		}
		function resolveIndex(index, size, defaultIndex) {
			return index === undefined ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === undefined ? index : Math.min(size, index);
		}
		var ITERATE_KEYS = 0;
		var ITERATE_VALUES = 1;
		var ITERATE_ENTRIES = 2;
		var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
		function Iterator(next) {
			this.next = next;
		}
		Iterator.prototype.toString = function () {
			return "[Iterator]";
		};
		Iterator.KEYS = ITERATE_KEYS;
		Iterator.VALUES = ITERATE_VALUES;
		Iterator.ENTRIES = ITERATE_ENTRIES;
		Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
			return this.toString();
		};
		Iterator.prototype[ITERATOR_SYMBOL] = function () {
			return this;
		};
		function iteratorValue(type, k, v, iteratorResult) {
			var value = type === 0 ? k : type === 1 ? v : [k, v];
			iteratorResult ? iteratorResult.value = value : iteratorResult = {
				value: value,
				done: false
			};
			return iteratorResult;
		}
		function iteratorDone() {
			return {
				value: undefined,
				done: true
			};
		}
		function hasIterator(maybeIterable) {
			return !!getIteratorFn(maybeIterable);
		}
		function isIterator(maybeIterator) {
			return maybeIterator && typeof maybeIterator.next === "function";
		}
		function getIterator(iterable) {
			var iteratorFn = getIteratorFn(iterable);
			return iteratorFn && iteratorFn.call(iterable);
		}
		function getIteratorFn(iterable) {
			var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") {
				return iteratorFn;
			}
		}
		function isArrayLike(value) {
			return value && typeof value.length === "number";
		}
		createClass(Seq, Iterable);
		function Seq(value) {
			return value === null || value === undefined ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
		}
		Seq.of = function () {
			return Seq(arguments);
		};
		Seq.prototype.toSeq = function () {
			return this;
		};
		Seq.prototype.toString = function () {
			return this.__toString("Seq {", "}");
		};
		Seq.prototype.cacheResult = function () {
			if (!this._cache && this.__iterateUncached) {
				this._cache = this.entrySeq().toArray();
				this.size = this._cache.length;
			}
			return this;
		};
		Seq.prototype.__iterate = function (fn, reverse) {
			return seqIterate(this, fn, reverse, true);
		};
		Seq.prototype.__iterator = function (type, reverse) {
			return seqIterator(this, type, reverse, true);
		};
		createClass(KeyedSeq, Seq);
		function KeyedSeq(value) {
			return value === null || value === undefined ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
		}
		KeyedSeq.prototype.toKeyedSeq = function () {
			return this;
		};
		createClass(IndexedSeq, Seq);
		function IndexedSeq(value) {
			return value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
		}
		IndexedSeq.of = function () {
			return IndexedSeq(arguments);
		};
		IndexedSeq.prototype.toIndexedSeq = function () {
			return this;
		};
		IndexedSeq.prototype.toString = function () {
			return this.__toString("Seq [", "]");
		};
		IndexedSeq.prototype.__iterate = function (fn, reverse) {
			return seqIterate(this, fn, reverse, false);
		};
		IndexedSeq.prototype.__iterator = function (type, reverse) {
			return seqIterator(this, type, reverse, false);
		};
		createClass(SetSeq, Seq);
		function SetSeq(value) {
			return (value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
		}
		SetSeq.of = function () {
			return SetSeq(arguments);
		};
		SetSeq.prototype.toSetSeq = function () {
			return this;
		};
		Seq.isSeq = isSeq;
		Seq.Keyed = KeyedSeq;
		Seq.Set = SetSeq;
		Seq.Indexed = IndexedSeq;
		var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
		Seq.prototype[IS_SEQ_SENTINEL] = true;
		createClass(ArraySeq, IndexedSeq);
		function ArraySeq(array) {
			this._array = array;
			this.size = array.length;
		}
		ArraySeq.prototype.get = function (index, notSetValue) {
			return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
		};
		ArraySeq.prototype.__iterate = function (fn, reverse) {
			var array = this._array;
			var maxIndex = array.length - 1;
			for (var ii = 0; ii <= maxIndex; ii++) {
				if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
					return ii + 1;
				}
			}
			return ii;
		};
		ArraySeq.prototype.__iterator = function (type, reverse) {
			var array = this._array;
			var maxIndex = array.length - 1;
			var ii = 0;
			return new Iterator(function () {
				return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
			});
		};
		createClass(ObjectSeq, KeyedSeq);
		function ObjectSeq(object) {
			var keys = Object.keys(object);
			this._object = object;
			this._keys = keys;
			this.size = keys.length;
		}
		ObjectSeq.prototype.get = function (key, notSetValue) {
			if (notSetValue !== undefined && !this.has(key)) {
				return notSetValue;
			}
			return this._object[key];
		};
		ObjectSeq.prototype.has = function (key) {
			return this._object.hasOwnProperty(key);
		};
		ObjectSeq.prototype.__iterate = function (fn, reverse) {
			var object = this._object;
			var keys = this._keys;
			var maxIndex = keys.length - 1;
			for (var ii = 0; ii <= maxIndex; ii++) {
				var key = keys[reverse ? maxIndex - ii : ii];
				if (fn(object[key], key, this) === false) {
					return ii + 1;
				}
			}
			return ii;
		};
		ObjectSeq.prototype.__iterator = function (type, reverse) {
			var object = this._object;
			var keys = this._keys;
			var maxIndex = keys.length - 1;
			var ii = 0;
			return new Iterator(function () {
				var key = keys[reverse ? maxIndex - ii : ii];
				return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
			});
		};
		ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
		createClass(IterableSeq, IndexedSeq);
		function IterableSeq(iterable) {
			this._iterable = iterable;
			this.size = iterable.length || iterable.size;
		}
		IterableSeq.prototype.__iterateUncached = function (fn, reverse) {
			if (reverse) {
				return this.cacheResult().__iterate(fn, reverse);
			}
			var iterable = this._iterable;
			var iterator = getIterator(iterable);
			var iterations = 0;
			if (isIterator(iterator)) {
				var step;
				while (!(step = iterator.next()).done) {
					if (fn(step.value, iterations++, this) === false) {
						break;
					}
				}
			}
			return iterations;
		};
		IterableSeq.prototype.__iteratorUncached = function (type, reverse) {
			if (reverse) {
				return this.cacheResult().__iterator(type, reverse);
			}
			var iterable = this._iterable;
			var iterator = getIterator(iterable);
			if (!isIterator(iterator)) {
				return new Iterator(iteratorDone);
			}
			var iterations = 0;
			return new Iterator(function () {
				var step = iterator.next();
				return step.done ? step : iteratorValue(type, iterations++, step.value);
			});
		};
		createClass(IteratorSeq, IndexedSeq);
		function IteratorSeq(iterator) {
			this._iterator = iterator;
			this._iteratorCache = [];
		}
		IteratorSeq.prototype.__iterateUncached = function (fn, reverse) {
			if (reverse) {
				return this.cacheResult().__iterate(fn, reverse);
			}
			var iterator = this._iterator;
			var cache = this._iteratorCache;
			var iterations = 0;
			while (iterations < cache.length) {
				if (fn(cache[iterations], iterations++, this) === false) {
					return iterations;
				}
			}
			var step;
			while (!(step = iterator.next()).done) {
				var val = step.value;
				cache[iterations] = val;
				if (fn(val, iterations++, this) === false) {
					break;
				}
			}
			return iterations;
		};
		IteratorSeq.prototype.__iteratorUncached = function (type, reverse) {
			if (reverse) {
				return this.cacheResult().__iterator(type, reverse);
			}
			var iterator = this._iterator;
			var cache = this._iteratorCache;
			var iterations = 0;
			return new Iterator(function () {
				if (iterations >= cache.length) {
					var step = iterator.next();
					if (step.done) {
						return step;
					}
					cache[iterations] = step.value;
				}
				return iteratorValue(type, iterations, cache[iterations++]);
			});
		};
		function isSeq(maybeSeq) {
			return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
		}
		var EMPTY_SEQ;
		function emptySequence() {
			return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
		}
		function keyedSeqFromValue(value) {
			var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : undefined;
			if (!seq) {
				throw new TypeError("Expected Array or iterable object of [k, v] entries, " + "or keyed object: " + value);
			}
			return seq;
		}
		function indexedSeqFromValue(value) {
			var seq = maybeIndexedSeqFromValue(value);
			if (!seq) {
				throw new TypeError("Expected Array or iterable object of values: " + value);
			}
			return seq;
		}
		function seqFromValue(value) {
			var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
			if (!seq) {
				throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
			}
			return seq;
		}
		function maybeIndexedSeqFromValue(value) {
			return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : undefined;
		}
		function seqIterate(seq, fn, reverse, useKeys) {
			var cache = seq._cache;
			if (cache) {
				var maxIndex = cache.length - 1;
				for (var ii = 0; ii <= maxIndex; ii++) {
					var entry = cache[reverse ? maxIndex - ii : ii];
					if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
						return ii + 1;
					}
				}
				return ii;
			}
			return seq.__iterateUncached(fn, reverse);
		}
		function seqIterator(seq, type, reverse, useKeys) {
			var cache = seq._cache;
			if (cache) {
				var maxIndex = cache.length - 1;
				var ii = 0;
				return new Iterator(function () {
					var entry = cache[reverse ? maxIndex - ii : ii];
					return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
				});
			}
			return seq.__iteratorUncached(type, reverse);
		}
		function fromJS(json, converter) {
			return converter ? fromJSWith(converter, json, "", {
				"": json
			}) : fromJSDefault(json);
		}
		function fromJSWith(converter, json, key, parentJSON) {
			if (Array.isArray(json)) {
				return converter.call(parentJSON, key, IndexedSeq(json).map(function (v, k) {
					return fromJSWith(converter, v, k, json);
				}));
			}
			if (isPlainObj(json)) {
				return converter.call(parentJSON, key, KeyedSeq(json).map(function (v, k) {
					return fromJSWith(converter, v, k, json);
				}));
			}
			return json;
		}
		function fromJSDefault(json) {
			if (Array.isArray(json)) {
				return IndexedSeq(json).map(fromJSDefault).toList();
			}
			if (isPlainObj(json)) {
				return KeyedSeq(json).map(fromJSDefault).toMap();
			}
			return json;
		}
		function isPlainObj(value) {
			return value && (value.constructor === Object || value.constructor === undefined);
		}
		function is(valueA, valueB) {
			if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
				return true;
			}
			if (!valueA || !valueB) {
				return false;
			}
			if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
				valueA = valueA.valueOf();
				valueB = valueB.valueOf();
				if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
					return true;
				}
				if (!valueA || !valueB) {
					return false;
				}
			}
			if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
				return true;
			}
			return false;
		}
		function deepEqual(a, b) {
			if (a === b) {
				return true;
			}
			if (!isIterable(b) || a.size !== undefined && b.size !== undefined && a.size !== b.size || a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
				return false;
			}
			if (a.size === 0 && b.size === 0) {
				return true;
			}
			var notAssociative = !isAssociative(a);
			if (isOrdered(a)) {
				var entries = a.entries();
				return b.every(function (v, k) {
					var entry = entries.next().value;
					return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
				}) && entries.next().done;
			}
			var flipped = false;
			if (a.size === undefined) {
				if (b.size === undefined) {
					if (typeof a.cacheResult === "function") {
						a.cacheResult();
					}
				} else {
					flipped = true;
					var _ = a;
					a = b;
					b = _;
				}
			}
			var allEqual = true;
			var bSize = b.__iterate(function (v, k) {
				if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
					allEqual = false;
					return false;
				}
			});
			return allEqual && a.size === bSize;
		}
		createClass(Repeat, IndexedSeq);
		function Repeat(value, times) {
			if (!(this instanceof Repeat)) {
				return new Repeat(value, times);
			}
			this._value = value;
			this.size = times === undefined ? Infinity : Math.max(0, times);
			if (this.size === 0) {
				if (EMPTY_REPEAT) {
					return EMPTY_REPEAT;
				}
				EMPTY_REPEAT = this;
			}
		}
		Repeat.prototype.toString = function () {
			if (this.size === 0) {
				return "Repeat []";
			}
			return "Repeat [ " + this._value + " " + this.size + " times ]";
		};
		Repeat.prototype.get = function (index, notSetValue) {
			return this.has(index) ? this._value : notSetValue;
		};
		Repeat.prototype.includes = function (searchValue) {
			return is(this._value, searchValue);
		};
		Repeat.prototype.slice = function (begin, end) {
			var size = this.size;
			return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
		};
		Repeat.prototype.reverse = function () {
			return this;
		};
		Repeat.prototype.indexOf = function (searchValue) {
			if (is(this._value, searchValue)) {
				return 0;
			}
			return -1;
		};
		Repeat.prototype.lastIndexOf = function (searchValue) {
			if (is(this._value, searchValue)) {
				return this.size;
			}
			return -1;
		};
		Repeat.prototype.__iterate = function (fn, reverse) {
			for (var ii = 0; ii < this.size; ii++) {
				if (fn(this._value, ii, this) === false) {
					return ii + 1;
				}
			}
			return ii;
		};
		Repeat.prototype.__iterator = function (type, reverse) {
			var this$0 = this;
			var ii = 0;
			return new Iterator(function () {
				return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
			});
		};
		Repeat.prototype.equals = function (other) {
			return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
		};
		var EMPTY_REPEAT;
		function invariant(condition, error) {
			if (!condition) throw new Error(error);
		}
		createClass(Range, IndexedSeq);
		function Range(start, end, step) {
			if (!(this instanceof Range)) {
				return new Range(start, end, step);
			}
			invariant(step !== 0, "Cannot step a Range by 0");
			start = start || 0;
			if (end === undefined) {
				end = Infinity;
			}
			step = step === undefined ? 1 : Math.abs(step);
			if (end < start) {
				step = -step;
			}
			this._start = start;
			this._end = end;
			this._step = step;
			this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
			if (this.size === 0) {
				if (EMPTY_RANGE) {
					return EMPTY_RANGE;
				}
				EMPTY_RANGE = this;
			}
		}
		Range.prototype.toString = function () {
			if (this.size === 0) {
				return "Range []";
			}
			return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
		};
		Range.prototype.get = function (index, notSetValue) {
			return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
		};
		Range.prototype.includes = function (searchValue) {
			var possibleIndex = (searchValue - this._start) / this._step;
			return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
		};
		Range.prototype.slice = function (begin, end) {
			if (wholeSlice(begin, end, this.size)) {
				return this;
			}
			begin = resolveBegin(begin, this.size);
			end = resolveEnd(end, this.size);
			if (end <= begin) {
				return new Range(0, 0);
			}
			return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
		};
		Range.prototype.indexOf = function (searchValue) {
			var offsetValue = searchValue - this._start;
			if (offsetValue % this._step === 0) {
				var index = offsetValue / this._step;
				if (index >= 0 && index < this.size) {
					return index;
				}
			}
			return -1;
		};
		Range.prototype.lastIndexOf = function (searchValue) {
			return this.indexOf(searchValue);
		};
		Range.prototype.__iterate = function (fn, reverse) {
			var maxIndex = this.size - 1;
			var step = this._step;
			var value = reverse ? this._start + maxIndex * step : this._start;
			for (var ii = 0; ii <= maxIndex; ii++) {
				if (fn(value, ii, this) === false) {
					return ii + 1;
				}
				value += reverse ? -step : step;
			}
			return ii;
		};
		Range.prototype.__iterator = function (type, reverse) {
			var maxIndex = this.size - 1;
			var step = this._step;
			var value = reverse ? this._start + maxIndex * step : this._start;
			var ii = 0;
			return new Iterator(function () {
				var v = value;
				value += reverse ? -step : step;
				return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
			});
		};
		Range.prototype.equals = function (other) {
			return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
		};
		var EMPTY_RANGE;
		createClass(Collection, Iterable);
		function Collection() {
			throw TypeError("Abstract");
		}
		createClass(KeyedCollection, Collection);
		function KeyedCollection() { }
		createClass(IndexedCollection, Collection);
		function IndexedCollection() { }
		createClass(SetCollection, Collection);
		function SetCollection() { }
		Collection.Keyed = KeyedCollection;
		Collection.Indexed = IndexedCollection;
		Collection.Set = SetCollection;
		var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul(a, b) {
			a = a | 0;
			b = b | 0;
			var c = a & 65535;
			var d = b & 65535;
			return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
		};
		function smi(i32) {
			return i32 >>> 1 & 1073741824 | i32 & 3221225471;
		}
		function hash(o) {
			if (o === false || o === null || o === undefined) {
				return 0;
			}
			if (typeof o.valueOf === "function") {
				o = o.valueOf();
				if (o === false || o === null || o === undefined) {
					return 0;
				}
			}
			if (o === true) {
				return 1;
			}
			var type = typeof o;
			if (type === "number") {
				if (o !== o || o === Infinity) {
					return 0;
				}
				var h = o | 0;
				if (h !== o) {
					h ^= o * 4294967295;
				}
				while (o > 4294967295) {
					o /= 4294967295;
					h ^= o;
				}
				return smi(h);
			}
			if (type === "string") {
				return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
			}
			if (typeof o.hashCode === "function") {
				return o.hashCode();
			}
			if (type === "object") {
				return hashJSObj(o);
			}
			if (typeof o.toString === "function") {
				return hashString(o.toString());
			}
			throw new Error("Value type " + type + " cannot be hashed.");
		}
		function cachedHashString(string) {
			var hash = stringHashCache[string];
			if (hash === undefined) {
				hash = hashString(string);
				if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
					STRING_HASH_CACHE_SIZE = 0;
					stringHashCache = {};
				}
				STRING_HASH_CACHE_SIZE++;
				stringHashCache[string] = hash;
			}
			return hash;
		}
		function hashString(string) {
			var hash = 0;
			for (var ii = 0; ii < string.length; ii++) {
				hash = 31 * hash + string.charCodeAt(ii) | 0;
			}
			return smi(hash);
		}
		function hashJSObj(obj) {
			var hash;
			if (usingWeakMap) {
				hash = weakMap.get(obj);
				if (hash !== undefined) {
					return hash;
				}
			}
			hash = obj[UID_HASH_KEY];
			if (hash !== undefined) {
				return hash;
			}
			if (!canDefineProperty) {
				hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
				if (hash !== undefined) {
					return hash;
				}
				hash = getIENodeHash(obj);
				if (hash !== undefined) {
					return hash;
				}
			}
			hash = ++objHashUID;
			if (objHashUID & 1073741824) {
				objHashUID = 0;
			}
			if (usingWeakMap) {
				weakMap.set(obj, hash);
			} else if (isExtensible !== undefined && isExtensible(obj) === false) {
				throw new Error("Non-extensible objects are not allowed as keys.");
			} else if (canDefineProperty) {
				Object.defineProperty(obj, UID_HASH_KEY, {
					enumerable: false,
					configurable: false,
					writable: false,
					value: hash
				});
			} else if (obj.propertyIsEnumerable !== undefined && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
				obj.propertyIsEnumerable = function () {
					return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
				};
				obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
			} else if (obj.nodeType !== undefined) {
				obj[UID_HASH_KEY] = hash;
			} else {
				throw new Error("Unable to set a non-enumerable property on object.");
			}
			return hash;
		}
		var isExtensible = Object.isExtensible;
		var canDefineProperty = function () {
			try {
				Object.defineProperty({}, "@", {});
				return true;
			} catch (e) {
				return false;
			}
		}();
		function getIENodeHash(node) {
			if (node && node.nodeType > 0) {
				switch (node.nodeType) {
					case 1:
						return node.uniqueID;

					case 9:
						return node.documentElement && node.documentElement.uniqueID;
				}
			}
		}
		var usingWeakMap = typeof WeakMap === "function";
		var weakMap;
		if (usingWeakMap) {
			weakMap = new WeakMap;
		}
		var objHashUID = 0;
		var UID_HASH_KEY = "__immutablehash__";
		if (typeof Symbol === "function") {
			UID_HASH_KEY = Symbol(UID_HASH_KEY);
		}
		var STRING_HASH_CACHE_MIN_STRLEN = 16;
		var STRING_HASH_CACHE_MAX_SIZE = 255;
		var STRING_HASH_CACHE_SIZE = 0;
		var stringHashCache = {};
		function assertNotInfinite(size) {
			invariant(size !== Infinity, "Cannot perform this action with an infinite size.");
		}
		createClass(Map, KeyedCollection);
		function Map(value) {
			return value === null || value === undefined ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function (map) {
				var iter = KeyedIterable(value);
				assertNotInfinite(iter.size);
				iter.forEach(function (v, k) {
					return map.set(k, v);
				});
			});
		}
		Map.of = function () {
			var keyValues = SLICE$0.call(arguments, 0);
			return emptyMap().withMutations(function (map) {
				for (var i = 0; i < keyValues.length; i += 2) {
					if (i + 1 >= keyValues.length) {
						throw new Error("Missing value for key: " + keyValues[i]);
					}
					map.set(keyValues[i], keyValues[i + 1]);
				}
			});
		};
		Map.prototype.toString = function () {
			return this.__toString("Map {", "}");
		};
		Map.prototype.get = function (k, notSetValue) {
			return this._root ? this._root.get(0, undefined, k, notSetValue) : notSetValue;
		};
		Map.prototype.set = function (k, v) {
			return updateMap(this, k, v);
		};
		Map.prototype.setIn = function (keyPath, v) {
			return this.updateIn(keyPath, NOT_SET, function () {
				return v;
			});
		};
		Map.prototype.remove = function (k) {
			return updateMap(this, k, NOT_SET);
		};
		Map.prototype.deleteIn = function (keyPath) {
			return this.updateIn(keyPath, function () {
				return NOT_SET;
			});
		};
		Map.prototype.update = function (k, notSetValue, updater) {
			return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
		};
		Map.prototype.updateIn = function (keyPath, notSetValue, updater) {
			if (!updater) {
				updater = notSetValue;
				notSetValue = undefined;
			}
			var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
			return updatedValue === NOT_SET ? undefined : updatedValue;
		};
		Map.prototype.clear = function () {
			if (this.size === 0) {
				return this;
			}
			if (this.__ownerID) {
				this.size = 0;
				this._root = null;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return emptyMap();
		};
		Map.prototype.merge = function () {
			return mergeIntoMapWith(this, undefined, arguments);
		};
		Map.prototype.mergeWith = function (merger) {
			var iters = SLICE$0.call(arguments, 1);
			return mergeIntoMapWith(this, merger, iters);
		};
		Map.prototype.mergeIn = function (keyPath) {
			var iters = SLICE$0.call(arguments, 1);
			return this.updateIn(keyPath, emptyMap(), function (m) {
				return typeof m.merge === "function" ? m.merge.apply(m, iters) : iters[iters.length - 1];
			});
		};
		Map.prototype.mergeDeep = function () {
			return mergeIntoMapWith(this, deepMerger, arguments);
		};
		Map.prototype.mergeDeepWith = function (merger) {
			var iters = SLICE$0.call(arguments, 1);
			return mergeIntoMapWith(this, deepMergerWith(merger), iters);
		};
		Map.prototype.mergeDeepIn = function (keyPath) {
			var iters = SLICE$0.call(arguments, 1);
			return this.updateIn(keyPath, emptyMap(), function (m) {
				return typeof m.mergeDeep === "function" ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
			});
		};
		Map.prototype.sort = function (comparator) {
			return OrderedMap(sortFactory(this, comparator));
		};
		Map.prototype.sortBy = function (mapper, comparator) {
			return OrderedMap(sortFactory(this, comparator, mapper));
		};
		Map.prototype.withMutations = function (fn) {
			var mutable = this.asMutable();
			fn(mutable);
			return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
		};
		Map.prototype.asMutable = function () {
			return this.__ownerID ? this : this.__ensureOwner(new OwnerID);
		};
		Map.prototype.asImmutable = function () {
			return this.__ensureOwner();
		};
		Map.prototype.wasAltered = function () {
			return this.__altered;
		};
		Map.prototype.__iterator = function (type, reverse) {
			return new MapIterator(this, type, reverse);
		};
		Map.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			var iterations = 0;
			this._root && this._root.iterate(function (entry) {
				iterations++;
				return fn(entry[1], entry[0], this$0);
			}, reverse);
			return iterations;
		};
		Map.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			if (!ownerID) {
				this.__ownerID = ownerID;
				this.__altered = false;
				return this;
			}
			return makeMap(this.size, this._root, ownerID, this.__hash);
		};
		function isMap(maybeMap) {
			return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
		}
		Map.isMap = isMap;
		var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
		var MapPrototype = Map.prototype;
		MapPrototype[IS_MAP_SENTINEL] = true;
		MapPrototype[DELETE] = MapPrototype.remove;
		MapPrototype.removeIn = MapPrototype.deleteIn;
		function ArrayMapNode(ownerID, entries) {
			this.ownerID = ownerID;
			this.entries = entries;
		}
		ArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
			var entries = this.entries;
			for (var ii = 0, len = entries.length; ii < len; ii++) {
				if (is(key, entries[ii][0])) {
					return entries[ii][1];
				}
			}
			return notSetValue;
		};
		ArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			var removed = value === NOT_SET;
			var entries = this.entries;
			var idx = 0;
			for (var len = entries.length; idx < len; idx++) {
				if (is(key, entries[idx][0])) {
					break;
				}
			}
			var exists = idx < len;
			if (exists ? entries[idx][1] === value : removed) {
				return this;
			}
			SetRef(didAlter);
			(removed || !exists) && SetRef(didChangeSize);
			if (removed && entries.length === 1) {
				return;
			}
			if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
				return createNodes(ownerID, entries, key, value);
			}
			var isEditable = ownerID && ownerID === this.ownerID;
			var newEntries = isEditable ? entries : arrCopy(entries);
			if (exists) {
				if (removed) {
					idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
				} else {
					newEntries[idx] = [key, value];
				}
			} else {
				newEntries.push([key, value]);
			}
			if (isEditable) {
				this.entries = newEntries;
				return this;
			}
			return new ArrayMapNode(ownerID, newEntries);
		};
		function BitmapIndexedNode(ownerID, bitmap, nodes) {
			this.ownerID = ownerID;
			this.bitmap = bitmap;
			this.nodes = nodes;
		}
		BitmapIndexedNode.prototype.get = function (shift, keyHash, key, notSetValue) {
			if (keyHash === undefined) {
				keyHash = hash(key);
			}
			var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
			var bitmap = this.bitmap;
			return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
		};
		BitmapIndexedNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			if (keyHash === undefined) {
				keyHash = hash(key);
			}
			var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
			var bit = 1 << keyHashFrag;
			var bitmap = this.bitmap;
			var exists = (bitmap & bit) !== 0;
			if (!exists && value === NOT_SET) {
				return this;
			}
			var idx = popCount(bitmap & bit - 1);
			var nodes = this.nodes;
			var node = exists ? nodes[idx] : undefined;
			var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
			if (newNode === node) {
				return this;
			}
			if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
				return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
			}
			if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
				return nodes[idx ^ 1];
			}
			if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
				return newNode;
			}
			var isEditable = ownerID && ownerID === this.ownerID;
			var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
			var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
			if (isEditable) {
				this.bitmap = newBitmap;
				this.nodes = newNodes;
				return this;
			}
			return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
		};
		function HashArrayMapNode(ownerID, count, nodes) {
			this.ownerID = ownerID;
			this.count = count;
			this.nodes = nodes;
		}
		HashArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
			if (keyHash === undefined) {
				keyHash = hash(key);
			}
			var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
			var node = this.nodes[idx];
			return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
		};
		HashArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			if (keyHash === undefined) {
				keyHash = hash(key);
			}
			var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
			var removed = value === NOT_SET;
			var nodes = this.nodes;
			var node = nodes[idx];
			if (removed && !node) {
				return this;
			}
			var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
			if (newNode === node) {
				return this;
			}
			var newCount = this.count;
			if (!node) {
				newCount++;
			} else if (!newNode) {
				newCount--;
				if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
					return packNodes(ownerID, nodes, newCount, idx);
				}
			}
			var isEditable = ownerID && ownerID === this.ownerID;
			var newNodes = setIn(nodes, idx, newNode, isEditable);
			if (isEditable) {
				this.count = newCount;
				this.nodes = newNodes;
				return this;
			}
			return new HashArrayMapNode(ownerID, newCount, newNodes);
		};
		function HashCollisionNode(ownerID, keyHash, entries) {
			this.ownerID = ownerID;
			this.keyHash = keyHash;
			this.entries = entries;
		}
		HashCollisionNode.prototype.get = function (shift, keyHash, key, notSetValue) {
			var entries = this.entries;
			for (var ii = 0, len = entries.length; ii < len; ii++) {
				if (is(key, entries[ii][0])) {
					return entries[ii][1];
				}
			}
			return notSetValue;
		};
		HashCollisionNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			if (keyHash === undefined) {
				keyHash = hash(key);
			}
			var removed = value === NOT_SET;
			if (keyHash !== this.keyHash) {
				if (removed) {
					return this;
				}
				SetRef(didAlter);
				SetRef(didChangeSize);
				return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
			}
			var entries = this.entries;
			var idx = 0;
			for (var len = entries.length; idx < len; idx++) {
				if (is(key, entries[idx][0])) {
					break;
				}
			}
			var exists = idx < len;
			if (exists ? entries[idx][1] === value : removed) {
				return this;
			}
			SetRef(didAlter);
			(removed || !exists) && SetRef(didChangeSize);
			if (removed && len === 2) {
				return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
			}
			var isEditable = ownerID && ownerID === this.ownerID;
			var newEntries = isEditable ? entries : arrCopy(entries);
			if (exists) {
				if (removed) {
					idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
				} else {
					newEntries[idx] = [key, value];
				}
			} else {
				newEntries.push([key, value]);
			}
			if (isEditable) {
				this.entries = newEntries;
				return this;
			}
			return new HashCollisionNode(ownerID, this.keyHash, newEntries);
		};
		function ValueNode(ownerID, keyHash, entry) {
			this.ownerID = ownerID;
			this.keyHash = keyHash;
			this.entry = entry;
		}
		ValueNode.prototype.get = function (shift, keyHash, key, notSetValue) {
			return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
		};
		ValueNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			var removed = value === NOT_SET;
			var keyMatch = is(key, this.entry[0]);
			if (keyMatch ? value === this.entry[1] : removed) {
				return this;
			}
			SetRef(didAlter);
			if (removed) {
				SetRef(didChangeSize);
				return;
			}
			if (keyMatch) {
				if (ownerID && ownerID === this.ownerID) {
					this.entry[1] = value;
					return this;
				}
				return new ValueNode(ownerID, this.keyHash, [key, value]);
			}
			SetRef(didChangeSize);
			return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
		};
		ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (fn, reverse) {
			var entries = this.entries;
			for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
				if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
					return false;
				}
			}
		};
		BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (fn, reverse) {
			var nodes = this.nodes;
			for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
				var node = nodes[reverse ? maxIndex - ii : ii];
				if (node && node.iterate(fn, reverse) === false) {
					return false;
				}
			}
		};
		ValueNode.prototype.iterate = function (fn, reverse) {
			return fn(this.entry);
		};
		createClass(MapIterator, Iterator);
		function MapIterator(map, type, reverse) {
			this._type = type;
			this._reverse = reverse;
			this._stack = map._root && mapIteratorFrame(map._root);
		}
		MapIterator.prototype.next = function () {
			var type = this._type;
			var stack = this._stack;
			while (stack) {
				var node = stack.node;
				var index = stack.index++;
				var maxIndex;
				if (node.entry) {
					if (index === 0) {
						return mapIteratorValue(type, node.entry);
					}
				} else if (node.entries) {
					maxIndex = node.entries.length - 1;
					if (index <= maxIndex) {
						return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
					}
				} else {
					maxIndex = node.nodes.length - 1;
					if (index <= maxIndex) {
						var subNode = node.nodes[this._reverse ? maxIndex - index : index];
						if (subNode) {
							if (subNode.entry) {
								return mapIteratorValue(type, subNode.entry);
							}
							stack = this._stack = mapIteratorFrame(subNode, stack);
						}
						continue;
					}
				}
				stack = this._stack = this._stack.__prev;
			}
			return iteratorDone();
		};
		function mapIteratorValue(type, entry) {
			return iteratorValue(type, entry[0], entry[1]);
		}
		function mapIteratorFrame(node, prev) {
			return {
				node: node,
				index: 0,
				__prev: prev
			};
		}
		function makeMap(size, root, ownerID, hash) {
			var map = Object.create(MapPrototype);
			map.size = size;
			map._root = root;
			map.__ownerID = ownerID;
			map.__hash = hash;
			map.__altered = false;
			return map;
		}
		var EMPTY_MAP;
		function emptyMap() {
			return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
		}
		function updateMap(map, k, v) {
			var newRoot;
			var newSize;
			if (!map._root) {
				if (v === NOT_SET) {
					return map;
				}
				newSize = 1;
				newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
			} else {
				var didChangeSize = MakeRef(CHANGE_LENGTH);
				var didAlter = MakeRef(DID_ALTER);
				newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
				if (!didAlter.value) {
					return map;
				}
				newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
			}
			if (map.__ownerID) {
				map.size = newSize;
				map._root = newRoot;
				map.__hash = undefined;
				map.__altered = true;
				return map;
			}
			return newRoot ? makeMap(newSize, newRoot) : emptyMap();
		}
		function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
			if (!node) {
				if (value === NOT_SET) {
					return node;
				}
				SetRef(didAlter);
				SetRef(didChangeSize);
				return new ValueNode(ownerID, keyHash, [key, value]);
			}
			return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
		}
		function isLeafNode(node) {
			return node.constructor === ValueNode || node.constructor === HashCollisionNode;
		}
		function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
			if (node.keyHash === keyHash) {
				return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
			}
			var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
			var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
			var newNode;
			var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry),
				idx1 < idx2 ? [node, newNode] : [newNode, node]);
			return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
		}
		function createNodes(ownerID, entries, key, value) {
			if (!ownerID) {
				ownerID = new OwnerID;
			}
			var node = new ValueNode(ownerID, hash(key), [key, value]);
			for (var ii = 0; ii < entries.length; ii++) {
				var entry = entries[ii];
				node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
			}
			return node;
		}
		function packNodes(ownerID, nodes, count, excluding) {
			var bitmap = 0;
			var packedII = 0;
			var packedNodes = new Array(count);
			for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
				var node = nodes[ii];
				if (node !== undefined && ii !== excluding) {
					bitmap |= bit;
					packedNodes[packedII++] = node;
				}
			}
			return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
		}
		function expandNodes(ownerID, nodes, bitmap, including, node) {
			var count = 0;
			var expandedNodes = new Array(SIZE);
			for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
				expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
			}
			expandedNodes[including] = node;
			return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
		}
		function mergeIntoMapWith(map, merger, iterables) {
			var iters = [];
			for (var ii = 0; ii < iterables.length; ii++) {
				var value = iterables[ii];
				var iter = KeyedIterable(value);
				if (!isIterable(value)) {
					iter = iter.map(function (v) {
						return fromJS(v);
					});
				}
				iters.push(iter);
			}
			return mergeIntoCollectionWith(map, merger, iters);
		}
		function deepMerger(existing, value, key) {
			return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
		}
		function deepMergerWith(merger) {
			return function (existing, value, key) {
				if (existing && existing.mergeDeepWith && isIterable(value)) {
					return existing.mergeDeepWith(merger, value);
				}
				var nextValue = merger(existing, value, key);
				return is(existing, nextValue) ? existing : nextValue;
			};
		}
		function mergeIntoCollectionWith(collection, merger, iters) {
			iters = iters.filter(function (x) {
				return x.size !== 0;
			});
			if (iters.length === 0) {
				return collection;
			}
			if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
				return collection.constructor(iters[0]);
			}
			return collection.withMutations(function (collection) {
				var mergeIntoMap = merger ? function (value, key) {
					collection.update(key, NOT_SET, function (existing) {
						return existing === NOT_SET ? value : merger(existing, value, key);
					});
				} : function (value, key) {
					collection.set(key, value);
				};
				for (var ii = 0; ii < iters.length; ii++) {
					iters[ii].forEach(mergeIntoMap);
				}
			});
		}
		function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
			var isNotSet = existing === NOT_SET;
			var step = keyPathIter.next();
			if (step.done) {
				var existingValue = isNotSet ? notSetValue : existing;
				var newValue = updater(existingValue);
				return newValue === existingValue ? existing : newValue;
			}
			invariant(isNotSet || existing && existing.set, "invalid keyPath");
			var key = step.value;
			var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
			var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
			return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
		}
		function popCount(x) {
			x = x - (x >> 1 & 1431655765);
			x = (x & 858993459) + (x >> 2 & 858993459);
			x = x + (x >> 4) & 252645135;
			x = x + (x >> 8);
			x = x + (x >> 16);
			return x & 127;
		}
		function setIn(array, idx, val, canEdit) {
			var newArray = canEdit ? array : arrCopy(array);
			newArray[idx] = val;
			return newArray;
		}
		function spliceIn(array, idx, val, canEdit) {
			var newLen = array.length + 1;
			if (canEdit && idx + 1 === newLen) {
				array[idx] = val;
				return array;
			}
			var newArray = new Array(newLen);
			var after = 0;
			for (var ii = 0; ii < newLen; ii++) {
				if (ii === idx) {
					newArray[ii] = val;
					after = -1;
				} else {
					newArray[ii] = array[ii + after];
				}
			}
			return newArray;
		}
		function spliceOut(array, idx, canEdit) {
			var newLen = array.length - 1;
			if (canEdit && idx === newLen) {
				array.pop();
				return array;
			}
			var newArray = new Array(newLen);
			var after = 0;
			for (var ii = 0; ii < newLen; ii++) {
				if (ii === idx) {
					after = 1;
				}
				newArray[ii] = array[ii + after];
			}
			return newArray;
		}
		var MAX_ARRAY_MAP_SIZE = SIZE / 4;
		var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
		var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
		createClass(List, IndexedCollection);
		function List(value) {
			var empty = emptyList();
			if (value === null || value === undefined) {
				return empty;
			}
			if (isList(value)) {
				return value;
			}
			var iter = IndexedIterable(value);
			var size = iter.size;
			if (size === 0) {
				return empty;
			}
			assertNotInfinite(size);
			if (size > 0 && size < SIZE) {
				return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
			}
			return empty.withMutations(function (list) {
				list.setSize(size);
				iter.forEach(function (v, i) {
					return list.set(i, v);
				});
			});
		}
		List.of = function () {
			return this(arguments);
		};
		List.prototype.toString = function () {
			return this.__toString("List [", "]");
		};
		List.prototype.get = function (index, notSetValue) {
			index = wrapIndex(this, index);
			if (index >= 0 && index < this.size) {
				index += this._origin;
				var node = listNodeFor(this, index);
				return node && node.array[index & MASK];
			}
			return notSetValue;
		};
		List.prototype.set = function (index, value) {
			return updateList(this, index, value);
		};
		List.prototype.remove = function (index) {
			return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
		};
		List.prototype.insert = function (index, value) {
			return this.splice(index, 0, value);
		};
		List.prototype.clear = function () {
			if (this.size === 0) {
				return this;
			}
			if (this.__ownerID) {
				this.size = this._origin = this._capacity = 0;
				this._level = SHIFT;
				this._root = this._tail = null;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return emptyList();
		};
		List.prototype.push = function () {
			var values = arguments;
			var oldSize = this.size;
			return this.withMutations(function (list) {
				setListBounds(list, 0, oldSize + values.length);
				for (var ii = 0; ii < values.length; ii++) {
					list.set(oldSize + ii, values[ii]);
				}
			});
		};
		List.prototype.pop = function () {
			return setListBounds(this, 0, -1);
		};
		List.prototype.unshift = function () {
			var values = arguments;
			return this.withMutations(function (list) {
				setListBounds(list, -values.length);
				for (var ii = 0; ii < values.length; ii++) {
					list.set(ii, values[ii]);
				}
			});
		};
		List.prototype.shift = function () {
			return setListBounds(this, 1);
		};
		List.prototype.merge = function () {
			return mergeIntoListWith(this, undefined, arguments);
		};
		List.prototype.mergeWith = function (merger) {
			var iters = SLICE$0.call(arguments, 1);
			return mergeIntoListWith(this, merger, iters);
		};
		List.prototype.mergeDeep = function () {
			return mergeIntoListWith(this, deepMerger, arguments);
		};
		List.prototype.mergeDeepWith = function (merger) {
			var iters = SLICE$0.call(arguments, 1);
			return mergeIntoListWith(this, deepMergerWith(merger), iters);
		};
		List.prototype.setSize = function (size) {
			return setListBounds(this, 0, size);
		};
		List.prototype.slice = function (begin, end) {
			var size = this.size;
			if (wholeSlice(begin, end, size)) {
				return this;
			}
			return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
		};
		List.prototype.__iterator = function (type, reverse) {
			var index = 0;
			var values = iterateList(this, reverse);
			return new Iterator(function () {
				var value = values();
				return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
			});
		};
		List.prototype.__iterate = function (fn, reverse) {
			var index = 0;
			var values = iterateList(this, reverse);
			var value;
			while ((value = values()) !== DONE) {
				if (fn(value, index++, this) === false) {
					break;
				}
			}
			return index;
		};
		List.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			if (!ownerID) {
				this.__ownerID = ownerID;
				return this;
			}
			return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
		};
		function isList(maybeList) {
			return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
		}
		List.isList = isList;
		var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
		var ListPrototype = List.prototype;
		ListPrototype[IS_LIST_SENTINEL] = true;
		ListPrototype[DELETE] = ListPrototype.remove;
		ListPrototype.setIn = MapPrototype.setIn;
		ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
		ListPrototype.update = MapPrototype.update;
		ListPrototype.updateIn = MapPrototype.updateIn;
		ListPrototype.mergeIn = MapPrototype.mergeIn;
		ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
		ListPrototype.withMutations = MapPrototype.withMutations;
		ListPrototype.asMutable = MapPrototype.asMutable;
		ListPrototype.asImmutable = MapPrototype.asImmutable;
		ListPrototype.wasAltered = MapPrototype.wasAltered;
		function VNode(array, ownerID) {
			this.array = array;
			this.ownerID = ownerID;
		}
		VNode.prototype.removeBefore = function (ownerID, level, index) {
			if (index === level ? 1 << level : 0 || this.array.length === 0) {
				return this;
			}
			var originIndex = index >>> level & MASK;
			if (originIndex >= this.array.length) {
				return new VNode([], ownerID);
			}
			var removingFirst = originIndex === 0;
			var newChild;
			if (level > 0) {
				var oldChild = this.array[originIndex];
				newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
				if (newChild === oldChild && removingFirst) {
					return this;
				}
			}
			if (removingFirst && !newChild) {
				return this;
			}
			var editable = editableVNode(this, ownerID);
			if (!removingFirst) {
				for (var ii = 0; ii < originIndex; ii++) {
					editable.array[ii] = undefined;
				}
			}
			if (newChild) {
				editable.array[originIndex] = newChild;
			}
			return editable;
		};
		VNode.prototype.removeAfter = function (ownerID, level, index) {
			if (index === (level ? 1 << level : 0) || this.array.length === 0) {
				return this;
			}
			var sizeIndex = index - 1 >>> level & MASK;
			if (sizeIndex >= this.array.length) {
				return this;
			}
			var newChild;
			if (level > 0) {
				var oldChild = this.array[sizeIndex];
				newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
				if (newChild === oldChild && sizeIndex === this.array.length - 1) {
					return this;
				}
			}
			var editable = editableVNode(this, ownerID);
			editable.array.splice(sizeIndex + 1);
			if (newChild) {
				editable.array[sizeIndex] = newChild;
			}
			return editable;
		};
		var DONE = {};
		function iterateList(list, reverse) {
			var left = list._origin;
			var right = list._capacity;
			var tailPos = getTailOffset(right);
			var tail = list._tail;
			return iterateNodeOrLeaf(list._root, list._level, 0);
			function iterateNodeOrLeaf(node, level, offset) {
				return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
			}
			function iterateLeaf(node, offset) {
				var array = offset === tailPos ? tail && tail.array : node && node.array;
				var from = offset > left ? 0 : left - offset;
				var to = right - offset;
				if (to > SIZE) {
					to = SIZE;
				}
				return function () {
					if (from === to) {
						return DONE;
					}
					var idx = reverse ? --to : from++;
					return array && array[idx];
				};
			}
			function iterateNode(node, level, offset) {
				var values;
				var array = node && node.array;
				var from = offset > left ? 0 : left - offset >> level;
				var to = (right - offset >> level) + 1;
				if (to > SIZE) {
					to = SIZE;
				}
				return function () {
					do {
						if (values) {
							var value = values();
							if (value !== DONE) {
								return value;
							}
							values = null;
						}
						if (from === to) {
							return DONE;
						}
						var idx = reverse ? --to : from++;
						values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
					} while (true);
				};
			}
		}
		function makeList(origin, capacity, level, root, tail, ownerID, hash) {
			var list = Object.create(ListPrototype);
			list.size = capacity - origin;
			list._origin = origin;
			list._capacity = capacity;
			list._level = level;
			list._root = root;
			list._tail = tail;
			list.__ownerID = ownerID;
			list.__hash = hash;
			list.__altered = false;
			return list;
		}
		var EMPTY_LIST;
		function emptyList() {
			return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
		}
		function updateList(list, index, value) {
			index = wrapIndex(list, index);
			if (index !== index) {
				return list;
			}
			if (index >= list.size || index < 0) {
				return list.withMutations(function (list) {
					index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
				});
			}
			index += list._origin;
			var newTail = list._tail;
			var newRoot = list._root;
			var didAlter = MakeRef(DID_ALTER);
			if (index >= getTailOffset(list._capacity)) {
				newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
			} else {
				newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
			}
			if (!didAlter.value) {
				return list;
			}
			if (list.__ownerID) {
				list._root = newRoot;
				list._tail = newTail;
				list.__hash = undefined;
				list.__altered = true;
				return list;
			}
			return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
		}
		function updateVNode(node, ownerID, level, index, value, didAlter) {
			var idx = index >>> level & MASK;
			var nodeHas = node && idx < node.array.length;
			if (!nodeHas && value === undefined) {
				return node;
			}
			var newNode;
			if (level > 0) {
				var lowerNode = node && node.array[idx];
				var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
				if (newLowerNode === lowerNode) {
					return node;
				}
				newNode = editableVNode(node, ownerID);
				newNode.array[idx] = newLowerNode;
				return newNode;
			}
			if (nodeHas && node.array[idx] === value) {
				return node;
			}
			SetRef(didAlter);
			newNode = editableVNode(node, ownerID);
			if (value === undefined && idx === newNode.array.length - 1) {
				newNode.array.pop();
			} else {
				newNode.array[idx] = value;
			}
			return newNode;
		}
		function editableVNode(node, ownerID) {
			if (ownerID && node && ownerID === node.ownerID) {
				return node;
			}
			return new VNode(node ? node.array.slice() : [], ownerID);
		}
		function listNodeFor(list, rawIndex) {
			if (rawIndex >= getTailOffset(list._capacity)) {
				return list._tail;
			}
			if (rawIndex < 1 << list._level + SHIFT) {
				var node = list._root;
				var level = list._level;
				while (node && level > 0) {
					node = node.array[rawIndex >>> level & MASK];
					level -= SHIFT;
				}
				return node;
			}
		}
		function setListBounds(list, begin, end) {
			if (begin !== undefined) {
				begin = begin | 0;
			}
			if (end !== undefined) {
				end = end | 0;
			}
			var owner = list.__ownerID || new OwnerID;
			var oldOrigin = list._origin;
			var oldCapacity = list._capacity;
			var newOrigin = oldOrigin + begin;
			var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
			if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
				return list;
			}
			if (newOrigin >= newCapacity) {
				return list.clear();
			}
			var newLevel = list._level;
			var newRoot = list._root;
			var offsetShift = 0;
			while (newOrigin + offsetShift < 0) {
				newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
				newLevel += SHIFT;
				offsetShift += 1 << newLevel;
			}
			if (offsetShift) {
				newOrigin += offsetShift;
				oldOrigin += offsetShift;
				newCapacity += offsetShift;
				oldCapacity += offsetShift;
			}
			var oldTailOffset = getTailOffset(oldCapacity);
			var newTailOffset = getTailOffset(newCapacity);
			while (newTailOffset >= 1 << newLevel + SHIFT) {
				newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
				newLevel += SHIFT;
			}
			var oldTail = list._tail;
			var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
			if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
				newRoot = editableVNode(newRoot, owner);
				var node = newRoot;
				for (var level = newLevel; level > SHIFT; level -= SHIFT) {
					var idx = oldTailOffset >>> level & MASK;
					node = node.array[idx] = editableVNode(node.array[idx], owner);
				}
				node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
			}
			if (newCapacity < oldCapacity) {
				newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
			}
			if (newOrigin >= newTailOffset) {
				newOrigin -= newTailOffset;
				newCapacity -= newTailOffset;
				newLevel = SHIFT;
				newRoot = null;
				newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
			} else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
				offsetShift = 0;
				while (newRoot) {
					var beginIndex = newOrigin >>> newLevel & MASK;
					if (beginIndex !== newTailOffset >>> newLevel & MASK) {
						break;
					}
					if (beginIndex) {
						offsetShift += (1 << newLevel) * beginIndex;
					}
					newLevel -= SHIFT;
					newRoot = newRoot.array[beginIndex];
				}
				if (newRoot && newOrigin > oldOrigin) {
					newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
				}
				if (newRoot && newTailOffset < oldTailOffset) {
					newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
				}
				if (offsetShift) {
					newOrigin -= offsetShift;
					newCapacity -= offsetShift;
				}
			}
			if (list.__ownerID) {
				list.size = newCapacity - newOrigin;
				list._origin = newOrigin;
				list._capacity = newCapacity;
				list._level = newLevel;
				list._root = newRoot;
				list._tail = newTail;
				list.__hash = undefined;
				list.__altered = true;
				return list;
			}
			return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
		}
		function mergeIntoListWith(list, merger, iterables) {
			var iters = [];
			var maxSize = 0;
			for (var ii = 0; ii < iterables.length; ii++) {
				var value = iterables[ii];
				var iter = IndexedIterable(value);
				if (iter.size > maxSize) {
					maxSize = iter.size;
				}
				if (!isIterable(value)) {
					iter = iter.map(function (v) {
						return fromJS(v);
					});
				}
				iters.push(iter);
			}
			if (maxSize > list.size) {
				list = list.setSize(maxSize);
			}
			return mergeIntoCollectionWith(list, merger, iters);
		}
		function getTailOffset(size) {
			return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
		}
		createClass(OrderedMap, Map);
		function OrderedMap(value) {
			return value === null || value === undefined ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function (map) {
				var iter = KeyedIterable(value);
				assertNotInfinite(iter.size);
				iter.forEach(function (v, k) {
					return map.set(k, v);
				});
			});
		}
		OrderedMap.of = function () {
			return this(arguments);
		};
		OrderedMap.prototype.toString = function () {
			return this.__toString("OrderedMap {", "}");
		};
		OrderedMap.prototype.get = function (k, notSetValue) {
			var index = this._map.get(k);
			return index !== undefined ? this._list.get(index)[1] : notSetValue;
		};
		OrderedMap.prototype.clear = function () {
			if (this.size === 0) {
				return this;
			}
			if (this.__ownerID) {
				this.size = 0;
				this._map.clear();
				this._list.clear();
				return this;
			}
			return emptyOrderedMap();
		};
		OrderedMap.prototype.set = function (k, v) {
			return updateOrderedMap(this, k, v);
		};
		OrderedMap.prototype.remove = function (k) {
			return updateOrderedMap(this, k, NOT_SET);
		};
		OrderedMap.prototype.wasAltered = function () {
			return this._map.wasAltered() || this._list.wasAltered();
		};
		OrderedMap.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			return this._list.__iterate(function (entry) {
				return entry && fn(entry[1], entry[0], this$0);
			}, reverse);
		};
		OrderedMap.prototype.__iterator = function (type, reverse) {
			return this._list.fromEntrySeq().__iterator(type, reverse);
		};
		OrderedMap.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			var newMap = this._map.__ensureOwner(ownerID);
			var newList = this._list.__ensureOwner(ownerID);
			if (!ownerID) {
				this.__ownerID = ownerID;
				this._map = newMap;
				this._list = newList;
				return this;
			}
			return makeOrderedMap(newMap, newList, ownerID, this.__hash);
		};
		function isOrderedMap(maybeOrderedMap) {
			return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
		}
		OrderedMap.isOrderedMap = isOrderedMap;
		OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
		OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
		function makeOrderedMap(map, list, ownerID, hash) {
			var omap = Object.create(OrderedMap.prototype);
			omap.size = map ? map.size : 0;
			omap._map = map;
			omap._list = list;
			omap.__ownerID = ownerID;
			omap.__hash = hash;
			return omap;
		}
		var EMPTY_ORDERED_MAP;
		function emptyOrderedMap() {
			return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
		}
		function updateOrderedMap(omap, k, v) {
			var map = omap._map;
			var list = omap._list;
			var i = map.get(k);
			var has = i !== undefined;
			var newMap;
			var newList;
			if (v === NOT_SET) {
				if (!has) {
					return omap;
				}
				if (list.size >= SIZE && list.size >= map.size * 2) {
					newList = list.filter(function (entry, idx) {
						return entry !== undefined && i !== idx;
					});
					newMap = newList.toKeyedSeq().map(function (entry) {
						return entry[0];
					}).flip().toMap();
					if (omap.__ownerID) {
						newMap.__ownerID = newList.__ownerID = omap.__ownerID;
					}
				} else {
					newMap = map.remove(k);
					newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
				}
			} else {
				if (has) {
					if (v === list.get(i)[1]) {
						return omap;
					}
					newMap = map;
					newList = list.set(i, [k, v]);
				} else {
					newMap = map.set(k, list.size);
					newList = list.set(list.size, [k, v]);
				}
			}
			if (omap.__ownerID) {
				omap.size = newMap.size;
				omap._map = newMap;
				omap._list = newList;
				omap.__hash = undefined;
				return omap;
			}
			return makeOrderedMap(newMap, newList);
		}
		createClass(ToKeyedSequence, KeyedSeq);
		function ToKeyedSequence(indexed, useKeys) {
			this._iter = indexed;
			this._useKeys = useKeys;
			this.size = indexed.size;
		}
		ToKeyedSequence.prototype.get = function (key, notSetValue) {
			return this._iter.get(key, notSetValue);
		};
		ToKeyedSequence.prototype.has = function (key) {
			return this._iter.has(key);
		};
		ToKeyedSequence.prototype.valueSeq = function () {
			return this._iter.valueSeq();
		};
		ToKeyedSequence.prototype.reverse = function () {
			var this$0 = this;
			var reversedSequence = reverseFactory(this, true);
			if (!this._useKeys) {
				reversedSequence.valueSeq = function () {
					return this$0._iter.toSeq().reverse();
				};
			}
			return reversedSequence;
		};
		ToKeyedSequence.prototype.map = function (mapper, context) {
			var this$0 = this;
			var mappedSequence = mapFactory(this, mapper, context);
			if (!this._useKeys) {
				mappedSequence.valueSeq = function () {
					return this$0._iter.toSeq().map(mapper, context);
				};
			}
			return mappedSequence;
		};
		ToKeyedSequence.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			var ii;
			return this._iter.__iterate(this._useKeys ? function (v, k) {
				return fn(v, k, this$0);
			} : (ii = reverse ? resolveSize(this) : 0, function (v) {
				return fn(v, reverse ? --ii : ii++, this$0);
			}), reverse);
		};
		ToKeyedSequence.prototype.__iterator = function (type, reverse) {
			if (this._useKeys) {
				return this._iter.__iterator(type, reverse);
			}
			var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
			var ii = reverse ? resolveSize(this) : 0;
			return new Iterator(function () {
				var step = iterator.next();
				return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
			});
		};
		ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
		createClass(ToIndexedSequence, IndexedSeq);
		function ToIndexedSequence(iter) {
			this._iter = iter;
			this.size = iter.size;
		}
		ToIndexedSequence.prototype.includes = function (value) {
			return this._iter.includes(value);
		};
		ToIndexedSequence.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			var iterations = 0;
			return this._iter.__iterate(function (v) {
				return fn(v, iterations++, this$0);
			}, reverse);
		};
		ToIndexedSequence.prototype.__iterator = function (type, reverse) {
			var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
			var iterations = 0;
			return new Iterator(function () {
				var step = iterator.next();
				return step.done ? step : iteratorValue(type, iterations++, step.value, step);
			});
		};
		createClass(ToSetSequence, SetSeq);
		function ToSetSequence(iter) {
			this._iter = iter;
			this.size = iter.size;
		}
		ToSetSequence.prototype.has = function (key) {
			return this._iter.includes(key);
		};
		ToSetSequence.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			return this._iter.__iterate(function (v) {
				return fn(v, v, this$0);
			}, reverse);
		};
		ToSetSequence.prototype.__iterator = function (type, reverse) {
			var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
			return new Iterator(function () {
				var step = iterator.next();
				return step.done ? step : iteratorValue(type, step.value, step.value, step);
			});
		};
		createClass(FromEntriesSequence, KeyedSeq);
		function FromEntriesSequence(entries) {
			this._iter = entries;
			this.size = entries.size;
		}
		FromEntriesSequence.prototype.entrySeq = function () {
			return this._iter.toSeq();
		};
		FromEntriesSequence.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			return this._iter.__iterate(function (entry) {
				if (entry) {
					validateEntry(entry);
					var indexedIterable = isIterable(entry);
					return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
				}
			}, reverse);
		};
		FromEntriesSequence.prototype.__iterator = function (type, reverse) {
			var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
			return new Iterator(function () {
				while (true) {
					var step = iterator.next();
					if (step.done) {
						return step;
					}
					var entry = step.value;
					if (entry) {
						validateEntry(entry);
						var indexedIterable = isIterable(entry);
						return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
					}
				}
			});
		};
		ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
		function flipFactory(iterable) {
			var flipSequence = makeSequence(iterable);
			flipSequence._iter = iterable;
			flipSequence.size = iterable.size;
			flipSequence.flip = function () {
				return iterable;
			};
			flipSequence.reverse = function () {
				var reversedSequence = iterable.reverse.apply(this);
				reversedSequence.flip = function () {
					return iterable.reverse();
				};
				return reversedSequence;
			};
			flipSequence.has = function (key) {
				return iterable.includes(key);
			};
			flipSequence.includes = function (key) {
				return iterable.has(key);
			};
			flipSequence.cacheResult = cacheResultThrough;
			flipSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				return iterable.__iterate(function (v, k) {
					return fn(k, v, this$0) !== false;
				}, reverse);
			};
			flipSequence.__iteratorUncached = function (type, reverse) {
				if (type === ITERATE_ENTRIES) {
					var iterator = iterable.__iterator(type, reverse);
					return new Iterator(function () {
						var step = iterator.next();
						if (!step.done) {
							var k = step.value[0];
							step.value[0] = step.value[1];
							step.value[1] = k;
						}
						return step;
					});
				}
				return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
			};
			return flipSequence;
		}
		function mapFactory(iterable, mapper, context) {
			var mappedSequence = makeSequence(iterable);
			mappedSequence.size = iterable.size;
			mappedSequence.has = function (key) {
				return iterable.has(key);
			};
			mappedSequence.get = function (key, notSetValue) {
				var v = iterable.get(key, NOT_SET);
				return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
			};
			mappedSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				return iterable.__iterate(function (v, k, c) {
					return fn(mapper.call(context, v, k, c), k, this$0) !== false;
				}, reverse);
			};
			mappedSequence.__iteratorUncached = function (type, reverse) {
				var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
				return new Iterator(function () {
					var step = iterator.next();
					if (step.done) {
						return step;
					}
					var entry = step.value;
					var key = entry[0];
					return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
				});
			};
			return mappedSequence;
		}
		function reverseFactory(iterable, useKeys) {
			var reversedSequence = makeSequence(iterable);
			reversedSequence._iter = iterable;
			reversedSequence.size = iterable.size;
			reversedSequence.reverse = function () {
				return iterable;
			};
			if (iterable.flip) {
				reversedSequence.flip = function () {
					var flipSequence = flipFactory(iterable);
					flipSequence.reverse = function () {
						return iterable.flip();
					};
					return flipSequence;
				};
			}
			reversedSequence.get = function (key, notSetValue) {
				return iterable.get(useKeys ? key : -1 - key, notSetValue);
			};
			reversedSequence.has = function (key) {
				return iterable.has(useKeys ? key : -1 - key);
			};
			reversedSequence.includes = function (value) {
				return iterable.includes(value);
			};
			reversedSequence.cacheResult = cacheResultThrough;
			reversedSequence.__iterate = function (fn, reverse) {
				var this$0 = this;
				return iterable.__iterate(function (v, k) {
					return fn(v, k, this$0);
				}, !reverse);
			};
			reversedSequence.__iterator = function (type, reverse) {
				return iterable.__iterator(type, !reverse);
			};
			return reversedSequence;
		}
		function filterFactory(iterable, predicate, context, useKeys) {
			var filterSequence = makeSequence(iterable);
			if (useKeys) {
				filterSequence.has = function (key) {
					var v = iterable.get(key, NOT_SET);
					return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
				};
				filterSequence.get = function (key, notSetValue) {
					var v = iterable.get(key, NOT_SET);
					return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
				};
			}
			filterSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				var iterations = 0;
				iterable.__iterate(function (v, k, c) {
					if (predicate.call(context, v, k, c)) {
						iterations++;
						return fn(v, useKeys ? k : iterations - 1, this$0);
					}
				}, reverse);
				return iterations;
			};
			filterSequence.__iteratorUncached = function (type, reverse) {
				var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
				var iterations = 0;
				return new Iterator(function () {
					while (true) {
						var step = iterator.next();
						if (step.done) {
							return step;
						}
						var entry = step.value;
						var key = entry[0];
						var value = entry[1];
						if (predicate.call(context, value, key, iterable)) {
							return iteratorValue(type, useKeys ? key : iterations++, value, step);
						}
					}
				});
			};
			return filterSequence;
		}
		function countByFactory(iterable, grouper, context) {
			var groups = Map().asMutable();
			iterable.__iterate(function (v, k) {
				groups.update(grouper.call(context, v, k, iterable), 0, function (a) {
					return a + 1;
				});
			});
			return groups.asImmutable();
		}
		function groupByFactory(iterable, grouper, context) {
			var isKeyedIter = isKeyed(iterable);
			var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
			iterable.__iterate(function (v, k) {
				groups.update(grouper.call(context, v, k, iterable), function (a) {
					return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
				});
			});
			var coerce = iterableClass(iterable);
			return groups.map(function (arr) {
				return reify(iterable, coerce(arr));
			});
		}
		function sliceFactory(iterable, begin, end, useKeys) {
			var originalSize = iterable.size;
			if (begin !== undefined) {
				begin = begin | 0;
			}
			if (end !== undefined) {
				if (end === Infinity) {
					end = originalSize;
				} else {
					end = end | 0;
				}
			}
			if (wholeSlice(begin, end, originalSize)) {
				return iterable;
			}
			var resolvedBegin = resolveBegin(begin, originalSize);
			var resolvedEnd = resolveEnd(end, originalSize);
			if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
				return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
			}
			var resolvedSize = resolvedEnd - resolvedBegin;
			var sliceSize;
			if (resolvedSize === resolvedSize) {
				sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
			}
			var sliceSeq = makeSequence(iterable);
			sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
			if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
				sliceSeq.get = function (index, notSetValue) {
					index = wrapIndex(this, index);
					return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
				};
			}
			sliceSeq.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				if (sliceSize === 0) {
					return 0;
				}
				if (reverse) {
					return this.cacheResult().__iterate(fn, reverse);
				}
				var skipped = 0;
				var isSkipping = true;
				var iterations = 0;
				iterable.__iterate(function (v, k) {
					if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
						iterations++;
						return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
					}
				});
				return iterations;
			};
			sliceSeq.__iteratorUncached = function (type, reverse) {
				if (sliceSize !== 0 && reverse) {
					return this.cacheResult().__iterator(type, reverse);
				}
				var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
				var skipped = 0;
				var iterations = 0;
				return new Iterator(function () {
					while (skipped++ < resolvedBegin) {
						iterator.next();
					}
					if (++iterations > sliceSize) {
						return iteratorDone();
					}
					var step = iterator.next();
					if (useKeys || type === ITERATE_VALUES) {
						return step;
					} else if (type === ITERATE_KEYS) {
						return iteratorValue(type, iterations - 1, undefined, step);
					} else {
						return iteratorValue(type, iterations - 1, step.value[1], step);
					}
				});
			};
			return sliceSeq;
		}
		function takeWhileFactory(iterable, predicate, context) {
			var takeSequence = makeSequence(iterable);
			takeSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				if (reverse) {
					return this.cacheResult().__iterate(fn, reverse);
				}
				var iterations = 0;
				iterable.__iterate(function (v, k, c) {
					return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
				});
				return iterations;
			};
			takeSequence.__iteratorUncached = function (type, reverse) {
				var this$0 = this;
				if (reverse) {
					return this.cacheResult().__iterator(type, reverse);
				}
				var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
				var iterating = true;
				return new Iterator(function () {
					if (!iterating) {
						return iteratorDone();
					}
					var step = iterator.next();
					if (step.done) {
						return step;
					}
					var entry = step.value;
					var k = entry[0];
					var v = entry[1];
					if (!predicate.call(context, v, k, this$0)) {
						iterating = false;
						return iteratorDone();
					}
					return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
				});
			};
			return takeSequence;
		}
		function skipWhileFactory(iterable, predicate, context, useKeys) {
			var skipSequence = makeSequence(iterable);
			skipSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				if (reverse) {
					return this.cacheResult().__iterate(fn, reverse);
				}
				var isSkipping = true;
				var iterations = 0;
				iterable.__iterate(function (v, k, c) {
					if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
						iterations++;
						return fn(v, useKeys ? k : iterations - 1, this$0);
					}
				});
				return iterations;
			};
			skipSequence.__iteratorUncached = function (type, reverse) {
				var this$0 = this;
				if (reverse) {
					return this.cacheResult().__iterator(type, reverse);
				}
				var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
				var skipping = true;
				var iterations = 0;
				return new Iterator(function () {
					var step, k, v;
					do {
						step = iterator.next();
						if (step.done) {
							if (useKeys || type === ITERATE_VALUES) {
								return step;
							} else if (type === ITERATE_KEYS) {
								return iteratorValue(type, iterations++, undefined, step);
							} else {
								return iteratorValue(type, iterations++, step.value[1], step);
							}
						}
						var entry = step.value;
						k = entry[0];
						v = entry[1];
						skipping && (skipping = predicate.call(context, v, k, this$0));
					} while (skipping);
					return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
				});
			};
			return skipSequence;
		}
		function concatFactory(iterable, values) {
			var isKeyedIterable = isKeyed(iterable);
			var iters = [iterable].concat(values).map(function (v) {
				if (!isIterable(v)) {
					v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
				} else if (isKeyedIterable) {
					v = KeyedIterable(v);
				}
				return v;
			}).filter(function (v) {
				return v.size !== 0;
			});
			if (iters.length === 0) {
				return iterable;
			}
			if (iters.length === 1) {
				var singleton = iters[0];
				if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
					return singleton;
				}
			}
			var concatSeq = new ArraySeq(iters);
			if (isKeyedIterable) {
				concatSeq = concatSeq.toKeyedSeq();
			} else if (!isIndexed(iterable)) {
				concatSeq = concatSeq.toSetSeq();
			}
			concatSeq = concatSeq.flatten(true);
			concatSeq.size = iters.reduce(function (sum, seq) {
				if (sum !== undefined) {
					var size = seq.size;
					if (size !== undefined) {
						return sum + size;
					}
				}
			}, 0);
			return concatSeq;
		}
		function flattenFactory(iterable, depth, useKeys) {
			var flatSequence = makeSequence(iterable);
			flatSequence.__iterateUncached = function (fn, reverse) {
				var iterations = 0;
				var stopped = false;
				function flatDeep(iter, currentDepth) {
					var this$0 = this;
					iter.__iterate(function (v, k) {
						if ((!depth || currentDepth < depth) && isIterable(v)) {
							flatDeep(v, currentDepth + 1);
						} else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
							stopped = true;
						}
						return !stopped;
					}, reverse);
				}
				flatDeep(iterable, 0);
				return iterations;
			};
			flatSequence.__iteratorUncached = function (type, reverse) {
				var iterator = iterable.__iterator(type, reverse);
				var stack = [];
				var iterations = 0;
				return new Iterator(function () {
					while (iterator) {
						var step = iterator.next();
						if (step.done !== false) {
							iterator = stack.pop();
							continue;
						}
						var v = step.value;
						if (type === ITERATE_ENTRIES) {
							v = v[1];
						}
						if ((!depth || stack.length < depth) && isIterable(v)) {
							stack.push(iterator);
							iterator = v.__iterator(type, reverse);
						} else {
							return useKeys ? step : iteratorValue(type, iterations++, v, step);
						}
					}
					return iteratorDone();
				});
			};
			return flatSequence;
		}
		function flatMapFactory(iterable, mapper, context) {
			var coerce = iterableClass(iterable);
			return iterable.toSeq().map(function (v, k) {
				return coerce(mapper.call(context, v, k, iterable));
			}).flatten(true);
		}
		function interposeFactory(iterable, separator) {
			var interposedSequence = makeSequence(iterable);
			interposedSequence.size = iterable.size && iterable.size * 2 - 1;
			interposedSequence.__iterateUncached = function (fn, reverse) {
				var this$0 = this;
				var iterations = 0;
				iterable.__iterate(function (v, k) {
					return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
				}, reverse);
				return iterations;
			};
			interposedSequence.__iteratorUncached = function (type, reverse) {
				var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
				var iterations = 0;
				var step;
				return new Iterator(function () {
					if (!step || iterations % 2) {
						step = iterator.next();
						if (step.done) {
							return step;
						}
					}
					return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
				});
			};
			return interposedSequence;
		}
		function sortFactory(iterable, comparator, mapper) {
			if (!comparator) {
				comparator = defaultComparator;
			}
			var isKeyedIterable = isKeyed(iterable);
			var index = 0;
			var entries = iterable.toSeq().map(function (v, k) {
				return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
			}).toArray();
			entries.sort(function (a, b) {
				return comparator(a[3], b[3]) || a[2] - b[2];
			}).forEach(isKeyedIterable ? function (v, i) {
				entries[i].length = 2;
			} : function (v, i) {
				entries[i] = v[1];
			});
			return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
		}
		function maxFactory(iterable, comparator, mapper) {
			if (!comparator) {
				comparator = defaultComparator;
			}
			if (mapper) {
				var entry = iterable.toSeq().map(function (v, k) {
					return [v, mapper(v, k, iterable)];
				}).reduce(function (a, b) {
					return maxCompare(comparator, a[1], b[1]) ? b : a;
				});
				return entry && entry[0];
			} else {
				return iterable.reduce(function (a, b) {
					return maxCompare(comparator, a, b) ? b : a;
				});
			}
		}
		function maxCompare(comparator, a, b) {
			var comp = comparator(b, a);
			return comp === 0 && b !== a && (b === undefined || b === null || b !== b) || comp > 0;
		}
		function zipWithFactory(keyIter, zipper, iters) {
			var zipSequence = makeSequence(keyIter);
			zipSequence.size = new ArraySeq(iters).map(function (i) {
				return i.size;
			}).min();
			zipSequence.__iterate = function (fn, reverse) {
				var iterator = this.__iterator(ITERATE_VALUES, reverse);
				var step;
				var iterations = 0;
				while (!(step = iterator.next()).done) {
					if (fn(step.value, iterations++, this) === false) {
						break;
					}
				}
				return iterations;
			};
			zipSequence.__iteratorUncached = function (type, reverse) {
				var iterators = iters.map(function (i) {
					return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
				});
				var iterations = 0;
				var isDone = false;
				return new Iterator(function () {
					var steps;
					if (!isDone) {
						steps = iterators.map(function (i) {
							return i.next();
						});
						isDone = steps.some(function (s) {
							return s.done;
						});
					}
					if (isDone) {
						return iteratorDone();
					}
					return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function (s) {
						return s.value;
					})));
				});
			};
			return zipSequence;
		}
		function reify(iter, seq) {
			return isSeq(iter) ? seq : iter.constructor(seq);
		}
		function validateEntry(entry) {
			if (entry !== Object(entry)) {
				throw new TypeError("Expected [K, V] tuple: " + entry);
			}
		}
		function resolveSize(iter) {
			assertNotInfinite(iter.size);
			return ensureSize(iter);
		}
		function iterableClass(iterable) {
			return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
		}
		function makeSequence(iterable) {
			return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
		}
		function cacheResultThrough() {
			if (this._iter.cacheResult) {
				this._iter.cacheResult();
				this.size = this._iter.size;
				return this;
			} else {
				return Seq.prototype.cacheResult.call(this);
			}
		}
		function defaultComparator(a, b) {
			return a > b ? 1 : a < b ? -1 : 0;
		}
		function forceIterator(keyPath) {
			var iter = getIterator(keyPath);
			if (!iter) {
				if (!isArrayLike(keyPath)) {
					throw new TypeError("Expected iterable or array-like: " + keyPath);
				}
				iter = getIterator(Iterable(keyPath));
			}
			return iter;
		}
		createClass(Record, KeyedCollection);
		function Record(defaultValues, name) {
			var hasInitialized;
			var RecordType = function Record(values) {
				if (values instanceof RecordType) {
					return values;
				}
				if (!(this instanceof RecordType)) {
					return new RecordType(values);
				}
				if (!hasInitialized) {
					hasInitialized = true;
					var keys = Object.keys(defaultValues);
					setProps(RecordTypePrototype, keys);
					RecordTypePrototype.size = keys.length;
					RecordTypePrototype._name = name;
					RecordTypePrototype._keys = keys;
					RecordTypePrototype._defaultValues = defaultValues;
				}
				this._map = Map(values);
			};
			var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
			RecordTypePrototype.constructor = RecordType;
			return RecordType;
		}
		Record.prototype.toString = function () {
			return this.__toString(recordName(this) + " {", "}");
		};
		Record.prototype.has = function (k) {
			return this._defaultValues.hasOwnProperty(k);
		};
		Record.prototype.get = function (k, notSetValue) {
			if (!this.has(k)) {
				return notSetValue;
			}
			var defaultVal = this._defaultValues[k];
			return this._map ? this._map.get(k, defaultVal) : defaultVal;
		};
		Record.prototype.clear = function () {
			if (this.__ownerID) {
				this._map && this._map.clear();
				return this;
			}
			var RecordType = this.constructor;
			return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
		};
		Record.prototype.set = function (k, v) {
			if (!this.has(k)) {
				throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
			}
			if (this._map && !this._map.has(k)) {
				var defaultVal = this._defaultValues[k];
				if (v === defaultVal) {
					return this;
				}
			}
			var newMap = this._map && this._map.set(k, v);
			if (this.__ownerID || newMap === this._map) {
				return this;
			}
			return makeRecord(this, newMap);
		};
		Record.prototype.remove = function (k) {
			if (!this.has(k)) {
				return this;
			}
			var newMap = this._map && this._map.remove(k);
			if (this.__ownerID || newMap === this._map) {
				return this;
			}
			return makeRecord(this, newMap);
		};
		Record.prototype.wasAltered = function () {
			return this._map.wasAltered();
		};
		Record.prototype.__iterator = function (type, reverse) {
			var this$0 = this;
			return KeyedIterable(this._defaultValues).map(function (_, k) {
				return this$0.get(k);
			}).__iterator(type, reverse);
		};
		Record.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			return KeyedIterable(this._defaultValues).map(function (_, k) {
				return this$0.get(k);
			}).__iterate(fn, reverse);
		};
		Record.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			var newMap = this._map && this._map.__ensureOwner(ownerID);
			if (!ownerID) {
				this.__ownerID = ownerID;
				this._map = newMap;
				return this;
			}
			return makeRecord(this, newMap, ownerID);
		};
		var RecordPrototype = Record.prototype;
		RecordPrototype[DELETE] = RecordPrototype.remove;
		RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
		RecordPrototype.merge = MapPrototype.merge;
		RecordPrototype.mergeWith = MapPrototype.mergeWith;
		RecordPrototype.mergeIn = MapPrototype.mergeIn;
		RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
		RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
		RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
		RecordPrototype.setIn = MapPrototype.setIn;
		RecordPrototype.update = MapPrototype.update;
		RecordPrototype.updateIn = MapPrototype.updateIn;
		RecordPrototype.withMutations = MapPrototype.withMutations;
		RecordPrototype.asMutable = MapPrototype.asMutable;
		RecordPrototype.asImmutable = MapPrototype.asImmutable;
		function makeRecord(likeRecord, map, ownerID) {
			var record = Object.create(Object.getPrototypeOf(likeRecord));
			record._map = map;
			record.__ownerID = ownerID;
			return record;
		}
		function recordName(record) {
			return record._name || record.constructor.name || "Record";
		}
		function setProps(prototype, names) {
			try {
				names.forEach(setProp.bind(undefined, prototype));
			} catch (error) { }
		}
		function setProp(prototype, name) {
			Object.defineProperty(prototype, name, {
				get: function () {
					return this.get(name);
				},
				set: function (value) {
					invariant(this.__ownerID, "Cannot set on an immutable record.");
					this.set(name, value);
				}
			});
		}
		createClass(Set, SetCollection);
		function Set(value) {
			return value === null || value === undefined ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function (set) {
				var iter = SetIterable(value);
				assertNotInfinite(iter.size);
				iter.forEach(function (v) {
					return set.add(v);
				});
			});
		}
		Set.of = function () {
			return this(arguments);
		};
		Set.fromKeys = function (value) {
			return this(KeyedIterable(value).keySeq());
		};
		Set.prototype.toString = function () {
			return this.__toString("Set {", "}");
		};
		Set.prototype.has = function (value) {
			return this._map.has(value);
		};
		Set.prototype.add = function (value) {
			return updateSet(this, this._map.set(value, true));
		};
		Set.prototype.remove = function (value) {
			return updateSet(this, this._map.remove(value));
		};
		Set.prototype.clear = function () {
			return updateSet(this, this._map.clear());
		};
		Set.prototype.union = function () {
			var iters = SLICE$0.call(arguments, 0);
			iters = iters.filter(function (x) {
				return x.size !== 0;
			});
			if (iters.length === 0) {
				return this;
			}
			if (this.size === 0 && !this.__ownerID && iters.length === 1) {
				return this.constructor(iters[0]);
			}
			return this.withMutations(function (set) {
				for (var ii = 0; ii < iters.length; ii++) {
					SetIterable(iters[ii]).forEach(function (value) {
						return set.add(value);
					});
				}
			});
		};
		Set.prototype.intersect = function () {
			var iters = SLICE$0.call(arguments, 0);
			if (iters.length === 0) {
				return this;
			}
			iters = iters.map(function (iter) {
				return SetIterable(iter);
			});
			var originalSet = this;
			return this.withMutations(function (set) {
				originalSet.forEach(function (value) {
					if (!iters.every(function (iter) {
						return iter.includes(value);
					})) {
						set.remove(value);
					}
				});
			});
		};
		Set.prototype.subtract = function () {
			var iters = SLICE$0.call(arguments, 0);
			if (iters.length === 0) {
				return this;
			}
			iters = iters.map(function (iter) {
				return SetIterable(iter);
			});
			var originalSet = this;
			return this.withMutations(function (set) {
				originalSet.forEach(function (value) {
					if (iters.some(function (iter) {
						return iter.includes(value);
					})) {
						set.remove(value);
					}
				});
			});
		};
		Set.prototype.merge = function () {
			return this.union.apply(this, arguments);
		};
		Set.prototype.mergeWith = function (merger) {
			var iters = SLICE$0.call(arguments, 1);
			return this.union.apply(this, iters);
		};
		Set.prototype.sort = function (comparator) {
			return OrderedSet(sortFactory(this, comparator));
		};
		Set.prototype.sortBy = function (mapper, comparator) {
			return OrderedSet(sortFactory(this, comparator, mapper));
		};
		Set.prototype.wasAltered = function () {
			return this._map.wasAltered();
		};
		Set.prototype.__iterate = function (fn, reverse) {
			var this$0 = this;
			return this._map.__iterate(function (_, k) {
				return fn(k, k, this$0);
			}, reverse);
		};
		Set.prototype.__iterator = function (type, reverse) {
			return this._map.map(function (_, k) {
				return k;
			}).__iterator(type, reverse);
		};
		Set.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			var newMap = this._map.__ensureOwner(ownerID);
			if (!ownerID) {
				this.__ownerID = ownerID;
				this._map = newMap;
				return this;
			}
			return this.__make(newMap, ownerID);
		};
		function isSet(maybeSet) {
			return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
		}
		Set.isSet = isSet;
		var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
		var SetPrototype = Set.prototype;
		SetPrototype[IS_SET_SENTINEL] = true;
		SetPrototype[DELETE] = SetPrototype.remove;
		SetPrototype.mergeDeep = SetPrototype.merge;
		SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
		SetPrototype.withMutations = MapPrototype.withMutations;
		SetPrototype.asMutable = MapPrototype.asMutable;
		SetPrototype.asImmutable = MapPrototype.asImmutable;
		SetPrototype.__empty = emptySet;
		SetPrototype.__make = makeSet;
		function updateSet(set, newMap) {
			if (set.__ownerID) {
				set.size = newMap.size;
				set._map = newMap;
				return set;
			}
			return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
		}
		function makeSet(map, ownerID) {
			var set = Object.create(SetPrototype);
			set.size = map ? map.size : 0;
			set._map = map;
			set.__ownerID = ownerID;
			return set;
		}
		var EMPTY_SET;
		function emptySet() {
			return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
		}
		createClass(OrderedSet, Set);
		function OrderedSet(value) {
			return value === null || value === undefined ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function (set) {
				var iter = SetIterable(value);
				assertNotInfinite(iter.size);
				iter.forEach(function (v) {
					return set.add(v);
				});
			});
		}
		OrderedSet.of = function () {
			return this(arguments);
		};
		OrderedSet.fromKeys = function (value) {
			return this(KeyedIterable(value).keySeq());
		};
		OrderedSet.prototype.toString = function () {
			return this.__toString("OrderedSet {", "}");
		};
		function isOrderedSet(maybeOrderedSet) {
			return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
		}
		OrderedSet.isOrderedSet = isOrderedSet;
		var OrderedSetPrototype = OrderedSet.prototype;
		OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
		OrderedSetPrototype.__empty = emptyOrderedSet;
		OrderedSetPrototype.__make = makeOrderedSet;
		function makeOrderedSet(map, ownerID) {
			var set = Object.create(OrderedSetPrototype);
			set.size = map ? map.size : 0;
			set._map = map;
			set.__ownerID = ownerID;
			return set;
		}
		var EMPTY_ORDERED_SET;
		function emptyOrderedSet() {
			return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
		}
		createClass(Stack, IndexedCollection);
		function Stack(value) {
			return value === null || value === undefined ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
		}
		Stack.of = function () {
			return this(arguments);
		};
		Stack.prototype.toString = function () {
			return this.__toString("Stack [", "]");
		};
		Stack.prototype.get = function (index, notSetValue) {
			var head = this._head;
			index = wrapIndex(this, index);
			while (head && index--) {
				head = head.next;
			}
			return head ? head.value : notSetValue;
		};
		Stack.prototype.peek = function () {
			return this._head && this._head.value;
		};
		Stack.prototype.push = function () {
			if (arguments.length === 0) {
				return this;
			}
			var newSize = this.size + arguments.length;
			var head = this._head;
			for (var ii = arguments.length - 1; ii >= 0; ii--) {
				head = {
					value: arguments[ii],
					next: head
				};
			}
			if (this.__ownerID) {
				this.size = newSize;
				this._head = head;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return makeStack(newSize, head);
		};
		Stack.prototype.pushAll = function (iter) {
			iter = IndexedIterable(iter);
			if (iter.size === 0) {
				return this;
			}
			assertNotInfinite(iter.size);
			var newSize = this.size;
			var head = this._head;
			iter.reverse().forEach(function (value) {
				newSize++;
				head = {
					value: value,
					next: head
				};
			});
			if (this.__ownerID) {
				this.size = newSize;
				this._head = head;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return makeStack(newSize, head);
		};
		Stack.prototype.pop = function () {
			return this.slice(1);
		};
		Stack.prototype.unshift = function () {
			return this.push.apply(this, arguments);
		};
		Stack.prototype.unshiftAll = function (iter) {
			return this.pushAll(iter);
		};
		Stack.prototype.shift = function () {
			return this.pop.apply(this, arguments);
		};
		Stack.prototype.clear = function () {
			if (this.size === 0) {
				return this;
			}
			if (this.__ownerID) {
				this.size = 0;
				this._head = undefined;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return emptyStack();
		};
		Stack.prototype.slice = function (begin, end) {
			if (wholeSlice(begin, end, this.size)) {
				return this;
			}
			var resolvedBegin = resolveBegin(begin, this.size);
			var resolvedEnd = resolveEnd(end, this.size);
			if (resolvedEnd !== this.size) {
				return IndexedCollection.prototype.slice.call(this, begin, end);
			}
			var newSize = this.size - resolvedBegin;
			var head = this._head;
			while (resolvedBegin--) {
				head = head.next;
			}
			if (this.__ownerID) {
				this.size = newSize;
				this._head = head;
				this.__hash = undefined;
				this.__altered = true;
				return this;
			}
			return makeStack(newSize, head);
		};
		Stack.prototype.__ensureOwner = function (ownerID) {
			if (ownerID === this.__ownerID) {
				return this;
			}
			if (!ownerID) {
				this.__ownerID = ownerID;
				this.__altered = false;
				return this;
			}
			return makeStack(this.size, this._head, ownerID, this.__hash);
		};
		Stack.prototype.__iterate = function (fn, reverse) {
			if (reverse) {
				return this.reverse().__iterate(fn);
			}
			var iterations = 0;
			var node = this._head;
			while (node) {
				if (fn(node.value, iterations++, this) === false) {
					break;
				}
				node = node.next;
			}
			return iterations;
		};
		Stack.prototype.__iterator = function (type, reverse) {
			if (reverse) {
				return this.reverse().__iterator(type);
			}
			var iterations = 0;
			var node = this._head;
			return new Iterator(function () {
				if (node) {
					var value = node.value;
					node = node.next;
					return iteratorValue(type, iterations++, value);
				}
				return iteratorDone();
			});
		};
		function isStack(maybeStack) {
			return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
		}
		Stack.isStack = isStack;
		var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
		var StackPrototype = Stack.prototype;
		StackPrototype[IS_STACK_SENTINEL] = true;
		StackPrototype.withMutations = MapPrototype.withMutations;
		StackPrototype.asMutable = MapPrototype.asMutable;
		StackPrototype.asImmutable = MapPrototype.asImmutable;
		StackPrototype.wasAltered = MapPrototype.wasAltered;
		function makeStack(size, head, ownerID, hash) {
			var map = Object.create(StackPrototype);
			map.size = size;
			map._head = head;
			map.__ownerID = ownerID;
			map.__hash = hash;
			map.__altered = false;
			return map;
		}
		var EMPTY_STACK;
		function emptyStack() {
			return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
		}
		function mixin(ctor, methods) {
			var keyCopier = function (key) {
				ctor.prototype[key] = methods[key];
			};
			Object.keys(methods).forEach(keyCopier);
			Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
			return ctor;
		}
		Iterable.Iterator = Iterator;
		mixin(Iterable, {
			toArray: function () {
				assertNotInfinite(this.size);
				var array = new Array(this.size || 0);
				this.valueSeq().__iterate(function (v, i) {
					array[i] = v;
				});
				return array;
			},
			toIndexedSeq: function () {
				return new ToIndexedSequence(this);
			},
			toJS: function () {
				return this.toSeq().map(function (value) {
					return value && typeof value.toJS === "function" ? value.toJS() : value;
				}).__toJS();
			},
			toJSON: function () {
				return this.toSeq().map(function (value) {
					return value && typeof value.toJSON === "function" ? value.toJSON() : value;
				}).__toJS();
			},
			toKeyedSeq: function () {
				return new ToKeyedSequence(this, true);
			},
			toMap: function () {
				return Map(this.toKeyedSeq());
			},
			toObject: function () {
				assertNotInfinite(this.size);
				var object = {};
				this.__iterate(function (v, k) {
					object[k] = v;
				});
				return object;
			},
			toOrderedMap: function () {
				return OrderedMap(this.toKeyedSeq());
			},
			toOrderedSet: function () {
				return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
			},
			toSet: function () {
				return Set(isKeyed(this) ? this.valueSeq() : this);
			},
			toSetSeq: function () {
				return new ToSetSequence(this);
			},
			toSeq: function () {
				return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
			},
			toStack: function () {
				return Stack(isKeyed(this) ? this.valueSeq() : this);
			},
			toList: function () {
				return List(isKeyed(this) ? this.valueSeq() : this);
			},
			toString: function () {
				return "[Iterable]";
			},
			__toString: function (head, tail) {
				if (this.size === 0) {
					return head + tail;
				}
				return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
			},
			concat: function () {
				var values = SLICE$0.call(arguments, 0);
				return reify(this, concatFactory(this, values));
			},
			includes: function (searchValue) {
				return this.some(function (value) {
					return is(value, searchValue);
				});
			},
			entries: function () {
				return this.__iterator(ITERATE_ENTRIES);
			},
			every: function (predicate, context) {
				assertNotInfinite(this.size);
				var returnValue = true;
				this.__iterate(function (v, k, c) {
					if (!predicate.call(context, v, k, c)) {
						returnValue = false;
						return false;
					}
				});
				return returnValue;
			},
			filter: function (predicate, context) {
				return reify(this, filterFactory(this, predicate, context, true));
			},
			find: function (predicate, context, notSetValue) {
				var entry = this.findEntry(predicate, context);
				return entry ? entry[1] : notSetValue;
			},
			forEach: function (sideEffect, context) {
				assertNotInfinite(this.size);
				return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
			},
			join: function (separator) {
				assertNotInfinite(this.size);
				separator = separator !== undefined ? "" + separator : ",";
				var joined = "";
				var isFirst = true;
				this.__iterate(function (v) {
					isFirst ? isFirst = false : joined += separator;
					joined += v !== null && v !== undefined ? v.toString() : "";
				});
				return joined;
			},
			keys: function () {
				return this.__iterator(ITERATE_KEYS);
			},
			map: function (mapper, context) {
				return reify(this, mapFactory(this, mapper, context));
			},
			reduce: function (reducer, initialReduction, context) {
				assertNotInfinite(this.size);
				var reduction;
				var useFirst;
				if (arguments.length < 2) {
					useFirst = true;
				} else {
					reduction = initialReduction;
				}
				this.__iterate(function (v, k, c) {
					if (useFirst) {
						useFirst = false;
						reduction = v;
					} else {
						reduction = reducer.call(context, reduction, v, k, c);
					}
				});
				return reduction;
			},
			reduceRight: function (reducer, initialReduction, context) {
				var reversed = this.toKeyedSeq().reverse();
				return reversed.reduce.apply(reversed, arguments);
			},
			reverse: function () {
				return reify(this, reverseFactory(this, true));
			},
			slice: function (begin, end) {
				return reify(this, sliceFactory(this, begin, end, true));
			},
			some: function (predicate, context) {
				return !this.every(not(predicate), context);
			},
			sort: function (comparator) {
				return reify(this, sortFactory(this, comparator));
			},
			values: function () {
				return this.__iterator(ITERATE_VALUES);
			},
			butLast: function () {
				return this.slice(0, -1);
			},
			isEmpty: function () {
				return this.size !== undefined ? this.size === 0 : !this.some(function () {
					return true;
				});
			},
			count: function (predicate, context) {
				return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
			},
			countBy: function (grouper, context) {
				return countByFactory(this, grouper, context);
			},
			equals: function (other) {
				return deepEqual(this, other);
			},
			entrySeq: function () {
				var iterable = this;
				if (iterable._cache) {
					return new ArraySeq(iterable._cache);
				}
				var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
				entriesSequence.fromEntrySeq = function () {
					return iterable.toSeq();
				};
				return entriesSequence;
			},
			filterNot: function (predicate, context) {
				return this.filter(not(predicate), context);
			},
			findEntry: function (predicate, context, notSetValue) {
				var found = notSetValue;
				this.__iterate(function (v, k, c) {
					if (predicate.call(context, v, k, c)) {
						found = [k, v];
						return false;
					}
				});
				return found;
			},
			findKey: function (predicate, context) {
				var entry = this.findEntry(predicate, context);
				return entry && entry[0];
			},
			findLast: function (predicate, context, notSetValue) {
				return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
			},
			findLastEntry: function (predicate, context, notSetValue) {
				return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
			},
			findLastKey: function (predicate, context) {
				return this.toKeyedSeq().reverse().findKey(predicate, context);
			},
			first: function () {
				return this.find(returnTrue);
			},
			flatMap: function (mapper, context) {
				return reify(this, flatMapFactory(this, mapper, context));
			},
			flatten: function (depth) {
				return reify(this, flattenFactory(this, depth, true));
			},
			fromEntrySeq: function () {
				return new FromEntriesSequence(this);
			},
			get: function (searchKey, notSetValue) {
				return this.find(function (_, key) {
					return is(key, searchKey);
				}, undefined, notSetValue);
			},
			getIn: function (searchKeyPath, notSetValue) {
				var nested = this;
				var iter = forceIterator(searchKeyPath);
				var step;
				while (!(step = iter.next()).done) {
					var key = step.value;
					nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
					if (nested === NOT_SET) {
						return notSetValue;
					}
				}
				return nested;
			},
			groupBy: function (grouper, context) {
				return groupByFactory(this, grouper, context);
			},
			has: function (searchKey) {
				return this.get(searchKey, NOT_SET) !== NOT_SET;
			},
			hasIn: function (searchKeyPath) {
				return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
			},
			isSubset: function (iter) {
				iter = typeof iter.includes === "function" ? iter : Iterable(iter);
				return this.every(function (value) {
					return iter.includes(value);
				});
			},
			isSuperset: function (iter) {
				iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
				return iter.isSubset(this);
			},
			keyOf: function (searchValue) {
				return this.findKey(function (value) {
					return is(value, searchValue);
				});
			},
			keySeq: function () {
				return this.toSeq().map(keyMapper).toIndexedSeq();
			},
			last: function () {
				return this.toSeq().reverse().first();
			},
			lastKeyOf: function (searchValue) {
				return this.toKeyedSeq().reverse().keyOf(searchValue);
			},
			max: function (comparator) {
				return maxFactory(this, comparator);
			},
			maxBy: function (mapper, comparator) {
				return maxFactory(this, comparator, mapper);
			},
			min: function (comparator) {
				return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
			},
			minBy: function (mapper, comparator) {
				return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
			},
			rest: function () {
				return this.slice(1);
			},
			skip: function (amount) {
				return this.slice(Math.max(0, amount));
			},
			skipLast: function (amount) {
				return reify(this, this.toSeq().reverse().skip(amount).reverse());
			},
			skipWhile: function (predicate, context) {
				return reify(this, skipWhileFactory(this, predicate, context, true));
			},
			skipUntil: function (predicate, context) {
				return this.skipWhile(not(predicate), context);
			},
			sortBy: function (mapper, comparator) {
				return reify(this, sortFactory(this, comparator, mapper));
			},
			take: function (amount) {
				return this.slice(0, Math.max(0, amount));
			},
			takeLast: function (amount) {
				return reify(this, this.toSeq().reverse().take(amount).reverse());
			},
			takeWhile: function (predicate, context) {
				return reify(this, takeWhileFactory(this, predicate, context));
			},
			takeUntil: function (predicate, context) {
				return this.takeWhile(not(predicate), context);
			},
			valueSeq: function () {
				return this.toIndexedSeq();
			},
			hashCode: function () {
				return this.__hash || (this.__hash = hashIterable(this));
			}
		});
		var IterablePrototype = Iterable.prototype;
		IterablePrototype[IS_ITERABLE_SENTINEL] = true;
		IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
		IterablePrototype.__toJS = IterablePrototype.toArray;
		IterablePrototype.__toStringMapper = quoteString;
		IterablePrototype.inspect = IterablePrototype.toSource = function () {
			return this.toString();
		};
		IterablePrototype.chain = IterablePrototype.flatMap;
		IterablePrototype.contains = IterablePrototype.includes;
		mixin(KeyedIterable, {
			flip: function () {
				return reify(this, flipFactory(this));
			},
			mapEntries: function (mapper, context) {
				var this$0 = this;
				var iterations = 0;
				return reify(this, this.toSeq().map(function (v, k) {
					return mapper.call(context, [k, v], iterations++, this$0);
				}).fromEntrySeq());
			},
			mapKeys: function (mapper, context) {
				var this$0 = this;
				return reify(this, this.toSeq().flip().map(function (k, v) {
					return mapper.call(context, k, v, this$0);
				}).flip());
			}
		});
		var KeyedIterablePrototype = KeyedIterable.prototype;
		KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
		KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
		KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
		KeyedIterablePrototype.__toStringMapper = function (v, k) {
			return JSON.stringify(k) + ": " + quoteString(v);
		};
		mixin(IndexedIterable, {
			toKeyedSeq: function () {
				return new ToKeyedSequence(this, false);
			},
			filter: function (predicate, context) {
				return reify(this, filterFactory(this, predicate, context, false));
			},
			findIndex: function (predicate, context) {
				var entry = this.findEntry(predicate, context);
				return entry ? entry[0] : -1;
			},
			indexOf: function (searchValue) {
				var key = this.keyOf(searchValue);
				return key === undefined ? -1 : key;
			},
			lastIndexOf: function (searchValue) {
				var key = this.lastKeyOf(searchValue);
				return key === undefined ? -1 : key;
			},
			reverse: function () {
				return reify(this, reverseFactory(this, false));
			},
			slice: function (begin, end) {
				return reify(this, sliceFactory(this, begin, end, false));
			},
			splice: function (index, removeNum) {
				var numArgs = arguments.length;
				removeNum = Math.max(removeNum | 0, 0);
				if (numArgs === 0 || numArgs === 2 && !removeNum) {
					return this;
				}
				index = resolveBegin(index, index < 0 ? this.count() : this.size);
				var spliced = this.slice(0, index);
				return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
			},
			findLastIndex: function (predicate, context) {
				var entry = this.findLastEntry(predicate, context);
				return entry ? entry[0] : -1;
			},
			first: function () {
				return this.get(0);
			},
			flatten: function (depth) {
				return reify(this, flattenFactory(this, depth, false));
			},
			get: function (index, notSetValue) {
				index = wrapIndex(this, index);
				return index < 0 || (this.size === Infinity || this.size !== undefined && index > this.size) ? notSetValue : this.find(function (_, key) {
					return key === index;
				}, undefined, notSetValue);
			},
			has: function (index) {
				index = wrapIndex(this, index);
				return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
			},
			interpose: function (separator) {
				return reify(this, interposeFactory(this, separator));
			},
			interleave: function () {
				var iterables = [this].concat(arrCopy(arguments));
				var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
				var interleaved = zipped.flatten(true);
				if (zipped.size) {
					interleaved.size = zipped.size * iterables.length;
				}
				return reify(this, interleaved);
			},
			keySeq: function () {
				return Range(0, this.size);
			},
			last: function () {
				return this.get(-1);
			},
			skipWhile: function (predicate, context) {
				return reify(this, skipWhileFactory(this, predicate, context, false));
			},
			zip: function () {
				var iterables = [this].concat(arrCopy(arguments));
				return reify(this, zipWithFactory(this, defaultZipper, iterables));
			},
			zipWith: function (zipper) {
				var iterables = arrCopy(arguments);
				iterables[0] = this;
				return reify(this, zipWithFactory(this, zipper, iterables));
			}
		});
		IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
		IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
		mixin(SetIterable, {
			get: function (value, notSetValue) {
				return this.has(value) ? value : notSetValue;
			},
			includes: function (value) {
				return this.has(value);
			},
			keySeq: function () {
				return this.valueSeq();
			}
		});
		SetIterable.prototype.has = IterablePrototype.includes;
		SetIterable.prototype.contains = SetIterable.prototype.includes;
		mixin(KeyedSeq, KeyedIterable.prototype);
		mixin(IndexedSeq, IndexedIterable.prototype);
		mixin(SetSeq, SetIterable.prototype);
		mixin(KeyedCollection, KeyedIterable.prototype);
		mixin(IndexedCollection, IndexedIterable.prototype);
		mixin(SetCollection, SetIterable.prototype);
		function keyMapper(v, k) {
			return k;
		}
		function entryMapper(v, k) {
			return [k, v];
		}
		function not(predicate) {
			return function () {
				return !predicate.apply(this, arguments);
			};
		}
		function neg(predicate) {
			return function () {
				return -predicate.apply(this, arguments);
			};
		}
		function quoteString(value) {
			return typeof value === "string" ? JSON.stringify(value) : String(value);
		}
		function defaultZipper() {
			return arrCopy(arguments);
		}
		function defaultNegComparator(a, b) {
			return a < b ? 1 : a > b ? -1 : 0;
		}
		function hashIterable(iterable) {
			if (iterable.size === Infinity) {
				return 0;
			}
			var ordered = isOrdered(iterable);
			var keyed = isKeyed(iterable);
			var h = ordered ? 1 : 0;
			var size = iterable.__iterate(keyed ? ordered ? function (v, k) {
				h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
			} : function (v, k) {
				h = h + hashMerge(hash(v), hash(k)) | 0;
			} : ordered ? function (v) {
				h = 31 * h + hash(v) | 0;
			} : function (v) {
				h = h + hash(v) | 0;
			});
			return murmurHashOfSize(size, h);
		}
		function murmurHashOfSize(size, h) {
			h = imul(h, 3432918353);
			h = imul(h << 15 | h >>> -15, 461845907);
			h = imul(h << 13 | h >>> -13, 5);
			h = (h + 3864292196 | 0) ^ size;
			h = imul(h ^ h >>> 16, 2246822507);
			h = imul(h ^ h >>> 13, 3266489909);
			h = smi(h ^ h >>> 16);
			return h;
		}
		function hashMerge(a, b) {
			return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
		}
		var Immutable = {
			Iterable: Iterable,
			Seq: Seq,
			Collection: Collection,
			Map: Map,
			OrderedMap: OrderedMap,
			List: List,
			Stack: Stack,
			Set: Set,
			OrderedSet: OrderedSet,
			Record: Record,
			Range: Range,
			Repeat: Repeat,
			is: is,
			fromJS: fromJS
		};
		return Immutable;
	});
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;
	var _getStateName2 = __webpack_require__(210);
	var _getStateName3 = _interopRequireDefault(_getStateName2);
	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(211);
	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);
	var _validateNextState2 = __webpack_require__(212);
	var _validateNextState3 = _interopRequireDefault(_validateNextState2);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;
}, function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = function (action) {
		return action && action.type === "@@redux/INIT" ? "initialState argument passed to createStore" : "previous state received by the reducer";
	};
	module.exports = exports["default"];
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _immutable = __webpack_require__(208);
	var _immutable2 = _interopRequireDefault(_immutable);
	var _getStateName = __webpack_require__(210);
	var _getStateName2 = _interopRequireDefault(_getStateName);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.default = function (state, reducers, action) {
		var reducerNames = Object.keys(reducers);
		if (!reducerNames.length) {
			return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
		}
		var stateName = (0, _getStateName2.default)(action);
		if (!_immutable2.default.Iterable.isIterable(state)) {
			return "The " + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
		}
		var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
			return !reducers.hasOwnProperty(name);
		});
		if (unexpectedStatePropertyNames.length > 0) {
			return "Unexpected " + (unexpectedStatePropertyNames.length === 1 ? "property" : "properties") + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
		}
		return null;
	};
	module.exports = exports["default"];
}, function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = function (nextState, reducerName, action) {
		if (nextState === undefined) {
			throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
		}
	};
	module.exports = exports["default"];
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.lastRecord.pause !== undefined ? !!_const.lastRecord.pause : false;
	var pause = function pause() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.PAUSE:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = pause;
}, function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var PAUSE = exports.PAUSE = "PAUSE";
	var MUSIC = exports.MUSIC = "MUSIC";
	var MATRIX = exports.MATRIX = "MATRIX";
	var NEXT_BLOCK = exports.NEXT_BLOCK = "NEXT_BLOCK";
	var MOVE_BLOCK = exports.MOVE_BLOCK = "MOVE_BLOCK";
	var START_LINES = exports.START_LINES = "START_LINES";
	var MAX = exports.MAX = "MAX";
	var POINTS = exports.POINTS = "POINTS";
	var SPEED_START = exports.SPEED_START = "SPEED_START";
	var SPEED_RUN = exports.SPEED_RUN = "SPEED_RUN";
	var LOCK = exports.LOCK = "LOCK";
	var CLEAR_LINES = exports.CLEAR_LINES = "CLEAR_LINES";
	var RESET = exports.RESET = "RESET";
	var DROP = exports.DROP = "DROP";
	var KEY_DROP = exports.KEY_DROP = "KEY_DROP";
	var KEY_DOWN = exports.KEY_DOWN = "KEY_DOWN";
	var KEY_LEFT = exports.KEY_LEFT = "KEY_LEFT";
	var KEY_RIGHT = exports.KEY_RIGHT = "KEY_RIGHT";
	var KEY_ROTATE = exports.KEY_ROTATE = "KEY_ROTATE";
	var KEY_RESET = exports.KEY_RESET = "KEY_RESET";
	var KEY_MUSIC = exports.KEY_MUSIC = "KEY_MUSIC";
	var KEY_PAUSE = exports.KEY_PAUSE = "KEY_PAUSE";
	var FOCUS = exports.FOCUS = "FOCUS";
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _immutable = __webpack_require__(208);
	var _i18n = __webpack_require__(216);
	var _i18n2 = _interopRequireDefault(_i18n);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var blockShape = {
		I: [[1, 1, 1, 1]],
		L: [[0, 0, 1], [1, 1, 1]],
		J: [[1, 0, 0], [1, 1, 1]],
		Z: [[1, 1, 0], [0, 1, 1]],
		S: [[0, 1, 1], [1, 1, 0]],
		O: [[1, 1], [1, 1]],
		T: [[0, 1, 0], [1, 1, 1]]
	};
	var origin = {
		I: [[-1, 1], [1, -1]],
		L: [[0, 0]],
		J: [[0, 0]],
		Z: [[0, 0]],
		S: [[0, 0]],
		O: [[0, 0]],
		T: [[0, 0], [1, 0], [-1, 1], [0, -1]]
	};
	var blockType = Object.keys(blockShape);
	var speeds = [800, 650, 500, 370, 250, 160];
	var delays = [50, 60, 70, 80, 90, 100];
	var fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	var blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var blankMatrix = function () {
		var matrix = [];
		for (var i = 0; i < 20; i++) {
			matrix.push((0, _immutable.List)(blankLine));
		}
		return (0, _immutable.List)(matrix);
	}();
	var clearPoints = [100, 300, 700, 1500];
	var StorageKey = "REACT_TETRIS";
	var lastRecord = function () {
		var data = localStorage.getItem(StorageKey);
		if (!data) {
			return false;
		}
		try {
			if (window.btoa) {
				data = atob(data);
			}
			data = decodeURIComponent(data);
			data = JSON.parse(data);
		} catch (e) {
			if (window.console || window.console.error) {
				window.console.error("读取记录错误:", e);
			}
			return false;
		}
		return data;
	}();
	var maxPoint = 999999;
	var transform = function () {
		var trans = ["transform", "webkitTransform", "msTransform", "mozTransform", "oTransform"];
		var body = document.body;
		return trans.filter(function (e) {
			return body.style[e] !== undefined;
		})[0];
	}();
	var eachLines = 20;
	var getParam = function getParam(param) {
		var r = new RegExp("\\?(?:.+&)?" + param + "=(.*?)(?:&.*)?$");
		var m = window.location.toString().match(r);
		return m ? decodeURI(m[1]) : "";
	};
	var lan = function () {
		var l = getParam("lan").toLowerCase();
		l = _i18n2.default.lan.indexOf(l) === -1 ? _i18n2.default.default : l;
		return l;
	}();
	document.title = _i18n2.default.data.title[lan];
	module.exports = {
		blockShape: blockShape,
		origin: origin,
		blockType: blockType,
		speeds: speeds,
		delays: delays,
		fillLine: fillLine,
		blankLine: blankLine,
		blankMatrix: blankMatrix,
		clearPoints: clearPoints,
		StorageKey: StorageKey,
		lastRecord: lastRecord,
		maxPoint: maxPoint,
		eachLines: eachLines,
		transform: transform,
		lan: lan,
		i18n: _i18n2.default.data
	};
}, function (module, exports) {
	module.exports = {
		lan: ["cn", "en", "fr", "fa"],
		default: "cn",
		data: {
			title: {
				cn: "俄罗斯方块",
				en: "T E T R I S",
				fr: "T E T R I S",
				fa: "خانه سازی"
			},
			github: {
				cn: "GitHub",
				en: "GitHub",
				fr: "GitHub",
				fa: "گیت‌هاب"
			},
			linkTitle: {
				cn: "查看源代码",
				en: "View data source",
				fr: "Afficher la source des données",
				fa: "مشاهده سورس پروژه"
			},
			QRCode: {
				cn: "二维码",
				en: "QR code",
				fr: "QR code",
				fa: "کیوآر کد"
			},
			titleCenter: {
				cn: "俄罗斯方块<br />TETRIS",
				en: "TETRIS",
				fr: "TETRIS",
				fa: "خانه سازی"
			},
			point: {
				cn: "得分",
				en: "Point",
				fr: "Score",
				fa: "امتیاز"
			},
			highestScore: {
				cn: "最高分",
				en: "Max",
				fr: "Max",
				fa: "حداکثر"
			},
			lastRound: {
				cn: "上轮得分",
				en: "Last Round",
				fr: "Dernier Tour",
				fa: "آخرین دور"
			},
			cleans: {
				cn: "消除行",
				en: "Cleans",
				fr: "Lignes",
				fa: "پاک کرد"
			},
			level: {
				cn: "级别",
				en: "Level",
				fr: "Difficulté",
				fa: "سطح"
			},
			startLine: {
				cn: "起始行",
				en: "Start Line",
				fr: "Ligne Départ",
				fa: "خط شروع"
			},
			next: {
				cn: "下一个",
				en: "Next",
				fr: "Prochain",
				fa: "بعدی"
			},
			pause: {
				cn: "暂停",
				en: "Pause",
				fr: "Pause",
				fa: "مکث"
			},
			sound: {
				cn: "音效",
				en: "Sound",
				fr: "Sonore",
				fa: "صدا"
			},
			reset: {
				cn: "重玩",
				en: "Reset",
				fr: "Réinitialiser",
				fa: "ریست"
			},
			rotation: {
				cn: "旋转",
				en: "Rotation",
				fr: "Rotation",
				fa: "چرخش"
			},
			left: {
				cn: "左移",
				en: "Left",
				fr: "Gauche",
				fa: "چپ"
			},
			right: {
				cn: "右移",
				en: "Right",
				fr: "Droite",
				fa: "راست"
			},
			down: {
				cn: "下移",
				en: "Down",
				fr: "Bas",
				fa: "پایین"
			},
			drop: {
				cn: "掉落",
				en: "Drop",
				fr: "Tomber",
				fa: "سقوط"
			}
		}
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	var _music = __webpack_require__(218);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.lastRecord.music !== undefined ? !!_const.lastRecord.music : true;
	if (!_music.hasWebAudioAPI.data) {
		initState = false;
	}
	var music = function music() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.MUSIC:
				if (!_music.hasWebAudioAPI.data) {
					return false;
				}
				return action.data;

			default:
				return state;
		}
	};
	exports.default = music;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _store = __webpack_require__(204);
	var _store2 = _interopRequireDefault(_store);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
	var hasWebAudioAPI = {
		data: !!AudioContext && location.protocol.indexOf("http") !== -1
	};
	var music = {};
	(function () {
		if (!hasWebAudioAPI.data) {
			return;
		}
		var url = "./music.mp3";
		var context = new AudioContext;
		var req = new XMLHttpRequest;
		req.open("GET", url, true);
		req.responseType = "arraybuffer";
		req.onload = function () {
			context.decodeAudioData(req.response, function (buf) {
				var getSource = function getSource() {
					var source = context.createBufferSource();
					source.buffer = buf;
					source.connect(context.destination);
					return source;
				};
				music.killStart = function () {
					music.start = function () { };
				};
				music.start = function () {
					music.killStart();
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 3.7202, 3.6224);
				};
				music.clear = function () {
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 0, .7675);
				};
				music.fall = function () {
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 1.2558, .3546);
				};
				music.gameover = function () {
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 8.1276, 1.1437);
				};
				music.rotate = function () {
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 2.2471, .0807);
				};
				music.move = function () {
					if (!_store2.default.getState().get("music")) {
						return;
					}
					getSource().start(0, 2.9088, .1437);
				};
			}, function (error) {
				if (window.console && window.console.error) {
					window.console.error("音频: " + url + " 读取错误", error);
					hasWebAudioAPI.data = false;
				}
			});
		};
		req.send();
	})();
	module.exports = {
		hasWebAudioAPI: hasWebAudioAPI,
		music: music
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _immutable = __webpack_require__(208);
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && Array.isArray(_const.lastRecord.matrix) ? (0,
		_immutable.List)(_const.lastRecord.matrix.map(function (e) {
			return (0, _immutable.List)(e);
		})) : _const.blankMatrix;
	var matrix = function matrix() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.MATRIX:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = matrix;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.blockType.indexOf(_const.lastRecord.next) !== -1 ? _const.lastRecord.next : (0,
		_unit.getNextType)();
	var parse = function parse() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.NEXT_BLOCK:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = parse;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _const = __webpack_require__(215);
	var hiddenProperty = function () {
		var names = ["hidden", "webkitHidden", "mozHidden", "msHidden"];
		names = names.filter(function (e) {
			return e in document;
		});
		return names.length > 0 ? names[0] : false;
	}();
	var visibilityChangeEvent = function () {
		if (!hiddenProperty) {
			return false;
		}
		return hiddenProperty.replace(/hidden/i, "visibilitychange");
	}();
	var isFocus = function isFocus() {
		if (!hiddenProperty) {
			return true;
		}
		return !document[hiddenProperty];
	};
	var unit = {
		getNextType: function getNextType() {
			var len = _const.blockType.length;
			return _const.blockType[Math.floor(Math.random() * len)];
		},
		want: function want(next, matrix) {
			var xy = next.xy;
			var shape = next.shape;
			var horizontal = shape.get(0).size;
			return shape.every(function (m, k1) {
				return m.every(function (n, k2) {
					if (xy[1] < 0) {
						return false;
					}
					if (xy[1] + horizontal > 10) {
						return false;
					}
					if (xy[0] + k1 < 0) {
						return true;
					}
					if (xy[0] + k1 >= 20) {
						return false;
					}
					if (n) {
						if (matrix.get(xy[0] + k1).get(xy[1] + k2)) {
							return false;
						}
						return true;
					}
					return true;
				});
			});
		},
		isClear: function isClear(matrix) {
			var clearLines = [];
			matrix.forEach(function (m, k) {
				if (m.every(function (n) {
					return !!n;
				})) {
					clearLines.push(k);
				}
			});
			if (clearLines.length === 0) {
				return false;
			}
			return clearLines;
		},
		isOver: function isOver(matrix) {
			return matrix.get(0).some(function (n) {
				return !!n;
			});
		},
		subscribeRecord: function subscribeRecord(store) {
			store.subscribe(function () {
				var data = store.getState().toJS();
				if (data.lock) {
					return;
				}
				data = JSON.stringify(data);
				data = encodeURIComponent(data);
				if (window.btoa) {
					data = btoa(data);
				}
				localStorage.setItem(_const.StorageKey, data);
			});
		},
		isMobile: function isMobile() {
			var ua = navigator.userAgent;
			var android = /Android (\d+\.\d+)/.test(ua);
			var iphone = ua.indexOf("iPhone") > -1;
			var ipod = ua.indexOf("iPod") > -1;
			var ipad = ua.indexOf("iPad") > -1;
			var nokiaN = ua.indexOf("NokiaN") > -1;
			return android || iphone || ipod || ipad || nokiaN;
		},
		visibilityChangeEvent: visibilityChangeEvent,
		isFocus: isFocus
	};
	module.exports = unit;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _immutable = __webpack_require__(208);
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	var _block = __webpack_require__(223);
	var _block2 = _interopRequireDefault(_block);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = function () {
		if (!_const.lastRecord || !_const.lastRecord.cur) {
			return null;
		}
		var cur = _const.lastRecord.cur;
		var option = {
			type: cur.type,
			rotateIndex: cur.rotateIndex,
			shape: (0, _immutable.List)(cur.shape.map(function (e) {
				return (0, _immutable.List)(e);
			})),
			xy: cur.xy
		};
		return new _block2.default(option);
	}();
	var cur = function cur() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.MOVE_BLOCK:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = cur;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _immutable = __webpack_require__(208);
	var _const = __webpack_require__(215);
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	var Block = function () {
		function Block(option) {
			_classCallCheck(this, Block);
			this.type = option.type;
			if (!option.rotateIndex) {
				this.rotateIndex = 0;
			} else {
				this.rotateIndex = option.rotateIndex;
			}
			if (!option.timeStamp) {
				this.timeStamp = Date.now();
			} else {
				this.timeStamp = option.timeStamp;
			}
			if (!option.shape) {
				this.shape = (0, _immutable.List)(_const.blockShape[option.type].map(function (e) {
					return (0, _immutable.List)(e);
				}));
			} else {
				this.shape = option.shape;
			}
			if (!option.xy) {
				switch (option.type) {
					case "I":
						this.xy = (0, _immutable.List)([0, 3]);
						break;

					case "L":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					case "J":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					case "Z":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					case "S":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					case "O":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					case "T":
						this.xy = (0, _immutable.List)([-1, 4]);
						break;

					default:
						break;
				}
			} else {
				this.xy = (0, _immutable.List)(option.xy);
			}
		}
		_createClass(Block, [{
			key: "rotate",
			value: function rotate() {
				var shape = this.shape;
				var result = (0, _immutable.List)([]);
				shape.forEach(function (m) {
					return m.forEach(function (n, k) {
						var index = m.size - k - 1;
						if (result.get(index) === undefined) {
							result = result.set(index, (0, _immutable.List)([]));
						}
						var tempK = result.get(index).push(n);
						result = result.set(index, tempK);
					});
				});
				var nextXy = [this.xy.get(0) + _const.origin[this.type][this.rotateIndex][0], this.xy.get(1) + _const.origin[this.type][this.rotateIndex][1]];
				var nextRotateIndex = this.rotateIndex + 1 >= _const.origin[this.type].length ? 0 : this.rotateIndex + 1;
				return {
					shape: result,
					type: this.type,
					xy: nextXy,
					rotateIndex: nextRotateIndex,
					timeStamp: this.timeStamp
				};
			}
		}, {
			key: "fall",
			value: function fall() {
				var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
				return {
					shape: this.shape,
					type: this.type,
					xy: [this.xy.get(0) + n, this.xy.get(1)],
					rotateIndex: this.rotateIndex,
					timeStamp: Date.now()
				};
			}
		}, {
			key: "right",
			value: function right() {
				return {
					shape: this.shape,
					type: this.type,
					xy: [this.xy.get(0), this.xy.get(1) + 1],
					rotateIndex: this.rotateIndex,
					timeStamp: this.timeStamp
				};
			}
		}, {
			key: "left",
			value: function left() {
				return {
					shape: this.shape,
					type: this.type,
					xy: [this.xy.get(0), this.xy.get(1) - 1],
					rotateIndex: this.rotateIndex,
					timeStamp: this.timeStamp
				};
			}
		}]);
		return Block;
	}();
	exports.default = Block;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.startLines, 10)) ? parseInt(_const.lastRecord.startLines, 10) : 0;
	if (initState < 0 || initState > 10) {
		initState = 0;
	}
	var startLines = function startLines() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.START_LINES:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = startLines;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.max, 10)) ? parseInt(_const.lastRecord.max, 10) : 0;
	if (initState < 0) {
		initState = 0;
	} else if (initState > _const.maxPoint) {
		initState = _const.maxPoint;
	}
	var parse = function parse() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.MAX:
				return action.data > 999999 ? 999999 : action.data;

			default:
				return state;
		}
	};
	exports.default = parse;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.points, 10)) ? parseInt(_const.lastRecord.points, 10) : 0;
	if (initState < 0) {
		initState = 0;
	} else if (initState > _const.maxPoint) {
		initState = _const.maxPoint;
	}
	var points = function points() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.POINTS:
				return action.data > _const.maxPoint ? _const.maxPoint : action.data;

			default:
				return state;
		}
	};
	exports.default = points;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.speedStart, 10)) ? parseInt(_const.lastRecord.speedStart, 10) : 1;
	if (initState < 1 || initState > 6) {
		initState = 1;
	}
	var speedStart = function speedStart() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.SPEED_START:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = speedStart;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.speedRun, 10)) ? parseInt(_const.lastRecord.speedRun, 10) : 1;
	if (initState < 1 || initState > 6) {
		initState = 1;
	}
	var speedRun = function speedRun() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.SPEED_RUN:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = speedRun;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.lastRecord.lock !== undefined ? !!_const.lastRecord.lock : false;
	var lock = function lock() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.LOCK:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = lock;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && !isNaN(parseInt(_const.lastRecord.clearLines, 10)) ? parseInt(_const.lastRecord.clearLines, 10) : 0;
	if (initState < 0) {
		initState = 0;
	}
	var clearLines = function clearLines() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.CLEAR_LINES:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = clearLines;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.lastRecord.reset ? !!_const.lastRecord.reset : false;
	var reset = function reset() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.RESET:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reset;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _const = __webpack_require__(215);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = _const.lastRecord && _const.lastRecord.drop !== undefined ? !!_const.lastRecord.drop : false;
	var drop = function drop() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.DROP:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = drop;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reduxImmutable = __webpack_require__(206);
	var _drop = __webpack_require__(234);
	var _drop2 = _interopRequireDefault(_drop);
	var _down = __webpack_require__(235);
	var _down2 = _interopRequireDefault(_down);
	var _left = __webpack_require__(236);
	var _left2 = _interopRequireDefault(_left);
	var _right = __webpack_require__(237);
	var _right2 = _interopRequireDefault(_right);
	var _rotate = __webpack_require__(238);
	var _rotate2 = _interopRequireDefault(_rotate);
	var _reset = __webpack_require__(239);
	var _reset2 = _interopRequireDefault(_reset);
	var _music = __webpack_require__(240);
	var _music2 = _interopRequireDefault(_music);
	var _pause = __webpack_require__(241);
	var _pause2 = _interopRequireDefault(_pause);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var keyboardReducer = (0, _reduxImmutable.combineReducers)({
		drop: _drop2.default,
		down: _down2.default,
		left: _left2.default,
		right: _right2.default,
		rotate: _rotate2.default,
		reset: _reset2.default,
		music: _music2.default,
		pause: _pause2.default
	});
	exports.default = keyboardReducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_DROP:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_DOWN:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_LEFT:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_RIGHT:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_ROTATE:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_RESET:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_MUSIC:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = false;
	var reducer = function reducer() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.KEY_PAUSE:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = reducer;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _unit = __webpack_require__(221);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	var initState = (0, _unit.isFocus)();
	var focus = function focus() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
		var action = arguments[1];
		switch (action.type) {
			case reducerType.FOCUS:
				return action.data;

			default:
				return state;
		}
	};
	exports.default = focus;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _reactRedux = __webpack_require__(173);
	var _classnames2 = __webpack_require__(244);
	var _classnames3 = _interopRequireDefault(_classnames2);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(245);
	var _index2 = _interopRequireDefault(_index);
	var _matrix = __webpack_require__(246);
	var _matrix2 = _interopRequireDefault(_matrix);
	var _decorate = __webpack_require__(251);
	var _decorate2 = _interopRequireDefault(_decorate);
	var _number = __webpack_require__(253);
	var _number2 = _interopRequireDefault(_number);
	var _next = __webpack_require__(255);
	var _next2 = _interopRequireDefault(_next);
	var _music = __webpack_require__(257);
	var _music2 = _interopRequireDefault(_music);
	var _pause = __webpack_require__(259);
	var _pause2 = _interopRequireDefault(_pause);
	var _point = __webpack_require__(261);
	var _point2 = _interopRequireDefault(_point);
	var _logo = __webpack_require__(262);
	var _logo2 = _interopRequireDefault(_logo);
	var _keyboard = __webpack_require__(264);
	var _keyboard2 = _interopRequireDefault(_keyboard);
	var _guide = __webpack_require__(278);
	var _guide2 = _interopRequireDefault(_guide);
	var _const = __webpack_require__(215);
	var _unit = __webpack_require__(221);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var App = function (_React$Component) {
		_inherits(App, _React$Component);
		function App() {
			_classCallCheck(this, App);
			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
			_this.state = {
				w: document.documentElement.clientWidth,
				h: document.documentElement.clientHeight
			};
			return _this;
		}
		_createClass(App, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				window.addEventListener("resize", this.resize.bind(this), true);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (_unit.visibilityChangeEvent) {
					document.addEventListener(_unit.visibilityChangeEvent, function () {
						_states2.default.focus((0, _unit.isFocus)());
					}, false);
				}
				if (_const.lastRecord) {
					if (_const.lastRecord.cur && !_const.lastRecord.pause) {
						var speedRun = this.props.speedRun;
						var timeout = _const.speeds[speedRun - 1] / 2;
						timeout = speedRun < _const.speeds[_const.speeds.length - 1] ? _const.speeds[_const.speeds.length - 1] : speedRun;
						_states2.default.auto(timeout);
					}
					if (!_const.lastRecord.cur) {
						_states2.default.overStart();
					}
				} else {
					_states2.default.overStart();
				}
			}
		}, {
			key: "resize",
			value: function resize() {
				this.setState({
					w: document.documentElement.clientWidth,
					h: document.documentElement.clientHeight
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this, _classnames;
				var filling = 0;
				var size = function () {
					var w = _this2.state.w;
					var h = _this2.state.h;
					var ratio = h / w;
					var scale = void 0;
					var css = {};
					if (ratio < 1.5) {
						scale = h / 960;
					} else {
						scale = w / 640;
						filling = (h - 960 * scale) / scale / 3;
						css = {
							paddingTop: Math.floor(filling) + 42,
							paddingBottom: Math.floor(filling),
							marginTop: Math.floor(-480 - filling * 1.5)
						};
					}
					css[_const.transform] = "scale(" + scale + ")";
					return css;
				}();
				return _react2.default.createElement("div", {
					className: _index2.default.app,
					style: size
				}, _react2.default.createElement("div", {
					className: (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _index2.default.rect, true),
						_defineProperty(_classnames, _index2.default.drop, this.props.drop), _classnames))
				}, _react2.default.createElement(_decorate2.default, null), _react2.default.createElement("div", {
					className: _index2.default.screen
				}, _react2.default.createElement("div", {
					className: _index2.default.panel
				}, _react2.default.createElement(_matrix2.default, {
					matrix: this.props.matrix,
					cur: this.props.cur,
					reset: this.props.reset
				}), _react2.default.createElement(_logo2.default, {
					cur: !!this.props.cur,
					reset: this.props.reset
				}), _react2.default.createElement("div", {
					className: _index2.default.state
				}, _react2.default.createElement(_point2.default, {
					cur: !!this.props.cur,
					point: this.props.points,
					max: this.props.max
				}), _react2.default.createElement("p", null, this.props.cur ? _const.i18n.cleans[_const.lan] : _const.i18n.startLine[_const.lan]), _react2.default.createElement(_number2.default, {
					number: this.props.cur ? this.props.clearLines : this.props.startLines
				}), _react2.default.createElement("p", null, _const.i18n.level[_const.lan]), _react2.default.createElement(_number2.default, {
					number: this.props.cur ? this.props.speedRun : this.props.speedStart,
					length: 1
				}), _react2.default.createElement("p", null, _const.i18n.next[_const.lan]), _react2.default.createElement(_next2.default, {
					data: this.props.next
				}), _react2.default.createElement("div", {
					className: _index2.default.bottom
				}, _react2.default.createElement(_music2.default, {
					data: this.props.music
				}), _react2.default.createElement(_pause2.default, {
					data: this.props.pause
				}), _react2.default.createElement(_number2.default, {
					time: true
				})))))), _react2.default.createElement(_keyboard2.default, {
					filling: filling,
					keyboard: this.props.keyboard
				}), _react2.default.createElement(_guide2.default, null));
			}
		}]);
		return App;
	}(_react2.default.Component);
	App.propTypes = {
		music: _propTypes2.default.bool.isRequired,
		pause: _propTypes2.default.bool.isRequired,
		matrix: _propTypes2.default.object.isRequired,
		next: _propTypes2.default.string.isRequired,
		cur: _propTypes2.default.object,
		dispatch: _propTypes2.default.func.isRequired,
		speedStart: _propTypes2.default.number.isRequired,
		speedRun: _propTypes2.default.number.isRequired,
		startLines: _propTypes2.default.number.isRequired,
		clearLines: _propTypes2.default.number.isRequired,
		points: _propTypes2.default.number.isRequired,
		max: _propTypes2.default.number.isRequired,
		reset: _propTypes2.default.bool.isRequired,
		drop: _propTypes2.default.bool.isRequired,
		keyboard: _propTypes2.default.object.isRequired
	};
	var mapStateToProps = function mapStateToProps(state) {
		return {
			pause: state.get("pause"),
			music: state.get("music"),
			matrix: state.get("matrix"),
			next: state.get("next"),
			cur: state.get("cur"),
			speedStart: state.get("speedStart"),
			speedRun: state.get("speedRun"),
			startLines: state.get("startLines"),
			clearLines: state.get("clearLines"),
			points: state.get("points"),
			max: state.get("max"),
			reset: state.get("reset"),
			drop: state.get("drop"),
			keyboard: state.get("keyboard")
		};
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);
}, function (module, exports, __webpack_require__) {
	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	(function () {
		"use strict";
		var hasOwn = {}.hasOwnProperty;
		function classNames() {
			var classes = "";
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}
			return classes;
		}
		function parseValue(arg) {
			if (typeof arg === "string" || typeof arg === "number") {
				return arg;
			}
			if (typeof arg !== "object") {
				return "";
			}
			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}
			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
				return arg.toString();
			}
			var classes = "";
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}
			return classes;
		}
		function appendClass(value, newClass) {
			if (!newClass) {
				return value;
			}
			if (value) {
				return value + " " + newClass;
			}
			return value + newClass;
		}
		if (typeof module !== "undefined" && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();
}, function (module, exports) {
	module.exports = {
		app: "_3Lk6",
		rect: "_1fjB",
		drop: "_3YUe",
		screen: "_2iZA",
		panel: "_2lJh",
		state: "_1deS",
		bottom: "_8hag"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _immutable = __webpack_require__(208);
	var _immutable2 = _interopRequireDefault(_immutable);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(247);
	var _index2 = _interopRequireDefault(_index);
	var _unit = __webpack_require__(221);
	var _const = __webpack_require__(215);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var t = setTimeout;
	var Matrix = function (_React$Component) {
		_inherits(Matrix, _React$Component);
		function Matrix() {
			_classCallCheck(this, Matrix);
			var _this = _possibleConstructorReturn(this, (Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call(this));
			_this.state = {
				clearLines: false,
				animateColor: 2,
				isOver: false,
				overState: null
			};
			return _this;
		}
		_createClass(Matrix, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps() {
				var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var clears = (0, _unit.isClear)(nextProps.matrix);
				var overs = nextProps.reset;
				this.setState({
					clearLines: clears,
					isOver: overs
				});
				if (clears && !this.state.clearLines) {
					this.clearAnimate(clears);
				}
				if (!clears && overs && !this.state.isOver) {
					this.over(nextProps);
				}
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate() {
				var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var props = this.props;
				return !(_immutable2.default.is(nextProps.matrix, props.matrix) && _immutable2.default.is(nextProps.cur && nextProps.cur.shape, props.cur && props.cur.shape) && _immutable2.default.is(nextProps.cur && nextProps.cur.xy, props.cur && props.cur.xy)) || this.state.clearLines || this.state.isOver;
			}
		}, {
			key: "getResult",
			value: function getResult() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
				var cur = props.cur;
				var shape = cur && cur.shape;
				var xy = cur && cur.xy;
				var matrix = props.matrix;
				var clearLines = this.state.clearLines;
				if (clearLines) {
					var animateColor = this.state.animateColor;
					clearLines.forEach(function (index) {
						matrix = matrix.set(index, (0, _immutable.List)([animateColor, animateColor, animateColor, animateColor, animateColor, animateColor, animateColor, animateColor, animateColor, animateColor]));
					});
				} else if (shape) {
					shape.forEach(function (m, k1) {
						return m.forEach(function (n, k2) {
							if (n && xy.get(0) + k1 >= 0) {
								var line = matrix.get(xy.get(0) + k1);
								var color = void 0;
								if (line.get(xy.get(1) + k2) === 1 && !clearLines) {
									color = 2;
								} else {
									color = 1;
								}
								line = line.set(xy.get(1) + k2, color);
								matrix = matrix.set(xy.get(0) + k1, line);
							}
						});
					});
				}
				return matrix;
			}
		}, {
			key: "clearAnimate",
			value: function clearAnimate() {
				var _this2 = this;
				var anima = function anima(callback) {
					t(function () {
						_this2.setState({
							animateColor: 0
						});
						t(function () {
							_this2.setState({
								animateColor: 2
							});
							if (typeof callback === "function") {
								callback();
							}
						}, 100);
					}, 100);
				};
				anima(function () {
					anima(function () {
						anima(function () {
							t(function () {
								_states2.default.clearLines(_this2.props.matrix, _this2.state.clearLines);
							}, 100);
						});
					});
				});
			}
		}, {
			key: "over",
			value: function over(nextProps) {
				var _this3 = this;
				var overState = this.getResult(nextProps);
				this.setState({
					overState: overState
				});
				var exLine = function exLine(index) {
					if (index <= 19) {
						overState = overState.set(19 - index, (0, _immutable.List)(_const.fillLine));
					} else if (index >= 20 && index <= 39) {
						overState = overState.set(index - 20, (0, _immutable.List)(_const.blankLine));
					} else {
						_states2.default.overEnd();
						return;
					}
					_this3.setState({
						overState: overState
					});
				};
				for (var i = 0; i <= 40; i++) {
					t(exLine.bind(null, i), 40 * (i + 1));
				}
			}
		}, {
			key: "render",
			value: function render() {
				var matrix = void 0;
				if (this.state.isOver) {
					matrix = this.state.overState;
				} else {
					matrix = this.getResult();
				}
				return _react2.default.createElement("div", {
					className: _index2.default.matrix
				}, matrix.map(function (p, k1) {
					return _react2.default.createElement("p", {
						key: k1
					}, p.map(function (e, k2) {
						return _react2.default.createElement("b", {
							className: (0, _classnames2.default)({
								c: e === 1,
								d: e === 2
							}),
							key: k2
						});
					}));
				}));
			}
		}]);
		return Matrix;
	}(_react2.default.Component);
	exports.default = Matrix;
	Matrix.propTypes = {
		matrix: _propTypes2.default.object.isRequired,
		cur: _propTypes2.default.object,
		reset: _propTypes2.default.bool.isRequired
	};
}, function (module, exports) {
	module.exports = {
		matrix: "_6pVK"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _immutable = __webpack_require__(208);
	var _store = __webpack_require__(204);
	var _store2 = _interopRequireDefault(_store);
	var _unit = __webpack_require__(221);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _const = __webpack_require__(215);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var getStartMatrix = function getStartMatrix(startLines) {
		var getLine = function getLine(min, max) {
			var count = parseInt((max - min + 1) * Math.random() + min, 10);
			var line = [];
			for (var i = 0; i < count; i++) {
				line.push(1);
			}
			for (var _i = 0, len = 10 - count; _i < len; _i++) {
				var index = parseInt((line.length + 1) * Math.random(), 10);
				line.splice(index, 0, 0);
			}
			return (0, _immutable.List)(line);
		};
		var startMatrix = (0, _immutable.List)([]);
		for (var i = 0; i < startLines; i++) {
			if (i <= 2) {
				startMatrix = startMatrix.push(getLine(5, 8));
			} else if (i <= 6) {
				startMatrix = startMatrix.push(getLine(4, 9));
			} else {
				startMatrix = startMatrix.push(getLine(3, 9));
			}
		}
		for (var _i2 = 0, len = 20 - startLines; _i2 < len; _i2++) {
			startMatrix = startMatrix.unshift((0, _immutable.List)(_const.blankLine));
		}
		return startMatrix;
	};
	var states = {
		fallInterval: null,
		start: function start() {
			if (_music.music.start) {
				_music.music.start();
			}
			var state = _store2.default.getState();
			states.dispatchPoints(0);
			_store2.default.dispatch(_actions2.default.speedRun(state.get("speedStart")));
			var startLines = state.get("startLines");
			var startMatrix = getStartMatrix(startLines);
			_store2.default.dispatch(_actions2.default.matrix(startMatrix));
			_store2.default.dispatch(_actions2.default.moveBlock({
				type: state.get("next")
			}));
			_store2.default.dispatch(_actions2.default.nextBlock());
			states.auto();
		},
		auto: function auto(timeout) {
			var out = timeout < 0 ? 0 : timeout;
			var state = _store2.default.getState();
			var cur = state.get("cur");
			var fall = function fall() {
				state = _store2.default.getState();
				cur = state.get("cur");
				var next = cur.fall();
				if ((0, _unit.want)(next, state.get("matrix"))) {
					_store2.default.dispatch(_actions2.default.moveBlock(next));
					states.fallInterval = setTimeout(fall, _const.speeds[state.get("speedRun") - 1]);
				} else {
					var matrix = state.get("matrix");
					var shape = cur && cur.shape;
					var xy = cur && cur.xy;
					shape.forEach(function (m, k1) {
						return m.forEach(function (n, k2) {
							if (n && xy.get(0) + k1 >= 0) {
								var line = matrix.get(xy.get(0) + k1);
								line = line.set(xy.get(1) + k2, 1);
								matrix = matrix.set(xy.get(0) + k1, line);
							}
						});
					});
					states.nextAround(matrix);
				}
			};
			clearTimeout(states.fallInterval);
			states.fallInterval = setTimeout(fall, out === undefined ? _const.speeds[state.get("speedRun") - 1] : out);
		},
		nextAround: function nextAround(matrix, stopDownTrigger) {
			clearTimeout(states.fallInterval);
			_store2.default.dispatch(_actions2.default.lock(true));
			_store2.default.dispatch(_actions2.default.matrix(matrix));
			if (typeof stopDownTrigger === "function") {
				stopDownTrigger();
			}
			var addPoints = _store2.default.getState().get("points") + 10 + (_store2.default.getState().get("speedRun") - 1) * 2;
			states.dispatchPoints(addPoints);
			if ((0, _unit.isClear)(matrix)) {
				if (_music.music.clear) {
					_music.music.clear();
				}
				return;
			}
			if ((0, _unit.isOver)(matrix)) {
				if (_music.music.gameover) {
					_music.music.gameover();
				}
				states.overStart();
				return;
			}
			setTimeout(function () {
				_store2.default.dispatch(_actions2.default.lock(false));
				_store2.default.dispatch(_actions2.default.moveBlock({
					type: _store2.default.getState().get("next")
				}));
				_store2.default.dispatch(_actions2.default.nextBlock());
				states.auto();
			}, 100);
		},
		focus: function focus(isFocus) {
			_store2.default.dispatch(_actions2.default.focus(isFocus));
			if (!isFocus) {
				clearTimeout(states.fallInterval);
				return;
			}
			var state = _store2.default.getState();
			if (state.get("cur") && !state.get("reset") && !state.get("pause")) {
				states.auto();
			}
		},
		pause: function pause(isPause) {
			_store2.default.dispatch(_actions2.default.pause(isPause));
			if (isPause) {
				clearTimeout(states.fallInterval);
				return;
			}
			states.auto();
		},
		clearLines: function clearLines(matrix, lines) {
			var state = _store2.default.getState();
			var newMatrix = matrix;
			lines.forEach(function (n) {
				newMatrix = newMatrix.splice(n, 1);
				newMatrix = newMatrix.unshift((0, _immutable.List)(_const.blankLine));
			});
			_store2.default.dispatch(_actions2.default.matrix(newMatrix));
			_store2.default.dispatch(_actions2.default.moveBlock({
				type: state.get("next")
			}));
			_store2.default.dispatch(_actions2.default.nextBlock());
			states.auto();
			_store2.default.dispatch(_actions2.default.lock(false));
			var clearLines = state.get("clearLines") + lines.length;
			_store2.default.dispatch(_actions2.default.clearLines(clearLines));
			var addPoints = _store2.default.getState().get("points") + _const.clearPoints[lines.length - 1];
			states.dispatchPoints(addPoints);
			var speedAdd = Math.floor(clearLines / _const.eachLines);
			var speedNow = state.get("speedStart") + speedAdd;
			speedNow = speedNow > 6 ? 6 : speedNow;
			_store2.default.dispatch(_actions2.default.speedRun(speedNow));
		},
		overStart: function overStart() {
			clearTimeout(states.fallInterval);
			_store2.default.dispatch(_actions2.default.lock(true));
			_store2.default.dispatch(_actions2.default.reset(true));
			_store2.default.dispatch(_actions2.default.pause(false));
		},
		overEnd: function overEnd() {
			_store2.default.dispatch(_actions2.default.matrix(_const.blankMatrix));
			_store2.default.dispatch(_actions2.default.moveBlock({
				reset: true
			}));
			_store2.default.dispatch(_actions2.default.reset(false));
			_store2.default.dispatch(_actions2.default.lock(false));
			_store2.default.dispatch(_actions2.default.clearLines(0));
		},
		dispatchPoints: function dispatchPoints(point) {
			_store2.default.dispatch(_actions2.default.points(point));
			if (point > 0 && point > _store2.default.getState().get("max")) {
				_store2.default.dispatch(_actions2.default.max(point));
			}
		}
	};
	exports.default = states;
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	var _block = __webpack_require__(223);
	var _block2 = _interopRequireDefault(_block);
	var _keyboard = __webpack_require__(250);
	var _keyboard2 = _interopRequireDefault(_keyboard);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	function nextBlock() {
		var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,
			_unit.getNextType)();
		return {
			type: reducerType.NEXT_BLOCK,
			data: next
		};
	}
	function moveBlock(option) {
		return {
			type: reducerType.MOVE_BLOCK,
			data: option.reset === true ? null : new _block2.default(option)
		};
	}
	function speedStart(n) {
		return {
			type: reducerType.SPEED_START,
			data: n
		};
	}
	function speedRun(n) {
		return {
			type: reducerType.SPEED_RUN,
			data: n
		};
	}
	function startLines(n) {
		return {
			type: reducerType.START_LINES,
			data: n
		};
	}
	function matrix(data) {
		return {
			type: reducerType.MATRIX,
			data: data
		};
	}
	function lock(data) {
		return {
			type: reducerType.LOCK,
			data: data
		};
	}
	function clearLines(data) {
		return {
			type: reducerType.CLEAR_LINES,
			data: data
		};
	}
	function points(data) {
		return {
			type: reducerType.POINTS,
			data: data
		};
	}
	function max(data) {
		return {
			type: reducerType.MAX,
			data: data
		};
	}
	function reset(data) {
		return {
			type: reducerType.RESET,
			data: data
		};
	}
	function drop(data) {
		return {
			type: reducerType.DROP,
			data: data
		};
	}
	function pause(data) {
		return {
			type: reducerType.PAUSE,
			data: data
		};
	}
	function music(data) {
		return {
			type: reducerType.MUSIC,
			data: data
		};
	}
	function focus(data) {
		return {
			type: reducerType.FOCUS,
			data: data
		};
	}
	exports.default = {
		nextBlock: nextBlock,
		moveBlock: moveBlock,
		speedStart: speedStart,
		speedRun: speedRun,
		startLines: startLines,
		matrix: matrix,
		lock: lock,
		clearLines: clearLines,
		points: points,
		reset: reset,
		max: max,
		drop: drop,
		pause: pause,
		keyboard: _keyboard2.default,
		music: music,
		focus: focus
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _reducerType = __webpack_require__(214);
	var reducerType = _interopRequireWildcard(_reducerType);
	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};
			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}
			newObj.default = obj;
			return newObj;
		}
	}
	function drop(data) {
		return {
			type: reducerType.KEY_DROP,
			data: data
		};
	}
	function down(data) {
		return {
			type: reducerType.KEY_DOWN,
			data: data
		};
	}
	function left(data) {
		return {
			type: reducerType.KEY_LEFT,
			data: data
		};
	}
	function right(data) {
		return {
			type: reducerType.KEY_RIGHT,
			data: data
		};
	}
	function rotate(data) {
		return {
			type: reducerType.KEY_ROTATE,
			data: data
		};
	}
	function reset(data) {
		return {
			type: reducerType.KEY_RESET,
			data: data
		};
	}
	function music(data) {
		return {
			type: reducerType.KEY_MUSIC,
			data: data
		};
	}
	function pause(data) {
		return {
			type: reducerType.KEY_PAUSE,
			data: data
		};
	}
	exports.default = {
		drop: drop,
		down: down,
		left: left,
		right: right,
		rotate: rotate,
		reset: reset,
		music: music,
		pause: pause
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _const = __webpack_require__(215);
	var _index = __webpack_require__(252);
	var _index2 = _interopRequireDefault(_index);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Decorate = function (_React$Component) {
		_inherits(Decorate, _React$Component);
		function Decorate() {
			_classCallCheck(this, Decorate);
			return _possibleConstructorReturn(this, (Decorate.__proto__ || Object.getPrototypeOf(Decorate)).apply(this, arguments));
		}
		_createClass(Decorate, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate() {
				return false;
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", {
					className: _index2.default.decorate
				}, _react2.default.createElement("div", {
					className: _index2.default.topBorder
				}, _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["l", _index2.default.mr]),
					style: {
						width: 40
					}
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["l", _index2.default.mr])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["l", _index2.default.mr])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["l", _index2.default.mr])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["l", _index2.default.mr])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["r", _index2.default.ml]),
					style: {
						width: 40
					}
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["r", _index2.default.ml])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["r", _index2.default.ml])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["r", _index2.default.ml])
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(["r", _index2.default.ml])
				})), _react2.default.createElement("h1", null, _const.i18n.title[_const.lan]), _react2.default.createElement("div", {
					className: _index2.default.view
				}, _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				})), _react2.default.createElement("div", {
					className: (0, _classnames2.default)([_index2.default.view, _index2.default.l])
				}, _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("em", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("p", null), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				}), _react2.default.createElement("div", {
					className: "clear"
				}), _react2.default.createElement("b", {
					className: "c"
				})));
			}
		}]);
		return Decorate;
	}(_react2.default.Component);
	exports.default = Decorate;
}, function (module, exports) {
	module.exports = {
		decorate: "_2OLA",
		topBorder: "DOXx",
		mr: "_1xND",
		ml: "_1cYd",
		view: "nVeA",
		l: "_395z"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(254);
	var _index2 = _interopRequireDefault(_index);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var _render = function _render(data) {
		return _react2.default.createElement("div", {
			className: _index2.default.number
		}, data.map(function (e, k) {
			return _react2.default.createElement("span", {
				className: (0, _classnames2.default)(["bg", _index2.default["s_" + e]]),
				key: k
			});
		}));
	};
	var formate = function formate(num) {
		return num < 10 ? ("0" + num).split("") : ("" + num).split("");
	};
	var Number = function (_React$Component) {
		_inherits(Number, _React$Component);
		function Number() {
			_classCallCheck(this, Number);
			var _this = _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this));
			_this.state = {
				time_count: false,
				time: new Date
			};
			return _this;
		}
		_createClass(Number, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _this2 = this;
				if (!this.props.time) {
					return;
				}
				var clock = function clock() {
					var count = +Number.timeInterval;
					Number.timeInterval = setTimeout(function () {
						_this2.setState({
							time: new Date,
							time_count: count
						});
						clock();
					}, 1e3);
				};
				clock();
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref) {
				var number = _ref.number;
				if (this.props.time) {
					if (this.state.time_count !== Number.time_count) {
						if (this.state.time_count !== false) {
							Number.time_count = this.state.time_count;
						}
						return true;
					}
					return false;
				}
				return this.props.number !== number;
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				if (!this.props.time) {
					return;
				}
				clearTimeout(Number.timeInterval);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.props.time) {
					var now = this.state.time;
					var hour = formate(now.getHours());
					var min = formate(now.getMinutes());
					var sec = now.getSeconds() % 2;
					var t = hour.concat(sec ? "d" : "d_c", min);
					return _render(t);
				}
				var num = ("" + this.props.number).split("");
				for (var i = 0, len = this.props.length - num.length; i < len; i++) {
					num.unshift("n");
				}
				return _render(num);
			}
		}]);
		return Number;
	}(_react2.default.Component);
	exports.default = Number;
	Number.statics = {
		timeInterval: null,
		time_count: null
	};
	Number.propTypes = {
		number: _propTypes2.default.number,
		length: _propTypes2.default.number,
		time: _propTypes2.default.bool
	};
	Number.defaultProps = {
		length: 6
	};
}, function (module, exports) {
	module.exports = {
		number: "iHKP",
		s_0: "_2hru",
		s_1: "_2B-l",
		s_2: "ShGQ",
		s_3: "_2V1K",
		s_4: "_3bYF",
		s_5: "_1Z7B",
		s_6: "_1-BZ",
		s_7: "_3_id",
		s_8: "_3_Z_",
		s_9: "bNJM",
		s_n: "_2kln",
		s_d: "hOfM",
		s_d_c: "_2tuY"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(256);
	var _index2 = _interopRequireDefault(_index);
	var _const = __webpack_require__(215);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}
			return arr2;
		} else {
			return Array.from(arr);
		}
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var xy = {
		I: [1, 0],
		L: [0, 0],
		J: [0, 0],
		Z: [0, 0],
		S: [0, 0],
		O: [0, 1],
		T: [0, 0]
	};
	var empty = [[0, 0, 0, 0], [0, 0, 0, 0]];
	var Next = function (_React$Component) {
		_inherits(Next, _React$Component);
		function Next() {
			_classCallCheck(this, Next);
			var _this = _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).call(this));
			_this.state = {
				block: empty
			};
			return _this;
		}
		_createClass(Next, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.build(this.props.data);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				this.build(nextProps.data);
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.data !== this.props.data;
			}
		}, {
			key: "build",
			value: function build(type) {
				var shape = _const.blockShape[type];
				var block = empty.map(function (e) {
					return [].concat(_toConsumableArray(e));
				});
				shape.forEach(function (m, k1) {
					m.forEach(function (n, k2) {
						if (n) {
							block[k1 + xy[type][0]][k2 + xy[type][1]] = 1;
						}
					});
				});
				this.setState({
					block: block
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", {
					className: _index2.default.next
				}, this.state.block.map(function (arr, k1) {
					return _react2.default.createElement("div", {
						key: k1
					}, arr.map(function (e, k2) {
						return _react2.default.createElement("b", {
							className: e ? "c" : "",
							key: k2
						});
					}));
				}));
			}
		}]);
		return Next;
	}(_react2.default.Component);
	exports.default = Next;
	Next.propTypes = {
		data: _propTypes2.default.string
	};
}, function (module, exports) {
	module.exports = {
		next: "_3Wmt"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(258);
	var _index2 = _interopRequireDefault(_index);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Music = function (_React$Component) {
		_inherits(Music, _React$Component);
		function Music() {
			_classCallCheck(this, Music);
			return _possibleConstructorReturn(this, (Music.__proto__ || Object.getPrototypeOf(Music)).apply(this, arguments));
		}
		_createClass(Music, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref) {
				var data = _ref.data;
				return data !== this.props.data;
			}
		}, {
			key: "render",
			value: function render() {
				var _cn;
				return _react2.default.createElement("div", {
					className: (0, _classnames2.default)((_cn = {
						bg: true
					}, _defineProperty(_cn, _index2.default.music, true), _defineProperty(_cn, _index2.default.c, !this.props.data),
						_cn))
				});
			}
		}]);
		return Music;
	}(_react2.default.Component);
	exports.default = Music;
	Music.propTypes = {
		data: _propTypes2.default.bool.isRequired
	};
}, function (module, exports) {
	module.exports = {
		music: "EHci",
		c: "TTF4"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(260);
	var _index2 = _interopRequireDefault(_index);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Pause = function (_React$Component) {
		_inherits(Pause, _React$Component);
		function Pause() {
			_classCallCheck(this, Pause);
			var _this = _possibleConstructorReturn(this, (Pause.__proto__ || Object.getPrototypeOf(Pause)).call(this));
			_this.state = {
				showPause: false
			};
			return _this;
		}
		_createClass(Pause, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.setShake(this.props.data);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(_ref) {
				var data = _ref.data;
				this.setShake(data);
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref2) {
				var data = _ref2.data;
				if (data) {
					return true;
				}
				return data !== this.props.data;
			}
		}, {
			key: "setShake",
			value: function setShake(bool) {
				var _this2 = this;
				if (bool && !Pause.timeout) {
					Pause.timeout = setInterval(function () {
						_this2.setState({
							showPause: !_this2.state.showPause
						});
					}, 250);
				}
				if (!bool && Pause.timeout) {
					clearInterval(Pause.timeout);
					this.setState({
						showPause: false
					});
					Pause.timeout = null;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _cn;
				return _react2.default.createElement("div", {
					className: (0, _classnames2.default)((_cn = {
						bg: true
					}, _defineProperty(_cn, _index2.default.pause, true), _defineProperty(_cn, _index2.default.c, this.state.showPause),
						_cn))
				});
			}
		}]);
		return Pause;
	}(_react2.default.Component);
	exports.default = Pause;
	Pause.statics = {
		timeout: null
	};
	Pause.propTypes = {
		data: _propTypes2.default.bool.isRequired
	};
	Pause.defaultProps = {
		data: false
	};
}, function (module, exports) {
	module.exports = {
		pause: "_37mu",
		c: "_1vhq"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _number = __webpack_require__(253);
	var _number2 = _interopRequireDefault(_number);
	var _const = __webpack_require__(215);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var DF = _const.i18n.point[_const.lan];
	var ZDF = _const.i18n.highestScore[_const.lan];
	var SLDF = _const.i18n.lastRound[_const.lan];
	var Point = function (_React$Component) {
		_inherits(Point, _React$Component);
		function Point() {
			_classCallCheck(this, Point);
			var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this));
			_this.state = {
				label: "",
				number: 0
			};
			return _this;
		}
		_createClass(Point, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.onChange(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				this.onChange(nextProps);
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref) {
				var cur = _ref.cur, point = _ref.point, max = _ref.max;
				var props = this.props;
				return cur !== props.cur || point !== props.point || max !== props.max || !props.cur;
			}
		}, {
			key: "onChange",
			value: function onChange(_ref2) {
				var _this2 = this;
				var cur = _ref2.cur, point = _ref2.point, max = _ref2.max;
				clearInterval(Point.timeout);
				if (cur) {
					this.setState({
						label: point >= max ? ZDF : DF,
						number: point
					});
				} else {
					var toggle = function toggle() {
						_this2.setState({
							label: SLDF,
							number: point
						});
						Point.timeout = setTimeout(function () {
							_this2.setState({
								label: ZDF,
								number: max
							});
							Point.timeout = setTimeout(toggle, 3e3);
						}, 3e3);
					};
					if (point !== 0) {
						toggle();
					} else {
						this.setState({
							label: ZDF,
							number: max
						});
					}
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", null, _react2.default.createElement("p", null, this.state.label), _react2.default.createElement(_number2.default, {
					number: this.state.number
				}));
			}
		}]);
		return Point;
	}(_react2.default.Component);
	exports.default = Point;
	Point.statics = {
		timeout: null
	};
	Point.propTypes = {
		cur: _propTypes2.default.bool,
		max: _propTypes2.default.number.isRequired,
		point: _propTypes2.default.number.isRequired
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(263);
	var _index2 = _interopRequireDefault(_index);
	var _const = __webpack_require__(215);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Logo = function (_React$Component) {
		_inherits(Logo, _React$Component);
		function Logo() {
			_classCallCheck(this, Logo);
			var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this));
			_this.state = {
				style: _index2.default.r1,
				display: "none"
			};
			return _this;
		}
		_createClass(Logo, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.animate(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				if ([this.props.cur, nextProps.cur].indexOf(false) !== -1 && this.props.cur !== nextProps.cur || this.props.reset !== nextProps.reset) {
					this.animate(nextProps);
				}
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref) {
				var cur = _ref.cur, reset = _ref.reset;
				return cur !== this.props.cur || reset !== this.props.reset || !cur;
			}
		}, {
			key: "animate",
			value: function animate(_ref2) {
				var _this2 = this;
				var cur = _ref2.cur, reset = _ref2.reset;
				clearTimeout(Logo.timeout);
				this.setState({
					style: _index2.default.r1,
					display: "none"
				});
				if (cur || reset) {
					this.setState({
						display: "none"
					});
					return;
				}
				var m = "r";
				var count = 0;
				var set = function set(func, delay) {
					if (!func) {
						return;
					}
					Logo.timeout = setTimeout(func, delay);
				};
				var show = function show(func) {
					set(function () {
						_this2.setState({
							display: "block"
						});
						if (func) {
							func();
						}
					}, 150);
				};
				var hide = function hide(func) {
					set(function () {
						_this2.setState({
							display: "none"
						});
						if (func) {
							func();
						}
					}, 150);
				};
				var eyes = function eyes(func, delay1, delay2) {
					set(function () {
						_this2.setState({
							style: _index2.default[m + 2]
						});
						set(function () {
							_this2.setState({
								style: _index2.default[m + 1]
							});
							if (func) {
								func();
							}
						}, delay2);
					}, delay1);
				};
				var run = function run(func) {
					set(function () {
						_this2.setState({
							style: _index2.default[m + 4]
						});
						set(function () {
							_this2.setState({
								style: _index2.default[m + 3]
							});
							count++;
							if (count === 10 || count === 20 || count === 30) {
								m = m === "r" ? "l" : "r";
							}
							if (count < 40) {
								run(func);
								return;
							}
							_this2.setState({
								style: _index2.default[m + 1]
							});
							if (func) {
								set(func, 4e3);
							}
						}, 100);
					}, 100);
				};
				var dra = function dra() {
					count = 0;
					eyes(function () {
						eyes(function () {
							eyes(function () {
								_this2.setState({
									style: _index2.default[m + 2]
								});
								run(dra);
							}, 150, 150);
						}, 150, 150);
					}, 1e3, 1500);
				};
				show(function () {
					hide(function () {
						show(function () {
							hide(function () {
								show(function () {
									dra();
								});
							});
						});
					});
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _cn;
				if (this.props.cur) {
					return null;
				}
				return _react2.default.createElement("div", {
					className: _index2.default.logo,
					style: {
						display: this.state.display
					}
				}, _react2.default.createElement("div", {
					className: (0, _classnames2.default)((_cn = {
						bg: true
					}, _defineProperty(_cn, _index2.default.dragon, true), _defineProperty(_cn, this.state.style, true),
						_cn))
				}), _react2.default.createElement("p", {
					dangerouslySetInnerHTML: {
						__html: _const.i18n.titleCenter[_const.lan]
					}
				}));
			}
		}]);
		return Logo;
	}(_react2.default.Component);
	exports.default = Logo;
	Logo.propTypes = {
		cur: _propTypes2.default.bool,
		reset: _propTypes2.default.bool.isRequired
	};
	Logo.statics = {
		timeout: null
	};
}, function (module, exports) {
	module.exports = {
		logo: "_20Jp",
		dragon: "AFTs",
		r1: "_3j_b",
		l1: "_26pe",
		r2: "_1Fxd",
		l2: "_7ELJ",
		r3: "_9lMe",
		l3: "_1JBw",
		r4: "_3aQ-",
		l4: "_2aGx"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _immutable = __webpack_require__(208);
	var _immutable2 = _interopRequireDefault(_immutable);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(265);
	var _index2 = _interopRequireDefault(_index);
	var _button = __webpack_require__(266);
	var _button2 = _interopRequireDefault(_button);
	var _store = __webpack_require__(204);
	var _store2 = _interopRequireDefault(_store);
	var _todo = __webpack_require__(268);
	var _todo2 = _interopRequireDefault(_todo);
	var _const = __webpack_require__(215);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Keyboard = function (_React$Component) {
		_inherits(Keyboard, _React$Component);
		function Keyboard() {
			_classCallCheck(this, Keyboard);
			return _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).apply(this, arguments));
		}
		_createClass(Keyboard, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this2 = this;
				var touchEventCatch = {};
				var mouseDownEventCatch = {};
				document.addEventListener("touchstart", function (e) {
					if (e.preventDefault) {
						e.preventDefault();
					}
				}, true);
				document.addEventListener("touchend", function (e) {
					if (e.preventDefault) {
						e.preventDefault();
					}
				}, true);
				document.addEventListener("gesturestart", function (e) {
					if (e.preventDefault) {
						event.preventDefault();
					}
				});
				document.addEventListener("mousedown", function (e) {
					if (e.preventDefault) {
						e.preventDefault();
					}
				}, true);
				Object.keys(_todo2.default).forEach(function (key) {
					_this2["dom_" + key].dom.addEventListener("mousedown", function () {
						if (touchEventCatch[key] === true) {
							return;
						}
						_todo2.default[key].down(_store2.default);
						mouseDownEventCatch[key] = true;
					}, true);
					_this2["dom_" + key].dom.addEventListener("mouseup", function () {
						if (touchEventCatch[key] === true) {
							touchEventCatch[key] = false;
							return;
						}
						_todo2.default[key].up(_store2.default);
						mouseDownEventCatch[key] = false;
					}, true);
					_this2["dom_" + key].dom.addEventListener("mouseout", function () {
						if (mouseDownEventCatch[key] === true) {
							_todo2.default[key].up(_store2.default);
						}
					}, true);
					_this2["dom_" + key].dom.addEventListener("touchstart", function () {
						touchEventCatch[key] = true;
						_todo2.default[key].down(_store2.default);
					}, true);
					_this2["dom_" + key].dom.addEventListener("touchend", function () {
						_todo2.default[key].up(_store2.default);
					}, true);
				});
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(_ref) {
				var keyboard = _ref.keyboard, filling = _ref.filling;
				return !_immutable2.default.is(keyboard, this.props.keyboard) || filling !== this.props.filling;
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
				var keyboard = this.props.keyboard;
				return _react2.default.createElement("div", {
					className: _index2.default.keyboard,
					style: {
						marginTop: 20 + this.props.filling
					}
				}, _react2.default.createElement(_button2.default, {
					color: "blue",
					size: "s1",
					top: 0,
					left: 374,
					label: _const.i18n.rotation[_const.lan],
					arrow: "translate(0, 63px)",
					position: true,
					active: keyboard.get("rotate"),
					ref: function ref(c) {
						_this3.dom_rotate = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "blue",
					size: "s1",
					top: 180,
					left: 374,
					label: _const.i18n.down[_const.lan],
					arrow: "translate(0,-71px) rotate(180deg)",
					active: keyboard.get("down"),
					ref: function ref(c) {
						_this3.dom_down = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "blue",
					size: "s1",
					top: 90,
					left: 284,
					label: _const.i18n.left[_const.lan],
					arrow: "translate(60px, -12px) rotate(270deg)",
					active: keyboard.get("left"),
					ref: function ref(c) {
						_this3.dom_left = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "blue",
					size: "s1",
					top: 90,
					left: 464,
					label: _const.i18n.right[_const.lan],
					arrow: "translate(-60px, -12px) rotate(90deg)",
					active: keyboard.get("right"),
					ref: function ref(c) {
						_this3.dom_right = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "blue",
					size: "s0",
					top: 100,
					left: 52,
					label: _const.i18n.drop[_const.lan] + " (SPACE)",
					active: keyboard.get("drop"),
					ref: function ref(c) {
						_this3.dom_space = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "red",
					size: "s2",
					top: 0,
					left: 196,
					label: _const.i18n.reset[_const.lan] + "(R)",
					active: keyboard.get("reset"),
					ref: function ref(c) {
						_this3.dom_r = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "green",
					size: "s2",
					top: 0,
					left: 106,
					label: _const.i18n.sound[_const.lan] + "(S)",
					active: keyboard.get("music"),
					ref: function ref(c) {
						_this3.dom_s = c;
					}
				}), _react2.default.createElement(_button2.default, {
					color: "green",
					size: "s2",
					top: 0,
					left: 16,
					label: _const.i18n.pause[_const.lan] + "(P)",
					active: keyboard.get("pause"),
					ref: function ref(c) {
						_this3.dom_p = c;
					}
				}));
			}
		}]);
		return Keyboard;
	}(_react2.default.Component);
	exports.default = Keyboard;
	Keyboard.propTypes = {
		filling: _propTypes2.default.number.isRequired,
		keyboard: _propTypes2.default.object.isRequired
	};
}, function (module, exports) {
	module.exports = {
		keyboard: "J9SA"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(244);
	var _classnames2 = _interopRequireDefault(_classnames);
	var _propTypes = __webpack_require__(175);
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _index = __webpack_require__(267);
	var _index2 = _interopRequireDefault(_index);
	var _const = __webpack_require__(215);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);
		function Button() {
			_classCallCheck(this, Button);
			return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
		}
		_createClass(Button, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.active !== this.props.active;
			}
		}, {
			key: "render",
			value: function render() {
				var _cn, _this2 = this;
				var _props = this.props, active = _props.active, color = _props.color, size = _props.size, top = _props.top, left = _props.left, label = _props.label, position = _props.position, arrow = _props.arrow;
				return _react2.default.createElement("div", {
					className: (0, _classnames2.default)((_cn = {}, _defineProperty(_cn, _index2.default.button, true),
						_defineProperty(_cn, _index2.default[color], true), _defineProperty(_cn, _index2.default[size], true),
						_cn)),
					style: {
						top: top,
						left: left
					}
				}, _react2.default.createElement("i", {
					className: (0, _classnames2.default)(_defineProperty({}, _index2.default.active, active)),
					ref: function ref(c) {
						_this2.dom = c;
					}
				}), size === "s1" && _react2.default.createElement("em", {
					style: _defineProperty({}, _const.transform, arrow + " scale(1,2)")
				}), _react2.default.createElement("span", {
					className: (0, _classnames2.default)(_defineProperty({}, _index2.default.position, position))
				}, label));
			}
		}]);
		return Button;
	}(_react2.default.Component);
	exports.default = Button;
	Button.propTypes = {
		color: _propTypes2.default.string.isRequired,
		size: _propTypes2.default.string.isRequired,
		top: _propTypes2.default.number.isRequired,
		left: _propTypes2.default.number.isRequired,
		label: _propTypes2.default.string.isRequired,
		position: _propTypes2.default.bool,
		arrow: _propTypes2.default.string,
		active: _propTypes2.default.bool.isRequired
	};
}, function (module, exports) {
	module.exports = {
		button: "_1pg0",
		s2: "oW6K",
		position: "_1zCL",
		active: "_23aw",
		blue: "_23pZ",
		green: "RBZg",
		red: "_3kg_",
		s0: "p4fG",
		s1: "_2TvZ"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _left = __webpack_require__(269);
	var _left2 = _interopRequireDefault(_left);
	var _right = __webpack_require__(271);
	var _right2 = _interopRequireDefault(_right);
	var _down = __webpack_require__(272);
	var _down2 = _interopRequireDefault(_down);
	var _rotate = __webpack_require__(273);
	var _rotate2 = _interopRequireDefault(_rotate);
	var _space = __webpack_require__(274);
	var _space2 = _interopRequireDefault(_space);
	var _s = __webpack_require__(275);
	var _s2 = _interopRequireDefault(_s);
	var _r = __webpack_require__(276);
	var _r2 = _interopRequireDefault(_r);
	var _p = __webpack_require__(277);
	var _p2 = _interopRequireDefault(_p);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	exports.default = {
		left: _left2.default,
		down: _down2.default,
		rotate: _rotate2.default,
		right: _right2.default,
		space: _space2.default,
		r: _r2.default,
		p: _p2.default,
		s: _s2.default
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _const = __webpack_require__(215);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.left(true));
		_event2.default.down({
			key: "left",
			begin: 200,
			interval: 100,
			callback: function callback() {
				var state = store.getState();
				if (state.get("lock")) {
					return;
				}
				if (_music.music.move) {
					_music.music.move();
				}
				var cur = state.get("cur");
				if (cur !== null) {
					if (state.get("pause")) {
						_states2.default.pause(false);
						return;
					}
					var next = cur.left();
					var delay = _const.delays[state.get("speedRun") - 1];
					var timeStamp = void 0;
					if ((0, _unit.want)(next, state.get("matrix"))) {
						next.timeStamp += parseInt(delay, 10);
						store.dispatch(_actions2.default.moveBlock(next));
						timeStamp = next.timeStamp;
					} else {
						cur.timeStamp += parseInt(parseInt(delay, 10) / 1.5, 10);
						store.dispatch(_actions2.default.moveBlock(cur));
						timeStamp = cur.timeStamp;
					}
					var remain = _const.speeds[state.get("speedRun") - 1] - (Date.now() - timeStamp);
					_states2.default.auto(remain);
				} else {
					var speed = state.get("speedStart");
					speed = speed - 1 < 1 ? 6 : speed - 1;
					store.dispatch(_actions2.default.speedStart(speed));
				}
			}
		});
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.left(false));
		_event2.default.up({
			key: "left"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var eventName = {};
	var down = function down(o) {
		var keys = Object.keys(eventName);
		keys.forEach(function (i) {
			clearTimeout(eventName[i]);
			eventName[i] = null;
		});
		if (!o.callback) {
			return;
		}
		var clear = function clear() {
			clearTimeout(eventName[o.key]);
		};
		o.callback(clear);
		if (o.once === true) {
			return;
		}
		var begin = o.begin || 100;
		var interval = o.interval || 50;
		var loop = function loop() {
			eventName[o.key] = setTimeout(function () {
				begin = null;
				loop();
				o.callback(clear);
			}, begin || interval);
		};
		loop();
	};
	var up = function up(o) {
		clearTimeout(eventName[o.key]);
		eventName[o.key] = null;
		if (!o.callback) {
			return;
		}
		o.callback();
	};
	var clearAll = function clearAll() {
		var keys = Object.keys(eventName);
		keys.forEach(function (i) {
			clearTimeout(eventName[i]);
			eventName[i] = null;
		});
	};
	exports.default = {
		down: down,
		up: up,
		clearAll: clearAll
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _const = __webpack_require__(215);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.right(true));
		_event2.default.down({
			key: "right",
			begin: 200,
			interval: 100,
			callback: function callback() {
				var state = store.getState();
				if (state.get("lock")) {
					return;
				}
				if (_music.music.move) {
					_music.music.move();
				}
				var cur = state.get("cur");
				if (cur !== null) {
					if (state.get("pause")) {
						_states2.default.pause(false);
						return;
					}
					var next = cur.right();
					var delay = _const.delays[state.get("speedRun") - 1];
					var timeStamp = void 0;
					if ((0, _unit.want)(next, state.get("matrix"))) {
						next.timeStamp += parseInt(delay, 10);
						store.dispatch(_actions2.default.moveBlock(next));
						timeStamp = next.timeStamp;
					} else {
						cur.timeStamp += parseInt(parseInt(delay, 10) / 1.5, 10);
						store.dispatch(_actions2.default.moveBlock(cur));
						timeStamp = cur.timeStamp;
					}
					var remain = _const.speeds[state.get("speedRun") - 1] - (Date.now() - timeStamp);
					_states2.default.auto(remain);
				} else {
					var speed = state.get("speedStart");
					speed = speed + 1 > 6 ? 1 : speed + 1;
					store.dispatch(_actions2.default.speedStart(speed));
				}
			}
		});
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.right(false));
		_event2.default.up({
			key: "right"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.down(true));
		if (store.getState().get("cur") !== null) {
			_event2.default.down({
				key: "down",
				begin: 40,
				interval: 40,
				callback: function callback(stopDownTrigger) {
					var state = store.getState();
					if (state.get("lock")) {
						return;
					}
					if (_music.music.move) {
						_music.music.move();
					}
					var cur = state.get("cur");
					if (cur === null) {
						return;
					}
					if (state.get("pause")) {
						_states2.default.pause(false);
						return;
					}
					var next = cur.fall();
					if ((0, _unit.want)(next, state.get("matrix"))) {
						store.dispatch(_actions2.default.moveBlock(next));
						_states2.default.auto();
					} else {
						var matrix = state.get("matrix");
						var shape = cur.shape;
						var xy = cur.xy;
						shape.forEach(function (m, k1) {
							return m.forEach(function (n, k2) {
								if (n && xy.get(0) + k1 >= 0) {
									var line = matrix.get(xy.get(0) + k1);
									line = line.set(xy.get(1) + k2, 1);
									matrix = matrix.set(xy.get(0) + k1, line);
								}
							});
						});
						_states2.default.nextAround(matrix, stopDownTrigger);
					}
				}
			});
		} else {
			_event2.default.down({
				key: "down",
				begin: 200,
				interval: 100,
				callback: function callback() {
					if (store.getState().get("lock")) {
						return;
					}
					var state = store.getState();
					var cur = state.get("cur");
					if (cur) {
						return;
					}
					if (_music.music.move) {
						_music.music.move();
					}
					var startLines = state.get("startLines");
					startLines = startLines - 1 < 0 ? 10 : startLines - 1;
					store.dispatch(_actions2.default.startLines(startLines));
				}
			});
		}
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.down(false));
		_event2.default.up({
			key: "down"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.rotate(true));
		if (store.getState().get("cur") !== null) {
			_event2.default.down({
				key: "rotate",
				once: true,
				callback: function callback() {
					var state = store.getState();
					if (state.get("lock")) {
						return;
					}
					if (state.get("pause")) {
						_states2.default.pause(false);
					}
					var cur = state.get("cur");
					if (cur === null) {
						return;
					}
					if (_music.music.rotate) {
						_music.music.rotate();
					}
					var next = cur.rotate();
					if ((0, _unit.want)(next, state.get("matrix"))) {
						store.dispatch(_actions2.default.moveBlock(next));
					}
				}
			});
		} else {
			_event2.default.down({
				key: "rotate",
				begin: 200,
				interval: 100,
				callback: function callback() {
					if (store.getState().get("lock")) {
						return;
					}
					if (_music.music.move) {
						_music.music.move();
					}
					var state = store.getState();
					var cur = state.get("cur");
					if (cur) {
						return;
					}
					var startLines = state.get("startLines");
					startLines = startLines + 1 > 10 ? 0 : startLines + 1;
					store.dispatch(_actions2.default.startLines(startLines));
				}
			});
		}
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.rotate(false));
		_event2.default.up({
			key: "rotate"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _unit = __webpack_require__(221);
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _music = __webpack_require__(218);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.drop(true));
		_event2.default.down({
			key: "space",
			once: true,
			callback: function callback() {
				var state = store.getState();
				if (state.get("lock")) {
					return;
				}
				var cur = state.get("cur");
				if (cur !== null) {
					if (state.get("pause")) {
						_states2.default.pause(false);
						return;
					}
					if (_music.music.fall) {
						_music.music.fall();
					}
					var index = 0;
					var bottom = cur.fall(index);
					while ((0, _unit.want)(bottom, state.get("matrix"))) {
						bottom = cur.fall(index);
						index++;
					}
					var matrix = state.get("matrix");
					bottom = cur.fall(index - 2);
					store.dispatch(_actions2.default.moveBlock(bottom));
					var shape = bottom.shape;
					var xy = bottom.xy;
					shape.forEach(function (m, k1) {
						return m.forEach(function (n, k2) {
							if (n && xy[0] + k1 >= 0) {
								var line = matrix.get(xy[0] + k1);
								line = line.set(xy[1] + k2, 1);
								matrix = matrix.set(xy[0] + k1, line);
							}
						});
					});
					store.dispatch(_actions2.default.drop(true));
					setTimeout(function () {
						store.dispatch(_actions2.default.drop(false));
					}, 100);
					_states2.default.nextAround(matrix);
				} else {
					_states2.default.start();
				}
			}
		});
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.drop(false));
		_event2.default.up({
			key: "space"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.music(true));
		if (store.getState().get("lock")) {
			return;
		}
		_event2.default.down({
			key: "s",
			once: true,
			callback: function callback() {
				if (store.getState().get("lock")) {
					return;
				}
				store.dispatch(_actions2.default.music(!store.getState().get("music")));
			}
		});
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.music(false));
		_event2.default.up({
			key: "s"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.reset(true));
		if (store.getState().get("lock")) {
			return;
		}
		if (store.getState().get("cur") !== null) {
			_event2.default.down({
				key: "r",
				once: true,
				callback: function callback() {
					_states2.default.overStart();
				}
			});
		} else {
			_event2.default.down({
				key: "r",
				once: true,
				callback: function callback() {
					if (store.getState().get("lock")) {
						return;
					}
					_states2.default.start();
				}
			});
		}
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.reset(false));
		_event2.default.up({
			key: "r"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _event = __webpack_require__(270);
	var _event2 = _interopRequireDefault(_event);
	var _states = __webpack_require__(248);
	var _states2 = _interopRequireDefault(_states);
	var _actions = __webpack_require__(249);
	var _actions2 = _interopRequireDefault(_actions);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var down = function down(store) {
		store.dispatch(_actions2.default.keyboard.pause(true));
		_event2.default.down({
			key: "p",
			once: true,
			callback: function callback() {
				var state = store.getState();
				if (state.get("lock")) {
					return;
				}
				var cur = state.get("cur");
				var isPause = state.get("pause");
				if (cur !== null) {
					_states2.default.pause(!isPause);
				} else {
					_states2.default.start();
				}
			}
		});
	};
	var up = function up(store) {
		store.dispatch(_actions2.default.keyboard.pause(false));
		_event2.default.up({
			key: "p"
		});
	};
	exports.default = {
		down: down,
		up: up
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = __webpack_require__(1);
	var _react2 = _interopRequireDefault(_react);
	var _qrcode = __webpack_require__(279);
	var _qrcode2 = _interopRequireDefault(_qrcode);
	var _index = __webpack_require__(307);
	var _index2 = _interopRequireDefault(_index);
	var _const = __webpack_require__(215);
	var _unit = __webpack_require__(221);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var Guide = function (_React$Component) {
		_inherits(Guide, _React$Component);
		function Guide() {
			_classCallCheck(this, Guide);
			var _this = _possibleConstructorReturn(this, (Guide.__proto__ || Object.getPrototypeOf(Guide)).call(this));
			_this.state = {
				isMobile: (0, _unit.isMobile)(),
				QRCode: ""
			};
			return _this;
		}
		_createClass(Guide, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _this2 = this;
				if (this.state.isMobile) {
					return;
				}
				_qrcode2.default.toDataURL(location.href, {
					margin: 1
				}).then(function (dataUrl) {
					return _this2.setState({
						QRCode: dataUrl
					});
				});
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(state) {
				if (state.QRCode === this.state.QRCode) {
					return false;
				}
				return true;
			}
		}, {
			key: "render",
			value: function render() {
				var _ref5, _ref6;
				if (this.state.isMobile) {
					return null;
				}
				return _react2.default.createElement("div", {
					style: {
						display: this.state.isMobile ? "none" : "block"
					}
				}, _react2.default.createElement("div", {
					className: _index2.default.guide + " " + _index2.default.right
				}, _react2.default.createElement("div", {
					className: _index2.default.up
				}, _react2.default.createElement("em", {
					style: _defineProperty({}, _const.transform, "translate(0,-3px) scale(1,2)")
				})), _react2.default.createElement("div", {
					className: _index2.default.left
				}, _react2.default.createElement("em", {
					style: _defineProperty({}, _const.transform, "translate(-7px,3px) rotate(-90deg) scale(1,2)")
				})), _react2.default.createElement("div", {
					className: _index2.default.down
				}, _react2.default.createElement("em", {
					style: _defineProperty({}, _const.transform, "translate(0,9px) rotate(180deg) scale(1,2)")
				})), _react2.default.createElement("div", {
					className: _index2.default.right
				}, _react2.default.createElement("em", {
					style: _defineProperty({}, _const.transform, "translate(7px,3px)rotate(90deg) scale(1,2)")
				}))), _react2.default.createElement("div", {
					className: _index2.default.guide + " " + _index2.default.left
				}, _react2.default.createElement("p", null, _react2.default.createElement("a", {
					href: "https://github.com/chvin/react-tetris",
					rel: "noopener noreferrer",
					target: "_blank",
					title: _const.i18n.linkTitle[_const.lan]
				}, _const.i18n.github[_const.lan] + ":"), _react2.default.createElement("br", null), _react2.default.createElement("iframe", {
					src: "about:blank",
					frameBorder: "0",
					scrolling: "0",
					width: "170px",
					height: "20px",
					style: (_ref5 = {}, _defineProperty(_ref5, _const.transform, "scale(1.68)"), _defineProperty(_ref5, _const.transform + "Origin", "center left"),
						_ref5)
				}), _react2.default.createElement("br", null), _react2.default.createElement("iframe", {
					src: "about:blank",
					frameBorder: "0",
					scrolling: "0",
					width: "170px",
					height: "20px",
					style: (_ref6 = {}, _defineProperty(_ref6, _const.transform, "scale(1.68)"), _defineProperty(_ref6, _const.transform + "Origin", "center left"),
						_ref6)
				})), _react2.default.createElement("div", {
					className: _index2.default.space
				}, "SPACE")), this.state.QRCode !== "" ? _react2.default.createElement("div", {
					className: _index2.default.guide + " " + _index2.default.qr
				}, _react2.default.createElement("img", {
					src: this.state.QRCode,
					alt: _const.i18n.QRCode[_const.lan]
				})) : null);
			}
		}]);
		return Guide;
	}(_react2.default.Component);
	exports.default = Guide;
}, function (module, exports, __webpack_require__) {
	const canPromise = __webpack_require__(280);
	const QRCode = __webpack_require__(281);
	const CanvasRenderer = __webpack_require__(304);
	const SvgRenderer = __webpack_require__(306);
	function renderCanvas(renderFunc, canvas, text, opts, cb) {
		const args = [].slice.call(arguments, 1);
		const argsNum = args.length;
		const isLastArgCb = typeof args[argsNum - 1] === "function";
		if (!isLastArgCb && !canPromise()) {
			throw new Error("Callback required as last argument");
		}
		if (isLastArgCb) {
			if (argsNum < 2) {
				throw new Error("Too few arguments provided");
			}
			if (argsNum === 2) {
				cb = text;
				text = canvas;
				canvas = opts = undefined;
			} else if (argsNum === 3) {
				if (canvas.getContext && typeof cb === "undefined") {
					cb = opts;
					opts = undefined;
				} else {
					cb = opts;
					opts = text;
					text = canvas;
					canvas = undefined;
				}
			}
		} else {
			if (argsNum < 1) {
				throw new Error("Too few arguments provided");
			}
			if (argsNum === 1) {
				text = canvas;
				canvas = opts = undefined;
			} else if (argsNum === 2 && !canvas.getContext) {
				opts = text;
				text = canvas;
				canvas = undefined;
			}
			return new Promise(function (resolve, reject) {
				try {
					const data = QRCode.create(text, opts);
					resolve(renderFunc(data, canvas, opts));
				} catch (e) {
					reject(e);
				}
			});
		}
		try {
			const data = QRCode.create(text, opts);
			cb(null, renderFunc(data, canvas, opts));
		} catch (e) {
			cb(e);
		}
	}
	exports.create = QRCode.create;
	exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
	exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
	exports.toString = renderCanvas.bind(null, function (data, _, opts) {
		return SvgRenderer.render(data, opts);
	});
}, function (module, exports) {
	module.exports = function () {
		return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
	};
}, function (module, exports, __webpack_require__) {
	const Utils = __webpack_require__(282);
	const ECLevel = __webpack_require__(283);
	const BitBuffer = __webpack_require__(284);
	const BitMatrix = __webpack_require__(285);
	const AlignmentPattern = __webpack_require__(286);
	const FinderPattern = __webpack_require__(287);
	const MaskPattern = __webpack_require__(288);
	const ECCode = __webpack_require__(289);
	const ReedSolomonEncoder = __webpack_require__(290);
	const Version = __webpack_require__(293);
	const FormatInfo = __webpack_require__(297);
	const Mode = __webpack_require__(294);
	const Segments = __webpack_require__(298);
	function setupFinderPattern(matrix, version) {
		const size = matrix.size;
		const pos = FinderPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -1; r <= 7; r++) {
				if (row + r <= -1 || size <= row + r) continue;
				for (let c = -1; c <= 7; c++) {
					if (col + c <= -1 || size <= col + c) continue;
					if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
						matrix.set(row + r, col + c, true, true);
					} else {
						matrix.set(row + r, col + c, false, true);
					}
				}
			}
		}
	}
	function setupTimingPattern(matrix) {
		const size = matrix.size;
		for (let r = 8; r < size - 8; r++) {
			const value = r % 2 === 0;
			matrix.set(r, 6, value, true);
			matrix.set(6, r, value, true);
		}
	}
	function setupAlignmentPattern(matrix, version) {
		const pos = AlignmentPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -2; r <= 2; r++) {
				for (let c = -2; c <= 2; c++) {
					if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
						matrix.set(row + r, col + c, true, true);
					} else {
						matrix.set(row + r, col + c, false, true);
					}
				}
			}
		}
	}
	function setupVersionInfo(matrix, version) {
		const size = matrix.size;
		const bits = Version.getEncodedBits(version);
		let row, col, mod;
		for (let i = 0; i < 18; i++) {
			row = Math.floor(i / 3);
			col = i % 3 + size - 8 - 3;
			mod = (bits >> i & 1) === 1;
			matrix.set(row, col, mod, true);
			matrix.set(col, row, mod, true);
		}
	}
	function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
		const size = matrix.size;
		const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
		let i, mod;
		for (i = 0; i < 15; i++) {
			mod = (bits >> i & 1) === 1;
			if (i < 6) {
				matrix.set(i, 8, mod, true);
			} else if (i < 8) {
				matrix.set(i + 1, 8, mod, true);
			} else {
				matrix.set(size - 15 + i, 8, mod, true);
			}
			if (i < 8) {
				matrix.set(8, size - i - 1, mod, true);
			} else if (i < 9) {
				matrix.set(8, 15 - i - 1 + 1, mod, true);
			} else {
				matrix.set(8, 15 - i - 1, mod, true);
			}
		}
		matrix.set(size - 8, 8, 1, true);
	}
	function setupData(matrix, data) {
		const size = matrix.size;
		let inc = -1;
		let row = size - 1;
		let bitIndex = 7;
		let byteIndex = 0;
		for (let col = size - 1; col > 0; col -= 2) {
			if (col === 6) col--;
			while (true) {
				for (let c = 0; c < 2; c++) {
					if (!matrix.isReserved(row, col - c)) {
						let dark = false;
						if (byteIndex < data.length) {
							dark = (data[byteIndex] >>> bitIndex & 1) === 1;
						}
						matrix.set(row, col - c, dark);
						bitIndex--;
						if (bitIndex === -1) {
							byteIndex++;
							bitIndex = 7;
						}
					}
				}
				row += inc;
				if (row < 0 || size <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	}
	function createData(version, errorCorrectionLevel, segments) {
		const buffer = new BitBuffer;
		segments.forEach(function (data) {
			buffer.put(data.mode.bit, 4);
			buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
			data.write(buffer);
		});
		const totalCodewords = Utils.getSymbolTotalCodewords(version);
		const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
		if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
			buffer.put(0, 4);
		}
		while (buffer.getLengthInBits() % 8 !== 0) {
			buffer.putBit(0);
		}
		const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
		for (let i = 0; i < remainingByte; i++) {
			buffer.put(i % 2 ? 17 : 236, 8);
		}
		return createCodewords(buffer, version, errorCorrectionLevel);
	}
	function createCodewords(bitBuffer, version, errorCorrectionLevel) {
		const totalCodewords = Utils.getSymbolTotalCodewords(version);
		const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const dataTotalCodewords = totalCodewords - ecTotalCodewords;
		const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
		const blocksInGroup2 = totalCodewords % ecTotalBlocks;
		const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
		const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
		const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
		const rs = new ReedSolomonEncoder(ecCount);
		let offset = 0;
		const dcData = new Array(ecTotalBlocks);
		const ecData = new Array(ecTotalBlocks);
		let maxDataSize = 0;
		const buffer = new Uint8Array(bitBuffer.buffer);
		for (let b = 0; b < ecTotalBlocks; b++) {
			const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
			dcData[b] = buffer.slice(offset, offset + dataSize);
			ecData[b] = rs.encode(dcData[b]);
			offset += dataSize;
			maxDataSize = Math.max(maxDataSize, dataSize);
		}
		const data = new Uint8Array(totalCodewords);
		let index = 0;
		let i, r;
		for (i = 0; i < maxDataSize; i++) {
			for (r = 0; r < ecTotalBlocks; r++) {
				if (i < dcData[r].length) {
					data[index++] = dcData[r][i];
				}
			}
		}
		for (i = 0; i < ecCount; i++) {
			for (r = 0; r < ecTotalBlocks; r++) {
				data[index++] = ecData[r][i];
			}
		}
		return data;
	}
	function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
		let segments;
		if (Array.isArray(data)) {
			segments = Segments.fromArray(data);
		} else if (typeof data === "string") {
			let estimatedVersion = version;
			if (!estimatedVersion) {
				const rawSegments = Segments.rawSplit(data);
				estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
			}
			segments = Segments.fromString(data, estimatedVersion || 40);
		} else {
			throw new Error("Invalid data");
		}
		const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
		if (!bestVersion) {
			throw new Error("The amount of data is too big to be stored in a QR Code");
		}
		if (!version) {
			version = bestVersion;
		} else if (version < bestVersion) {
			throw new Error("\n" + "The chosen QR Code version cannot contain this amount of data.\n" + "Minimum version required to store current data is: " + bestVersion + ".\n");
		}
		const dataBits = createData(version, errorCorrectionLevel, segments);
		const moduleCount = Utils.getSymbolSize(version);
		const modules = new BitMatrix(moduleCount);
		setupFinderPattern(modules, version);
		setupTimingPattern(modules);
		setupAlignmentPattern(modules, version);
		setupFormatInfo(modules, errorCorrectionLevel, 0);
		if (version >= 7) {
			setupVersionInfo(modules, version);
		}
		setupData(modules, dataBits);
		if (isNaN(maskPattern)) {
			maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
		}
		MaskPattern.applyMask(maskPattern, modules);
		setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
		return {
			modules: modules,
			version: version,
			errorCorrectionLevel: errorCorrectionLevel,
			maskPattern: maskPattern,
			segments: segments
		};
	}
	exports.create = function create(data, options) {
		if (typeof data === "undefined" || data === "") {
			throw new Error("No input text");
		}
		let errorCorrectionLevel = ECLevel.M;
		let version;
		let mask;
		if (typeof options !== "undefined") {
			errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
			version = Version.from(options.version);
			mask = MaskPattern.from(options.maskPattern);
			if (options.toSJISFunc) {
				Utils.setToSJISFunction(options.toSJISFunc);
			}
		}
		return createSymbol(data, version, errorCorrectionLevel, mask);
	};
}, function (module, exports) {
	let toSJISFunction;
	const CODEWORDS_COUNT = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
	exports.getSymbolSize = function getSymbolSize(version) {
		if (!version) throw new Error('"version" cannot be null or undefined');
		if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
		return version * 4 + 17;
	};
	exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
		return CODEWORDS_COUNT[version];
	};
	exports.getBCHDigit = function (data) {
		let digit = 0;
		while (data !== 0) {
			digit++;
			data >>>= 1;
		}
		return digit;
	};
	exports.setToSJISFunction = function setToSJISFunction(f) {
		if (typeof f !== "function") {
			throw new Error('"toSJISFunc" is not a valid function.');
		}
		toSJISFunction = f;
	};
	exports.isKanjiModeEnabled = function () {
		return typeof toSJISFunction !== "undefined";
	};
	exports.toSJIS = function toSJIS(kanji) {
		return toSJISFunction(kanji);
	};
}, function (module, exports) {
	exports.L = {
		bit: 1
	};
	exports.M = {
		bit: 0
	};
	exports.Q = {
		bit: 3
	};
	exports.H = {
		bit: 2
	};
	function fromString(string) {
		if (typeof string !== "string") {
			throw new Error("Param is not a string");
		}
		const lcStr = string.toLowerCase();
		switch (lcStr) {
			case "l":
			case "low":
				return exports.L;

			case "m":
			case "medium":
				return exports.M;

			case "q":
			case "quartile":
				return exports.Q;

			case "h":
			case "high":
				return exports.H;

			default:
				throw new Error("Unknown EC Level: " + string);
		}
	}
	exports.isValid = function isValid(level) {
		return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
	};
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) {
			return value;
		}
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}, function (module, exports) {
	function BitBuffer() {
		this.buffer = [];
		this.length = 0;
	}
	BitBuffer.prototype = {
		get: function (index) {
			const bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
		},
		put: function (num, length) {
			for (let i = 0; i < length; i++) {
				this.putBit((num >>> length - i - 1 & 1) === 1);
			}
		},
		getLengthInBits: function () {
			return this.length;
		},
		putBit: function (bit) {
			const bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) {
				this.buffer.push(0);
			}
			if (bit) {
				this.buffer[bufIndex] |= 128 >>> this.length % 8;
			}
			this.length++;
		}
	};
	module.exports = BitBuffer;
}, function (module, exports) {
	function BitMatrix(size) {
		if (!size || size < 1) {
			throw new Error("BitMatrix size must be defined and greater than 0");
		}
		this.size = size;
		this.data = new Uint8Array(size * size);
		this.reservedBit = new Uint8Array(size * size);
	}
	BitMatrix.prototype.set = function (row, col, value, reserved) {
		const index = row * this.size + col;
		this.data[index] = value;
		if (reserved) this.reservedBit[index] = true;
	};
	BitMatrix.prototype.get = function (row, col) {
		return this.data[row * this.size + col];
	};
	BitMatrix.prototype.xor = function (row, col, value) {
		this.data[row * this.size + col] ^= value;
	};
	BitMatrix.prototype.isReserved = function (row, col) {
		return this.reservedBit[row * this.size + col];
	};
	module.exports = BitMatrix;
}, function (module, exports, __webpack_require__) {
	const getSymbolSize = __webpack_require__(282).getSymbolSize;
	exports.getRowColCoords = function getRowColCoords(version) {
		if (version === 1) return [];
		const posCount = Math.floor(version / 7) + 2;
		const size = getSymbolSize(version);
		const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
		const positions = [size - 7];
		for (let i = 1; i < posCount - 1; i++) {
			positions[i] = positions[i - 1] - intervals;
		}
		positions.push(6);
		return positions.reverse();
	};
	exports.getPositions = function getPositions(version) {
		const coords = [];
		const pos = exports.getRowColCoords(version);
		const posLength = pos.length;
		for (let i = 0; i < posLength; i++) {
			for (let j = 0; j < posLength; j++) {
				if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
					continue;
				}
				coords.push([pos[i], pos[j]]);
			}
		}
		return coords;
	};
}, function (module, exports, __webpack_require__) {
	const getSymbolSize = __webpack_require__(282).getSymbolSize;
	const FINDER_PATTERN_SIZE = 7;
	exports.getPositions = function getPositions(version) {
		const size = getSymbolSize(version);
		return [[0, 0], [size - FINDER_PATTERN_SIZE, 0], [0, size - FINDER_PATTERN_SIZE]];
	};
}, function (module, exports) {
	exports.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	const PenaltyScores = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	exports.isValid = function isValid(mask) {
		return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
	};
	exports.from = function from(value) {
		return exports.isValid(value) ? parseInt(value, 10) : undefined;
	};
	exports.getPenaltyN1 = function getPenaltyN1(data) {
		const size = data.size;
		let points = 0;
		let sameCountCol = 0;
		let sameCountRow = 0;
		let lastCol = null;
		let lastRow = null;
		for (let row = 0; row < size; row++) {
			sameCountCol = sameCountRow = 0;
			lastCol = lastRow = null;
			for (let col = 0; col < size; col++) {
				let module = data.get(row, col);
				if (module === lastCol) {
					sameCountCol++;
				} else {
					if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
					lastCol = module;
					sameCountCol = 1;
				}
				module = data.get(col, row);
				if (module === lastRow) {
					sameCountRow++;
				} else {
					if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
					lastRow = module;
					sameCountRow = 1;
				}
			}
			if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
			if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		}
		return points;
	};
	exports.getPenaltyN2 = function getPenaltyN2(data) {
		const size = data.size;
		let points = 0;
		for (let row = 0; row < size - 1; row++) {
			for (let col = 0; col < size - 1; col++) {
				const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
				if (last === 4 || last === 0) points++;
			}
		}
		return points * PenaltyScores.N2;
	};
	exports.getPenaltyN3 = function getPenaltyN3(data) {
		const size = data.size;
		let points = 0;
		let bitsCol = 0;
		let bitsRow = 0;
		for (let row = 0; row < size; row++) {
			bitsCol = bitsRow = 0;
			for (let col = 0; col < size; col++) {
				bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
				if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
				bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
				if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
			}
		}
		return points * PenaltyScores.N3;
	};
	exports.getPenaltyN4 = function getPenaltyN4(data) {
		let darkCount = 0;
		const modulesCount = data.data.length;
		for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
		const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
		return k * PenaltyScores.N4;
	};
	function getMaskAt(maskPattern, i, j) {
		switch (maskPattern) {
			case exports.Patterns.PATTERN000:
				return (i + j) % 2 === 0;

			case exports.Patterns.PATTERN001:
				return i % 2 === 0;

			case exports.Patterns.PATTERN010:
				return j % 3 === 0;

			case exports.Patterns.PATTERN011:
				return (i + j) % 3 === 0;

			case exports.Patterns.PATTERN100:
				return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

			case exports.Patterns.PATTERN101:
				return i * j % 2 + i * j % 3 === 0;

			case exports.Patterns.PATTERN110:
				return (i * j % 2 + i * j % 3) % 2 === 0;

			case exports.Patterns.PATTERN111:
				return (i * j % 3 + (i + j) % 2) % 2 === 0;

			default:
				throw new Error("bad maskPattern:" + maskPattern);
		}
	}
	exports.applyMask = function applyMask(pattern, data) {
		const size = data.size;
		for (let col = 0; col < size; col++) {
			for (let row = 0; row < size; row++) {
				if (data.isReserved(row, col)) continue;
				data.xor(row, col, getMaskAt(pattern, row, col));
			}
		}
	};
	exports.getBestMask = function getBestMask(data, setupFormatFunc) {
		const numPatterns = Object.keys(exports.Patterns).length;
		let bestPattern = 0;
		let lowerPenalty = Infinity;
		for (let p = 0; p < numPatterns; p++) {
			setupFormatFunc(p);
			exports.applyMask(p, data);
			const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
			exports.applyMask(p, data);
			if (penalty < lowerPenalty) {
				lowerPenalty = penalty;
				bestPattern = p;
			}
		}
		return bestPattern;
	};
}, function (module, exports, __webpack_require__) {
	const ECLevel = __webpack_require__(283);
	const EC_BLOCKS_TABLE = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
	const EC_CODEWORDS_TABLE = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
	exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L:
				return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];

			case ECLevel.M:
				return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];

			case ECLevel.Q:
				return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];

			case ECLevel.H:
				return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];

			default:
				return undefined;
		}
	};
	exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L:
				return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];

			case ECLevel.M:
				return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];

			case ECLevel.Q:
				return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];

			case ECLevel.H:
				return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];

			default:
				return undefined;
		}
	};
}, function (module, exports, __webpack_require__) {
	const Polynomial = __webpack_require__(291);
	function ReedSolomonEncoder(degree) {
		this.genPoly = undefined;
		this.degree = degree;
		if (this.degree) this.initialize(this.degree);
	}
	ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
		this.degree = degree;
		this.genPoly = Polynomial.generateECPolynomial(this.degree);
	};
	ReedSolomonEncoder.prototype.encode = function encode(data) {
		if (!this.genPoly) {
			throw new Error("Encoder not initialized");
		}
		const paddedData = new Uint8Array(data.length + this.degree);
		paddedData.set(data);
		const remainder = Polynomial.mod(paddedData, this.genPoly);
		const start = this.degree - remainder.length;
		if (start > 0) {
			const buff = new Uint8Array(this.degree);
			buff.set(remainder, start);
			return buff;
		}
		return remainder;
	};
	module.exports = ReedSolomonEncoder;
}, function (module, exports, __webpack_require__) {
	const GF = __webpack_require__(292);
	exports.mul = function mul(p1, p2) {
		const coeff = new Uint8Array(p1.length + p2.length - 1);
		for (let i = 0; i < p1.length; i++) {
			for (let j = 0; j < p2.length; j++) {
				coeff[i + j] ^= GF.mul(p1[i], p2[j]);
			}
		}
		return coeff;
	};
	exports.mod = function mod(divident, divisor) {
		let result = new Uint8Array(divident);
		while (result.length - divisor.length >= 0) {
			const coeff = result[0];
			for (let i = 0; i < divisor.length; i++) {
				result[i] ^= GF.mul(divisor[i], coeff);
			}
			let offset = 0;
			while (offset < result.length && result[offset] === 0) offset++;
			result = result.slice(offset);
		}
		return result;
	};
	exports.generateECPolynomial = function generateECPolynomial(degree) {
		let poly = new Uint8Array([1]);
		for (let i = 0; i < degree; i++) {
			poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
		}
		return poly;
	};
}, function (module, exports) {
	const EXP_TABLE = new Uint8Array(512);
	const LOG_TABLE = new Uint8Array(256);
	(function initTables() {
		let x = 1;
		for (let i = 0; i < 255; i++) {
			EXP_TABLE[i] = x;
			LOG_TABLE[x] = i;
			x <<= 1;
			if (x & 256) {
				x ^= 285;
			}
		}
		for (let i = 255; i < 512; i++) {
			EXP_TABLE[i] = EXP_TABLE[i - 255];
		}
	})();
	exports.log = function log(n) {
		if (n < 1) throw new Error("log(" + n + ")");
		return LOG_TABLE[n];
	};
	exports.exp = function exp(n) {
		return EXP_TABLE[n];
	};
	exports.mul = function mul(x, y) {
		if (x === 0 || y === 0) return 0;
		return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
	};
}, function (module, exports, __webpack_require__) {
	const Utils = __webpack_require__(282);
	const ECCode = __webpack_require__(289);
	const ECLevel = __webpack_require__(283);
	const Mode = __webpack_require__(294);
	const VersionCheck = __webpack_require__(295);
	const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
	const G18_BCH = Utils.getBCHDigit(G18);
	function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
			if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
				return currentVersion;
			}
		}
		return undefined;
	}
	function getReservedBitsCount(mode, version) {
		return Mode.getCharCountIndicator(mode, version) + 4;
	}
	function getTotalBitsFromDataArray(segments, version) {
		let totalBits = 0;
		segments.forEach(function (data) {
			const reservedBits = getReservedBitsCount(data.mode, version);
			totalBits += reservedBits + data.getBitsLength();
		});
		return totalBits;
	}
	function getBestVersionForMixedData(segments, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
			const length = getTotalBitsFromDataArray(segments, currentVersion);
			if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
				return currentVersion;
			}
		}
		return undefined;
	}
	exports.from = function from(value, defaultValue) {
		if (VersionCheck.isValid(value)) {
			return parseInt(value, 10);
		}
		return defaultValue;
	};
	exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
		if (!VersionCheck.isValid(version)) {
			throw new Error("Invalid QR Code version");
		}
		if (typeof mode === "undefined") mode = Mode.BYTE;
		const totalCodewords = Utils.getSymbolTotalCodewords(version);
		const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
		if (mode === Mode.MIXED) return dataTotalCodewordsBits;
		const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
		switch (mode) {
			case Mode.NUMERIC:
				return Math.floor(usableBits / 10 * 3);

			case Mode.ALPHANUMERIC:
				return Math.floor(usableBits / 11 * 2);

			case Mode.KANJI:
				return Math.floor(usableBits / 13);

			case Mode.BYTE:
			default:
				return Math.floor(usableBits / 8);
		}
	};
	exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
		let seg;
		const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
		if (Array.isArray(data)) {
			if (data.length > 1) {
				return getBestVersionForMixedData(data, ecl);
			}
			if (data.length === 0) {
				return 1;
			}
			seg = data[0];
		} else {
			seg = data;
		}
		return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
	};
	exports.getEncodedBits = function getEncodedBits(version) {
		if (!VersionCheck.isValid(version) || version < 7) {
			throw new Error("Invalid QR Code version");
		}
		let d = version << 12;
		while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
			d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
		}
		return version << 12 | d;
	};
}, function (module, exports, __webpack_require__) {
	const VersionCheck = __webpack_require__(295);
	const Regex = __webpack_require__(296);
	exports.NUMERIC = {
		id: "Numeric",
		bit: 1 << 0,
		ccBits: [10, 12, 14]
	};
	exports.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 1 << 1,
		ccBits: [9, 11, 13]
	};
	exports.BYTE = {
		id: "Byte",
		bit: 1 << 2,
		ccBits: [8, 16, 16]
	};
	exports.KANJI = {
		id: "Kanji",
		bit: 1 << 3,
		ccBits: [8, 10, 12]
	};
	exports.MIXED = {
		bit: -1
	};
	exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
		if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
		if (!VersionCheck.isValid(version)) {
			throw new Error("Invalid version: " + version);
		}
		if (version >= 1 && version < 10) return mode.ccBits[0]; else if (version < 27) return mode.ccBits[1];
		return mode.ccBits[2];
	};
	exports.getBestModeForData = function getBestModeForData(dataStr) {
		if (Regex.testNumeric(dataStr)) return exports.NUMERIC; else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC; else if (Regex.testKanji(dataStr)) return exports.KANJI; else return exports.BYTE;
	};
	exports.toString = function toString(mode) {
		if (mode && mode.id) return mode.id;
		throw new Error("Invalid mode");
	};
	exports.isValid = function isValid(mode) {
		return mode && mode.bit && mode.ccBits;
	};
	function fromString(string) {
		if (typeof string !== "string") {
			throw new Error("Param is not a string");
		}
		const lcStr = string.toLowerCase();
		switch (lcStr) {
			case "numeric":
				return exports.NUMERIC;

			case "alphanumeric":
				return exports.ALPHANUMERIC;

			case "kanji":
				return exports.KANJI;

			case "byte":
				return exports.BYTE;

			default:
				throw new Error("Unknown mode: " + string);
		}
	}
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) {
			return value;
		}
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}, function (module, exports) {
	exports.isValid = function isValid(version) {
		return !isNaN(version) && version >= 1 && version <= 40;
	};
}, function (module, exports) {
	const numeric = "[0-9]+";
	const alphanumeric = "[A-Z $%*+\\-./:]+";
	let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|" + "[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|" + "[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|" + "[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	kanji = kanji.replace(/u/g, "\\u");
	const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
	exports.KANJI = new RegExp(kanji, "g");
	exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
	exports.BYTE = new RegExp(byte, "g");
	exports.NUMERIC = new RegExp(numeric, "g");
	exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
	const TEST_KANJI = new RegExp("^" + kanji + "$");
	const TEST_NUMERIC = new RegExp("^" + numeric + "$");
	const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	exports.testKanji = function testKanji(str) {
		return TEST_KANJI.test(str);
	};
	exports.testNumeric = function testNumeric(str) {
		return TEST_NUMERIC.test(str);
	};
	exports.testAlphanumeric = function testAlphanumeric(str) {
		return TEST_ALPHANUMERIC.test(str);
	};
}, function (module, exports, __webpack_require__) {
	const Utils = __webpack_require__(282);
	const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
	const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
	const G15_BCH = Utils.getBCHDigit(G15);
	exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
		const data = errorCorrectionLevel.bit << 3 | mask;
		let d = data << 10;
		while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
			d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
		}
		return (data << 10 | d) ^ G15_MASK;
	};
}, function (module, exports, __webpack_require__) {
	const Mode = __webpack_require__(294);
	const NumericData = __webpack_require__(299);
	const AlphanumericData = __webpack_require__(300);
	const ByteData = __webpack_require__(301);
	const KanjiData = __webpack_require__(302);
	const Regex = __webpack_require__(296);
	const Utils = __webpack_require__(282);
	const dijkstra = __webpack_require__(303);
	function getStringByteLength(str) {
		return unescape(encodeURIComponent(str)).length;
	}
	function getSegments(regex, mode, str) {
		const segments = [];
		let result;
		while ((result = regex.exec(str)) !== null) {
			segments.push({
				data: result[0],
				index: result.index,
				mode: mode,
				length: result[0].length
			});
		}
		return segments;
	}
	function getSegmentsFromString(dataStr) {
		const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
		const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
		let byteSegs;
		let kanjiSegs;
		if (Utils.isKanjiModeEnabled()) {
			byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
			kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
		} else {
			byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
			kanjiSegs = [];
		}
		const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
		return segs.sort(function (s1, s2) {
			return s1.index - s2.index;
		}).map(function (obj) {
			return {
				data: obj.data,
				mode: obj.mode,
				length: obj.length
			};
		});
	}
	function getSegmentBitsLength(length, mode) {
		switch (mode) {
			case Mode.NUMERIC:
				return NumericData.getBitsLength(length);

			case Mode.ALPHANUMERIC:
				return AlphanumericData.getBitsLength(length);

			case Mode.KANJI:
				return KanjiData.getBitsLength(length);

			case Mode.BYTE:
				return ByteData.getBitsLength(length);
		}
	}
	function mergeSegments(segs) {
		return segs.reduce(function (acc, curr) {
			const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
			if (prevSeg && prevSeg.mode === curr.mode) {
				acc[acc.length - 1].data += curr.data;
				return acc;
			}
			acc.push(curr);
			return acc;
		}, []);
	}
	function buildNodes(segs) {
		const nodes = [];
		for (let i = 0; i < segs.length; i++) {
			const seg = segs[i];
			switch (seg.mode) {
				case Mode.NUMERIC:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.ALPHANUMERIC,
						length: seg.length
					}, {
							data: seg.data,
							mode: Mode.BYTE,
							length: seg.length
						}]);
					break;

				case Mode.ALPHANUMERIC:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: seg.length
					}]);
					break;

				case Mode.KANJI:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: getStringByteLength(seg.data)
					}]);
					break;

				case Mode.BYTE:
					nodes.push([{
						data: seg.data,
						mode: Mode.BYTE,
						length: getStringByteLength(seg.data)
					}]);
			}
		}
		return nodes;
	}
	function buildGraph(nodes, version) {
		const table = {};
		const graph = {
			start: {}
		};
		let prevNodeIds = ["start"];
		for (let i = 0; i < nodes.length; i++) {
			const nodeGroup = nodes[i];
			const currentNodeIds = [];
			for (let j = 0; j < nodeGroup.length; j++) {
				const node = nodeGroup[j];
				const key = "" + i + j;
				currentNodeIds.push(key);
				table[key] = {
					node: node,
					lastCount: 0
				};
				graph[key] = {};
				for (let n = 0; n < prevNodeIds.length; n++) {
					const prevNodeId = prevNodeIds[n];
					if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
						graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
						table[prevNodeId].lastCount += node.length;
					} else {
						if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
						graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
					}
				}
			}
			prevNodeIds = currentNodeIds;
		}
		for (let n = 0; n < prevNodeIds.length; n++) {
			graph[prevNodeIds[n]].end = 0;
		}
		return {
			map: graph,
			table: table
		};
	}
	function buildSingleSegment(data, modesHint) {
		let mode;
		const bestMode = Mode.getBestModeForData(data);
		mode = Mode.from(modesHint, bestMode);
		if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
			throw new Error('"' + data + '"' + " cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
		}
		if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
			mode = Mode.BYTE;
		}
		switch (mode) {
			case Mode.NUMERIC:
				return new NumericData(data);

			case Mode.ALPHANUMERIC:
				return new AlphanumericData(data);

			case Mode.KANJI:
				return new KanjiData(data);

			case Mode.BYTE:
				return new ByteData(data);
		}
	}
	exports.fromArray = function fromArray(array) {
		return array.reduce(function (acc, seg) {
			if (typeof seg === "string") {
				acc.push(buildSingleSegment(seg, null));
			} else if (seg.data) {
				acc.push(buildSingleSegment(seg.data, seg.mode));
			}
			return acc;
		}, []);
	};
	exports.fromString = function fromString(data, version) {
		const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
		const nodes = buildNodes(segs);
		const graph = buildGraph(nodes, version);
		const path = dijkstra.find_path(graph.map, "start", "end");
		const optimizedSegs = [];
		for (let i = 1; i < path.length - 1; i++) {
			optimizedSegs.push(graph.table[path[i]].node);
		}
		return exports.fromArray(mergeSegments(optimizedSegs));
	};
	exports.rawSplit = function rawSplit(data) {
		return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
	};
}, function (module, exports, __webpack_require__) {
	const Mode = __webpack_require__(294);
	function NumericData(data) {
		this.mode = Mode.NUMERIC;
		this.data = data.toString();
	}
	NumericData.getBitsLength = function getBitsLength(length) {
		return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
	};
	NumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	NumericData.prototype.getBitsLength = function getBitsLength() {
		return NumericData.getBitsLength(this.data.length);
	};
	NumericData.prototype.write = function write(bitBuffer) {
		let i, group, value;
		for (i = 0; i + 3 <= this.data.length; i += 3) {
			group = this.data.substr(i, 3);
			value = parseInt(group, 10);
			bitBuffer.put(value, 10);
		}
		const remainingNum = this.data.length - i;
		if (remainingNum > 0) {
			group = this.data.substr(i);
			value = parseInt(group, 10);
			bitBuffer.put(value, remainingNum * 3 + 1);
		}
	};
	module.exports = NumericData;
}, function (module, exports, __webpack_require__) {
	const Mode = __webpack_require__(294);
	const ALPHA_NUM_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
	function AlphanumericData(data) {
		this.mode = Mode.ALPHANUMERIC;
		this.data = data;
	}
	AlphanumericData.getBitsLength = function getBitsLength(length) {
		return 11 * Math.floor(length / 2) + 6 * (length % 2);
	};
	AlphanumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	AlphanumericData.prototype.getBitsLength = function getBitsLength() {
		return AlphanumericData.getBitsLength(this.data.length);
	};
	AlphanumericData.prototype.write = function write(bitBuffer) {
		let i;
		for (i = 0; i + 2 <= this.data.length; i += 2) {
			let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
			value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
			bitBuffer.put(value, 11);
		}
		if (this.data.length % 2) {
			bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
		}
	};
	module.exports = AlphanumericData;
}, function (module, exports, __webpack_require__) {
	const Mode = __webpack_require__(294);
	function ByteData(data) {
		this.mode = Mode.BYTE;
		if (typeof data === "string") {
			this.data = (new TextEncoder).encode(data);
		} else {
			this.data = new Uint8Array(data);
		}
	}
	ByteData.getBitsLength = function getBitsLength(length) {
		return length * 8;
	};
	ByteData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	ByteData.prototype.getBitsLength = function getBitsLength() {
		return ByteData.getBitsLength(this.data.length);
	};
	ByteData.prototype.write = function (bitBuffer) {
		for (let i = 0, l = this.data.length; i < l; i++) {
			bitBuffer.put(this.data[i], 8);
		}
	};
	module.exports = ByteData;
}, function (module, exports, __webpack_require__) {
	const Mode = __webpack_require__(294);
	const Utils = __webpack_require__(282);
	function KanjiData(data) {
		this.mode = Mode.KANJI;
		this.data = data;
	}
	KanjiData.getBitsLength = function getBitsLength(length) {
		return length * 13;
	};
	KanjiData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	KanjiData.prototype.getBitsLength = function getBitsLength() {
		return KanjiData.getBitsLength(this.data.length);
	};
	KanjiData.prototype.write = function (bitBuffer) {
		let i;
		for (i = 0; i < this.data.length; i++) {
			let value = Utils.toSJIS(this.data[i]);
			if (value >= 33088 && value <= 40956) {
				value -= 33088;
			} else if (value >= 57408 && value <= 60351) {
				value -= 49472;
			} else {
				throw new Error("Invalid SJIS character: " + this.data[i] + "\n" + "Make sure your charset is UTF-8");
			}
			value = (value >>> 8 & 255) * 192 + (value & 255);
			bitBuffer.put(value, 13);
		}
	};
	module.exports = KanjiData;
}, function (module, exports, __webpack_require__) {
	"use strict";
	var dijkstra = {
		single_source_shortest_paths: function (graph, s, d) {
			var predecessors = {};
			var costs = {};
			costs[s] = 0;
			var open = dijkstra.PriorityQueue.make();
			open.push(s, 0);
			var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
			while (!open.empty()) {
				closest = open.pop();
				u = closest.value;
				cost_of_s_to_u = closest.cost;
				adjacent_nodes = graph[u] || {};
				for (v in adjacent_nodes) {
					if (adjacent_nodes.hasOwnProperty(v)) {
						cost_of_e = adjacent_nodes[v];
						cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
						cost_of_s_to_v = costs[v];
						first_visit = typeof costs[v] === "undefined";
						if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
							costs[v] = cost_of_s_to_u_plus_cost_of_e;
							open.push(v, cost_of_s_to_u_plus_cost_of_e);
							predecessors[v] = u;
						}
					}
				}
			}
			if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
				var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
				throw new Error(msg);
			}
			return predecessors;
		},
		extract_shortest_path_from_predecessor_list: function (predecessors, d) {
			var nodes = [];
			var u = d;
			var predecessor;
			while (u) {
				nodes.push(u);
				predecessor = predecessors[u];
				u = predecessors[u];
			}
			nodes.reverse();
			return nodes;
		},
		find_path: function (graph, s, d) {
			var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
			return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
		},
		PriorityQueue: {
			make: function (opts) {
				var T = dijkstra.PriorityQueue, t = {}, key;
				opts = opts || {};
				for (key in T) {
					if (T.hasOwnProperty(key)) {
						t[key] = T[key];
					}
				}
				t.queue = [];
				t.sorter = opts.sorter || T.default_sorter;
				return t;
			},
			default_sorter: function (a, b) {
				return a.cost - b.cost;
			},
			push: function (value, cost) {
				var item = {
					value: value,
					cost: cost
				};
				this.queue.push(item);
				this.queue.sort(this.sorter);
			},
			pop: function () {
				return this.queue.shift();
			},
			empty: function () {
				return this.queue.length === 0;
			}
		}
	};
	if (true) {
		module.exports = dijkstra;
	}
}, function (module, exports, __webpack_require__) {
	const Utils = __webpack_require__(305);
	function clearCanvas(ctx, canvas, size) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (!canvas.style) canvas.style = {};
		canvas.height = size;
		canvas.width = size;
		canvas.style.height = size + "px";
		canvas.style.width = size + "px";
	}
	function getCanvasElement() {
		try {
			return document.createElement("canvas");
		} catch (e) {
			throw new Error("You need to specify a canvas element");
		}
	}
	exports.render = function render(qrData, canvas, options) {
		let opts = options;
		let canvasEl = canvas;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = undefined;
		}
		if (!canvas) {
			canvasEl = getCanvasElement();
		}
		opts = Utils.getOptions(opts);
		const size = Utils.getImageWidth(qrData.modules.size, opts);
		const ctx = canvasEl.getContext("2d");
		const image = ctx.createImageData(size, size);
		Utils.qrToImageData(image.data, qrData, opts);
		clearCanvas(ctx, canvasEl, size);
		ctx.putImageData(image, 0, 0);
		return canvasEl;
	};
	exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
		let opts = options;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = undefined;
		}
		if (!opts) opts = {};
		const canvasEl = exports.render(qrData, canvas, opts);
		const type = opts.type || "image/png";
		const rendererOpts = opts.rendererOpts || {};
		return canvasEl.toDataURL(type, rendererOpts.quality);
	};
}, function (module, exports) {
	function hex2rgba(hex) {
		if (typeof hex === "number") {
			hex = hex.toString();
		}
		if (typeof hex !== "string") {
			throw new Error("Color should be defined as hex string");
		}
		let hexCode = hex.slice().replace("#", "").split("");
		if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
			throw new Error("Invalid hex color: " + hex);
		}
		if (hexCode.length === 3 || hexCode.length === 4) {
			hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
				return [c, c];
			}));
		}
		if (hexCode.length === 6) hexCode.push("F", "F");
		const hexValue = parseInt(hexCode.join(""), 16);
		return {
			r: hexValue >> 24 & 255,
			g: hexValue >> 16 & 255,
			b: hexValue >> 8 & 255,
			a: hexValue & 255,
			hex: "#" + hexCode.slice(0, 6).join("")
		};
	}
	exports.getOptions = function getOptions(options) {
		if (!options) options = {};
		if (!options.color) options.color = {};
		const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
		const width = options.width && options.width >= 21 ? options.width : undefined;
		const scale = options.scale || 4;
		return {
			width: width,
			scale: width ? 4 : scale,
			margin: margin,
			color: {
				dark: hex2rgba(options.color.dark || "#000000ff"),
				light: hex2rgba(options.color.light || "#ffffffff")
			},
			type: options.type,
			rendererOpts: options.rendererOpts || {}
		};
	};
	exports.getScale = function getScale(qrSize, opts) {
		return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
	};
	exports.getImageWidth = function getImageWidth(qrSize, opts) {
		const scale = exports.getScale(qrSize, opts);
		return Math.floor((qrSize + opts.margin * 2) * scale);
	};
	exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
		const size = qr.modules.size;
		const data = qr.modules.data;
		const scale = exports.getScale(size, opts);
		const symbolSize = Math.floor((size + opts.margin * 2) * scale);
		const scaledMargin = opts.margin * scale;
		const palette = [opts.color.light, opts.color.dark];
		for (let i = 0; i < symbolSize; i++) {
			for (let j = 0; j < symbolSize; j++) {
				let posDst = (i * symbolSize + j) * 4;
				let pxColor = opts.color.light;
				if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
					const iSrc = Math.floor((i - scaledMargin) / scale);
					const jSrc = Math.floor((j - scaledMargin) / scale);
					pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
				}
				imgData[posDst++] = pxColor.r;
				imgData[posDst++] = pxColor.g;
				imgData[posDst++] = pxColor.b;
				imgData[posDst] = pxColor.a;
			}
		}
	};
}, function (module, exports, __webpack_require__) {
	const Utils = __webpack_require__(305);
	function getColorAttrib(color, attrib) {
		const alpha = color.a / 255;
		const str = attrib + '="' + color.hex + '"';
		return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
	}
	function svgCmd(cmd, x, y) {
		let str = cmd + x;
		if (typeof y !== "undefined") str += " " + y;
		return str;
	}
	function qrToPath(data, size, margin) {
		let path = "";
		let moveBy = 0;
		let newRow = false;
		let lineLength = 0;
		for (let i = 0; i < data.length; i++) {
			const col = Math.floor(i % size);
			const row = Math.floor(i / size);
			if (!col && !newRow) newRow = true;
			if (data[i]) {
				lineLength++;
				if (!(i > 0 && col > 0 && data[i - 1])) {
					path += newRow ? svgCmd("M", col + margin, .5 + row + margin) : svgCmd("m", moveBy, 0);
					moveBy = 0;
					newRow = false;
				}
				if (!(col + 1 < size && data[i + 1])) {
					path += svgCmd("h", lineLength);
					lineLength = 0;
				}
			} else {
				moveBy++;
			}
		}
		return path;
	}
	exports.render = function render(qrData, options, cb) {
		const opts = Utils.getOptions(options);
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const qrcodesize = size + opts.margin * 2;
		const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
		const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
		const viewBox = 'viewBox="' + "0 0 " + qrcodesize + " " + qrcodesize + '"';
		const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
		const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
		if (typeof cb === "function") {
			cb(null, svgTag);
		}
		return svgTag;
	};
}, function (module, exports) {
	module.exports = {
		guide: "_2iIk",
		right: "_15Dj",
		left: "_I0Q",
		qr: "_111n",
		up: "_2fH-",
		down: "_1Pbk",
		space: "_3qj_"
	};
}, function (module, exports, __webpack_require__) {
	"use strict";
	var _store = __webpack_require__(204);
	var _store2 = _interopRequireDefault(_store);
	var _todo = __webpack_require__(268);
	var _todo2 = _interopRequireDefault(_todo);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}
	var keyboard = {
		37: "left",
		38: "rotate",
		39: "right",
		40: "down",
		32: "space",
		83: "s",
		82: "r",
		80: "p"
	};
	var keydownActive = void 0;
	var boardKeys = Object.keys(keyboard).map(function (e) {
		return parseInt(e, 10);
	});
	var keyDown = function keyDown(e) {
		if (e.metaKey === true || boardKeys.indexOf(e.keyCode) === -1) {
			return;
		}
		var type = keyboard[e.keyCode];
		if (type === keydownActive) {
			return;
		}
		keydownActive = type;
		_todo2.default[type].down(_store2.default);
	};
	var keyUp = function keyUp(e) {
		if (e.metaKey === true || boardKeys.indexOf(e.keyCode) === -1) {
			return;
		}
		var type = keyboard[e.keyCode];
		if (type === keydownActive) {
			keydownActive = "";
		}
		_todo2.default[type].up(_store2.default);
	};
	document.addEventListener("keydown", keyDown, true);
	document.addEventListener("keyup", keyUp, true);
}]);
