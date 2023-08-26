import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ricmars.github.io/democosmos/');
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('URL', { exact: true }).click();
  await page.getByLabel('URL', { exact: true }).fill('https://frontend-app.pega.net/prweb');
  await page.getByLabel('portalName').click();
  await page.getByLabel('portalName').fill('DemoReact1');
  await page.getByLabel('clientid').click();
  await page.getByLabel('clientid').fill('43524976946816519752');
  await page.getByLabel('clientsecret').click();
  await page.getByLabel('clientsecret').fill('90863E0C04EF929425BBC22004949762');
  await page.getByLabel('Application name').click();
  await page.getByLabel('Application name').fill('carinsurance');
  await page.getByLabel('C11 server URL').click();
  await page
    .getByLabel('C11 server URL')
    .fill('https://c11n-prod-adopt.constellation.cloud.pega.net/c11n/8.8.3-478/v102');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Hide settings' }).click();
  await page.goto('https://ricmars.github.io/democosmos/');
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('marsr');
  await page.getByPlaceholder('User name').press('Tab');
  await page.getByPlaceholder('Password').fill('rules');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Demo App' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Demo App' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
});
