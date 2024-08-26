import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent and interacts with it', () => {
  render(<MyComponent />);

  // Check if a specific element is in the document
  const linkElement = screen.getByText(/my component/i);
  expect(linkElement).toBeInTheDocument();

  // Simulate user interaction
  const buttonElement = screen.getByRole('button', { name: /click me/i });
  fireEvent.click(buttonElement);

  // Check if something changed after interaction
  expect(screen.getByText(/clicked!/i)).toBeInTheDocument();
});
