var updateMoods = function () {
    $.ajax({
        url: 'https://purch-barometre.herokuapp.com/mood'
    }).done(function(data) {
        var $table = $('.table tbody');
        $table.empty();
        data.forEach(function(elem) {
            var date = moment(elem.createdAt);
            $table.append('<tr><td>' + elem.email + '</td><td>' + elem.mood + '</td><td>' + date.format('YYYY-MM-DD HH:mm:SS') + '</td></tr>');
        });
    });
};

var submitMood = function (event) {
    $(event).preventDefault();
    $('form').submit(function(){
        updateMoods();
    });
};


$(function() {
    updateMoods();
});
