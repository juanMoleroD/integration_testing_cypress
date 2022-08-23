describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it("should update running total when number button is clicked", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get(".display").should("contain", "12")
  });

  it("should update display when doing aritmetical operations and pressing equals", () => {
    cy.get("#number3").click();
    cy.get("#operator-add").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "7");
  });

  it("should be able to chain multiple operations", () => {
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number6").click();
    cy.get("#operator-subtract").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "21");
    cy.get("#operator-divide").click();
    cy.get("#number7").click();
    cy.get("#operator-add").click();
    cy.get(".display").should("contain", "3")
  });

  it("should handle large numbers", () => {
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "999998000001")
  });

  it("should handle negative numbers", () => {
    cy.get("#number5").click();
    cy.get("#operator-subtract").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-4")
  });

  it("should handle decimal numbers", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.5")
  });

  it("should return error", () => {
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Error")
  });
})