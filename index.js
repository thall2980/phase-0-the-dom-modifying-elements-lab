// Write your code here!

function removeMainId(element) {
    document.querySelector(element).remove()
}

removeMainId('main')


let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.textContent = "Tyler is the champion"


document.body.append(newHeader)


