$(document).ready(function() {



//================================//
//Below this line is the code for pushing recruiter information to the recruiter_contact table
$("#showContactModal").on("click", function () {
    $("#jobseekercontact").attr("style", "display: inline-block");
    $("#recruitercontact").attr("style", "display: inline-block");
    $("#jobseekerform").attr("style", "display: none");
    $("#recruiterform").attr("style", "display: none");
})


//This is for the onclick of the contact us form
$("#jobseekercontact").on("click", function() {



$("#jobseekercontact").attr("style", "display: none");
$("#recruitercontact").attr("style", "display: none");
$("#jobseekerform").attr("style", "display: block")


    //This is the sequelize post for contact us
    $(".submitcontact").on("click", function() {
        console.log("Submit has been fired");
        event.preventDefault()

        upsertUser({
            person_name: $('#contactus-name').val(),
            number1: $('#contactus-phone').val(),
            email: $('#contactus-email').val(),
            message: $('#contactus-message').val()
        })

        function upsertUser(userData) {
            $.post("/api/userContacts", userData).then(console.log("Done!")) 
        }
        
    });
});
    
//Post new recruiters wanting information from our company
$("#recruitercontact").on("click", function() {
    //append functionality
    $("#jobseekercontact").attr("style", "display: none");
    $("#recruitercontact").attr("style", "display: none");
    $("#recruiterform").attr("style", "display: block")

    //This is the sequelize post for contact us
    $(".submitcontact").on("click", function() {
        event.preventDefault()
        upsertRecruiter({
            recruiting_agency: $('#recruiter-company').val(),
            person_name: $('#recruiter-name').val(),
            number1: $('#recruiter-phone').val(),
            email: $('#recruiter-email').val(),
            message: $('#recruiter-message').val()
        })

        function upsertRecruiter(recruiterData) {
            $.post("/api/recruiterContacts", recruiterData).then(console.log("Done!")) 
        }       
    });
});



})