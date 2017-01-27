/**
 * Created by Shahar on 10/01/2017.
 */

// Waiting for response from server to stop the loader
$(document).ajaxStart(function () {
    $(".sk-circle").show();
}).ajaxStop(function () {
    $(".sk-circle").hide();
});

// Getting the ID of the MK and starting the loader
function clickHandler() {
    $(".mks li").click(function (e) {
        e.preventDefault();
        $(".sk-circle").css('visibility', 'visible');
        var mkIds = ($(this).attr('id'));

        // On click changing the UI of the list items
        var changeLi = 'liChange';
        ($(".mks li").removeClass(changeLi));
        $(this).addClass(changeLi);

        // Calling MK and painting info to DOM
        $.ajax({
            method: "GET",
            url: "http://oknesset.org/api/v2/member/" + mkIds,
            success: function (data) {
                setTimeout(function () {
                    paintMksToDom(data)
                }, 500);
            }
        });

        // Clearing MK info from DOM on the next li click event
        $(".mks li").click(function () {
            $('span').not("#starsRating").remove();
            $('img').slice(1).remove();
            $('h4').remove();
        });
    });
}
