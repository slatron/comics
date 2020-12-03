import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'
import Item from './Item'
import {testItems} from 'tests/units/support/rankingFixtures'

describe('Tier > ', () => {
  it('Displays empty item when empty item object is passed', () => {
    render(
      <Item item={{}} />
    )
    const itemRendered = screen.getByTestId('item')
    expect(itemRendered).not.toHaveTextContent()
  });

  it('Renders The Item Passed', () => {
    render(
      <Item item={testItems[3]} />
    )
    const itemsRendered = screen.queryAllByText(/item two - 1/i)
    expect(itemsRendered.length).toBe(1)
  });
});
