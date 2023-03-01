import BookingsPage from "./bookingsPage";

class CheckoutPage extends BookingsPage {


    firstName = "input[placeholder='First Name']";
    lastName = "input[placeholder='Last name']";
    email = "input[placeholder='Email']";
    phoneNumber = "input[data-testid$='checkout-payment-phone']";
    comments = "textarea[placeholder='Comments']";
    countryDropdown = "select[type='select']";
    requestButton = ".btn.btn-primary.btn-lg.btn-cta";
    summaryTab = "a[tabindex='0']";
    datesSelector = "div[class='reservation-summary'] div[class='dates col-xs-8']";
    totalPrice = "div[data-testid='checkout-summary-total-amount'] span[class='CurrencyText']";
    thankYouSelector = "//span[.='Thank you for your booking!']";

    fillGuestDetailsForm(firstName, lastName, email, phoneNumber, comments, countryDropdown){
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.email).type(email);
        cy.get(this.countryDropdown).select(countryDropdown);
        cy.get(this.phoneNumber).type(phoneNumber);
        cy.get(this.comments).type(comments);
    }

    clickRequestButton(){
        cy.get(this.requestButton).click();
    }

    verifyBookingResquest(){
        cy.xpath(this.thankYouSelector).should("be.visible");
    }

    clickSummaryTab(){
        cy.get(this.summaryTab).click();
    }

    getPrice(){
        return cy.get(this.totalPriceotal).invoke('text');
    }

    getDates(){
        return cy.get(this.datesSelector).invoke('text');
    }




}
export default CheckoutPage;