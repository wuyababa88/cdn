window.onload = function(){
	if(getCookie("footad")==0){
		document.getElementById("float_mask").style.display="none";
	}else{
		document.getElementById("float_mask").style.display="block";
	}
}
//关闭底部广告
function closeFootAd() {
	document.getElementById("float_mask").style.display="none";
	setCookie("footad","0"); 
}
   
//设置cookie 
function setCookie(name,value){ 
    var exp = new Date();  
    exp.setTime(exp.getTime() + 60*1000);//有效期1小时 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
//取cookies函数 
function getCookie(name){ 
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
    if(arr != null) return unescape(arr[2]); return null; 
} 