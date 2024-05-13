import React from 'react'
import Header from './Header'
import Foot from './Foot'

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <main style={{minHeight: "80vh"}}>
                {children}
            </main>
            <Foot></Foot>
        </div>
    )
}

export default Layout