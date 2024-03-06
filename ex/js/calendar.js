let dt = '';
var calendar;

//  캘린더
document.addEventListener('DOMContentLoaded', function() {
 var calendarEl = document.getElementById('calendar');
     calendar = new FullCalendar.Calendar(calendarEl, {
     initialView: 'dayGridMonth'
     ,titleFormat: function (date) {
         year = date.date.year;
         month = date.date.month + 1;
         
         return year + "년 " + month + "월";
     }
     ,headerToolbar: {
         left: 'prev,next today',
         center: 'title',
         right: 'dayGridMonth,timeGridWeek,timeGridDay'
     }
     ,themeSystem: 'bootstrap5'
     ,dateClick : function(date){
         dt = date.dateStr;
         alert('클릭: ' + date.dateStr);
         $("#calendar_start_date").val(dt);
         $("#calendarModal").modal("show");
         
     }
     , eventClick : function(res){
             console.log(res.event.dateStr);
             alert("이벤트 내용 : " + res.event.title);
             let action = prompt("d : 삭제, e : 수정");
             if(action == 'd'){ // 삭제
                 res.event.remove();
                 fn_delete(res.event.title);
                 
             }
             else if(action == 'e'){
                 // let newMsg = prompt("수정 내용을 입력해주세요");
                 // if(newMsg){
                 //     res.event.setProp("title", newMsg);
                     
                 // }
                 $("#calendarModal").modal("show");
                 res
             }
         }
     
 });
 calendar.render();
 console.log(dt);
});

let calContent;
let content = ''; // 일정내용
let startDate = ''; // 시작일자
let endDate = ''; // 종료일자
let startTime = ''; // 시작 시간
let endTime = ''; // 종료시간
let colorSelect; // 배경색 (마커 색)
let t_colorSelect; // 글꼴 색 

let year,month,day;

$(document).ready(function(){
 $("navbar").load('navbar.html'); // 네비 바
 $("#mdClose1").click(function(){ // 모달 종료 우측 상단 [x] 버튼
   // 값 모두 초기화
     $("#calendar_content").val("");
     $("#calendar_end_date").val("");
     $("#calendar_start_time").val("09:00");
     $("#calendar_end_time").val("09:30");
     $("#colorSelect").val("");
     $("#t_colorSelect").val("");
     $("#calendarModal").modal("hide");
 });
 $("#mdClose2").click(function(){ // 모달 종료 우측 하단 [취소] 버튼
   // 값 모두 초기화
     $("#calendar_content").val("");
     $("#calendar_end_date").val("");
     $("#calendar_start_time").val("09:00");
     $("#calendar_end_time").val("09:30");
     $("#colorSelect").val("");
     $("#t_colorSelect").val("");
     $("#calendarModal").modal("hide");
 });

 $("#toolBtn").click(function(){ // 좌측 [일정등록] 버튼 이벤트 처리
   $("#calendarModal").modal("show");
 })

 $("#addCalendar").click(function(){ // 새일정 생성
     content = $("#calendar_content").val(); // 일정 내용
     startDate = $("#calendar_start_date").val(); // 시작 일자

     if($("#calendar_end_date").val() == ""){
         endDate = startDate; // 종료일자를 지정하지 않으면 시작일자와 같음으로 취급
     }
     else{
         endDate = $("#calendar_end_date").val(); // 지정 했다면 지정한 종료일자
     }
     
     startTime += 'T' + $("#calendar_start_time").val(); // T09:00 과 같은 포맷
     endTime += 'T' + $("#calendar_end_time").val();
     
     let timeCheck1 = $("#calendar_start_time").val();
     timeCheck1 = timeCheck1.replace(":", "");
     let timeCheck2 = $("#calendar_end_time").val();
     timeCheck2 = timeCheck2.replace(":", "");
     
     // 시작시간 / 종료시간 비교
     if(Number(timeCheck1) > Number(timeCheck2)){
       alert("종료시간이 시작시간보다 빠릅니다!");
     }
     // console.log(Number(timeCheck1))
     
     if($("#alldayCheck").is(":checked")){ // 하루종일 체크 여부
         startTime = '';
         endTime = '';
         if(startDate < endDate){
           let allEndDate = new Date(endDate)
           console.log(allEndDate);
           console.log(allEndDate+1);
           year = allEndDate.getFullYear();
           month = allEndDate.getMonth()+1;
           day = allEndDate.getDate();
           
           // Allday 기간이 하루가 아닐시 종료일자 +1을 해줘야함..
           if(day < 10 && month <10) 
           {
             endDate = year+"-0"+month+"-0"+(day+1);
           }
           else if(day < 10){
             endDate = year+"-"+month+"-0"+(day+1);
           }
           else if(month<10){
             endDate = year+"-0"+month+"-"+(day+1);
           }
           else{
              endDate = year+"-"+month+"-"+(day+1);
           }
           
           console.log(endDate);

         }
     }

     // 변수에 값 담아주고 초기화
     $("#calendar_content").val("");
     $("#calendar_end_date").val("");
     $("#calendar_start_time").val("09:00");
     $("#calendar_end_time").val("09:30");
     colorSelect = $("#colorSelect").val();
     $("#colorSelect").val("");
     t_colorSelect = $("#t_colorSelect").val();
     $("#t_colorSelect").val("");
  
     calContent = {
         title : content
         ,start : startDate + startTime
         ,end : endDate + endTime
         ,backgroundColor: colorSelect
         ,textColor : t_colorSelect
     };

     startTime = '';
     endTime = '';
     console.log(calContent);
     calendar.addEvent(calContent); // 캘린더에 일정 생성 
     $("#calendarModal").modal("hide"); // 모달 닫기
 });
 
});