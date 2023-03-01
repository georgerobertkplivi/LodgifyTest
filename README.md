## Instructions

1. To run your test, you should put test files inside "cypress/e2e/testName.cy.js"
2. Run the tests with:
   `$ "npm run cy:run"`
3. You should be able to run and check tests results with these steps, now you can proceed with the requirements below.
4. You can create folders for selectors anywhere, the whole structure is up to you, try not to hardcode and create a clean test structure.
5. Make sure to do smart waits in case of slowness on services.
6. Tests should be able to run on any environment.

## How we would like to receive the solution?

Clone this repository and upload it as a new public repository in your GitHub account. Create a pull request with the requested functionality and share PR's link with us.

Do not send a PR on this repository.

# Challenge Requirements

### Lodgify Pricing Page

- Add a test to verify that the monthly plan selecting 50 rentals displays:
  $85 for Starter plan
  $472 for Professional plan
  $770 for Ultimate plan
- Add a test to verify that the change of currency properly changes the currency of the pricing options. The way you do so, and the extra verification steps are up to you.

- Validate that clicking Get Started it redirects to signUp flow.

- Validate Benefit's list are different between plans.

- Using your own criteria, add tests according to what you think should be important to cover in this page. (Optional)

> URL to pricing page -> https://www.lodgify.com/pricing/

### Lodgify Contact Page

- Add a test to verify field validations appears:
  Name, Phone Number, Email address, Comment are mandatories and a message should be displayed in case any of these fields are empty.
- Pick the date range of 5 days for next year to verify the date picker is working properly.
- Using your own criteria, add tests according to what you think should be important to cover in this page.

> URL to contact page: https://npreview-all-properties.lodgify.com/en/contact-us

### Rental page

This will be an E2E test case:

- Validate each section is correctly displayed.
- Validate Add a review button works properly.
- Currency dropdown works correctly and currencies are changed all over the page.
- Pick a date range of 6 days and validate the price changes on "Book for" button.
- Select 4 guests.
- Click Book for button.
- Check it redirects to checkout page.
- Validate the dates and number of guests are correct.
- Go to Step 3 and validate Summary tab
- Fill the Guest Details form and click Request to Book.

> URL to rental page: https://npreview-all-properties.lodgify.com/en/first-rental
# LodgifyTest
