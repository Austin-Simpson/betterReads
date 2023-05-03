import styled from "styled-components"
import Author from "./Author"

export default function AuthorList({ authors }) {
  // Create a map of authors to their books
  const authorToBooks = new Map();
  for (const author of authors) {
    // If the author has not been added to the map, add them
    if (!authorToBooks.has(author.author)) {
      authorToBooks.set(author.author, []);
    }
    // Add the book to the author's list of books
    authorToBooks.get(author.author).push({
      title: author.title,
      link: author.link,
      pages: author.pages,
    });
  }

  // Create a list of unique authors
  const uniqueAuthors = [...authorToBooks.keys()];

  return (
    <Wrapper>
      {uniqueAuthors.map((author) => (
        <Author key={author} author={author} books={authorToBooks.get(author)} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  // fill width
  justify-content: space-evenly;
`;
