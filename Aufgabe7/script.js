window.addEventListener("load", function () {
    document.body.style.backgroundColor = "#000000";
    document.querySelector(".button1").addEventListener("click", function () { playSample("L07_task_material_assets_A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("L07_task_material_assets_C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("L07_task_material_assets_F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("L07_task_material_assets_G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("L07_task_material_assets_kick.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("L07_task_material_assets_snare.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("L07_task_material_assets_hihat.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("L07_task_material_assets_laugh-2.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("L07_task_material_assets_laugh-1.mp3"); });
    function playSample(samples) {
        var sound = new Audio(samples);
        sound.play();
    }
    ;
    document.querySelector(".playButton").addEventListener("click", function playBeat() {
        setInterval(function () { playSample("L07_task_material_assets_kick.mp3"); }, 600);
        setInterval(function () { playSample("L07_task_material_assets_snare.mp3"); }, 1200);
        setInterval(function () { playSample("L07_task_material_assets_hihat.mp3"); }, 2400);
    });
});
//# sourceMappingURL=script.js.map