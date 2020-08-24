//Circle Radius
function myCircleArea() {
    var radius = document.getElementById("radiuscircle").value;
    document.getElementById("circleareaoutput").innerHTML = Math.round(Math.PI * Math.pow(radius, 2));
  }
  function toggleCircleArea() {
    $( "#rad" ).toggle("drop");
  }
  //Background Color
  function toggleBGColor() {
    $( "#bg" ).toggle("drop");
  }
  function myBGColor() {
    let options = document.getElementById("bgcolor").value;
    const loptions = options.toLowerCase();

    if (loptions=='blue') {
    document.body.style.backgroundColor = "blue";
  } else { 
      if (loptions=='yellow') {
    document.body.style.backgroundColor = "yellow";
  } else { 
      if (loptions=='red') {
    document.body.style.backgroundColor = "red";
  } else { 
      if (loptions=='green') {
    document.body.style.backgroundColor = 'green';
  } else { 
      if (loptions=='pink') {
    document.body.style.backgroundColor = "pink";
  } else { 
   document.getElementById("bgcoloroutput").innerHTML = 'That\'s not a valid option!';
  }
  }
  }
  }
  }
  }
  //Random Integer
  function myRandomInt() {
    var x = Math.random();
    alert(Math.floor(x * 10));
  }
  //Add a random number between six, then multiply it by 2 
  function myRandomIntX() {
    alert((Math.floor( Math.random() * 6 ) + Math.floor( Math.random() * 6 )) * 2)
  }
  //Volume of Octogonal Prism
  function octPrism() {
    var a = prompt('What is the A value?');
    var h = prompt('What is the H value?');
    alert(2 * (1 + Math.sqrt(2)) * Math.pow(a , 2) * h);
  }