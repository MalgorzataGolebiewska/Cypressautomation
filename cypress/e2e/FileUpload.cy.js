import 'cypress-file-upload';

describe('File Uploads',(()=>{

    it('Single File Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('intj.png');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it('File Upload - Rename',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'intj.png', fileName:'myFile.png'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

     it.only('File Upload - Drag and drop',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('intj.png', {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('intj.png');
    })
}))