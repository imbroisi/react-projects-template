import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with Hello', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
