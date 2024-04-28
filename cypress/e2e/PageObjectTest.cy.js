import userRegistrationPage from "./pages/UserRegistrationPage";
import registrationConfirmationPage from "./pages/RegistrationConfirmationPage";
import flightDetailsPage from "./pages/FlightDetailsPage";
import selectFlight from "./pages/SelectFlight";
import enterBillingAddress from "./pages/EnterBillingAddress";
import flightItineraryPage from "./pages/FlightItineraryPage";

describe('Page Object Test Suite', () => {

    it('Page Object Test1', () => {

        //open flight booking website
        userRegistrationPage.visit();

        //enter registration details
        userRegistrationPage.enterRegistrationDetails();

        // go to flights
        registrationConfirmationPage.checkFlights();

        //enter flight details
        flightDetailsPage.enterFlightDetails();

        //select flights
        selectFlight.selectFromAvailableFlights();

        //enter billing address
        enterBillingAddress.enterBillingDetails();

        //check flight confirmation page
        flightItineraryPage.confirmPaymentPage();
    })
})