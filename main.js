
var body = document.body;
var list1 = document.createElement("ul");

var tareas=[{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }];

function Datos(userId,id,title,completed){
  this.userId=userId,
  this.id=id,
  this.title=title,
  this.completed=completed
 };


function lista(){
	//body.renderInElement (body.appendChild(list1));
	var lista= new Datos(8,12,document.getElementById("tarea").value,true);
    tareas.push(lista);
    mostrar();

}
/*
function mostrar(){
    var html="";
  for(i=0;i<tareas.length;i++){
   var li = document.createElement("li");
    li.innerHTML = html;
    li.innerHTML = (tareas[i].title);
    list1.appendChild(li);

}

body.appendChild(list1);
}*/

function mostrar(){
var html = "";
 for (var i =0; i<tareas.length;i++){
  var dato_1 = tareas[i];
  //alert (dato_1);
  var s = "<li>"+ dato_1.title +"</li>";
  html += s;
 }
var lista = document.getElementById('list');
lista.innerHTML = html;
}
mostrar();



/*
function limpiar (){
  var resultado=document.getElementById('resultado');
var res=document.getElementsByTagName('input').value="";
resultado.innerHTML=res;
}*/


