// Main website: Home in navbar
// <Route path="/" element={<Home />} />

import { NavLink } from 'react-router-dom';

import { Dice } from "../components/HomeComponents/Dice";
import { Intro } from "../components/HomeComponents/Intro";
import { Story } from "../components/StoryBoard";

export function Home() {
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline">Welcome to the homeworld</h1>
            <Story />
            <Dice />
            <Intro />
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
        <div className="btn-group">
        <NavLink to="/login">
            <button className="btn">Login</button>
        </NavLink>
        <NavLink to="/signup">
            <button className="btn">Join</button>
        </NavLink>

        </div>
        </>
    )
}