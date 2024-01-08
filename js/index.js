
window.onload = fadeIn; 

function fadeIn() { 
    
    var fade = document.getElementById("div1"); 
    var fade2 = document.getElementById("div1.1");
    var fade3 = document.getElementById("input1");


    var opacity = 0; 
    var intervalID = setInterval(function() { 
    
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            fade.style.opacity = opacity; 
        } else { 
            
            clearInterval(intervalID); 

            
        } 
    }, 200); 

    var opacity2 = 0; 
    var intervalID2 = setTimeout(() => {setInterval(function() { 
    
        if (opacity2 < 1) { 
            opacity2 = opacity2 + 0.1 
            fade2.style.opacity = opacity2; 
        } else { 
            
            clearInterval(intervalID2); 
            
        } 
    }, 200); }, 2000);
    
    var opacity3 = 0;
    var intervalID3 = setTimeout(() => {setInterval(function() { 
    
        if (opacity3 < 1) { 
            opacity3 = opacity3 + 0.1 
            fade3.style.opacity = opacity3; 
        } else { 
            
            clearInterval(intervalID3); 
            
        } 
    }, 200); }, 4000);


} 

var input = document.getElementById("input1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {

    var sound1 = document.getElementById("myaudio");
    sound1.play()
      
    username = document.getElementById("input1").value;
    document.getElementById("div1.2").textContent = `Hello ${username}. What truth would you like to know about yourself?`

    var fade5 = document.getElementById("div1.2");
    var opacity5 = 0;
    var intervalID5 = setInterval(function() { 
    
        if (opacity5 < 1) { 
            opacity5 = opacity5 + 0.1 
            fade5.style.opacity = opacity5; 
        } else { 
            
            clearInterval(intervalID5); 
            
        } 
    }, 200); 

    var sound1 = document.getElementById("myaudio");
    sound1.play()
    
    var fade6 = document.getElementById("hp");
    var opacity6 = 0;
    var intervalID6 = setTimeout(() => {setInterval(function() { 
    
        if (opacity6 < 1) { 
            opacity6 = opacity6 + 0.1 
            fade6.style.opacity = opacity6; 
        } else { 
            
            clearInterval(intervalID6); 
            
        } 
    }, 200); }, 2000);

    var fade7 = document.getElementById("hp2");
    var opacity7 = 0;
    var intervalID7 = setTimeout(() => {setInterval(function() { 
    
        if (opacity7 < 1) { 
            opacity7 = opacity7 + 0.1 
            fade7.style.opacity = opacity7; 
        } else { 
            
            clearInterval(intervalID7); 
            
        } 
    }, 200); }, 4000);


  }
});


const myDiv = document.querySelector('#hp');

// add a click event listener to the div
myDiv.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  document.getElementById("div1").style.display = "none";
  document.getElementById("div1.1").style.display = "none";
  document.getElementById("div1.2").style.display = "none";
  document.getElementById("input1").style.display = "none";
//   document.getElementById("hp").style.display = "none";
  document.getElementById("hp2").style.display = "none";

  document.getElementById("hate1").textContent = `Through my powers, I am going to see and know the truth on what you hate the most.`
  document.getElementById("hate2").textContent = `${username}, you hate the things that make you waste time. Time for you is like currency, that all living people have and young people are blessed to have. You hate people that are insensitive and cannot be trusted, because you know you will never be able to depend on those type of people. You want the people by your side to be the people that you can trust with your life.`

  var fade8 = document.getElementById("hate1");
  var opacity8 = 0;
  var intervalID8 = setTimeout(() => {setInterval(function() { 
  
      if (opacity8 < 1) { 
          opacity8 = opacity8 + 0.1 
          fade8.style.opacity = opacity8; 
      } else { 
          
          clearInterval(intervalID8); 
          
      } 
  }, 200); }, 2000);

  var fade9 = document.getElementById("hate2");
  var opacity9 = 0;
  var intervalID9 = setTimeout(() => {setInterval(function() { 
  
      if (opacity9 < 1) { 
          opacity9 = opacity9 + 0.1 
          fade9.style.opacity = opacity9; 
      } else { 
          
          clearInterval(intervalID9); 
          
      } 
  }, 700); }, 5000);

  var fade10 = document.getElementById("hp3");
  var opacity10 = 0;
  var intervalID10 = setTimeout(() => {setInterval(function() { 
  
      if (opacity10 < 1) { 
          opacity10 = opacity10 + 0.1 
          fade10.style.opacity = opacity10; 
      } else { 
          
          clearInterval(intervalID10); 
          
      } 
  }, 200); }, 15000);

  
});


const myDiv2 = document.querySelector('#hp3');

