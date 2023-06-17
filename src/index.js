// Get menu content
fetch('https://api.sheety.co/603a9da4db78975a5462b3e50b35904b/portfolioDatas/menu')
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log("menu");
  console.log(json.menu);
});


// Get projects content
fetch('https://api.sheety.co/603a9da4db78975a5462b3e50b35904b/portfolioDatas/projects')
.then((response) => response.json())
.then(json => {
    // Do something with the data
    console.log("projects");
    console.log(json.projects);

    for(var i=0; i < json.projects.length; i++){
        let slide = document.querySelector('.projects__slide');

        slide.querySelector('.slide__title').innerHTML = json.projects[i].project;
        console.log(json.projects[i].project);
        console.log(json.projects[i].image);

        document.querySelector('.IMAGE-TEST').setAttribute('src', `${json.projects[i].image}`);


    }
});

// Get gallery content
fetch('https://api.sheety.co/603a9da4db78975a5462b3e50b35904b/portfolioDatas/gallery')
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log("gallery");
  console.log(json.gallery);
});