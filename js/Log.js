
// let expandedLog = (function () {
//     var MAX_DEPTH = 100;


//     function _isObject(obj) {
//         var type = typeof obj;
//         return type === 'function' || type === 'object' && !!obj;
//     }

//     function _optimizeCb(func, context, argCount) {
//         if (context === void 0) return func;
//         switch (argCount == null ? 3 : argCount) {
//             case 1: return function (value) {
//                 return func.call(context, value);
//             };
//             case 3: return function (value, index, collection) {
//                 return func.call(context, value, index, collection);
//             };
//             case 4: return function (accumulator, value, index, collection) {
//                 return func.call(context, accumulator, value, index, collection);
//             };
//         }
//         return function () {
//             return func.apply(context, arguments);
//         };
//     }

//     function _shallowProperty(key) {
//         return function (obj) {
//             return obj == null ? void 0 : obj[key];
//         };
//     }

//     var _getLength = _shallowProperty('length');
//     function _isArrayLike(collection) {
//         var length = _getLength(collection);
//         return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
//     }


//     function baseIteratee(value, context, argCount) {
//         if (value == null) return identity;
//         if (isFunction(value)) return optimizeCb(value, context, argCount);
//         if (isObject(value) && !isArray(value)) return matcher(value);
//         return property(value);
//     }


//     _.iteratee = iteratee;
//     function iteratee(value, context) {
//         return baseIteratee(value, context, Infinity);
//     }

//     function each(obj, iteratee, context) {
//         iteratee = _optimizeCb(iteratee, context);
//         var i, length;
//         if (_isArrayLike(obj)) {
//             for (i = 0, length = obj.length; i < length; i++) {
//                 iteratee(obj[i], i, obj);
//             }
//         } else {
//             var _keys = keys(obj);
//             for (i = 0, length = _keys.length; i < length; i++) {
//                 iteratee(obj[_keys[i]], _keys[i], obj);
//             }
//         }
//         return obj;
//     }


//     return function (item, depth) {

//         depth = depth || 0;

//         if (depth > MAX_DEPTH) {
//             console.log(item);
//             return;
//         }

//         if (_isObject(item)) {
//             _.each(item, function (value, key) {
//                 console.group(key + ' : ' + (typeof value));
//                 expandedLog(value, depth + 1);
//                 console.groupEnd();
//             });
//         } else {
//             console.log(item);
//         }
//     }
// })();

var expandedLog = (function (MAX_DEPTH) {
    return function (item, depth) {
        var depth = depth || 0;
        let isString = typeof item === 'string';
        let isDeep = depth > MAX_DEPTH

        if (isString || isDeep) {
            console.log(item);
            return;
        }

        for (var key in item) {
            console.group(key + ' : ' + (typeof item[key]));
            expandedLog(item[key], depth + 1);
            console.groupEnd();
        }
    }
})(100);