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

