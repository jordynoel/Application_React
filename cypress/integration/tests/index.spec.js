describe("Index testen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  context("Library tests", () => {
    //Onze eerst test, dit is een check-elements test.
    it("Test elements index page", () => {
      //Check title
      cy.get("h1").contains("Research library!!");
      //Check nav elements
      cy.get(".nav-items").contains("Research library");
      cy.get(".nav-items").contains("Add research");
      cy.get(".nav-items").contains("Dropdown");
    });

    it("Test navigation", () => {
      //Locate the add research nav element and click on it.
      //cy.get(".nav-items").contains("Add research").focus().click();
      //Let's use a command for this
      cy.clickNav("Add research"); //This is helpful for actions that are repitive
      //validate the url
      cy.url().should("include", "/addResearch");
      //Locate the research library nav element and click on it
      cy.get(".nav-items").contains("Research library").focus().click();
      //Validate the url no longer includes addResearch
      cy.url().should("not.include", "/addResearch");
    });
    it("Test Filters", () => {
      //Fill in a value in the filter field
      cy.get(".filter").find("input").focus().type("Gebuisd");
      //Filter the table by pressing the button
      cy.get(".btn-filter").focus().click();
      //Verify the table only has one child
      cy.get("tbody").children(1);
    });

    it("Test Progress-bars & Confirmation", () => {
      //Check the progress bar
      cy.get("progress").should("have.value", 5);
      //Delete an item
      cy.get("tbody").children().first().find("svg").click();
      //Confirm the delete
      cy.on("window:confirm", () => true);
      //Check the progress bar
      cy.get("progress").should("have.value", 4);
    });
  });

  context("Add research tests", () => {
    it("Test data-type error", () => {
      //Navigate to the form page
      cy.visit("http://localhost:3000/addResearch");
      //We are going to fill in a string on the pages field
      cy.get("#inputPages").focus().type("This is not a number");
      //Verify the value is still 0 or not a string
      cy.get("#inputPages").should("have.value", 0);
    });

    it("Test data-required error", () => {
      //Navigate to the form page
      cy.visit("http://localhost:3000/addResearch");
      //We are going to submit the form without filling in all the required fields
      cy.get(".submit").focus().click();
      //Verify the value is still 0 or not a string
      cy.get(".error-text")
        .should("contain", "Title is required")
        .and("contain", "Author is required")
        .and("contain", "Url is required")
        .and("contain", "Nr of pages is required");
    });
    it("Test Fieldwidths", () => {
      var stringLong = "ThisStringIs30CharactersLong!!ThisPartIsToLong";
      var stringGood = "ThisStringIs30CharactersLong!!";
      //Navigate to the form page
      cy.visit("http://localhost:3000/addResearch");
      // We are going to fill in a title longer then 30 characters.
      cy.get("#inputTitle").focus().type(stringLong);
      //The field should only be allowed 30 characters so we check the value
      cy.get("#inputTitle").should("have.value", stringGood);
    });
    it("Fill in form", () => {
      //Navigate to the form page
      cy.visit("http://localhost:3000/addResearch");
      //Let's use a  command to fill in the form
      cy.fillForm("New title", "Jordy Noel", "http://www.google.com", 45);
      cy.get("#inputTitle").should("have.value", "New title");
      cy.get("[data-cy=submit").click();
    });
  });

  context("Counter tests", () => {
    it("Test counter button", () => {
      //Navigate to the counter page
      cy.visit("http://localhost:3000/counter");
      //Verify the initial value is 0
      cy.get(".counter").contains("0");
      //Let's click the button 5 times
      for (let index = 0; index < 5; index++) {
        cy.get(".btn-counter").focus().click();
      }
      //Verify the value is 5
      cy.get(".counter").contains("5");
    });
    it("Test Styles", () => {
      //We will validate the styles of the counter button
      //Navigate to the counter page
      cy.visit("http://localhost:3000/counter");
      //Fetch the button and validate the styles
      cy.get(".btn-counter")
        .should("have.css", "padding", "16px 32px")
        .and("have.css", "border-radius", "5px")
        .and("have.css", "font-weight", "700")
        .and("have.css", "background-color", "rgb(123, 104, 238)");
    });
  });
});
