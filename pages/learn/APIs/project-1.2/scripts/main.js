

let myButton = document.querySelector('button');

function myCallback(responseText) {
    // document.getElementById('update').innerHTML = "<p>A request has been sent.</p>"
    // document.getElementById('resp').innerHTML = responseText
    console.log(responseText)
}

function httpGetAsync(theUrl, callback) {
    var myHttpRequest = new XMLHttpRequest();

    myHttpRequest.onreadystatechange = function() {
        if(myHttpRequest.readyState === XMLHttpRequest.DONE) {
            console.log("success")
        } else if (myHttpRequest.readyState == 4 && myHttpRequest.status == 200) {
            callback(myHttpRequest.responseText);
        } else {
            console.log("something went wrong")
            console.log(myHttpRequest.responseText)
        }
    }

    myHttpRequest.open('GET', theUrl, true)
    myHttpRequest.send(null)

}

myButton.onclick = function () {
    console.log("click registered")
    httpGetAsync("https://hooks.zapier.com/hooks/catch/12061383/bswuhqd/",
        myCallback);
}

// https://zapier.com/shared/6c9ce947041f64c768a301014b8ee2d25b72f3fb

