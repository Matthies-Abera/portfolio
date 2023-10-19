export interface Project {
    image: typeof import("*.svg"),
    name: string,
    description: string,
    stack: string[],
    codeLink: string,
    webLink: string,
}

export const projects: Project[] = [
    {
        image: require('/public/images/cinema.jpg'),
        name: 'Cafe Lalibela',
        description: 'Australia\'s first Ethiopian Restaurant',
        stack: ["React", "CSS"],
        codeLink: 'https://github.com/Matthies-Abera/cafe-lalibela-v2',
        webLink: 'https://www.lalibela.com.au/'
    }
]