// add a click event listener to the div
myDiv2.addEventListener('click', function() {
    document.getElementById("hp").style.display = "none";
    document.getElementById("hate1").style.display = "none";
    document.getElementById("hate2").style.display = "none";

    var fade11 = document.getElementById("yes_div");
    var opacity11 = 0;
    var intervalID11 = setTimeout(() => {setInterval(function() { 
    
        if (opacity11 < 1) { 
            opacity11 = opacity11 + 0.1 
            fade11.style.opacity = opacity11; 
        } else { 
            
            clearInterval(intervalID11); 
            
        } 
    }, 200) }, 1500);

    var fade12 = document.getElementById("canyoudiv");
    var opacity12 = 0;
    var intervalID12 = setTimeout(() => {setInterval(function() { 
    
        if (opacity12 < 1) { 
            opacity12 = opacity12 + 0.1 
            fade12.style.opacity = opacity12; 
        } else { 
            
            clearInterval(intervalID12); 
            
        } 
    }, 200); }, 5500);
  
    var fade13 = document.getElementById("nodiv");
    var opacity13 = 0;
    var intervalID13 = setTimeout(() => {setInterval(function() { 
    
        if (opacity13 < 1) { 
            opacity13 = opacity13 + 0.1 
            fade13.style.opacity = opacity13; 
        } else { 
            
            clearInterval(intervalID13); 
            
        } 
    }, 200); }, 9500);

    var fade14 = document.getElementById("canshow");
    var opacity14 = 0;
    var intervalID14 = setTimeout(() => {setInterval(function() { 
    
        if (opacity14 < 1) { 
            opacity14 = opacity14 + 0.1 
            fade14.style.opacity = opacity14; 
        } else { 
            
            clearInterval(intervalID14); 
            
        } 
    }, 200); }, 12500);

    var fade15 = document.getElementById("imag");
    var opacity15 = 0;
    var intervalID15 = setTimeout(() => {setInterval(function() { 
    
        if (opacity15 < 1) { 
            opacity15 = opacity15 + 0.1 
            fade15.style.opacity = opacity15; 
        } else { 
            
            clearInterval(intervalID15); 
            
        } 
    }, 300); }, 16500);
  
});


const myDiv3 = document.querySelector('#hp2');
myDiv3.addEventListener('click', function() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div1.1").style.display = "none";
    document.getElementById("div1.2").style.display = "none";
    document.getElementById("input1").style.display = "none";
  //   document.getElementById("hp").style.display = "none";
    document.getElementById("hp2").style.display = "none";
    document.getElementById("hp").style.display = "none";
    document.getElementById("hate1").style.display = "none";
    document.getElementById("hate2").style.display = "none";

    var fade11 = document.getElementById("yes_div");
    var opacity11 = 0;
    var intervalID11 = setTimeout(() => {setInterval(function() { 
    
        if (opacity11 < 1) { 
            opacity11 = opacity11 + 0.1 
            fade11.style.opacity = opacity11; 
        } else { 
            
            clearInterval(intervalID11); 
            
        } 
    }, 200) }, 1500);

    var fade12 = document.getElementById("canyoudiv");
    var opacity12 = 0;
    var intervalID12 = setTimeout(() => {setInterval(function() { 
    
        if (opacity12 < 1) { 
            opacity12 = opacity12 + 0.1 
            fade12.style.opacity = opacity12; 
        } else { 
            
            clearInterval(intervalID12); 
            
        } 
    }, 200); }, 5500);
  
    var fade13 = document.getElementById("nodiv");
    var opacity13 = 0;
    var intervalID13 = setTimeout(() => {setInterval(function() { 
    
        if (opacity13 < 1) { 
            opacity13 = opacity13 + 0.1 
            fade13.style.opacity = opacity13; 
        } else { 
            
            clearInterval(intervalID13); 
            
        } 
    }, 200); }, 9500);

    var fade14 = document.getElementById("canshow");
    var opacity14 = 0;
    var intervalID14 = setTimeout(() => {setInterval(function() { 
    
        if (opacity14 < 1) { 
            opacity14 = opacity14 + 0.1 
            fade14.style.opacity = opacity14; 
        } else { 
            
            clearInterval(intervalID14); 
            
        } 
    }, 200); }, 12500);

    var fade15 = document.getElementById("imag");
    var opacity15 = 0;
    var intervalID15 = setTimeout(() => {setInterval(function() { 
    
        if (opacity15 < 1) { 
            opacity15 = opacity15 + 0.1 
            fade15.style.opacity = opacity15; 
        } else { 
            
            clearInterval(intervalID15); 
            
        } 
    }, 300); }, 16500);
  
});
