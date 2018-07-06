$(document).ready(function() {
let skills = [];

$('#editstate').val(state);
console.log(skills);

skills = userskills.split(',');

skills.sort();

for (key in skills) {
    $('#skills-block').append('<label class="btn btn-success active skillbutton"><input type="checkbox" autocomplete="off" value="' + skills[key] + '"> ' + skills[key] + '</label>');
};

$('.skillbutton').click(function() {
    $(this).toggleClass('btn-default').toggleClass('btn-success');
    console.log($(this).children('input').val());

    
});





});