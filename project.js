#!/usr/bin/node

let projectData = [
    {
        image: '/images/java-script_721671.png',
        name: 'project one: AuraTunes',
        detail: 'AuraTunes: Music is now more than just background noise in the digital era; it\'s a tool for self-discovery, an escape, and a conduit to emotions. Music has the capacity to significantly influence our lives. That\'s whyI\'ve developed an audio app/website that offers something special, combining a mystical aura with connecting sound and a variety of life aspects.',
        github: '#',
        tags: '#javascript, #fullstack, #html/css'
    },
    {
        image: '/images/air-bnb_731980.png',
        name: 'AirBnB Clone',
        detail: 'A clone of the Airbnb website',
        github: 'https://github.com/kiptoobarchok/AirBnB_clone',
        tags: '#python, #fullstack, #html/css, #html, #sql ,#databases , #APIs' 
    },
    {
        image: '/images/car_5723765.png',
        name: 'project 3: Car Rental app',
        detail: 'An adventurer\'s dream website',
        github: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        image: '/images/chess.png',
        name: 'project 4: ChessBoard game',
        detail: 'a customized chess player game',
        github: '#',
        tags: '#javascript, #fullstack, #css, #sql, #databases'
    },
    {
        image: '/images/checklist_12672086.png',
        name: 'project 5: To Do list App',
        detail: 'a remimder app with additional features(eisenhower matrix)',
        github: '#',
        tags: '#javascript, #fullstack, #css, #databases, #APIs'
    },

    {
        image: '/images/moon_4867855.png',
        name: 'project 6: Weather app',
        detail: 'A dive into the API world via weather forecasts',
        github: '#',
        tags: '#python, #fullstack, #html/css, #apis, #databases'
    },

    {
        image: '/images/coding_2019282.png',
        name: 'project 7: Simple converter',
        detail: 'an app to convert different units',
        github: '#',
        tags: '#javascript, #fullstack, #css'
    },
]


//creating project cards

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
        <div class="project-card" data-tags="${data.tags}">
            <div class="project-wrapper">
                <div class="project-thumbnail">
                    <img src="/images/close.png" class="close-btn" alt="">
                    <img src="${data.image}" class="project-img" alt="">
                    <span class="tags">${data.tags}</span>
                </div>

                <div class="project-body">
                    <h1 class="project-name">${data.name}</h1>
                    <p class="project-detail">${data.detail}</p>
                    <a href="${data.github}" class="btn">GitHub</a>
                </div>
            </div>
        </div>
    `;
}

//project cards open and close function

projectData.forEach(data => createProjectCards(data));