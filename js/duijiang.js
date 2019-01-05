$(function(){
    console.log(document.body.clientHeight)
$("body").css("height",document.body.clientHeight)
$('.yanzheng_btn').click(function(){
        var numVal=$('.number').val();
        if(numVal=='123'||numVal=='456'||numVal=='789'){
            function GetQueryString(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
               }
            var sloe=GetQueryString("openid")
            var dt=GetQueryString("dt")
            $('.number').val('');
            $.ajax({
            url: './php/expiry.php?openid='+sloe+'&datetime='+dt,
            async: false,
            type: 'get',
            success: function(dava){
                var davas=eval('(' + dava + ')');
                    console.log(davas)
                if(davas['state']==2){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                }else if(davas['state']==3){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".texttips").text('兑换日期已过期');
                }else if(davas['state']==1){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".expried img").attr('src','./images/inform-right.png');
                    if(davas['giftID']==1){
                        $(".prizeText").text('礼品1');
                    }else if(davas['giftID']==2){
                        $(".prizeText").text('礼品2');
                    }if(davas['giftID']==3){
                        $(".prizeText").text('礼品3');
                    }if(davas['giftID']==4){
                        $(".prizeText").text('礼品4');
                    }
                    $(".texttips").text('兑换成功');
                }else if(datas['state']=='-1'){
                    alert('网络不稳定，请检查网络重新验证！');
                }else if(datas['state']=='0'){
                    alert('未查询到中奖信息！');
                }
            }
            })
            
        }else{
            $('.yan_tips').css('display','block');
        }
        })
        $(".number").focus(function(){
            $('.yan_tips').css('display','none');
        })
})
