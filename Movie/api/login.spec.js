import { test, expect, request } from '@playwright/test';

test('Home page', async () => {
  const apiContext = await request.newContext();

  const res = await apiContext.get('https://pf72lmlw-8080.inc1.devtunnels.ms/home');

  expect(res.status()).toBe(200);

});


test('Signup API should return 200 or appropriate status', async () => {
  const apiContext = await request.newContext();

  const res = await apiContext.post('https://pf72lmlw-8080.inc1.devtunnels.ms/api/signup', {
    data: {
      username: "Hai2",
      email: "hai2@popcorn.com",
      password: "Visswes@27"
    }
  });

  // Assert response status
  expect(res.status()).toBe(200);
  
  // Optional: check the response body
  const body = await res.json();
  console.log(body);
});



test('Signin API should return 200 or appropriate status', async () => {
  const apiContext = await request.newContext();

  const res = await apiContext.post('https://pf72lmlw-8080.inc1.devtunnels.ms/api/signin', {
    data: {
      email: "hai2@popcorn.com",
      password: "Visswes@27"
    }
  });

  // Assert response status
  expect(res.status()).toBe(200);
  
  // Optional: check the response body
  const body = await res.json();
  console.log(body);
});


test('Show Individual Movie should return 200', async () => {
  const apiContext = await request.newContext();

  const res = await apiContext.get('https://pf72lmlw-8080.inc1.devtunnels.ms/api/movies/76600/');

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log(body);
});



test('Production Houses Movies', async () => {
  const apiContext = await request.newContext();

  const res = await apiContext.get('https://pf72lmlw-8080.inc1.devtunnels.ms/api/movies/?production_companies=3&page=1');

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log(body); 
});


