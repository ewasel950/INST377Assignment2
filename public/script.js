const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(... data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
       return place.city.match(regex) || place.state.match(regex) || place.zip.match(regex);
    });
}
function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {

        return `
        <li>
            <span class = 'name'> ${place.name}</span><br>
            <span class = 'city'> ${place.city}</span><br>
            <span class = 'zip'> ${place.zip} </span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches);
