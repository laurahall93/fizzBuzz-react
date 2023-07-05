interface PageFooterProps {
    author:string;
    postDates:{ month: string; year: number};
}

function FooterEntry(props: PageFooterProps): JSX.Element {
    return (
        <section>
            <h3>{props.author}</h3>
            <p>{props.postDates.month}{props.postDates.year}</p>
        </section>
    )
}



export default FooterEntry;