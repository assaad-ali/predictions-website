/********************* APIs **********************/

const gender_api = "https://api.genderize.io/?name="
const age_api = "https://api.agify.io/?name="
const nationality_api = "https://api.nationalize.io/?name="
const dog_img_api = "https://dog.ceo/api/breeds/image/random"

// /********************* APIs data variables **********************/

// var name = "saad"
// var data_gender
// var data_gender_prob
// var data_gender_count
// var data_age
// var data_age_count
// var data_country = []
// var data_img
/********************* Create Html elements **********************/

const header_container = document.createElement('header')
const main_container = document.createElement('main')
const footer_container = document.createElement('footer')
const h1 = document.createElement('h1')
const p = document.createElement('p')
const img = document.createElement('img')
const button = document.createElement('button')
const label = document.createElement('label')
const input = document.createElement("textarea")
const gender = document.createElement("div")


/********************* assign APIs data variables **********************/

// function assign_data(data){
//     console.log(data)
//     window.data_gender = data[0].gender
//     console.log(data_gender)
//     data_gender_prob = data[0].probability
//     data_gender_count = data[0].count
//     data_age = data[1].age
//     data_age_count = data[1].count
//     data_country = data[2].country
//     data_img =data[3].message 

// }



/********************* Fetch APIs **********************/

const fetch_gender = fetch(gender_api + name)
    .then((response) => response.json())
    .then(data => {
        data_gender = data.gender
    console.log(data_gender)
    data_gender_prob = data.probability
    data_gender_count = data.count
    })
    console.log("datac", data_gender)
const fetch_age = fetch(age_api+ name)
.then((response) => response.json())

const fetch_nationality = fetch(nationality_api+ name)
.then((response) => response.json())

const fetch_dog_img = fetch(dog_img_api)
.then((response) => response.json())


// do fetch requests in parallel
// using the Promise.all() method
// const allData = Promise.all([fetch_gender, fetch_age, fetch_nationality, fetch_dog_img]);

/********************* assign data **********************/

// // attach then() handler to the allData Promise
// allData.then((data) => {
//     data_gender = data[0].gender
//     console.log(data_gender)
//     data_gender_prob = data[0].probability
//     data_gender_count = data[0].count
//     data_age = data[1].age
//     data_age_count = data[1].count
//     data_country = data[2].country
//     data_img =data[3].message 
// });
// console.log(data_age_count)
/********************* create html element **********************/

function createHtmlElements(){

    document.body.append(header_container, main_container, footer_container)
    header_container.append(h1, p)
    main_container.append(img, button, label,input)
    // fetch(gender_api + name)
    // .then(response => response.json())
    // .then(data => {

    // })
    // console.log(api_data)

}

window.onload = function(){
    createHtmlElements();
    console.log(data_age)
//     const fetch_gender = fetch(gender_api + name)
//     .then((response) => response.json())

// const fetch_age = fetch(age_api+ name)
// .then((response) => response.json())

// const fetch_nationality = fetch(nationality_api+ name)
// .then((response) => response.json())

// const fetch_dog_img = fetch(dog_img_api)
// .then((response) => response.json())

// // do fetch requests in parallel
// // using the Promise.all() method
// const allData = Promise.all([fetch_gender, fetch_age, fetch_nationality, fetch_dog_img]);

// /********************* assign data **********************/

// // attach then() handler to the allData Promise
// allData.then((data) => assign_data(data));
// console.log(data_gender)

    
}

