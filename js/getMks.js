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
                        paintMksToDom()
                    }
                });
                });

            $('.mks li').click(function () {
            $("#mkData").empty();
            })
});
    