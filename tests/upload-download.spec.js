const { test, expect } = require('@playwright/test');
const { writeExcelTest } = require('./excelUtils');

test('Upload download excel validation', async ({ page }) => {

    const filePath = '/Users/Downloads/download.xlsx' //user your path

    const testData = [
        { product: 'Banana', value: '492' },
        { product: 'Mango', value: '350' },
        { product: 'Apple', value: '650' }
    ]

    // Navigate to page
    await page.goto(
        'https://rahulshettyacademy.com/upload-download-test/index.html'
    );

    // Download Excel file
    const downloadPromise = page.waitForEvent('download')
    await page.locator('#downloadButton').click()
    await downloadPromise

    // Update multiple rows in Excel
    for (const data of testData) {
        await writeExcelTest( data.product,data.value,{ rowChange: 0, colChange: 2 },filePath)
    }

    // Upload modified file
    await page.locator('#fileinput').setInputFiles(filePath)

    // Validate updated values in UI
    for (const data of testData) {

        const row = page.getByRole('row').filter({ has: data.product })

        await expect(row).toContainText(data.value)
    }

})