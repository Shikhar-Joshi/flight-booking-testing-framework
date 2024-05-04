class EnterBillingAddress {

    elements = {
        billingAddressPageTitle: () => cy.get('li#book-flight').
        find('h1'),

        enterStreetAddress: () => cy.get('#input_53_addr_line1'),
        enterCity: () => cy.get('#input_53_city'),
        enterState: () => cy.get('#input_53_state'),
        enterPostalCode: () => cy.get('#input_53_postal'),

        continueBtn: () => cy.get('#buyFlights')
    }

    checkPageTitle() {
        this.elements.billingAddressPageTitle().
            should('have.text', 'Enter Billing Address');
    }

    enterBillingDetails() {
        this.elements.enterStreetAddress().type('House 24, NCR');
        this.elements.enterCity().type('NCR');
        this.elements.enterState().type('Delhi');
        this.elements.enterPostalCode().type('234532');
    }

    clickContinueBtn() {

        this.elements.continueBtn().click();
    }
}

module.exports = new EnterBillingAddress();