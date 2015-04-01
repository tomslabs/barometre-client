$(function() {
    var updateMoods = function () {
        $.ajax({
            url: 'https://purch-barometre.herokuapp.com/mood'
        }).done(function(data) {
            var $table = $('#mood-list');
            $table.empty();
            data.forEach(function(elem) {
                var date = moment(elem.createdAt);
                $table.append('<tr><td>' + elem.email + '</td><td>' + elem.mood + '</td><td>' + date.format('YYYY-MM-DD HH:mm:SS') + '</td></tr>');
            });
        });
    };

    updateMoods();

    $('#mood-form').submit(function(e) {
        e.preventDefault();

        $(this).ajaxSubmit({
            success: function() {
                updateMoods();
            }
        });
    });
});
