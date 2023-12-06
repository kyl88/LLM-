const API_KEY = ""
const submitButton = document.querySelector('#submit')
const OutputElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const history = document.querySelector('.history')

async function getMessage() {
    console.log('clicked')

    const options = {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
  
  
       },

       body: JSON.stringify({
         model: "gpt-3.5",
         messages: [{role:"user", content: inputElement.value}],
         max_tokens : 100

          

       })

    }
    try {
    
     const response =  await fetch ('"https://api.openai.com/v1/completions', options)
     const data =  await response.json()
     console.log(data)
     OutputElement.textContent = data.choices[0].messages.content

     if (data.choices[0].messages.content) {

        const pElement = document.createElement('p')

        pElement.textContent = inputElement.value

        historyElement.append(pElement)

    
   }
   
    
    } catch (error) {
  

 }

}




// create a function to fetch API data (Post)

// fetch data - post request
/*async function fetchData() {
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
*/

submitButton.addEventListener('click', getMessage)