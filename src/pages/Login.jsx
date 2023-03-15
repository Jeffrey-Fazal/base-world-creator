// Login page placeholder
// <Route path="/login" element={<Login />} />
import {Link} from 'react-router-dom';

export function Login() {
    return (
        <>
            <div>
                <h1>Login now!</h1>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                <label className="label">
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                <label className="label">
                </label>
            </div>

            <Link to='/profile'>
                <button className="btn btn-primary">Join now</button>
            </Link>

        </>
    )
}