export function Profile() {
    return(
        <div>
            <h1>Your profile...</h1>
            <h2>Take some notes</h2>
            <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
            <button className="btn btn-info">Save Notes</button>
        </div>
    )
}