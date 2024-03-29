import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    listWrapper: {
        border: '2px solid blue',
        background: 'light orange',
        padding: '10',
        overflow: 'hidden'
    },
    bold : {
        fontweight: '900'
    }
}

const toDoItem = props => {
    const list = props.myList.map(item =>{
        return (
            <Link to={'${item.id}'} key={item.id} style={{textDecoration: 'none'}}>
                <div style={styles.listWrapper}>
                    <p><span style={styles.bold}>Title: </span>{item.title}</p>
                    <p><span style={styles.bold}>Task: </span>{item.task}</p>
                </div>
            </Link>
        );
    });
    return <div>{list}</div>
}

const mapStateToProps =state => {
      return {
          myList: state.list
      }
}
   

export default connect(mapStateToProps, null)(toDoItem);