var modal = document.querySelector('.modal');
var modalImg = document.querySelector('#Modal-Img');
var btnClose = document.querySelector('#btn-close');
var imagem = document.querySelectorAll('.img_gallery');
var srcVal="";
var html = document.querySelector('html')



for(var i = 0 ; i<imagem.length; i++){
    imagem[i].addEventListener('click',function(e){
        srcVal = e.target.getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
        html.classList.add('scroll_none');
    })
}


btnClose.addEventListener('click',function(){
    modal.classList.remove('modal_active');
    html.classList.remove('scroll_none');
})




