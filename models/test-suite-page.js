exports.TestSuitePage = class TestSuitePage {
    constructor(page) {
        this.page = page
        this.addTestSuiteBtn = page.locator(`[id="btnTestPlan"]`)
        this.addTestSuiteTitle = page.locator(`[id="txtAddEditTestSuiteTitle"]`)
        this.addTestSuiteDescription = page.locator(`[id="Description"]`)
        this.saveTestSuite = page.locator(`[id="btnAddEditTestSuite"]`)
        this.successMsg = page.locator(`[id="added-testsuite-text"]`)
        this.editTestSuite = page.locator(`[id="editTestSuite"]`)
        this.assertDescription = page.locator(`[id="suiteDescription"]`)
        this.addSectionBtn = page.locator(`//button[normalize-space()='Add Section']`)
        this.addSectionsBtn = page.locator(`//button[@class='btn']`)
        this.addSectionName = page.locator(`[id="tbNameAddSection"]`)
        this.addSectionDescription = page.locator(`[id="tbDescriptionAddSection"]`)
        this.saveSectionBtn = page.locator(`[id="btnAddSection"]`)
        this.assertSectionAddSucessMsg = page.locator(`//div[@class="modal-footer text-center"]//span[contains(text(),'Section Added')]`)
        this.seccAddCloseModal = page.locator(`[id="btnCloseCrossAdd"]`)
        this.editSectionTwoBtn = page.locator(`//section[1]//div[2]//div[1]//div[1]//section[1]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//div[1]//div[2]//div[2]//div[1]//h2[1]//div[1]//div[1]//div[2]//div[1]//span[1]//a[1]//i[1]`)
        this.deleteSectionTwoBtn = page.locator(`//section[1]//div[2]//div[1]//div[1]//section[1]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//div[1]//div[2]//div[2]//div[1]//h2[1]//div[1]//div[1]//div[2]//div[1]//span[2]//a[1]//i[1]`)
        this.deleteConfirmBtn = page.locator(`[id="btnDeleteSection"]`)
        this.saveEditedSection = page.locator(`[id="btnEditSection"]`)
        this.assertEditedSectionSuccessMsg = page.locator(`//span[@id="editSectionSaveChanges"]//span`)
        this.addTestCaseBtn = page.locator(`//button[@class='btn ']`)
    }

    async clickAddTestSuiteBtn () {
        await this.addTestSuiteBtn.click()
    }

    async enterTestSuiteTitle (testSuiteTitle) {
        await this.addTestSuiteTitle.fill(testSuiteTitle)
    }

    async enterTestSuiteDescription (testSuiteDescription) {
        await this.addTestSuiteDescription.fill(testSuiteDescription)
    }

    async clickSaveTestSuite () {
        await this.saveTestSuite.click()
    }

    async clickEditTestSuite () {
        await this.editTestSuite.click()
    }

    async clickOpenTestSuite (testSuiteName) {
        await this.page.locator(`//a[normalize-space()='`+testSuiteName+`']`).click()
    }

    async clickAddSection () {
        await this.addSectionBtn.click()
    }

    async clickAddSections () {
        await this.addSectionsBtn.click()
    }

    async enterSectionName (sectionName) {
        await this.addSectionName.fill(sectionName)
    }

    async enterSectionDescription (sectionDescription) {
        await this.addSectionDescription.fill(sectionDescription)
    }

    async clickSaveSection () {
        await this.saveSectionBtn.click()
    }

    async clickCloseSectionAddModal () {
        await this.seccAddCloseModal.click()
    }

    async clickEditSection2 () {
        await this.editSectionTwoBtn.click()
    }

    async clickDeleteSection2 () {
        await this.deleteSectionTwoBtn.click()
    }

    async clickSavedEditedSection () {
        await this.saveEditedSection.click()
    }

    async clickDeleteConfirm () {
        await this.deleteConfirmBtn.click()
    }

    async clickAddTestCase () {
        await this.addTestCaseBtn.click()
    }
}