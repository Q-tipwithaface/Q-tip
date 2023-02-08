<head>
   <style> 
      input[type='Image'] { position: absolute; }
   </style>   
</head>

<body>
   <input type="Image" id="test1" src="{{ site.baseurl }}/images/hamburger-frontend.jpg" height="150" width="150" onclick="scoreboard()" />

   <script>   
      function scoreboard() {
      score = score + 1;
      console.log(score);
      }

      function moveimage() {
      var test = document.getElementById("test1");
      let w_screen = window.screen.availWidth - 150;
      let h_screen = window.screen.availHeight - 150;
      test.style.top = Math.floor((Math.random() * w_screen) + 1) + "px";
      test.style.left = Math.floor((Math.random() * h_screen) + 1) + "px";    
      }

      function stop_moveimage() {
      clearInterval(moveimage_interval);
      clearTimeout(image_timeout);
      }
   


      var score = 0;
      moveimage();
      moveimage_interval = setInterval(moveimage, 1000);
      image_timeout = setTimeout(stop_moveimage, 10000);

   </script>
</body>