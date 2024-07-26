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
document.addEventListener('DOMContentLoaded', function() {
    const headerAbout = document.getElementById('headerAbout');
    const headerServices = document.getElementById('headerServices');
    const headerServicesSingle = document.getElementById('headerServicesSingle');
    const pricingPlan = document.getElementById('headerPricing');
    const ourProjects = document.getElementById('ourPorjects');
    const projectDetails = document.getElementById('projectDetails');
    const headerBlog = document.getElementById('headerBlog');
    const headerBlogDetails = document.getElementById('headerBlogDetails');
    const headerTeam = document.getElementById('headerTeam');
    const headerTeamSingle = document.getElementById('headerTeamSingle');
    const headerContactUs = document.getElementById('headerContactUs');
    const headerQuestion = document.getElementById('headerQuestions');
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
    else if (headerBlogDetails) {
        headerBlogDetails.style.backgroundImage = "url('img/backgroundimgaeblogdetails.png')";
    }
    else if (headerTeam) {
        headerTeam.style.backgroundImage = "url('img/backgroundimgaeteam.png')";
    }
    else if (headerTeamSingle) {
        headerTeamSingle.style.backgroundImage = "url('img/backgroundimageteamsingle.jpg')";
    }
    else if (headerContactUs) {
        headerContactUs.style.backgroundImage = "url('img/backgroundimagecontactus.jpg')";
    }
    else if (headerQuestion) {
        headerQuestion.style.backgroundImage = "url('img/backgroundimgaequestions.jpg')";
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

function GoTooPricing(){
    window.location.href = 'pricing.html'
}
function bedroomBtn(){
    window.location.href = 'project-details.html'
}
function goToBlogDetails(){
    window.location.href = 'blog-details.html'
}

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

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('activeBtn')) {
        var activeBtnId = urlParams.get('activeBtn');
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

function blogDetailsFlex() {
    var blogDetails = document.getElementsByClassName('blog_details_menu');    
    var blogDetailsFlex = document.getElementsByClassName('blog_details_flex');
    for (var element of blogDetails) {
        element.style.display = 'block';
    }
    for (var flexElement of blogDetailsFlex) {
        flexElement.style.display = 'none';
    }
}

function redirectToTeamSingle(cardId, employeeName) {
    var url = 'team-single.html?card=' + encodeURIComponent(cardId) + '&name=' + encodeURIComponent(employeeName);

    window.location.href = url;
}
 var urlParams = new URLSearchParams(window.location.search);
 var cardId = urlParams.get('card');
 var employeeName = urlParams.get('name');

 var imgSrc = '';
 switch (cardId) {
    case 'card1':
        imgSrc = 'img/cardPhoto1.png';
        break;
    case 'card2':
        imgSrc = 'img/cardPhoto2.png';
        break;
    case 'card3':
        imgSrc = 'img/cardPhoto3.png';
        break;
    case 'card4':
        imgSrc = 'img/cardPhoto4.png';
        break;
    case 'card5':
        imgSrc = 'img/Card5.jpg';
        break;
    case 'card6':
        imgSrc = 'img/Card6.jpg';
        break;
    case 'card7':
        imgSrc = 'img/Card7.jpg';
        break;
    case 'card8':
        imgSrc = 'img/Card8.jpg';
        break;
          
    default:
        imgSrc = 'img/defaultPhoto.png';
        break;
 }

 var imgElement = document.getElementById('teamSingleImg');
 if (imgElement) {
     imgElement.src = imgSrc;
 }

 var employeeNameElement = document.getElementById('employeeName');
 if (employeeNameElement) {
     employeeNameElement.textContent = employeeName;
 }
var bioText = '';
switch (employeeName) {
    case 'Charlotte Levi':
        bioText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus sunt labore magni animi hic culpa dolore necessitatibus voluptatem molestiae perspiciatis nisi minus voluptatibus suscipit, quasi quaerat impedit quas aliquam vero voluptates sed! Itaque temporibus quas consequatur dicta nihil veniam necessitatibus. Necessitatibus minima rerum fuga. Amet nam officiis est at.';
        break;
    case 'Natasha Julie':
        bioText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi corrupti quas? Autem placeat repellendus libero, nam id porro repudiandae dolorum neque illo necessitatibus nobis nemo quaerat! Non veritatis dolores nemo quaerat, quia placeat doloremque. Deserunt nemo necessitatibus velit eum, quaerat ut corporis ipsum minima aliquam quia voluptatum nisi dolore temporibus vitae consequuntur enim culpa omnis! Totam quam reprehenderit numquam?';
        break;
    case 'John Smith':
        bioText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat itaque iure odit recusandae quisquam reprehenderit officiis beatae expedita, nulla ratione aperiam. Praesentium explicabo est laboriosam fugiat beatae ratione. Placeat consequatur unde accusamus perferendis magni? Ea modi quos laudantium ipsam obcaecati molestiae tempora nostrum enim rerum, voluptatibus perferendis inventore quia. Sunt saepe maxime, dolores alias distinctio accusantium illo nesciunt a magni! Sequi ullam, perspiciatis velit quidem laudantium explicabo id nihil nemo dolores aspernatur sint a facere neque fuga totam esse.';
        break;
    case 'Nora Owen':
        bioText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quis possimus soluta impedit minima. Iste ratione excepturi a cumque, atque dolorum vel aliquam expedita rerum reprehenderit voluptatum, doloremque alias odio sapiente blanditiis velit magni recusandae eveniet facere quae. Aliquid, sequi.'; // Здесь ваш текст для Nora Owen
        break;
    case 'Avery Jackson':
        bioText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus sunt labore magni animi hic culpa dolore necessitatibus voluptatem molestiae perspiciatis nisi minus voluptatibus suscipit, quasi quaerat impedit quas aliquam vero voluptates sed! Itaque temporibus quas consequatur dicta nihil veniam necessitatibus. Necessitatibus minima rerum fuga. Amet nam officiis est at.';
        break;
    case 'Sofia Carter':
        bioText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi corrupti quas? Autem placeat repellendus libero, nam id porro repudiandae dolorum neque illo necessitatibus nobis nemo quaerat! Non veritatis dolores nemo quaerat, quia placeat doloremque. Deserunt nemo necessitatibus velit eum, quaerat ut corporis ipsum minima aliquam quia voluptatum nisi dolore temporibus vitae consequuntur enim culpa omnis! Totam quam reprehenderit numquam?';
        break;
    case 'Luna James':
        bioText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat itaque iure odit recusandae quisquam reprehenderit officiis beatae expedita, nulla ratione aperiam. Praesentium explicabo est laboriosam fugiat beatae ratione. Placeat consequatur unde accusamus perferendis magni? Ea modi quos laudantium ipsam obcaecati molestiae tempora nostrum enim rerum, voluptatibus perferendis inventore quia. Sunt saepe maxime, dolores alias distinctio accusantium illo nesciunt a magni! Sequi ullam, perspiciatis velit quidem laudantium explicabo id nihil nemo dolores aspernatur sint a facere neque fuga totam esse.';
        break;
    case 'Gianna Mateo':
        bioText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat itaque iure odit recusandae quisquam reprehenderit officiis beatae expedita, nulla ratione aperiam. Praesentium explicabo est laboriosam fugiat beatae ratione. Placeat consequatur unde accusamus perferendis magni? Ea modi quos laudantium ipsam obcaecati molestiae tempora nostrum enim rerum, voluptatibus perferendis inventore quia. Sunt saepe maxime, dolores alias distinctio accusantium illo nesciunt a magni! Sequi ullam, perspiciatis velit quidem laudantium explicabo id nihil nemo dolores aspernatur sint a facere neque fuga totam esse.';
        break;
              
    default:
        break;
}
var bioElement = document.getElementById('card_p');
if (bioElement) {
    bioElement.textContent = bioText;
}
var myRange = document.getElementById('myRangeDesign');
switch (employeeName){
    case 'Charlotte Levi':
        myRange.value = 65;
        break;
    case 'Natasha Julie':
        myRange.value = 100;
        break;
    case 'John Smith':
        myRange.value = 55;
        break;
    case 'Nora Owen':
        myRange.value = 70;
        break
    case 'Avery Jackson':
        myRange.value = 89;
        break;
    case 'Sofia Carter':
        myRange.value = 100;
        break;
    case 'Luna James':
        myRange.value = 78;
        break;
    case 'Gianna Mateo':
        myRange.value = 95;
        break;
    default:
        break; 
}
var myRange = document.getElementById('myRangeManagement');
switch (employeeName){
    case 'Charlotte Levi':
        myRange.value = 95;
        break;
    case 'Natasha Julie':
        myRange.value = 80;
        break;
    case 'John Smith':
        myRange.value = 100;
        break;
    case 'Nora Owen':
        myRange.value = 90;
        break
    case 'Avery Jackson':
        myRange.value = 82;
        break;
    case 'Sofia Carter':
        myRange.value = 75;
        break;
    case 'Luna James':
        myRange.value = 87;
        break;
    case 'Gianna Mateo':
        myRange.value = 100;
        break;
    default:
        break; 
}
var myRange = document.getElementById('myRangeSatisfaction');
switch (employeeName){
    case 'Charlotte Levi':
        myRange.value = 75;
        break;
    case 'Natasha Julie':
        myRange.value = 76;
        break;
    case 'John Smith':
        myRange.value = 100;
        break;
    case 'Nora Owen':
        myRange.value = 70;
        break
    case 'Avery Jackson':
        myRange.value = 100;
        break;
    case 'Sofia Carter':
        myRange.value = 80;
        break;
    case 'Luna James':
        myRange.value = 73
        break;
    case 'Gianna Mateo':
        myRange.value = 89;
        break;
    default:
        break; 
}

document.addEventListener("DOMContentLoaded", function() {
    var sliders = document.querySelectorAll(".slider");
    sliders.forEach(function(slider) {
        var output = slider.nextElementSibling;
        
        function updateSliderValue() {
            var percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
            output.style.left = percent + "%";
            output.innerHTML = slider.value + "%";
        }
        updateSliderValue();
        slider.oninput = function() {
            updateSliderValue();
        };
    });
});

const rangeInputs = document.querySelectorAll('.project_static input[type="range"]');

function updateSliderBackground(input) {
  const value = (input.value - input.min) / (input.max - input.min) * 100;
  const gradient = `linear-gradient(to right, #CDA274 0%, #CDA274 ${value}%, #F4F0EC ${value}%, #F4F0EC 100%)`;
  input.style.background = gradient;
}

rangeInputs.forEach(input => {
  input.addEventListener('input', function() {
    updateSliderBackground(this);
  });

  updateSliderBackground(input);
});



function socialDropdownBtn(button) {
    var parentDiv = button.parentNode;

    var profInfo = parentDiv.querySelector('.profInfo');
    var profbtn = parentDiv.querySelector('.profesional_card_socials_dropdown_btn');
    var icon = profbtn.querySelector('i');

    if (profInfo.classList.contains('display_none')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-ellipsis');
        profbtn.style.background = '#FFFFFF';
        parentDiv.style.backgroundColor = '#F4F0EC';
        profInfo.classList.remove('display_none');
        profInfo.classList.add('display_block');
    } else {
        icon.classList.remove('fa-ellipsis');
        icon.classList.add('fa-plus');
        profbtn.style.background = '#F4F0EC';
        parentDiv.style.backgroundColor = 'transparent';
        profInfo.classList.remove('display_block');
        profInfo.classList.add('display_none');
    }
}

function questionsBtn(event) {
    var button = event.currentTarget;
    var titleDiv = button.parentElement;
    var questionP1 = titleDiv.nextElementSibling;
    var questionH5 = titleDiv.querySelector('.info_h5');
    
    if (button.style.transform === 'rotate(90deg)') {
        button.style.transform = 'rotate(0deg)';
        button.style.color = '';
        questionH5.style.color = '';
        questionP1.classList.remove('display_block');
        questionP1.classList.add('display_none');
    } else {
        button.style.transform = 'rotate(90deg)';
        button.style.color = '#CDA274';
        questionH5.style.color = '#CDA274';
        questionP1.classList.remove('display_none');
        questionP1.classList.add('display_block');
    }
}


function formProject() {
    var body = document.body; 
    var thanks = document.getElementById('thanksDiv');
    thanks.style.display = 'block';
    body.style.overflow = 'hidden';
}
function closeFormProject(){
    var body = document.body; 
    var thanks = document.getElementById('thanksDiv');
    thanks.style.display = 'none';
    body.style.overflow = 'unset';
}
function sendNow() {
    var body = document.body; 
    var thanks = document.getElementById('thanksDiv');
    thanks.style.display = 'block';
    body.style.overflow = 'hidden';
}
function formProject() {
    var body = document.body; 
    var thanks = document.getElementById('thanksDiv');
    thanks.style.display = 'block';
    body.style.overflow = 'hidden';
}

function contactUsForm() {
    var body = document.body; 
    var thanks = document.getElementById('thanksDiv');
    thanks.style.display = 'block';
    body.style.overflow = 'hidden';
}


document.addEventListener('DOMContentLoaded', function() {
    if (document.title === "404 Not Found") {
        window.location.href = '/error.html';
    }
});


function get_started() {
    window.location.href = 'project.html';
}
function getEstimate(){
    window.location.href = 'contact-us.html';
}
function ourBlog(){
    window.location.href = 'blog.html';

}