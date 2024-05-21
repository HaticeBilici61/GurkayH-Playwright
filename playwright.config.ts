import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 30000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* 
    Retry on CI only 
    Aşağıdaki ternary ifadesinin sol tarafındaki sayı, CI ortamlarında fail olan testlerin tekrar sayısını gösterir.
    Sağ taraftaki sayı ise CI olmayan ortamlardaki fail olan testlerin tekrar sayısını gösterir.
    Sağdaki sayıyı 1 yaparsak, bir testimiz fail olduğunda 1 kez daha tekrar koşulur.
  */
  retries: process.env.CI ? 2 : 1,
  /* 
    Opt out of parallel tests on CI. 
    Aşağıdaki ternary ifadesi, fullyParallel özelliğinin değeri true ise, testler koşulurken çalışacak olan worker sayısını belirler.
    Sağdaki sayı;
      - Eğer undefined ise, playwright, bilgisayarın işlemci gücüne göre, eş zamanlı çalışacak olan worker sayısını belirler.
      - Eğer biz bu sayıyı manuel olarak belirtirsek, belirttiğimiz sayı kadar worker, eş zamanlı olarak testleri koşar.
  */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'data-test',
    video: {
      mode: 'on-first-retry',
      size: { width: 1920, height: 1080 }
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },

    {
      name: 'mobile',
      use: {
        ...devices['iPhone 12 Pro'],
        // viewport: { width: 390, height: 844 }
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
