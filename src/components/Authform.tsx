'use client'
import Link from 'next/link'
import Input from './Input'
import Button from './Button'
import Card from './Card'
import { useRouter } from 'next/navigation'
import { register, signin } from '@/lib/api'
import { useState } from 'react'

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create an account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
}
const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome back',
  subheader: 'Sign in to your account',
  buttonText: 'Sign in',
}

const initial = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}

const Authform = ({ mode }: { mode: 'register' | 'signin' }) => {
  const [form, setForm] = useState(initial)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (mode === 'register') {
        await register(form)
      } else {
        await signin(form)
      }
      router.replace('/home')
    } catch (err) {
      console.error(err)
    } finally {
      setForm(initial)
    }
  }

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <Card>
      <div className='w-full'>
        <div className='text-center'>
          <h2 className='text-3xl mb-2'>{content.header}</h2>
          <p className='tex-lg text-black/25'>{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className='py-10 w-full'>
          {mode === 'register' && (
            <div className='flex mb-8 justify-between'>
              <div className='pr-2'>
                <div className='text-lg mb-4 ml-2 text-black/50'>
                  First Name
                </div>
                <Input
                  required
                  placeholder='First Name'
                  value={form.firstName}
                  className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full'
                  onChange={e =>
                    setForm(s => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className='pl-2'>
                <div className='text-lg mb-4 ml-2 text-black/50'>Last Name</div>
                <Input
                  required
                  placeholder='Last Name'
                  value={form.lastName}
                  className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full'
                  onChange={e =>
                    setForm(s => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className='mb-8'>
            <div className='text-lg mb-4 ml-2 text-black/50'>Email</div>
            <Input
              required
              type='email'
              placeholder='Email'
              value={form.email}
              className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full'
              onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
            />
          </div>
          <div className='mb-8'>
            <div className='text-lg mb-4 ml-2 text-black/50'>Password</div>
            <Input
              required
              value={form.password}
              type='password'
              placeholder='Password'
              className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full'
              onChange={e => setForm(s => ({ ...s, password: e.target.value }))}
            />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className='text-blue-600 font-bold'>
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              <Button type='submit' intent='secondary'>
                {content.buttonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  )
}

export default Authform
