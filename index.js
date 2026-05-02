let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x,y)
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1: 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle === true) {
        return document.body.classList.add('dark-theme')
    }
    console.log('remove')
    return document.body.classList.remove('dark-theme')
    
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');
    emailjs
        .sendForm (
            'service_y4vytla',
            'template_b670drc',
            event.target,
            'Qn29PBJ08ncd5-xUM'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList.add('modal__overlay--visible')
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly on timmynguyen2729@gmail.com"
            )
        })
}

function toggleModal() {
    isModalOpen = !isModalOpen;
    if(isModalOpen === false) {
        return document.body.classList.remove('modal--open')
    }
    document.body.classList.add('modal--open')
}


