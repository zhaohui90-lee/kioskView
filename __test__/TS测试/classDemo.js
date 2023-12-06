var RefImpl = /** @class */ (function () {
    function RefImpl(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : (value);
        this._value = __v_isShallow ? value : (value);
    }
    Object.defineProperty(RefImpl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newVal) {
            this._value = newVal;
        },
        enumerable: false,
        configurable: true
    });
    return RefImpl;
}());
var instance = new RefImpl("param1", false);
console.log(instance.value);
console.log(instance.__v_isRef);
