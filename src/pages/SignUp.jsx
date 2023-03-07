// Placeholder page for signup
// <Route path="/signup" element={<SignUp />} />

export function SignUp() {
    return (
        <>
            <div>
                <h1>Join us</h1>
                <p>We want you!</p>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>

            <button className="btn btn-primary">Join now</button>

        </>
    )
}