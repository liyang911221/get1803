
//初始化UI
function initUI(){
	let lis = $(".img_ul")[0].children;
	lis[0].style.backgroundColor="red";
}

let myTimer;
var ord = 1;//当前图片的序号

//停止
function stopChange(){
	window.clearInterval(myTimer);
}

//跳转到指定的图片上。
function goImg(transOrd){
	//1、改变数据
	outOrd = ord;//此时的ord就是要出去ord。
	ord=transOrd;//改变ord的值；
	//2、处理边界
	if(ord>10){
		ord=1;
	}	
	//3、外观呈现
	let lis = $(".img_ul")[0].children;
	//1)、把所有的豆豆变成原始颜色（粉的）
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor="pink";
	}
	//2)、把当前的豆豆变成高亮（红色）
	lis[transOrd-1].style.backgroundColor="red";
	//3)、滑入滑出
	sliderIn(outOrd,ord)
	
}

//改变图片
function changeImg(){

	myTimer = setInterval(function(){
		//1、改变数据
		//移出的图片序号
		let outOrd = ord;//移出的图片序号
		ord=ord+1;
		//2、处理边界
		if(ord>10){
			ord=1;
		}		
		//3、外观呈现
		let lis = $(".img_ul")[0].children;
		//1)、把所有的豆豆变成原始颜色（粉的）
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="pink";
		}
		//2)、把当前的豆豆变成高亮（红色）
		lis[ord-1].style.backgroundColor="red";
		//3)、图片滑入
		console.log(outOrd,ord);
		sliderIn(outOrd,ord);
		
	},4000);	
}
//两张图片的滑入滑出
//outOrd:滑出图片的序号
//inOrd:滑入图片的序号

function sliderIn(outOrd,inOrd){
	let left1 = 0;	
	let myTimer = setInterval(function(){
		//1、改变数据
		left1-=20;
		//2、边界处理
		if(left1<-1349){
			left1=-1349;
			window.clearInterval(myTimer);
		}
		switch(outOrd){
			case 2:$(".img_a")[0].style.left=441+"px";break;
			case 3:$(".img_a")[0].style.left=100+"px";break;
			case 4:$(".img_a")[0].style.left=200+"px";break;
			case 5:$(".img_a")[0].style.left=300+"px";break;
			case 6:$(".img_a")[0].style.left=400+"px";break;
			case 7:$(".img_a")[0].style.left=500+"px";break;
			case 8:$(".img_a")[0].style.left=600+"px";break;
			case 9:$(".img_a")[0].style.left=700+"px";break;
			case 10:$(".img_a")[0].style.left=800+"px";break;
		}
		//3、改变外观
		$(".img_imgs")[outOrd-1].style.left = left1+"px";
		$(".img_imgs")[inOrd-1].style.left = (left1+1349)+"px";		
	},10);
	
}
//nav
// function Nav(width,height,hrefs,backgroundColor){
// 	this.domObj=null;
// 	this.width=width;
// 	this.height=height;
// 	this.nav_ul=[];
// 	this.backgroundColor=backgroundColor;
// 	// this.zIndex=zIndex;
// 	this.createUI();
// }
// Nav.prototype.createUI=function(){
// 	this.domObj=document.createElement("div");
// 	this.domObj.style.backgroundColor=this.backgroundColor;
// 	// this.domObj.style.display="none"
// 	this.domObj.style.width=this.width;
// 	this.domObj.style.height=this.height+"px";
// 	// this.domObj.style.zIndex=zIndex;
// 	$(".navs")[0].appendChild(this.domObj);
// }
// function Nav_ul(width,height,hrefs){
// 	this.domObj=null;
// 	this.width=width;
// 	this.height=height;
// 	this.float=left;
// 	this.hrefs=[];
// 	for(let i=0;i<this.hrefs.length;i++){
// 		this.liDom=document.createElement("li");
// 		this.liDom.style.cssText="width:100%;height:22px;color:#333333;font-size:12px;"
// 		this.domObj.appendChild(this.liDom);
// 		this.hrefsDom=document.createElement("a");
// 		this.hrefsDom.href=this.hrefs[i];
// 	}
// 	this.createUI();
// }
// Nav_a.prototype.createUI=function(){
// 	this.domObj=document.createElement("ul");
// 	this.domObj.style.backgroundColor=this.backgroundColor;
// 	// this.domObj.style.display="none"
// 	this.domObj.style.width=this.width+"px";
// 	this.domObj.style.height=this.height+"px";
// 	// this.domObj.style.zIndex=zIndex;
// 	$(".navs")[0].lastElementChild.appendChild(this.domObj);
// }
// function Nav_h3(width,height,color,fontWeight,lineHeight){
// 	this.domObj=null;
// 	this.width=width;
// 	this.height=height;
// 	this.color=color;
// 	this.fontWeight=fontWeight;
// 	this.lineHeight=lineHeight;
// 	this.createUI();
// }
// function Nav_a(){
// 	this.domObj=null;
// 	this.width=width;
// 	this.height=height;
// 	this.color=color;
// 	this.fontWeight=fontWeight;
// 	this.lineHeight=lineHeight;
// 	this.createUI();
// }
// Nav_h3.prototype.createUI=function(){
// 	this.domObj=document.createElement("div");
// 	this.domObj.style.backgroundColor=this.backgroundColor;
// 	this.domObj.style.color=color;
// 	this.domObj.style.width=this.width+"px";
// 	this.domObj.style.height=this.height+"px";
// 	this.domObj.style.fontWeight=fontWeight;
// 	this.somObj.style.lineHeight=lineHeight;
// 	$(".navs")[0].lastElementChild.appendChild(this.domObj);
// }


