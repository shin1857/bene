//main.js
$(document).ready(function(){
  $(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2').stop().show();
            $('#gnb_bg').addClass('show');
        },
        function(){
            $('.depth2').stop().hide();
            $('#gnb_bg').removeClass('show');
        }
    )
  });
  //lnb
  $(function(){
    var menu = 0;
   
    $('#lnb > .lnb > li > a').click(function(){
        $('#lnb > .lnb > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
  })

// modal
  $("table td").eq(0).click(function(a){
    a.preventDefault();
    $(".modal").fadeIn();
  });

  $(".modal > .modal_wrap > button").click(function(){
    $(".modal").fadeOut();
  });

});


  $(document).ready( function() {
    AOS.init();
  });

  // slide
  
  $(function () {
    var img_num = 0; // 이미지 번호
    var duration = 3000; // 인터벌 시간
    var slider;   // slider 실행 객체 변수
  
    // 초기화
    $('.slide').fadeOut();
    $('.slide').eq(img_num).fadeIn();
  
    // 
    function changeSlider() {
      // 전체 이미지 fadeOut
      $('.slide').fadeOut();
      // 현재 이미지 fadeIn
      $('.slide').eq(img_num).fadeIn();
      // pager UI 업데이트
      $('.pager > a').removeClass('active');
      $('.pager > a').eq(img_num).addClass('active');
    }
  
    // 슬라이더 재생
    function sliderStart() {
      slider = setInterval(function () {
        // 마지막 이미지 번호이면 처음으로 
        if (img_num >= 1) { img_num = 0 } else {
          // 다음 이미지 번호로
          img_num = img_num + 1;
        }
        changeSlider(img_num);
      }, duration);
    }
  
    // 슬라이더 정지
    function sliderStop() {
      clearInterval(slider);
      console.log('stop');
    }
  
    sliderStart();
  
    // 마우스가 올라가면 슬라이더 정지
    $('.slide, .first, .second').hover(
      function () {
        sliderStop();
      },
      function () {
        sliderStart();
        console.log('start');
      }
    )
  
    // 1번째 pager 클릭
    $('.pager > .first').click(function () {
      img_num=0;
      changeSlider();
  
    })
    // 2번째 페이저 클릭
    $('.pager > .second').click(function () {
      img_num=1;
      changeSlider();
    })
  
    // 3번째 페이저 클릭
    $('.pager > .third').click(function () {
      img_num=2;
      changeSlider();
    })
  
  });


  