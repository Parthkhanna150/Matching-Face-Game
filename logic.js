            var numberOfFaces = 5;
            var score=0;

            function generateFaces()
            {
                var theLeftSide = document.getElementById("leftSide");
                var theRightSide = document.getElementById("rightSide");
                var a = theLeftSide.childElementCount;

                for (var j = 0; j < a; j++)
                {
                    theLeftSide.childNodes[j].removeEventListener("click", function() {
                    });
                }

                for (var i = 0; i < numberOfFaces; i++)
                {
                    var DOM_img = document.createElement("img");
                    DOM_img.src = "smile.png";
                    DOM_img.style.left = (10 + (500 - 10) * Math.random()) + "px";
                    DOM_img.style.top = (10 + (500 - 10) * Math.random()) + "px";
                    theLeftSide.appendChild(DOM_img);
                }

                var leftImages = theLeftSide.cloneNode(true);
                leftImages.removeChild(leftImages.lastChild);

               theRightSide.appendChild(leftImages);

                var c = theLeftSide.childElementCount;
                
                for (var i = 0; i < c - 1; i++)
                {
                    theLeftSide.childNodes[i].addEventListener("click", function() {
                        alert("Game Over. You scored:"+score);
                        window.location.reload();
                    });
                }

                theLeftSide.lastChild.addEventListener("click", function() {
                    generateFaces();
                    score++;
                });

            }
