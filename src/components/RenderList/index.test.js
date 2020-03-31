import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from "pretty";

import RenderList from './index'

let container = null
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

let renderUnder = content => {
  return (
    <div>
      <table className={'table table-hover'}>
        <tbody>{content}</tbody>
      </table>
    </div>
  )
}

it('test RenderList', () => {
  act(() => {
    render(
      renderUnder(
        <RenderList
          items={[
            {
              id: 0,
              name: '1',
              type: '2',
              count: 3,
              price: 4.0,
            },
          ]}
        />,
      ),
      container,
    )
  })
  expect(pretty(container.innerHTML)).toEqual(`<div>
  <table class=\"table table-hover\">
    <tbody>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td><button class=\"deleteButton\">Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>`
  )
})
