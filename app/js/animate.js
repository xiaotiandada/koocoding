$(function () {
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
    $(window).on('scroll',throttle(realFunc,200,500))

    var onScrollFun = function () {
        rowShow()
    }

    function rowShow() {
        $('.row').each(function (index, val) {
            var thisTop = this.offsetTop
            if(thisTop >= $(window).scrollTop() && thisTop < ($(window).scrollTop()+$(window).height())){
              $(this).find('.figure').addClass('active')
              $(this).find('.desc').addClass('active')
            }
        })
    }

    (function () {
        rowShow()
    })()


})