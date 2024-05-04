class FlightItineraryPage {

    elements = {
        flightItineraryPageTitle: () => cy.get('li#flight-confirmation').
        find('h1 font'),

        checkFlightConfirmationPage: () => cy.get('font').contains('Flight Confirmation'),
        checkTaxPrice: () => cy.get('td').contains('Tax'),
        checkTotalPrice: () => cy.get('td').contains('Total Price')
    }

    checkPageTitle() {
        this.elements.flightItineraryPageTitle().
            should('have.text', 'Flight Itinerary Page');
    }

    confirmPaymentPage() {
        this.elements.checkFlightConfirmationPage();
        this.elements.checkTaxPrice();
        this.elements.checkTotalPrice();
    }
}

module.exports = new FlightItineraryPage();