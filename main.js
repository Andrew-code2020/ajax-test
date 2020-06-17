function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://ci-swapi.herokuapp.com/api/"
  ); /*GET standard method to get soemthing from the browser POST sends data to server*/
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

function printDataToConsole(data){
    console.log(data);
}

getData (printDataToConsole);

