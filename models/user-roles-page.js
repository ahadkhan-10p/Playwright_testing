exports.UserRolesPage = class UserRolesPage {
    constructor(page){
        this.page = page
        
        this.userRolesTabBtn = page.locator(`//span[normalize-space()='Users & Roles']`)
        this.assertTabOpen = page.locator(`//h4[@class='font-weight-bold']`)
        this.addUserBtn = page.locator(`//button[@id="lnkCurrentAddEditUser_"]`)
        this.assertAddUserModalHeading = page.locator(`//h4[@id="genericModalTitle"]`)
        this.firstNameField = page.locator(`[id="FirstName"]`)
        this.lastNameField =  page.locator(`[id="LastName"]`)
        this.emailField = page.locator(`//input[@id="Email"]`)
        this.roleSelect = page.locator(`[id="RoleId"]`)
        this.projectNameDiv = page.locator(`[class="overide-selectize"]`)
        this.saveUserBtn = page.locator(`[id="btnAddEditUser"]`)
        this.assertUserAddedSucessMsg = page.locator(`[id="projectEdit"]`)
        this.searchField = page.locator(`[id="searchFilter"]`)
        this.searchBtn = page.locator(`//img[@src='/new-assets/images/search.png']`)
        this.userRowHover = `[class="user-text p-0"]`
        this.editBtn = page.locator(`//i[@class='icon-ic_edit']`)
        this.assertNameAfterEdit = page.locator(`[class="user-text p-0 pl-3"]`)
        this.resetPassBtn = page.locator(`//a//i[@class='icon-refresh']`)
        this.assertModalEmail = page.locator(`//h6[@id='Email']`)
        this.assertConfirmationHeading = page.locator(`//div[@class="modal-content confirm-project"]//h4[@id="exampleModalLabel"]`).first()
        this.modalResetPassBtn = page.locator(`[id="btnSuccess"]`).first()

    }

    //actions
    async clickUserRolesTab (){
        await this.userRolesTabBtn.click()
    }

    async clickAddUser () {
        await this.addUserBtn.click()
    }

    async enterFirstName (firstName) {
        await this.firstNameField.fill(firstName)
    }

    async enterLasttName (lastName) {
        await this.lastNameField.fill(lastName)
    }

    async enterEmail (email) {
        await this.emailField.fill(email)
    }

    async selectRole (role) {
        await this.roleSelect.selectOption( { label: role })
    }

    async selectProject (projectName) {
        await this.projectNameDiv.click()
        await this.page.locator('"'+projectName+'"').click()
    }

    async clickSaveUser () {
        await this.saveUserBtn.click()
    }

    async searchUser (searchKeyword) {
        await this.searchField.type(searchKeyword)
        await this.searchBtn.click()
    }

    async hoverUserRow () {
        await this.page.hover(this.userRowHover)
    }

    async clickEdit () {
        await this.editBtn.click()
    }

    async clickResetPass () {
        await this.resetPassBtn.click()
    }

    async clickModalResetPass () {
        await this.modalResetPassBtn.click()
    }
}