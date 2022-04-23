const apikey="563492ad6f91700001000001ec0b7a4d36a84336820a871d57fcef4b";
document.querySelector('button').addEventListener('click', runMe);



function runMe(){
    let search = document.querySelector('input').value
    fetch(`https://api.pexels.com/v1/search?query=${search}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data.photos[0])
            document.querySelector('img').src = data.photos[0].src.medium
            document.querySelector('h2').innerText = data.photos[0].photographer
            document.querySelector('.photographerUrl').innerText = data.photos[0].photographer_url
        })
        .catch(err=>{
            console.log(`error ${err}`)
        })

}
