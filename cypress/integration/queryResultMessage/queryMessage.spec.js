import pageController from "../../support/pageObjectModel/pageController";
import {convertColorToHex} from "../../support/utils";

describe("Verify the query result message", () => {
    context("The CSS styles of query result message should be displayed correctly", () => {
        it("The font-size of the query result message should be displayed with 30px", () => {
            pageController.Homepage.verifyQueryResultMessage()

            /***
             * Get css font-size of element
             */
            pageController.Homepage.getCssStyleOfResultMessage("fontSize").then(($elementStyle) => {
                expect($elementStyle).be.equal('30px', "The CSS styles of query result message should be displayed correctly")
            })
        })

        it("The color of text should be #404040", () => {
            pageController.Homepage.verifyQueryResultMessage()

            /***
             * Get css color of element
             */
            pageController.Homepage.getCssStyleOfResultMessage("color").then(($elementStyle) => {
                const actualColor = convertColorToHex($elementStyle)
                expect(actualColor).be.equal("#404040", "the color of text is displayed correctly with color #404040")
            })
        })
    })
})
