$(function() {
    $('#bar').on('click', swap);
    sidebarVisible = 1;
    
    $('.explore').before( function() {
        var text = 'Explore Further (optional)';
        if ($(this).attr('alt'))
            text = $(this).attr('alt');
        return '<a class="exploreFurther" onClick="show(\'' + this.id + '\')">' + text + '</a>';
    });
});

function swap() {
    var test = $('#testing .wrap');
    test.toggle();
    
    var sidebar = $('#testing');
    if (sidebarVisible) {
        sidebar.css('width', '20px');
        sidebarVisible = 0;
    }
    else {
        sidebar.css('width', '520px');
        sidebarVisible = 1;
    }
}
    
function show(id) {
    var addl = $('#'+id);
    addl.toggle();
}