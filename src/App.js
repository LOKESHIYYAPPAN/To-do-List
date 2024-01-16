import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItems from './AddItems';
import SearchForm from './SearchForm';

function App() {
  const [addItem, setAddItem] = useState('')
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('listItem')) || [])
  },[])

  const handleCheck = (id) => {
    const newItem = items.map(item => item.id===id ? {...item, checked: !item.checked} : item)
    setItems(newItem)

    localStorage.setItem('listItem',JSON.stringify(newItem))
  }

  const handleDelete =  (id) =>{
    const newItem = items.filter(item => item.id!==id)
    setItems(newItem)

    localStorage.setItem('listItem',JSON.stringify(newItem))
  }

  const handleAdd = (e) => {  
    e.preventDefault()
    addItems(addItem)
    setAddItem('')
  }

  const addItems = (item) =>{
    const id = (items.length) ? items[items.length-1].id + 1 : 1
    const addNewItem = {id, checked: false, item}
    const newItem = [...items, addNewItem]
    setItems(newItem)
    localStorage.setItem('listItem',JSON.stringify(newItem))

  }

  return (
    <div className="App">
      <Header />
      <AddItems 
        addItem={addItem}
        setAddItem={setAddItem}
        handleAdd={handleAdd}
      />
      <SearchForm 
        search={search}
        setSearch={setSearch}
      />
      <main>
          <Content 
            items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
      </main>
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;
