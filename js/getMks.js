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
                    console.log(data);
                }
            });
        });
    }
});



