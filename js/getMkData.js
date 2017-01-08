/**
 * Created by Shahar on 31/12/2016.
 */

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://oknesset.org/api/v2/member/",
        success: function (data) {
        }
    });
});
$(".mks li").click(function() {
    console.log($(this).attr('id'));
});

function appendRank() {
    for (var i = 0; i < mkDetails.length; i++) {
        if (mkDetails[i].average_weekly_presence_hours = 0) {
            $(".mks li").append("<img>").attr("src", "images/216-star-empty.svg")
        }
    }
}