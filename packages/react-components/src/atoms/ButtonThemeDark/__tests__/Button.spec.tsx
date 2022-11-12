import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '~/atoms/Button';

describe('<Button />', () => {
  it('Test Button render', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText('Click me!')).toBeDefined();
  });
});
