# Playwright E2E PET Project — SauceDemo

End-to-end test automation project using **Playwright + TypeScript**

---

## Features

- Authentication via `globalSetup` and saved `auth.json`
- UI test coverage: login, cart, checkout
- Page Object Model: each page as a separate class
- Fixtures for injecting page objects
- Negative test coverage: validation & error messages for LoginPage
- Base test abstraction (`baseTest`) for reusability
- Grouped tests using `describe`, setup with `beforeEach`\
- Screenshots, videos and HTML reports

---

## How to launch

### 1. Install dependencies:
```bash
npm install
```

### 2.
```bash Install Playwright browsers:
npx playwright install
```

### 3. Create a .env file in the project root (see .env.example):

### 4. Run tests:
```bash
npx playwright test
```

### 5.  Open HTML report:
```bash
npx playwright show-report
```
