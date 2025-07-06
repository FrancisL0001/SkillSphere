import { ArrowLeft, CircleQuestionMarkIcon, Mail } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgotPassword = () => {

    const [help, setHelp] = useState(false);
    const [email, setEmail] = useState('');

    const handleHelp = (e) => {
        e.preventDefault();

        if(help){
            setHelp(false);
            return;
        } else {
            setHelp(true);
            return;
        }
    };

    const navigate = useNavigate();

    const sendToast = async (e) => {
        e.preventDefault();
        toast.error("Impossible to contact support at the moment. Please try again later.");
        console.log("It works!");
        navigate("/");
        return;
    }

  return (
    <div className="flex flex-col items-center justify-center max-w-80 mx-auto pt-4 md:max-w-2xl h-fit">
        <header className="flex justify-between w-full mb-6 relative">
            <ArrowLeft className="size-6 text-base-content" onClick={() => window.history.back()} />
            <CircleQuestionMarkIcon className="size-6 text-base-content text-left" onClick={handleHelp} /> {/* () => alert("Help section is not implemented yet") */}
            { help && (
                <div className="absolute top-8 right-0 bg-base-200 p-4 rounded-lg shadow-lg w-80 z-20">
                    <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
                    <p className="text-sm text-gray-500 mb-2">To reset your password, submit the email to which your account is linked below. You will receive an email containing a link to reset your password.</p>
                    <p className="text-sm text-gray-500">If you don't receive the email, please check your spam folder or <a onClick={sendToast} className="text-blue-400 hover:underline hover:text-base-300">contact support</a>.</p>
                </div>
            )}
        </header>
        <main className="mx-auto">
            <h1 className="text-3xl font-bold mb-4">Forgot Password?</h1>
            <p className="text-wrap w-full mb-4 text-gray-500">Enter the email associated with your accout and we'll send an email with instructions to reset your password.</p>
            <form onSubmit={() => alert("Recover password not yet set up!")} className="relative">
                <Mail className="absolute size-5 text-gray-500 left-3.5 top-2.5 z-10" />
                <input type="email"
                    placeholder="Enter your email"
                    className="input border-none bg-base-300 w-full rounded-lg mb-5 pl-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                { email && (
                    <button type="submit" className="btn btn-active max-w-80 rounded-full">
                       Get recovery email 
                    </button>
                )}
            </form>
        </main>
    </div>
  )
}

export default ForgotPassword