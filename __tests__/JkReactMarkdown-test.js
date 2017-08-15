import React from 'react'
import { shallow } from 'enzyme'
import Editor from '../src/JkReactMarkdown'

test('Render test', () => {
  let editor = shallow(
    <Editor />
  )
  expect(editor.find('textarea').exists()).toBe(true)
})
