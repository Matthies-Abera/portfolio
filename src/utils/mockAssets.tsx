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

export const Resume = 'https://matthies-abera-resume.s3.ap-southeast-2.amazonaws.com/Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgOrmLR0oznTBzS%2F%2BynYS8UOnnp6Aw5LLdCiK1XhiiOeoCIQDeOZaZMDaroLQAE8y5S%2BbxwfDnRvTaLIKHdn8iKfVQoiqEAwjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDg4MDYzMjg5NzM1NiIM15tdfPI0%2FHXum5l0KtgCNc5yal%2Fd5Z1vOH886wyp3uQhkiD%2BC9je9vgR1TwXmhy6ntha%2BWphag4a%2BQOSnlYOMlIPok0A%2B7i3Q4KVMG0KIQFTQEg2LrCiMzSFRn7FS57HtmPeWOIr2bHiLj0prWn9fAub%2BatGpdAsaggA0CYqDOjrfz%2FpcWQyJyENKPNgM%2B1xL10r3mdqsO23G64W4sC76b3mpMX7oqYpHE5ZDq0jWAbgC7x%2BOF0Lz3no8%2BG6oU5jWOW77fko0OpTnJPdTkj9T247krFTPSM4wtS%2FSOVHKConqHzQklV2lswVx1awFckZvxLQXgF2WNRffmCeuhyBUQfoNEf4AxuTdhjyKNWeGFbn76dPHifQiu%2F37TfTl3XkrdGAs5snpPbQnRdo7xegtZ4YI%2FQs2CVUQKOI5HgcoWo3fo48%2FgO6A%2BVptBhL96nUbIh1zPbUpm8ARgImzo4gndEOdBKp1P4wqNPMqQY6swLahmzCbT5Z53ZgLHitLW0XZFON%2FFEuhoL610yGrqVCs5euqlVX%2FWCl4aXLnBR5m9CXLP%2F8EU4jaLa%2F3ouMDir13q%2BFt5tj%2F7%2BiuTMrnak6VreUY6DyI%2FeDHQY0oFO9WPSp%2BdMDwnKB1VGlfDHcZ2JzCWW3y%2BwDJLjErRuhBxY17Fu3vJ7jWHV0QDR4RGNziCDI%2B5aaRZyGetKldbtwgwHwfKCz%2F1FNXkAZczwTMCJQ4E5e3xfYBOMyHJZHR3vpZ4WGsygGhrYghKOeCcoM%2FUMekGIgY1uEs8CBt%2Fw3%2BJFVCioXQQWujeypyKQhuNU%2B%2BUbDL6Fvk%2B5I9wgRM82JWIx%2FKvhsz53LWPQr40HbKIWBkeoy0BLiZXvBC9Jw7Jz5ISwbJIpELMMAsG3WxbohDDAuIrut&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231021T013249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA42COPT5GAUTJIB7H%2F20231021%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=fb197aa41d55496ba00d3f5bf751c04906b07219808128d421dd9c06a5a0bf85'