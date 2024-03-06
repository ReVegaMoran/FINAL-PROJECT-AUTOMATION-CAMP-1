export class detiledElements {
    static get contact() {
        return {
            get title() {
                return cy.get('h1#or-product-description-block-title');
            },
            get subTitle() {
                return cy.contains('p', 'Capacity: 10');
            },
            get description() {
                return cy.contains('p', 'Ideal for large meetings')
            },
        }
    }
    static get leftPanel() {
        return {
            get calendar() {
                return cy.get('label > .outline-none');
            },
            get duration() {
                return cy.get('button[aria-haspopup="listbox"]');
            },
            get tabsUpComing() {
                return cy.contains('span', 'Upcoming');
            },
            get tabsMorning() {
                return cy.get('[id="headlessui-tabs-tab-:r1:"]');
            },
            get tabsAfternoom() {
                return cy.get('[id="headlessui-tabs-tab-:r2:"]');
            },
            get additionalCheckbox() {
                return cy.get('button[role="switch"]');
            },
            get additionalDescription() {
                return cy.get('[id="additionalServices-field"]');
            },
        }
    }
    static get buttons() {
        return {
            get instantBook() {
                return cy.get('button[type="submit"]');
            },
            get inquire() {
                return cy.contains('button', 'Inquire');
            },
            buttonByIndex: index => cy.get('div.outline-none').eq(index)
        };
    }
}