import React from 'react'

function Description(props) {
    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            Description :
            <div class="block px-4 py-2 font-sans text-lg text-left">{props.description}</div>
        </div>
    )
}

function Experiences(props) {
    let experiencesComponents = []
    props.experiences.forEach(experience => {
        experiencesComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left m-4">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{experience.jobTitle}</div>
            <div class="inline-block text-center m-1">{experience.startDate}</div>
            <div class="inline-block text-center m-1">-</div>
            <div class="inline-block text-center m-1">{experience.endDate}</div>
            <div class="uppercase"><a href={experience.companyLink}>{experience.companyName}</a></div>
            <div>{experience.description}</div>
        </div>)
    });
    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            Experiences :
            {experiencesComponents}
        </div>
    )
}

function Projects(props) {
    let projectsComponents = []
    props.projects.forEach(project => {
        projectsComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left m-4">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold"><a href={project.projectLink}>{project.projectName}</a></div>
            <div class="inline-block text-center m-1">{project.startDate}</div>
            <div class="inline-block text-center m-1">-</div>
            <div class="inline-block text-center m-1">{project.endDate}</div>
            <div>{project.description}</div>
        </div>)
    });

    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            Projects :
            {projectsComponents}
        </div>
    )
}

function Educations(props) {
    let educationsComponents = []
    props.educations.forEach(education => {
        educationsComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left m-4">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{education.degree}</div>
            <div class="inline-block text-center m-1">{education.startDate}</div>
            <div class="inline-block text-center m-1">-</div>
            <div class="inline-block text-center m-1">{education.endDate}</div>
            <div class="uppercase"><a href={education.schoolLink}>{education.schoolName}</a></div>
        </div>)
    });

    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
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