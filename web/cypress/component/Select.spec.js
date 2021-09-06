/// <reference types="cypress" />

import React from 'react'

import Select from '../../src/components/Select'
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('Select component', () => {
  const baseCss = '/__root/src/assets/styles/global.css'
  const indexCss = '/__root/src/components/Select/styles.css'
  it('deve ser renderizado com sucesso', () => {
    const subject = 'Ciências'

    mount(
      <Router>
        <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Química', label: 'Química' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Inglês', label: 'Inglês' },
              ]}
          />
      </Router>
      ,
      {
        stylesheets: [baseCss, indexCss]
      }
    )

    cy.get('.select-block').find('#subject').as('select')

    cy.get('@select').should('have.value', subject);
    cy.get('@select').then(($el) => {
      cy.log($el.css('background'))
      //expect($el.css('background').contains('#f8f8fc'))
    });
  });
});
