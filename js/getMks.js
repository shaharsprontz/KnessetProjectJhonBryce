/**
 * Created by Shahar on 23/12/2016.
 */
// Getting all current mk's
$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://oknesset.org/api/v2/member/?is_current=true",
        dataType: 'json',
        success: function (mkDetails) {
            paintMks(mkDetails.objects);
        }
    });
});
    