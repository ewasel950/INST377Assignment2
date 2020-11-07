function range(int) {
    const arr = [];
    for (let i = 0; i < int; i += 1) {
      arr.push(i);
    }
    return arr;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }  

  async function main(){
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json;
    console.log('data from fetch', json);
    res.json(json);
  }
const restaurantdata = [];


function myMatches(word, restaurantdata){
    return restaurantdata.filter(item=> {
      const regex = new RegExp(word, 'gi');
      return item.name.match(regex)|| item.category.match(regex);
    });
}
//when value is changed
function displayMatches(){
    const matchArray = myMatches(this.value, restaurantdata);
    const html = matchArray.map(place =>{
        const regex = new RegExp (this.value, 'gi');

        //find searched item and replace with span class of highlight
        const restaurantName = place.name.replace(regex, `<span class = "h1">${this.
            value}</span>`)
        const stateName = place.state.replace(regex, `<span class = "h1">${this.
                value}</span>`)
        return `
         <li>
           <span class="name">${restaurantName}, ${stateName}</span>
           </li>
         `;
    }).join('');
}
  
