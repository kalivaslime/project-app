import { NextApiRequest, NextApiResponse } from 'next'
import { validateJWT } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await validateJWT(
    req.cookies[process.env.COOKIE_NAME || 'project_app']
  )

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  })

  res.status(200).json({ success: true })
}
