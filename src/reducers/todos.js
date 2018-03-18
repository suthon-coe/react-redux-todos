const initial = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: true }
];
const todos = (state = initial, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text
            }]
        case 'TOGGLE_TODO':            
            return state.map(t => 
                (t.id === action.id)
                ? {...t, completed: !t.completed}
                : t
            )        //https://github.com/suthon-coe/react-redux-todos
        default:
            return state
    }
}
export default todos;