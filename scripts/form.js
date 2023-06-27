var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
    var x = document.getElementsByClassName("page");
    x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("previous").style.display = "none";
    } else {
      document.getElementById("previous").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("next").innerHTML = "Submit";
      document.getElementById("next").type = "submit";
      document.getElementById("extractionrecord").addEventListener("submit", handleSubmit);
    } else {
      document.getElementById("next").innerHTML = "Next";
      document.getElementById("next").type = "button";
      document.getElementById("extractionrecord").removeEventListener("submit", handleSubmit);
    }
}

function nextPrev(n) {
    
    var x = document.getElementsByClassName("page");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    if (currentTab >= x.length) {
      //document.getElementById("extractionrecord").submit();
      document.getElementById("previous").style.display = "none";
      document.getElementById("next").style.display = "none";
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
        y[i].className += " invalid";
        valid = false;
      }
      else {
        y[i].classList.remove("invalid");
      }
    }
    return valid; 
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    document.getElementById("formoutput").style.display = "block";
    document.getElementById("formoutput").innerHTML = "Test Output";
  }