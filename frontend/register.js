let but=document.getElementById("btn")
document.getElementById("frm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let movietitle=document.getElementById("movie-name").value
let moviecategory=document.getElementById("Category-movie").value
let rating=document.getElementById("rating-movie").value
let rDate=document.getElementById("date-movie").value
let languages=document.getElementById("languagesf").value
let description=document.getElementById("description").value
let uploadbanner=document.getElementById("UploadB").value
let uploadposter=document.getElementById("UploadP").value


    // let movietitle_value=movietitle.value;
    // let moviecategory_value=moviecategory.value;
    // let rating_value=rating.value;
    // let rDate_value=rDate.value;
    // let languages_value=languages.value;
    // let description_value=description.value;
    // let uploadbanner_value=uploadbanner.value;
    // let uploadposter_value=uploadposter.value;
   
    fetch("http://localhost:3004/api/display",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            Movie_Title: movietitle,
            Category:moviecategory,
            Rating:rating,
            Release_date:rDate,
            Languages:languages,
            Description:description
    
        })
        }).then(()=>{
            alert("movie Added")
        })
        .catch((error)=>{
            console.log(error);
    
        })
       
    
    
    })



