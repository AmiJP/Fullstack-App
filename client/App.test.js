import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './src/App';


// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('Hello, world!'),
  })
);

test('renders message from backend after fetching', async () => {
  render(<App />);

  // Wait for element with the message to appear in the DOM
  const messageElement = await screen.findByText(/hello, world!/i);

  // Assert it's displayed
  expect(messageElement).toBeInTheDocument();

  // Optional: Assert that fetch was called correctly
  expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/hello');
});
