var $j = jQuery.noConflict();

$j( document ).ready(function() {


    console.log( "ready!" );
    



$j(function() {
    //caches a jQuery object containing the header element
    let wrap = $j(".wrap");
    $j(window).scroll(function() {
        let scroll = $j(window).scrollTop();

        if (scroll >= 100) {
            console.log(" if - red")
            wrap.removeClass('fix-search-blue').addClass("fix-search-red");
        } else {
            console.log(" else - blue")
            wrap.removeClass("fix-search-red").addClass('fix-search-blue');
        }
    });
});

console.log("Begin $j.get");
$j.get("/api/users", function(data) {
    console.log(data);
    for (key in data) {
        createNewRow(data[key]);
    }
    $j('.content').html(createNewRow(data[key]));
});

function createNewRow(user) {
    console.log("success");
    let $newUserRow = $j(
        [
            '<p class="user-block">',
            'First Name: ' + user.firstName + '<br />',
            'Last Name: ' + user.lastName + '<br />',
            'Email: ' + user.email + '<br />',
            'Skill: ' + user.skill + '<br />',
            '</p>'
        ].join('')
    );

    return $newUserRow;
}


});