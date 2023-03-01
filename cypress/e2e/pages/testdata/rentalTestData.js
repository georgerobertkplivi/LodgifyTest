import { faker } from '@faker-js/faker';

class RentalTestData {

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
    comments =  faker.comments;


}

export default RentalTestData;
  