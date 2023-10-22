import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
    it('should display headshot image', () => {
        render(<Hero />);
        const headshot = document.querySelector('img');
        expect(headshot).toBeInTheDocument();
    }),
    
    it('should display contact details', () => {
        render(<Hero />);
        const details = screen.getByRole('details-container');
        expect(details).toBeInTheDocument();
    }),

    it('should display two contact buttons', () => {
        render(<Hero />);
        const links = document.querySelectorAll("a");
        expect(links.length).toEqual(2);
    })
})
