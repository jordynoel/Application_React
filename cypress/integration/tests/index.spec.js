describe("Index testen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Onze eerst test, dit is een check-elements test.
  it("Check elements index pagina", () => {
    //Check title
    cy.get("h1").contains("Research library!!");
    //Check nav elements
    cy.get(".nav-items").contains("Research library");
    cy.get(".nav-items").contains("Add research");
    cy.get(".nav-items").contains("Dropdown");
  });

  it("Check navigation", () => {
    //Locate the add research nav element and click on it.
    cy.get(".nav-items").contains("Add research").focus().click();
    //validate the url
    cy.url().should("include", "/addResearch");
    //Locate the research library nav element and click on it
    cy.get(".nav-items").contains("Research library").focus().click();
    //Validate the url no longer includes addResearch
    cy.url().should("not.include", "/addResearch");
  });
});
