import { NextApiRequest, NextApiResponse } from 'next';
import { Content } from '../../../utils/types';

let contents: Content[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(contents);
      break;
    case 'POST':
      const { name, description, createat } = req.body;
      const newContent: Content = { id: Date.now(), name, description, createat };
      contents.push(newContent);
      res.status(201).json(newContent);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}