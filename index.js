
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

        // newEditButton.addEventListener('click',(e))
        //         if(button.textContent === 'edit'){
        //            var myList = li.firstElementChild;
        //             li.removeChild(myList)
        //             button.textContent= 'save';
        //             }else if(button.textContent === 'save'){
        //                 const input =li.firstElementChild;
        //                 const span = document.createElement('span')
        //                 span.textContent = input.value;
        //                 li.insertBefore(span, input);
        //                 li.removeChild(input);
        //                 button.textContent = 'edit';
        //             }
            
            
            
            



        // <input type="button" value="save my edits" onclick="saveEdits()"/>

    });

});


