import { test } from '../../fixtures';
import { config } from '../../helpers/config';

test.describe.only('Login page tests', () => {
  test('User can authorize with correct username and password', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.autorizeWithEmailAndPassword(config.TEST_EMAIL, config.TEST_PASSWORD);
    await loginPage.NewTaskElem.waitFor({state: "attached"});
  });

  test('User can not authorize with incorrect password', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.autorizeWithEmailAndPassword(config.TEST_EMAIL, "dummyPass");
    await loginPage.AuthError.waitFor({state: "visible"})
  });
});
