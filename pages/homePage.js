import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'
import * as homePageObjects from '../pageObjects/homePageObjects'

const testData = JSON.parse(fs.readFileSync(`./data/testdata.json`, `utf-8`))

class HomePage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}

	async welcomeMessageVisible() {
		return await this.isElementVisible(
			homePageObjects.welcomeMessage,
			testData.notVisibleText
		)
	}

	async homePageLabelVisible() {
		return await this.isElementVisible(
			homePageObjects.accountServicesTitle,
			testData.notVisibleText
		)
	}

	async applyForALoanTitleVisible() {
		return await this.isElementVisible(
			homePageObjects.applyForALoanLabel,
			testData.notVisibleText
		)
	}
	async clickRequestLoanOption() {
		return await this.waitAndClick(homePageObjects.requestLoanOption)
	}

	async clickApplyNowButton() {
		return await this.waitAndClick(homePageObjects.applyNowButton)
	}
}
export default HomePage
