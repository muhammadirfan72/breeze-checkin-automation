import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv'
// import path from 'path'
// dotenv.config({ path: path.resolve(__dirname, '.env') })

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 60000,
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    // ✅ Global headless true (enforces headless even if project isn't matched)
    headless: true,

    // baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true, // Redundant now but safe
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], headless: true },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: true },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
