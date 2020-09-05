import React from 'react'
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
export default Projects;