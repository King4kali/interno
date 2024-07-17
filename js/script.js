function menuFlex() {
    var menu = document.querySelector('.flex_menu');
    var body = document.querySelector('body');
    body.style.overflow = 'hidden';
    menu.style.display = 'block';
    setTimeout(function() {
        menu.classList.add('open');
    }, 10);
}

function closeMenu() {
    var menu = document.querySelector('.flex_menu');
    var body = document.querySelector('body');
    menu.classList.remove('open');
    setTimeout(function() {
        body.style.overflow = '';
    }, 500);
    setTimeout(function() {
        menu.style.display = 'none';
    },200);
}

//headers
document.addEventListener('DOMContentLoaded', function() {
    const headerAbout = document.getElementById('headerAbout');
    const headerServices = document.getElementById('headerServices');
    const headerServicesSingle = document.getElementById('headerServicesSingle');
    const pricingPlan = document.getElementById('headerPricing');
    const ourProjects = document.getElementById('ourPorjects');
    const projectDetails = document.getElementById('projectDetails');
    const headerBlog = document.getElementById('headerBlog');
    if (headerAbout) {
        headerAbout.style.backgroundImage = "url('img/backgroundimgaeabout.png')";
    }
    else if (headerServices) {
        headerServices.style.backgroundImage = "url('img/headerimagesservices.png')";
    }
    else if (headerServicesSingle) {
        headerServicesSingle.style.backgroundImage = "url('img/backgroundimgaeservicessingle.png')";
    }
    else if (pricingPlan) {
        pricingPlan.style.backgroundImage = "url('img/backgroundimagepricing.png')";
    }
    else if (ourProjects) {
        ourProjects.style.backgroundImage = "url('img/headerprojects.png')";
    }
    else if (headerBlog) {
        headerBlog.style.backgroundImage = "url('img/backgroundimgaeblog.png')";
    }
    else if (projectDetails) {
        projectDetails.style.backgroundImage = "url('img/Bannerprojectdatails.jpg')";
        const container = document.querySelector('.magnifying_glass');
        const lens = document.querySelector('.zoom-lens');
        const img = document.querySelector('.magnifying_glass img');

        container.addEventListener('mousemove', function(e) {
            const containerRect = container.getBoundingClientRect();
            const x = e.clientX - containerRect.left;
            const y = e.clientY - containerRect.top;
        
            const ratio = 1.5;
            const lensSize = 100;
        
            const imgX = Math.round((x / containerRect.width) * img.width - lensSize / 2);
            const imgY = Math.round((y / containerRect.height) * img.height - lensSize / 2);
        
            lens.style.backgroundImage = `url(${img.src})`;
            lens.style.backgroundSize = `${img.width * ratio}px ${img.height * ratio}px`;
            lens.style.backgroundPosition = `-${imgX * ratio}px -${imgY * ratio}px`;
        
            lens.style.width = `${lensSize}px`;
            lens.style.height = `${lensSize}px`;
            lens.style.left = `${x - lensSize / 2}px`;
            lens.style.top = `${y - lensSize / 2}px`;
        
            lens.style.opacity = 1;
        });

        container.addEventListener('mouseleave', function() {
            lens.style.opacity = 0;
        });
            }
        });



//cardteri flex-y u none
var mainAboutCards = document.querySelectorAll('.main_asbout_us_card');

var currentOpenCard = null;

mainAboutCards.forEach(function(card) {
    var cardImg = card.querySelector('.main_asbout_us_img');
    var cardInfo = card.querySelector('.main_asbout_us_card_info');
    
    card.addEventListener('click', function() {
        if (card === currentOpenCard && cardInfo.style.display === 'flex') {
            cardImg.style.display = 'block';
            cardInfo.style.display = 'none';
            currentOpenCard = null;
        } else {
            if (currentOpenCard) {
                var openCardImg = currentOpenCard.querySelector('.main_asbout_us_img');
                var openCardInfo = currentOpenCard.querySelector('.main_asbout_us_card_info');
                openCardImg.style.display = 'block';
                openCardInfo.style.display = 'none';
            }            
            cardImg.style.display = 'none';
            cardInfo.style.display = 'flex';
            currentOpenCard = card;
        }
    });
});

// play video
if(window.location.pathname.includes('services-single.html')){
    function playVideo() {
        const playButton = document.getElementById('playVideo');
        const video = document.getElementById('myVideo');
        const videoIcon = document.getElementById('videoIcon');
    
        if (video.paused) {
            video.play();
            videoIcon.className = 'fa-duotone fa-pause';
            video.controls = true;
        } else {
            video.pause();
            videoIcon.className = 'fa-duotone fa-play';
        }
    }
    
    function handleVideoEnded() {
        const videoIcon = document.getElementById('videoIcon');
        videoIcon.className = 'fa-duotone fa-play';
    }
    
    const videoContainer = document.querySelector('.single_video');
    const playButton = document.getElementById('playVideo');
    
    videoContainer.addEventListener('mouseenter', () => {
        playButton.style.opacity = '1';
    });
    
    videoContainer.addEventListener('mouseleave', () => {
         playButton.style.opacity = '0';
    });
    
    const video = document.getElementById('myVideo');
    video.addEventListener('ended', handleVideoEnded);
}

// button to pricing
function GoTooPricing(){
    window.location.href = 'pricing.html'
}
//button to project-details
function bedroomBtn(){
    window.location.href = 'project-details.html'
}


//переход на активынй button
function projectsBathroomBtn() {
    resetActiveClass();
    var bathroomBtn = document.getElementById('Bathroom');
    bathroomBtn.classList.add('projects_btn_active');
}

function projectsBedRoomBtn() {
    resetActiveClass();
    var bedRoomBtn = document.getElementById('BedRoom');
    bedRoomBtn.classList.add('projects_btn_active');
}

function projectsKitchanBtn() {
    resetActiveClass();
    var kitchanBtn = document.getElementById('Kitchan');
    kitchanBtn.classList.add('projects_btn_active');
}

function projectsLivingAreaBtn() {
    resetActiveClass();
    var livingAreaBtn = document.getElementById('LivingArea');
    livingAreaBtn.classList.add('projects_btn_active');
}

function resetActiveClass() {
    var allButtons = document.getElementsByClassName('projects_btn');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('projects_btn_active');
    }
}

// Проверяем наличие параметров в URL при загрузке страницы
window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('activeBtn')) {
        var activeBtnId = urlParams.get('activeBtn');
        // Вызываем соответствующую функцию на основе параметра activeBtn
        switch (activeBtnId) {
            case 'Bathroom':
                projectsBathroomBtn();
                break;
            case 'BedRoom':
                projectsBedRoomBtn();
                break;
            case 'Kitchan':
                projectsKitchanBtn();
                break;
            case 'LivingArea':
                projectsLivingAreaBtn();
                break;
            default:
                break;
        }
    }
}