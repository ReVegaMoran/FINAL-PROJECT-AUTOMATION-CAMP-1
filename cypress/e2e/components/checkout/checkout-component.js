class checkout {

    elements = {

          getH1LabelByText : (text) => cy.contains('h1', text),
          getH2LabelByText : (text) => cy.contains('h2', text),
          getH3LabelByText : (text) => cy.contains('h3', text),
          getH4LabelByText : (text) => cy.contains('h4', text),
    }
  }

  module.exports = new checkout();