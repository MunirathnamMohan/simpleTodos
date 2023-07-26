// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteItem, key} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="train">
      <p className="para">{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
