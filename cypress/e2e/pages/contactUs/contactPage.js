/// <reference types="cypress" />

/*

Add a test to verify field validations appears: Name, Phone Number, Email address, Comment are mandatories and a message should be displayed in case any of these fields are empty.
Pick the date range of 5 days for next year to verify the date picker is working properly.
Using your own criteria, add tests according to what you think should be important to cover in this page.
URL to contact page: https://npreview-all-properties.lodgify.com/en/contact-us


*/



class ContactPage {

    nameField = "input[placeholder='Name']";
    phoneField = "input[placeholder='Phone']";
    emailField = "input[placeholder='Email']";
    guestsField = "input[placeholder='Guests']";
    arrivalDateField = "[placeholder='Arrival']";
    departureDateField = "[placeholder='Departure']";
    commentField = "textarea";
    contact_form = ".fluid";
    send_button = ".primary";
    nameErrorPopup = "div[class='field'] div[class='ui red pointing below label']";
    emailErrorPopup = "div[class='eight wide field'] div[class='ui red pointing below label']";
    commentErrorPopup = ".form > .field > .ui > .ui";
    calendarForwardButton = "div[aria-label='Move forward to switch to the next month.']";
    calendarHeading = "[xpath='1']";



  
    isContactFormVisible() {
      return cy.get(this.contact_form).should('be.visible');
    }

    getCalendarHeadingTex(){
        return cy.get(this.calendarHeading).invoke('text');
    }

    clickCalendarForward(){
        for (let i = 0; i <= 19; i++) {
            cy.get(this.calendarForwardButton).click();
          }
          
    }

    selectArrivalDate(canlendar_date){
        cy.get(this.arrivalDateField).click();
        this.clickCalendarForward();
        cy.get("[aria-label='" + canlendar_date + "']").click();
    }

    selectDepartureDate(canlendar_date){
        cy.get("[aria-label='" + canlendar_date + "']").click();
    }

    selectArrivalAndDepatureDates(arrivalDate, departureDate){
        
        this.selectArrivalDate(arrivalDate);
        this.selectDepartureDate(departureDate);
    }


  
    fillContactForm({ name, phone, email, guests, arrivalDate, departureDate, comment }) {
      cy.get(this.nameField).type(name);
      cy.get(this.phoneField).type(phone);
      cy.get(this.emailField).type(email);
      cy.get(this.guestsField).type(guests);
      this.selectArrivalAndDepatureDates(arrivalDate, departureDate);
      cy.get(this.commentField).type(comment);
    }
  
    submitContactForm() {
      cy.get(this.send_button).click();
    }
  
    isNameErrorPopupDisplayed() {
      return cy.get('div.field div.ui.red.pointing.below.label').should('be.visible');
    }
  
    getNameErrorPopupText() {
      return cy.get(this.nameErrorPopup).invoke('text');
    }
  
    isEmailErrorPopupDisplayed() {
      return cy.get(this.emailErrorPopup).should('be.visible');
    }
  
    getEmailErrorPopupText() {
      return cy.get(this.emailErrorPopup).invoke('text');
    }

    getCommentErrorPopupText() {
        return cy.get(this.commentErrorPopup).invoke('text');
    }
  
    isSuccessMessageDisplayed() {
      return cy.get('.success-message').should('be.visible');
    }

    validateMandatoryFormFields(){
        cy.get(this.nameField).click();
        cy.get(this.emailField).click();
        this.getNameErrorPopupText().should('contain', 'Name is mandatory');
        cy.get(this.commentField).click();
        this.getEmailErrorPopupText().should('contain', 'Email is mandatory');
        cy.get(this.guestsField).click();
        this.getCommentErrorPopupText().should('contain', 'Comment is mandatory');


    }


  }
  

  
  export default ContactPage;