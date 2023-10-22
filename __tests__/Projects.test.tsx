import { render, screen } from '@testing-library/react'
import Projects from '@/components/Projects'
import { projects } from './../src/utils/mockData'

describe('Projects Component', () => {
    it('should display same number of projects as mocked', () => {
        render(<Projects />);
        const numOfProjects = screen.getAllByRole('project');
        expect(numOfProjects.length).toEqual(projects.length);
    })
})
