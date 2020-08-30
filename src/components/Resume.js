import React from 'react'

function Description(props) {
    return (
        <div class="block px-4 py-2 font-sans text-lg text-left">
            Description :
            <div class="block px-4 py-2 font-sans text-lg text-left">{props.description}</div>
        </div>
    )
}

function Experiences(props) {
    let experiencesComponents = []
    props.experiences.forEach(experience => {
        experiencesComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left">
            <div><a href={experience.companyLink}>{experience.companyName}</a></div>
            <div>{experience.jobTitle}</div>
            <div>{experience.description}</div>
            <div>{experience.startDate}</div>
            <div>{experience.endDate}</div>

        </div>)
    });
    return (
        <div class="block px-4 py-2 font-sans text-lg text-left">
            Experiences :
            {experiencesComponents}
        </div>
    )
}

function Projects(props) {
    let projectsComponents = []
    props.projects.forEach(project => {
        projectsComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left">
            <div><a href={project.projectLink}>{project.projectName}</a></div>
            <div>{project.description}</div>
            <div>{project.startDate}</div>
            <div>{project.endDate}</div>

        </div>)
    });

    return (
        <div class="block px-4 py-2 font-sans text-lg text-left">
            Projects :
            {projectsComponents}
        </div>
    )
}

function Educations(props) {
    let educationsComponents = []
    props.educations.forEach(education => {
        educationsComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left">
            <div><a href={education.schoolLink}>{education.schoolName}</a></div>
            <div>{education.degree}</div>
            <div>{education.description}</div>
            <div>{education.startDate}</div>
            <div>{education.endDate}</div>

        </div>)
    });

    return (
        <div class="block px-4 py-2 font-sans text-lg text-left">
            Education :
            {educationsComponents}
        </div>
    )
}

function Name(props) {
    return (
        <div class="block px-4 py-2 font-serif text-4xl font-black tracking-widest text-center">{props.completName}</div>
    )
}

function Resume(props) {
    const { resume } = props;
    return (
        <div class="w-screen min-h-screen box-content max-w-screen-lg shadow-lg px-6 py-4 m-10 overflow-hidden rounded">
            <Name completName={resume.completName} />
            <Description description={resume.description} />
            <Experiences experiences={resume.experiences} />
            <Projects projects={resume.projects} />
            <Educations educations={resume.educations} />
        </div>
    )
}

export default Resume;