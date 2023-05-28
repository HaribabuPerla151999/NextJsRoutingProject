import React from 'react'
import Link from 'next/link'

function ErrorPage() {
  return (
    <>
    <h1>OOPS! Page Not Found</h1>
    <Link href="/">Go to Home</Link>
    </>
  )
}

export default ErrorPage