import Link from 'next/link'
import React from 'react'

export default function blog () {
  return (
    <div><h1>this is blog page</h1>
    <ul>
      <li><Link href={'/pages/blog/1'}>Blog1</Link></li>
      <li><Link href={'/pages/blog/2'}>Blog2</Link></li>
      <li><Link href={'/pages/blog/3'}>Blog3</Link></li>
    </ul>
    </div>
  )
}