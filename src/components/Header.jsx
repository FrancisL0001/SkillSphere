import { Link } from "react-router"
import Navbar from "./navbar"

const Header = ({page}) => {
  return (
    <div className="w-full items-center mb-4 py-2 border-b-2 border-0">
        <div className="flex flex-row justify-center md:justify-between">
            <Link to={'/'}>
                <img src="\src\assets\skillsphere.png" alt="SkillSphere Logo" className="max-h-16 mx-auto pl-4"/>
            </Link>
            <div className="hidden md:flex md:mr-6">
                <Navbar page = {page}/>
            </div>
        </div>
    </div>
  )
}

export default Header