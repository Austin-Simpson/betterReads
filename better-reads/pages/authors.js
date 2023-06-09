import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Card,
  Wrapper,
} from '../components/sharedstyles'
import useSWR from 'swr'
import AuthorList from '../components/AuthorList'


// Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Authors() {
  // Set up SWR to run the fetcher function when calling "/api/authors"
  // There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/authors', fetcher);

  // Handle the error state
  if (error) {
    return <Main>Failed to load authors</Main>;
  }
  // Handle the loading state
  if (!data) {
    return <Main>Loading authors...</Main>;
  }
  // Handle the ready state
  if (data.length === 0) {
    return <Main>No authors found</Main>;
  }

  return (
    <Wrapper>
      <Container>
        <Head>
          <title>Authors!</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Title>Better Reads</Title>
        {/* Page links */}
        <Card>
          <Description>
            <CodeTag>
              <a href="/about">About</a>
            </CodeTag>
            <CodeTag>
              <a href="/">Books</a>
            </CodeTag>
          </Description>
        </Card>
        
        <Main>
          {/* Add a console log to debug data */}
          {console.log(data)}
          <AuthorList authors={data} />
        </Main>
      </Container>
    </Wrapper>
  );
}
