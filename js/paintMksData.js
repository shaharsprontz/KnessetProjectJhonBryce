/**
 * Created by Shahar on 03/01/2017.
 */
function paintMksToDom(data) {

    var name = data.name;
    var role = data.current_role_descriptions;
    var birth = data.date_of_birth;
    var party = data.party_name;
    var start = data.start_date;
    var email = data.email;
    var img = data.img_url;
    var currentPos = data.current_position;
    var committees = data.committees;
    var facebook = data.links;

    for (var i = 0; i < facebook.length; i++) {
        if (facebook[i].url.indexOf("facebook") != -1) {
            var fbAddress = facebook[i].url;
        }else{
            fbAddress = "Has no FB"
        }
    }
    var comitteeData = committees.map(function(arr) { return (arr[0] || " ").trim(); }).join(', ');

    //exist(data);
    if (data.img_url == null) {
        img = ("מידע חסר");
    }

    if (data.date_of_birth == null) {
        birth = "מידע חסר"
    }
    if (data.current_role_descriptions == null) {
        role = "מידע חסר"
    }
    
    if (data.email =="") {
        email = ("מידע חסר");
    }

    $("#mkData").append($("<img>").attr('src', data.img_url).append(img))
        .append($("<div>").attr('id', 'mkName').append("שם: ").append(name))
        .append($("<div>").attr('id', 'role').append("תפקיד: " + role))
        .append($("<div>").attr('id', 'birth').append("תאריך לידה: " + birth))
        .append($("<div>").attr('id', 'party').append("מפלגה: " + party))
        .append($("<div>").attr('id', 'start').append("תחילת חברות: " + start))
        .append($("<div>").attr('id', 'position').append("מיקום במפלגה: " + currentPos))
        .append($("<div>").attr('id', 'committees').append("ועדות: " + comitteeData))
        .append($("<a>").attr('href', fbAddress).attr("target", "_blank")
        .append($('<span data-icon="&#xea91;" class="icon-facebook2">'))
        .append($("<a>").attr('href', "mailto:" + email).attr("target", "_top").append($('<span data-icon="&#xea84;" class="icon-mail2">'))));
}
