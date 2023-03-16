import { useEffect, useState } from "react";
import { getDocs, query, orderBy, collection} from "@firebase/firestore";
import {db} from "../firebase";
export function ShowStories() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            const q = query(collection(db, "stories"), orderBy("name"));
            const querySnapshot = await getDocs(q);

            const fetchedStories = [];
            querySnapshot.forEach((doc) => {
                fetchedStories.push(doc.data());
            });

            setStories(fetchedStories);
        };

        fetchStories();
    }, []);

    return (
        <div>
            {stories.map((story, index) => (
                <div key={index} className="story-container p-4 m-4 bg-white rounded shadow-md">
                    <br />
                    <h2>Story: {story.name}</h2>
                    <p>Story Content: {story.storyContent.content}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}
