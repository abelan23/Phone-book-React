import React from 'react';
import ToDoItem from './ToDoItem';

const styles = {
    toDoListWrapper: {
        width: '33%',
        border: '2px solid blue',
        background: 'light orange',
        padding: '50px 35px',
        overflow: 'scroll'
    }
}

const toDoList = () => <div style={styles.toDoListWrapper}><ToDoItem /></div>

export default toDoList;