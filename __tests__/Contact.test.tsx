import { render, screen } from '@testing-library/react'
import Contact from '@/components/ContactV2'

describe('Contact Component', () => {
    it('should contain a form', () => {
        render(<Contact />);
        const form = document.querySelector('form');
        expect(form).toBeInTheDocument();
    }),

    it('should contain a submit button', () => {
        render(<Contact />);
        const submitButton = screen.getByRole('submit');
        expect(submitButton).toBeInTheDocument();
    }),

    it('should contain seven labels', () => {
        render(<Contact />);
        const labels = document.querySelectorAll('label');
        expect(labels.length).toEqual(7);
    }),

    it('should contain a text area', () => {
        render(<Contact />);
        const textarea = document.querySelector('textarea');
        expect(textarea).toBeInTheDocument();
    })
})