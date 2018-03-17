let nextTodoId = 3
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})