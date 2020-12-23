import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'
import Tier from './Tier'

import {testTiers, testItems} from 'tests/units/support/rankingFixtures'


describe('Tier > ', () => {
  it('Displays one empty tier for empty params', () => {
    render(
      <Tier items={[]} tier={{}} />
    )
    const tiersRendered = screen.getAllByTestId('tier')
    expect(tiersRendered.length).toBe(1)
    expect(tiersRendered[0]).not.toHaveTextContent()
  });

  it('Renders Each Item', () => {
    render(
      <Tier items={testItems} tier={testTiers[0]} />
    )
    const itemsRendered = screen.queryAllByText(/item/i)
    expect(itemsRendered.length).toBe(4)
  });
});