window.onload = function(){
	initUI();
	changeImg();
	$(".img")[0].onmouseover=stopChange;
	$(".img")[0].onmouseout=changeImg;
	let lis = $(".img_ul")[0].children;
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			goImg(i+1);
		}
	}
	let arr = ["http://www.1000phone.com","http://www.baidu.com","http://www.taobao.com","http://www.jingdong.com","http://www.mobiletrain.org"];
	// let arr=["https://store.lining.com/shop/goodsCate-0-0-0-0-0-0-min,max-flunmhv6atibehfagcvk5tra5wvkbg.html","https://store.lining.com/shop/display-908-1.html?homecmp=f_1","https://store.lining.com/shop/goods-490390.html","https://store.lining.com/shop/goods-490076.html"."https://store.lining.com/shop/goods-490035.html","https://store.lining.com/shop/goodsCate-update,desc,1,0-0-4-0-0s0-5-0-min,max-0.html","https://store.lining.com/shop/goods-488538.html","https://store.lining.com/shop/goodsCate-0-0-0-0-0-0-min,max-flunitn3glibehn3gll6sxdraks4a5tra5wvkbg.html","https://store.lining.com/shop/goodsCate-0-0-0-0-0-0-min,max-gdkqc5tra5wvkbggtorgtc5tra5wvkbg.html","www.baidu.com"];
	for(let i=0;i<$(".img_imgs").length;i++){
		$(".img_imgs")[i].onclick=function(){
			location.href=arr[i];
		}
	}
	$(".img_span1")[0].onclick=function(){
		let transOrd=ord-1;
		if(transOrd<1){
			transOrd=10;
		}
		goImg(transOrd);
	}
	$(".img_span2")[0].onclick=function(){
		let transOrd=ord+1;
		if(transOrd>10){
			transOrd=1;
		}
		goImg(transOrd);
	}
	// let m=new Nav("100%",50,"blue");
	let nav_a=$(".nav")[0].children
	nav_a[2].onmouseover=function (){
		let m=new Nav("100%",428,"#f6f6f6");

	}
	
	console.log(nav_a[0])
}