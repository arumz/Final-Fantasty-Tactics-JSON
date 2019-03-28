$.getJSON("./json/data.json", function(data) {


    console.log(data.cards[1]);
    $(".card").each(function(idx) {
        $(this).css("background-color", data.cards[idx].color)
    });
    $(".title").each(function (idx) {
        $(this).html(data.cards[idx].title)
    });
    $(".image").each(function(idx) {
        let imageString = ""
        imageString += "<img src = '" + data.cards[idx].image + "' />"
        $(this).append(imageString)
    });
    $(".job").each(function (idx) {
        $(this).html(data.cards[idx].job)
    });
    $(".love").each(function (idx) {
        $(this).html(data.cards[idx].love)
    });

});
