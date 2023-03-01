import PricingPage from "../pages/pricePlan/pricingPage.js";
import SignUpPage from "../pages/signupPage.js";
import TestData from "../pages/testdata/testData.js";


describe('Verify monthly plan prices for 50 rentals', () => {
    const pricingPage = new PricingPage();
    const signUpPage = new SignUpPage();
    const test_data = new TestData();

    beforeEach(() => {
        const baseUrl = test_data.url;
        pricingPage.open(baseUrl);
        pricingPage.waitForPageToLoad();
    });

    it('Starter plan displays $85', () => {
        pricingPage.enterNumberOfRentals(test_data.numberOfRentals);
        pricingPage.toggleToMonthlyPlan();
        pricingPage.getStarterPlanText().should('contain', test_data.starterPlanPrice);
    });

    it('Professional plan displays $472', () => {
        pricingPage.enterNumberOfRentals(test_data.numberOfRentals);
        pricingPage.toggleToMonthlyPlan();
        pricingPage.getProfessionalPlanText().should('contain', test_data.professionalPlanPrice);
    });

    it('Ultimate plan displays $770', () => {
        pricingPage.enterNumberOfRentals(test_data.numberOfRentals);
        pricingPage.toggleToMonthlyPlan();
        pricingPage.getUltimatePlanText().should('contain', test_data.ultimatePlanPrice);
    });

    it('Redirects to signUp Page onClicking Get Started Button', () => {
            
            cy.get(pricingPage.getStartedBtn)   // get the getStartedBtn element and click on it
              .invoke('removeAttr', 'onclick') // remove the onclick attribute to open in a new tab
              .click();



            // switch to the newly opened tab
            cy.window().then((win) => {

              // wait for the new tab to finish loading
              signUpPage.verifySignUpPageLoads();

              cy.wrap(win)
                .its('location.href')
                .should('include', 'start');
            });
    });


    it('Change currency to Euro', () => {
        pricingPage.selectCurrency(test_data.currencyEUR);
        cy.contains(pricingPage.starterPrice, "€");
        cy.contains(pricingPage.professionalPrice, "€");
        cy.contains(pricingPage.ultimatePrice, "€");

    });


    it('Change currency to Pound Sterling', () => {
        pricingPage.selectCurrency(test_data.currencyGDP);
        cy.contains(pricingPage.starterPrice, "£");
        cy.contains(pricingPage.professionalPrice, "£");
        cy.contains(pricingPage.ultimatePrice, "£");
    });


    
    it('should have different feature lists for each package', () => {
        // Get the list of features for each package
        const liteFeatures = pricingPage.getFeatureList(test_data.lite_package);
        const starterFeatures = pricingPage.getFeatureList(test_data.starter_package);
        const professionalFeatures = pricingPage.getFeatureList(test_data.professional_package);
        const ultimateFeatures = pricingPage.getFeatureList(test_data.ultimate_package);
    
        // Assert that the feature lists are not equal
        expect(liteFeatures).to.not.deep.equal(starterFeatures);
        expect(liteFeatures).to.not.deep.equal(professionalFeatures);
        expect(liteFeatures).to.not.deep.equal(ultimateFeatures);
        expect(starterFeatures).to.not.deep.equal(professionalFeatures);
        expect(starterFeatures).to.not.deep.equal(ultimateFeatures);
        expect(professionalFeatures).to.not.deep.equal(ultimateFeatures);
    });



});
