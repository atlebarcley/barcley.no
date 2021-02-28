/*
var text = '{"positions":[' +
  '{"position":"kreativ leder","employer":"R8 Edge","link": "https://r8edge.no" },' +
  '{"position":"daglig leder","employer":"Onezero Designbureau","link": "http://onzero.no"},' +
  '{"position":"kunstnerisk leder","employer":"Atelier Nord","link": "https://ateliernord.no"}]}';
obj = JSON.parse(text);
var count = text.length;
*/
/*
var positionsarray = [
  { position : "kreativ leder", employer : "R8 Edge", link : "https://r8edge.no" },
  { position : "daglig leder", employer : "Onezero Designbureau", link : "http://onzero.no"},
  { position : "kunstnerisk leder",  employer : "Atelier Nord","link": "https://ateliernord.no"}
];
var count_pa = positionsarray.length;
*/
// https://www.w3schools.com/js/js_arrays.asp
/*

var positionsarray, text, fLen, i;
positionsarray = ["Bandana", "Orange", "Apple", "Mango"];
paLength = positionsarray.length;

text = "<ul>";
for (i = 0; i < paLength; i++) {
  text += "<li>" + positionsarray[i] + "</li>";
}
text += "</ul>";

document.write(text);

*/
// trying https://www.w3schools.com/js/js_arrays.asp

var positionsarray = ["Bandanada", "Orange", "Apple", "Mango"];
var i = 0;
var paLength = positionsarray.length;
var paLast = positionsarray.length - 1;
var text = paLength + "<br>" + " ";
/*
while (positionsarray[i]) {
  text += positionsarray[i] + "<br>";
  i++;
}
*/
// for (i, paLength, text = ""; i < paLength; i++) {
while (i < paLength) {
  if (i === positionsarray.length - 1) {
    text += " og " + positionsarray[i];
  } else if (i === positionsarray.length - 2){
    text += positionsarray[i] + " ";
  } else {
    text += positionsarray[i] + ", ";
  }
  i++;
}

document.write(text);

// https://stackoverflow.com/questions/14916940/how-to-get-json-array-from-file-with-getjson/14917031#14917031

/*
var questions = [];
function getArray(){
    $.getJSON('questions.json', function (json) {
        for (var key in json) {
            if (json.hasOwnProperty(key)) {
                var item = json[key];
                questions.push({
                    Category: item.Category
                });
            }
        }
        renderJSON(questions);
    });
}
var countq = questions.length;
*/
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myArr[0];
  }
};
xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo_array.txt", true);
xmlhttp.send();
*/
