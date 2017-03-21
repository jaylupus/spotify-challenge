$(function() {
    var Sean = {
        id: 1,
        name: 'Sean',
        favoriteCity: 'New York'
    };

    $('#stepTwo').hide();
    $('#stepThree').hide();

    $.get('/people').then(function(data){
        $('#stepOne .result').html(data);
    });

    $('#stepOne button').click(function(){
       $.post('/people', Sean)
           .then(function(){
               $('#stepOne').hide();
               $('#stepTwo').show();
               return $.get('/people/1');
           })
           .then(function(data){
               $('#stepTwo .result').html(JSON.stringify(data));
               Sean._id = data._id;
           });
    });

    $('#stepTwo button').click(function(){
        $.ajax({
                url: '/people/1',
                method: 'PUT',
                data: {favoriteCity: 'Brooklyn'}
            })
            .then(function(){
                $('#stepTwo').hide();
                $('#stepThree').show();
                return $.get('/people/1');
            })
            .then(function(data){
                $('#stepThree .result').html(JSON.stringify(data));
            });
    });

    $('#stepThree button').click(function(){
       $.ajax({
           url: '/people/1',
           method: 'DELETE'
       })
           .then(function() {
               $('#stepThree').hide();
               $('#stepOne').show();
               return $.get('/people');
           })
           .then(function(data){
                $('#stepOne .result').html(data);
            });
    });
});