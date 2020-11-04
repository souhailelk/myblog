import React from 'react'
import Description from './Description'
import Experiences from './Experiences'
import Projects from './Projects'
import Educations from './Educations'
import ResumeName from './ResumeName'

function Resume(props) {
    const { resume } = props;
    return (
        <div className="flex justify-center overflow-hidden rounded">
            <div class="w-screen min-h-screen box-content max-w-screen-lg shadow-lg px-6 py-4 m-2">
                <ResumeName completName={resume.completName} />
                <Description description={resume.description} />
                <Experiences experiences={resume.experiences} />
                <Projects projects={resume.projects} />
                <Educations educations={resume.educations} />
            </div>
        </div>
    )
}
export default Resume;