import React from 'react'
import './TodoItem.css'
import { Checkbox } from '@material-ui/core'
import { removeTodoList } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import { GiCancel } from 'react-icons/gi'


const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='todoitem'>
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p className={done && 'todoitem--done'}>{name}</p>
            <GiCancel className='remove--btn' onClick={() => {
                dispatch(removeTodoList(id));
            }} />

        </div>
    )
}

export default TodoItem