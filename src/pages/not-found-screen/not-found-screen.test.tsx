import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

describe('Component: Not Found screen', () => {
  it('should render not found screen', () => {
    render(
      <MemoryRouter>
        <NotFoundScreen />
      </MemoryRouter>
    );

    const headingElement = screen.getByText(/404/i);
    const smallTextElement = screen.getByText(/Page not found/i);
    const linkElement = screen.getByRole('link', { name: /Go to main page/i });

    expect(headingElement).toBeInTheDocument();
    expect(smallTextElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
