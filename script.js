function buttonclick(val){
    document.getElementById("screen").value+=val
}

function buttonclear(){
    document.getElementById("screen").value=""
}
function sum(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}