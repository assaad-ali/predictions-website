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
    
/********************* get user's name **********************/

function get_name(){
    name = document.getElementById("input-name").value
    if(name){
        fetch_api()
    }
    
}