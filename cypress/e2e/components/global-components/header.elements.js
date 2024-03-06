export class headerElements {
    static get header() {
        return {
            get homeIcon() {
                return cy.get('.lazyloaded');
            },
            get coworking() {
                return cy.get('a[href="https://yourstudio.com/locations/"]').eq(0);
            },
            get officeSuites() {
                return cy.get('a[href="https://yourstudio.com/studio-private/"]');
            },
            get meetingyEvents() {
                return cy.get('a[href="https://yourstudio.com/studio-gather/"]').eq(0);
            },
            get virtualOffice() {
                return cy.get('a[href="https://yourstudio.com/virtual-office-signup/"]').eq(0);
            },
            get ourCompany() {
                return cy.get('a[href="https://yourstudio.com/about-us/"]').eq(0);
            },
        };
    }

    static get buttons() {
        return {
            get bookaSpace() {
                return cy.contains('button', 'Book a space');
            },
            get contactUs() {
                return cy.contains('button', 'Contact us').eq(0);
            },
        }
    }
}