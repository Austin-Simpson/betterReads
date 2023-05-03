import { useRouter } from 'next/router';
import { promises as fs } from 'fs';
import path from 'path';

const getBooks = async () => {
  const filePath = path.join(process.cwd(), 'json', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
};

export default async function handler(req, res) {
  const { title } = req.query;
  const books = await getBooks();
  const book = books.find((book) => book.title === title);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}
