describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/home');
    cy.get('a').find('img').should('have.attr', 'src', 'assets/logo.png');
  });
});
