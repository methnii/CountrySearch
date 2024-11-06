





loadItems();

async function loadItems() {

    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body += `
           <div class="card me-3 p-3" style="width: 15rem; ">
  <img src="${element.flags.png} " class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${element.name.official}</h5>
    <p class="card-text">Capital : ${element.capital}</p>
    <p class="card-text">Region : ${element.region}</p>
    <p class="card-text">Population : ${element.population}</p>
    <a href="${element.maps.googleMaps}" class="btn btn-primary">view on Google Maps</a>
  </div>
</div>
        `;



    });

    console.log(body);

    

    document.getElementById("row").innerHTML = body;

}

function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            <div class="card me-3 p-3" style="width: 15rem; ">
  <img src="${element.flags.png} " class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${element.name.official}</h5>
    <p class="card-text">Capital : ${element.capital}</p>
    <p class="card-text">Region : ${element.region}</p>
    <p class="card-text">Population : ${element.population}</p>
    <a href="${element.maps.googleMaps}" class="btn btn-primary">view on Google Maps</a>
  </div>
</div>
          
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}


