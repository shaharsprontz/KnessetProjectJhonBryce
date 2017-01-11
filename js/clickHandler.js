/**
 * Created by Shahar on 10/01/2017.
 */

function clickHandler() {
    $(".mks li").click(function (e) {
        e.preventDefault();
        var mkIds = ($(this).attr('id'));
        console.log(mkIds);

        var changeLi = 'liChange';
        ($(".mks li").removeClass(changeLi));
        $(this).addClass(changeLi);

        $.ajax({
            method: "GET",
            url: "http://oknesset.org/api/v2/member/" + mkIds,
            success: function (data) {
                paintMksToDom(data)
            }
        });
        $('.mks li').click(function () {
            $("#mkData").empty();
        })
    });
}
