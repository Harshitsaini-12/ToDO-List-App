import { ListItemText,List,ListItem, ListItemAvatar, Button} from '@material-ui/core'
import React from 'react'
import './Todo.css';
import db from './firebase';
import  DeleteForeverIcon  from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className="to_dolist">
            <ListItem>
            <ListItemAvatar>

            </ListItemAvatar>
                <ListItemText primary="Todo..." secondary={props.todo.todo}/>
            </ListItem>
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()}/>
           
           
        </List>
    )
}

export default Todo
