
//Toggler entre mode sombre clair et sombre

    function toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
  

//Cartorgraphie
  let map = L.map('mapid').setView([13.5, 2.1], 6); // Centré sur le Niger
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
console.log("map: ", map);


  let marker = L.marker([13.5, 2.1]).addTo(map);
  marker.bindPopup("<b>Bienvenue à Tahoua !</b>").openPopup();

  setTimeout(() => {
    map.setView([14.0, 1.5], 7); // Zoom sur une autre région
  }, 3000);


  // Filtrer les projets réalisés


  function filterProjects(tech) {
    document.querySelectorAll('#project-list .project').forEach(p => {
      p.style.display = (tech === 'all' || p.dataset.tech === tech) ? 'block' : 'none';
    });
  }

   const images = ["/public/sitePlantes.png", "/public/sitePlantes.png", "/public/sitePlantes.png"];
  let index = 0;
  function showImage() {
    document.getElementById("carousel-img").src = images[index];
  }
  function nextImage() {
    index = (index + 1) % images.length;
    showImage();
  }
  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
  }
