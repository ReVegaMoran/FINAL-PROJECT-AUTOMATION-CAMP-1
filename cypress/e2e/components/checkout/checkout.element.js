export class checkoutElements {
    static get reservationDetails() {
        return {
            get dateAndTime() {
                return cy.get('.mb-2 > .text-neutrals-800');
            },
            get textNeutrals() {
                return cy.get('div[class*="border-neutrals-"]');
            },
        }
    }
    static get freeDetails() {
        return {
            get birch() {
                return cy.contains('p', 'Birch');
            },
            get subTotal() {
                return cy.contains('p', 'Subtotal');
            },
            get salesTax() {
                return cy.contains('p', 'Sales Tax');
            },
            get totalDue() {
                return cy.contains('p', 'Total Due');
            },
        }
    }
    static get contactInformation() {
        return {
            get firtsName() {
                return cy.get('input#firstName-field');
            },
            get lastName() {
                return cy.get('input#lastName-field');
            },
            get email() {
                return cy.get('input#email-field');
            },
            get phoneNumber() {
                return cy.get('input#phone-field');
            },
            get companyName() {
                return cy.get('input#company-field');
            },
        }
    }
    static get checkBox() {
        return {
            get emailUpDates() {
                return cy.get('button[type="button"]').eq(0);
            },
            get termsAndConditions() {
                return cy.get('button[type="button"]').eq(1);
            },
        };
    }
    static get discountCode() {
        return {
            get plusIcon() {
                return cy.get('button.w-full');
            },
            get inputDiscount() {
                return cy.get('[id="discount-field"]');
            },
            get buttonApplyCode() {
                return cy.contains('button', 'Apply code');
            },
            get buttonPayment() {
                return cy.get('.pt-6 > .flex.gap-4 > .justify-center');
            },
        };
    }
    static get modal() {
        return {
            get modalFeedback() {
                return cy.get('.bg-feedback-positive-100');
            },
            get modalError() {
                return cy.contains('p', 'Oops! Something went wrong')
            },
        }
    }
    static get alertMessage() {
        return {
            get firstNameWarning() {
                return cy.get('[id="firstName-field-hints"]');
            },
            get lastNameWarning() {
                return cy.get('[id="lastName-field-hints"]');
            },
            get emailMessage() {
                return cy.get('[id="email-field-hints"]');
            },
            get phoneError() {
                return cy.get('[id="phone-field-hints"]');
            },
            get codeError() {
                return cy.contains('p', 'Invalid discount code. Please try again.');
            },
        }
    }
}