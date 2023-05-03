import styled from 'styled-components'
import Link from 'next/link'

export default function Book({ title, author, pages, link}) {
    return <BookWrapper>
        <h1> {title} </h1>
        <h2> by {author} </h2>
        <p> Number of Pages: {pages} </p>
        <p><Link href={`/api/books/${encodeURIComponent(title)}`}>Details</Link></p>
        <a href={link}>Learn More</a>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    min-width: fit-content;
    flex: 1 1 300px;
`