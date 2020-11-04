import React from 'react'

function NavigationBar(props) {
    const { navigationBarItems } = props;
    let items = []
    navigationBarItems.forEach(navigationBarItem => {
        items.push(
            <li class="mr-6 font-medium hover:text-gray-900 transition duration-150 ease-in-out">
                <a href={navigationBarItem.route}>{navigationBarItem.name}</a>
            </li>)
    });
    return (
        <div class="hidden md:block md:ml-10 md:pr-4">
            <nav>
                <ul class="flex">
                    {items}
                </ul>
            </nav>
        </div>);
}

export default NavigationBar;