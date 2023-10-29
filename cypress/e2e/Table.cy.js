
describe('Handle Tables', (()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/");
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo');
        cy.get("button[type='submit").click();

        cy.get(".btn-close").click();

        cy.get("#menu-customer").click(); // customers main menu
        cy.get("#menu-customer>ul>li:first-child").click(); // customers child item

    })

    it.skip('Check Number Rows & Columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')

    })

    it.skip('Check cell data from specific row & column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("hfgjhgjgjggj@gmail.com");

    })

    it.skip('Read all the rows & columns data in the first page',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each( ($row, index, $rows)=>{

            cy.wrap($row).within( ()=>{

                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })


    })

    it.only('Pagination',()=>{

        // //find total number of pages
        // let totalPages;
        // cy.get("div[class='col-sm-6 text-end']").then( (e)=>{
        //     let mytext=e.text(); //Showing 1 to 10 of 15994 (1600 Pages)
        //     totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
        //     cy.log("Total number of pages in table -> "+totalPages);
        // })

        let totalPages=5;

        for(let p=1;p<totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active pages==="+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(5000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); //Email
                        })
                    })
                })
            }
        }

    })
}))