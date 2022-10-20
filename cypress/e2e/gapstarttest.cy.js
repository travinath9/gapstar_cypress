import 'cypress-file-upload'
describe('Gapstar Assesment', () => {

    it('TC_scenario 01', () => {
       //Navigate to herokuapp.com link and verify the app header
      cy.visit("https://the-internet.herokuapp.com/")
      cy.title().should('eq','The Internet')
      
    })

    it('TC_scenario 02', () => {
      //Click the drop down anchor tag and navigate to drop down page
      cy.get('a').contains('Dropdown').click();
      cy.get('select').select(2).should('have.value', '2')
      cy.wait(4000)

      //Navigate back to the main page
      cy.go('back')
    })

    it('TC_scenario 03', () => {
      //Click the Inout anchor tag and navigate to Input page
      cy.get('a').contains('Inputs').click();

      //Type any number in input
      cy.get('input').type('2023')
      cy.wait(3000)

      //Navigate back to the main page
      cy.go('back')
    })

    it('TC_scenario 04', () => {
      //Click the Inout anchor tag and navigate to Input page
      cy.get('a').contains('File Download').click();

      //Download selenium.txt file
      cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 5000)
        })
        cy.get('a').contains('selenium.txt').click();
      })

      //Navigate back to the main page
      cy.go('back')
     
    })

    it('TC_scenario 05', () => {
      //Click the File upload anchor tag and navigate to File upload page
      cy.get('a').contains('File Upload').click();

      //Upload jpg file
      cy.get('input[id=file-upload]').invoke('show').selectFile('cypress/fixtures/testPicture.png')
      cy.wait(3000)

      //Navigate back to the main page
      cy.go('back')
    })

    it('TC_scenario 06', () => {
      //Click the Horizontal slider anchor tag and navigate to Horizontal slider page
      cy.get('a').contains('Horizontal Slider').click();

      //Type any number in input
      cy.get('input[type=range]').invoke('val', 3).trigger('change')
      cy.wait(3000)

      //Navigate back to the main page
      cy.go('back')
    })

   
  })