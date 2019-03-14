const defaultState = {
  list: [
    {
      id: 1,
      name: 'Steve Yzerman',
      email: 'steveyzerman@gmail.com'
    },
    {
      id: 2,
      name: 'Alexander Ovechkin',
      email: 'thegreat8@yahoo.com'
    },
    {
      id: 3,
      name: 'Wayne Gretzky',
      email: 'thegreat1@hotmail.com'
    },
  ],
  name: '',
  email: '',
  redirectTo: null
};

const contacts = (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_LIST':
      const listItem = state.list.filter(item => item.id === parseInt(action.id, 10))
      return {
        ...state,
        name: listItem[0]  ? listItem[0].name : '',
        email: listItem[0] ? listItem[0].email : ''
    } 

    case 'CAPTURE_INPUT':
      return { 
        ...state,
        [action.payload.name]: action.payload.value
      }

    case 'UPDATE':
      const updatedList = state.list.map(item => {
        if (item.id === parseInt(action.id, 10)) {
            item.name = state.name;
            item.email = state.email;
        }
        return item;
      });
      return {
        ...state,
        list: updatedList
      }

    case 'DELETE':
      const newList = state.list.filter(item => item.id !== parseInt(action.id, 10)); 
      return {
        ...state,
        list: newList,
        name: newList[0] ? newList[0].name : '',
        email: newList[0] ? newList[0].email : '',
        redirectTo: newList.length > 0 ? '/${newList[0].id}' : '/1'
      }

    case 'ADD':
      let id;
      state.list.length > 0 ? id = state.list[state.list.length - 1].id + 1 : id = 1;
      const newToDo = {id, name: state.name, email: state.email}
      return {
        ...state,
        list: list.state.concat(newToDo)
      }

    default:
      return state;
  }
  }

export default reducer;