
var Todo = function( text, isCompleted, date ){
    this.id = new Date( ).valueOf( );
    this.text = text;
    this.isCompleted = isCompleted;
    this.date = date;
}

var TodoList = function( todoList ) {
    this.list = todoList;
}

TodoList.prototype.createTodoList = function( ) {
    
    var numOfDate = getNumberOfDate( new Date ( 2018, 5, 1 ) );
    var dateValueOf = new Date ( 2018, 5, 1 ).valueOf( );
    for ( var i = 0; i < numOfDate; i++ ) {
        var date = dateValueOf + i * milSecondDate;
        var text = '';
        var isCompleted = false;
        if ( checkDay( date ) ) {
            text = 'Todo';
            isCompleted = true;
        } 
        this.list.push( new Todo( text, isCompleted, new Date( date ).toISOString( ) ) );
    }  
}

TodoList.prototype.filterCompleted = function( ) {
    return this.list.filter.( todo => todo.isCompleted ? true : false )
}

var todoList =  new TodoList( [ ] );
todoList.createTodoList( );
console.log( 'list', todoList.list );
console.log( 'filter', todoList.filterCompleted( ) );
