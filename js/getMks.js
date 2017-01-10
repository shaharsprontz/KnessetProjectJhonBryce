/**
 * Created by Shahar on 23/12/2016.
 */

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://oknesset.org/api/v2/member/?is_current=true",
        dataType: 'json',
        success: function (mkDetails) {
            paintMks(mkDetails.objects);
        }
    });

    function paintMks(mkDetails) {
        for (var i = 0; i < mkDetails.length; i++) {
            $(".mks").append($("<li>").attr("id", mkDetails[i].id).append(mkDetails[i].name).append($('<span id="starsRating">')));
        }

        $(".mks li span").each(function (index, item) {
            if (mkDetails[index].average_weekly_presence_hours >= 21 && mkDetails[index].average_weekly_presence_hours <= 25) {
                for(i=0; i<5; i++) {
                    $(item).append($('<span data-icon="&#xe9d9;" class="icon-star-full">'));
                   
                }
            } else if (mkDetails[index].average_weekly_presence_hours >= 16 && mkDetails[index].average_weekly_presence_hours <= 20) {
                        for(i=0; i<4; i++) {
                            $(item).append($('<span data-icon="&#xe9d9;" class="icon-star-full">'));
                }
            } else if (mkDetails[index].average_weekly_presence_hours >= 11 && mkDetails[index].average_weekly_presence_hours <= 15) {
                        for(i=0; i<3; i++) {
                            $(item).append($('<span data-icon="&#xe9d9;" class="icon-star-full">'));
                }
            } else if (mkDetails[index].average_weekly_presence_hours >= 6 && mkDetails[index].average_weekly_presence_hours <= 10) {
                        for(i=0; i<2; i++) {
                            $(item).append($('<span data-icon="&#xe9d9;" class="icon-star-full">'));
                }
            } else if (mkDetails[index].average_weekly_presence_hours >= 1 && mkDetails[index].average_weekly_presence_hours <= 5) {
                        for(i=0; i<1; i++) {
                            $(item).append($('<span data-icon="&#xe9d9;" class="icon-star-full">'));
                }
            }
        });

        $(".mks li").click(function (e) {
            e.preventDefault();
            var mkIds = ($(this).attr('id'));

            var changeLi = 'liChange';
            ($(".mks li").removeClass(changeLi));
            $(this).addClass(changeLi);


            $.ajax({
                method: "GET",
                url: "http://oknesset.org/api/v2/member/" + mkIds,
                success: function (data) {

                    var name = data.name;
                    var role = data.current_role_descriptions;
                    var birth = data.date_of_birth;
                    var party = data.party_name;
                    var start = data.start_date;
                    var email = data.email;
                    var img = data.img_url;
                    var currentPos = data.current_position;
                    var committees = data.committees;
                    var facebook = data.links[1].url;

                    console.log(committees);

                    


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
                        .append($("<div>").attr('id', 'committees').append("ועדות: " + committees))
                        .append($("<span>").attr('href', facebook).append("פייסבוק: " + facebook))
                        .append($("<a>").attr('href', "mailto:" + email).attr("target", "_top").append(email));

                }
            });
        });
        $('.mks li').click(function () {
        $("#mkData").empty();
    })
    }

    

});





