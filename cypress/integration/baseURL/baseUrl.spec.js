const baseURL = Cypress.config().baseUrl
describe('Verify the URL after redirected', () => {
    context('The url should have path "/computers" each time redirected successfully', () => {
        /***
         * Redirect to
         */
        it('The Base URL should be displayed path "/computers" correctly after redirected successfully', () => {
            cy.visit(`${baseURL}/computers`).intercept(baseURL)
            cy.url().then(($url) => {
                expect($url).to.be.contain('/computers', "The Base URL is displayed correctly with path '/computers' after redirected successfully")
            })
        })
    })
})
