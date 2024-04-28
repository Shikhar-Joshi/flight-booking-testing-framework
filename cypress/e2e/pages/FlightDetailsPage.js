class FlightDetailsPage {

    elements = {
        selectRoundTrip: () => cy.get('input[value="roundtrip"]').click(),
        selectOneTrip: () => cy.get('input[value="oneway"]').click(),

        passengers: () => cy.get('#passCount'),
        departingFrom: () => cy.get('[name="fromPort"]'),
        departingFromMonth: () => cy.get('[name="fromMonth"]'),
        departingFromDay: () => cy.get('[name="fromDay"]'),
        arrivingIn: () => cy.get('[name="toPort"]'),
        returnMonth: () => cy.get('[name="toMonth"]'),
        returnDay: () => cy.get('[name="toDay"]'),

        selectEconomyClass: () => cy.get('input[value="Coach"]').click(),
        selectBusinessClass: () => cy.get('input[value="Business"]').click(),
        selectFirstClass: () => cy.get('input[value="First"]').click(),
        
        selectAirline: () => cy.get('select[name="airline"]'),

        continueBtn: () => cy.get('#*[id="findFlights"]')
    }

    enterFlightDetails() {

        this.elements.selectRoundTrip();

        this.elements.passengers().select('2');

        this.elements.departingFrom().select('Paris');
        this.elements.departingFromMonth().select('March');
        this.elements.departingFromDay().select('10');

        this.elements.arrivingIn().select('London');

        this.elements.returnMonth().select('June');
        this.elements.returnDay().select('10');

        this.elements.selectEconomyClass();

        this.elements.selectAirline().select('Unified Airlines');

        this.elements.continueBtn().click();
    }
}

module.exports = new FlightDetailsPage();