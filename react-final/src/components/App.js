import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ContactsStyles from './styles/ContactsStyles';
import FormStyles from './styles/FormStyles';
import Form from './components/Form';

const styles = {
  bodyWrapper: {
    display: 'flex',
    height: '120vh'
  }

}

const App = () => {
  return (
  <BrowserRouter>
    <div className='App'>
    <Header />
    
    <div style={styles.bodyWrapper}>
    <ToDoList />

    <Switch>
      <Route path='/:listId' component={Form} />
      <Redirect from='/' to='/1'/>
    </Switch>
    </div>
    </div>
  </BrowserRouter>
  );
} 
export default App;