import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonList = ({ title, onClick }) => {

  return (
    <div>
     <Button variant="primary" onClick={onClick}>{title}</Button>{' '}
    </div>
  )
}

export default ButtonList