

var len = document.querySelectorAll('.Button').length;
for (var i = 0; i < len; i++) {

    document.querySelectorAll(".Button")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        var v = document.querySelector("h1");
        v.innerHTML = text;
        text = text.toLowerCase();

        var t = "Sounds/" + text + ".mp3";
        var x= document.querySelector("#Audio");

        x.src=t;

        x.play();



    });

}

