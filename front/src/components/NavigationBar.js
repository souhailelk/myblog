import React from 'react'


function NavigationBar(props) {
    const { navigationBarItems } = props;
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    let items = []
    navigationBarItems.forEach(navigationBarItem => {
        items.push(
            <a key={navigationBarItem.route} href={navigationBarItem.route} className="block lg:inline-block mt-4 mr-4 lg:mt-0 text-xl">
                {navigationBarItem.name}
            </a>
        )
    });

    return (
        <nav className="flex justify-between flex-wrap text-white bg-black p-3">
            <span className="items-center mr-6 text-2xl tracking-tight font-semibold"><a href="/">S\E Beta </a></span>
            <button className="lg:hidden px-3 py-2 border rounded border-white" onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (navbarOpen ? " flex" : " hidden")}>
                <div>
                    {items}
                </div>
            </div>
        </nav>
    );
}
export default NavigationBar;