import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';

test('renders two counters', () => {
  render(<Provider store={store}><App /></Provider>);
  const reactStateCounter = screen.getByDisplayValue("");
  expect(reactStateCounter).toBeInTheDocument();
});
