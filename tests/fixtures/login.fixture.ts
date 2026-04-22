import { test as base } from './base.fixture';
import { config } from '../helpers/config';

type BaseFixtures = {
  loggedInPage: void; 
};

export const test = base.extend<BaseFixtures>({
  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.autorizeWithEmailAndPassword(config.TEST_EMAIL, config.TEST_PASSWORD);
    await page.waitForLoadState("domcontentloaded");
    await use();
  },
});

export const describe = test;