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
            $(".mks").append($("<li>").attr("id", mkDetails[i].id).append(mkDetails[i].name));

        }
        $(".mks li").click(function () {
            var mkIds = ($(this).attr('id'));
            $.ajax({
                method: "GET",
                url: "http://oknesset.org/api/v2/member/" + mkIds,
                success: function (data) {

                    var role = data.current_role_descriptions;
                    var birth = data.date_of_birth;
                    var party = data.party_name;
                    var start = data.start_date;
                    var email = data.email;
                    var img = data.img_url;

                    $("#mkData").append($("<div>").attr('id', 'role').append(role))
                        .append($("<div>").attr('id', 'birth').append(birth))
                        .append($("<div>").attr('id', 'party').append(party))
                        .append($("<div>").attr('id', 'start').append(start))
                        .append($("<div>").attr('id', 'email').append(email))
                        .append($("<div>").attr('id', 'img').append(img));

                }
            });
        });
    }
});



