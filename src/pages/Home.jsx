import { Story } from "./components/StoryBoard";

export function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome to the homeworld</h1>
            <Story />
            {/* Toast Starts */}
            <div className="toast">
                <div className="alert alert-info">
                    <div>
                        <span>Your in the que to <br />join adventurarr...</span>
                    </div>
                </div>
            </div>
            {/* Toast Ends */}
        </div>
    )
}