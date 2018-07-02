$(document).ready(function() {

$("#showContactModal").on("click", function () {   // Button to display the contact us modal
    $("#jobseekercontact").attr("style", "display: inline-block");
    $("#recruitercontact").attr("style", "display: inline-block");
    $("#jobseekerform").attr("style", "display: none");
    $("#recruiterform").attr("style", "display: none");
    $('#contactus-success').attr("style", "display: none");
    $('#contactus-error').attr("style", "display: none");
})

$("#jobseekercontact").on("click", function() {   // Button to display the job seeker contact form
    $(this).attr("style", "display: none");
    $("#recruitercontact").attr("style", "display: none");
    $("#jobseekerform").attr("style", "display: block")

    $(".submitcontact").on("click", function() {   // Button to submit the job seeker contact form
        console.log("Submit has been fired");
        event.preventDefault();

        upsertUser({   // Build the userData object
            person_name: $('#contactus-name').val(),
            number1: $('#contactus-phone').val(),
            email: $('#contactus-email').val(),
            message: $('#contactus-message').val()
        })

        function upsertUser(userData) {   // Use userData object to fire some post methods
            $.post("/api/userContacts", userData).then(console.log("Database updated!"))   // Write userData to the database

            $.post("/api/sendmail", userData, function(res) {    // Send email containing userData
                console.log(res.status);
                if (res.status == 'success') {
                    $('#contactus-name').val('');  // Clear the contact form
                    $('#contactus-phone').val('');
                    $('#contactus-email').val('');
                    $('#contactus-message').val('');
                    $('.modal-title').append('');
                    $('#contactus-success').attr('style', 'display: block');   // Display a success message
                } else {
                    $('#contactus-error').attr('style', 'display: block');   // Display an error message
                }
            })
        }
    });
});

$("#recruitercontact").on("click", function() {   // Button to display the recruiter contact form
    $("#jobseekercontact").attr("style", "display: none");
    $(this).attr("style", "display: none");
    $("#recruiterform").attr("style", "display: block")

    $(".submitcontact").on("click", function() {   // Button to submit the recruiter contact form
        console.log("Submit has been fired");
        event.preventDefault();

        upsertRecruiter({   // Build the recruiterData object
            recruiting_agency: $('#recruiter-company').val(),
            person_name: $('#recruiter-name').val(),
            number1: $('#recruiter-phone').val(),
            email: $('#recruiter-email').val(),
            message: $('#recruiter-message').val()
        })

        function upsertRecruiter(recruiterData) {
            $.post("/api/recruiterContacts", recruiterData).then(console.log("Database updated!!"))   // Write recruiterData to the database

            $.post("/api/sendmail", recruiterData, function(res) {    // Send email containing recruiterData
                console.log(res.status);
                if (res.status == 'success') {
                    $('#recruiter-name').val('');  // Clear the contact form
                    $('#recruiter-company').val('');
                    $('#recruiter-phone').val('');
                    $('#recruiter-email').val('');
                    $('#recruiter-message').val('');
                    $('.modal-title').append('');
                    $('#contactus-success').attr('style', 'display: block');   // Display a success message
                } else {
                    $('#contactus-error').attr('style', 'display: block');   // Display an error message
                }
            })
        }       
    });
});

})