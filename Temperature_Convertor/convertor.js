function convert() {
  var x = document.getElementById("menuu").selectedIndex;
  var value1 = document.getElementsByTagName("option")[x].value;
  console.log("function called");
  if (value1 == "1") {
    var value = document.getElementById("in").value;
    var final = value * 1.8 + 32;
    document.getElementById("out").value = final.toFixed(3);
  } else {
    var value2 = document.getElementById("in").value;
    var final = (value2 - 32) / 1.8;
    console.log(final);
    document.getElementById("out").value = final.toFixed(3);
  }
}
