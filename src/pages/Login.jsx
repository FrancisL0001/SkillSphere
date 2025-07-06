import { LockIcon } from "lucide-react"
import OrSeparator from "../components/OrSeparator"
import { Link } from "react-router";

const handleLogin = () => {

}

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="card w-full md:max-w-2xl md:h-fit">
            <div className="card-body">
                <LockIcon className="size-14 text-blue-300 mx-auto mb-5"/>
                <h1 className="card-title text-3xl text-center mx-auto font-bold">Welcome Back!</h1>
                <p className="font-sm font-semibold text-slate-500 mb-4 text-center">Login to continue your learning journey</p>
                <form onSubmit={handleLogin}>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Email</span>
                        </label>
                        <input type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            required
                        />     
                    </div>
                    <div className="form-controls">
                        <label className="label mb-1">
                            <span className="label-text text-base-content font-semibold">Password</span>
                        </label>
                        <input type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full mb-4 rounded-lg bg-base-200"
                            required
                        />    
                    </div>
                    <div className="card-actions justify-center mx-auto">
                        <button type="submit" className="btn bg-blue-100 rounded-lg font-bold w-full sm:max-w-sm">
                            Log in
                        </button>
                    </div>
                </form>
                <OrSeparator />
                <button className="btn mx-auto bg-white border border-solid rounded-lg w-full sm:max-w-sm mb-4 items-center gap-2" onClick={handleLogin}>
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google logo"
                        className="size-5"
                    />
                    Sign in with Google
                </button>
                <p className="text-sm text-center text-slate-500">
                    Don't have an account? <a href="/register" className="text-blue-500 font-semibold hover:underline hover:text-base-300"> Sign up </a>                        
                </p>
                <Link to={"/change-password"} className="text-blue-500 font-semibold hover:underline hover:text-base-300 text-sm text-center mt-2">
                    Forgot Password?
                </Link>
            </div>
        </div>
    </div>
  )
};

export default Login;