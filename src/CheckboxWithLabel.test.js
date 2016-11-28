import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import CheckboxWithLabel from './CheckboxWithLabel'

const checkbox = TestUtils.renderIntoDocument(
  <CheckboxWithLabel labelOn="on" labelOff="off" />
)
const checkboxnode = ReactDOM.findDOMNode(checkbox)

it('CheckboxWithLabel changes the text before click', () => {

  expect(checkboxnode.textContent).toEqual("off")

})

it('Clicked should be changed to on', () => {
  TestUtils.Simulate.change(
    TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  )

  expect(checkboxnode.textContent).toEqual("on")
})
