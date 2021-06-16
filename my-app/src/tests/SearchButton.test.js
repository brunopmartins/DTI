import { render, screen } from '@testing-library/react';
import SearchButton from '../components/Home/SearchButton';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  const handleClick = jest.fn()
  render(<SearchButton onClick={handleClick} >Button</SearchButton>);
  const linkElement = screen.getByText("Button");
  userEvent.click(screen.getByText('Button'))
  expect(linkElement).toBeInTheDocument();
  expect(handleClick.mock.calls.length).toEqual(1);
});
