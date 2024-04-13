import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "¡Hola Mundo!" text', () => {
  const { getByText } = render(<App />);
  const helloWorldText = getByText('¡Hola Mundo!');
  expect(helloWorldText).toBeInTheDocument();
});

test('renders with blue background', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('bg-blue-500');
});

test('renders with white text', () => {
  const { getByText } = render(<App />);
  const helloWorldText = getByText('¡Hola Mundo!');
  expect(helloWorldText).toHaveClass('text-white');
});

