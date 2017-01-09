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
            $(".mks").append($("<li>").attr("id", mkDetails[i].id).append(mkDetails[i].name).append($('<img>')));
        }

        $(".mks li img").each(function (index, item) {
            if (mkDetails[index].average_weekly_presence_hours >= 21 && mkDetails[index].average_weekly_presence_hours <= 25) {
                for(i=0; i<5; i++) {
                    $(item).append($("<img data-icon='&#xe9d9;' class='icon-star-full'>").attr("src", "./fonts/icomoon.svg"));
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
                        .append($("<div>").attr('id', 'email').append("אימייל: " + email));

                }
            });
        });
    }

    $('.mks li').click(function () {
        $("#mkData").empty();
    })

});





