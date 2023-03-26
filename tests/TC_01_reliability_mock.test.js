/* Scenario 1 (Intercept/Mock): 
Intercept the Request with api endpoint and mock the response 

Scenario Description: 
Intercept the request and modify/mock the response with a user defined error

Test Steps:
1.Intercept The request
2.Modify the 'text' with user defined error message
3.Navigate to the website and click on Open App tab
4.User is on My Facts page and checks the mocked response on the UI
5.User validates the error message on the UI
*/

import { test, expect } from '@playwright/test'
import * as loginPageObjects from '../pageObjects/loginPageObjects'

test.describe('@Reliability: Intercepting the Request', () => {
	test('Intercept HTTP request and return a mocked response.', async ({
		page
	}) => {
		await page.route('**/facts?animal_type=cat', async (route, request) => {
			await request.allHeaders()
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				headers: { 'access-control-allow-origin': '*' },
				body: JSON.stringify([
					{
						text: 'This is an Internal error and the error has been logged.',
						type: 'cat',
						user: '5887e9f65c873e001103688d',
						__v: 0,
						_id: '58923f2fc3878c0011784c79'
					}
				])
			})
		})
		await page.goto('https://cat-fact.herokuapp.com/')
		await page.waitForLoadState('networkidle')
		await page.locator(loginPageObjects.openAppButton).click()
		await page.locator(loginPageObjects.myFactsBox).isVisible()
		await expect(page.locator(loginPageObjects.myFactsBox)).toHaveText(
			'This is an Internal error and the error has been logged.'
		)
	})
})
