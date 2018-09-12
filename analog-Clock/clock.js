function clock(){
    //calculate angle
    var date, hour, minute, second;
    date = new Date;
    
    hour = 30 * ((date.getHours() % 12) + date.getMinutes() / 60);
    minute = 6 * date.getMinutes();
    second = 6 * date.getSeconds();
    
    //move hands
    setAttr('h-hand', hour);
    setAttr('m-hand', minute);
    setAttr('s-hand', second);
    
    //call every second
    setTimeout(clock, 1000);
    
};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 600, 300)';
    document.getElementById(id).setAttribute('transform', v);
};

window.onload=clock;

