let baseURL = 'http://'
let apiKey = ''


const button = document.getElementById('search');
button.addEventListener('click',action);

function action(){
    const interest = document.getElementById('query').value;
    getFacts (baseURL,interest,apiKey);
}


const getFacts = async (baseURL,interest,apiKey)=>{
    /*const fact = await fetch(baseURL+interest+apiKey)*/
    const res = await fetch('/facts')
    try {
        const data = await res.json()
        console.log(data)
    }catch(error){
        console.log('error',error)
    }
}

const postData = async (url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error) {
        console.log('error',error);
    }

}

postData('/addMovie', {movie: 'can you see me'});