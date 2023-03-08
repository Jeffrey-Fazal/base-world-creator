// Creates the story name
// Keeps track of the document ID so other stuff can be done
export function NewStoryName() {
    return (
        <div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>New Story Name</h2>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-primary">Button</button>
        </div>
        )
}