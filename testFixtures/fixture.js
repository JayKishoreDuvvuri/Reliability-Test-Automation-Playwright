import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	}
})
export default test
