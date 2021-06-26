
function ca(){
    const mydiv=document.createElement("Ebrahim");
    mydiv.classList.add('card');
    mydiv.classList.add('card-body');
    document.body.appendChild(mydiv);

     var qq=document.querySelectorAll("ebrahim");
     console.log(qq);
     console.log(qq.length);

    for (let i = 0; i < qq.length; i++)

 {
    var rr=document.querySelectorAll("ebrahim");
    var cv=document.createElement("p");
    cv.innerHTML="dddddddddddddddd";
   
    rr[i].appendChild(cv);
  }



}  

 
 


function inp(){

var h="";

var val=document.getElementById("inp").value;



if (h!==val){
  var val=document.getElementById("inp").value;
// document.getElementById("demo").innerHTML = val;

myChart.data.labels.push(val);
piChart.data.labels.push(val);
myChart.data.datasets[0].data.push(21);
piChart.data.datasets[0].data.push(21);

myChart.data.datasets[0].backgroundColor = ['#f2d13a', '#c9deeb', '#cacaca'];
myChart.update();
piChart.update();

 

const mydiv=document.createElement("Ebrahim");
    mydiv.classList.add('card');
    mydiv.classList.add('card-body');

    mydiv.innerHTML=val;
    document.querySelectorAll(".card-body")[0].appendChild(mydiv);

    document.getElementById('topcard').style.visibility = 'visible';


var dele=document.createElement("h6");
dele.innerHTML=val;

// var cards=document.createElement("h1");
// cards.innerHTML=val;
// document.querySelectorAll(".ebrahim")[0].appendChild(cards);



 

document.querySelectorAll(".del")[0].appendChild(dele);

// var rr=document.createElement("h1");
// document.getElementById("yy").style.visibility = 'visible';
// rr.innerHTML=val;
// document.querySelectorAll(".inpr")[0].appendChild(rr);
document.getElementById("inp").value="";

}
else {
   
}
}


function delfun() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}


var ctx = document.getElementById('myChart').getContext('2d');
 
var myChart = new Chart(ctx,  {
    type: 'bar',
    data: {
        
        labels: ['gg', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// function bfun(){
//  var r=document.createElement("b");
//  r.innerHTML=" ttttt ";
// document.querySelectorAll(".c")[0].appendChild(r);
// }
// for(var i=0; i<=3; i++){
// document.querySelectorAll("a")[i].innerHTML="////ebrahim///";
// var g=document.querySelectorAll(".dd")[i];
// for (var e=0; e<=3; e++){
//  g.innerHTML=".dddddddddddddddddddddddddddddd";
//  console.log(i);
// }
// e.innerHTML="uuuuuuuu";
// console.log(i);
// console.log("fffff");
// }


// function fun(){
//  document.getElementById('id1').style.color = 'red'
// }

// document.getElementById("yy").style.visibility = "hidden";



var pi = document.getElementById('piChart').getContext('2d');
 

var piChart = new Chart(pi, {
    type: 'pie',   
    data:{

      labels: ['gg', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            
            data: [12, 19, 3, 5, 2, 3],

    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
            
        },





        ],



    },



     
});










