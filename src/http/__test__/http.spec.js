import { beforeAll, describe, it } from "vitest";
// when use happy-dom environment
/**
 * Remember that in a testing environment, you often want to 
 * isolate the code being tested and control external dependencies. 
 * Mocking network requests is a common practice in unit testing to 
 * ensure that tests are deterministic and don't rely on external services.
 */
import MockAdapter from "axios-mock-adapter";
import { afterEach } from "vitest";
import { fetchGet, fetchPost } from "../index";
import fetchInstance from "../fetch";
import { beforeEach } from "vitest";
import { expect } from "vitest";

const mock = new MockAdapter(fetchInstance)


describe('http test', () => {

  beforeEach(() => {
    mock.reset();
  })

  it('fetchGet test success', async () => {
    mock.onGet('https://www.google.com').reply(200, { data: 'Mocked data1' });

    fetchGet('https://www.google.com').then((response) => {
      expect(response.data).toEqual('Mocked data1')

    })
  })

  it('fetchGet test 404', async () => {
    mock.onGet('https://www.google.com').reply(404, { data: '404 not found' });
    fetchGet('https://www.google.com').then((response) => {


    }, error => {
      expect(error.message).toEqual('请求地址出错: 404')
    })

  })

  it('fetchGet test fail', async () => {
    mock.onGet('https://www.google.com').networkError();

    fetchGet('https://www.google.com').then((response) => {
      // expect(response).toBeDefined()
    }, error => {
      expect(error).toBeDefined()
    })
  })

  it('fetchPost test success', async () => {
    mock.onPost('https://www.google.com').reply(200, { data: 'Mocked data11111q' });

    fetchPost('https://www.google.com',  {}).then((response) => {
      expect(response.data).toEqual('Mocked data11111q')
    })
  })

  it('fetchPost test fail', async () => {
    mock.onPost('https://www.google.com').timeout();

    fetchPost('https://www.google.com').then((response) => {
      // expect(response).toBeDefined()
    }, error => {
      expect(error).toBeDefined()
    })
  })

})
