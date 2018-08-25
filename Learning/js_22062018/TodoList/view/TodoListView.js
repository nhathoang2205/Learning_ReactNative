
var ENTER = 13;

var TodoListView = function( todoList ) {
  todoList.render();
  this.handleEvent( 'addTodo', todoList );
  this.handleEvent( 'EditTodo', todoList );
  this.handleEvent( 'DeleteTodo', todoList );
}

TodoListView.prototype.addTodo = function( value ) {
  var todo = new Todo( value );
  todoList.addTodo( todo );
  todoList.saveInLocal();
  todo.render();
}

TodoListView.prototype.editTodo = function( id, value ) {
  todoList.editTodo( id, value );
  todoList.saveInLocal();
}

TodoListView.prototype.deleteTodo = function( id ) {
  todoList.deleteTodo( id );
  todoList.saveInLocal();
}

TodoListView.prototype.handleEvent = function( event, todoList ) {
  var self = this;
  switch ( event ) {
    case 'addTodo':
      $( 'body' ).on( 'keypress', '.input-todo', function( e ) {
        if( e.keyCode === ENTER ) {
          var value = $( this ).val();
          self.addTodo( value );
          $( this ).val( '' );
        }
      } ) 
      break;

    case 'deleteTodo':
      $( 'ul' ).on( 'click', 'close', function( e ) {
        var id = $( this ).parent().attr( 'id' );
        self.deleteTodo( id );
      } )
    break;

    case 'editTodo':
      $( 'ul' ).on( 'keypress', '.inputedit', function( e ) {
        if( e.keyCode = ENTER ) {
          var value = $( this ).val();
          if( value != "" ) {
            var id = $( this ).attr( 'date-id' );
            self.editTodo( id, value );
          }
        }
      })
    break;
  
    default:
    break;
  }
}

// Add a "checked symbol when clicking on a list item"
$( 'ul' ).on( 'click', function( ev ) {
  if( ev.target.tagName === 'LI' ) {
    ev.target.classList.toggle( 'checked' );
  }
}, false );