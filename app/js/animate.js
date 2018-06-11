// get element
var getElem = function(selector){
    return document.querySelector(selector)
}
var getAllElem = function(selector){
    return document.querySelectorAll(selector)
}

// get element class
var getCls = function(element){
    return element.getAttribute('class')
}

// set element class

var setCls = function(element, cls){
    return element.setAttribute('class', cls)
}

// add element class
var addCls = function(element, cls){
    var baseCls = getCls(element)
    if(baseCls.indexOf(cls) == -1 ){
        setCls(element, baseCls+' ' + cls)
    }
}

// del element class
var delCls = function(element, cls){
    var baseCls = getCls(Element)
    if(baseCls.indexOf(cls) != -1){
        setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '))
    }
}


// 简单的节流函数
function throttle(func, wait, mustRun) {
    var timeout
    var startTime = new Date()

    return function() {
        var context = this
        var args = arguments
        var curTime = new Date()

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            func.apply(context,args)
            startTime = curTime
            // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(func, wait)
        }
    }
}
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
    onScrollFun()
}
// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,200,500))

var onScrollFun = function () {
    var pageTop = document.body.scrollTop || document.documentElement.scrollTop
    var figure = getAllElem('.figure')
    var desc = getAllElem('.desc')
    if(pageTop > 400){
        addCls(figure[0], 'active')
        addCls(desc[0], 'active')
    }

    if(pageTop > 800){
        addCls(figure[1], 'active')
        addCls(desc[1], 'active')
    }
    if(pageTop > 1200){
        addCls(figure[2], 'active')
        addCls(desc[2], 'active')
    }
    if(pageTop > 1600){
        addCls(figure[3], 'active')
        addCls(desc[3], 'active')
    }

    if( (getScrollTop() + getWindowHeight() == getScrollHeight()) || (getScrollTop() + getWindowHeight() == getScrollHeight() - 200) ){
        // alert("已经到最底部了！!");
        for(var i = 0;i<figure.length;++i){
            addCls(figure[i], 'active')
            addCls(desc[i], 'active')
        }
    }

}

//滚动条在Y轴上的滚动距离

function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//文档的总高度

function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//浏览器视口的高度

function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
