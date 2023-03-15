import {useState} from "react";

export function CreateSetting({onSave}) {
    const [setting, setSetting] = useState("");

    const handleSettingChange = (event) => {
        setSetting(event.target.value);
        onSave(event.target.value);
    };

    return (<div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>Create Setting</h2>
            <p>This may include background about your story and/or rules etc</p>
            <textarea
                className="textarea textarea-bordered"
                placeholder="Add Settings"
                value={setting}
                onChange={handleSettingChange}
            ></textarea>
        </div>);
}
