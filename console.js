
var ee = document.querySelectorAll("Ebrahim");
undefined
ee
NodeList(4) [ ebrahim.card.card-body, ebrahim.card.card-body, ebrahim.card.card-body, ebrahim.card.card-body
 ]

ee[0].removeChild(ee[0].childNodes[0]);
#text "dddd"

ee[0].removeChild(ee[0].childNodes[1]);
Uncaught TypeError: Node.removeChild: Argument 1 is not an object.
    <anonymous> debugger eval code:1
debugger eval code:1:7
ee[0].removeChild(ee[1].childNodes[1]);
Uncaught TypeError: Node.removeChild: Argument 1 is not an object.
    <anonymous> debugger eval code:1
debugger eval code:1:7
ee[1].removeChild(ee[1].childNodes[0]);
#text "ssssss"

ee[1].childNodes;
NodeList []

​

ee[3].remove()
