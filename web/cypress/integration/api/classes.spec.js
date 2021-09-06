/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
  it('POST - cadastro de aula professor', () => {
    cy.api({
      method: 'POST',
      url: `${Cypress.config().apiUrl}/classes`,
      body:{
        "name":"Avatar Azul",
        "avatar":"https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg",
        "whatsapp":"51999999999",
        "bio":"Lorem Ipsum lorem ipsum",
        "subject":"Química",
        "cost":100,
        "schedule":[
           {
              "week_day":0,
              "from":"08:00",
              "to":"09:00"
           }
        ]
     }
    }).then((response) => {
      //asserções response
      expect(response.status).to.eq(201)

      expect(response.headers)
        .to.have.property('content-type')
        .an('string')
        .eq('application/json; charset=utf-8')

      // expect(response.body)
      //   .to.have.property('week_day')
      //   .an('string')
      //   .length(11)
    })
  });
});
