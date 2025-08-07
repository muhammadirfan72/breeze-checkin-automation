import { test, expect } from '@playwright/test';
import path from 'path';

test('Breeze Check-in Test Automation', async ({ page }) => {
    // Test Case-1: Select Language
    await test.step('Test Case-1: Select Language', async () => {
        await page.goto('https://secure2.talkehr.com/StagingAccount/SecureLogin#/Home');
        // await page.getByText('English').click();
        // await page.getByRole('button', { name: 'Get Started' }).click();
    });

    // // Test Case-2: Verify Date of Birth
    // await test.step('Test Case-2: Verify DOB', async () => {
    //     await page.getByRole('combobox').first().selectOption('8');
    //     await page.locator('div').filter({ hasText: /^Select Date12345678910111213141516171819202122232425262728293031$/ }).getByRole('combobox').selectOption('5');
    //     await page.getByRole('combobox').nth(2).selectOption('2025');
    // });

    // // Test Case-3: Begin Check-in
    // await test.step('Test Case-3: Begin Check-in', async () => {
    //     await page.getByRole('button', { name: 'Begin Check-in' }).click();
    // });

    // // Test Case-4: Consent Form
    // // await test.step('Test Case-4: Consent Form', async () => {
    // //     await page.getByRole('button', { name: 'Next' }).click();
    // //     await page.getByRole('button', { name: 'I Agree' }).click();
    // // });

    // // Test Case-5: Financial Form
    // // await test.step('Test Case-5: Financial Form', async () => {
    // //     await page.getByRole('button', { name: 'Next' }).click();
    // //     await page.getByRole('button', { name: 'I Agree' }).click();
    // // });

    // // Test Case-6: Update Demographics
    // await test.step('Test Case-6: Update Demographics', async () => {
    //     await page.getByRole('textbox', { name: 'Search Language' }).click();
    //     await page.getByRole('textbox', { name: 'Search Language' }).fill('eng');
    //     await page.getByRole('button', { name: 'English' }).click();
    //     await page.getByRole('button', { name: 'Next' }).click();
    // });

    // // Test Case-7: Upload Profile Picture
    // // await test.step('Test Case-7: Upload Profile Picture', async () => {
    // //     const frontChooserPromise = page.waitForEvent('filechooser');
    // //     await page.getByRole('button', { name: 'Ok' }).click();
    // //     const frontChooser = await frontChooserPromise;
    // //     await frontChooser.setFiles(path.resolve(__dirname, 'Files', 'Profile.png'));
    // // });

    // // Test Case-8: Add Insurance
    // await test.step('Test Case-8: Add Insurance', async () => {
    //     // Upload Front
    //     const frontChooserPromise = page.waitForEvent('filechooser');
    //     await page.getByRole('button', { name: 'Add Card Front' }).click();
    //     const frontChooser = await frontChooserPromise;
    //     await frontChooser.setFiles(path.resolve(__dirname, 'Files', 'InsuranceFront.png'));

    //     // Upload Back
    //     const backChooserPromise = page.waitForEvent('filechooser');
    //     await page.getByRole('button', { name: 'Add Card Back' }).click();
    //     const backChooser = await backChooserPromise;
    //     await backChooser.setFiles(path.resolve(__dirname, 'Files', 'InsuranceBack.png'));
    //     await page.getByRole('button', { name: 'Next' }).click();
    //     const toastMessage = page.locator('.toast-message');
    //     await expect(toastMessage).toBeVisible();
    //     await expect(toastMessage).toContainText('Thank you for providing your insurance details. Your doctor will update your file accordingly.');
    // });

    // // Test Case-9: Add Allergy
    // await test.step('Test Case-9: Add Allergy', async () => {
    //     // await page.getByRole('button', { name: 'Add Allergy' }).click();       //Existing Patient
    //     await page.getByRole('heading', { name: 'Add Allergy' }).click();
    //     await page.getByRole('textbox', { name: 'Search e.g. Peanut or Dust' }).click();
    //     await page.getByRole('textbox', { name: 'Search e.g. Peanut or Dust' }).fill('abc');
    //     await page.getByRole('textbox', { name: 'Search e.g. Peanut or Dust' }).press('Enter');
    //     await page.getByRole('button', { name: 'Abciximab' }).click();
    //     await page.locator('#main_SeverityDropDown').selectOption('6');
    //     await page.locator('span').filter({ hasText: 'Search Reaction' }).first().click();
    //     await page.getByText('Allergic headache (disorder)').click();
    //     await page.locator('#Allergy-Modal div').filter({ hasText: 'Allergy* Abciximab Insulin Lispro-aabc Severity Select Severity Level Unknown' }).nth(2).click();
    //     await page.getByRole('button', { name: 'Save', exact: true }).click();
    //     const toastMessage = page.locator('.toast-message');
    //     await page.waitForSelector('.toast-message', { timeout: 5000 });
    //     // Assert that the toast is visible
    //     await expect(toastMessage).toBeVisible();
    //     // Assert the text content of the toast
    //     await expect(toastMessage).toContainText('Allergy saved successfully');
    //     await page.getByRole('button', { name: 'Next' }).click();
    //     await page.waitForTimeout(3000);
    // });

    // // Test Case-10: Add Medication
    // await test.step('Test Case-10: Add Medication', async () => {
    //     //await page.getByRole('button', { name: 'Add Medication' }).click();     //Existing Patient
    //     await page.getByRole('heading', { name: 'Add Medication' }).click();
    //     await page.getByRole('button', { name: 'Add Medication Manually' }).click();
    //     //await page.getByRole('textbox', { name: 'Search Medicine' }).click();
    //     await page.getByRole('textbox', { name: 'Search Medicine' }).fill('abc');
    //     await page.getByRole('textbox', { name: 'Search Medicine' }).press('Enter');
    //     await page.getByRole('button', { name: 'Abc complete senior women\'s 8' }).click();
    //     await page.getByRole('textbox', { name: 'How often you take this' }).click();
    //     await page.getByRole('textbox', { name: 'How often you take this' }).fill('23');
    //     await page.getByRole('textbox', { name: 'Search Diagnosis' }).click();
    //     await page.getByRole('textbox', { name: 'Search Diagnosis' }).fill('csd');
    //     await page.getByRole('textbox', { name: 'Search Diagnosis' }).press('Enter');
    //     await page.getByRole('button', { name: 'Cat-scratch disease' }).click();
    //     await page.getByRole('button', { name: 'Save', exact: true }).click();
    //     const toastMessage = page.locator('.toast-message');
    //     await page.waitForSelector('.toast-message', { timeout: 5000 });
    //     //Assert that the toast is visible
    //     await expect(toastMessage).toBeVisible();
    //     //Assert the specific toast text
    //     await expect(toastMessage).toContainText('Medications saved successfully');
    //     await page.waitForTimeout(3000);
    //     await page.getByRole('button', { name: 'Next' }).click(({ timeout: 5000 })
    //     );
    //     await page.getByRole('button', { name: 'Yes' }).click();
    // });

    // // Test Case-11: Add Family History
    // await test.step('Test Case-11: Add Family History', async () => {
    //     await page.waitForTimeout(3000);
    //     // await page.getByRole('button', { name: 'Add Family History' }).click(); Existing Patient
    //     await page.getByRole('heading', { name: 'Add Family History' }).click();
    //     await page.locator('#main_relationship').selectOption('BRO');
    //     await page.locator('#commonDisease').selectOption('1');
    //     await page.getByRole('button', { name: 'Save' }).click();
    //     await page.getByRole('button', { name: 'Next' }).click();
    //     await page.getByRole('button', { name: 'Next' }).click();
    //     await page.waitForTimeout(3000);
    // });

    // // Test Case-12: Add Past Surgical History
    // await test.step('Test Case-12: Add Past Surgical History', async () => {
    //     // await page.getByRole('button', { name: 'Add Past Surgical History' }).click(); Existing Patient
    //     await page.getByRole('heading', { name: 'Add Past Surgical History' }).click();
    //     await page.getByRole('textbox', { name: 'Enter Surgical Procedure' }).click();
    //     await page.getByRole('textbox', { name: 'Enter Surgical Procedure' }).fill('Test');
    //     await page.locator('#newPastSurg input[type="date"]').fill('2025-07-22');
    //     await page.getByRole('button', { name: 'Save' }).click();
    //     await page.getByRole('button', { name: 'Next' }).click();
    // });

    // // Test Case-13: Add Past Hospitalization
    // await test.step('Test Case-13: Add Past Hospitalization', async () => {
    //     //await page.getByRole('button', { name: 'Add Past Hospitalization' }).click(); Existing Patient
    //     await page.getByRole('heading', { name: 'Add Past Hospitalization' }).click();
    //     await page.locator('input[name="date"]').fill('2025-07-22');
    //     await page.getByRole('textbox', { name: 'Enter Duration' }).click();
    //     await page.getByRole('textbox', { name: 'Enter Duration' }).fill('2');
    //     await page.getByRole('textbox', { name: 'Enter Hospitalization Reason' }).click();
    //     await page.getByRole('textbox', { name: 'Enter Hospitalization Reason' }).fill('Reason');
    //     await page.getByRole('button', { name: 'Save' }).click();
    //     await page.getByRole('button', { name: 'Finish' }).click();
    // });

    // // Test Case-14: Verify Check-in
    // await test.step('Test Case-14: Verify Check-in', async () => {
    //     // Locate the element that contains the text
    //     const checkInText = page.locator('h5 span', { hasText: 'Check-in Complete' });
    //     // Wait and assert
    //     await expect(checkInText).toBeVisible();
    //     await expect(checkInText).toHaveText('Check-in Complete');
    // });
});
