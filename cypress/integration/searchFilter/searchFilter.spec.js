import * as pageController from "../../support/pageObjectModel/pageController";


describe("Verify Search Filter field on Homepage", () => {
    context("Filtering", () => {
        it("The title of text should be displayed as default in text field", () => {
            const expectedText = "Filter by computer name..."
            pageController.Homepage.getTextSearchBox().then(($actualText) => {
                expect($actualText).be.equal(expectedText, "Title of text is displayed correctly as default")
            })
        })

        it("Filtering function working after click Submit button", () => {
            const dataTest = "macintosh"
            pageController.Homepage.getFirstDataRowOfDatatable().then(($text) => {
                const firstDataBeforeFilter = $text.substr($text.indexOf("s/") + 2)

                pageController.Homepage.inputSearchField(dataTest)

                pageController.Homepage.clickSubmitSearchBtn()

                pageController.Homepage.getFirstDataRowOfDatatable().then(($textAfter) => {
                    const firstDataAfterFilter = $textAfter.substr($textAfter.indexOf("s/") + 2)
                    expect(firstDataAfterFilter).not.be.equal(firstDataBeforeFilter, "The filtering search function working correctly")
                })


            })
        })
    })
})
