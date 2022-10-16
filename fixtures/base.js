const Base = require("@playwright/test")
const {LoginPage} = require("../models/login-page")
const { ProjectPage } = require("../models/project-page")
const { TestSuitePage } = require("../models/test-suite-page");
const { TestCasePage } = require("../models/test-case-page");
const { UserRolesPage } = require("../models/user-roles-page");

exports.test = Base.test.extend({
    loginPage: async ({ page }, use) => {
        await use ( new LoginPage(page))
    },
    projectPage: async ({ page }, use) => {
        await use ( new ProjectPage(page))
    },
    testSuitePage: async ({ page }, use) => {
        await use ( new TestSuitePage(page))
    },
    testCasePage: async ({ page }, use) => {
        await use ( new TestCasePage(page))
    },
    userRolesPage: async ({ page }, use) => {
        await use ( new UserRolesPage(page))
    }
})

exports.expect = Base.expect
exports.request = Base.request