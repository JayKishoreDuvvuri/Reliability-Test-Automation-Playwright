import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

	async open(url) {
		await this.page.goto(url)
	}

	async getTitle() {
		return await this.page.title()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(10000)
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('networkidle')
	}

	async waitAndClick(selector) {
		await this.page.waitForSelector(selector)
		return await this.page.click(selector)
	}

	async waitAndHardClick(selector) {
		await this.page.waitForSelector(selector)
		return await this.page.$eval(selector, element => element.click())
	}

	async waitAndFill(selector, text) {
		await this.page.waitForSelector(selector)
		await this.page.fill(selector, text)
	}

	async keyPress(selector, key) {
		this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementText(selector, text) {
		await this.page.waitForSelector(selector)
		const textValue = await this.page.textContent(selector)
		return expect(textValue.trim()).toBe(text)
	}

	async verifyElementContainsText(selector, text) {
		await this.page.waitForSelector(selector)
		return await expect(this.page.locator(selector)).toContainText(text)
	}

	async verifyElementToHaveText(selector, text) {
		await this.page.waitForSelector(selector)
		return await expect(this.page.locator(selector)).toHaveText(text)
	}

	async selectValueFromDropdown(selector, text) {
		await this.page.waitForSelector(selector)
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text })
	}

	async verifyElementAttribute(selector, attribute, value) {
		await this.page.waitForSelector(selector)
		const textValue = await this.page.getAttribute(selector, attribute)
		return expect(textValue.trim()).toBe(value)
	}

	async isElementVisible(selector, errorMessage) {
		await this.page.waitForSelector(selector)
		const element = this.page.locator(selector)
		try {
			const isVisible = await element.isVisible()
			expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementNotVisible(selector) {
		const element = this.page.locator(selector)
		return expect(element).toBeHidden
	}

	async isElementEnabled(selector, errorMessage) {
		await this.page.waitForSelector(selector)
		const element = this.page.locator(selector)
		try {
			const isEnabled = await element.isEnabled()
			expect(isEnabled).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementChecked(selector, errorMessage) {
		await this.page.waitForSelector(selector)
		const element = this.page.locator(selector)
		try {
			const isChecked = await element.isChecked()
			expect(isChecked).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}
}
export default BasePage
