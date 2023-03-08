// Creates and List Stories (summary)
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "/home/jeffrey/SEIc60/projects/Project3/root/base/src/firebase.js";

export function CreateStory() {
    const [story, setStory] = useState("");
    const [stories, setStories] = useState([]);
    const [showStories, setShowStories] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSave = async () => {
      try {
        const docRef = await addDoc(collection(db, "Stories"), { content: story });
        console.log("Document written with ID: ", docRef.id);
        setStory("");
      } catch (e) {
        console.error("Error adding document: ", e);
        setErrorMessage("Failed to save the story. Please try again later.");
      }
    };
  
    const handleListStories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Stories"));
        const stories = querySnapshot.docs.map((doc) => doc.data().content);
        setStories(stories);
        setShowStories(true);
      } catch (e) {
        console.error("Error getting documents: ", e);
        setErrorMessage("Failed to load stories. Please try again later.");
      }
    };
  
    useEffect(() => {
      setIsLoading(true);
      const fetchStory = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Stories"));
          const stories = querySnapshot.docs.map((doc) => doc.data().content);
          setStories(stories);
        } catch (e) {
          console.error("Error getting documents: ", e);
          setErrorMessage("Failed to load stories. Please try again later.");
        }
        setIsLoading(false);
      };
      fetchStory();
    }, []);
   
    return (
      <div className="border-solid border-accent border-2 rounded-md p-4">
        <h2>Story & Storyline</h2>
        <div>
          <textarea
            placeholder="Add your story"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
  
        <div>
          <button className="btn btn-link" onClick={handleListStories}>
            List Stories
          </button>
          {isLoading && <p>Loading stories...</p>}
          {errorMessage && <p>{errorMessage}</p>}
          {showStories && (
            <div className="flex flex-col w-full border-opacity-50">
              {stories.map((story, index) => (
                <div key={index} className="my-2 p-2 bg-gray-100 rounded-md">
                  {story}
                </div>
              ))}
              {stories.length === 0 && <p>No stories available.</p>}
            </div>
          )}
        </div>
      </div>
    );
  }