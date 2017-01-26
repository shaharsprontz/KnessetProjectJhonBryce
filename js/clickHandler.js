/**
 * Created by Shahar on 10/01/2017.
 */

function clickHandler() {
    $(".mks li").click(function (e) {
        e.preventDefault();
        $(".sk-circle").css('visibility', 'visible');
        var mkIds = ($(this).attr('id'));

        var changeLi = 'liChange';
        ($(".mks li").removeClass(changeLi));
        $(this).addClass(changeLi);

        // setTimeout(function (){
        //     $(".sk-circle").css('visibility', 'hidden');
        // }, 2000);
        

        $.ajax({
            method: "GET",
            url: "http://oknesset.org/api/v2/member/" + mkIds,
            success: function (data) {
                setTimeout(function (){
                    paintMksToDom(data)
                },500);
            }
        });
        $('.mks li').click(function () {
            $("#mkData").empty();
        })
    });
   
    $(document).ajaxStart(function () {
        $(".sk-circle").show();
    }).ajaxStop(function () {
        $(".sk-circle").hide();
    });

}
