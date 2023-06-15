import { render, screen } from '@testing-library/react'
import Page from '../app/page';
import '@testing-library/jest-dom'
 
describe('Page', () => {
  it('renders greeting text', () => {
    render(<Page />)

    const greetingText = screen.getByTestId("greeting");
 
    expect(greetingText).toBeInTheDocument()
  })
})