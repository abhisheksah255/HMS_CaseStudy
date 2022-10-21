import { render, screen } from '@testing-library/react';
import Navigation from './Navigation'

test('test',()=>{
    expect(true).toBe(true)
})
test('renders the test', () => {
    render(<Navigation/>);
    // const linkElement = screen.getByText(/Logout/i);
    const linkElement = screen.getByDisplayValue("Logout");
    expect(linkElement).toBeInTheDocument();
  });

  it("checkButtonRender",()=>{
    const {queryByTitle}=render(<Navigation/>)
    const btn= queryByTitle("Logout")
    expect(btn).toBeTruthy()
})
