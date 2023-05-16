function setting(){
    for(let i = 0; i <9;i++){
        let a = $('.projectul li').eq(i).find('a').html();
         $('.projectul li').eq(i).find('a').html(a.replace(/\^/g,'<br>'));
    }
}
setting()
export default brset;