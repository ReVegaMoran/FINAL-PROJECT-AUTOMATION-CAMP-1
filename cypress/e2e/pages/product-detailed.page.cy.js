import { detiledElements } from "../components/product-detailed-page/product-detailed-page-component";

describe('Contact Us Form', () => {
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch');
    });

    it('should navigate to Contact Us page and validate visual components', () => {
        // Paso 2: Hacer clic en el botón "Contact Us"
        detiledElements.contact.title.should('exist').and('be.visible');
        detiledElements.contact.subTitle.should('exist').and('be.visible');
        detiledElements.contact.description.should('exist').and('be.visible');
    });
    it('segundo', () => {
        // Paso 2: Hacer clic en el botón "Contact Us"
        detiledElements.leftPanel.calendar.should('exist').and('be.visible');
        detiledElements.leftPanel.duration.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsUpComing.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsMorning.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsAfternoom.should('exist').and('be.visible');
        detiledElements.buttons.instantBook.contains('Instant Book').and('be.visible');
        detiledElements.buttons.inquire.contains('Inquire').and('be.visible');
    });
});