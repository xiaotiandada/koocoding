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

window.onscroll = function () {
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

}