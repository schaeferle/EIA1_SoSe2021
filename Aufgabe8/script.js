var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", function () {
        var sounds = [new Audio("L07_task_material_assets_A.mp3"), new Audio("L07_task_material_assets_C.mp3"), new Audio("L07_task_material_assets_F.mp3"), new Audio("L07_task_material_assets_G.mp3"), new Audio("L07_task_material_assets_G.mp3"), new Audio("L07_task_material_assets_snare.mp3"), new Audio("L07_task_material_assets_hihat.mp3"), new Audio("L07_task_material_assets_kick.mp3"), new Audio("L07_task_material_assets_laugh-1.mp3"), new Audio("L07_task_material_assets_laugh-2.mp3")];
        var index = 0;
        document.querySelector(".button1").addEventListener("click", function () { playSample(sounds[0]); });
        document.querySelector(".button2").addEventListener("click", function () { playSample(sounds[1]); });
        document.querySelector(".button3").addEventListener("click", function () { playSample(sounds[2]); });
        document.querySelector(".button4").addEventListener("click", function () { playSample(sounds[4]); });
        document.querySelector(".button5").addEventListener("click", function () { playSample(sounds[5]); });
        document.querySelector(".button6").addEventListener("click", function () { playSample(sounds[6]); });
        document.querySelector(".button7").addEventListener("click", function () { playSample(sounds[7]); });
        document.querySelector(".button8").addEventListener("click", function () { playSample(sounds[8]); });
        document.querySelector(".button9").addEventListener("click", function () { playSample(sounds[9]); });
        function playSample(music) {
            if (music === void 0) { music = new Audio; }
            music.play();
        }
        document.querySelector("#buttonPlay").addEventListener("click", function () {
            var interval = setInterval(function () {
                sounds[index].play();
                index += 1;
                if (index > 3)
                    index = 0;
                document.querySelector("#buttonPause").addEventListener("click", function () {
                    clearInterval(interval);
                });
            }, 400);
        });
        document.getElementById("buttonPlay").addEventListener("click", function () {
            document.getElementById("buttonPlay").classList.add("hidden");
            document.getElementById("buttonPause").classList.remove("hidden");
        });
        document.getElementById("buttonPause").addEventListener("click", function () {
            document.getElementById("buttonPause").classList.add("hidden");
            document.getElementById("buttonPlay").classList.remove("hidden");
        });
        document.getElementById("buttonTrash").addEventListener("click", function () {
            sounds.length = 0;
        });
        var remixBeat = [];
        var indexRemix = 0;
        var min = 0;
        var max = 9;
        for (var index_1 = 0; index_1 < sounds.length; index_1++) {
            var zufallsZahl = Math.round((Math.random() * (max - min)) + min);
            remixBeat.push(zufallsZahl);
        }
        function remixButton(remix) {
            if (remix === void 0) { remix = new Audio; }
            remix.play();
        }
        document.getElementById("buttonRandom").addEventListener("click", function () {
            var intervalRemix = setInterval(function () {
                sounds[indexRemix].play();
                indexRemix += 1;
                if (indexRemix > 9)
                    indexRemix = 0;
            });
        });
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map