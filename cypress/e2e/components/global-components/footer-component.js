class Footer {
    getButtonByName(buttonName) {
        return cy.contains('.footer-button', buttonName);
    }

    get copyrightText() {
        return cy.get('.copyright');
    }

    // Puedes agregar más métodos según tus necesidades
}

module.exports = new Footer();