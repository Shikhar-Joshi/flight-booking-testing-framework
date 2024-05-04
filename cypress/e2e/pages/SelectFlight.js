class SelectFlights {

    elements = {
        selectFlightPageTitle: () => cy.get('li#select-flight').find('h1'),

        EmiratesFirstClassDeparture: () => cy.get('#input_50_0_1').first(),
        EmiratesFirstClassReturn: () => cy.get('#input_50_0_1').last(),

        continueBtn: () => cy.get('#reserveFlights')
    }

    checkPageTitle() {

        this.elements.selectFlightPageTitle().
            should('contain', 'Select Flight - ');
    }

    selectFromAvailableFlights() {

        this.elements.EmiratesFirstClassDeparture().click();
        this.elements.EmiratesFirstClassReturn().click();
    }

    clickContinueBtn() {

        this.elements.continueBtn().click();
    }
}

module.exports = new SelectFlights();