
document.querySelector('#pdffFile').addEventListener('change', () =>{
 
    pdffFile = document.querySelector('#pdffFile').files[0];
    
    document.querySelector('#vistaPrevia').setAttribute('src', pdffFileURL);
  
})