import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App', _ => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('renders something', _ => {
    expect(component).to.exist
  })
})
