# AutonomyAI Playwright TypeScript Testing Framework

A Playwright test automation project with TypeScript for testing the AutonomyAI platform.

## Overview

This repository contains automated tests for the AutonomyAI platform using Playwright and TypeScript. The project includes end-to-end tests that verify various functionalities of the AutonomyAI studio interface.

## Project Structure

- `tests/` - Contains all test files
- `bug-tracker/` - A separate React application for browsing and filtering bug reports
- `bugImg/` - Screenshots referenced in bug reports
- `BUGS.md` - Detailed documentation of discovered bugs
- `ROADMAP.md` - Future plans and upcoming features
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Related Projects

### Bug Tracker Application
A stylish React application for browsing and filtering software bug reports. This application displays a collection of documented bugs with filtering capabilities by severity and search functionality.

[View Bug Tracker README](../main/bug-tracker/README.md)

### Bug Documentation
Detailed documentation of bugs discovered during testing, including steps to reproduce, expected vs actual behavior, and severity levels.

[View BUGS.md](../main/BUGS.md)

### Roadmap
Future plans and upcoming features for the testing framework and AutonomyAI platform.

[View ROADMAP.md](../blob/main/ROADMAP.md)

## Features

- End-to-end testing with Playwright
- TypeScript for type safety
- Multiple browser support (Chromium, Firefox, WebKit)
- UI mode for interactive test debugging
- Type checking and linting integration

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:aleksandredgebuadze-commits/autonomyAI-testing.git
cd autonomyAI-testing
```

2. Install dependencies:
```bash
npm install
```

3. Install browsers:
```bash
npx playwright install --with-deps
```

## Usage

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in UI mode
npm run ui-mode

# Run tests on specific browsers
npm run test-chromium
npm run debug-test-chromium
npm run debug-test-firefox
npm run debug-test-webkit
```

### Development Tasks

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Full check (typecheck + lint)
npm run check

# Build (check + test)
npm run build
```

## Configuration

See `playwright.config.ts` for Playwright configuration options including:
- Browser selection
- Test directories
- Reporter configuration
- Timeout settings

## Contributing

Please read through the existing issues and documentation before contributing. When submitting pull requests, ensure that:
1. Tests pass (`npm run test`)
2. Type checking passes (`npm run typecheck`)
3. Linting passes (`npm run lint`)
4. Code follows existing style conventions

## License

This project is licensed under the ISC License - see the [package.json](../blob/main/package.json) file for details.

## Acknowledgments

- Playwright team for the excellent testing framework
- TypeScript team for enhancing JavaScript development
- Vite and React teams for the bug tracker application