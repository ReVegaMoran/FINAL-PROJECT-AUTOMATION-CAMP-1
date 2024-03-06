import { detiledElements } from "../components/product-detailed-page/product-detailed-page-component";
import { checkoutElements } from "../components/checkout/checkout.element";
import { faker } from '@faker-js/faker';

describe('RENAME ME!', () => {

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

    it('segundo', () => {
        //1.	Para llegar a este formulario, se debe comenzar el flujo desde el PDP de Korea Town, seleccionando el tiempo disponible, etc.
        detiledElements.leftPanel.calendar.should('exist').and('be.visible');
        detiledElements.leftPanel.duration.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsUpComing.click();
        detiledElements.buttons.buttonByIndex(0).click();
        detiledElements.leftPanel.additionalCheckbox.click();
        detiledElements.leftPanel.additionalDescription.type(faker.lorem.words(20));
        detiledElements.buttons.instantBook.contains('Instant Book').click();
        //2.	Revisar los componentes visuales de Reservation Details y Fee Details.
        checkoutElements.reservationDetails.dateAndTime.should('exist').and('be.visible');
        checkoutElements.reservationDetails.textNeutrals.should('exist').and('be.visible');
        checkoutElements.freeDetails.birch.should('exist').and('be.visible');
        checkoutElements.freeDetails.subTotal.should('exist').and('be.visible');
        checkoutElements.freeDetails.salesTax.should('exist').and('be.visible');
        checkoutElements.freeDetails.totalDue.should('exist').and('be.visible');
        //4.	Comprobar que el formulario (Contact Information) no se pueda enviar sin la información requerida.
        checkoutElements.contactInformation.companyName.type(faker.company.name());
        checkoutElements.checkBox.emailUpDates.click();
        checkoutElements.checkBox.termsAndConditions.click();
        checkoutElements.discountCode.buttonPayment.click();
        checkoutElements.modal.modalError.should('exist').and('be.visible');
        //3.	Utilizar la librería de JS llamada faker, para llenar los campos solicitados. Para esto se deben utilizar las funciones predefinidas en /components/checkout/checkout-components.js
        checkoutElements.contactInformation.firtsName.type(faker.person.firstName());
        checkoutElements.contactInformation.lastName.type(faker.person.lastName());
        //5.	Comprobar escenarios negativos en el correo electrónico y teléfono.
        checkoutElements.contactInformation.email.type(faker.phone.number());
        checkoutElements.contactInformation.phoneNumber.type(faker.phone.number());
        checkoutElements.discountCode.buttonPayment.click();
        checkoutElements.alertMessage.emailMessage.should('exist').and('be.visible');
        checkoutElements.alertMessage.phoneError.should('exist').and('be.visible');
        checkoutElements.contactInformation.email.clear().type(faker.internet.email());
        checkoutElements.contactInformation.phoneNumber.clear().type(faker.phone.number('##########'));
        checkoutElements.contactInformation.companyName.type(faker.company.name());
        //6.	Comprobar escenarios negativo para el campo Discount Code
        checkoutElements.discountCode.plusIcon.click();
        checkoutElements.discountCode.inputDiscount.type(faker.internet.email());
        checkoutElements.discountCode.buttonApplyCode.click();
        checkoutElements.alertMessage.codeError.should('exist').and('be.visible');
        checkoutElements.discountCode.inputDiscount.type('TEST20');
        checkoutElements.discountCode.buttonApplyCode.click();
        checkoutElements.discountCode.buttonPayment.click();
        cy.intercept('POST', 'https://develop--studio-web-ee7fb9.netlify.app/.netlify/functions/bff/payments/payment-intents', (req) => {
            // Verifica el código de estado en la respuesta
            expect(req.response.statusCode).to.eq(200); // Ajusta según el código de estado esperado
        }).as('paymentIntentRequest');
    });
});