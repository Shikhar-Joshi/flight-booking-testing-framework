class SelectFlights {

    elements = {
        EmiratesFirstClassDeparture: () => cy.get('#input_50_0_1').first(),
        EmiratesFirstClassReturn: () => cy.get('#input_50_0_1').eq(1),

        continueBtn: () => cy.get('#reserveFlights')
    }

    selectEmiratesFirstClassDeparture() {
        this.elements.EmiratesFirstClassDeparture().click();
        this.elements.EmiratesFirstClassReturn().click();

        this.elements.continueBtn().click();
    }
}

module.exports = new SelectFlights();