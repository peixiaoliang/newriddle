$(function(){
    $(".game_start").click(function(){
        $(".riddle_rule_bg").css("display","block");
        $(".game_start").css("display","none");

    })
    // $(".riddles_background").css("display","none");
    // $(".riddle_page_con").css("display","none");
    // $(".riddle_page_con2").css("display","none");
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
         datetime = year + seperator1 + month + seperator1 + strDate;
        return datetime;
    }
    getNowFormatDate()
    //console.log(datetime)
    $(".submit_btn").click(function(){
        $(".riddles_background").css("display","none");
        if( $('.riddle_id').text()=="5"||$('.riddle_id').text()=="10"||$('.riddle_id').text()=="15"||$('.riddle_id').text()=="20"||$('.riddle_id').text()=="25"||$('.riddle_id').text()=="30"||$('.riddle_id').text()=="35"||$('.riddle_id').text()=="40"||$('.riddle_id').text()=="45"||$('.riddle_id').text()=="50"){
            $(".riddle_page_con2").css("display","block");
        }else{
            $(".riddle_page_con").css("display","block");
        }
    })
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
       }
    var sloe=GetQueryString("openid");
    var arr=[
        {
            id:1,
            title:"世界上第一部全电脑制作的动画电影是哪部？",
            tip:"",
            choose:["怪兽大学","玩具总动员","Wall-E"],
            right:"玩具总动员" 
        },
        {
            id:2,
            title:"白白身子红红鼻，树枝头发树枝手，自带云雪闯天下",
            tip:"(打一迪士尼动画人物)",
            choose:["大白","雪宝","白雪公主"],
            right:"雪宝"
        },
        {
            id:3,
            title:"一位胖元帅，耳大肚子圆，爱吃又爱睡，全身都是宝。",
            tip:"(打一生肖)",
            choose:["狗","牛","猪"],
            right:"猪"
        },
        {
            id:4,
            title:"一个小淘气，身上穿红衣，辫子着了火，蹦到半空里。",
            tip:"(打一物品)",
            choose:["爆竹","弹珠","花灯"],
            right:"爆竹"
        },
        {
            id:5,
            title:"在三里屯太古里北区广场上“鲤跃龙门”装置中，一共有几条锦鲤？",
            tip:"",
            choose:["6条","8条","9条"],
            right:"8条"
        },
        {
            id:6,
            title:"《玩具总动员》系列中，小主人最心爱的玩具是什么？",
            tip:"",
            choose:["胡迪","三眼仔","芭比"],
            right:"胡迪"
        },
        {
            id:7,
            title:"迪士尼公主中，外表高贵、拥有呼风唤雪魔力的是哪位？",
            tip:"",
            choose:["安娜公主","白雪公主","艾莎女王"],
            right:"艾莎女王"
        },
        {
            id:8,
            title:"身上红彤彤，心里亮晶晶，节日上门楼，脸上笑盈盈。",
            tip:"",
            choose:["春联","灯笼","窗花"],
            right:"灯笼"
        },
        {
            id:9,
            title:"白胖子，爱吃肉，长得像元宝，水里浮起来。",
            tip:"",
            choose:["汤圆","年糕","饺子"],
            right:"饺子"
        },
        {
            id:10,
            title:"三里屯太古里开业的年份？",
            tip:"",
            choose:["2008年","2009年","2010年"],
            right:"2008年"
        },
        {
            id:11,
            title:"“飞向宇宙，浩瀚无垠”是哪位卡通人物的口头禅？",
            tip:"",
            choose:["兵人","蛋头先生","巴斯光年"],
            right:"巴斯光年"
        },
        {
            id:12,
            title:"《冰雪奇缘》的主题歌歌名是什么？",
            tip:"",
            choose:["Circle of life（生生不息）","Let it go（随它吧）","Colors of the wind（风之彩）"],
            right:"Let it go（随它吧）"
        },
        {
            id:13,
            title:"一个小淘气，身上穿红衣，辫子着了火，蹦到半空里。",
            tip:"(打一物品)",
            choose:["爆竹","弹珠","花灯"],
            right:"爆竹"
        },
        {
            id:14,
            title:"四季只有夏秋冬",
            tip:"(打一节日)",
            choose:["腊八","春节","元宵节"],
            right:"春节"
        },
        {
            id:15,
            title:"在三里屯太古里的哪里可以看电影？",
            tip:"",
            choose:["美嘉欢乐影城","三克映画 ","以上都可以"],
            right:"以上都可以"
        },
        {
            id:16,
            title:"《玩具总动员》中女牛仔叫什么名字？",
            tip:"",
            choose:["蛋头太太","翠丝","牧羊女"],
            right:"翠丝"
        },
        {
            id:17,
            title:"《冰雪奇缘》中两位公主分别叫什么名字",
            tip:"",
            choose:["艾莎和安娜","艾莎和雪宝","贝儿和安娜"],
            right:"艾莎和安娜"
        },
        {
            id:18,
            title:"白胖子，爱吃肉，长得像元宝，水里浮起来。",
            tip:"",
            choose:["汤圆","年糕","饺子"],
            right:"饺子"
        },
        {
            id:19,
            title:"向日葵",
            tip:"(打一北京区名)",
            choose:["朝阳区","海淀区","石景山区"],
            right:"朝阳区"
        },
        {
            id:20,
            title:"2019年三里屯太古里的春节活动主题是？",
            tip:"",
            choose:["华年似锦 踊跃潮玩","年大旺之年 万国来潮糕","一起潮玩"],
            right:"华年似锦 踊跃潮玩"
        },
        {
            id:21,
            title:"《玩具总动员3》里的大反派是谁？",
            tip:"",
            choose:["ken","刺猬先生","草莓熊"],
            right:"草莓熊"
        },
        {
            id:22,
            title:"戴上什么东西，艾莎可以防止冰雪魔力失控？",
            tip:"",
            choose:["手套","头纱","权杖"],
            right:"手套"
        },
        {
            id:23,
            title:"四季只有夏秋冬",
            tip:"(打一节日)",
            choose:["腊八","春节","元宵节"],
            right:"春节"
        },
        {
            id:24,
            title:"爬楼梯",
            tip:"(打一成语)",
            choose:["欣欣向荣","步步高升","百尺竿头"],
            right:"步步高升"
        },
        {
            id:25,
            title:"三里屯太古里在2018年获得《风度men’s uno Young！》颁发的奖项是？",
            tip:"",
            choose:["年度潮流风向标","明星最爱潮流地标 ","年度中国杰出商业运营综合体"],
            right:"年度潮流风向标"
        },
        {
            id:26,
            title:"《玩具总动员》里最可爱的玩具之一、绿色小恐龙的名字是什么？",
            tip:"",
            choose:["无牙仔","抱抱龙","史迪奇"],
            right:"抱抱龙"
        },
        {
            id:27,
            title:"艾莎的纱裙是什么颜色的？",
            tip:"",
            choose:["黄色","绿色","蓝色"],
            right:"蓝色"
        },
        {
            id:28,
            title:"向日葵",
            tip:"(打一北京区名)",
            choose:["朝阳区","海淀区","石景山区"],
            right:"朝阳区"
        },
        {
            id:29,
            title:"五加五正好",
            tip:"(打一成语)",
            choose:["称心如意","十全十美","美轮美奂"],
            right:"十全十美"
        },
        {
            id:30,
            title:"在三里屯太古里发生的快闪店、展览和新店开业等精彩活动，在2018年总计多少场？",
            tip:"",
            choose:["30场","50场","超过60场"],
            right:"超过60场"
        },
        {
            id:31,
            title:"在《玩具总动员》里，谁的身子能拉很长还不受伤，并且能迅速复原？",
            tip:"",
            choose:["弹簧狗","胡迪","巴斯光年"],
            right:"弹簧狗"
        },
        {
            id:32,
            title:"艾莎的城堡是用什么建成的？",
            tip:"",
            choose:["宝石","冰雪","水晶"],
            right:"冰雪"
        },
        {
            id:33,
            title:"一位胖元帅，耳大肚子圆，爱吃又爱睡，全身都是宝。",
            tip:"(打一生肖)",
            choose:["狗","牛","猪"],
            right:"猪"
        },
        {
            id:34,
            title:"身上红彤彤，心里亮晶晶，节日上门楼，脸上笑盈盈。",
            tip:"",
            choose:["春联","灯笼","窗花"],
            right:"灯笼"
        },
        {
            id:35,
            title:"在三里屯太古里北区广场上“鲤跃龙门”装置中，一共有几条锦鲤？",
            tip:"",
            choose:["6条","8条","9条"],
            right:"8条"
        },
        {
            id:36,
            title:"《玩具总动员》中，喜爱阅读、对世事无所不知粉色小猪储钱罐名字是什么？",
            tip:"",
            choose:["皮杰","佩奇","火腿"],
            right:"火腿"
        },
        {
            id:37,
            title:"《玩具总动《冰雪奇缘》里驯鹿斯文，觉得自己实际上是什么动物？",
            tip:"",
            choose:["拉布拉多犬","萌宠猫","迷你猪"],
            right:"拉布拉多犬"
        },
        {
            id:38,
            title:"白胖子，爱吃肉，长得像元宝，水里浮起来。",
            tip:"",
            choose:["汤圆","年糕","饺子"],
            right:"饺子"
        },
        {
            id:39,
            title:"爬楼梯",
            tip:"(打一成语)",
            choose:["欣欣向荣","步步高升","百尺竿头"],
            right:"步步高升"
        },
        {
            id:40,
            title:"2019年三里屯太古里的春节活动主题是？",
            tip:"",
            choose:["华年似锦 踊跃潮玩","年大旺之年 万国来潮糕","一起潮玩"],
            right:"华年似锦 踊跃潮玩"
        },
        {
            id:41,
            title:"世界上第一部全电脑制作的动画电影是哪部？",
            tip:"",
            choose:["怪兽大学","玩具总动员","Wall-E"],
            right:"玩具总动员"
        },
        {
            id:42,
            title:"《冰雪奇缘》里，地精们平时伪装成什么？",
            tip:"",
            choose:["蘑菇","小草","石头"],
            right:"石头"
        },
        {
            id:43,
            title:"五加五正好",
            tip:"(打一成语)",
            choose:["称心如意","十全十美","美轮美奂"],
            right:"十全十美"
        },
        {
            id:44,
            title:"向日葵",
            tip:"(打一北京区名)",
            choose:["朝阳区","海淀区","石景山区"],
            right:"朝阳区"
        },
        {
            id:45,
            title:"三里屯太古里在2018年获得《风度men’s uno Young！》颁发的奖项是？",
            tip:"",
            choose:["年度潮流风向标","明星最爱潮流地标 ","年度中国杰出商业运营综合体"],
            right:"年度潮流风向标"
        },
        {
            id:46,
            title:"《玩具总动员》中女牛仔叫什么名字？",
            tip:"",
            choose:["蛋头太太","翠丝","牧羊女"],
            right:"翠丝"
        },
        {
            id:47,
            title:"《冰雪奇缘》里救了安娜公主的克里斯托夫以什么为生？",
            tip:"",
            choose:["卖冰块","开杂货铺","世袭爵位的俸禄"],
            right:"卖冰块"
        },
        {
            id:48,
            title:"一个小淘气，身上穿红衣，辫子着了火，蹦到半空里。",
            tip:"(打一物品)",
            choose:["爆竹","弹珠","花灯"],
            right:"爆竹"
        },
        {
            id:49,
            title:"四季只有夏秋冬",
            tip:"(打一节日)",
            choose:["腊八","春节","元宵节"],
            right:"春节"
        },
        {
            id:50,
            title:"在三里屯太古里发生的快闪店、展览和新店开业等精彩活动，在2018年总计多少场？",
            tip:"",
            choose:["30场","50场","超过60场"],
            right:"超过60场"
        }

    ]
        // var arrsuiji=new Array();
		// for (var i = 0; i < arrs.length; i++) {
		// 	arrsuiji[i]=i;
		// }
		//  arrsuiji.sort(function(){
		//  return 0.5-Math.random();

		// })	
		// var arr=[];
		// for (var i = 0; i < arrsuiji.length; i++) {
        //     arr.push(arrs[arrsuiji[i]])
        // }
        $.ajax({
            url: './php/num.php?openid='+sloe,
            async: false,
            type: 'get',
            success: function(dataarr){
                var dates=eval('(' + dataarr + ')');
                console.log(dates)
                arr.unshift(arr[dates['riddles1']-1],arr[dates['riddles2']-1],arr[dates['riddles3']-1],arr[dates['riddles4']-1],arr[dates['riddles5']-1]);
            }
        })
        var sz=[];
		var b=0;
		var bb=0;
		var fenshu=0;
        ffn()
        function bt(bb){
            $('.sl').text(bb+1)
            $('.riddle_id').text(arr[bb].id);
            console.log($('.riddle_id').text())
            if( $('.riddle_id').text()=="5"||$('.riddle_id').text()=="10"||$('.riddle_id').text()=="15"||$('.riddle_id').text()=="20"||$('.riddle_id').text()=="25"||$('.riddle_id').text()=="30"||$('.riddle_id').text()=="35"||$('.riddle_id').text()=="40"||$('.riddle_id').text()=="45"||$('.riddle_id').text()=="50"){
                $(".riddle_page_con").css("display","none")
                $(".riddle_page_con2").css("display","block")
            }else{
                $(".riddle_page_con2").css("display","none")
                $(".riddle_page_con").css("display","block")
            }
            $('.riddle_timu').html("<span>"+arr[bb].title+"</span>");
            if($('.riddle_id').text()=="30"||$('.riddle_id').text()=="50"){
                $('.riddle_timu span').css("font-size","0.5rem")
            }
            $('.riddle_page_tips').text(arr[bb].tip);
            var riddle_cho=arr[bb].choose;
            var html="";
            $(riddle_cho).each(function(index,item){
                if(item==arr[bb].right){
                 html+='<div class="answer_item"><input type="radio" name="radio" value="'+item+'"><div class="option riddle_right_option"></div><span class="answer_item_text">'+item+'</span></div>'
                }else{
                 html+='<div class="answer_item"><input type="radio" name="radio" value="'+item+'"><div class="option"></div><span class="answer_item_text">'+item+'</span></div>'
                }
            })
            $(".riddle_page_answer").html(html)
            $('.riddle_right_choose').text(arr[bb].right);
            
        };
		//整个ffn文件是  包括各种小事件 全部封装到一起直接调用
		function ffn(){
            if($('.sl').text()>'4'){
                if(fenshu>=3){
                    $('.riddles_prize').css('display','block');
                }else{
                    $('.riddles_wrong').css('display','block');
                }
             return false;
            }
            bt(bb);
           
        }
    // 提交按钮
    var time = 0;
    $(".choose_submit_btn").on("click",function(){
       var data_choose=$(".answer_item").find("input[type=radio]:checked").val();
       var option_choose=$(".answer_item").find("input[type=radio]:checked").next();
       var data_choose_right=$(".riddle_right_choose").text();
	   console.log(data_choose)
       if(data_choose==undefined){
		   return false
		}else{
            if (time == 0) {
                time = 2; //设定间隔时间（秒）
         
                //启动计时器，倒计时time秒后自动关闭计时器。
                var index = setInterval(function(){
                    time--;
                    if (time == 0) {
                        clearInterval(index);
                    }
                }, 1000);
		    $(".answer_item").find("input[type=radio]").attr("disabled","disabled")
            if(data_choose==data_choose_right){
                bb=bb*1+1;
                fenshu++;
                option_choose.css({"background":"url(./images/inform-right.png)","background-size":"cover","width":"1.21rem","height":"1.36rem","top":"-0.1rem","left":"0.15rem"});
                setTimeout(function(){
                    ffn(bb)
                },2000)
                
            }else{
                bb=bb*1+1;
                $(".riddle_right_option").css({"background":"url(./images/inform-right.png)","background-size":"cover","width":"1.21rem","height":"1.36rem","top":"-0.1rem","left":"0.15rem"});
                option_choose.css({"background":"url(./images/inform-wrong.png)","background-size":"cover","width":"1.21rem","height":"1.36rem","top":"-0.1rem","left":"0.15rem"});
                setTimeout(function(){
                    ffn(bb)
                },2000)
            }
        }
    }
        
    })
    // 抽奖
    $(".lucky_btn").click(function(){
        $(".riddle_page_con2").css("display","none");
        $(".riddle_page_con").css("display","none");
        $(".getprize").css("display","block");
        
    })
    //$(".getprize").css("display","block");
    $(".prize_content ul").find("li").eq(1).css("display","block")
    $(".lucky_btn2").click(function(){
        var li=$(".prize_content ul").find("li")
        var num=0;
        var len=li.length;
        function move(){
            li[num].style.display="none";
            li.eq(num).removeClass("active")
            num=++num==len?0:num;
            li[num].style.display="block";
            li.eq(num).addClass("active")
     
        }
         var t=setInterval(move,30);//切换时间
         setTimeout(function(){
            clearInterval(t)
            $(".getprize").css("display","none");
            $(".prizepage1").css("display","block");
            // var imgUrl=$(".active img").attr("src")
            // $(".prize_img img").attr("src",imgUrl)
            // if(arr[4].id==5||arr[4].id==10||arr[4].id==15||arr[4].id==20||arr[4].id==25||arr[4].id==30||arr[4].id==35||arr[4].id==40||arr[4].id==45||arr[4].id==50){
            //     $(".prize_content_box").css({"background":"url(./images/result-hit.png)","background-size":"100% 100%"})
            // }
            $.ajax({
                url: './php/getGift.php?openid='+sloe,
                async: false,
                type: 'get',
                success: function(data){
                var datas=eval('(' + data + ')');
                console.log(datas)
                if (datas['giftID']==1) {
                    $(".prize_img img").attr("src","./images/TS_char1.png")
                 }else if (datas['giftID']==2) {
                    $(".prize_img img").attr("src","./images/TS_char2.png")
                 }else if (datas['giftID']==3) {
                    $(".prize_img img").attr("src","./images/TS_char3.png")
                 }else if (datas['giftID']==4){
                    $(".prize_img").css("display","none")
                    $(".prize_content_box").css({"background":"url(./images/result-hit1.png)","background-size":"100% 100%"})
                 }else if (datas['giftID']==-1){
                    $(".prize_img").css("display","none")
                    $(".weima_box").css("display","none")
                    $(".prize_content_box").css({"background":"url(./images/result-miss.png)","background-size":"100% 100%","height":"9.8rem","margin-top":"-4.9rem","top":"50%"})
                 }
            }
            })

        },2000)
        })
        function generateQRCode(rendermethod, picwidth, picheight, url) {  
            $("#qrcode").qrcode({   
                    render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式  
                    width: picwidth, //宽度   
                    height:picheight, //高度   
                    text: utf16to8(url), //内容   
                    typeNumber:-1,//计算模式  
                    correctLevel:2,//二维码纠错级别  
                    background:"#ffffff",//背景颜色  
                    foreground:"#7B4019"  //二维码颜色  
          
                });  
            } 
            init(); 
            function init() {  
                generateQRCode("canvas",100, 100, "http://www.baidu.com?openid="+sloe+"&dt="+datetime);  
            }  
            console.log("http://www.baidu.com?openid="+sloe)
                //中文编码格式转换  
            function utf16to8(str) {  
                var out, i, len, c;  
                out = "";  
                len = str.length;  
                for (i = 0; i < len; i++) {  
                    c = str.charCodeAt(i);  
                    if ((c >= 0x0001) && (c <= 0x007F)) {  
                        out += str.charAt(i);  
                    } else if (c > 0x07FF) {  
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                    } else {  
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                    }  
                }  
                return out;  
            }     
       

})