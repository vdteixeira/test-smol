import { NextApiRequest, NextApiResponse } from 'next';
import { ContentCreator } from '../../../utils/types';

let contentCreators: ContentCreator[] = [
  // This is where the content creators data would be stored in a real application
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      const contentCreator = contentCreators.find(creator => creator.id === id);
      if (!contentCreator) {
        res.status(404).json({ message: 'Content Creator not found.' });
        return;
      }
      res.status(200).json(contentCreator);
      break;
    case 'PUT':
      const index = contentCreators.findIndex(creator => creator.id === id);
      if (index === -1) {
        res.status(404).json({ message: 'Content Creator not found.' });
        return;
      }
      const updatedContentCreator: ContentCreator = { ...contentCreators[index], ...req.body };
      contentCreators[index] = updatedContentCreator;
      res.status(200).json(updatedContentCreator);
      break;
    case 'DELETE':
      contentCreators = contentCreators.filter(creator => creator.id !== id);
      res.status(200).json({ message: 'Content Creator deleted.' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}