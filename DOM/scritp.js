function changeContent() {
    const text = document.getElementById('dynamic-text');
    text.textContent = "The content has been updated!";
    text.style.color = "green";
    text.style.fontWeight = "bold";
    text.classList.add("highlight");
}

function addElement() {
    const container = document.getElementById("container");
    const newDiv = document.createElement("div");
    newDiv.textContent = "A new element was added!";
    newDiv.id = "new-element";
    container.appendChild(newDiv);
}

function removeElement() {
    const element = document.getElementById("new-element");
    if (element) {
        element.remove();
    } else {
        alert("No element to remove!");
    }
}