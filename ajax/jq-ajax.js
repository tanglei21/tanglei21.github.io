var counter = 1;

$('#btn').click(function () { 
    var url = 'https://learnwebcode.github.io/json-example/animals-' + counter +'.json';
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (response) {
            addHtml(response);
        }      
    });
    /*$.get(url, function (data) {
        addHtml(data);
    },
    "json"
    );*/
    counter++;
    if (counter > 3) $('#btn').fadeToggle();
    function addHtml(d) {
        var htmlString = '';
        for (var i = 0; i < d.length; i++) {
            htmlString += '<p>' + d[i].name + ' is a ' + d[i].species + ' that likes to eat ';
            
            for (var j = 0; j < d[i].foods.likes.length; j++) {
                if (j == 0) {
                    htmlString += d[i].foods.likes[j];  
                } else {
                    htmlString += 'and' + d[i].foods.likes[j];
                }
                
            }
            htmlString += ' and dislikes '
            for (var j = 0; j < d[i].foods.dislikes.length; j++) {
                if (j == 0) {
                    htmlString += d[i].foods.dislikes[j];  
                } else {
                    htmlString += 'and' + d[i].foods.dislikes[j];
                }
                
            }
            htmlString += '.</p>'
        };
        $('#animal-info').append(htmlString);
    }
});