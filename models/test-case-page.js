exports.TestCasePage = class TestCasePage {
    constructor(page) {
        this.page = page
        this.assertTestCasePageHeading = page.locator(`//h4[@class='font-weight-bold']`)
        this.testcaseTitle = page.locator(`[id="Title"]`)
        this.tcEstimates = page.locator(`[id="Estimatetemp"]`)
        this.tcReference = page.locator(`[id="hdnRefs"]`)
        this.tcType = page.locator(`[id="TypeId"]`)
        this.tcPriority = page.locator(`[id="PriorityId"]`)
        this.tcDescription = page.locator(`[id="custom_desc"]`)
        this.tcToAutomate = page.locator(`[id="ToAutomate"]`)
        this.tcAutomated = page.locator(`[id="custom_automated"]`)
        this.tcSmoke = page.locator(`[id="Smoke"]`)
        this.tcRegression = page.locator(`[id="Regression"]`)
        this.tcPrecondition = page.frameLocator(`//div[@id="cke_CustomPreconds"]//div//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.tcTestData = page.frameLocator(`//div[@id="cke_TestData"]//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.tcSteps = page.frameLocator(`//div[@id="cke_CustomSteps"]//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.tcExpectedResult = page.frameLocator(`//div[@id="cke_CustomExpected"]//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.tcBdd = page.frameLocator(`//div[@id="cke_custom_bdd_gherkin"]//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.tcCucumberTags = page.frameLocator(`//div[@id="cke_custom_cucumber_tags"]//iframe`).locator(`[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]`)
        this.saveTestCase = page.locator(`[id="btnUpdateCase"]`)
        this.assertSaveTcTitle = page.locator(`[id="title"]`)
        this.editTestCase = page.locator(`[id="editLink"]`)
        this.addTestCaseExternally = page.locator(`//a[normalize-space()='+ Add Case']`)
        this.newTcTitle = page.locator(`[class="form-control w-50"]`)
        this.addTcExternallyBtn = page.locator(`[id="btn-add-case"]`)
        this.addedTcSucessMsg = page.locator(`[id="swal2-content"]`)    
    }

    async enterTitle (title) {
        await this.testcaseTitle.fill(title)
    }

    async enterEstimate (estimate) {
        await this.tcEstimates.fill(estimate)
    }

    async enterReference (reference) {
        await this.tcReference.fill(reference)
    }

    async selectType (typeValue) {
        await this.tcType.selectOption({ label: typeValue})
    }

    async selectPriority (priorityValue) {
        await this.tcPriority.selectOption({ label: priorityValue})
    }

    async enterDescription (description) {
        await this.tcDescription.fill(description)
    }

    async checkToAutomate () {
        await this.tcToAutomate.check()
    }

    async uncheckToAutomate () {
        await this.tcToAutomate.uncheck()
    }

    async checkAutomated () {
        await this.tcAutomated.check()
    }

    async checkSmoke () {
        await this.tcSmoke.check()
    }

    async checkRegression () {
        await this.tcRegression.check()
    }

    async uncheckRegression () {
        await this.tcRegression.uncheck()
    }

    async enterPrecondition (precondition) {
        await this.tcPrecondition.fill(precondition)
    }

    async enterTestData (testData) {
        await this.tcTestData.fill(testData)
    }

    async enterSteps (steps) {
        await this.tcSteps.fill(steps)
    }

    async enterExpectedResult (expectedResult) {
        await this.tcExpectedResult.fill(expectedResult)
    }

    async enterBddGherkin (bddGherkin) {
        await this.tcBdd.fill(bddGherkin)
    }

    async enterCucumberTags (cucumberTags) {
        await this.tcCucumberTags.fill(cucumberTags)
    }

    async clickSaveTestCase () {
        await this.saveTestCase.click()
    }

    async clickOpenTestCase (testCase) {
        await this.page.locator(`[data-original-title="`+testCase+`"]`).click()
    }

    async clickEditTestCase () {
        await this.editTestCase.click()
    }

    async clickAddTestCaseExternally () {
        await this.addTestCaseExternally.click()
    }

    async enterNewTcTitle (testcaseTitle) {
        await this.newTcTitle.fill(testcaseTitle)
    }

    async clickAddTcExternal () {
        await this.addTcExternallyBtn.click()
    }
}