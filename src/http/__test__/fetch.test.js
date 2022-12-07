import { fetchGet, fetchPost } from "../index";

test('getSwVersion test', () => {
  fetchGet('getSwVersion', {}).then(res => {
    console.log(res);
  
  },
    error => {
      console.log(error);
  
    })
})

