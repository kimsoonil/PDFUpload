import React from 'react';
import { render, screen } from '@testing-library/react';
import Pages from '.';

test('renders learn react link', () => {
  render(<Pages />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
