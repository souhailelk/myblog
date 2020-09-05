import React from 'react'
import Description from './Description'
import Experiences from './Experiences'
import Projects from './Projects'
import Educations from './Educations'
import ResumeName from './ResumeName'

function Resume(props) {
    const { resume } = props;
    return (
        <div class="box-content max-w-screen-lg shadow-lg px-10 py-3 m-10 overflow-hidden rounded">
            <ResumeName completName={resume.completName} />
            <Description description={resume.description} />
            <Experiences experiences={resume.experiences} />
            <Projects projects={resume.projects} />
            <Educations educations={resume.educations} />
        </div>
    )
}
export default Resume;