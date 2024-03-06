import { contactElements } from "../components/contact-us-page/contact-us.elements.js";
import { faker } from '@faker-js/faker';

describe('Contact Us Form', () => {
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/contact');
    });

    it('should navigate to Contact Us page and validate visual components', () => {
        // Paso 2: Hacer clic en el botón "Contact Us"
        contactElements.buttons.contactUs.click();
        // Validar la redirección a la página correcta
        cy.url().should('include', '/new/contact');
        // Paso 3: Validar componentes visuales en la página de Contact Us
        // Validar el título del formulario
        contactElements.contact.title.should('exist').and('be.visible');
        // Validar el subtítulo del formulario
        contactElements.contact.subTitle.should('exist').and('be.visible');
        // Validar el panel de información a la derecha del formulario
        contactElements.contact.informationPanel.should('exist').and('be.visible');
    });

    it('Llenar campos con datos falsos utilizando faker', () => {

        contactElements.initialFormSection.phoneNumber.type(faker.phone.number());
        contactElements.generalInquiryForm.selectLocation.click().next().find('li').eq(1).click();
        contactElements.generalInquiryForm.geAssistDetails.type(faker.lorem.words(20));
        contactElements.generalInquiryForm.geUpdatesCheckBox.click();
        contactElements.buttons.querySubmit.click();
        contactElements.buttons.querySubmit.click();
        contactElements.modal.modalError.should('exist').and('be.visible');
        contactElements.alertMessage.emailMessage.should('exist').and('be.visible');
        contactElements.alertMessage.phoneError.should('exist').and('be.visible');
        contactElements.initialFormSection.firstName.type(faker.person.firstName());
        contactElements.initialFormSection.lastName.type(faker.person.lastName());
        contactElements.initialFormSection.email.type(faker.internet.email());
        contactElements.initialFormSection.phoneNumber.clear().type(faker.phone.number('##########'));
        contactElements.buttons.querySubmit.click();
        contactElements.modal.modalFeedback.should('exist').and('be.visible');
    });
});