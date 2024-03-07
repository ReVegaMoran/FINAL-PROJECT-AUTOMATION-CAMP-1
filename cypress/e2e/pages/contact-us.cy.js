import { contactElements } from "../components/contact-us-page/contact-us-components";
import { faker } from '@faker-js/faker';

describe('Contact Us Form', () => {
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/contact');
    });
    // Review the visual components of the form, such as the title, subtitle, and the information panel on the right.
    it('Review the visual components of the form, such as the title, subtitle, and information panel on the right.', () => {
        contactElements.contact.title.should('exist').and('be.visible');
        contactElements.contact.subTitle.should('exist').and('be.visible');
        contactElements.contact.informationPanel.should('exist').and('be.visible');
    });

    it('Positive and negative scenarios', () => {
        //Verify that the form cannot be submitted without the required information.
        contactElements.initialFormSection.phoneNumber.type(faker.phone.number());
        contactElements.generalInquiryForm.selectLocation.click().next().find('li').eq(1).click();
        contactElements.generalInquiryForm.geAssistDetails.type(faker.lorem.words(20));
        contactElements.generalInquiryForm.geUpdatesCheckBox.click();
        contactElements.buttons.querySubmit.click();
        contactElements.modal.modalError.should('exist').and('be.visible');
        //Verify negative scenarios for email and phone number.
        contactElements.alertMessage.emailMessage.should('exist').and('be.visible');
        contactElements.alertMessage.phoneError.should('exist').and('be.visible');
        contactElements.initialFormSection.email.type(faker.person.firstName());
        contactElements.initialFormSection.phoneNumber.clear().type(faker.phone.number('1111111'));
        contactElements.buttons.querySubmit.click();
        contactElements.modal.modalError.should('exist').and('be.visible');
        //Submit the form and verify that the success modal is displayed.
        contactElements.alertMessage.emailMessage.should('exist').and('be.visible');
        contactElements.alertMessage.phoneError.should('exist').and('be.visible');
        contactElements.initialFormSection.firstName.type(faker.person.firstName());
        contactElements.initialFormSection.lastName.type(faker.person.lastName());
        contactElements.initialFormSection.email.clear().type(faker.internet.email());
        contactElements.initialFormSection.phoneNumber.clear().type(faker.phone.number('##########'));
        contactElements.buttons.querySubmit.click();
        cy.wait(5000);
        contactElements.modal.modalFeedback.should('exist').and('be.visible');
    });
});