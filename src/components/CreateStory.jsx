import { useState } from "react";

export function CreateStory() {
  const [story, setStory] = useState("");
  const [stories, setStories] = useState([]);
  const [showStories, setShowStories] = useState(false);

  const handleListStories = () => {
    setShowStories(true);
  };

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
      </div>

      {/* <div>
        <button className="btn btn-link" onClick={handleListStories}>
          List Stories
        </button>
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
      </div> */}
    </div>
  );
}
