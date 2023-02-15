import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { createJWT, hashPassword } from '@/lib/auth'
import { serialize } from 'cookie'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password, firstName, lastName } = req.body

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const user = await db.user.create({
    data: {
      email,
      password: await hashPassword(password),
      firstName,
      lastName,
    },
  })

  const jwt = await createJWT(user)

  const cookieName = process.env.COOKIE_NAME || 'project-app'

  res.setHeader(
    'Set-Cookie',
    serialize(cookieName, jwt, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  )

  res.status(201).json({ user })
}
