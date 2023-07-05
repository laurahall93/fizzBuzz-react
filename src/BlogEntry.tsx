interface BlogEntryProps{
    entries: BlogEntryData[];
}

export interface BlogEntryData {
    title: string;
    name: string;
    country: string;
    image: string;
    location: string;
    description: string;
}



const BlogEntry = (props: BlogEntryProps): JSX.Element => {
    const {entries} = props;
    return(
        <div>
            {entries.map((entry, index) => (
            <section className="blog-entry" key={index}>
                <h2>{entry.title}</h2>
                <h3>{entry.name}</h3>
                <p>{entry.country}</p>
                <img className="blog-img"src={entry.image} alt="location"/>
                <a href={entry.location} target="_blank" rel="noreferrer"  >
                Click for the location!
                </a>
                <p>{entry.description}</p>

            </section>
        ))}
        </div>
    );
}

export default BlogEntry;