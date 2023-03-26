import BasePage from './basePage'
import { baseUrl, restfulHomePageUrl } from '../config'
import fs from 'fs'
import * as loginPageObjects from '../pageObjects/loginPageObjects'

const testData = JSON.parse(fs.readFileSync(`./data/testdata.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}

	async openAutomationTestingApp() {
		await super.open(restfulHomePageUrl)
		return await super.waitForPageLoad()
	}

	async loginPageLogo() {
		return await this.isElementVisible(
			loginPageObjects.loginPageLogo,
			testData.notVisibleText
		)
	}

	async loginButtonIsEnabled() {
		return await this.isElementEnabled(
			loginPageObjects.loginButton,
			testData.notEnabledText
		)
	}

	async loginAsUser() {
		await this.waitAndFill(loginPageObjects.username, testData.username)
		await this.waitAndFill(loginPageObjects.password, testData.password)
		await this.waitAndClick(loginPageObjects.loginButton)
	}

	async clickLetMeHackButton() {
		return await this.waitAndClick(loginPageObjects.letMeHackButton)
	}

	async fillInForm() {
		await this.waitAndFill(loginPageObjects.contactName, testData.contactName)
		await this.waitAndFill(loginPageObjects.contactEmail, testData.contactEmail)
		await this.waitAndFill(loginPageObjects.contactPhone, testData.contactPhone)
		await this.waitAndFill(
			loginPageObjects.contactSubject,
			testData.contactSubject
		)
		await this.waitAndClick(loginPageObjects.submitButton)
	}
}
export default LoginPage
