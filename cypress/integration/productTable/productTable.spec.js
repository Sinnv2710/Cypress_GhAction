import * as pageController from "../../support/pageObjectModel/pageController";

describe("Verify data product table on Homepage", () => {
    context("The data table should displays correctly on Homepage", () => {
        it('the data table contain some column : Company Name, Introduced ,Discontinued,Company ', function () {
            pageController.Homepage.getColumn("name").then(($text) => {
                expect($text).contain("Computer name", "First column is Computer Name displays correctly")
            })

            pageController.Homepage.getColumn("introduced").then(($text) => {
                expect($text).contain("Introduced", "Second column is Introduced displays correctly")
            })

            pageController.Homepage.getColumn("discontinued").then(($text) => {
                expect($text).contain("Discontinued", "Third column is Discontinued displays correctly")
            })

            pageController.Homepage.getColumn("company").then(($text) => {
                expect($text).contain("Company", "Fourth column is Company displays correctly")
            })
        });

    })

    context("The pagination should be working", () => {
        it("The pagination is displayed correctly with previous button is disabled default", () => {
            pageController.Homepage.getPaginationSlide()
            pageController.Homepage.getPreviousBtnPagination().should("have.class", "disabled")
        })

        it('The pagination is displayed correctly with next button is available default', () => {
            pageController.Homepage.getPaginationSlide()
            pageController.Homepage.getNextBtnPagination().should("not.have.class","disabled")
        });

        it('The pagination is displayed correctly with current area is displayed with text correctly', () => {
            pageController.Homepage.getPaginationSlide()
            pageController.Homepage.getCurrentStatePagination().invoke("text").then(($text) => {
                expect($text).contain("Displaying 1 to 10 of", "The current area is displayed with text correctly")
            })

        });
    })
})
