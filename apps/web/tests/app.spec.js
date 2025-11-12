
import { test, expect } from '@playwright/test';


const BASE_URL = 'http://localhost:8000'; 

test('Deve carregar e exibir a lista inicial', async ({ page }) => {

  await page.goto(BASE_URL);

  await expect(page.locator('h1')).toHaveText('Painel de Bloqueio');
  await expect(page.locator('#url-list li')).toHaveText('exemplo-inicial.com');
});


test('Deve adicionar uma nova URL à lista', async ({ page }) => {

  await page.goto(BASE_URL);

  const novaUrl = 'meuteste.com';
  await page.locator('#url-input').fill(novaUrl);
  await page.locator('#block-button').click();
  await expect(page.locator(`text=${novaUrl}`)).toBeVisible();
});