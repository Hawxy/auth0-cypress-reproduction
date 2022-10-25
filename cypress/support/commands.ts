/// <reference types="cypress" />

Cypress.Commands.add("loginAsUser", () => {
  const email = "cypress.inviron.sampler.test@test.dev";
  const password = "fake-password";
  const args = { email, password };
  cy.session(args, () => {
    cy.visit("/");

    cy.origin("hawxy.au.auth0.com", { args }, ({ email, password }) => {
      cy.get("#username").type(email);
      cy.get("button")
        .contains(/^Continue$/)
        .click();
      cy.get("#password").type(password);
      cy.get("button").contains("Continue").click();
    });
    cy.url().should("contain", "/sites");
  });
});

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /*
       * Login as a given user and cache the login state
       */
      loginAsUser(): Chainable<void>;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace globalThis {
    interface Window {
      authToken: string;
      apiUrl: string;
    }
  }
}
