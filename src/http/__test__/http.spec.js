import { describe, it } from "vitest";
// when use happy-dom environment
/**
 * Remember that in a testing environment, you often want to 
 * isolate the code being tested and control external dependencies. 
 * Mocking network requests is a common practice in unit testing to 
 * ensure that tests are deterministic and don't rely on external services.
 */
import MockAdapter from "axios-mock-adapter";
import { afterEach } from "vitest";
import axios from "axios";
import { fetchGet } from "../index";

const mock = new MockAdapter(axios)

describe('http test', () => {

  it('fetchGet test', async () => {
    mock.onPost('https://www.google.com').reply(200, { data: 'Mocked data' });

    fetchGet('https://www.google.com').then((response) => {
      expect(response.data).toEqual({ data: 'Mocked data' })
    })
  })

  it('fetchPost test', async () => {
    mock.onPost('https://www.google.com').reply(200, { data: 'Mocked data' });

    fetchGet('https://www.google.com').then((response) => {
      expect(response.data).toEqual({ data: 'Mocked data' })
    })
  })

})

afterEach(() => {
  mock.restore()
})