import React from 'react'
function Description(props) {
    return (
        <div class="block px-4 py-2 text-left">
            <div class="font-sans text-sm md:text-xl font-black">Description :</div>
            <div class="block px-4 py-2 font-sans test-base md:text-lg text-left">{props.description}</div>
        </div>
    )
}
export default Description;