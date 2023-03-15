// Profile page, lets users customise their account (avatar, custom files and note?)
// <Route path="/profile" element={<Profile />} />

export function Profile() {
    return (<div>
            <h1>Your profile...</h1>

            <h2>Avatar</h2>

            <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-3xl">P1</span>
                </div>
            </div>

            <h3>Update Avatar</h3>
            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"/>

            <h2>Details</h2>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Name" className="input input-bordered"/>
                    <button className="btn btn-square">Update</button>
                </div>
            </div>

            <h2>Take some notes</h2>
            <textarea className="textarea textarea-info" placeholder="Write a personal note, your ideas etc"></textarea>
            <button className="btn btn-info">Save Notes</button>
        </div>)
}