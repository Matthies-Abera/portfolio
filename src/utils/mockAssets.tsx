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

interface RadioButton {
    id: string,
    image: typeof import("*.svg")
}

export interface FormRadioInput {
    radioButtons: RadioButton[],
    heading: string,
    htmlFor: string
}

const buttons: RadioButton[] = [
    {
        id: 'design',
        image: require('/public/icons/rocket.svg')
    },
    {
        id: 'development',
        image: require('/public/icons/cloud.svg')
    },
    {
        id: 'application',
        image: require('/public/icons/app.svg')
    }
]

export const projectOptions: FormRadioInput = {
        radioButtons: buttons,
        heading: 'I NEED HELP WITH ...',
        htmlFor: 'project_type' 
}
