import userRegistrationPage from "./pages/UserRegistrationPage";
import registrationConfirmationPage from "./pages/RegistrationConfirmationPage";
import flightDetailsPage from "./pages/FlightDetailsPage";
import selectFlight from "./pages/SelectFlight";
import enterBillingAddress from "./pages/EnterBillingAddress";
import flightItineraryPage from "./pages/FlightItineraryPage";

describe('Flight Booking Test Suite', () => {

    it('Flight Booking Test1', () => {

        //open flight booking website
        userRegistrationPage.visit();

        //enter registration details
        userRegistrationPage.enterRegistrationDetails();

        //click submit button
        userRegistrationPage.clickSubmitBtn();

        //confirms registration page
        registrationConfirmationPage.checkPageTitle();

        // go to flights
        registrationConfirmationPage.checkFlights();

        //confirm flight details page
        flightDetailsPage.checkPageTitle();

        //enter flight details
        flightDetailsPage.enterFlightDetails();

        //click continue button
        flightDetailsPage.clickContinueBtn();

        //confirm select flights page
        selectFlight.checkPageTitle();

        //select flights
        selectFlight.selectFromAvailableFlights();

        //click continue button
        selectFlight.clickContinueBtn();

        //confirm billing address page
        enterBillingAddress.checkPageTitle();

        //enter billing address
        enterBillingAddress.enterBillingDetails();

        //click continue button
        enterBillingAddress.clickContinueBtn();

        //confirm flight itinerary page
        flightItineraryPage.checkPageTitle();

        //check flight confirmation page
        flightItineraryPage.confirmPaymentPage();
    })
})