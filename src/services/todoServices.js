// Here we will write the API calls
// API Call
// Error Handelling
// Loading
// Block retrigger
export const getToDos = () => {
    return fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(console.log);
}

getToDos()