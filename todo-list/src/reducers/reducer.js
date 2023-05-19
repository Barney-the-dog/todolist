export function reducer(state, action){
    switch(action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {...state, list: [...state.list, newTask]}
        }
        case 'DELETE_TASK':{
            return { ...state, list: state.list.filter(el => el.id !==
                action.payload) 
        }
    }
        default: 
            return state
        }
    }