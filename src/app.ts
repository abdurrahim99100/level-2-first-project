import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const port = 3000;

// parser;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! Bangladesh');
});

var a = 10;

console.log(process.cwd());
// C:\web-project\my_typescript_project\first-project

// export app;
export default app;
