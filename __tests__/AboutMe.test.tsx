import { render, screen } from '@testing-library/react'
import AboutMe from '@/components/AboutMe'

describe('About Me Component', () => {
    it('should contain one main image', () => {
        render(<AboutMe />);
        const interestImage = screen.getByRole('interest-image');
        expect(interestImage).toBeInTheDocument();
    }),
    
    it('should display three pieces of contact information', () => {
        render(<AboutMe />);
        const contactInfoContainer = screen.getByRole('contact-info');
        const details = contactInfoContainer.querySelectorAll('div');
        expect(details.length).toEqual(3);
    }),

    it('should display four interest types', () => {
        render(<AboutMe />);
        const interestsContainier = screen.getByRole('interest-buttons');
        const interests = interestsContainier.querySelectorAll('div');
        expect(interests.length).toEqual(4);
    })
})
