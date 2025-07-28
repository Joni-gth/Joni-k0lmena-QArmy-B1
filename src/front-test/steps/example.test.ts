import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  performanceText,
  changelog,
  version
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getByText
} from '../utils/interactions';

Given("El usuario está en la pagina de K0lmena", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario cliquea el link de changelog', async function () {
  for (const page of pages) {
   // await getByPlaceholderAndClickIt(page, inputLabel);
   // await getByPlaceholderAndFillIt(page, inputLabel, "auto");
    await page.getByText(changelog).click();
  }
});

When('El usuario cliquea la version 2.0', async function () {
  for (const page of pages) {
    // await getByPlaceholderAndClickIt(page, inputLabel);
    // await getByPlaceholderAndFillIt(page, inputLabel, "auto");
     await page.getByRole('link', {name: version})
  }
});


Then('El usuario ve la informacion de la version 2.0', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", version)).toBeTruthy();
  }
});
