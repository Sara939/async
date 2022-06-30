////////////////////////////////////////////////////////////////promise:
// 1:
// function wecomemassage(){
//     return new Promise((resolve, reject)=>{
//         let mydate= new Date().getHours();
//         if(mydate< 18){
//             resolve("good morning")}
    
//         else{
//             reject("good afternoon")}
//     });
// }

// // 2:
// wecomemassage()
// .then((mytext)=>{
//     mydiv.innerHTML= mytext
// })
// .catch((mytext)=>{
//     mydiv.innerHTML= mytext
// })

// 3:
// function checkfunc(num1, num2){
//     return new Promise ((resolve, reject)=>{
//         if(num2 % num1==0){
//             resolve ("yes")
//         }
//         else{
//             reject("no")
//         }
//     });

// }
// // // 4:
//  checkfunc(7, 9).then((result)=>{
//     mydivtag.innerHTML= result
// })
// .catch((result)=>{
//     mydivtag.innerHTML= result
// })

// 5:


// function ifnuminarray(num, arraynum){
//     return new Promise ((resolve, reject)=>{
//         let num ;
//         let arraynum= [];
//         for(let i=0; i<arraynum.length; i++) {  
//             if(num == arraynum[i]){
//                 resolve("yes")     
//             }
//         }
//         reject("no")  
//         });
// }



// function ifnuminarray(num, arraynum){
//     return new Promise ((resolve, reject)=>{
//         arraynum.forEach(element => {
//            if(num == element){
//                 resolve("yes")       
//             } 
//         });
//         reject("no")  
//         });
// }



// 6:
// ifnuminarray( 8,[65,39,5,7,8])
// .then((res)=>{
//     mydivtag.innerHTML= res
// })
// .catch((res)=>{
//     mydivtag.innerHTML= res
// })
// 7:////////////////////////////////////////////////////

// 8:


// async function callfunc(){
//     try {await ifnuminarray(9,[65,39,5,7,8]).then(res=>console.log(res))}
//     catch(err){
//         console.log(err)
//     }
// };

// callfunc();



// fetch:// //////////////////////////////////////////////////////////////////////// 

// class work:
// async function getresponse() {
//     load.innerHTML= `<img style=width:100px highet:150px src="https://cssbud.com/wp-content/uploads/2021/08/beepboop.gif"/> `
//     try{ 
//         return await fetch("https://moviesmern.herokuapp.com/movies/all")
//         .then(respname=>
//            respname.json())
//     }   
//     catch(iferorr){
//         console.log(iferorr)
//     }
//     finally{
//         load.innerHTML= "";
//     }
// }


// function moviename(){
//     getresponse().then((movieresponse)=>{
//         movieresponse.data.forEach(element => {
//             mymvielist.innerHTML+= `<li>${element.movieName} <img style=height:20vh; width= 100vw; src="${element.image}"/> </li>`
//         });
//     })
// }


// async function mymoviefunc(){

// const mymovie= {
//     movie:{
//         image:input1.value,
//         linKToMovie: input2.value,
//         movieName: input3.value,
//         rating: input4.value,
//         synopsis: input5.value,
//     }
// }
//     load.innerHTML= `<img style=width:100px highet:150px src="https://cssbud.com/wp-content/uploads/2021/08/beepboop.gif"/> `
//     clickadd.disabled= true;
//     try{
//         await fetch("https://moviesmern.herokuapp.com/movies/saveMovie" ,{
//             method: "POST",
//             body: JSON.stringify(mymovie),
//             headers: {
//                 'Content-Type': 'application/json'

//             }
//         })
//     }
//     catch(iferr){}
//     finally{
//         load.innerHTML= "";
//         clickadd.disabled= false;

//     }
// }

// async function searchinput(){
//     try{
//         return await fetch(`https://moviesmern.herokuapp.com/movies/movie/searchByName/ ${searchinput.value}`)
//         .then(answer=> answer.json())
//     }
//     catch(err){}
//     finally{}
// }


// 1:
// async function conecttolink(){
//     try{
//         return await fetch("https://moviesmern.herokuapp.com/movies/all")
//         .then(response=> response.json())
//     }
//     catch(err){}
//     finally{}
// }

// 2:
// conecttolink().then(result=>console.log(result))

// 3+4:

// async function conecttolink(){
//     myloadbtn.disabled= true;
//     loadgif.innerHTML= `<img src= "https://www.print-club.co.il/wp-content/uploads/2021/08/076_-loading_animated_dribbble_copy.gif"/>`
//     try{
//         return await fetch("https://moviesmern.herokuapp.com/movies/all")
//         .then(response=> response.json())
//     }
//     catch(err){}
//     finally{
//         myloadbtn.disabled= false;
//         loadgif.innerHTML= "";
//     }
// }

// function playbtn(){
    
//   conecttolink().then(result=>console.log(result))  
// }

// 5-8:
// async function getanswer(){
//     myloadbtn.disabled= true;
//     load.innerHTML= `<img src= "https://i.pinimg.com/originals/42/a8/d4/42a8d4625aeb088c45eba5a84ca36325.gif"/>`
//     try{
//         return await fetch("https://cat-fact.herokuapp.com/facts")
//     }
//     catch(err){
//         console.log(err)
//     }
    
//     finally{
//         myloadbtn.disabled= false;
//         load.innerHTML= "";
//     }
// }


// getanswer().then(res=>console.log(res))
// .catch(res=>console.log(res))

// 9-12:

// async function conectfunc(){
//     try{
//         return await fetch("https://placekeanu.com/200/150",{
//             mode: 'no-cors',
//         }).then(res=>res.json())
//     } catch(err){
//         console.log('here',err)
//     }
// }

// (async function() {
//     conectfunc().then(data => console.log(data))
// })()


// 13-17:


// async function getdata(){
//     try{
//         load.innerHTML=  `<img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"/>`
//         myloadbtn.disabled= true;
//         return await fetch("https://api.jikan.moe/v4/anime")
//         .then(res=>res.json())
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         myloadbtn.disabled= false;
//         load.innerHTML=  "";
//     }
// }





// // printdata().then(res=>console.log(res.data))


// // printdata().then(res=>console.log(res.data.length))


// function printdata(){

//     getdata().then(res=>console.log(res.data))
// }