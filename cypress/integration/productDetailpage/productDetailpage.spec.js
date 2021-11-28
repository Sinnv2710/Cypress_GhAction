import * as pageController from "../../support/pageObjectModel/pageController";

const faker = require('faker')

describe("Verify product detail page and update product function", () => {
    context("Clicking product in product data table and redirected to product detail page", () => {
        it('Should be redirected to product detail page by click product on data table in Homepage', () => {
            pageController.Homepage.selectRandomProduct().then(($element) => {
                pageController.Homepage.getNameOfProduct($element).then(($textHomePage) => {
                    pageController.Homepage.clickNameOfProduct($element)
                    pageController.ProductDetailPage.getTextFromComputerNameField().then(($textProductDetailPage) => {
                        expect($textProductDetailPage).equal($textHomePage, "The Company Name is displayed correctly between Homepage and Product detail page")
                    })
                })
            })
        });

        it('Should be displayed correctly new data in Homepage after update data product in Product detail page', () => {
            const newName = faker.company.companyName()
            pageController.Homepage.selectRandomProduct().then(($element) => {
                pageController.Homepage.getNameOfProduct($element).then(($textHomePage) => {
                    pageController.Homepage.clickNameOfProduct($element)
                    pageController.ProductDetailPage.inputNewName(newName)
                    pageController.ProductDetailPage.clickSaveBtn()
                    pageController.Homepage.getMessageAlertConfirmation().then(($text) => {
                        expect($text).contain(newName, "The product is created successfully")
                    })
                })
            });
        })
    })
})
