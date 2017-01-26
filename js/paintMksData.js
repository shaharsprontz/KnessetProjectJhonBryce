/**
 * Created by Shahar on 03/01/2017.
 */

// Setting all the variables from the data 
function paintMksToDom(data) {
    var name = data.name;
    var role = data.current_role_descriptions;
    var birth = data.date_of_birth;
    var party = data.party_name;
    var start = data.start_date;
    var emailAdd = data.email;
    var img = data.img_url;
    var currentPos = data.current_position;
    var committees = data.committees;
    var facebook = data.links;

    // Sorting the dates to localString
    function dateToLocal() {
        var birthDate = new Date(birth);
        birth = (birthDate.toLocaleDateString());
        var startdate = new Date(start);
        start = (startdate.toLocaleDateString());
    }
    dateToLocal()

    // Searching for facebook
    for (var i = 0; i < facebook.length; i++) {
        if (facebook[i].url.indexOf("facebook") != -1) {
            var fbAddress = facebook[i].url;
            if (fbAddress == null) {
                fbAddress.attr('class', 'visible');
            }
        }
    }

    // Getting all committees and trimming un-neccesary Punctuation and strings
    var comitteeData = committees.map(function (arr) {
        return (arr[0] || " ").trim();
    }).join(', ');

    function testIfDataExist() {
        if (data.img_url == null) {
            img = ("מידע חסר");
        }

        if (data.date_of_birth == null) {
            birth = "מידע חסר"
        }
        if (data.current_role_descriptions == null) {
            role = "מידע חסר"
        }
    }
    testIfDataExist();

    $("#mkData").append($("<img>").attr('src', data.img_url).append(img))
        .append($("<h4>").attr('id', 'mkName').append("<span style='font-size: 20px'>שם: </span>" + name))
        .append($("<h4>").attr('id', 'role').append("<span style='font-size: 20px'>תפקיד: </span>" + role))
        .append($("<h4>").attr('id', 'birth').append("<span style='font-size: 20px'>תאריך לידה: </span>" + birth))
        .append($("<h4>").attr('id', 'party').append("<span style='font-size: 20px'>מפלגה: </span>" + party))
        .append($("<h4>").attr('id', 'start').append("<span style='font-size: 20px'>תחילת חברות: </span>" + start))
        .append($("<h4>").attr('id', 'position').append("<span style='font-size: 20px'>מיקום במפלגה: </span>" + currentPos))
        .append($("<h4>").attr('id', 'committees').append("<span style='font-size: 20px'>ועדות: </span>" + comitteeData));

    if (fbAddress != null) {
        $("#mkData").append($("<a>").attr('href', fbAddress).attr("target", "_blank")
            .append($('<span data-icon="&#xea91;" class="icon-facebook2">')))
    }
    if (emailAdd != "") {
        $("#mkData").append($("<a>").attr('href', "mailto:" + emailAdd).attr("target", "_top")
            .append($('<span data-icon="&#xea84;" class="icon-mail2">')));
    }
}