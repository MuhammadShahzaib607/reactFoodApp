import './index.css'

export const Navbar = ()=> {
    return (
        <div className='navbar'>
        <div className="webName">FoodDesk</div>
        <div className="navbarItems">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Orders</li>
        </div>
        <button className="logout">logout</button>
        <img src="./menu-icon.png" className='menuIcon' alt="" />
        </div>
    )
}