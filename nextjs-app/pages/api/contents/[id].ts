import { NextApiRequest, NextApiResponse } from 'next';
import { Content } from '../../../utils/types';

let contents: Content[] = [
  // This is where the contents would be stored in a real application
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const content = contents.find(content => content.id === id);
      if (!content) {
        res.status(404).json({ message: 'Content not found.' });
      } else {
        res.status(200).json(content);
      }
      break;
    case 'PUT':
      const index = contents.findIndex(content => content.id === id);
      if (index === -1) {
        res.status(404).json({ message: 'Content not found.' });
      } else {
        const updatedContent = { ...contents[index], ...req.body };
        contents[index] = updatedContent;
        res.status(200).json(updatedContent);
      }
      break;
    case 'DELETE':
      contents = contents.filter(content => content.id !== id);
      res.status(200).json({ message: 'Content deleted.' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}