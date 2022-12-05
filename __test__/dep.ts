import { ReactiveEffect } from "./effect";
export type Dep = Set<ReactiveEffect> & TrackedMarkers

type TrackedMarkers = {
  /**
   * 被追踪了
   */
  w: number
  /**
   * 新追踪的
   */
  n: number
}
