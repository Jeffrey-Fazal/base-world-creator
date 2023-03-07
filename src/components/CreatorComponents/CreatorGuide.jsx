// Component for guiding creator guides
//
export function CreatorGuide() {
    return(
        <>
            <h2>Campaign</h2>
                <input type="text" placeholder="World Name" className="input input-bordered input-primary w-full max-w-xs" />
            <h2>Party</h2>
                <input type="text" placeholder="Character" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Character" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Character" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Character" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-ghost">Add player</button>
                <button className="btn btn-ghost">Remove player</button>
            <h2>Story & Storyline</h2>
            <textarea placeholder="Add your story" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <h2>Setting</h2>
            <textarea placeholder="Notes on the setting" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <h2>NPC</h2>
                <input type="text" placeholder="NPC" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="NPC" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="NPC" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="NPC" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-ghost">Add NPC</button>
                <button className="btn btn-ghost">Remove NPC</button>
            <h2>Encounters</h2>
                <p>save and tick off Encounters</p>
            <h2>Maps</h2>
                <p>file upload and link to display</p>
            <h2>Loot</h2>
                <p>nice way to save and delete loot</p>
            <h2>Rules</h2>
                <textarea placeholder="Your world, your rules" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <br />
            <button className="btn btn-accent">Save</button>

        </>
    )
}