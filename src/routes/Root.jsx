import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/InquiryForm'>Inquiry</Link></li>

            </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Copyright@2024</footer>
    </div>
  )
}

export default Root
