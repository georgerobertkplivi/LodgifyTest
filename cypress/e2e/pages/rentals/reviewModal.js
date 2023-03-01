class ReviewModal {
    constructor() {
      // Define selectors for ReviewModal
      this.titleInput = 'input[name="review[title]"]';
      this.commentInput = 'textarea[name="review[body]"]';
      this.ratingDropdown = 'div[role="combobox"]';
      this.submitButton = 'input[type="submit"]';
      this.cancelButton = 'button[aria-label="Close"]';
      this.guestTypeDropdown = "div[data-testid='month'] div[role='alert']";
      

    }
  
    // Define functions for actions on ReviewModal
    fillReviewForm(title, comment, rating) {
      // Enter title
      cy.get(this.titleInput).type(title);
  
      // Enter comment
      cy.get(this.commentInput).type(comment);
  
      // Select rating
      cy.get(this.ratingDropdown).click();
      cy.get(`div[role="option"]:contains(${rating})`).click();
    }
  
    submitReview() {
      // Click submit button
      cy.get(this.submitButton).click();
    }
  
    cancelReview() {
      // Click cancel button
      cy.get(this.cancelButton).click();
    }

    selectMonth(month) {  // add the selectors
        cy.xpath("//span[.='" + month + "']")
        cy.get(this.monthDropdown).click();
        cy.get(this.monthOption).contains(month).click();
      }
      
    selectYear(year) {  // add the selectors
        cy.get(this.yearDropdown).click();
        cy.get(this.yearOption).contains(year).click();
    }
      
    selectGuestType(guestType) { // add the selectors
        cy.get(this.guestTypeDropdown).click();
        cy.get(this.guestTypeOption).contains(guestType).click();
    }


  }
  
  export default ReviewModal;
  