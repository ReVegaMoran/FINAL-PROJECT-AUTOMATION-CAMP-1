export class PaymentComponents {
    static get firstStep() {
        return {
            get titleContact() {
                return cy.contains('h3', 'Contact Information');
            },
            get contactInformation() {
                return cy.get('p[class*="text-neutrals-"]').eq(0);
            },
            get titleDiscount() {
                return cy.contains('h3', 'Discount Code');
            },
            get codeDiscount() {
                return cy.contains('p', 'TEST');
            },
        }
    }
    static get secondStep() {
        return {
            get titlePayment() {
                return cy.contains('h3', 'Payment');
            },
            get fullName() {
                return cy.get('section[class*="border-neutrals-"]');
            },
        }
    }
    static get buttonSteps() {
        return {
            get firtsEdit() {
                return cy.contains('span', 'Edit').eq(0);
            },
            get secondEdit() {
                return cy.get('span.float-right');
            },
            get completePayment() {
                return cy.get('button[type="submit"]');
            },
        };
    }

    fillCheckoutIframesInformation = () => {
        // IFRAME Waiting Time.
        cy.wait(5000);

        // Calling action methods
        this.fillAddressInformation();
    };

    fillAddressInformation = () => {
        //ADDRESS INFORMATION.
        cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Input"]').type('29 Garden Avenue')
            cy.wrap($body).find('[id="Field-localityInput"]').type('Hawthorne')
            cy.wrap($body).find('[id="Field-administrativeAreaInput"]').select('New Jersey')
            cy.wrap($body).find('[id="Field-postalCodeInput"]').type('07506')
        })

        //CREDIT CARD INFORMATION.
        cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(2).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberInput"]').type('4242 4242 4242 4242')
            cy.wrap($body).find('[id="Field-expiryInput"]').type('03 / 30')
            cy.wrap($body).find('[id="Field-cvcInput"]').type('999')
        })
    }
}

export const paymentComponents = new PaymentComponents();