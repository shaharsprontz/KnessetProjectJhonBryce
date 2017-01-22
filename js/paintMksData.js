/**
 * Created by Shahar on 03/01/2017.
 */
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

    for (var j = 0; j < emailAdd.length; j++){
        if (emailAdd == null || emailAdd == "") {
            emailAdd.attr('class', 'visible');
        }
    }

    for (var i = 0; i < facebook.length; i++) {
        if (facebook[i].url.indexOf("facebook") != -1) {
            var fbAddress = facebook[i].url;
            if (fbAddress == null) {
                fbAddress.attr('class', 'visible');
            }
        }
    }
    var comitteeData = committees.map(function (arr) {
        return (arr[0] || " ").trim();
    }).join(', ');

    exist(data);

    $("#mkData").append($("<img>").attr('src', data.img_url).append(img))
        .append($("<div>").attr('id', 'mkName').append("<span style='font-size: 20px'>שם: </span>"  + name))
        .append($("<div>").attr('id', 'role').append("<span style='font-size: 20px'>תפקיד: </span>" + role))
        .append($("<div>").attr('id', 'birth').append("<span style='font-size: 20px'>תאריך לידה: </span>" + birth))
        .append($("<div>").attr('id', 'party').append("<span style='font-size: 20px'>מפלגה: </span>" + party))
        .append($("<div>").attr('id', 'start').append("<span style='font-size: 20px'>תחילת חברות: </span>" + start))
        .append($("<div>").attr('id', 'position').append("<span style='font-size: 20px'>מיקום במפלגה: </span>" + currentPos))
        .append($("<div>").attr('id', 'committees').append("<span style='font-size: 20px'>ועדות: </span>" + comitteeData));

    if (fbAddress != null) {
        $("#mkData").append($("<a>").attr('href', fbAddress).attr("target", "_blank")
            .append($('<span data-icon="&#xea91;" class="icon-facebook2">')))
    }
    if (emailAdd != null || emailAdd != "") {
        $("#mkData").append($("<a>").attr('href', "mailto:" + emailAdd).attr("target", "_top")
            .append($('<span data-icon="&#xea84;" class="icon-mail2">')));
    }
}



