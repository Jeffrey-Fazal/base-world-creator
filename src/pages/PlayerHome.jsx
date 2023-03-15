// Player page (individual to each player)
// <Route path="/player" element={<PlayerHome />} />

import {CharacterOverview} from "../components/CharacterOverview";

export function PlayerHome() {
    return (
        <>
            <div>
                <h1>Greetings Players and Creators</h1>
                <br/>
                <CharacterOverview/>
            </div>
        </>
    )
}