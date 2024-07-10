'use client';

import AuthForm from '@/components/AuthForm';
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn
