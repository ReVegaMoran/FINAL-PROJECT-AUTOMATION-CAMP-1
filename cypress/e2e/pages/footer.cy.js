import { footerElements } from "../components/global-components/footer-component";

describe('Visualization of footer components', () => {
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch');
    })

    it('Visualization of footer components', () => {
        footerElements.footer.homeIcon.should('exist').and('be.visible');
        footerElements.footer.coworking.should('exist').and('be.visible');
        footerElements.footer.meetingyEvents.should('exist').and('be.visible');
        footerElements.footer.virtualOffice.should('exist').and('be.visible');
        footerElements.footer.ourCompany.should('exist').and('be.visible');
        footerElements.footer.productSummary.should('exist').and('be.visible');
        footerElements.footer.locations.should('exist').and('be.visible');
        footerElements.footer.copyRight.should('exist').and('be.visible')
    });
});