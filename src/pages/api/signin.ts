import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { comparePasswords, createJWT } from '@/lib/auth'
import { serialize } from 'cookie'

async function signin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!user) {
    res.status(401).json({ error: 'Invalid email' })
    return
  }

  const isUser = await comparePasswords(password, user.password)

  if (!isUser) {
    res.status(401).json({ error: 'Invalid password' })
    return
  }

  const jwt = await createJWT(user)

  res.setHeader(
    'Set-Cookie',
    serialize(process.env.COOKIE_NAME || 'project-app', jwt, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
  )

  res.status(200).json({ user })
}

export default signin
