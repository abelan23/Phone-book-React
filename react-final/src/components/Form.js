import React from 'react';
import { connect } from 'react-redux';

const styles = {
    formWrapper: {
        width:'66%',
        height: '120vh',
        border: '2px solid green',
        background: 'teal',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerForm: {
        padding: '100',
        border: '2px solid blue',
        background: 'light orange'
    }
}

class Form extends Component {
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }

    componentWillReceiveProps(newProps) {
        if(this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.redirectTo !== prevProps.redirectTO) {
            this.props.history.push(this.props.redirectTo);
        }
    }

    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }

    render () {
        const {listId} = this.props.match.params,
        {name, email, onInputChange, onUpdate, onDelete, onAdd} = this.props;
        return (
        
            <form style={styles.formWrapper} onSubmit={this.submit}> 
                <div style={styles.innerForm}>
                    <div>
                        <label>Name: <input
                            type='text'
                            name='name' 
                            value={name}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Email: <input
                            type='text'
                            name='email'
                            value={email}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Phone: <input
                            type='number'
                            name='phone' /></label>
                        <br />
                    </div>
                        <input type='button' value='Update' onClick={() => onUpdate(listId)} />
                        <input type='button' value='Delete' onClick={() => onDelete(listId)} />
                        <input type='button' value='Add New Contact' onClick={onAdd} />
                    <div>

                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        name: state.name,
        email: state.email,
        redirectTO: state.redirectTO
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) =>dispatch({type: 'CAPTURE_INPUT', payload: {name, value} }),
        onUpdate: (id) =>dispatch({type: 'UPDATE', id}),
        onDelete: (id) =>dispatch({type: 'DELETE', id}),
        onAdd: (id) =>dispatch({type: 'ADD', id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)