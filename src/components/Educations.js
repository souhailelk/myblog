import React from 'react'
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
export default Educations;