import React from 'react'
import ReactDom from 'react-dom'
import './Modals.css'

export default function Modals({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='OVERLAY_STYLES' />
      <div className='MODAL_STYLES'>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}