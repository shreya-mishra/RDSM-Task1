import React from 'react';
import { render, fireEvent, screen, toHaveStyle } from '@testing-library/react';
import App from './App';

test('renders button initially', () => {
  render(<App />);
  const buttonElement = screen.getByText('Click me!');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('fade-button');
});

test('displays timestamp after button click', async () => {
  render(<App />);
  const buttonElement = screen.getByText('Click me!');
  
  fireEvent.click(buttonElement); // Simulate button click
  
  const timestampElement = await screen.findByText(new RegExp('.+')); // Any text content
  
  expect(buttonElement).not.toBeInTheDocument(); // Button should disappear
  expect(timestampElement).toBeInTheDocument(); // Timestamp should appear
  expect(timestampElement).toHaveClass('time');
});

test('timestamp format is correct', async () => {
  render(<App />);
  const buttonElement = screen.getByText('Click me!');
  
  fireEvent.click(buttonElement); // Simulate button click
  
  const timestampElement = await screen.findByText(new RegExp('.+')); // Any text content
  const timestampText = timestampElement.textContent;

  // Match the timestamp using a regular expression that covers common formats
  const timestampRegex = /^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}(:\d{2})? [APap][Mm]$/;
  expect(timestampText).toMatch(timestampRegex);
});

