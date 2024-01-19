function setCookie(name, val, expireDate){
    let cookieStr = name + "=" + escape(val) +
    ((expireDate == null) ? "" : ("; expires=" + expireDate.toUTCString()));
    document.cookie = cookieStr;
}

function getCookie(name){
    let str = name + "="
    // 쿠키는 속성별 구분을 ; 으로 한다.
    let pairs = document.cookie.split(';');
    for(let i = 0; i < pairs.length; i++){
        let pair = pairs[i].trim();
        
        // key 
        let unit = pair.split('=');

        if(unit[0] == name){
            return unescape(unit[1]);
        }
        
    }
}