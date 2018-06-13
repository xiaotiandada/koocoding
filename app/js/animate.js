$(function () {
// 使用防抖动函数
    $(window).on('scroll', _.debounce(rowShow, 150))
    function rowShow() {
        console.log(1)
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
