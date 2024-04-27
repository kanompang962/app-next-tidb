import React from 'react'
import CartNavbar from './CartNavbar'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">devSHOP</a>
        </div>
        <div className="navbar-center">
            <label className="navbar-center input input-bordered flex items-center gap-2 w-[120px] md:w-[420px] lg:w-[600px]">
                <input type="text" className="grow" placeholder="Search" />
            </label>
        </div>
        <div className="navbar-end">
            <CartNavbar/>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar