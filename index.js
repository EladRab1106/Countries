let countriesData = [];
let GeneralCountriesCode;
let GetAllCountries;
let FilteredCountries;
let AllFilter=document.getElementById('All');
let dark;
fetch('./CountriesData.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load JSON');
    }
    return response.json();
  })
  .then((countries) => {
    FilteredCountries = countries;
    const countryContainer = document.querySelector('.countries-grid');
    GeneralCountriesCode=(FilteredCountries)=>{
    FilteredCountries.forEach((country) => {    
    const countryCard= document.createElement('a');
    countryCard.classList.add('country', 'scale-effect');
    countryCard.setAttribute('href', 'details.html?country=' + encodeURIComponent(country.name));
    countryCard.setAttribute('data-country-name', country.name);
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country-flag');
    const countryImg = document.createElement('img');
    countryImg.setAttribute('src', country.flag);
    const countryInfo = document.createElement('div');
    countryInfo.classList.add('country-info');
    const countryTitle = document.createElement('h2');
    countryTitle.classList.add('country-title');
    countryTitle.textContent = country.name;
    countryCard.appendChild(countryDiv);
    countryDiv.appendChild(countryImg);
    countryCard.appendChild(countryInfo);
    countryInfo.appendChild(countryTitle);
    const countryBrief = document.createElement('ul');
    countryBrief.classList.add('country-brief');
    const population = document.createElement('li');
    population.innerHTML = `<strong>Population: </strong>${country.population}`;
    const region = document.createElement('li');
    region.innerHTML = `<strong>Region: </strong>${country.region}`;
    const capital = document.createElement('li');
    capital.innerHTML = `<strong>Capital: </strong>${country.capital}`;
    countryBrief.appendChild(population);
    countryBrief.appendChild(region);
    countryBrief.appendChild(capital);
    countryInfo.appendChild(countryBrief);
    countryContainer.appendChild(countryCard);
    
    })
if(dark){
    darkMode();
}};
    GeneralCountriesCode(FilteredCountries);
    GetAllCountries = () => {
        FilteredCountries = countries;
        const countryContainer = document.querySelector('.countries-grid');
        countryContainer.innerHTML = '';
        GeneralCountriesCode(FilteredCountries);
        hideDropDown();
    }
    AllFilter.addEventListener('click', GetAllCountries);
    GetCountryByRegion = (region) => {    
        FilteredCountries = countries.filter((country) => country.region === region);
        const countryContainer = document.querySelector('.countries-grid');
        countryContainer.innerHTML = '';
        GeneralCountriesCode(FilteredCountries);
    }
    document.querySelectorAll('.Region').forEach((region) => {
        if(region.getAttribute('id')==='All'){
            

        }
        else{
        region.addEventListener('click', (e) => {
            const region = e.target.getAttribute('id');
            GetCountryByRegion(region);
            hideDropDown();

    })}})
    const searchInput = document.getElementById('input');
    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value;
        FilteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase()));
        const countryContainer = document.querySelector('.countries-grid');
        countryContainer.innerHTML = '';
        GeneralCountriesCode(FilteredCountries);
    });

    const presentDropDown=()=>{
        const dropDownBody = document.getElementsByClassName('dropdown-body')[0];
        dropDownBody.style.visibility = 'visible';
        dropDownBody.style.opacity = '1';
    }
    const hideDropDown=()=>{
        const dropDownBody = document.getElementsByClassName('dropdown-body')[0];
        dropDownBody.style.visibility = 'hidden';
        dropDownBody.style.opacity = '0';
    }
    const darkMode=()=>{
        dark=true;
        const body = document.body;
        const header = document.querySelector('header');
        const li=document.querySelectorAll('li');
        const strong=document.querySelectorAll('strong');
        const searchInput = document.getElementById('input');
        const dropDownHeader = document.getElementsByClassName('dropdown-header')[0];
        const dropB= document.getElementById('dropB');
        const countryTitle = document.querySelectorAll('.country-title');
        const dropDownBody = document.getElementsByClassName('dropdown-body')[0];
    
        body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        header.style.backgroundColor = 'hsl(209, 23%, 22%)';
        
        const countryInfo = document.querySelectorAll('.country-info');
        countryInfo.forEach((info) => {
            info.style.backgroundColor = 'hsl(209, 23%, 22%)';
        })
        li.forEach((list)=>{
            list.style.color='gray';
        });
        strong.forEach((strong)=>{
            strong.style.color='white';
        });
        searchInput.style.backgroundColor = 'hsl(209, 23%, 22%)';
        searchInput.style.color = 'gray';
        dropDownHeader.style.backgroundColor = 'hsl(209, 23%, 22%)';
        dropB.style.color = 'gray';
        countryTitle.forEach((title)=>{
            title.style.color='white';
        })
        dropDownBody.style.backgroundColor = 'hsl(209, 23%, 22%)';
    }
    document.getElementById('dark-mode').addEventListener('click', darkMode);
    document.getElementById('dropB').addEventListener('click', presentDropDown);

})

     
  .catch((error) => console.error('Error loading JSON:', error));



  









