import { test, expect } from '@playwright/test';

test.describe('LaunchDarkly Hello JavaScript Demo', () => {
  test('should display splash screen with Enter App button', async ({ page }) => {
    await page.goto('/');
    
    // Check splash screen elements
    await expect(page.locator('h2')).toContainText('The Weather App');
    await expect(page.locator('p')).toContainText('Demo App for LaunchDarkly JavaScript SDKs');
    
    // Wait for button to be enabled (app ready)
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await expect(enterButton).toHaveText('Enter App');
  });

  test('should enter app and display weather data', async ({ page, context }) => {
    // Deny geolocation to use default city
    await context.grantPermissions([]);
    
    await page.goto('/');
    
    // Wait for and click Enter App button
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Check weather app is displayed
    await expect(page.locator('.city-name')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.temperature')).toBeVisible();
    await expect(page.locator('.weather-icon')).toBeVisible();
  });

  test('should display flag status', async ({ page, context }) => {
    await context.grantPermissions([]);
    await page.goto('/');
    
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Check flag status is displayed
    await expect(page.locator('.flag-status')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.flag-status')).toContainText('temperature-scale');
    await expect(page.locator('.flag-status')).toContainText('dynamic-weather-theme');
  });

  test('should allow city search', async ({ page, context }) => {
    await context.grantPermissions([]);
    await page.goto('/');
    
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Wait for app to load
    await expect(page.locator('.city-name')).toBeVisible({ timeout: 5000 });
    
    // Search for a city
    const cityInput = page.locator('#city-input');
    await cityInput.fill('London');
    await page.locator('#search-button').click();
    
    // Check city changed
    await expect(page.locator('.city-name')).toContainText('London', { timeout: 5000 });
  });

  test('should have error recording button', async ({ page, context }) => {
    await context.grantPermissions([]);
    await page.goto('/');
    
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Check error button exists
    await expect(page.locator('#error-button')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#error-button')).toContainText('Record Test Error');
  });

  test('should have exit button', async ({ page, context }) => {
    await context.grantPermissions([]);
    await page.goto('/');
    
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Check exit button exists
    await expect(page.locator('#exit-button')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#exit-button')).toContainText('Exit');
  });

  test('should exit back to splash screen', async ({ page, context }) => {
    await context.grantPermissions([]);
    await page.goto('/');
    
    const enterButton = page.locator('#enter-button');
    await expect(enterButton).toBeVisible({ timeout: 10000 });
    await enterButton.click();
    
    // Wait for app to load
    await expect(page.locator('.city-name')).toBeVisible({ timeout: 5000 });
    
    // Click exit
    await page.locator('#exit-button').click();
    
    // Should be back at splash screen
    await expect(page.locator('h2')).toContainText('The Weather App');
  });
});
