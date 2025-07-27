import { Outlet, Link } from "react-router"

const Layout = () => {

    return (
        <div className="main">

            <div className="split-left navbar-cntr">
                <h2> CREWMATE NAVBAR ඞ </h2>
                <Link to="/" className="navbar-bttns">TO HOME! 🏡ඞ </Link>
                <Link to="/create" className="navbar-bttns">MAKE CREWMATE! ඞ✨</Link>
                <Link to="/summary" className="navbar-bttns">VIEW CREWMATES! ඞ🤝ඞ</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Layout