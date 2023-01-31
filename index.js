// referencing add button
var button = document.getElementById("add")

// event listener for when add button is clicked 
button.addEventListener("click", function (e) {
    // preventing page from refreshing
    e.preventDefault()
    //referencing ul element
    var ul = document.getElementById("list");
    // referencing input field for new items to be added
    var myList = document.getElementById("myList");
    // creating a new li element 
    var li = document.createElement("li");
    li.setAttribute('id', myList.value);


    // creating div element
    var newDiv = document.createElement("div")
    var newP = document.createElement('p');
    // setting text value of div to value of input box
    var newPtext = document.createTextNode(myList.value)
    newP.appendChild(newPtext)
    // append p text to new div
    newDiv.appendChild(newP);
    // creating edit and delete button
    var newEditButton = document.createElement("button")
    newEditButton.appendChild(document.createTextNode("edit"))
    var newButton = document.createElement("button")
    newButton.appendChild(document.createTextNode("X"))
    // appending div element to dom
    li.appendChild(newDiv)
    li.appendChild(newEditButton)
    li.appendChild(newButton)
    ul.appendChild(li);
    // added event listener to new button
    newButton.addEventListener('click', function (e) {
        // refrencing parent of element that was clicked
        var liItem = e.currentTarget.parentNode
        // hiding element after button is clicked
        liItem.style.display = "none"
    })
    // adding event listener to new edit button
    newEditButton.addEventListener("click", function (e) {

        // remove text node from div

        var oldText = li.children[0].children[0].textContent
        li.children[0].children[0].innerText = "";
        // created new new input element 
        var newInput = document.createElement('input');
        // setting value of input to text that was previously in div
        newInput.value = oldText;
        //adding input element to the dom
        li.children[0].appendChild(newInput);
        // hiding edit button 
        newEditButton.style.display = "none"
        // creating a new save button
        var saveButton = document.createElement('button');
        saveButton.innerHTML = 'save'
        // added save button to dom
        li.children[0].children[0].appendChild(saveButton)
        // added event listener for save button
        saveButton.addEventListener('click', function (e) {
            // added etit button back
            newEditButton.style.display = "inline"
            // hiding save button
            saveButton.style.display = 'none'
            // grabbed value from input box
            var updatedInfo = newInput.value;
            // set the value of the div to the input box used previosuly
            li.children[0].children[0].innerText = updatedInfo;
            // hid input box
            newInput.style.display = 'none'
        })
    });
});

