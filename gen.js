//JS!
var targID = "data";
var target = document.getElementById(targID);
var btn = document.getElementById(genBtn);
var progBar = document.getElementById("inner");
var entLength = document.getElementById("ent");
var entropyLength = 1024*0.25 //1kbyte in bits
var pool = "";

function updateDiv(t, f) {
    t.innerHTML = f;
        
}

genBtn.addEventListener('click', generate, false);
function entropy(event) {
    //updateDiv(target, event.clientX + event.clientY);
    
    if(pool.length >= entropyLength){
        pool = pool.substr(0,entropyLength);
        progBar.style.width = "100%";
        progBar.style.background = "green";
        document.removeEventListener('mousemove',entropy, false);
    }else{
        pool += "" + event.clientX%7 + event.clientY;
        progBar.style.width = pool.length/entropyLength*100 + "%";
        updateDiv(entLength, (pool.length >= 1024 ? 1024 : pool.length));
    };
}



document.addEventListener('mousemove', function(e){
    throttle(20, false, entropy, e);
}, false);


var throttled = []; //global holding cell for scope.
var throttle = function(time, scope, callback, args){
    if(throttled.length >= 1){
        for(var i = 0; i <= throttle.length; i++){
            if(throttled[i] === scope){
               // console.log("you've been throttled!");
                return false;
            }
        }
    }
    throttled.push(scope);
    var timer = setTimeout(function () {
        throttled.splice(throttled.indexOf(scope, 1));
        if(typeof callback === "function"){
            callback(args);
        }
        return null;
    }, time)
    return true;
};

function pickWord(){
    num = Math.floor(Math.random() * words.length)
    return words[num];
}

function generate(){
    if(pool.length >= entropyLength){
        var one = (pool.charAt(Math.floor(Math.random()*100)));
        var two = (pool.charAt(Math.floor(Math.random()*100)));
        var three = (pool.charAt(Math.floor(Math.random()*100)));
        var four = (pool.charAt(Math.floor(Math.random()*100)));
        console.log("" + one + two + pickWord() + three + four);
    }

}
console.log(words)