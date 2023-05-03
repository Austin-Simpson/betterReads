import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  }
  
export default function BookDetail() {
  const router = useRouter() // gets access to our router object
  const {title} = router.query // gives access to the end of the url
  const { data, error } = useSWR(`/api/books/${title}`, fetcher)

  // if api encounters an error, this will render
  if (error) {
    return <Main>
      Error!
    </Main>
  }

  // if this data has not been resolved yet, this renders
  if (!data) {
    return <Main>
      loading...
    </Main>
  }

  // if data comes back as expected, this renders
  const { author, country, imageLink, language, link, pages, title: bookTitle, year } = data[0]
  return (
    <Container>
      <Head>
        <title>{bookTitle} | Better Reads</title>
        <meta name="description" content={`Details for the book: ${bookTitle}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>{bookTitle}</h1>
        <p>Author: {author}</p>
        <p>Country: {country}</p>
        <p>Language: {language}</p>
        <p>Number of pages: {pages}</p>
        <p>Year published: {year}</p>
        <p>Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
      </Main>
    </Container>
  )
}
