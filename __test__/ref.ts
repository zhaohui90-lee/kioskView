import { hasChanged } from "@vue/shared"
import { isReadonly, isShallow, toRaw } from "vue"

type RefBase<T> = {
  dep?: Dep
  value: T
}
 
function trackRefValue(ref: RefBase<any>) {
  
}

class RefImp<T> {
  private _value: T
  private _rawValue: T

  public dep?: Dep = undefined
  public readonly __v_isRef = true

  constructor(value: T, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow? value: toRaw(value)
    this._value = __v_isShallow? value: toReactive(value)
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newVal) {
    const useDirectValue = 
      this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    newVal = useDirectValue? newVal: toRaw(newVal)
    if(hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = useDirectValue? newVal: toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
}