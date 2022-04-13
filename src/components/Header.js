import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = useState("")

    const handleChange = (e) => {
        setSearchTitle(e.target.value)
    }
    const handleSearch = () => {
        navigate(`/movies/search-results/${searchTitle}`)
    }
    return (
        <nav className="bg-gray-800  border-gray-200 px-2  py-5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                         alt="Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">Cinema</span>
                </NavLink>
                <div className=" md:order-2">
                    <div className=" relative mr-3 md:mr-0  flex">

                        <input
                            onChange={handleChange}
                            type="text" id="email-adress-icon"
                               className="block p-2 pl-10 mx-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search for a movie..."/>
                        <button
                            onClick={handleSearch}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Search
  </span>
                        </button>
                    </div>

                </div>


                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                     id="mobile-menu-3">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink to='/home'
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/popular'
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white"
                               aria-current="page">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/top-rated"
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">
                                Top rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/now-playing"
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">
                                Now playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upcoming"
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">
                                Upcoming</NavLink>
                        </li>
                        <li>
                            <NavLink to="/latest"
                                     className="block py-2 pr-4 pl-3  text-xl text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">
                                Latest</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;