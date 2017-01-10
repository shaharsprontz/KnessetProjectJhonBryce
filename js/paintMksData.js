/**
 * Created by Shahar on 03/01/2017.
 */
function paintMksToDom() {

    

        var name = data.name;
        var role = data.current_role_descriptions;
        var birth = data.date_of_birth;
        var party = data.party_name;
        var start = data.start_date;
        var email = data.email;
        var img = data.img_url;
        var currentPos = data.current_position;
        var committees = data.committees;
        var facebook = data.links[0].url;

        //var coom = committees.replace(/\\\//g, "/");
        var vaadot = $(committees).each(function (index, value) {
            var vaadot = value[0];
            console.log(vaadot);
        })

        if (data.date_of_birth == null) {
            birth = "מידע חסר"
        }
        if (data.current_role_descriptions == null) {
            role = "מידע חסר"
        }
        if (data.email == null) {
            email = "מידע חסר"
        }

        $("#mkData").append($("<img>").attr('src', data.img_url).append(img))
            .append($("<div>").attr('id', 'mkName').append("שם: " + name))
            .append($("<div>").attr('id', 'role').append("תפקיד: " + role))
            .append($("<div>").attr('id', 'birth').append("תאריך לידה: " + birth))
            .append($("<div>").attr('id', 'party').append("מפלגה: " + party))
            .append($("<div>").attr('id', 'start').append("תחילת חברות: " + start))
            .append($("<div>").attr('id', 'position').append("מיקום במפלגה: " + currentPos))
            .append($("<div>").attr('id', 'committees').append("ועדות: " + vaadot))
            .append($("<span>").attr('href', facebook).append("פייסבוק: " + facebook + "</br>"))
            .append($("<a>").attr('href', "mailto:" + email).attr("target", "_top").append(email));
    }
