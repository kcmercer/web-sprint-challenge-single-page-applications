describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizzatime')
    })

    const textInput = () => cy.get('input[id="name-input"]');
    const orderButton = () => cy.get('button[id="order-button"]');
    const checkBox1 = () => cy.get('input[name="Pepperoni"]');
    const checkBox2 = () => cy.get('input[name="Sausage"]');
    const checkBox3 = () => cy.get('input[name="Pineapple"]');

    it('sanity', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('proper elements', () => {
        textInput().should('exist');
        orderButton().should('exist');
        checkBox1().should('exist');
        checkBox2().should('exist');
        checkBox3().should('exist');
    })

    describe('MVP tests', () => {
        it('mvp tests', () => {

        textInput()
            .should('have.value','')
            .type('Kenneth')

        checkBox1()
            .should('not.be.checked')
            .check()
            .should('be.checked')

        checkBox2()
            .should('not.be.checked')
            .check()
            .should('be.checked')

        checkBox3()
            .should('not.be.checked')
            .check()
            .should('be.checked')

        orderButton()
            .click()
        })
    })
})