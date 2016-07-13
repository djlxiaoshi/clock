for (var i = 60; i > 0; i--) {
	var degLi=document.createElement("li");

	degLi.style.transform="rotate("+6*i+"deg)";

	idDom("deg").appendChild(degLi);
}

function runtime(){
	var date=new Date();
	var secs=date.getSeconds();
	var minus=date.getMinutes();
	//换成12小时制，并加上小时的小数部分
	var hours=date.getHours()-12+minus/60;
	classDomList("hour")[0].style.transform="rotate("+30*hours+"deg)"
	classDomList("min")[0].style.transform="rotate("+6*minus+"deg)"
	classDomList("second")[0].style.transform="rotate("+6*secs+"deg)"
}

function classDomList(className){
	return  domItems=document.getElementsByClassName(className);

}

setInterval(function(){
	runtime();
},1000)

function idDom(id){
	return document.getElementById(id);
}