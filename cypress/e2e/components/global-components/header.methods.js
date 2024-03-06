import { headerElements } from "./header.elements";

export class HeaderMethods {
    static clickOnTheLogo() {
        // Verificar que el elemento con la clase 'lazyloaded' tenga el atributo 'href' con el valor correcto
        headerElements.header.homeIcon.should('exist').and('be.visible').should('have.attr', 'href', 'https://develop--studio-web-ee7fb9.netlify.app/');

        // Hacer clic en el elemento con la clase 'logo' que es el segundo elemento encontrado
        cy.get('div.logo').eq(1).click();
    }
}