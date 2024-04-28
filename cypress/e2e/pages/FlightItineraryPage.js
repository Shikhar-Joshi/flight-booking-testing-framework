class FlightItineraryPage {

    elements = {
        checkFlightConfirmationPage: () => cy.get('font').contains('Flight Confirmation'),
        checkTaxPrice: () => cy.get('td').contains('Tax'),
        checkTotalPrice: () => cy.get('td').contains('Total Price')
    }

    confirmPaymentPage() {
        this.elements.checkFlightConfirmationPage();
        this.elements.checkTaxPrice();
        this.elements.checkTotalPrice();
    }
}

module.exports = new FlightItineraryPage();