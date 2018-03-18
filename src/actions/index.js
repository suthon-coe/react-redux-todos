let nextTodoId = 3
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})