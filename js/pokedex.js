function logic() {

    // Empty array to hold created pokemon objects
    const pokedexMemory = [];

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;
    

/*-----------------------------------------------
 * Add your solution code here
 *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

		// Use If to ensure input validation (ensure input fields are !empty)
            if (!name || !type || !region) {
                alert("Please enter Pokemon data.");
                return;
            }

            document.getElementById("name").reset();

        // Create pokemon object here (const pokemon) using user input Strings
            const pokemon = { name, type, region };

        // Create a span element (const pokemonData) and put the pokemon objects properties inside of it
            const pokemonData = document.createElement("span");
            pokemonData.textContent = ` ${name}  - ${type}  - ${region} region ` ;

        // Adding created pokemon object to pokedexMemory array
            pokedexMemory.push(pokemon);

    /* --- Part 2 : Creating other DOM Objects --- */
        
        // Create HTML li element here (const pokedexEntry)
            const pokedexEntry = document.createElement("li");

        // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
            pokedexEntry.classList.add(type);

        // Creating a preview button (using a Template Literal)
        // this code is for an html form that will Google search the name of the pokemon
        const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <button type="submit">Preview</button>
            </form>
        `;

    
    /* --- Part 3 : Add things into the DOM --- */

        // Firstly append pokemonData to the innerHTML of pokedexEntry
            pokedexEntry.appendChild(pokemonData);
            

        // Secondly append the previewButton to innerHTML of pokedexEntry
            pokedexEntry.insertAdjacentHTML("beforeend", previewButton);

        // Lastly we will get the ul List element that is meant to contain all pokedex entries
        // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element
            const pokedexEntries = document.getElementById("pokedex-entries");
            pokedexEntries.appendChild(pokedexEntry);

        // Logging the pokedexMemory to the console
            console.log(pokedexMemory);


/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/
}

