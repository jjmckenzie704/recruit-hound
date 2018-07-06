$(document).ready(function() {
 

let skills = ['C++', 'C#', 'Java', 'JavaScript', 'Perl', 'PHP', 'Python', 'Bootstrap', 'Handlebars', 'React', 'NodeJS', 'Angular', 'CSS', 'HTML'];

skills.sort();

for (key in skills) {
    $('#skills-block').append('<label class="btn btn-default skillbutton"><input type="checkbox" autocomplete="off" value="' + skills[key] + '"> ' + skills[key] + '</label>');
};

console.log("Loaded!");

$('.skillbutton').click(function() {
    $(this).toggleClass('btn-default').toggleClass('btn-success');
    console.log($(this).children('input').val());

    
});

$(".submitprofile").click(function() {   // Button to submit the create a profile form
    console.log("Create My Profile has been fired");

    if ($('#newstate option:selected').text() == 'Choose...') {
        $('.statusmessage').html('Please fill in all the required fields!');
        return false;
    }
    
    let skillsBlock = [];

    $('.skillbutton').children('input').each(function() {   // Push all selected skills to an array
        if ($(this).prop("checked")) {
            skillsBlock.push($(this).val());
        }
    })

    $('#skill').val(skillsBlock.toString());

});

});