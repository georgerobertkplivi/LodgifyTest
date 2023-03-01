/// <reference types="cypress" />

import ContactPage from "../contactUs/contactPage";

/*
Lodgify Pricing Page
Add a test to verify that the monthly plan selecting 50 rentals displays: $85 for Starter plan $472 for Professional plan $770 for Ultimate plan

Add a test to verify that the change of currency properly changes the currency of the pricing options. The way you do so, and the extra verification steps are up to you.

Validate that clicking Get Started it redirects to signUp flow.

Validate Benefit's list are different between plans.

Using your own criteria, add tests according to what you think should be important to cover in this page. (Optional)

URL to pricing page -> https://www.lodgify.com/pricing/
*/

class PricingPage extends ContactPage {

    monthlyPlan = "li[data-price-period$='1']";
    slider = ".slider-handle.min-slider-handle.round"
    starterPlanPrice = "div[class='plan-price plan-price-2 text-dark'] span[class='total-sum']";
    professionalPlanPrice = ".plan-price.plan-price-1.btn-price-plan-prof.text-dark";
    ultimatePlanPrice = "div[class='plan-price plan-price-3 btn-price-plan-prof text-dark'] span[class='total-sum']";
    currencyDropdown = ".price-currency-select";
    getStartedBtn = "li[id='menu-item-32'] a";
    allPricePlan = "div[class='plan-price']";
    logo = ".head-logo";
    starterPricingCard = ".col-sm-3.col-ms-6.col-xs-12.price-card-starter";
    headerText = ".h1-lg";
    numberOfRentals = "#scroll-prop-plan";
    starterPrice = ".price-card-starter .plan-price";
    professionalPrice = ".plan-price-1.plan-price";
    ultimatePrice = ".plan-price-3.plan-price";
    liteFeatureListCard = ".price-grid > div:nth-of-type(1) .plan-feature-lists li";
    starterFeatureListCard = ".price-card-starter .plan-feature-lists li";
    professionalFeatureListCard = "[data-price-item-popular='Most Popular'] > .plan-feature-lists li";
    ultimateFeatureListCard = ".price-grid > div:nth-of-type(4) .plan-feature-lists li";




    starterBenefits = '[data-cy=benefits-starter]';
    professionalBenefits = '[data-cy=benefits-professional]';
    ultimateBenefits = '[data-cy=benefits-ultimate]';


    open(url) {
        cy.visit(url);
    }

    // Method to wait for the logo and starter pricing card to load
    waitForPageToLoad() {
        cy.get(this.logo).should('be.visible');
        cy.get(this.starterPricingCard).should('be.visible');
    }

    // Method to click on the starter plan price
     clickStarterPlanPrice() {
        cy.get(this.starterPlanPrice).click();
    }

    // Method to click on the professional plan price
    clickProfessionalPlanPrice() {
         cy.get(this.professionalPlanPrice).click();
     }

    // Method to click on the ultimate plan price
    clickUltimatePlanPrice() {
        cy.get(this.ultimatePlanPrice).click();
    }

      // Method to enter the number of rentals
    enterNumberOfRentals(value) {
     cy.get(this.numberOfRentals).clear().type(value);
    }

    // Method to verify the header text
    verifyHeaderText() {
        cy.get(this.headerText).should('contain', 'Vacation rental software pricing');
    }



    // Method to get the text of the starter Plan
     getStarterPlanText() {
        return cy.get(this.starterPlanPrice).invoke('text');
    }

    // Method to get the text of the professional Plan
    getProfessionalPlanText() {
        return cy.get(this.professionalPlanPrice).invoke('text');
    }

    // Method to get the text of the ultimate Plan
    getUltimatePlanText() {
        return cy.get(this.ultimatePlanPrice).invoke('text');
    }


    // Method to click on Monthly button
    toggleToMonthlyPlan() {
        cy.get(this.monthlyPlan).click();
    }


    // Method to click Get Started on Starter Plan
    selectStarterPlan() {
        cy.get(this.starterPlanPrice).click();
    }


    // Method to click Get Started on Professional Plan
    selectProfessionalPlan() {
        cy.get(this.professionalPlanPrice).click();
    }


    // Method to click Get Started on Ultimate Plan
    selectUltimatePlan() {
        cy.get(this.ultimatePlanPrice).click();
    }


    // Method to select a Currency type from the dropdown
    selectCurrency(currency) {
        cy.get(this.currencyDropdown).select(currency);
    }

    // Method to click Get Started button
    clickGetStartedBtn() {
        cy.get(this.getStartedBtn);
    }

    getStarterBenefits() {
        return cy.get(this.starterBenefits);
    }

    getProfessionalBenefits() {
        return cy.get(this.professionalBenefits);
    }

    getUltimateBenefits() {
        return cy.get(this.ultimateBenefits);
    }

    // Getting the List of features on each Price Plan
    getFeatureList(packageType) {
        let featureList;
        switch (packageType) {
          case 'lite':
            featureList = this.liteFeatureList;
            break;
          case 'starter':
            featureList = this.starterFeatureList;
            break;
          case 'professional':
            featureList = this.professionalFeatureList;
            break;
          case 'ultimate':
            featureList = this.ultimateFeatureList;
            break;
          default:
            featureList = null;
        }
        return featureList;
      }
      
    
    get liteFeatureList() {
        return cy.get(this.liteFeatureListCard);
      }
      
    get starterFeatureList() {
        return cy.get(this.starterFeatureListCard);
      }
      
    get professionalFeatureList() {
        return cy.get(this.professionalFeatureListCard);
      }
      
    get ultimateFeatureList() {
        return cy.get(this.ultimateFeatureListCard);
      }
      






}

export default PricingPage;
