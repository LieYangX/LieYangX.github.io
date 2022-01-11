layui.use(['layer', 'form','jquery'], function(){
    var layer = layui.layer
        ,form = layui.form
        ,$ = layui.$;
    //载入页面执行
    var dm = ["Happy birthday to Meng Yao！（有很多彩蛋噢笨蛋！看完！！！）", "愿你回望过去皆是无悔，展望前程已然不辜！",
        "愿你去往之地皆为热土，愿你所遇之人皆为挚友。","又老了一岁，和我一起养老吧。",
        "再没骗自己的理由，时间如刀不再温柔，生日愿望一夜暴富。生日快乐！","为什么不点击礼盒呢！",
        "彩蛋有很多就看笨蛋能不能找到咯",
        "说实话我很担心看不到彩蛋",
        "但是有不希望你看到呜呜呜","自我纠结，嘿嘿生日快乐！（给点提示点三次）"];

    //加载弹幕
    for(let j = 0; j < dm.length; j++) {
        outTimeSend(dm[j],'#ffffff',j);
    }

    //orange礼盒播放音乐
    $('.orange').click(function (){
        xTips("恭喜呀找到第一个彩蛋(播放音乐哈哈哈)",'.orange');
        play();
    });

    //blue礼盒贺卡
    $('.blue').click(function (){
        xTips("恭喜呀找到第二个彩蛋(祝福)",'.blue');
        setTimeout(function () {
            lookCard();
        }, 1000);
    });

    //关闭贺卡
    $('#closeCard').click(function (){
        $(".card").css("display","none");
        layer.closeAll();
    });

    var count = 0;
    //green礼盒特殊彩蛋
    $('.green').click(function (){
        count++;
        if (count == 3){
            xTips("恭喜呀找到第三个彩蛋(特殊)",'.green');
            count = 0;
            setTimeout(function () {
                tips();
            }, 1000);
        }
    });


});

// 弹出提示
function tips(){
    //示范一个公告层
    layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '300px;'
        ,shade: 0.8
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,btn: ['知道啦']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' +
            '当你找到第三个彩蛋时<br>我不知道该高兴还是难过嘿嘿<br>' +
            '<br>那次是我对不起呜呜呜，我比较的怎么说呢傻逼哎对了，' +
            '每个人出现在你生命中都是有ta的道理<br><br>' +
            '好吧算了算了说真心话比较的惹人烦，哈哈哈！！！' +
            'giao总之是我对不起了，哎最近总想找你聊天但是不知道该聊啥，会不会打扰到你学习嘿嘿^_^，我估计你也是没啥话想对我说哈哈哈' +
            '总之吧，生日快乐啦！叭叭叭一堆我也不知道我在说什么^_^这就是词不达意吧！</div>'
        ,success: function(layero){
            var btn = layero.find('.layui-layer-btn');
            btn.find('.layui-layer-btn0').on('click', function(){
                layer.closeAll();
            });
        }
    });
}
//小提示
function xTips(msg,xclass){
    layer.tips(msg, xclass, {
        tips: [1, '#ff006a'],
        time: 1000
    });
}

function play() {
    var music = document.getElementById("music");
    //判断如果音乐停止播放中，就让他播放。。。
    if (music.paused) {
        music.paused = false;
        music.play();
    }
}

//弹出贺卡
function lookCard(){
    //捕获页
    layer.open({
        type: 1,
        shade: false,
        title: false, //不显示标题
        closeBtn: 0, //不显示关闭按钮
        content: $('.card'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        cancel: function(){
            $(".card").css("display","none");
        }
    });
}

// 延时发送弹幕
function outTimeSend(info,color,i){
    setTimeout(function () {
        send(info,color);
    }, 5000 * i);
}

// 发送弹幕
function send(info,color){
    var item={
        img:'', //图片
        info:info, //文字
        href:'', //链接
        close:false, //显示关闭按钮
        speed:20, //延迟,单位秒,默认6
        color:color, //颜色,默认白色
        old_ie_color:'#ffffff' //ie低版兼容色,不能与网页背景相同,默认黑色
    }
    $('body').barrager(item);
}