import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Feed = ({item, handleCheck, handleDelete}) => {
  return (
    <li>
        <input 
            type="checkbox"
            checked={item.checked}
            id={item.id}
            onChange={() => handleCheck(item.id)}
        />
        <label 
          htmlFor={item.id}
          style={(item.checked) ? {textDecoration: 'line-through'} : null}
        >{item.item}</label>
        <FaTrashAlt 
          role='button'
          className='btn'
          tabIndex='0'
          onClick={() => handleDelete(item.id)}
        />
        {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
    </li>
  )
}

export default Feed