export class footerElements {
    static get footer() {
        return {
            get homeIcon() {
                return cy.get('footer[id="page-footer"] img');
            },
            get coworking() {
                return cy.get('div.items-start a').eq(0);
            },
            get meetingyEvents() {
                return cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/studio-gather/"]').eq(1);
            },
            get virtualOffice() {
                return cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/virtual-office-signup/"]').eq(1);
            },
            get ourCompany() {
                return cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/about-us/"]').eq(1);
            },
            get productSummary() {
                return cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/products/"]');
            },
            get locations() {
                return cy.contains('a', 'Locations');
            },
            get contact() {
                return cy.get(':nth-child(1) > .group-first\:mt-0');
            },
            get copyRight() {
                return cy.contains('p', '© 2023 Tishman Speyer. All Rights Reserved.');
            },
        };
    };
}