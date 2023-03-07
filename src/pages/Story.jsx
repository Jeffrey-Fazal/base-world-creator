// // Story page: Story in navbar
// <Route path="/story" element={<Story />} />

export function Story() {
    return (
        <>
            <div>
                <h1>Once Upon a time...</h1>
                <br />
            </div>
                <div>
                    <p>We think that stories come from the imagination. Have you ever day dreamt of a world, but weren't able to share it?</p>
                    <p>Everyone has the ability to image, but few can make novels, write plays or create games.</p>
                    <p>This is an experiment, in telling stories and we welcome our creators share theirs</p>
                </div>
                <br />
            {/* Todo: Add stories firebase collections */}
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                Live story by Creator
                </div>
            </div>
        </>
    )
}