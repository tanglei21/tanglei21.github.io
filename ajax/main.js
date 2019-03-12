var counter = 1;
var info = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener('click',function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json')
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status ==304) {
            var data = JSON.parse(xhr.responseText); //将获取json解析为js对象
            addHtml(data);    
        } else {
            alert('There was a problem with the request.')
        }
    };
    xhr.send();
    counter++;
    if (counter > 3) {
        btn.classList.add('hide-me');
    }
});

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
    info.innerHTML += htmlString;
}

var a = 1;

