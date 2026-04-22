# Playwright POM + Fixtures Framework

This is a refactored Playwright TypeScript test framework using Page Object Model (POM) with Playwright fixtures for clean dependency injection.

## Folder Structure

```
tests/
├── pages/              # Page Object classes
│   └── googlePage.ts
├── fixtures/           # Custom Playwright fixtures
│   ├── base.fixture.ts
│   ├── google.fixture.ts
│   ├── auth.fixture.ts
│   └── index.ts
├── e2e/                # Test specifications
│   ├── auth.spec.ts
│   └── google.spec.ts
```

## How Fixtures Work

### Base Fixture

Provides the foundation for all custom fixtures. All fixtures extend from `baseFixture`.

### Google Fixture

Injects a pre-initialized `GooglePage` object into each test. No manual instantiation needed.

```ts
// Before (old way)
test.beforeEach(async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.navigate();
});

// After (new way)
test('example', async ({ googlePage }) => {
  await googlePage.navigate();
});
```

### Auth Fixture

Provides pre-authenticated state using `storageState.json`. To generate auth state:

```ts
import { createStorageState } from './fixtures';

test('generate auth state', async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.navigate();
  // Perform login steps...
  await createStorageState(page);
});
```

## How to Add New Pages/Tests

### 1. Create a Page Object

```ts
// tests/pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: ReturnType<Page['locator']>;
  readonly passwordInput: ReturnType<Page['locator']>;
  readonly submitButton: ReturnType<Page['locator']>;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
```

### 2. Create a Fixture

```ts
// tests/fixtures/login.fixture.ts
import { baseFixture } from './base.fixture';
import { LoginPage } from '../pages/LoginPage';

export const loginFixture = baseFixture.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
```

### 3. Export from Index

```ts
// tests/fixtures/index.ts
export { loginFixture } from './login.fixture';
```

### 4. Write Tests

```ts
import { loginFixture as test, expect } from '../fixtures';

test('login test', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('user', 'pass');
  await expect(loginPage.page).toHaveURL('/dashboard');
});
```

## Running Tests

```bash
npm test          # Run tests
npm run typecheck # Check TypeScript types
npm run lint     # Check code style
npm run check   # Run typecheck + lint
npm run build   # Full build: check + test
```

## Design Rules

- Page objects expose **user-level actions** (e.g., `login()`, `navigate()`), not low-level steps (e.g., `fillUsernameField()`)
- No assertions inside page objects
- Fixtures handle their own setup and call `await use(...)` to expose objects
- Use stable selectors (`data-testid` preferred when available)
