import React from 'react'

const Footer = ({length}) => {
    const year = new Date()

    return (
        <footer>
            <p>{length} list {(length<=1) ? 'item' : 'items'}</p>
            <p>Copyrights &copy; {year.getFullYear()}</p>
        </footer>
    )
}

export default Footer