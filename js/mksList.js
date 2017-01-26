function paintMks(mkDetails) {
    for (var i = 0; i < mkDetails.length; i++) {
        $(".mks").append($("<li>").attr("id", mkDetails[i].id).append(mkDetails[i].name).append($('<span id="starsRating">')));
    }

    clickHandler();
    
    $(".mks li span").each(function (index, item) {
        if (mkDetails[index].average_weekly_presence_hours >= 21 && mkDetails[index].average_weekly_presence_hours <= 25) {
            for (i = 0; i < 5; i++) {
                $(item).append($('<stars data-icon="&#xe9d9;" class="icon-star-full">'));

            }
        } else if (mkDetails[index].average_weekly_presence_hours >= 16 && mkDetails[index].average_weekly_presence_hours <= 20) {
            for (i = 0; i < 4; i++) {
                $(item).append($('<stars data-icon="&#xe9d9;" class="icon-star-full">'));
            }
        } else if (mkDetails[index].average_weekly_presence_hours >= 11 && mkDetails[index].average_weekly_presence_hours <= 15) {
            for (i = 0; i < 3; i++) {
                $(item).append($('<stars data-icon="&#xe9d9;" class="icon-star-full">'));
            }
        } else if (mkDetails[index].average_weekly_presence_hours >= 6 && mkDetails[index].average_weekly_presence_hours <= 10) {
            for (i = 0; i < 2; i++) {
                $(item).append($('<stars data-icon="&#xe9d9;" class="icon-star-full">'));
            }
        } else if (mkDetails[index].average_weekly_presence_hours >= 1 && mkDetails[index].average_weekly_presence_hours <= 5) {
            for (i = 0; i < 1; i++) {
                $(item).append($('<stars data-icon="&#xe9d9;" class="icon-star-full">'));
            }
        }
    });

}