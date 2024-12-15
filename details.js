// window.onload = function() {setTimeout(function() {document.querySelector('.loader').style.display='none'},3000);};
const getCountryParameter=()=> {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('country');  // Returns the value of 'country' (e.g., 'USA')
  }
  
  
    
        fetch('./CountriesData.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to load JSON');
          }
          return response.json();
        })
        .then((countries) => {
            const countrySection = document.querySelector('.country-details');
            let countryName = getCountryParameter();
            const countryInfo=(country)=>{
                const imgDiv = document.createElement('div');
                imgDiv.classList.add('img-side');
                const countryImg = document.createElement('img');
                countryImg.setAttribute('src', country.flag);
                countryImg.classList.add('country-flag');
                imgDiv.appendChild(countryImg);
                countrySection.appendChild(imgDiv);
                const countryInfo = document.createElement('div');
                countryInfo.classList.add('country-info');
                const countryTitle = document.createElement('h1');
                countryTitle.textContent = country.name;
                countryTitle.setAttribute('id', 'name-title');
                countryInfo.appendChild(countryTitle);
                countrySection.appendChild(countryInfo);
                const col2 = document.createElement('div');
                col2.classList.add('col-2');
                const countryBrief = document.createElement('ul');
                const nativeName = document.createElement('li');
                nativeName.innerHTML = `<strong>Native Name:</strong> ${country.nativeName}`;
                const population = document.createElement('li');
                population.innerHTML = `<strong>Population:</strong> ${country.population}`;
                const region = document.createElement('li');
                region.innerHTML = `<strong>Region:</strong> ${country.region}`;
                const subRegion = document.createElement('li');
                subRegion.innerHTML = `<strong>Sub Region:</strong> ${country.subregion}`;
                const capital = document.createElement('li');
                capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;
                countryBrief.appendChild(nativeName);
                countryBrief.appendChild(population);
                countryBrief.appendChild(region);
                countryBrief.appendChild(subRegion);
                countryBrief.appendChild(capital);
                col2.appendChild(countryBrief);
                countryInfo.appendChild(col2);
                const secondCol = document.createElement('ul');
                const topLevelDomain = document.createElement('li');
                topLevelDomain.innerHTML = `<strong>Top Level Domain:</strong> ${country.top_level_domain}`;
                const currencies = document.createElement('li');
                currencies.innerHTML = `<strong>Currencies:</strong> ${country.currencies.join(', ')}`;
                const languages = document.createElement('li');
                languages.innerHTML = `<strong>Languages:</strong> ${country.languages.join(', ')}`;
                secondCol.appendChild(topLevelDomain);
                secondCol.appendChild(currencies);
                secondCol.appendChild(languages);
                col2.appendChild(secondCol);
                const col3 = document.createElement('div');
                col3.classList.add('col-3');
                const borderCountries = document.createElement('ul');
                const borderTitle = document.createElement('strong');
                borderTitle.textContent = 'Border Countries:';
                borderCountries.appendChild(borderTitle);
                col3.appendChild(borderCountries);
                countryInfo.appendChild(col3);
                country.border_countries.forEach((border)=>{
                    const borderCountry = document.createElement('li');
                    const borderButton = document.createElement('button');
                    borderButton.classList.add('btn');
                    borderButton.textContent = border;
                    borderCountry.appendChild(borderButton);
                    borderCountries.appendChild(borderCountry);
                })

            }
        countries.forEach((country) => {
            if (country.name === countryName) {
                countryInfo(country);
            }
        });
        setTimeout(function() {document.querySelector('.loader').style.display='none'},500)
            
    })
      
         
      
      
          
        .catch((error) => console.error('Error loading JSON:', error));

        const darkMode=()=>{
            const body = document.body;
            const header = document.querySelector('header');
            const buttons = document.querySelectorAll('.btn');
            const li=document.querySelectorAll('li');
            const strong=document.querySelectorAll('strong');
            body.style.backgroundColor = 'hsl(207, 26%, 17%)';
            header.style.backgroundColor = 'hsl(209, 23%, 22%)';
            const title = document.getElementById('name-title');
            buttons.forEach((button) => {
                button.style.backgroundColor = 'hsl(209, 23%, 22%)';
                button.style.color = 'gray';
            });
            li.forEach((list)=>{
                list.style.color='gray';
            });
            strong.forEach((strong)=>{
                strong.style.color='white';
            });
            title.style.color='white';


        }
    