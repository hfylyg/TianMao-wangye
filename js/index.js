/*
* @Author: Administrator
* @Date:   2017-11-08 19:24:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-22 11:21:07
*/


window.onload=function(){
	let banner=document.getElementsByClassName("banner")[0];
	let bannerarr=['#E8E8E8','#0865E5','#E8E8E8','#B98FF1','#F85A7E','#8B6846'];

	let bannerpic=document.getElementsByClassName("banner-pic")[0];
	let bannerli=bannerpic.getElementsByTagName("li");

	let btn=document.getElementsByClassName("banner-btn")[0];
	let btns=btn.getElementsByTagName("li");
	// console.log(btn,btns);
	let time=setInterval(fn,2000);
	let num=0;
	function fn(){
		num++;
		if(num==bannerli.length){
			num=0;
		}
		for(let i=0;i<bannerli.length;i++){
			bannerli[i].style.opacity=0;
			btns[i].style.background="rgba(141, 97, 76, 0.7)";
			banner.style.background=bannerarr[0];
			
		}
		bannerli[num].style.opacity=1;
		btns[num].style.background="rgba(219, 210, 192, 0.7)";
		banner.style.background=bannerarr[num];

	}
	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			btns[i].style.background="rgba(219, 210, 192, 0.7)";
			btns[num].style.background="rgba(141, 97, 76, 0.7)";
			bannerli[i].style.opacity=1;
			bannerli[num].style.opacity=0;
			banner.style.background=bannerarr[i];
			num=i;

		}

		banner.onmouseover=function(){
			clearInterval(time);
		}
		banner.onmouseout=function(){
			time=setInterval(fn, 2000);
		}

	}


	let menu1=document.getElementsByClassName("menu1")[0];
	let box1=document.getElementsByClassName("box1")[0];
	console.log(menu1,box1);
	box1.onmouseover=function(){

		menu1.style.display="block";
			}
	box1.onmouseout=function(){
		menu1.style.display="none";
		
	}
	let menu2=document.getElementsByClassName("menu2")[0];
	let box2=document.getElementsByClassName("box2")[0];
	console.log(menu2,box2);
	box2.onmouseover=function(){

		menu2.style.display="block";
			}
	box2.onmouseout=function(){
		menu2.style.display="none";
		
	}

	let menu3=document.getElementsByClassName("menu3")[0];
	let box3=document.getElementsByClassName("box3")[0];
	console.log(menu3,box3);
	box3.onmouseover=function(){

		menu3.style.display="block";
			}
	box3.onmouseout=function(){
		menu3.style.display="none";
		
	}
	let menu4=document.getElementsByClassName("menu4")[0];
	let box11=document.getElementsByClassName("box11")[0];
	console.log(menu1,box1);
	box11.onmouseover=function(){

		menu4.style.display="block";
			}
	box11.onmouseout=function(){
		menu4.style.display="none";
		
	}

	let asideul=document.getElementsByClassName("asideul")[0];
	let asideli=asideul.getElementsByTagName("li");
	let active=document.getElementsByClassName("aside-active");
	console.log(asideli,asideul,active);
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseover=function(){
			active[i].style.display="block";
		}
		asideli[i].onmouseout=function(){
			active[i].style.display="none";
		}
	}


	//楼层跳转
	
	/*let sec=document.querySelectorAll("section");

	let back=document.querySelector(".f3");

	window.onscroll=function () {
        var obj=document.body.scrollTop?document.body:document.documentElement;


        back.onclick=function(){
            // console.log(document.body.scrollTop);
            animate(document.documentElement,{scrollTop:0},1000);
            animate(document.body,{scrollTop:0},1000);

        }
    }*/

     let back=document.querySelector(".f3");
    let mainli=document.querySelectorAll("main section");
    let ce=document.querySelector(".f");
    let tli=document.querySelectorAll(".f2");

    let up=false;
    let down=true;

    let ss=document.querySelector(".topss");
    // console.log(back,mainli,tli);

    window.onscroll=function () {
        var obj=document.body.scrollTop?document.body:document.documentElement;


        back.onclick=function(){
            // console.log(document.body.scrollTop);
            animate(document.documentElement,{scrollTop:0},1000);
            animate(document.body,{scrollTop:0},1000);

        }
        // let stop=document.body.scrollTop;
        let stop=obj.scrollTop;

        if(stop>=mainli[0].offsetTop-440){

            if(up){
                up=false;
                animate(ce,{width:36,height:326},function () {
                    down=true;
                });
                animate(ss,{top:0},1000,function () {
                    down=true;
                });
            }

        }
        else{
            if(down){
                down=false;
                animate(ce,{height:0,width:0},function () {
                    up=true;
                });
                animate(ss,{top:-50},1000,function () {
                    up=true;
                });
            }

        }



        let arr=["#64C333"," #000","#EA5F8D","#0AA6E8"," #64C333","#F15453","#19C8A9","#000"];
        mainli.forEach(function (f,index) {
            let shijitop=f.offsetTop;
            if(shijitop-200<=stop){
                tli.forEach(function(val){
                    val.style.background="";

                })
                tli[index].style.background=arr[index];

            }


        })


    }
    tli.forEach(function (f,index) {
        f.onclick=function () {
            animate(document.body,{scrollTop:mainli[index].offsetTop});
            animate(document.documentElement,{scrollTop:mainli[index].offsetTop});
        }



    })

}
