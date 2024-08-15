import React from 'react'

export default function Footer() {
  return (
    <footer>
        <p>&copy; Established{(new Date('26-10-2009').getFullYear())} -{(new Date().getFullYear())} </p>
    </footer>
  )
}
