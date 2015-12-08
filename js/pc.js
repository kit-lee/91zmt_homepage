 $(document).on('click', '#play-img', function(){
             var html='<video id="CTPmediaElement0" class="CTPmediaElement" controls preload="auto" autoplay src="http://ctpfc.sinaapp.com/youkufull.php?vid=XMTMwMDE1MDk2MA==&qua=mp4" poster="http://r1.ykimg.com/0541010155C33F826A0A472C2FEA0856"></video>';
             
              $('.vi-poster').html(html);
             
              $(this).css('display', 'none');
             /*var docm,rqst;
             docm=document.getElementById("video1");
             rqst=docm.requestFullScreen||docm.webkitRequestFullScreen||docm.mozRequestFullScreen || docm.msRequestFullScreen;
             if(typeof rqst!="undefined" && rqst){
              rqst.call(docm);
           }*/
          });
