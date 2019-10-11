
  let $block = null;
  $('[data-color]').draggable()
  let row =  $('[data-row]')
  row.droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  })
 row.click(function() {
    console.log('$block', $block)

    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })