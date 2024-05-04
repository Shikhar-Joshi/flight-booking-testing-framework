class RegistrationConfirmationPage {

    elements = {
        registrationPageTitle: () => cy.get('li#register-confirm').
        find('h1'),
        goToFlight: () => cy.get('#flight-link').click()
    }

    checkPageTitle() {
        this.elements.registrationPageTitle().
            should('have.text', 'Registration Confirmation Page');
    }

    checkFlights() {
        this.elements.goToFlight();
    }
}

module.exports = new RegistrationConfirmationPage();