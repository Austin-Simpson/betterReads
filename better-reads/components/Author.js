import styled from 'styled-components'

export default function Author({ author, books }) {
  return (
    <AuthorWrapper>
      <h1>{author}</h1>
      <ul>
        {books.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </AuthorWrapper>
  );
}

const AuthorWrapper = styled.article`
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  min-width: fit-content;
  flex: 1 1 300px;
`;
