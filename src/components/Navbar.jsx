import { HomeIcon, MessageSquareIcon, SearchIcon, SquareMenu, User } from "lucide-react"
import { Link } from "react-router"

const Navbar = ({page}) => {/*{Login}*/
  return (
    <div className="flex flex-row gap-4 justify-between px-6 max-h-10 my-auto text-base-content mx-auto">
        <div className="flex md:hidden flex-col justify-between items-center">
            <Link to={"/"}>
                { page === "Home" && <HomeIcon className="fill-base-content"/> }
                { page != "Home" && <HomeIcon/>}
            </Link>
            <p className="text-xs font-bold text-center">Home</p>
        </div>
        <div className="flex flex-col justify-between items-center">
            <Link to={"/explore"}>
                { page === "Explore" && <SearchIcon className="fill-base-content"/> }
                { page !== "Explore" && <SearchIcon/> }
            </Link>
            <p className="text-xs font-bold text-center">Explore</p>
        </div>
        <div className="flex flex-col justify-between items-center">
            <SquareMenu/>
            <p className="text-xs font-bold text-center">Dashboard</p>
        </div>
        <div className="flex flex-col justify-between items-center">
            <MessageSquareIcon/>
            <p className="text-xs font-bold text-center">Messages</p>
        </div>
        <div className="flex flex-col justify-between items-center">
            <User/>
            <p className="text-xs font-bold text-center">Profile</p>
        </div>
    </div>
  )
}

export default Navbar