// let bannerList = [
//     {
//         imgURL: "https://cdn01.pharmeasy.in/dam/banner/banner/d6593086ed1-25GETNEW.jpg",
//     },
//     {
//         imgURL: "https://cdn01.pharmeasy.in/dam/banner/banner/af3fcac9bec-New-BOGO.jpg",
//     },
//     {
//         imgURL: "https://cdn01.pharmeasy.in/dam/banner/banner/a4e6d0088ad-slippers.jpg",
//     },
// ];
let bannerConatiner = document.querySelector(".banner")
offerList(bannerList,bannerConatiner)

function offerList(list,conatiner){
    list.forEach(function(el){
        let img = document.createElement("img");
        img.setAttribute("src",el.imgurl);
        conatiner.append (img);
    }
    )
}
// let photosConatiner = document.querySelector(".photos")
// photoList(photosList,photosConatiner)

// function photoList(list,conatiner){
//     list.forEach(function(el){
//         let img = document.createElement("img");
//         img.setAttribute("src",el.imgurl);
//         conatiner.append (img);
//     }
//     )
// }
    

// function openForm() {
//     document.getElementById("wallet").style.display = "block";
//   }

//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }
window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".overall-wallet").computedStyleMap.display="block";
        },
        1000
    )
});

