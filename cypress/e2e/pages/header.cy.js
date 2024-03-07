import { headerElements } from "../components/global-components/header-component";

describe('Visualization of header components', () => {
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch');
    })

    it('Visualization of header components', () => {
        headerElements.header.homeIcon.should('exist').and('be.visible');
        headerElements.header.coworking.should('exist').and('be.visible');
        headerElements.header.officeSuites.should('exist').and('be.visible');
        headerElements.header.meetingyEvents.should('exist').and('be.visible');
        headerElements.header.virtualOffice.should('exist').and('be.visible');
        headerElements.header.ourCompany.should('exist').and('be.visible');
        headerElements.buttons.bookaSpace.should('exist').and('be.visible');
        headerElements.buttons.contactUs.should('exist').and('be.visible');
    });
});