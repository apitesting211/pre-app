import { useState } from "react"

const Todos = (()=> {

    const [todos, setTodos] = useState(()=>
    [
        {
            id:1,
            text: "Todo 1"
        },
        {
            id:2,
            text: "Todo 2"
        },
        {
            id:3,
            text: "Todo 3"
        }
    ]
    )

    const deleteTodoItem = (itemId:number)=> {
        setTodos(todos
            .filter(currentItem =>{ return currentItem.id != itemId})
        )}

    return(
        <ul className="bg-orange-400 text-white">
            {
                todos.map((todoItem)=>{
                    return <li key={todoItem.id} onClick={() => {
                        deleteTodoItem(todoItem.id);
                    }}>{todoItem.text}</li>
                })
            }            
        </ul>
    );

})

export default Todos