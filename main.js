// function wecomemassage(){
//     return new Promise((resolve, reject)=>{
//         let mydate= new Date().getHours();
//         if(mydate< 11){
//             resolve("good morning")}
    
//         else{
//             reject("good afternoon")}
//     });
// }
// wecomemassage()
// .then((mytext)=>{
//     mydiv.innerHTML= mytext
// })
// .catch((mytext2)=>{
//     mydiv2.innerHTML= mytext2
// })

// function checkfunc(num1, num2){
//     return new Promise ((resolve, reject)=>{

//     });

// }

























// fetch
async function getresponse() {
    load.innerHTML= `<img style=width:100px highet:150px src="https://cssbud.com/wp-content/uploads/2021/08/beepboop.gif"/> `
    try{ 
        return await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(respname=>
           respname.json())
    }   
    catch(iferorr){
        console.log(iferorr)
    }
    finally{
        load.innerHTML= "";
    }
}


function moviename(){
    getresponse().then((movieresponse)=>{
        movieresponse.data.forEach(element => {
            mymvielist.innerHTML+= `<li>${element.movieName} <img style=height:20vh; width= 100vw; src="${element.image}"/> </li>`
        });
    })
}


async function mymoviefunc(){

const mymovie= {
    movie:{
        image:input1.value,
        linKToMovie: input2.value,
        movieName: input3.value,
        rating: input4.value,
        synopsis: input5.value,
    }
}
    load.innerHTML= `<img style=width:100px highet:150px src="https://cssbud.com/wp-content/uploads/2021/08/beepboop.gif"/> `
    clickadd.disabled= true;
    try{
        await fetch("https://moviesmern.herokuapp.com/movies/saveMovie" ,{
            method: "POST",
            body: JSON.stringify(mymovie),
            headers: {
                'Content-Type': 'application/json'

            }
        })
    }
    catch(iferr){}
    finally{
        load.innerHTML= "";
        clickadd.disabled= false;

    }
}

async function searchinput(){
    try{
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/searchByName/ ${searchinput.value}`)
        .then(answer=> answer.json())
    }
    catch(err){}
    finally{}
}







