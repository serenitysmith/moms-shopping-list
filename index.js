
var button = document.getElementById("add")

button.addEventListener("click", function (e) {
    e.preventDefault()
    var ul = document.getElementById("list");
    var myList = document.getElementById("myList");
    var li = document.createElement("li");
    li.setAttribute('id', myList.value);
    //li.appendChild(document.createTextNode(myList.value));


    var newDiv = document.createElement("div")
    newDiv.appendChild(document.createTextNode(myList.value))
    var newEditButton = document.createElement("button")
    newEditButton.appendChild(document.createTextNode("edit"))
    var newButton = document.createElement("button")
    newButton.appendChild(document.createTextNode("X"))
    li.appendChild(newDiv)
    li.appendChild(newEditButton)
    li.appendChild(newButton)
    ul.appendChild(li);

    newButton.addEventListener('click', function (e){
        //alert("hi")
         var liItem = e.currentTarget.parentNode
         liItem.style.display = "none"
        
    })

})



// document.append(addItem.value)

/* <ul id="list"></ul>
var li = document.createElement("li");
li.innerHTML = "Item";
document.getElementById("list").appendChild(li); */