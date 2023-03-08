// Creates settings (summary)


export function CreateSetting() {
    return (
      <div className="border-solid border-accent border-2 rounded-md p-4">
        <h2>Create Setting</h2>
        <p>This may include background about your story and/or rules etc</p>
        <textarea className="textarea textarea-bordered" placeholder="Add Settings"></textarea>
      </div>
    );
  }