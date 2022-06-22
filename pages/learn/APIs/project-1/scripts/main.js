

let myButton = document.querySelector('button');

function callback(responseText) {
    // document.getElementById('update').innerHTML = "<p>A request has been sent.</p>"
    // document.getElementById('resp').innerHTML = responseText
    console.log(responseText)
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

myButton.onclick = function () {
    httpGetAsync("https://hooks.zapier.com/hooks/catch/12061383/bsa1miw?emailto=alex@oakl.me");
}

// https://zapier.com/shared/6c9ce947041f64c768a301014b8ee2d25b72f3fb

