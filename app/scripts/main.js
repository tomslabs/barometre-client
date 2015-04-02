$(function() {
    var endpoint = 'https://purch-barometre.herokuapp.com/mood';

    var updateMoods = function () {
        $.ajax({
            url: endpoint
        }).done(function(data) {
            directives = {
                createdAt: {
                    text: function(params){
                        var date = moment(params.createdAt);
                        return date.format('YYYY-MM-DD HH:mm:SS');
                    }
                }
            }
            var $table = $('#mood-list tbody');
            $table.render(data, directives);
        });
    };

    updateMoods();
    $('#mood-form').ajaxForm(function() {
        updateMoods();
    });
});
