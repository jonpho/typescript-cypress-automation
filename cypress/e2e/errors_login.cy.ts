describe('Error Handling in Login', () => {
  it('Errors when using incorrect password', () => {
    cy.get('#customer_menu_top').contains('Login or register').click();
    cy.get('#loginFrm_loginname').type('MyUser');
    cy.get('#loginFrm_password').type('MyUsersPassword');
    cy.get('button[title="Login"]').click();
    cy.get('div[class="alert alert-error alert-danger"]')
      .should('include.text', "Error: Incorrect login or password provided.")
  })
})