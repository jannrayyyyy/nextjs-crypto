import React, { ReactNode, FC } from 'react'
import NavBar from './NavBar'

interface Props {
  children?: ReactNode
}
const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <div className="bg-black text-white p-4">
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
