namespace Aufgabe8 {
    window.addEventListener("load", function (): void {
      var sounds: HTMLAudioElement[] = [new Audio("L07_task_material_assets_A.mp3"), new Audio("L07_task_material_assets_C.mp3"), new Audio("L07_task_material_assets_F.mp3"), new Audio("L07_task_material_assets_G.mp3"), new Audio("L07_task_material_assets_G.mp3"), new Audio("L07_task_material_assets_snare.mp3"), new Audio("L07_task_material_assets_hihat.mp3"), new Audio("L07_task_material_assets_kick.mp3"), new Audio("L07_task_material_assets_laugh-1.mp3"), new Audio("L07_task_material_assets_laugh-2.mp3")];
      var index: number = 0;
      document.querySelector(".button1").addEventListener("click", function (): void { playSample(sounds[0]); });
      document.querySelector(".button2").addEventListener("click", function (): void { playSample(sounds[1]); });
      document.querySelector(".button3").addEventListener("click", function (): void { playSample(sounds[2]); });
      document.querySelector(".button4").addEventListener("click", function (): void { playSample(sounds[4]); });
      document.querySelector(".button5").addEventListener("click", function (): void { playSample(sounds[5]); });
      document.querySelector(".button6").addEventListener("click", function (): void { playSample(sounds[6]); });
      document.querySelector(".button7").addEventListener("click", function (): void { playSample(sounds[7]); });
      document.querySelector(".button8").addEventListener("click", function (): void { playSample(sounds[8]); });
      document.querySelector(".button9").addEventListener("click", function (): void { playSample(sounds[9]); });
      function playSample(music: HTMLAudioElement= new Audio): void { 
        music.play();
        
       }
        
      document.querySelector("#buttonPlay").addEventListener("click", function (): void {
        var interval: number = setInterval(function (): void {
                sounds[index].play();
                index += 1;
                if (index > 3)
                    index = 0;
                document.querySelector("#buttonPause").addEventListener("click", function (): void {
                  clearInterval(interval);
                });
            },                             400);
        });
  
     
      
          
        
      document.getElementById("buttonPlay").addEventListener("click", function (): void {
          document.getElementById("buttonPlay").classList.add("hidden");
          document.getElementById("buttonPause").classList.remove("hidden");
        });
        
      
      document.getElementById("buttonPause").addEventListener("click", function (): void {
          document.getElementById("buttonPause").classList.add("hidden");
          document.getElementById("buttonPlay").classList.remove("hidden");
        });
        
      document.getElementById("buttonTrash").addEventListener("click", function(): void {
          sounds.length = 0;
        } );
        
    
     
    
      
  
  
      var remixBeat: number[] = [];
      var indexRemix: number = 0;
      var min: number = 0;
      var max: number = 9;
      
    
      for (let index: number = 0; index < sounds.length; index++) {
      
          var zufallsZahl: number = Math.round((Math.random() * (max - min)) + min);
  
          remixBeat.push(zufallsZahl);
        }
      function remixButton (remix: HTMLAudioElement= new Audio): void {
        remix.play();
        }
      
      document.getElementById("buttonRandom").addEventListener("click", function (): void { 
        var intervalRemix: number = setInterval(function (): void {
          sounds[indexRemix].play();
          indexRemix += 1;
          if (indexRemix > 9)
          indexRemix = 0;
          
          
          
        }
  
         
       
      
  
      
  
  
        );})})}