class RegistrationConfirmationPage {

    elements = {
        goToFlight: () => cy.get('#flight-link').click()
    }
}

module.exports = new RegistrationConfirmationPage();