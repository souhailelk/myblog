import React from 'react'

let links = [
    {
        httplink: "https://twitter.com/SouhailElk",
        al: "Twitter",
        iconLink: "https://img.icons8.com/color/48/000000/twitter--v1.png"
    },
    {
        httplink: "https://github.com/souhailelk",
        alt: "GitHub",
        iconLink: "https://img.icons8.com/ios-filled/50/000000/github.png"
    },
    {
        httplink: "https://www.linkedin.com/in/souhail-elkaissi",
        alt: "LinkedIn",
        iconLink: "https://img.icons8.com/color/48/000000/linkedin.png"
    },
    {
        httplink: "mailto: elkaissi.souhail.me@gmail.com",
        alt: "mail",
        iconLink: "https://img.icons8.com/color/48/000000/gmail.png"
    }
]

function MyLinks() {
    let Linksdivs = []
    links.forEach(link => {
        Linksdivs.push(
            <div class="m-3">
                <a href={link.httplink}>
                    <img class="object-contain h-10" alt={link.alt} src={link.iconLink} />
                </a>
            </div>
        )

    });
    return (
        <div>

            <div class="text-center font-sans text-sm md:text-xl font-black">Let's get social</div>
            <div class="flex justify-center">
                {Linksdivs}
            </div>
        </div>
    );
}

function Home() {
    let title = "Hello, I'm Souhail El Kaissi."
    let text = ["I'm a software engineer and a competitive programming enthusiast.",
        "You will find here my educational and professional background, my personal side projects, and hopefully many articles about diverse subjects."]
    let bodyContent = []
    text.forEach(txt => bodyContent.push(<p class="px-4 py-2">{txt}</p>))
    return (
        <div className="flex flex-wrap justify-center overflow-hidden rounded p-3">
            <div name="This is the true elements">
                <div class="m-auto max-w-full md:max-w-lg rounded overflow-hidden">
                    <img class="object-cover w-full" alt="Home" src="https://picsum.photos/600/400/?random" />
                </div>
                <div class="m-auto max-w-full md:max-w-lg rounded overflow-hidden">
                    <div class="px-4 py-2">
                        <p class="font-mono text-xl md:text-2xl font-black">
                            {title}
                        </p>
                        <div class="block font-sans text-justify text-lg md:text-xl text-left">
                            {bodyContent}
                        </div>
                    </div>
                    <MyLinks />
                </div>
            </div>

        </div>
    );
}

export default Home;
