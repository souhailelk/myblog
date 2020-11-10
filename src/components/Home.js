import React from 'react'

function Home() {
    return (
        <div className="flex justify-center overflow-hidden rounded">
            <div class="box-content max-w-screen-lg shadow-lg px-6 py-4">
                <div class=" flex justify-center content-center flex-wrap px-2">
                    <div class="sm:text-sm md:text-2xl">Hi! I'm Souhail, I'm a software engineer, I created this website to present my education and professional background, present my personal projects, and also to write eventually about diverse subjects.</div>
                </div>

                <div class="justify-center text-center text-xl font-medium mt-3">Contact me:</div>

                <div class="flex justify-center">
                    <div class="flex-initial text-center m-5"><a href="https://twitter.com/SouhailElk"><img class="object-contain h-10" alt="twitter" src="https://www.flaticon.com/svg/static/icons/svg/145/145812.svg" /></a></div>
                    <div class="flex-initial text-center m-5"><a href="https://github.com/souhailelk"><img class="object-contain h-10" alt="github" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg" /></a></div>
                    <div class="flex-initial text-center m-5"><a href="https://www.linkedin.com/in/souhail-elkaissi/"><img class="object-contain h-10" alt="linkedin" src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" /></a></div>
                    <div class="flex-initial text-center m-5"><a href="mailto: elkaissi.souhail.me@gmail.com"><img class="object-contain h-10" alt="email" src="https://www.flaticon.com/svg/static/icons/svg/2991/2991144.svg" /></a></div>
                </div>
            </div>
        </div>);
}

export default Home;
