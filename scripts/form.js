var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
    var x = document.getElementsByClassName("page");
    x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("previous").style.display = "none";
    } else {
      document.getElementById("next").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("next").innerHTML = "Submit";
    } else {
      document.getElementById("next").innerHTML = "Next";
    }
}

function nextPrev(n) {
    
    var x = document.getElementsByClassName("page");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    if (currentTab >= x.length) {
      document.getElementById("extractionrecord").submit();
      return false;
    }
    showTab(currentTab);
  }


  function validateForm() {
   
    var x, y, i, valid = true;
    x = document.getElementsByClassName("page");
    y = x[currentTab].getElementsByTagName("input");
    
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        valid = false;
      }
    }
    return valid; 
  }