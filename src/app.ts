import express, {Request, Response} from 'express';

type Book = {
    id: number;
    authors: string | string[];
    title: string;
}

let books: Book[] = [
    {id: 1, authors: 'Jonathan Haidt', title: 'Coddling of the American Mind'},
    {id: 2, authors: ['Dan Heath', 'Chip Heath'], title: 'Switch: How to change when change is hard'},
    {id: 3, authors: 'Kathy Sierra', title: 'Badass: Making users awesome'},
    {id: 4, authors: 'Daniel Kahneman', title: 'Thinking fast, thinking slow'},
    {id: 5, authors: 'Caroline Dweck', title: 'Mindset1'},
    {id: 6, authors: 'Michael Walker', title: 'Why we sleep?'},
];

const app = express();

app.get('/books', (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.listen(3000, () => console.log('app listening'));