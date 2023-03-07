// Player page (individual to each player)
// <Route path="/player" element={<PlayerHome />} />

import { CharacterOverview } from "../components/CharacterOverview";

export function PlayerHome() {
    return(
        <>
        <div>
            <h1>Greetings Player</h1>
            <br />
            <h2>Characters</h2>
            <CharacterOverview />
        </div>
        </>
    )
}