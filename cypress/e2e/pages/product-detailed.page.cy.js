import { detiledElements } from "../components/product-detailed-page/product-detailed-page-component";

describe('Product Detailed Page', () => {
    //Visit the URL: https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch for each test case
    beforeEach(() => {
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch');
    });

    it('Review the visual components of the form, such as title, capacity, and description', () => {
        // Review the visual components of the form, such as title, capacity, and description
        detiledElements.contact.title.should('exist').and('be.visible');
        detiledElements.contact.subTitle.should('exist').and('be.visible');
        detiledElements.contact.description.should('exist').and('be.visible');
    });
    it('Review the visual components of the left panel', () => {
        // Review the visual components of the left panel, such as the calendar component, duration, tabs for available spaces, and buttons for instant booking and inquiry.
        detiledElements.leftPanel.calendar.should('exist').and('be.visible');
        detiledElements.leftPanel.duration.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsUpComing.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsMorning.should('exist').and('be.visible');
        detiledElements.leftPanel.tabsAfternoom.should('exist').and('be.visible');
        detiledElements.buttons.instantBook.contains('Instant Book').and('be.visible');
        detiledElements.buttons.inquire.contains('Inquire').and('be.visible');
    });
});