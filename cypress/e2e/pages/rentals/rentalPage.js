/// <reference types="cypress" />

import ContactPage from "../contactUs/contactPage";

/*
This will be an E2E test case:

Validate each section is correctly displayed.
Validate Add a review button works properly.
Currency dropdown works correctly and currencies are changed all over the page.
Pick a date range of 6 days and validate the price changes on "Book for" button.
Select 4 guests.
Click Book for button.
Check it redirects to checkout page.
Validate the dates and number of guests are correct.
Go to Step 3 and validate Summary tab
Fill the Guest Details form and click Request to Book.
URL to rental page: https://npreview-all-properties.lodgify.com/en/first-rental

*/

class RentalPage extends ContactPage {
    // Selectors
    guestsDropdown = ".counter-dropdown-trigger";
    bookButton = "a[type='submit']";
    requestToBookButton = "#request-to-book-button";
    firstRentalHeader = "div[class='ui segment'] h3[class='ui header']";
    locationSelector = ".is-location-name";
    pricePerNight = "div[class='ui compact segments is-summary'] span:nth-child(1)";
    home = "//a[normalize-space()='Home']";
    contactUsLink = "//a[normalize-space()='Contact us']";
    allPropertiesDropdown = ".ui.item.simple.scrolling.top.right.pointing.dropdown.pointer";


    bannerSection = ".ui.vertical.segment.full-bleed.has-gradient";
    rentalSection = "div[class='search-bar is-fixed'] div[class='ui container']";

    /*Description Section Selectors*/
    descriptionSection = "//div[@class='layout-viewport']/div[.='Vacation HomeFirst rental4 Guests4 GuestsQuick summary']";
    propertyTitle = ".sub";
    numberOfGuestAllowed = "div[class='ui horizontal list show-on-tablet show-on-computer show-on-widescreen']"
    quickSummary = "//p[normalize-space()='Quick summary']";

    /*Picture Section Selectors*/
    pictureHeader = "(//h3[normalize-space()='Pictures'])[1]";
    pictureBanner = ".property-pictures";
    exploreAllPicture = "//button[normalize-space()='Explore all pictures']";

    /*Amenities Section*/
    amenitiesHeader = "//h3[normalize-space()='Amenities']";

    /*Household Rules Section Selectors*/
    householdRulesSection = ".layout-viewport > div:nth-of-type(9)";
    checkIn = "i[name='check in']";
    checkOut = "i[name='check out']";

    /*Location Section Selectors*/
    locationHeader = "div[class='top aligned six wide column'] h3[class='ui header']";
    maps = "img[data-testid='google-map-img']";


    /*Rates Section Selectors*/
    ratesHeader = "//h3[normalize-space()='Rates']";
    currencyDropdown = ".ui.selection.dropdown[aria-disabled='false']";
    ratePrice = ".rate-price";
    ratePerNight = ".horizontal-wrap > .ui .ui";
    plusButton = "i[name='plus']";
    arrivalStartDate = ".custom-input-start";
    departureEndDate = ".custom-input-end";

    arrivalDateText = 'input[aria-label="Arrival"]'
    departureDateText = 'input[aria-label="Departure"]'

    


    /*Policy and notes Selectors*/
    policyHeader = "//h3[normalize-space()='Policy and notes']";
    paymentScheduleSection = "div[class='ui stackable grid'] div:nth-child(1) div:nth-child(1)";
    cancellationPolicySection = "(//div[@class='top aligned six wide column'])[3]"
    damageSection = "(//div[@class='top aligned twelve wide column'])[10]";

    /*Availability Section Selectors*/
    availabilitySection = ".availability-container";
    previousLink = "//p[.='Prev']";
    nextLink = "//p[.='Next']";


    /*Reviews Section Selectors*/
    reviewsSection = ".css-zrio31";
    reviewButton = "button[data-testid='reviews-add-review-button']";

    /*About Host Section*/
    avatar = ".avatar-container";
    contactUs = ".five";
    




    
    bookForButton = "//a[contains(text(),'Book for')]";

    checkOutPage = "#checkout-page";
    summaryTab = "#summary-tab";
    firstNameField = "#first-name";
    lastNameField = "#last-name";
    emailField = "#email";
    phoneNumberField = "#phone-number";

  
    // Validate each section is correctly displayed.
    validatNavigationLinksAreDisplayed(){
      cy.get(this.bannerSection).should("be.visible");
      cy.xpath(this.home).should("be.visible");
      cy.xpath(this.contactUsLink).should("be.visible");
      cy.get(this.allPropertiesDropdown).should("be.visible");
    }


    validateRentalSectionIsDisplayed() {
      cy.get(this.rentalSection).should("be.visible");
      cy.get(this.firstRentalHeader).scrollIntoView();
      cy.get(this.arrivalDateField).should("be.visible");
      cy.get(this.bookButton).should("be.visible");
      cy.get(this.pricePerNight).should("be.visible");
    }

    validateDescriptionIsDisplayed(){
      cy.xpath(this.descriptionSection).should("be.visible");
      cy.xpath(this.quickSummary).should("be.visible");
      cy.get(this.propertyTitle).should("be.visible");
      cy.get(this.numberOfGuestAllowed).should("be.visible");

    }

    validatePictureSectionIsDisplayed(){
      cy.xpath(this.pictureHeader).should("be.visible");
      cy.xpath(this.exploreAllPicture).should("be.visible");
      cy.get(this.pictureBanner).should("be.visible");

    }

