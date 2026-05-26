# Repository Guidelines

## Project Structure & Module Organization

This repository is a Playwright API testing project. Test files live in `tests/` and use the `*.spec.js` suffix, for example `tests/getcall.spec.js`, `tests/postcall.spec.js`, and `tests/deletecall.spec.js`. Related tests can be grouped in subdirectories such as `tests/register/`. Playwright configuration is defined in `playwright.config.js`, with HTML reports written to `playwright-report/` and runtime artifacts written to `test-results/`. Dependencies are tracked through `package.json` and `package-lock.json`.

## Build, Test, and Development Commands

Install dependencies before running tests:

```bash
npm install
```

Run the full Playwright suite across the configured browsers:

```bash
npx playwright test
```

Run one spec while developing:

```bash
npx playwright test tests/getcall.spec.js
```

Open the latest HTML report:

```bash
npx playwright show-report
```

There are currently no npm scripts in `package.json`, so use `npx playwright ...` commands directly unless scripts are added later.

## Coding Style & Naming Conventions

Use JavaScript Playwright tests with imports from `@playwright/test`. Keep spec filenames lowercase and descriptive, ending in `.spec.js` (`putpatchcall.spec.js`, `register/putcall.spec.js`). Prefer clear test names that describe the API method or behavior, such as `Test GET API`. Use two-space indentation, semicolons consistently, and keep request payloads close to the test that uses them. Avoid leaving large commented blocks in committed specs unless they document a current scenario.

## Testing Guidelines

Tests should assert both HTTP status codes and important response fields. For API tests, use the Playwright `request` fixture rather than browser page flows. Keep tests independent: create any required data inside the test and avoid relying on previous test execution order, because `fullyParallel` is enabled. Run targeted specs locally before committing, then run `npx playwright test` for broader verification.

## Commit & Pull Request Guidelines

Recent commits use short, direct messages such as `added delete request`, `modified api test`, and `new putpatchcall`. Continue using concise action-oriented commit messages that state what changed. Pull requests should include a brief summary, the affected specs or endpoints, the command used for verification, and screenshots only when report output or UI behavior is relevant. Do not commit generated `playwright-report/`, `test-results/`, or `node_modules/` content.

