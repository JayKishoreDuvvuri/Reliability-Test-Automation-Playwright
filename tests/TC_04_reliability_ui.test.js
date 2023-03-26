/* Scenario 4 (UI): 
Login to the app and capture the error message for the Reliability test

Scenario Description: 
Capture Error message for Reliability Test on the UI

Test Steps:
1.User is on the Login Page
2.Enter credentials and click login button
3.User is on the Home page
4.User verifies the title and url
5.User clicks the Request Loan option from the side nav bar menu
6.User clicks on the Apply Now Button
7.User Validates the Error message as a part of the Reliability test.
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import * as config from '../config'
import * as homePageObjects from '../pageObjects/homePageObjects'

const testData = JSON.parse(fs.readFileSync(`./data/testdata.json`, `utf-8`))

test.describe('@Reliability Test: Capture the error message', () => {
	test('Capture the error message when user clicks on Apply Now button on Request Loan page', async ({
		loginPage,
		homePage
	}) => {
		await test.step(`Open the APP and check logo`, async () => {
			await loginPage.openApp()
			await loginPage.loginPageLogo()
			expect(await loginPage.getTitle()).toBe(config.title)
			expect(await loginPage.getUrl()).toContain(config.baseUrl)
		})

		await test.step(`Login as a User`, async () => {
			await loginPage.loginAsUser()
		})

		await test.step(`Verify landing page logo and title visible`, async () => {
			await homePage.welcomeMessageVisible()
			await homePage.homePageLabelVisible()
			expect(await homePage.getTitle()).toBe(config.homePageTitle)
			expect(await homePage.getUrl()).toContain(config.homePageUrl)
		})

		await test.step(`Click on Loan Request option`, async () => {
			await homePage.clickRequestLoanOption()
			await homePage.applyForALoanTitleVisible()
			expect(await homePage.getUrl()).toContain(config.requestLoanUrl)
		})

		await test.step(`Capture the error message`, async () => {
			await homePage.clickRequestLoanOption()
			await homePage.applyForALoanTitleVisible()
			await homePage.clickApplyNowButton()
			expect(await homePage.getUrl()).toContain(config.requestLoanUrl)
			await homePage.verifyElementContainsText(
				homePageObjects.errorTitle,
				testData.errorTitleText
			)
			await homePage.verifyElementContainsText(
				homePageObjects.errorMessage,
				testData.errorMessageText
			)
		}) 
	})
})
