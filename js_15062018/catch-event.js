
var clickBtn = $( '.btn' );

console.log( 'clickBtn' , clickBtn)

$( 'div' ).on( 'click', '.btn', function() {
    $( this ).html( 'Click From Div' );
}  )

$( 'div' ).on( 'focus', 'input', function() {
    $( this ).val( 'Changed' );
})

$( 'div' ).on( 'click', '.btn', function() {
    var id = $( this ).attr( 'data-id' );
    console.log( 'id ', id );
})

$( 'div' ).on( 'keypress', 'input', function( e ) {
    if( e.keyCode === 13 ) {
        var value = $( this ).val();
        var ele = `<p> ${value}  </p>`;

    $( '.wrap-todo' ).append( $( ele ) )
}
} )
