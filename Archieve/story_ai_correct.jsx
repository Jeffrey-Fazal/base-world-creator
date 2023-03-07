export function Story({ data = "loading" }) {
    let content;
    if (data === "loading") {
        content = (
            <div className="loading">
                <p>We think that stories come from the imagination. Have you ever day dreamt of a world, but weren't able to share it?</p>
                <p>Everyone has the ability to image, but few can make novels, write plays or create games.</p>
                <p>This is an experiment, in telling stories and we welcome our creators share theirs</p>
            </div>
        );
    } else if (data === "live") {
        content = (
            <p>Live data appears here</p>
        );
    }
    return (
        <>
            <div>
                <h1>Once Upon a time...</h1>
            </div>
            {content}
        </>
    );
}
