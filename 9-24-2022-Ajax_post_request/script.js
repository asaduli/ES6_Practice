
const form=document.getElementById("form");
form.setAttribute('submit', function(e){
    e.preventDefault();
    console.log(e)
    const payload=new FormData(form);
    console.log([...payload]);
});