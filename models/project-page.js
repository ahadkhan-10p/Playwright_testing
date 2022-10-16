exports.ProjectPage = class ProjectPage {
    constructor(page) {
        this.page = page
        this.projectTabBtn = page.locator(`//span[normalize-space()='Projects']`)
        this.addProjectBtn = page.locator(`//a[@id='lnkCurrentEditProject_0']//i[@class='icon-plus']`)
        this.projectNameField = page.locator(`[id="Name"]`)
        this.projectDescriptionField = page.locator(`[id="Description"]`)
        this.mainDropdown = page.locator(`[id="selectForSelectedUserContainerId"]`)
        this.saveProjectBtn = page.locator(`[id="btnEditProject"]`)
        this.searchBtn = page.locator(`[id="projectListSearchText"]`)
        this.assertProjectName = page.locator(`//div[@class="edit-text"]//h4[@class="font-weight-bold"]`)
        this.assertDescription =page.locator(`//div[@class="edit-text"]//p`)
        this.projectEditBtn = page.locator(`//div[@class="edit_project"]//button`)
        this.testSuiteTab= page.locator(`//a[normalize-space()='Test Suites & Cases']`)
    }

    async clickProjectTabBtn () {
        await this.projectTabBtn.click()
    }

    async clickAddProjectBtn () {
        await this.addProjectBtn.click()
    }

    async enterProjectName (projectName) {
        await this.projectNameField.fill(projectName)
    }

    async enterProjecDescription (projectDescription) {
        await this.projectDescriptionField.fill(projectDescription)
    }

    async clickDropdown () {
        await this.mainDropdown.click()
    }

    async selectDropdownValue (collabratorsName, indexNumber) {
        await this.page.locator('"'+collabratorsName+'">>nth='+indexNumber+'').click()
    }

    async clickSaveProject () {
        await this.saveProjectBtn.click()
    }

    async enterProjectSearch (searchProjectName) {
        await this.searchBtn.fill(searchProjectName)
    }

    async clickOpenProjectByName (projectName) {
        await this.page.locator('[title="'+projectName+'"]>>nth=0').click()
    }

    async clickProjectEditBtn () {
        await this.projectEditBtn.click()
    }

    async clickTestSuiteTab () {
        await this.testSuiteTab.click()
    }
}