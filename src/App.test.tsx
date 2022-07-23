import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name: ', () => {
  render(<App />);
  const stringElement = screen.getByText('keeper');
  expect(stringElement).toBeInTheDocument();
});
