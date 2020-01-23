let projectsList = [
  {
    name: 'Project1',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project2',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=2',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project3',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=3',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project4',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=4',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project5',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=5',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project6',
    desc: 'a lil description of something now here.',
    url: 'https://picsum.photos/200?random=6',
    tags: '#css, #html, #bootstrap'
  }
]


let rowElement = document.querySelector('.row')

projectsList.forEach(item => {
  console.log('item', item)
  let cardTemplate =  `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.url}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  `
  // rowElement.innerHTML = cardTemplate
  rowElement.insertAdjacentHTML('beforeend', cardTemplate)
})
