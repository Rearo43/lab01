// let color = rgb[(36, 160, 11)]
// let i = 
// if (let i = 0; i < color.length; i++)

let px = $(window).width() > 786

function changeCSS(px){
    if(px < 786){
        $("main:nth-child(1)").css("background-color", "black");
    }else(px > 786);{
        $("main:nth-child(1)").css("background-color", "yellow");
    }
    changeCSS();
}