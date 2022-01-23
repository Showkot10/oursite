/*
social share link:
whatsapp:

https://api.whatsapp.com/send?text=[post-title] [post-url]

fscebook:

https://www.facebook.com/sharer.php?u=[post-url]

twitter:


https://twitter.com/share?url=[post-url]&text=[post-title]
pinterest:

https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

linkedin:

https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]



*/
const facebookBtn=document.querySelector(".facebook-btn");
const whatsappBtn=document.querySelector(".whatsapp-btn");
const twitterBtn=document.querySelector(".twitter-btn");
const pinterestBtn=document.querySelector(".pinterest-btn");
const linkedinBtn=document.querySelector(".linkedin-btn");
function init(){
    const pinterestImg=document.querySelector("pinterest-img");
    let postUrl=encodeURI(document.location.href);
    let postTitle=encodeURI("hi everyone");
    let postImg=encodeURI(pinterestImg.src);
    facebookBtn.setAttribute(
      "href",
      'https://www.facebook.com/sharer.php?u=${postUrl}'  
    );
    whatsappBtn.setAttribute(
        "href",
    'https://api.whatsapp.com/send?text=${postTitle} ${postUrl}'  
      );
    twitterBtn.setAttribute(
        "href",
        'https://twitter.com/share?url=${postUrl}&text=${postTitle}'  
      );
    pinterestBtn.setAttribute(
        "href",
        'https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}'  
      );
    linkedinBtn.setAttribute(
        "href",
        'https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}'  
      );
}
init();