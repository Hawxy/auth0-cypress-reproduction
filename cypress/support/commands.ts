/// <reference types="cypress" />

Cypress.Commands.add("loginAsUser", () => {
  const email = "test@test.dev";
  const password = "fake-password";
  const args = { email, password };
  cy.session(args, () => {
    cy.visit("/");
    cy.get("#username").type(email);
    cy.get("#password").type(password);

    // cy.origin(
    //   "https://config.auth0lab.com/",
    //   { args },
    //   ({ email, password }) => {
    //     cy.get("#username").type(email);
    //     cy.get("#password").type(password);

    //   }
    // );
    cy.url().should("contain", "/");
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
