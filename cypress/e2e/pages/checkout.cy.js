import { detiledElements } from "../components/product-detailed-page/product-detailed-page-component";
import { checkoutElements } from "../components/checkout/checkout.element";
import { PaymentComponents, paymentComponents } from "../components/payment/payment-components";
import { faker } from '@faker-js/faker';

describe('Checkout, Payment', () => {

    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch');
        //DO NOT REMOVE.
        cy.intercept('https://r.stripe.com/0', (req) => {
            req.headers['origin'] = 'https://js.stripe.com'
        })

        //DO NOT REMOVE.
        cy.intercept('https://js.stripe.com/v3', (req) => {
            req.on('response', (res) => {
                res.body = res.body.replaceAll('window.top', 'window.self')
            })
        })
    });

    it('Checkout and Payments Process', () => {
        //1.To reach this form, one must initiate the flow from the Korea Town PDP, selecting the available time, etc.

        detiledElements.leftPanel.duration.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsUpComing.click();
        detiledElements.buttons.buttonByIndex(0).click();
        detiledElements.leftPanel.additionalCheckbox.click();
        detiledElements.leftPanel.additionalDescription.type(faker.lorem.words(20));
        detiledElements.buttons.instantBook.contains('Instant Book').click();
        //2.Review the visual components of Reservation Details and Fee Details.
        checkoutElements.reservationDetails.dateAndTime.should('exist').and('be.visible');
        checkoutElements.reservationDetails.textNeutrals.should('exist').and('be.visible');
        checkoutElements.freeDetails.birch.should('exist').and('be.visible');
        checkoutElements.freeDetails.subTotal.should('exist').and('be.visible');
        checkoutElements.freeDetails.salesTax.should('exist').and('be.visible');
        checkoutElements.freeDetails.totalDue.should('exist').and('be.visible');
        //4.Verify that the form (Contact Information) cannot be submitted without the required information.
        checkoutElements.contactInformation.companyName.type(faker.company.name());
        checkoutElements.checkBox.emailUpDates.click();
        checkoutElements.checkBox.termsAndConditions.click();
        checkoutElements.discountCode.buttonPayment.click();
        checkoutElements.modal.modalError.should('exist').and('be.visible');
        //3.Utilize the JS library called 'faker' to populate the requested fields. To achieve this, use the predefined functions in /components/checkout/checkout-components.js.
        checkoutElements.contactInformation.firtsName.type(faker.person.firstName());
        checkoutElements.contactInformation.lastName.type(faker.person.lastName());
        //5.Verify negative scenarios for email and phone.
        checkoutElements.contactInformation.email.type(faker.phone.number());
        checkoutElements.contactInformation.phoneNumber.type(faker.phone.number());
        checkoutElements.discountCode.buttonPayment.click();
        checkoutElements.alertMessage.emailMessage.should('exist').and('be.visible');
        checkoutElements.alertMessage.phoneError.should('exist').and('be.visible');
        checkoutElements.contactInformation.email.clear().type(faker.internet.email());
        checkoutElements.contactInformation.phoneNumber.clear().type(faker.phone.number('##########'));
        checkoutElements.contactInformation.companyName.type(faker.company.name());
        //6.Verify negative scenarios for the Discount Code field.
        checkoutElements.discountCode.plusIcon.click();
        checkoutElements.discountCode.inputDiscount.type(faker.internet.email());
        checkoutElements.discountCode.buttonApplyCode.click();
        checkoutElements.alertMessage.codeError.should('exist').and('be.visible');
        checkoutElements.discountCode.inputDiscount.type('TEST20');
        checkoutElements.discountCode.buttonApplyCode.click();
        checkoutElements.discountCode.buttonPayment.click();
        // 2.Review visual components such as Contact Information, Discount Code, and Payment.
        PaymentComponents.firstStep.titleContact.should('exist').and('be.visible');
        PaymentComponents.firstStep.titleDiscount.should('exist').and('be.visible');
        PaymentComponents.secondStep.titlePayment.should('exist').and('be.visible');
        // 3.Edit a field in Contact Information (Edit button) and subsequently verify its update.
        // 4.Utilize the JS library called 'faker' to populate the requested fields. To achieve this, use the predefined functions in /components/checkout/checkout-components.js.
        PaymentComponents.buttonSteps.firtsEdit.click();
        checkoutElements.contactInformation.firtsName.clear().type(faker.person.firstName());
        checkoutElements.contactInformation.lastName.clear().type(faker.person.lastName());
        checkoutElements.discountCode.buttonPayment.click();
        PaymentComponents.secondStep.fullName.should('exist').and('be.visible').should('not.be.empty');
        // 5.Verify that the Payment form cannot be submitted without the required information.
        PaymentComponents.buttonSteps.completePayment.click();
        paymentComponents.fillCheckoutIframesInformation();
    });
});