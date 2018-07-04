$(document).ready(function() {
    getRecruiters();
    
    //Pull all recruiters//
    function getRecruiters() {
        $.get("/api/recruiterAgencies", function(data) {
            var addRows = [];
            for (var i = 0; i < data.length; i++) {
            //createRecruiterRow(data[i])
            addRows.push(createRecruiterRow(data[i]));
            };
        
        })
        }

    
    //NO LONGER NEEDED, BUT KEEPING FOR REFERENCE ========== Create rows to pull all recruiters// 
        //  function createRecruiterRow(recruiterData) {
        //     var recruiterList = $("<tbody>");
        //     var newTr = $("<tr>");

        //     //newTr.data("recruiting_agency", recruiterData);
        //     newTr.append("<td>" + "<a href=" + recruiterData.website + ">" + recruiterData.recruiting_agency + "</a>" + "</td>").append("<td>" + recruiterData.street_addres1).append("<td>" + recruiterData.unit1 + "</td>").append("<td>" + recruiterData.city1 + "</td>").append("<td>" + recruiterData.state1 + "</td>").append("<td>" + recruiterData.zip_code1 + "</td>").append("<td>" + recruiterData.number1 + "</td>").append("<td>" + recruiterData.email + "</td>").append("<td>" + recruiterData.description + "</td>");
        //     //$("<thead>").append(recruiterList);
        //     $(".recruiterHeader").append(newTr);
        //   };
//======================================================//
    $(".btn").on("click", function() {
        event.preventDefault()


        //Create variable for grabbing the value
        var newSearch = $(".search").val().trim();
        console.log(newSearch)

        //Check to see if a valid city
        if (!newSearch) {
            alert("Please ensure you enter a valid City in the Search Form.");
            
        } else {
            $(".recruiterBody").html("")
            $(".accordion").html("")

            //$(".table").attr("style", "display: table")
            //Fire API
            getCity(newSearch)
        }
    })
        
    //Fire the API to get the data from db
    function getCity(newSearch) {
        $.get("/api/recruiterAgencies/city/" + newSearch, function(data) {
            var addRows = [];

            //Run the get method to retrieve and push data to the dynamically created table
            for (var i = 0; i < data.length; i++) {
                addRows.push(createRow(data[i]));
            };
        });
    };

    function createRow(recruiterData) {

        //========For Accordion ======//
        var newCard = $("<div >")
        newCard.addClass("card");
        var newCardHeader = $("<div>");
        newCardHeader.addClass("cardheader");
        var newHeadTitle = $("<h5>")
        newHeadTitle.addClass("mb-0");
        var newButton = $('<button class="btn btn-link">' + recruiterData.recruiting_agency + "</button>");
        //newButton.addClass("btn btn-link");
        newButton.attr("type", "button").attr("data-toggle", "collapse").attr("data-target", "#" + recruiterData.id).attr("aria-expanded", "false").attr("attr-controls", recruiterData.id);
        newCard.append(newCardHeader).append(newHeadTitle).append(newButton)
        //Collapsed Info
        var collapsedDiv = $("<div>")
        collapsedDiv.addClass("collapse").attr("id", recruiterData.id).attr("aria-labelledby", "headingOne").attr("data-parent", "#recruiterAccordion")
        var collapsedDivBody = $('<div class="card-body">')
        var para = $("<p>" + recruiterData.description + "</p>" + "<br>")
        var contactInfo = $("<h5 class='recruiting-agency-contact-info'>Contact Info</h5>");
        var streetAddress = $("<p style='margin-bottom:0'>" + recruiterData.street_address1 + "</p>");
        var city = $("<p>" + recruiterData.city1 + ", " + recruiterData.state1 + " " + recruiterData.zip_code1 + "</p>");
        var phoneNumber = $("<p>" + recruiterData.number1 + "</p>");
        var email = $("<p>" + recruiterData.email + "</p>")
        var website = $("<p><a target='blank' href=" + recruiterData.website + ">" + recruiterData.website + "</a></p>")

        //Append Collapsed Info to the Div Body
        collapsedDivBody.append(para).append(contactInfo).append(streetAddress).append(city).append(phoneNumber).append(email).append(website);

        //Append the collapsedDivBody to the overarching Div
        collapsedDiv.append(collapsedDivBody);

        //Append the collapsed Info to the specific card
        newCard.append(collapsedDiv)

        //Append all to the Handlebars page
        $(".accordion").append(newCard)

    }
      
})