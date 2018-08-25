
//  var Person = function(age, name) {
//     this.age = age;
//     this.name = name;

//     this.getName = function () {
//     return this.name
//     };
// }

// Person.prototype.getAge = function() {
//     return this.age
// }

// Person.prototype.getBirthDate = function() {
//     return new Date().getFullYear() - this.age
// }

// var obj = {
//     age: 20,
//     name: 'TTT',
//     getName: function() {
//     return this.name
//     }
// }

// var myself = new Person(24, 'Hoai')

// var you = new Person(20, 'You')

// console.log('obj ', obj.getName())
// console.log('myself ', myself)
// console.log('get Name  ', myself.getName())
// console.log('get Age  ', myself.getAge())
// console.log('get BirthDate  ', myself.getBirthDate())

// console.log('You get Age  ', you.getAge())

var Todo = function (text, isCompleted, date) {
    this.id = new Date().valueOf();
    this.text = text;
    this.isCompleted = isCompleted;
    this.date = date
}

var TodoList = function (todoLists) {
    this.list = todoLists;
}
  
TodoList.prototype.createTodoList = function() {
    var numOfDate = getNumberOfDate(new Date (2018, 5, 1))
    var dateValueOf = new Date (2018, 5, 1).valueOf()
    for (var i = 0; i < numOfDate; i++) {
        var date = dateValueOf + i * milSecondDate
        var text = ''
        var isCompleted = false
        if (checkDay(date)) {
        text = 'Todo'
        isCompleted = true
    } 
    this.list.push(new Todo(text, isCompleted, new Date (date).toISOString()))
}
}

TodoList.prototype.filterCompleted = function () {
    return this.list.filter(todo => todo.isCompleted ? true : false)
}

var todoList = new TodoList([])
todoList.createTodoList()
console.log('list ', todoList.list)
console.log('filter  ', todoList.filterCompleted())