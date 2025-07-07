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

```bash
npm install
npx playwright test --global-setup=global-setup
npx playwright show-report
```

---

## ⚠️ Credentials Notice
This project uses public test credentials for `saucedemo.com`.