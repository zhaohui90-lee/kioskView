class RefImpl<T> {
  private _value: T
  private _rawValue: T

  public readonly __v_isRef = true

  constructor(value: T, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow ? value : (value)
    this._value = __v_isShallow ? value : (value)
  }

  get value() {
    return this._value
  }

  set value(newVal) {
    this._value = newVal
  }
}

const instance = new RefImpl("param1", false);


console.log(instance.value);
console.log(instance.__v_isRef);
