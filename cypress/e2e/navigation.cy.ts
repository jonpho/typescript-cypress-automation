describe('Check main navigation links', () => {
  it('Check Apparel & Acccessories Title', () => {
    const title = 'Apparel & accessories';

    cy.get('a[href*="product/category&path=68"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

  it('Check Makeup Title', () => {
    const title: String = "Makeup";

    cy.get('a[href*="path=36"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })
  
  it('Check Skincare Title', () => {
    const title: String = 'Skincare';

    cy.get('a[href*="path=43"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

  it('Check Fragrance Page Title', () => {
    const title: String = 'Fragrance';

    cy.get('a[href*="path=49"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

  it('Check Mens Page Title', () => {
    const title: String = 'Men';

    cy.get('a[href*="path=58"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

  it('Check Hair Care Page Title', () => {
    const title: String = "Hair Care";

    cy.get('a[href*="path=52"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

  it('Check Books Page Title', () => {
    const title: String = "Books";

    cy.get('a[href*="path=65"]').eq(0).click();
    cy.get('h1').should('include.text', title);
  })

})