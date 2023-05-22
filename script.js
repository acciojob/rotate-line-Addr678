//your JS code here. If required.
 var line = document.getElementById('line');
        var angle = 0;

        function rotateLine() {
            angle += 1;
            line.style.transform = 'rotate(' + angle + 'deg)';
            requestAnimationFrame(rotateLine);
        }

        rotateLine();