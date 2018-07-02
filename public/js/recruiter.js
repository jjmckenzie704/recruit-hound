$(document).ready(function() {
    getRecruiters();
    
    //Pull all recruiters
    function getRecruiters() {
        $.get("/api/recruiterAgencies", function(data) {
          var addRows = [];
          for (var i = 0; i < data.length; i++) {
            //createRecruiterRow(data[i])
           addRows.push(createRecruiterRow(data[i]));
          };
         
        })
      }

    
 //Create rows to pull all recruiters
 function createRecruiterRow(recruiterData) {
    var recruiterList = $("<tbody>");
    var newTr = $("<tr>");

    //newTr.data("recruiting_agency", recruiterData);
    newTr.append("<td>" + "<a href=" + recruiterData.website + ">" + recruiterData.recruiting_agency + "</a>" + "</td>").append("<td>" + recruiterData.street_addres1).append("<td>" + recruiterData.unit1 + "</td>").append("<td>" + recruiterData.city1 + "</td>").append("<td>" + recruiterData.state1 + "</td>").append("<td>" + recruiterData.zip_code1 + "</td>").append("<td>" + recruiterData.number1 + "</td>").append("<td>" + recruiterData.email + "</td>").append("<td>" + recruiterData.description + "</td>");
    //$("<thead>").append(recruiterList);
    $(".recruiterHeader").append(newTr);
  };
//======================================================//
    $(".btn").on("click", function() {
        event.preventDefault()
        var newSearch = $(".search").val().trim();
        console.log(newSearch)
        getCity(newSearch)
    })

    function getCity(newSearch) {
        $.get("/api/recruiterAgencies/city/" + newSearch, function(data) {
            var addRows = [];
            for (var i = 0; i < data.length; i++) {
                addRows.push(createRow(data[i]));
            };
        });
    };

    function createRow(recruiterData) {
        var recruiterList = $("<tbody>");
        var newTr = $("<tr>");
        newTr.append("<td>" + "<a href=" + recruiterData.website + ">" + recruiterData.recruiting_agency + "</a>" + "</td>");
        $(".recruiterSearch").append(newTr)
    }
      
})