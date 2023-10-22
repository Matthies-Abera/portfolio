import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar Component', () => {
    it('should have four component links', () => {
        render(<Navbar />);
        const links = document.querySelectorAll("a");
        expect(links.length).toEqual(4);
    }),
    
    it('should display business logo', () => {
        render(<Navbar />);
        const logo = screen.getByRole('business-logo');
        expect(logo).toBeInTheDocument();
    }),

    it('should initially dislplay hamburger icon', () => {
        render(<Navbar />);
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.src).toContain('http://localhost/_next/image?url=%2Fimg.jpg&w=96&q=75');
    })
})
