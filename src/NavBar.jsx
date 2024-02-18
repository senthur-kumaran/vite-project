import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/about`}>About</NavLink>
            </div>
            <div><Outlet /></div>
        </>
    )
}

export default NavBar