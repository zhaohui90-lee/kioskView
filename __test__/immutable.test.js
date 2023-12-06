import { produce } from "immer";
import { expect, test } from "vitest";

const baseState = [
  {
      title: "Learn TypeScript",
      done: true
  },
  {
      title: "Try Immer",
      done: false
  }
]

const nextState = produce(baseState, draftState => {
  draftState.push({title: "Tweet about it"})
  draftState[1].done = true
})


test("baseState and nextState length", () => {
  expect(baseState.length).toBe(2)
  expect(nextState.length).toBe(3)
})

test("baseState and nextState done", () => {
  expect(baseState[1].done).toBe(false)
  expect(nextState[1].done).toBe(true)
})

test("contrast baseState and nextState", () => {
  expect(baseState[0]).toBe(nextState[0])
  expect(baseState[1]).not.toBe(nextState[1])
})
