var request = new XMLHttpRequest();

function loadData(){
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            var data = request.responseText;
            print(data);
        }
    };
    request.open('get', '/display');
    request.send();
}
loadData();

function print(data){
    var arr = data.split(',');
    console.log(arr);
    arr.reverse().map(function(x){
        var node = document.createElement('li');
        var textnode = document.createTextNode(x);
        node.appendChild(textnode);
        document.body.appendChild(node);
    });
}

function postData(input, description){
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            console.log(request.responseText);
        }
    };
    request.open('post', '/add' + input + ':' + description);
    request.send();
}

document.getElementById('button').addEventListener('click', function(){
    var input = document.getElementById('input').value;
    var description = document.getElementById('description').value;
    postData(input, description);
});
