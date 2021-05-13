import React from 'react'

let links = [
    {
        httplink: "https://twitter.com/SouhailElk",
        al: "Twitter",
        iconLink: "https://www.flaticon.com/svg/static/icons/svg/145/145812.svg"
    },
    {
        httplink: "https://github.com/souhailelk",
        alt: "GitHub",
        iconLink: "https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
    },
    {
        httplink: "https://www.linkedin.com/in/souhail-elkaissi",
        alt: "LinkedIn",
        iconLink: "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
    },
    {
        httplink: "mailto: elkaissi.souhail.me@gmail.com",
        alt: "mail",
        iconLink: "https://www.flaticon.com/svg/static/icons/svg/2991/2991144.svg"
    }
]

function MyLinks() {
    let Linksdivs = []
    links.forEach(link => {
        Linksdivs.push(
            <div class="flex-initial m-5">
                <a href={link.httplink}><img class="object-contain h-10" alt={link.alt} src={link.iconLink} />
                </a>
            </div>
        )

    });
    return (
        <div class="text-center">
            <div class="justify-center text-xl font-medium mt-3">Contact me:</div>
            <div class="flex justify-center">
                {Linksdivs}
            </div>
        </div>
    );
}

function Home() {
    let describeMe = "Hi! I'm Souhail, I'm a software engineer and a competitive programming enthusiast.\
    I created this website to present my educational and professional background, my personal side projects,\
    and hopefully to be able to write about diverse subjects."
    return (
        <div className="flex flex-wrap justify-center overflow-hidden rounded p-3">
            <div class="max-w-full md:max-w-lg rounded overflow-hidden">
                <img class="object-cover w-full" alt="Home" src="https://picsum.photos/600/400/?random" />
            </div>
            <div class="max-w-full md:max-w-lg rounded overflow-hidden">
                <div class="px-4 py-2 font-sans test-base text-s md:text-lg m-2 text-left">{describeMe}</div>
                <MyLinks />
            </div>
        </div>
    );
}

export default Home;
