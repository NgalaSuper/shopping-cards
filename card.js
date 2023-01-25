function showSection(images1) {
    var section = document.getElementById(images1);
    section.style.display = 'block';
    var otherSections = document.querySelectorAll('.section');
    for (var i = 0; i < otherSections.length; i++) {
      if (otherSections[i] !== section) {
        otherSections[i].style.display = 'none';
      }
    }
  }
  function changeColor(element) {
    var list = document.querySelectorAll('#size');
    for (var i = 0; i < list.length; i++) {
      list[i].style.background = "#D9D9D9";
      list[i].style.color = "black";
    }
    element.style.background = "#022A50";
    element.style.color = "white";
  }

  function changeColorSize(element) {
    var list = document.querySelectorAll('#changeolorsize');
    for (var i = 0; i < list.length; i++) {
      list[i].style.background = "#D9D9D9";
      list[i].style.color = "black";
    }
    element.style.background = "#087C78";
    element.style.color = "white";
  }
 
  function changeColorCircle(element) {
    var list = document.querySelectorAll('#change-circle');
    for (var i = 0; i < list.length; i++) {
      list[i].style.color = "#D9D9D9";
    }
    element.style.color = "#087C78";
    
  }


  function showSection1(showimage1) {
    var section1 = document.getElementById(showimage1);
    section1.style.transition = "all 2s";
    setTimeout(function(){ 
        section1.style.display = 'block';
        section1.style.opacity = 1; 
    }, 50);
    var otherSections = document.querySelectorAll('.section1');
    for (var i = 0; i < otherSections.length; i++) {
      if (otherSections[i] !== section1) {
        otherSections[i].style.display = 'none';
      }
    }
}

document.addEventListener("click", function (event) {
    showSection1(showimage1);
});
