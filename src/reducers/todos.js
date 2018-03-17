const initial = [
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar'}
];
const todos = (state = initial, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text
            }]
            break
        default:
            return state
    }
}
export default todos;