/********************* APIs **********************/

const gender_api = "https://api.genderize.io/?name="
const age_api = "https://api.agify.io/?name="
const nationality_api = "https://api.nationalize.io/?name="
const dog_img_api = "https://dog.ceo/api/breeds/image/random"

/********************* gloval variables **********************/

var name,
nationality_array

/********************* get html elements **********************/

const data_gender = document.getElementById("gender-result"),
      data_gender_prob = document.getElementById("gender-prob-result"),
      data_gender_count = document.getElementById("gender-count-result"),
      data_age = document.getElementById("age-result"),
      data_age_count = document.getElementById("age-count-result"),
      table = document.getElementById("nationality_table")
    //   data_country = document.getElementById("nationality-result"),
      data_img = document.getElementById("dog-img")
    
/********************* output the prediction's results  **********************/

function output_results(){

    
    name = document.getElementById("input-name").value
    console.log(name)
    if(name){
        fetch_api()
        
    }
}

/********************* Fetch APIs **********************/

function fetch_api(){

    fetch(gender_api + name)
    .then((response) => response.json())
    .then(data => {
        data_gender.innerHTML = data.gender
        // console.log(data.gender)
        data_gender_prob.innerHTML = data.probability
        data_gender_count.innerHTML = data.count
    })

    fetch(age_api+ name)
    .then((response) => response.json())
    .then(data => {
        data_age.innerHTML = data.age
        // console.log(data_age.innerHTML)
        // console.log(data.age)
        data_age_count.innerHTML = data.count
    })

    fetch(nationality_api+ name)
    .then((response) => response.json())
    .then(data => {
        populate_nationality(data)
        // display_nationality(nationality_array)
        // console.log("fetch",data_country)
    })

    fetch(dog_img_api)
    .then((response) => response.json())
    .then(data => {
         data_img.src = data.message
    })
}

/********************* insert data into the nationality table **********************/

function populate_nationality(data){

    let country = data.country
    console.log(country)

    // let table = document.getElementById(nationality_table_id)
    console.log(table)

    delete_rows(table)

    insert_rows(country, table);
    
}

/********************* delete rows **********************/

function delete_rows(table) {

    var rows_length = table.rows.length;
    
    for (var i = rows_length - 1; i >= 0; i-- ){

        table.deleteRow(i);
    }
}

/********************* insert new rows **********************/

function insert_rows(country, table) {

    for(i = 0; i < country.length; i++){
        
        let row_html = table.insertRow(table.rows.length)

        let country_cell = row_html.insertCell(0)
        let probabilty_cell = row_html.insertCell(1)

        country_cell.innerHTML = country[i].country_id
        probabilty_cell.innerHTML = country[i].probability
    }
}