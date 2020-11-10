import React from 'react'
function Educations(props) {
    let educationsComponents = []
    props.educations.forEach(education => {
        educationsComponents.push(<div class="block px-4 py-2 font-sans text-left md:m-4">
            <div class="uppercase tracking-wide text-xs md:text-sm text-indigo-600 font-bold">{education.degree}</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{education.startDate}</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">-</div>
            <div class="inline-block text-center text-xs md:text-sm md:m-1">{education.endDate}</div>
            <div class="uppercase text-xs md:text-sm"><a href={education.schoolLink}>{education.schoolName}</a></div>
        </div>)
    });

    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            <div class="font-sans text-sm md:text-xl font-black">Education :</div>
            {educationsComponents}
        </div>
    )
}
export default Educations;