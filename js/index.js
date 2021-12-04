// DOM elements
const languagesBox = document.querySelector('.box-two')
const frameworkBox = document.querySelector('.box-three')
const react_progress_bar = document.querySelector('.react-progress-bar')
const react_native_progress_bar = document.querySelector('.react-native-progress-bar')
const redux_progress_bar = document.querySelector('.redux-progress-bar')
const android_progress_bar = document.querySelector('.android-progress-bar')
const home = document.querySelector(".home-container");
const blocks = document.querySelector('.blocks_div')
const leftBtn = document.querySelector('.first')
const rightBtn = document.querySelector('.second')
const homeImage = document.querySelector('.image-container')
const skills = document.querySelector('.skills-container')
const edEx = document.querySelector('.ed-ex-container')
const edContainer = document.querySelector('.ed-container')
const exContainer = document.querySelector('.ex-container')
const myWorkContainer = document.querySelector('.my-work-container')
const amuzeefyContainer = document.querySelector('.amuzeefy-container').childNodes[1]
const amuzeefyContainerMain = document.querySelector('.amuzeefy-container').childNodes[1].childNodes[3]
const wordozeContainer = document.querySelector('.wordoze-container').childNodes[1]
const wordozeContainerMain = document.querySelector('.wordoze-container').childNodes[1].childNodes[3]
const myWorkText = document.querySelector('.my-work-text-container')

console.log(document.querySelector('.amuzeefy-container').childNodes[1].childNodes)

// IntersectionObserver callbacks
const homeCB = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            blocks.classList.add('blocks_div_anim')
        }else{
            blocks.classList.remove('blocks_div_anim')
        }
    })
}

const skillsCB = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
                // languagesBox.classList.add('box-two')
                react_progress_bar.childNodes[1].classList.add('progress-react')
                react_native_progress_bar.childNodes[1].classList.add('progress-react-native')
                redux_progress_bar.childNodes[1].classList.add('progress-redux')
                android_progress_bar.childNodes[1].classList.add('progress-android')
        }else{
            // languagesBox.classList.remove('box-two')
            react_progress_bar.childNodes[1].classList.remove('progress-react')
            react_native_progress_bar.childNodes[1].classList.remove('progress-react-native')
            redux_progress_bar.childNodes[1].classList.remove('progress-redux')
            android_progress_bar.childNodes[1].classList.remove('progress-android')
        }
    })
}

const edExCB = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            edContainer.classList.add('ed-ex-bounce')
            exContainer.classList.add('ed-ex-bounce')
        }else{
            edContainer.classList.remove('ed-ex-bounce')
            exContainer.classList.remove('ed-ex-bounce')
        }
    })
}

const myWorkCB = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            myWorkText.classList.add('my-work-test-plain')
        }else{
            myWorkText.classList.remove('my-work-test-plain')
        }
    })
}

// IntersectionObserver options
const commonOptions = {
    threshold: 0.6,
}

const homeObserver = new IntersectionObserver(homeCB,commonOptions)
homeObserver.observe(home)

const skillsObserver = new IntersectionObserver(skillsCB,commonOptions)
skillsObserver.observe(skills)

const edExObserver = new IntersectionObserver(edExCB,commonOptions)
edExObserver.observe(edEx)

const myWorkObserver = new IntersectionObserver(myWorkCB,commonOptions)
myWorkObserver.observe(myWorkContainer)

// Event listeners

// Home
leftBtn.addEventListener('click',() =>{
    leftBtn.style.opacity = 1
    rightBtn.style.opacity = 0.5
    homeImage.children[0].setAttribute('src','./images/profile/profile_2.jpeg')
})

rightBtn.addEventListener('click',() =>{
    leftBtn.style.opacity = 0.5
    rightBtn.style.opacity = 1
    homeImage.children[0].setAttribute('src','./images/profile/profile_1.png')
})

// My Work
amuzeefyContainerMain.addEventListener('mouseover',()=>{
    amuzeefyContainer.classList.add('amuzeefy-block')
    myWorkContainer.classList.add('my-work-container-with-opacity')
    wordozeContainer.classList.add('my-work-hide-block')
})

amuzeefyContainerMain.addEventListener('mouseout',()=>{
    amuzeefyContainer.classList.remove('amuzeefy-block')
    myWorkContainer.classList.remove('my-work-container-with-opacity')
    wordozeContainer.classList.remove('my-work-hide-block')
})

wordozeContainerMain.addEventListener('mouseover',()=>{
    wordozeContainer.classList.add('amuzeefy-block')
    myWorkContainer.classList.add('my-work-container-with-opacity')
    amuzeefyContainer.classList.add('my-work-hide-block')
})

wordozeContainerMain.addEventListener('mouseout',()=>{
    wordozeContainer.classList.remove('amuzeefy-block')
    myWorkContainer.classList.remove('my-work-container-with-opacity')
    amuzeefyContainer.classList.remove('my-work-hide-block')
})








// TODO
// 1. Learn scrolling (snap)