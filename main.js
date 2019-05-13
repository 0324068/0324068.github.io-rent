$(document).ready(function () {
    
    let datas=[
        {id:1,category:'room',address:'room1'},
        {id:2,category:'room',address:'room2'},
        {id:3,category:'room',address:'room3'},
        {id:6,category:'external',address:'external-2'},
        {id:7,category:'external',address:'external-3'},
        {id:10,category:'internal',address:'internal-1'},
        {id:11,category:'internal',address:'internal-2'},
        {id:12,category:'internal',address:'internal-3'},
        {id:4,category:'room',address:'room4'},
        {id:5,category:'external',address:'external-1'},
        {id:8,category:'external',address:'external-4'},
        {id:9,category:'external',address:'external-5'},
        {id:13,category:'internal',address:'internal-4'},
        {id:14,category:'internal',address:'internal-5'},
    ]
    let temp=[];
    datas.map( function (data) {
        temp.push(`<div id=${data.id} class="single-portfolio ${data.category}" style="position:relative">
        <img class="img-responsive" src="./photo/${data.address}.JPG" >
    </div>`)
    });
    $(".banner").append().html(temp);
    $("ul.filter li").mouseenter(function(){ 
      $(".banner").isotope({
          itemSelector: '.single-portfolio',
          layoutMode: 'fitRows',
        });   
      $("ul.filter li").removeClass("clicked");
      $(this).addClass("clicked");        
      var selector = $(this).attr('data-filter');

      $(".banner").isotope({ 
          filter: selector, 
          animationOptions: { 
              duration: 750, 
              easing: 'linear', 
              queue: false, 
          }
      }); 
        return false; 
        
    })
    if(window.outerWidth<1200){
        $("ul.filter li").first().trigger("mouseenter");
    }
       
    $(".close").click(function(){
        $(".imgDisplay").css("display","none")
    } );
    $(".single-portfolio")
    .hover(
        function (){
            $(this).css({"box-shadow":"0px 0px 2px 2px orangered"})},
        function (){
            $(this).css({"box-shadow":"0px 0px 0px 0px orangered"})}
        )

    .click(function (e) {
        $(".imgDisplay").css("display","block");
        selected=e.currentTarget
        let target=$(this).find("img").attr("src");                        
        $(".imgDisplay img").attr("src",target);    
    });
    $(".pre").click(function (x) {
        let Img=$(this).siblings('img').attr("src");
        let preImg;
        datas.map(function (select) {
            if("./photo/"+select.address+".JPG"==Img){
                preImg=Number(select.id)-2 ;
            }           
        })   
        $(this).siblings('img').attr("src","./photo/"+datas[preImg].address+".JPG")
        x.preventDefault()
    });
    $(".next").click(function (x) {
        let Img=$(this).siblings('img').attr("src");
        let preImg;
        datas.map(function (select) {
            if("./photo/"+select.address+".JPG"==Img){
                preImg=select.id ;
            }           
        }) 
        $(this).siblings('img').attr("src","./photo/"+datas[preImg].address+".JPG")
        x.preventDefault()
    });
    $('.locationPage').click((e)=>{
        console.log($(window).scrollTop());
         
    })
    
    $(".nav").click((e)=>{
        function height(index){
            let pagename=`.${index}Page`;
            let pagetop=(index=="photo")?0:$(pagename).offset().top;  
            console.log(pagetop);
            
                                 
            return $('html, body').animate({scrollTop:pagetop})
             
        }
        switch ($(e.currentTarget).prop("class")) {
           
            case "nav photo":
                height("photo") 
                break;
            case "nav location":
                height("location")            
                break;
            case "nav rule":
                height("rule")            
                break;
            case "nav content":
                height("content") 
                break;       
            default:
                break;
        }
        
    })
    .hover(
        function (){
            $(this).find(".icon").css({"background-color":"orangered"})
            $(this).find("p").css({"color":"orangered"})

        },
        function (){
            $(this).find(".icon").css({"background-color":"white"})
            $(this).find("p").css({"color":"white"})}
        )
    $(function() {
        var latlng = { lat:23.556897,  lng: 120.437010 };	
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,	//放大的倍率
        center: latlng	//初始化的地圖中心位置
    });

    var marker = new google.maps.Marker({
        position: latlng,	//marker的放置位置
        map: map ,
        title:'A棟'
    });
    var marker2 = new google.maps.Marker({
        position: { lat:23.556759,  lng: 120.438397 },	
        map: map ,
        title:'B棟'
    });
      })
})    