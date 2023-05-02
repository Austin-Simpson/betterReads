import styled from "styled-components"
import Book from "./Book"
export default function BookList({ books }) {
    return <Wrapper>
        { books.map(b => <Book title={b.title} author={b.author} link={b.link} pages={b.pages} />)}
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    
`