import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'
import TiersList from './TiersList'

import {testTiers, testItems} from 'tests/units/support/rankingFixtures'


describe('TiersList > ', () => {
  it('Displays "Loading..." for empty tiers', () => {
    render(
      <TiersList items={[]} tiers={[]} />
    )
    expect(screen.getByText('loading...')).toBeInTheDocument()
  });

  it('Renders Each Tier with related items', () => {
    render(
      <TiersList items={testItems} tiers={testTiers} />
    )

    const tiersRendered = screen.queryAllByText(/tier/i)
    const itemsRendered = screen.queryAllByText(/item/i)

    expect(screen.queryByText('loading...')).toBeNull()
    expect(tiersRendered.length).toBe(2)
    expect(itemsRendered.length).toBe(4)
  });
});
