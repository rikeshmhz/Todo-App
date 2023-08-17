import React, { useState } from 'react'
import './style.css'
const Todos = () => {
    const [userInput, setInput] = useState('')
    const [item, setItem] = useState([])
    const addItem = () => {
        if (!userInput) {

        } else {
            setItem([...item, userInput])
            setInput('')
        }
    }
    const deleteItem=(id)=>{
        const update=item.filter((v, x)=>{
            return x!=id
        })
        setItem(update)
    }
    return (
        <>
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="todolist not-done">
                            <h1>Todo App</h1>
                            <input type="text" className="form-control add-todo" placeholder="Add todo" value={userInput} onChange={(e) =>
                                setInput(e.target.value)
                            } />
                            <button id="checkAll" className="btn btn-success" onClick={addItem}>ADD</button>
                            <hr />
                            {
                                item.map((v, x) => {
                                    return (
                                        <ul id="sortable" className="list-unstyled">
                                            <li className="ui-state-default">
                                                <div className="checkbox ms-2" key={x}>
                                                    <i class="bi bi-check-circle-fill me-4 fs-3 custom-check"  onClick={()=>deleteItem(x)}></i>
                                                    <span>{v}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos