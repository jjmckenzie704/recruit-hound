$(document).ready(function() {

$.get("/api/users", function(data) {
    console.log(data);
    for (key in data) {
        createNewRow(data[key]);
    }
    $('.content').html(createNewRow(data[key]));
});

function createNewRow(user) {
    console.log("success");
    let $newUserRow = $(
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