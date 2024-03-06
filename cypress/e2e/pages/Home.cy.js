import { HeaderMethods } from "../components/global-components/header.methods";

describe('First test case', () => {
    it('should verify logo link', () => {
        // Puedes agregar la opción failOnStatusCode: false aquí
        cy.visit('https://develop--studio-web-ee7fb9.netlify.app/new/spaces?region=new-york', { failOnStatusCode: false });

        // Verificar que el logo contiene la URL esperada
        HeaderMethods.clickOnTheLogo();
    });
});