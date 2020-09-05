import React from 'react'
function Description(props) {
    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            Description :
            <div class="block px-4 py-2 font-sans text-lg text-left">{props.description}</div>
        </div>
    )
}
export default Description;