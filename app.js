#!/usr/bin/node

//project card open and close functions

let projects = document.querySelectorAll('.project-card');

projects.forEach((card, index) => {
    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        card.classList.remove('active');
    });

    card.addEventListener('click', (e) => {
        if (e.target !== closeBtn && !closeBtn.contains(e.target)) {
            card.classList.add('active');
        }   
    });
});

const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if(btn.innerHTML.toLowerCase() == 'all'){
                card.style.display = 'block';
            } else{
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())){
                    card.style.display = 'block';
                } else{
                    card.style.display = 'none';
                }
            }
        })
        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active')
    })
})

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currScroll = window.pageYOffset;
    
    if (prevScrollPos > currScroll) {
        document.getElementById('navbar').style.top = "0";

    } else {
        document.getElementById('navbar').style.top = "100px";
    }
    prevScrollPos = currScroll;
}