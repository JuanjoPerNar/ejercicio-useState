import { useState } from "react";

function App() {
    const [name, setName] = useState('Sofía')
    const [newName, setNewName] = useState('')

    function changeName(event) {
        event.preventDefault()
        if (newName !== '') {
            setName(newName)
            setNewName('')
        }
    }
    return (
        <div>
            <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick={() => setName('Bea')}>Bea</li>
                <li onClick={() => setName('Aldo')}>Aldo</li>
                <li onClick={() => setName('Yolanda')}>Yolanda</li>
            </ul>
            <form onSubmit={changeName}>
                <input 
                type="text" 
                value={newName} 
                onChange={(event) => setNewName(event.target.value) }
                placeholder="add a name" 
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default App
