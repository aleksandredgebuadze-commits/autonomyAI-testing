import { type Locator, type Page } from '@playwright/test';
import { config } from '../helpers/config';


export class LoginPage {
  readonly page: Page;
  readonly EmailInput: Locator;
  readonly PasswordInput: Locator;
  readonly LoginButton: Locator;
  readonly AuthError: Locator;
  readonly NewTaskElem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.EmailInput = page.getByTestId('login-email-input');
    this.PasswordInput = page.getByTestId('login-password-input');
    this.LoginButton = page.getByTestId('login-submit-button');
    this.AuthError = page.getByText('Username or password is incorrect or user does not exist. Please try again.');
    this.NewTaskElem = page.getByTestId('new-task-page');
  }

  async goto() {
    await this.page.goto(`${config.baseURL}`, { waitUntil: "domcontentloaded" });
  }

  async autorizeWithEmailAndPassword( email: string, password: string) {
    await this.EmailInput.waitFor({ state: "visible" });
    await this.EmailInput.fill(email);
    await this.PasswordInput.waitFor({ state: "visible" });
    await this.PasswordInput.fill(password);
    await this.LoginButton.click();
  }
}