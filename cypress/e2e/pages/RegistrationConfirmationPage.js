class RegistrationConfirmationPage {

    elements = {
        goToFlight: () => cy.get('#flight-link').click()
    }

    checkFlights() {
        this.elements.goToFlight();
    }
}

module.exports = new RegistrationConfirmationPage();