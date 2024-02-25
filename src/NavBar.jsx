import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-start items-center">
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => `hover:bg-gray-700 hover:text-white text-white block rounded-md px-3 py-2 text-base font-medium text-gray-300 ${isActive ? 'bg-gray-900' : '' }`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) => `hover:bg-gray-700 hover:text-white text-white block rounded-md px-3 py-2 text-base font-medium text-gray-300 ${isActive ? 'bg-gray-900' : '' }`}
                    >
                        About
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar