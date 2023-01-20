console.log('Linked')

const fanpageInfo = document.getElementById('fanpageInfo');
const background = document.getElementById('background');

const toggleScreen = (id, toggle) => {
    let element = document.getElementById(id)
    let display1 = (toggle) ? 'block' : 'none'
    element.style.display = display1
}



const row1 = document.getElementById('row1')
const row2 = document.getElementById('row2')

const rheanyra = document.getElementById('rheanyra')
const daemon = document.getElementById('daemon')
const rheanys = document.getElementById('rheanys')
const alicent = document.getElementById('alicent')
const otto = document.getElementById('otto')
const criston = document.getElementById('criston')

///////////// Rhaenyra ///////////////////////////
const renBio = document.getElementById('renBio')
const renSta = document.getElementById('renSta')
const renBioData = document.getElementById('renBioData')

const RhaenyraBio = () => {
    console.log('Click1')
    toggleScreen('daemon', false)
    toggleScreen('renSta', false)
    toggleScreen('rheanys', false)
    toggleScreen('row2', false)
    toggleScreen('renBioData', true)
    console.log(renBioData)
}


///////////// Daemon ///////////////////////////

const deaBio = document.getElementById('deaBio')
const deaBioData = document.getElementById('deaBioData')
const deaSta = document.getElementById('deaSta')

const deamonBio = () => {
    console.log('Click2')
    toggleScreen('daemon', true)
    toggleScreen('deaSta', false)
    toggleScreen('rheanyra', false)
    toggleScreen('rheanys', false)
    toggleScreen('row2', false)
    toggleScreen('deaBioData', true)
    console.log(deaBioData)
}

///////////// Rhaenys ///////////////////////////

const rhaBio = document.getElementById('rhaBio')
const rhaBioData = document.getElementById('rhaBioData')
const rhaSta = document.getElementById('rhaSta')

const rhaenysBio = () => {
    console.log('Click2')
    toggleScreen('daemon', false)
    toggleScreen('rhaSta', false)
    toggleScreen('rheanyra', false)
    toggleScreen('rheanys', true)
    toggleScreen('row2', false)
    toggleScreen('rhaBioData', true)
    console.log(deaBioData)
}

///////////// Alicent ///////////////////////////

const aliBio = document.getElementById('aliBio')
const aliBioData = document.getElementById('aliBioData')
const aliSta = document.getElementById('aliSta')

const alicentBio = () => {
    console.log('Click2')
    toggleScreen('criston', false)
    toggleScreen('aliSta', false)
    toggleScreen('otto', false)
    toggleScreen('alicent', true)
    toggleScreen('row1', false)
    toggleScreen('aliBioData', true)
    console.log(deaBioData)
}

///////////// Otto ///////////////////////////

const ottBio = document.getElementById('ottBio')
const ottBioData = document.getElementById('ottBioData')
const ottSta = document.getElementById('ottSta')

const ottoBio = () => {
    console.log('Click2')
    toggleScreen('alicent', false)
    toggleScreen('ottSta', false)
    toggleScreen('criston', false)
    toggleScreen('otto', true)
    toggleScreen('row1', false)
    toggleScreen('ottBioData', true)
    console.log(deaBioData)
}

///////////// Criston ///////////////////////////

const criBio = document.getElementById('criBio')
const criBioData = document.getElementById('criBioData')
const criSta = document.getElementById('criSta')

const cristonBio = () => {
    console.log('Click2')
    toggleScreen('alicent', false)
    toggleScreen('criSta', false)
    toggleScreen('otto', false)
    toggleScreen('criston', true)
    toggleScreen('row1', false)
    toggleScreen('criBioData', true)
    console.log(deaBioData)
}


//============================== Search Bar =============
let Characters = [rheanyra, daemon, rheanys, alicent, otto, criston]

const search = document.getElementById('search')

const searchBar = () => {
    // let value = e.target.value
    // if (value && value.trim().length > 0){
    //     value = value.trim().toLowerCase()}
    if(search.value == 'rheanyra' || search.value == 'Rheanyra'){
        toggleScreen('daemon', false)
        toggleScreen('rheanys', false)
        toggleScreen('rheanyra', true)
        toggleScreen('row2', false)
    } else if (search.value == 'daemon' || search.value == 'Daemon'){
        toggleScreen('daemon', true)
        toggleScreen('rheanys', false)
        toggleScreen('rheanyra', false)
        toggleScreen('row2', false)
    } else if (search.value == 'rheanys' || search.value == 'Rheanys'){
        toggleScreen('daemon', false)
        toggleScreen('rheanys', false)
        toggleScreen('rheanyra', true)
        toggleScreen('row2', false)
    } else if (search.value == 'alicent' || search.value == 'Alicent'){
        toggleScreen('alicent', true)
        toggleScreen('otto', false)
        toggleScreen('criston', false)
        toggleScreen('row1', false)
    } else if (search.value == 'otto' || search.value == 'Otto'){
        toggleScreen('alicent', false)
        toggleScreen('otto', true)
        toggleScreen('criston', false)
        toggleScreen('row1', false)
    } else if (search.value == 'criston' || search.value == 'Criston'){
        toggleScreen('alicent', false)
        toggleScreen('otto', false)
        toggleScreen('criston', true)
        toggleScreen('row1', false)
    } 
}

//================== Reload Buttons =================