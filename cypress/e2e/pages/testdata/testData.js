import { faker } from '@faker-js/faker';

class TestData{
    // Pricing Data
    url = 'https://www.lodgify.com/pricing/';
    starterPlanPrice = 88;
    professionalPlanPrice = 526;
    ultimatePlanPrice = 804;
    numberOfRentals = 50;
    currencyEUR = "€ EUR";
    currencyGDP = "£ GBP";

    // Packages Types
    lite_package = "lite";
    starter_package = "starter";
    professional_package = "professional";
    ultimate_package = "ultimate";

    // Rental Data
    rentalPageUrl = "https://npreview-all-properties.lodgify.com/en/first-rental";
    euros = 'EUR';
    dolloars = 'USD';
    guests = 4;

    firstName = faker.name.firstName();
    lastName =  faker.name.lastName();
    email = faker.internet.email();
    phone = faker.phone.number();
    address =  faker.address.streetAddress();
    city = faker.address.city();
    postalCode =  faker.address.zipCode();
    country =  faker.address.country();
    cardNumber =  faker.finance.creditCardNumber();
    cardExpMonth =  '01';
    cardExpYear =  '2025';
    cardCvv =  '123';
    comments =  faker.lorem.lines();
    country = "US";


    // Contact Data
    contact_us_url = "https://npreview-all-properties.lodgify.com/en/contact-us";
    arrivalDate = "Friday, March 22, 2024";
    departureDate = "Thursday, March 2, 2024";
    contactName = faker.name.fullName();
    contactEmail = faker.internet.email();
    contactComment = faker.random.words(10);
    contactPhone = "0540000001";
    contactGuests = faker.random.numeric();

}

export default TestData;
