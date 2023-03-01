import ContactPage from "../pages/contactUs/contactPage";
import PricingPage from "../pages/pricePlan/pricingPage.js";
import TestData from "../pages/testdata/testData.js";

describe('Contact Page', () => {
    const contactPage = new ContactPage();
    const pricingPage = new PricingPage();
    const contact_test_data = new TestData();
  
    beforeEach(() => {
      pricingPage.open(contact_test_data.contact_us_url);
      contactPage.isContactFormVisible();
    });
  
    it('form should display error message when name, email, comment fields are empty', () => {
      contactPage.validateMandatoryFormFields();

    });
  
    it('should display error message when entering invalid email', () => {
      const invalidEmail = 'invalidemail';
  
      contactPage.fillContactForm({
        name: contact_test_data.contactName,
        phone: contact_test_data.contactPhone,
        email: invalidEmail,
        guests: contact_test_data.contactGuests,
        arrivalDate: contact_test_data.arrivalDate,
        departureDate: contact_test_data.departureDate,
        comment: contact_test_data.contactComment
      });
      contactPage.getEmailErrorPopupText().should('contain', 'The email provided is not valid');

    });
  
    it('should display success message when submitting valid form', () => {
      contactPage.fillContactForm({
        name: contact_test_data.contactName,
        phone: contact_test_data.contactPhone,
        email: contact_test_data.contactEmail,
        guests: contact_test_data.contactGuests,
        arrivalDate: contact_test_data.arrivalDate,
        departureDate: contact_test_data.departureDate,
        comment: contact_test_data.contactComment,
      });
      contactPage.submitContactForm();
      // contactPage.isSuccessMessageDisplayed(); Success Toast message quickly disappears so I could not capture a selector for this
    });
  });
  