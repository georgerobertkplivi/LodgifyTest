/// <reference types="cypress" />

class SignUpPage {
  getStartedHeader = ".col-sm-6.col-xs-8.text-center";
  manageOneToFivePropertiesBtn = ".rental_wrap_1";
  manageSixOrMorePropertiesBtn = ".rental_wrap_2"

  verifySignUpPageLoads(){
    cy.get(this.getStartedHeader).should('be.visible');
    cy.get(this.manageOneToFivePropertiesBtn).should('be.visible');
    cy.get(this.manageSixOrMorePropertiesBtn).should('be.visible');
  }

}

export default SignUpPage;
