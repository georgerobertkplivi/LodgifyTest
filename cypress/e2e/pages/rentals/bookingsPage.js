/// <reference types="cypress" />

class BookingsPage {

      arrivalDateSelector = '.reservation-item-dates .arrival-date';
      departureDateSelector = '.reservation-item-dates .departure-date';
      guestsSelector = ".form-control[data-testid='room-select-people']";
      combineDateSelector = ".title";
      bookingDateOnDetailsTav = "[xpath='1']";
      bookButton = "button[type='button']";
      currencyText = ".CurrencyText";
      requestToBook = ".btn-lg";


    clickBookButton(){
        cy.get(this.bookButton).click();
    }

    clickRequestToBookButton(){
      cy.get(this.requestToBook).click();
  }

    clickGuestButton(){
        cy.get(this.guestsSelector).click();
    }
  
    getArrivalDate() {
      return cy.get(this.arrivalDateSelector).invoke('text').then((text) => {
        return text.trim();
      });
    }
  
    getDepartureDate() {
      return cy.get(this.departureDateSelector).invoke('text').then((text) => {
        return text.trim();
      });
    }
  
    getGuestsNumber() {
      return cy.get(this.guestsSelector).invoke('text').then((text) => {
        return parseInt(text.trim());
      });
    }

 
    getCombinedDate() {
        return cy.get(this.combineDateSelector).invoke('text').then((text) => {
          return text.toString().trim();
        });
    }

    getNumberOfGuests(){
        return "4";
    }

    splitDateRange(dateString) {
        const [arrivalDateText, departureDateText] = String(dateString).split('-');
        return { arrivalDateText, departureDateText };
    }
      



  }

export default BookingsPage;
  