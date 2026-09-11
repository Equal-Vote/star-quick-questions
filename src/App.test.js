import { render } from '@testing-library/react';
import App from './App';

// Replaces the stock Create React App boilerplate, which asserted on a
// "learn react" link this app has never rendered -- so it had failed since
// the app was first written, and kept the whole suite red.
//
// This is deliberately a smoke test rather than a behavioural one. It mounts
// the entire component tree and asserts something rendered. That is a low
// bar, but it is precisely the bar a dependency bump trips: an upgrade that
// still compiles but breaks rendering produces a blank page, which a
// build-only check cannot see.
test('renders without crashing', () => {
  const { container } = render(<App />);
  const app = container.querySelector('.app');
  expect(app).not.toBeNull();
  expect(app.querySelector('.components')).not.toBeNull();
});
