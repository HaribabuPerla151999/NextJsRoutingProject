import React from 'react'
import Link from 'next/link'
import classes from "./mainHeader.module.css"
function mainHeader() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href="/">Hari Events</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                  <Link href="/events">Browser All Events</Link>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default mainHeader