const {randomIntFromInterval} = require("../../utils");

class CreateNewProductPage {
    locator = {
        computerName: "input#name",
        introducedDate: "input#introduced",
        discontinuedDate: "input#discontinued",
        companyDropdown: "select#company",
        submitBtn: "input[type='submit']"
    }

    amOnNewProductPage() {
        return cy.url().then(($url) => {
            expect($url).contain("new", "The page is redirected to create new product page successfully")
        })
    }

    inputNameCompany(companyName) {
        return cy.get(this.locator.computerName).clear().type(companyName)
    }

    inputIntroducedDate(introducedDate) {
        return cy.get(this.locator.introducedDate).clear().type(introducedDate)
    }

    inputDiscontinuedDate(discontinuedDate) {
        return cy.get(this.locator.discontinuedDate).clear().type(discontinuedDate)
    }



    selectRandomCompanyOption() {
        const index = randomIntFromInterval(0,43)
        return cy.get(this.locator.companyDropdown).select((+index))
    }

    clickSubmitBtn() {
        return cy.get(this.locator.submitBtn).click()
    }
}

module.exports = new CreateNewProductPage()
