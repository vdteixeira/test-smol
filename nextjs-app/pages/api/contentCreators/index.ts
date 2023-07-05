import { NextApiRequest, NextApiResponse } from 'next'
import { ContentCreator } from '../../../utils/types'

let contentCreators: ContentCreator[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      res.status(200).json(contentCreators)
      break
    case 'POST':
      const { name, phone, email } = req.body
      const newContentCreator: ContentCreator = { id: Date.now(), name, phone, email }
      contentCreators.push(newContentCreator)
      res.status(201).json(newContentCreator)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}