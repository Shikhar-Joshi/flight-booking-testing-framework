class UserRegistrationPage {

    elements = {
        firstName: () => cy.get('[name="firstName"]'),
        lastName: () => cy.get('[name="lastName"]'),
        phone: () => cy.get('[name="phone"]'),
        email: () => cy.get('[name="userName"]'),

        address: () => cy.get('[name="address1"]'),
        city: () => cy.get('[name="city"]'),
        state: () => cy.get('[name="state"]'),
        postalCode: () => cy.get('[name="postalCode"]'),
        country: () => cy.get('[name="country"]'),

        userName: () => cy.get('[name="email"]'),
        password: () => cy.get('[name="password"]'),
        confirmPassword: () => cy.get('[name="confirmPassword"]'),

        submitBtn: () => cy.get('[name="register"]')
    }

    visit() {
        cy.visit("https://vins-udemy.s3.amazonaws.com/docker/docker-book-flight.html");
    }

    enterRegistrationDetails() {

        //contact information
        this.elements.firstName().type('Raja');
        this.elements.lastName().type('Ram');
        this.elements.phone().type('9922114567');
        this.elements.email().type('ss@gmail.com');

        //mailing information
        this.elements.address().type('A-24, Delhi');
        this.elements.city().type('New Delhi');
        this.elements.state().type('Delhi');
        this.elements.postalCode().type('233456');
        this.elements.country().select('INDIA');

        //user information
        this.elements.userName().type('ram23');        
        this.elements.password().type('passram');
        this.elements.confirmPassword().type('passram');
    }

    clickSubmitBtn() {

        this.elements.submitBtn().click();
    }
}

module.exports = new UserRegistrationPage();