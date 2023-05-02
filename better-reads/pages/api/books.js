// this is what gets run when you go to the url: /api/books
// every file in the api subdirectory gets deployed as its own serverless function

import path from 'path'
import { promises as fs} from 'fs'

// write functions
// can be named whatever, usually handler is standard
// takes two parameters: request and response
export default async function handler(req, res){
    // get the path to the json directory
    // cwd: current working directory
    // get the current working directory on the process wherever this app is running
    // wherever the current directory is runnign /json is the path where it's located
    const jsonDirectory = path.join(process.cwd(), 'json');
    // read in the contents from our json file: add name of file to pathname
    // then specify text encoding you want to read it in
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    // parse it into json instead of the default string
    const data = JSON.parse(fileContents);
    // send all of the file's contents as JSON to the client
    // response's status code: send it the data file
    res.status(200).json(data)
    
}