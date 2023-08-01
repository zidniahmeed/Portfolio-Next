import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-beetwn'>Navbar
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>about</Link>
                <Link href='/projects'>Project</Link>
                <Link href='/articles'>Articles</Link>
            </nav>
            <h2>logo</h2>
            <nav>
                <Link href='/' target=''>t</Link>
                <Link href='/' target=''>t</Link>
                <Link href='/' target=''>t</Link>
                <Link href='/' target=''>t</Link>
                <Link href='/' target=''>t</Link>
            </nav>
        </header>

    )
}

export default Navbar