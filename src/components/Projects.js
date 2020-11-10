import React from 'react'
function Projects(props) {
    let projectsComponents = []
    props.projects.forEach(project => {
        projectsComponents.push(<div class="block px-4 py-2 font-sans text-left md:m-4">
            <div class="uppercase tracking-wide text-xs md:text-sm text-indigo-600 font-bold"><a href={project.projectLink}>{project.projectName}</a></div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{project.startDate}</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">-</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{project.endDate}</div>
            <div class="text-base md:text-lg">{project.description}</div>
        </div>)
    });

    return (
        <div class="block px-4 py-2 text-left">
            <div class="font-sans text-sm md:text-xl font-black">Projects :</div>
            {projectsComponents}
        </div>
    )
}
export default Projects;