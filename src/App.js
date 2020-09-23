import React, {useState, useEffect, useMemo, useCallback} from "react";
import List from './List';

const initialUsers = [
  {id: 1, name: 'Luis'},
  {id: 2, name: 'Jesús'}
]

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(text);
  }

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([
      ...users,
      newUser
    ]);
  }

  const filteredUsers = useMemo(()=> 
    users.filter(user=>{
      //console.log('filter process')
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  ,[search, users]);

  const printUsers = useCallback(() => {
    console.log('changed users', users)
  }, [users])

  useEffect(()=>{
    //console.log('App render');
  });

  useEffect(()=>{
    printUsers();
  }, [users, printUsers]);



  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
      <button onClick={handleAdd}>
        Add
      </button>
      <List 
        users={filteredUsers}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
