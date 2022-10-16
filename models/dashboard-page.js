exports.DashboardPage = class DashboardPage{
    constructor(page) {
        this.page = page
        this.addProjectBtn = page.locator(`//a[@id='lnkCurrentEditProject_0']//i[@class='icon-plus']`)
        this.projectNameField = page.locator(`[id="Name"]`)
        this.projectDescriptionField = page.locator(`[id="Description"]`)
        this.mainDropdown = page.locator(`[id="selectForSelectedUserContainerId"]`)
        this.saveProjectBtn = page.locator(`[id="btnEditProject"]`)
    }

    //actions

    async clickAddProjectBtn () {
        await this.addProjectBtn.click()
    }

    async enterProjectName (projectName) {
        await this.projectNameField.fill(projectName)
    }

    async enterProjecDescription (projectDescription) {
        await this.projectNameField.fill(projectDescription)
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
}