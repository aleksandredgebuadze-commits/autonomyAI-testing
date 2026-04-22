import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';

type BaseFixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
};

export const test = base.extend<BaseFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
});

export { expect };