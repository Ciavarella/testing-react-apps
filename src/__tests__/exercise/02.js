// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent, render } from '@testing-library/react'
import Counter from '../../components/counter'


test('counter increments and decrements when the buttons are clicked', () => {
  const { container } = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')

  const incrementClickEvent = fireEvent.click(increment)
  expect(message.textContent).toBe('Current count: 1')

  const decrementClickEvent = fireEvent.click(decrement)
  expect(message.textContent).toBe('Current count: 0')
})