    validateAmenitiesSectionIsDisplayed(){
      cy.xpath(this.amenitiesHeader).should("be.visible");
    }

    validateHouseholdRulesSectionIsDisplayed(){
      cy.get(this.householdRulesSection).should("be.visible");
      cy.get(this.checkIn).should("be.visible");
      cy.get(this.checkOut).should("be.visible");
    }

    validateLocationSectionIsDisplayed(){
      cy.get(this.locationHeader).should("be.visible");
      cy.get(this.maps).should("be.visible");
    }

    validateRatesSectionIsDisplayed(){
      cy.get(this.currencyDropdown).should("be.visible");
      cy.get(this.ratePrice).should("be.visible");
      cy.xpath(this.ratesHeader).should("be.visible");
    }

    validatePolicyAndNotesSectionIsDisplayed(){
      cy.xpath(this.policyHeader).scrollIntoView();
      cy.get(this.paymentScheduleSection).should("be.visible");
      cy.xpath(this.cancellationPolicySection).should("be.visible");
      cy.xpath(this.damageSection).should("be.visible");
      
    }

    validateAvailabilitySectionIsDisplayed(){
      cy.get(this.availabilitySection).should("be.visible");
      cy.xpath(this.previousLink).should("be.visible");
      cy.xpath(this.nextLink).should("be.visible");
    }

    validateReviewsSectionIsDisplayed(){
      cy.get(this.reviewsSection).scrollIntoView();
      cy.get(this.reviewButton).should("be.visible");
    }

    validateAboutHostSectionIsDisplayed(){
      cy.get(this.avatar).should("be.visible");
      cy.get(this.contactUs).should("be.visible");
    }

    verifyAllSectionsDisplayed(){
      this.validatNavigationLinksAreDisplayed();
      this.validateRentalSectionIsDisplayed();
      this.validateDescriptionIsDisplayed();
      this.validatePictureSectionIsDisplayed();
      this.validateAmenitiesSectionIsDisplayed();
      this.validateHouseholdRulesSectionIsDisplayed();
      this.validateLocationSectionIsDisplayed();
      this.validateRatesSectionIsDisplayed();
      this.validatePolicyAndNotesSectionIsDisplayed();
      this.validateAvailabilitySectionIsDisplayed();
      this.validateReviewsSectionIsDisplayed();
      this.validateReviewsSectionIsDisplayed();
      this.validateAboutHostSectionIsDisplayed();
      
    }

    verifyCurrencyDisplayedOnPage(currencySymbol){
      cy.contains(this.ratePrice, currencySymbol);
      cy.contains(this.ratePerNight, currencySymbol);

    }

  
    clickAddReviewButton() {
      cy.get(this.reviewButton).click();
    }
  
    selectCurrency(currency) {
      cy.xpath(this.ratesHeader).scrollIntoView();
      cy.xpath("//div[@class='ui selection dropdown']").click();
      cy.xpath("//div[.='" + currency + "']").click();
    }
  
    validateCurrencyIsChanged(currency) {
      cy.get(this.currencyDropdown).should("have.value", currency);
      cy.get("body").should("contain", currency);
    }

    addGuests(guestNumber){
      for (let i = 0; i <= guestNumber+1; i++) {
          cy.get(this.plusButton).click();
        }
        
  }
  
  
    validatePriceChangesOnBookForButton(numberOfGuests) {
      const priceBefore = cy.xpath(this.bookForButton).invoke("text");
      cy.get(this.guestsDropdown).click();
      this.addGuests(numberOfGuests);
      const priceAfter = cy.xpath(this.bookForButton).invoke("text");
      expect(priceAfter).to.be.not.eqls(priceBefore);
    }
  
    clickBookForButton() {
      cy.xpath(this.bookForButton).click();
    }

    // Getting Arrival Date

    getArrivalDate(){
      
      return cy.get(this.arrivalStartDate).invoke("text").then((text) => {
        return text.trim();
      });
    }

    // Getting Departure Date

    getDepartureDate(){
      
      return cy.get(this.departureEndDate).invoke("text").then((text) => {
        return text.trim();
      });
    }

    getGuests(){
      return cy.get("div[class='flex-container'] p").invoke("text").then((text) => {
        return text.trim();
      });
    }

    combineArrivalAndDepartureDate(){
      return this.getArrivalDate() + "-" + this.getDepartureDate();
    }

    verifyGuestsAndDatesOnCheckoutPage(
      // guestNumber,
       arrdate){
      // expect(this.getGuests()).to.equal(guestNumber)
      expect(this.combineArrivalAndDepartureDate()).to.equal(arrdate);

    }
  
    validateRedirectToCheckOutPage() {
      cy.url().should("contain", this.checkOutPage);
    }
  
    validateDatesAndGuestsAreCorrect(startDate, endDate, guests) {
      cy.get(".checkin-date .value").should("contain", startDate);
      cy.get(".checkout-date .value").should("contain", endDate);
      cy.get(".guests .value").should("contain", guests);
    }
  
    goToSummaryTab() {
      cy.get(this.summaryTab).click();
    }
  
    // fillGuestDetailsForm(firstName, lastName, email, phoneNumber) {
    //   cy.get(this.firstNameField).type(firstName);
    //   cy.get(this.lastNameField).type(lastName);
    //   cy.get(this.emailField).type(email);
    //   cy.get(this.phoneNumberField).type(phoneNumber);
    // }
  
    clickRequestToBookButton() {
      cy.get(this.requestToBookButton).click();
    }
  }
  
  export default RentalPage;
  