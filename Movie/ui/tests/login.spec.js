import { test, expect } from '@playwright/test';
import loginData from "../testdata/logindata.json"
import loginpage from '../pages/loginpage';

test.describe('Login Scenarios', () => {

  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new loginpage(page);

    await loginPage.goto();
    await loginPage.signin();
    await expect(page).toHaveURL('http://192.168.1.84:5173/login');
    await loginPage.login(loginData.validUser);

    // await expect(page).toHaveURL(/.*/);
    // await expect(page).toHaveURL(/dashboard/);
    // await expect(page.getByText('Welcome')).toBeVisible();
  });

  //   test('Login with invalid credentials', async ({ page }) => {
  //     const user = loginData.invalidUser;

  //     await page.goto('');

  //     await page.fill('input[name="name"]', user.name);
  //     await page.fill('input[name="emailOrPhone"]', user.emailOrPhone);
  //     await page.fill('input[name="password"]', user.password);
  //     await page.fill('input[name="dob"]', user.dob);
  //     await page.click('button[type="submit"]');

  //     await expect(page.getByText(/invalid|incorrect|try again/i)).toBeVisible();
  //     await expect(page).toHaveURL(/.*login/);
  //   });

  // });


  //   test.describe('Signin Scenarios', () => {

  //     test('Signin with correct username and password', async ({ page }) => {
  //       const user = loginData.validUser;
  //       await page.goto('');

  //       await page.fill('//username', user.name);
  //       await page.fill('//password', user.password);
  //       await page.click('button[type="submit"]');

  //       // Expect to land on dashboard or see welcome message
  //       await expect(page.getByText('Welcome')).toBeVisible();
  //       await expect(page).toHaveURL('');
  //     });

  //     test('Signin with incorrect username or password', async ({ page }) => {
  //       const user = loginData.invalidUser;

  //       await page.goto('');
  //       await page.fill('//username',user.name);
  //       await page.fill('//password', user.password);
  //       await page.click('button[type="submit"]');

  //       // Expect an error message to appear
  //       await expect(page.getByText(/invalid credentials|incorrect username or password/i)).toBeVisible();
  //       await expect(page).toHaveURL(/.*login/); // Still on login page
  //     });

  //   });


  //   test.describe('Forgot Password and Login with New Password', () => {
  //   const user = loginData.forgotUser;
  //   const updateduser = loginData.validUser;

  //   test('Reset password and login with new one', async ({ page }) => {
  //     await page.goto('');

  //     // Step 1: Click 'Forgot Password'
  //     await page.click('text=Forgot password');

  //     await expect(page.getByText('Reset your password')).toBeVisible();
  //     await page.fill('input[name="newPassword"]', user['re-password']);
  //     await page.fill('input[name="confirmPassword"]', user['re-password']);
  //     await page.click('button[type="submit"]');

  //     // Step 4: Confirmation message
  //     await expect(page.getByText(/Password reset successful/i)).toBeVisible();

  //     // Step 5: Now log in with new password
  //     await page.goto('');
  //     await page.fill('//username', updateduser.name);
  //     await page.fill('input[name="password"]', user['re-password']); // use new password
  //     await page.click('button[type="submit"]');

  //     await expect(page).toHaveURL(/.*dashboard/);
  //     await expect(page.getByText('Welcome')).toBeVisible();
  //   });
  // });

  // test('Select preferred language and random 5 genres', async ({ page }) => {
  //   await page.goto('https://your-test-site.com/preferences');

  //   await page.selectOption('#language', 'english'); 

  //   const genres = await page.$$('input[name="genre"]'); 

  //   const shuffled = genres.sort(() => 0.5 - Math.random());
  //   const selectedGenres = shuffled.slice(0, 5);

  //   for (const checkbox of selectedGenres) {
  //     await checkbox.check(); 
  //   }

  //   await page.click('button[type="submit"]');

  //   await expect(page.getByText(/preferences saved|success/i)).toBeVisible();
  // });



  // test('Select genres, view movies, and open movie details', async ({ page }) => {
  //   // Step 1: Go to genre selection page
  //   await page.goto('https://your-app.com/preferences');

  //   // Select preferred language
  //   await page.selectOption('#language', 'english');

  //   // Select 5 random genres
  //   const genres = await page.$$('input[name="genre"]');
  //   const shuffled = genres.sort(() => 0.5 - Math.random());
  //   const selectedGenres = shuffled.slice(0, 5);
  //   for (const checkbox of selectedGenres) {
  //     await checkbox.check();
  //   }

  //   // Submit form
  //   await page.click('button[type="submit"]');

  //   // Step 2: Wait for landing page to show movies
  //   await expect(page).toHaveURL(/.*landing/);
  //   // at least one movie shown

  //   // Step 3: Click on a movie image
  //   const movieImages = await page.$$('.movie-card img'); // adjust selector based on your HTML
  //   await movieImages[0].click(); // Click the first one

  //   // Step 4: Expect to see movie details
  //   await expect(page).toHaveURL(/.*movie\/\d+/); // Example: /movie/123
  //   await expect(page.getByText(/Director/i)).toBeVisible();
  //   await expect(page.getByText(/Cast|Release Date|Rating/i)).toBeVisible();
  // });





});
