import React from 'react'
import Feed from './LineItem'

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <>
      {(items.length) ? (
      <ul>
        {items.map(item => (
          <Feed 
            item={item} 
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      ) : (
        <p>List is Empty</p>
      )}

    </>
  )
}

export default Content