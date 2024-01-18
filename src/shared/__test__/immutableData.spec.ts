import { produce } from 'immer'
import { expect, test } from 'vitest'
import { ref, type Ref } from 'vue'

const authors = [
  {
    name: 'J.k. Rowling',
    book: 'harry potter',
  },
  {
    name: 'J. R. R. Tolkien',
    book: 'The Lord of the Rings',
  },
]

export function updateAuthor(authors: Array<{}>, newAuthor: {}): Array<{}> {
  return Object.assign([], authors, newAuthor)
}

export function addAuthor(authors: Array<{}>, newAuthor: {}): Array<{}> {
  return produce(authors, (draft) => {
    draft.push(newAuthor)
  })
}

export function addRefAuthor(refAuthor: Ref<Array<{}>>, newAuthor: {}): Array<{}> {
  return produce(refAuthor.value, (draft) => {
    draft.push(newAuthor)
  })
}

test('object assgin test', () => {
  expect(
    updateAuthor(authors, {
      name: 'David Hume',
      book: 'The History of England',
    }).length
  ).toBe(2)
})

test('immer test', () => {
  expect(
    addAuthor(authors, {
      name: 'David Hume',
      book: 'The History of England',
    }).length
  ).toBe(3)
})

test('reactive obj immer test', () => {
  expect(
    addRefAuthor(ref(authors), {
      name: '刘慈欣',
      book: '三体',
    }).length
  ).not.toBe(authors.length)
})

// function toggleTodo_(state, id) {
//   return produce(state, draft => {
//       const todo = draft.find(todo => todo.id === id)
//       todo.done = !todo.done
//   })
// }

// immer currying
const toggleTodo = produce((draft, id) => {
  const todo = draft.find((todo: { id: any }) => todo.id === id)
  todo.done = !todo.done
})

const baseState = [
  {
    id: 'JavaScript',
    title: 'Learn TypeScript',
    done: true,
  },
  {
    id: 'Immer',
    title: 'Try Immer',
    done: false,
  },
]

const nextState = toggleTodo(baseState, 'Immer')
console.log(nextState)
