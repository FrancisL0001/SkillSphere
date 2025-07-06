import Navbar from "./Navbar.jsx";


const Footer = ({page}) => {
  return (
    <div className="min-w-full justify-center mx-auto">
        <div className="fixed bottom-0 bg-white w-full md:hidden ">
          <Navbar page={page} />
        </div>
        <div className="hidden md:flex flex-col">
            <div className="flex flex-row justify-center gap-4">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
            </div>
            <p className="text-xs text-black text-center">&copy;2025 Because I decided </p>
        </div>
    </div>
  );
}

export default Footer;