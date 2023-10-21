interface RadioButton {
    id: string,
    image: typeof import("*.svg")
}

export interface FormRadioInput {
    radioButtons: RadioButton[],
    heading: string,
    htmlFor: string
}

export interface Project {
    image: typeof import("*.svg"),
    name: string,
    description: string,
    stack: string[],
    codeLink: string,
    webLink: string,
}