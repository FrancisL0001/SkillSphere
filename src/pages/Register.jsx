import { useState } from "react";
import OrSeparator from "../components/OrSeparator";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [logging, setLogging] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !name.trim() || !confirmPassword.trim()) {
            toast.error("All fields are required");
            return;
        }

        if(password !== confirmPassword){
            toast.error("Confirm Password does not match Password");
            return;
        }

        setLogging(true);
        try {
            // await api.post("/auth/register", { email, password, name });
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 2000));//Simulate network delay
            toast.success("Account created successfully!");
            navigate("/");
        } catch (error) {
            toast.error("An error occurred while creating your account. Please try again.");
            console.error("Registration error: ", error);
        }
    }

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="card w-full md:max-w-2xl md:h-fit">
            <div className="card-body">
                <Link to={"/"}>
                    <img src="public\skillsphere.png" alt="SkillSphere Logo" className="mx-auto mb-4 size-20" />
                </Link>
                <h1 className="card-title text-2xl md:text-3xl text-center mx-auto font-bold mb-4">Create your Account</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Full Name</span>
                        </label>
                        <input type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />     
                    </div>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Email</span>
                        </label>
                        <input type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />     
                    </div>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Password</span>
                        </label>
                        <input type="password"
                            placeholder="Create a password"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />    
                    </div>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Confirm Password</span>
                        </label>
                        <input type="password"
                            placeholder="Confirm your password"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />    
                    </div>
                    <div className="card-actions justify-center mx-auto">
                        <button type="submit" className={`btn btn-neutral rounded-lg font-bold w-full sm:max-w-sm ${logging ? 'btn-disabled' : ''}`}>
                            {logging? (
                                <div>
                                    <span className="loading loading-spinner loading-xs text-blue-500"></span>
                                    Creating account...
                                </div>
                            ) : "Create Account" }
                        </button>
                    </div>
                </form>
                <OrSeparator/>
                <button className="btn mx-auto bg-white border border-solid rounded-lg w-full sm:max-w-sm mb-4 items-center gap-2" onClick={handleRegister}>
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google logo"
                        className="size-5"
                    />
                    Sign up with Google
                </button>
                <p className="text-sm text-center text-slate-500">
                    Already have an account? <a href="/login" className="text-blue-500 font-semibold hover:underline hover:text-base-300"> Log in </a>                        
                </p>
                {/* <Link to={"/change-password"} className="text-blue-500 font-semibold hover:underline hover:text-base-300 text-sm text-center mt-2">
                    Forgot Password?
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Register