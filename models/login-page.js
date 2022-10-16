exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page
        
        this.homepageLoginBtn = page.locator(`//a[normalize-space()='Log In']`)
        this.emailField = page.locator(`[id="Email"]`)
        this.passField = page.locator(`[id="Password"]`)
        this.loginBtn = page.locator(`[id="btnLogin"]`)
    }

    //actions
    async navigate(){
        await this.page.goto("/")
    }

    async clickHomePageLoginBtn(){
        await this.homepageLoginBtn.click()
    }

    async enterEmail(email){
        await this.emailField.fill(email)
    }

    async enterPassword(password){
        await this.passField.fill(password)
    }

    async clickLoginBtn(){
        await this.loginBtn.click()
    }
}