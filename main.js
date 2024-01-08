document.write("47.to check whether a given number exists in the range 40..10000"+"<br>");
function test47(x,y,n){
    if(n<40 || n>10000){
        return false;
    }
    if(n>=x && n<=y){
        return true;
    }
    return false;
}
document.write("Range :40-10000 ,number :45 ,Ans:"+test47(40,4000,45)+"<br><br>");