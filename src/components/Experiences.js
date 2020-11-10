import React from 'react'
function Experiences(props) {
    let experiencesComponents = []
    props.experiences.forEach(experience => {
        experiencesComponents.push(<div class="block px-4 py-2 font-sans text-left md:m-4">
            <div class="uppercase tracking-wide text-xs md:text-sm text-indigo-600 font-bold">{experience.jobTitle}</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{experience.startDate}</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">-</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{experience.endDate}</div>
            <div class="uppercase text-xs md:text-sm"><a href={experience.companyLink}>{experience.companyName}</a></div>
            <div class="text-base md:text-lg">{experience.description}</div>
        </div>)
    });
    return (
        <div class="block px-4 py-2 text-left">
            <div class="font-sans text-sm md:text-xl font-black">Experiences :</div>
            {experiencesComponents}
        </div>
    )
}
export default Experiences;