import type { NextApiRequest, NextApiResponse } from 'next'
import { Event, keyEvents } from '@/database/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
  res.status(200).json(keyEvents)
}