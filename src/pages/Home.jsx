// Main website: Home in navbar
// <Route path="/" element={<Home />} />

import {NavLink} from 'react-router-dom';

import {Dice} from "../components/HomeComponents/Dice";
import {Intro} from "../components/HomeComponents/Intro";
import {Story} from "../components/StoryBoard";

export function Home() {
    return (
        <>
            <div className="content-center flex flex-col">
                <div><h1 className="text-3xl font-bold underline">Welcome to the Home World</h1></div>
                <div><Story/></div>
                <div><Dice/></div>
                <div><Intro/></div>
            </div>
            <div className="content-center btn-group">
                <NavLink to="/login">
                    <button className="btn">Login</button>
                </NavLink>
                <NavLink to="/signup">
                    <button className="btn">Join</button>
                </NavLink>

            </div>

            <div className="flex items-center  flex-col ...">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>

            <div className="flex items-center justify-center h-screen">

                <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                    Centered Content
                </div>
                <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                    Centered Content
                </div>
                <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                    Centered Content
                </div>
            </div>


            <div className="flex justify-center bg-gray-100">
                <div className="text-gray-800 text-center bg-gray-300 px-4 py-2 m-2">1</div>
                <div className="text-gray-800 text-center bg-gray-300 px-4 py-2 m-2">2</div>
                <div className="text-gray-800 text-center bg-gray-300 px-4 py-2 m-2">3</div>
            </div>

            {/* Toast Starts */}
            <div className="toast">
                <div className="alert alert-info">
                    <div>
                        <span>Your in the que to <br/>join adventurarr...</span>
                    </div>
                </div>
            </div>
            {/* Toast Ends */}
        </>
    )
}