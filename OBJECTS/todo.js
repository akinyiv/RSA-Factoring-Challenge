const todos = [
    {
        text: "order food",
        body: "ring road shop",
    },
    {
        text: "attend movie show",
        body: "swan park",
    },
    {
        text: "design website",
        body: "sunset systems",
    },
]
console.log(todos[1].body);
console.log(todos[2].text);

//console.log(todos[2].body);
//console.log(todos[2].text);
todos.forEach(function (item) {
    console.log(item.text);
});
    
const findTodo = function (todosData, todoTitle) {
    return todosData.find(function (item) {
        return item.text === todoText;
    });
};

console.log(findTodo(todos, "design website"));