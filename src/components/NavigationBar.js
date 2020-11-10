import React from 'react'


function NavigationBar(props) {
    const { navigationBarItems } = props;
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    let items = []
    navigationBarItems.forEach(navigationBarItem => {
        items.push(
            <a href={navigationBarItem.route} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray mr-4">
                {navigationBarItem.name}
            </a>
        )
    });

    return (
        <nav class="flex items-center justify-between flex-wrap bg-black p-3">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-2xl tracking-tight"><a href="/">S\E</a></span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (navbarOpen ? " flex" : " hidden")} id="Menu" >
                <div class="text-xl lg:flex-grow">
                    {items}
                </div>
            </div>
        </nav>
    );
}
export default NavigationBar;