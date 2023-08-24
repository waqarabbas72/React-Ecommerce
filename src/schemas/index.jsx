import * as Yup from 'yup';

export const CheckoutSchemas = Yup.object({
    name: Yup.string().min(2).max(25).required('Please enter your Name!'),
    email: Yup.string().email().required('Please enter your email!'),
    address: Yup.string().required('Please enter your Address!'),
    zip_code: Yup.number().test('length', 'zipcode must be 4 to 8 digits', (value) => {
        if (value) {
            const stringValue = String(value);
            return stringValue.length >= 4 && stringValue.length <= 8;
        }
        return true; // Allow empty values
    }).required('Please enter your zip_code!'),
    phone_number: Yup.number().test('length', 'Phone Number must be 8 to 16 digits', (value) => {
        if (value) {
            const stringValue = String(value);
            return stringValue.length >= 8 && stringValue.length <= 16;
        }
        return true
    }).required('Please enter your phone number!'),
    card_holder: Yup.string().min(2).max(25).required('Please enter card_holder!'),
    expiry_date: Yup.date().required('Please enter expiry date!'),
    card_number: Yup.number().test('length', 'Card Number must be 12 to 20 digits', (value) => {
        if (value) {
            const stringValue = String(value);
            return stringValue.length >= 12 && stringValue.length <= 20;
        }
        return true
    }).required('Please a valid card number!'),
    cvc: Yup.string().min(5).max(10).required('Please enter your cvc!')
})