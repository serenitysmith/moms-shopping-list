
var button = document.getElementById("add")

button.addEventListener("click", function (e) {
    e.preventDefault()
    var ul = document.getElementById("list");
    var myList = document.getElementById("myList");
    var li = document.createElement("li");
    li.setAttribute('id', myList.value);
    //li.appendChild(document.createTextNode(myList.value));


    var newDiv = document.createElement("div")
    var newP = document.createElement('p');
    var newPtext = document.createTextNode(myList.value)
    newP.appendChild(newPtext)
    newDiv.appendChild(newP);
    // newDiv.appendChild(document.createTextNode(myList.value))
    var newEditButton = document.createElement("button")
    newEditButton.appendChild(document.createTextNode("edit"))
    var newButton = document.createElement("button")
    newButton.appendChild(document.createTextNode("X"))
    li.appendChild(newDiv)
    li.appendChild(newEditButton)
    li.appendChild(newButton)
    ul.appendChild(li);

    newButton.addEventListener('click', function (e) {
        //alert("hi")
        console.log("hello")
        var liItem = e.currentTarget.parentNode
        liItem.style.display = "none"
    })

    newEditButton.addEventListener("click", function (e) {

        // remove text node from div

        var oldText = li.children[0].children[0].textContent
        li.children[0].children[0].innerText = "";

        var newInput = document.createElement('input');
        newInput.focus();
        newInput.value = oldText;
        li.children[0].appendChild(newInput);
        //localStorage.setItem("list", "newInput");




        // li.children[0].children[0].removeChild(li.children[0].children[0].firstElementChild)

        // create input element


        

        // append input element to list item
    });



})





// document.append(addItem.value)

/* <ul id="list"></ul>
var li = document.createElement("li");
li.innerHTML = "Item";
document.getElementById("list").appendChild(li); */