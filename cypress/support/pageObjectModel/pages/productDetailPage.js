class ProductDetailPage {
    locator = {
        computerName: "input#name",
        introducedDate: "input#introduced",
        discontinuedDate: "input#discontinued",
        companyDropdown: "select#company",
        saveBtn: "input[value*='Save']"
    }

    getTextFromComputerNameField() {
        return cy.get(this.locator.computerName).invoke("attr","value")
    }

    inputNewName(name) {
        return cy.get(this.locator.computerName).clear().type(name)
    }

    clickSaveBtn() {
        return cy.get(this.locator.saveBtn).click()
    }


}

module.exports = new ProductDetailPage()
