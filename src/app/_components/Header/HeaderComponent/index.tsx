
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import Image from 'next/image'


const HeaderComponent = ({header}: {header: Header}) => {
  return (
    <nav>
        <Gutter>
    <Link href="/">
      <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
    </Link>
  </Gutter>
</nav>
  )
}

export default HeaderComponent