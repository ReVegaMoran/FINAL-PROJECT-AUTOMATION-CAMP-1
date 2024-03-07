export class contactElements {
    static get contact() {
        return {
            get title() {
                return cy.get('h1').contains('Contact Us');
            },
            get subTitle() {
                return cy.get('p').contains(/From private offices and suites/).should('exist');
            },
            get informationPanel() {
                return cy.get('.pb-12')
            },
        };
    }
    static get initialFormSection() {
        return {
            get firstName() {
                return cy.get('#firstName-field')
            },
            get lastName() {
                return cy.get('#lastName-field');
            },
            get email() {
                return cy.get('#email-field');
            },
            get phoneNumber() {
                return cy.get('#phone-field')
            },
        };
    }
    static get generalInquiryForm() {
        return {
            get query0() {
                return cy.get('#headlessui-tabs-tab-\:r0\: > .leading-1\.5');
            },
            get selectLocation() {
                return cy.get('#headlessui-listbox-button-\\:r4\\:')
            },
            get geAssistDetails() {
                return cy.get('#assistDetails-field');
            },
            get geUpdatesCheckBox() {
                return cy.get('#headlessui-switch-\\:r7\\:')
            },
        };
    }
    static get programmingForm() {
        return {
            get query1() {
                return cy.get('#headlessui-tabs-tab-\:r1\:');
            },
            get programmingSelect() {
                return cy.get('#headlessui-listbox-button-\:r37\:');
            },
            get officesCheckbox() {
                return cy.get('#headlessui-switch-\:r39\:');
            },
            get eventCheckBox() {
                return cy.get('#headlessui-switch-\:r3b\:');
            },
            get meetingCheckBox() {
                return cy.get('#headlessui-switch-\:r3d\:');
            },
            get meetingCheckBox() {
                return cy.get('#headlessui-switch-\:r3f\:');
            },
            get coworkingCheckBox() {
                return cy.get('#headlessui-switch-\:r3h\:');
            },
            get proAssistDetails() {
                return cy.get('#assistDetails-field');
            },
            get proAssistDetails() {
                return cy.get('#assistDetails-field');
            },
            get proUpdatesCheckBox() {
                return cy.get('#headlessui-switch-\:r7\:');
            },
        };
    }
    static get buttons() {
        return {
            get contactUs() {
                return cy.contains('button', 'Contact us').eq(0);
            },
            get querySubmit() {
                return cy.get(':nth-child(1) > .undefined');
            },
        }
    }
    static get modal() {
        return {
            get modalFeedback() {
                return cy.get('.bg-feedback-positive-100', { timeout: 5000 });
            },
            get modalError() {
                return cy.get('#tm-contact-error-notification')
            },
        }
    }
    static get alertMessage() {
        return {
            get emailMessage() {
                return cy.get('#email-field-hints > p');
            },
            get phoneError() {
                return cy.get('#phone-field-hints > p');
            },
        }
    }
}