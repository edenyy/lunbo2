/**
 * Created by Administrator on 2017/10/8.
 */
var slide=$('#slide')
var arrow_left=$('.left')
var arrow_right=$('.right')
var panels=$('.panels>li')
var index=0;
arrow_right.on('click', function () {
    playNext(1)

})
arrow_left.on('click',function () {
    playPre(1)

})
function playNext(len) {
    index+=len
    if(index==4){
        index=0
        slide.css({
            left:-350
        })
    }else {
        slide.animate({
            left: '-=' + len*350
        })
    }
    setPanels()
}
function playPre(len){
    index-=len
    if(index<0){
        index=3
        slide.css({
            left:-1400
        })
    }else {
        slide.animate({
            left: '+=' + len*350
        })
    }
    setPanels()
}
function setPanels(){
panels.eq(index).addClass('active').siblings().removeClass('active')
}
panels.on('click',function(e){
    var pIndex=$(e.target).index()
    if(pIndex>index){
        playNext(pIndex-index)
    }else{
        playPre(index-pIndex)
    }

})