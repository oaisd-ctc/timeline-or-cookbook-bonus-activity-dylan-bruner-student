function addRecipeToList(elem, link, title, description, image) {
    const titleElem = document.createElement('a');
    titleElem.innerHTML = title;
    titleElem.href = link;
    titleElem.id = 'title'

    const descriptionElem = document.createElement('p');
    descriptionElem.innerHTML = description;

    const imageElem = document.createElement('img');
    imageElem.src = image;
    imageElem.alt = 'Picture of the recipes results'


    const container = document.createElement('li');
    container.appendChild(imageElem);
    container.classList.add('recipe-container')

    const subContainer = document.createElement('div');
    subContainer.appendChild(titleElem);
    subContainer.appendChild(descriptionElem);

    container.appendChild(subContainer);

    elem.appendChild(container)
}

fetch('/recipes/manifest.json').then((resp) => resp.json()).then((resp) => {
    const RECIPE_LIST_ELEM = document.getElementById('recipes');
    const RECIPES = resp['recipes'];

    for (let i=0; i < RECIPES.length; i++) {
        addRecipeToList(
            RECIPE_LIST_ELEM,
            `/pages/recipe.html?r=${RECIPES[i].target}`,
            RECIPES[i].title,
            RECIPES[i].description,
            `images/${RECIPES[i].image}`
        )
    }

    // addRecipeToList(document.getElementById('recipes'), 'test', 'my super awsome description', 'image')
})