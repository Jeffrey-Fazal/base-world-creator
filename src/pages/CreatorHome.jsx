import { useState } from "react";
import { CreateEncounters } from "../components/CreateEncounters";
import { CreateItemsLoot } from "../components/CreateItemsLoot";
import { CreateParty } from "../components/CreateParty";
import { CreateSetting } from "../components/CreateSetting";
import { CreateStory } from "../components/CreateStory";
import { NewStoryName } from "../components/NewStoryName";
import { NPC } from "../components/NPC";

import { db, collection, doc, setDoc } from "../firebase";

export function CreatorHome() {
  const [storyName, setStoryName] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [party, setParty] = useState([]);
  const [npcs, setNpcs] = useState([]);
  const [setting, setSetting] = useState("");
  const [encounters, setEncounters] = useState([]);
  const [items, setItems] = useState([]);

  const handleSave = async () => {
    const timestamp = new Date().getTime(); // Unix timestamp in milliseconds
    const storyDocRef = doc(collection(db, "stories"), `${storyName}-${timestamp}`);
    await setDoc(storyDocRef, {
      name: storyName,
      storyContent: { content: storyContent },
      party: { members: party },
      npcs: { characters: npcs },
      setting: { details: setting },
      encounters: { details: encounters },
      items: { details: items },
    });
    console.log("Document written with ID: ", storyDocRef.id);
    console.log({ storyName, storyContent, party, npcs, setting, encounters, items });
  };

  const handleNewStoryNameSave = (name) => {
    setStoryName(name);
  };

  const handleStoryChange = (newStory) => {
    setStoryContent(newStory);
  };
const handleCreatePartySave = (partyData) => {
  setParty(partyData);
};

  const handleNpcSave = (npcData) => {
    setNpcs((prevNpcs) => [...prevNpcs, npcData]);
  };

  const handleCreateSettingSave = (settingData) => {
    setSetting(settingData);
  };

  const handleEncounterSave = (encounterData) => {
    setEncounters((prevEncounters) => [...prevEncounters, encounterData]);
  };

  const handleCreateItemsLootSave = (itemData) => {
    setItems((prevItems) => [...prevItems, itemData]);
  };

  return (
    <>
      <div>
        <h1>Time to create your world</h1>
        <p>your world needs details...</p>
      </div>
      <NewStoryName onSave={handleNewStoryNameSave} />
      <CreateStory onStoryChange={handleStoryChange} />
      <CreateParty onSave={handleCreatePartySave} />
      <NPC onSave={handleNpcSave} />
      <CreateSetting onSave={handleCreateSettingSave} />
      <CreateEncounters onSave={handleEncounterSave} />
      <CreateItemsLoot onSave={handleCreateItemsLootSave} />

      <div>
        <ul className="steps">
          <li className="step step-primary">Create Name</li>
          <li className="step">Summaries Story</li>
          <li className="step">Add Characters</li>
          <li className="step">Add Details</li>
        </ul>
      </div>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleSave}>
        Save
      </button>
    </>
  );
}
