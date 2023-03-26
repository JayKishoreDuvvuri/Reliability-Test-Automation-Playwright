/* Scenario 3 (UI): 
Login to the app and capture the error message for the Reliability test

Scenario Description: 
Capture Error message for Reliability Test on the UI

Test Steps:
1.User navigates to Home Page
2.User verifies the title and url
3.User clicks on the Let Me Hack Button
4.User fills the form and leaves the Message description bo empty and clicks on Submit Button
5.User Validates the Error message as a part of the Reliability test. 
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import * as config from '../config'
import * as loginPageObjects from '../pageObjects/loginPageObjects'

const testData = JSON.parse(fs.readFileSync(`./data/testdata.json`, `utf-8`))

test.describe('@Reliability Test: Capture the error message ', () => {
	test('Capture the error message when user fills the form and clicks on Submit button on Shady Meadows Bed & Breakfast website', async ({
		loginPage
	}) => {
		await test.step(`Open the APP and validate the tilte and url`, async () => {
			await loginPage.openAutomationTestingApp()
			await loginPage.clickLetMeHackButton()
			expect(await loginPage.getTitle()).toBe(config.restfulBookingTitle)
			expect(await loginPage.getUrl()).toContain(config.restfulHomePageUrl)
		})

		await test.step(`Capture the error message`, async () => {
			await loginPage.fillInForm()
			await loginPage.isElementVisible(
				loginPageObjects.errorMessageOne,
				testData.notVisibleText
			)

			await loginPage.isElementVisible(
				loginPageObjects.errorMessageTwo,
				testData.notVisibleText
			)
		})
	})
})
