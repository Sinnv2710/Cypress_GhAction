const {randomIntFromInterval} = require("../../utils");

class Homepage {
    locator = {
        queryResultMessage: "section#main h1",
        searchBox: "input#searchbox",
        searchSubmitBtn: "input#searchsubmit",
        dataProductTable: "table.computers",
        dataRowTable: "table.computers tbody tr",
        insertNewBtn: "a#add",
        alertMessage: "div.alert-message",
        paginationSlide : "div#pagination"
    }

    verifyQueryResultMessage() {
        cy.get(this.locator.queryResultMessage).invoke('text').then(($text) => {
            expect($text).contain("computers found", "The query result message is displayed correctly")
        })
    }

    getCssStyleOfResultMessage(style) {
        switch (style) {
            case "fontSize":
                return cy.get(this.locator.queryResultMessage).invoke("css", "font-size")
                break
            case "color":
                return cy.get(this.locator.queryResultMessage).invoke("css", "color")
                break
        }
    }

    getTextSearchBox() {
        return cy.get(this.locator.searchBox).invoke("attr", "placeholder")
    }

    inputSearchField(dataText) {
        return cy.get(this.locator.searchBox).clear().type(dataText)
    }

    clickSubmitSearchBtn() {
        cy.get(this.locator.searchSubmitBtn).click()
    }

    getFirstDataRowOfDatatable() {
        return cy.get(this.locator.dataRowTable).first().then(($element) => {
            return cy.get(`${$element.selector} td a`).invoke("attr", "href")
        })
    }

    clickInsertNewBtn() {
        return cy.get(this.locator.insertNewBtn).click()
    }

    getMessageAlertConfirmation() {
        return cy.get(this.locator.alertMessage).invoke("text")
    }

    getColumn(title) {
        switch (title) {
            case "name":
                return cy.get(`${this.locator.dataProductTable} th.col2 a`).invoke("text")
                break
            case "introduced":
                return cy.get(`${this.locator.dataProductTable} th.col3 a`).invoke("text")
                break
            case "discontinued":
                return cy.get(`${this.locator.dataProductTable} th.col4 a`).invoke("text")
                break
            case "company":
                return cy.get(`${this.locator.dataProductTable} th.col5 a`).invoke("text")
                break
            default:
                throw new Error("Please input parameter")
        }
    }

    getPaginationSlide() {
        return cy.get(this.locator.paginationSlide).should("be.visible")
    }

    getPreviousBtnPagination() {
        return cy.get(this.locator.paginationSlide).find("li.prev")
    }

    getNextBtnPagination() {
        return cy.get(this.locator.paginationSlide).find("li.next")
    }

    getCurrentStatePagination() {
        return cy.get(this.locator.paginationSlide).find("li.current")
    }

    selectRandomProduct() {
        const index = randomIntFromInterval(0,10)
        return cy.get(this.locator.dataRowTable).any(index).find("td").first().find("a")
    }

    getNameOfProduct(element) {
        return cy.get(element).invoke("text")
    }

    clickNameOfProduct(element) {
        return cy.get(element).click()
    }


}

module.exports = new Homepage()
