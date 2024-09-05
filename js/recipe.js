const RECIPE_PATH = document.location.toString().split('?r=')[1];

// Add all the items from a JS list to a HTML one
function listApply(listElement, listData) {
    for (let i=0; i < listData.length; i++) {
        const child = document.createElement('li')
        child.innerHTML = listData[i]
        listElement.appendChild(child);
    }
}

// Load the recipe into the page
fetch(`/recipes/${RECIPE_PATH}`).then((resp) => resp.json()).then((resp) => {
    document.title = resp.title;

    document.getElementById('title').innerHTML = resp.title;
    document.getElementById('serving-size').innerHTML = `Serving Size: ${resp.serving_size}`;
    document.getElementById('preparation').innerHTML = `Prep Time: ${resp.prep_time}`

    listApply(document.getElementById('ingredients'), resp.ingredients)
    listApply(document.getElementById('instructions'), resp.instructions)
});

document.getElementById('submit-button').addEventListener('click', () => {
    alert(`Sending the feedback: ${document.getElementById('feed-back-text').value}`)
})