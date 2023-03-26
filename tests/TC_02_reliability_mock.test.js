/* Scenario 2 (Intercept/Mock): 
Intercept the Request with api endpoint and mock the response 

Scenario Description: 
Intercept the request and modify/mock the response with a user defined error

Test Steps:
1.Intercept The request
2.Modify the Book 'Title', 'Author', 'Price' and 'Preview Rating' with user defined error message
3.Navigate to the website
4.User is on Books - crime category page and checks the mocked response on the UI
5.User validates the modified mocked message on the UI
*/

import { test, expect } from '@playwright/test'
import * as loginPageObjects from '../pageObjects/loginPageObjects'

const objectBody = [
	{
		id: 22,
		title: 'Intercept and Mock the UI Response',
		author: 'QA Automation Tester',
		genre: 'crime',
		price: '5.00',
		rating: '★★★★★',
		stock: 20
	}
]

test.describe('@Reliability: Intercepting the Request', () => {
	test('Intercept HTTP request and return a mocked response.', async ({
		page
	}) => {
		await page.route(
			'https://danube-web.shop/api/books',
			async (route, request) => {
				await request.allHeaders()
				await route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify(objectBody)
				})
			}
		)
		await page.goto('https://danube-web.shop/category?string=crime')
		await page.waitForLoadState('networkidle')
		await expect(page.locator(loginPageObjects.bookTitle)).toHaveText(
			'Intercept and Mock the UI Response'
		)
		await expect(page.locator(loginPageObjects.bookAuthor)).toHaveText(
			'QA Automation Tester'
		)
		await expect(page.locator(loginPageObjects.previewRating)).toHaveText(
			'★★★★★'
		)
		await expect(page.locator(loginPageObjects.previewPrice)).toHaveText(
			'$5.00'
		)
	})
})
