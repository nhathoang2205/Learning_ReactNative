
// Cho object có dạng: 
// todo = {
// id: 0,
// text: '',
// isCompleted: false,
// date: null (MM/DD/YYYY)
// }
// todoList = []
// todoList là array chứa nhiều todo. 
// 1. Viết function addTodos vào todoList kể từ ngày 06/01/2018 (MM/DD/YYYY) đến today chỉ của các ngày Monday, Tuesday, Saturday (Tức là từ ngày 01 đên ngày hiện tại có ngày các ngày thứ 2, t3, t7 thì define object todo với này tương ứng rồi push vào todoList )
// 2. Kiểm tra hôm nay có todo hay không.
// 3. Đếm có bao nhiêu todo đã hoàn thành trong todoList ( tức là isCompleted = true)

    var person = function(name, age) {
        this.name = name;
        this.age = age
    }
    
    // Homework todo
    var milSecondDate = 24 * 60 * 60 * 1000
    var getNumberOfDate = function(date) {
        var today = new Date().valueOf()
        var valueInputDate = new Date(date).valueOf()
        return Math.ceil(Math.abs(today - valueInputDate) / milSecondDate)
    }
    
    // is Mon, Tue, Sat
    var checkDay = (date) => {
        return new Date (date).toUTCString().split(',')[0] === 'Mon' ||
            new Date (date).toUTCString().split(',')[0] === 'Tue' ||
            new Date (date).toUTCString().split(',')[0] === 'Sat'
    }
    
    var createListTodos = function() {
        var listTodos = []
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
        listTodos.push({
            id: i,
            text,
            isCompleted,
            date: new Date (date).toISOString()
        })
        }
        return listTodos
    }
    
    var checkToday = function (todos) {
        var todoToday = todos.pop()
        return todoToday.text ? true : false
    }
    
    var countTodoOnList = function(todos) {
        var count = 0
        todos.forEach(function(todo) {
        count = todo.isCompleted ? count + 1 : count
        })
        return count
    }
    
    var listTodos = createListTodos()
    console.log('list todo ', listTodos)
    console.log('Today has a todo? ', checkToday(listTodos))
    console.log('Count of todos ', countTodoOnList(listTodos))

    
    
    