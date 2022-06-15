const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector("#searchByID");
    input.value;


    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      //change the contents in the title to the ones in the data
      const title = document.querySelector("section#movieDetails h4")
      title.innerText = data.title

      //change contents in the summary to the one in the data
      const summary = document.querySelector("section#movieDetails p")
      summary.innerText = data.summary

      
    
    });

    inputForm.reset()
  });
}

document.addEventListener('DOMContentLoaded', init);