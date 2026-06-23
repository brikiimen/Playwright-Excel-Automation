// @ts-check
import { devices } from '@playwright/test';

 
const config=({
  testDir: './tests',

  fullyParallel: true,
 
  reporter: 'html',
 
  use: {
  
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ]
});

module.exports=config