// Where creators can create their worlds
//  via /creator route
// backup at CreatorHome_cp

import { CreateEncounters } from "../components/CreateEncounters";
import { CreateItemsLoot } from "../components/CreateItemsLoot";
import { CreateParty } from "../components/CreateParty";
import { CreateSetting } from "../components/CreateSetting";
import { CreateStory } from "../components/CreateStory";
import { NewStoryName } from "../components/NewStoryName";
import { NPC } from "../components/NPC";

export function CreatorHome() {
    return (
        <>
            <div>
                <h1>Time to create your world</h1>
                <p>your world needs details...</p>
            </div>
            <NewStoryName />
            <CreateStory />
            <CreateParty />
            <NPC />
            <CreateSetting />
            <CreateEncounters />
            <CreateItemsLoot />

            <div>
                <ul className="steps">
                    <li className="step step-primary">Create Name</li>
                    <li className="step">Summaries Story</li>
                    <li className="step">Add Characters</li>
                    <li className="step">Add Details</li>
                </ul>
            </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Save</button>
        </>
    )
}