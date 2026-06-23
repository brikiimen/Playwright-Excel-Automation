# Playwright Excel Automation

This project demonstrates end-to-end test automation using Playwright and ExcelJS.

## Features

* Download Excel files from a web application
* Read and update Excel data dynamically using ExcelJS
* Upload modified Excel files back to the application
* Validate updated values through the UI
* Data-driven testing with multiple products
* Automated assertions using Playwright

## Tech Stack

* Playwright
* ExcelJS
* JavaScript (Node.js)

## Test Scenario

1. Download an Excel file from the application.
2. Update product prices in the Excel sheet.
3. Upload the modified file.
4. Verify that the updated values are correctly displayed in the web table.


## Run the Tests

```bash
npm install
npx playwright test
```

## Generate HTML Report

```bash
npx playwright show-report
```

This project showcases real-world test automation involving file handling, data-driven testing, and UI validation using Playwright.
