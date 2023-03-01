import PricingPage from "../pages/pricePlan/pricingPage";
import RentalPage from "../pages/rentals/rentalPage";
import TestData from "../pages/testdata/testData";
import BookingsPage from "../pages/rentals/bookingsPage";
import CheckoutPage from "../pages/rentals/checkoutPage";
import { faker } from "@faker-js/faker";

describe('Rental Page E2E Test', 
{
  viewportHeight: 1080,
  viewportWidth: 1336,
},

() => {
    const rentalPage = new RentalPage();
    const checkout = new CheckoutPage();
    const pricingPage = new PricingPage();
    const bookingsPage = new BookingsPage();
    const rental_test_data = new TestData();
  
    beforeEach(() => {
      pricingPage.open(rental_test_data.rentalPageUrl);
      
    });
  
    it('validates each section is correctly displayed', () => {
      rentalPage.verifyAllSectionsDisplayed();
    });
  
    it('validates Add a review button works properly', () => {
      rentalPage.clickAddReviewButton();
      cy.url().should('contain', 'review');
    });
  
    it('validates Currency dropdown works correctly and currencies are changed all over the page', () => {
      const euros =("EUR");
      const dollars = ("USD");

      rentalPage.selectCurrency(euros);
      rentalPage.verifyCurrencyDisplayedOnPage('€');
      rentalPage.selectCurrency(dollars);
      rentalPage.verifyCurrencyDisplayedOnPage('$');
    });
  
    it('picks a date range of 6 days and validates the price changes on "Book for" button', () => {

      rentalPage.verifyAllSectionsDisplayed();

      // rentalPage.selectArrivalAndDepatureDates(rental_test_data.arrivalDate, rental_test_data.departureDate);

      //Start Trial

      // Click on the input field to open the date picker
      cy.get(rentalPage.arrivalDateText).click();

      // Select the desired date (in this example, January 1, 2023)
      cy.datepicker().selectDate(new Date('2023-01-01'));


      //End Trail
      rentalPage.validatePriceChangesOnBookForButton(rental_test_data.guests);

      rentalPage.clickBookForButton();

      bookingsPage.clickBookButton();

      checkout.fillGuestDetailsForm(rental_test_data.firstName, 
        rental_test_data.lastName,
        rental_test_data.email,
        rental_test_data.phone,
        rental_test_data.comments,
        rental_test_data.country
        )

        checkout.clickRequestButton();
        checkout.verifyBookingResquest();


    });

  
  });
  