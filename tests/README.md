# Test Suite

This project includes comprehensive testing with unit tests and end-to-end tests.

## Test Structure

```
tests/
├── unit/           # Unit tests (Vitest)
│   └── utils.test.js
└── e2e/            # End-to-end tests (Playwright)
    └── app.spec.js
```

## Running Tests

### Unit Tests (Vitest)

```bash
# Run in watch mode
npm test

# Run once
npm run test:run

# Run with coverage
npm run test:coverage

# Run with UI
npm run test:ui
```

### End-to-End Tests (Playwright)

```bash
# Run E2E tests
npm run test:e2e

# Run with UI mode
npm run test:e2e:ui

# Run in debug mode
npm run test:e2e:debug
```

### Run All Tests

```bash
npm run test:all
```

## Unit Tests Coverage

The unit tests cover:

- **GUID Generation**: Validates UUID v4 format and uniqueness
- **Weather Icon Mapping**: Tests condition-to-icon mapping logic
- **Temperature Conversion**: Tests Celsius to Fahrenheit conversion

## E2E Tests Coverage

The end-to-end tests cover:

- **Splash Screen**: Verifies splash screen displays correctly with Enter App button
- **App Entry**: Tests entering the app and displaying weather data
- **Flag Status**: Verifies feature flag status is displayed
- **City Search**: Tests searching for different cities
- **Error Recording**: Verifies error recording button exists
- **Exit Functionality**: Tests exiting back to splash screen

## Test Configuration

- **Vitest Config**: `vitest.config.js`
- **Playwright Config**: `playwright.config.js`

## CI/CD Integration

Tests are designed to run in CI environments:

- Unit tests run quickly and don't require a server
- E2E tests automatically start the dev server before running
- Playwright retries failed tests in CI mode

## Writing New Tests

### Unit Tests

Create new test files in `tests/unit/` with the `.test.js` extension:

```javascript
import { describe, it, expect } from 'vitest';

describe('My Feature', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

### E2E Tests

Create new test files in `tests/e2e/` with the `.spec.js` extension:

```javascript
import { test, expect } from '@playwright/test';

test('should do something', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});
```

## Debugging Tests

### Unit Tests

Use the Vitest UI for interactive debugging:

```bash
npm run test:ui
```

### E2E Tests

Use Playwright's debug mode:

```bash
npm run test:e2e:debug
```

Or use the UI mode for visual debugging:

```bash
npm run test:e2e:ui
```
