import { test as base } from './base.fixture';

type LoginFixtures = {
  loggedInPage: void; 
};

export const test = base.extend<LoginFixtures>({
  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await page.waitForLoadState("domcontentloaded");
    // await loginPage.loginWithEmail('testuser', 'password123');
    await use();
  },
});

export const describe = test;