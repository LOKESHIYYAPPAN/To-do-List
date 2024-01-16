import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({addItem, setAddItem, handleAdd}) => {
  const inputRef = useRef()
  return (
    <form onSubmit={handleAdd} id='form'>
        <label htmlFor="addItem">Add Item</label>
        <input 
          autoFocus
          placeholder='Add Item'
          ref={inputRef}
          type="text"
          value={addItem}
          required
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button 
            type="submit"
            onClick={() => inputRef.current.focus()}
        ><FaPlus /></button>
    </form>
  )
}

export default AddItems
