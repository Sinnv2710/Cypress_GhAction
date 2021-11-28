import * as pageController from "../../support/pageObjectModel/pageController";
const moment = require("moment")
const faker = require('faker')


describe("Verify create new product", () => {
    context("Creating new product successfully", () => {
        it("Creating product successfully", () => {
            pageController.Homepage.clickInsertNewBtn()
            pageController.CreateNewProductPage.amOnNewProductPage()

            const companyName = faker.company.companyName()
            const introducedDate = moment(moment().now).format("yyyy-MM-DD")
            const discontinuesDate = moment(moment().endOf("day")).format("yyyy-MM-DD")

            pageController.CreateNewProductPage.inputNameCompany(companyName)
            pageController.CreateNewProductPage.inputIntroducedDate(introducedDate)
            pageController.CreateNewProductPage.inputDiscontinuedDate(discontinuesDate)
            pageController.CreateNewProductPage.selectRandomCompanyOption()
            pageController.CreateNewProductPage.clickSubmitBtn()

            pageController.Homepage.getMessageAlertConfirmation().then(($message) => {
                expect($message).contain(companyName, "The product is created successfully")
            })


        })
    })
})
