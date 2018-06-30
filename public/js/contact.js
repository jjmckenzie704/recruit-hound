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
    //append functionality
    $("#jobseekercontact").attr("style", "display: none");
    $("#recruitercontact").attr("style", "display: none");
    $("#jobseekerform").attr("style", "display: block")


    //This is the sequelize post for contact us
    $(".submitcontact").on("click", function() {
        event.preventDefault()
        $.post("/api/userContacts", function(req, res) {
            db.userContact.create(req.params).then(function(post) {
                console.log(res);
                console.log(post);
            });
        }); 
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
        $.post("/api/recruiterContacts", function(req, res) {
            db.recruiterContact.create(req.params).then(function(post){
                console.log(res);
                console.log(post);
            });
        });         
    });
});


