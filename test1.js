import { Selector } from 'testcafe';

fixture('Login Page Tests')
  .page('https://beta.deepthought.education/login'); 

// 1.Test successful login with valid credentials
test('Successful Login with Valid Credentials', async t => {
  await t
    .typeText('#username', 'nikita')
    .typeText('#password', 'testing123')
    .click('#login')
    .expect(Selector('#content').exists).ok();
});

// 2.Test unsuccessful login attempts with invalid credentials
test('Unsuccessful Login with Invalid Credentials', async t => {
  await t
    .typeText('#username', 'test')
    .typeText('#password', 'testtest123')
    .click('#login')
    .expect(Selector('#login-error-notify').exists).ok(); 
});

// 3.Validate that appropriate error messages are displayed for invalid login attempts
test('Error Messages for Invalid Login Attempts', async t => {
  await t
    .typeText('#username', 'nikita')
    .typeText('#password', 'testing@1234')
    .click('#login')
    .expect(Selector('#login-error-notify').innerText).contains('Invalid login credentials'); 
});

// 4.On successful login, validate that the user is redirected to the dashboard screen
test('Redirect to Dashboard on Successful Login', async t => {
  await t
    .typeText('#username', 'nikita')
    .typeText('#password', 'testing@123')
    .click('#login')
    .expect(Selector('#content').exists).ok()
    .expect(Selector('#content').visible).ok();
});
