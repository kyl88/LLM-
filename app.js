const API_KEY = ""
const submitButton = document.querySelector('#submit')

async function getMessage() {
    console.log('clicked')
 try {


    
 }

 catch{


 }

}




// create a function to fetch API data (Post)

// fetch data - post request
async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/completions",{
     method: "POST",
     headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",


     },

     body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "hello, how are you today?",
          max_token: 7


        })


 
    })
    
   const data =  await response.json()
   console.log(data)

  
}

fetchData();
submitButton.addEventListener('click', getMessage)