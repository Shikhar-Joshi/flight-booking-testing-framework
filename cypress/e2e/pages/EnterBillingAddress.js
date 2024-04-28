class EnterBillingAddress {

    elements = {
        enterStreetAddress: () => cy.get('#input_53_addr_line1'),
        enterCity: () => cy.get('#input_53_city'),
        enterState: () => cy.get('#input_53_state'),
        enterPostalCode: () => cy.get('#input_53_postal'),

        continueBtn: () => cy.get('#buyFlights')
    }

    enterBillingDetails() {
        this.elements.enterStreetAddress().type('House 24, NCR');
        this.elements.enterCity().type('NCR');
        this.elements.enterState().type('Delhi');
        this.elements.enterPostalCode().type('234532');

        this.elements.continueBtn().click();
    }
}

module.exports = new EnterBillingAddress();