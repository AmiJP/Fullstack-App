import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './src/App';

describe('App component', () => {
  test('renders heading and paragraph text', () => {
    render(<App />);

    // Check for heading text
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to the Fullstack App');

    // Check for paragraph text
    expect(screen.getByText('This is a simple React application.')).toBeInTheDocument();
  });
});
