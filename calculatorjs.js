function show(val){
    document.getElementById("total").value+=val
}
        
function operate(){
    let x = document.getElementById("total").value
    let y = eval(x)
    document.getElementById("total").value = y
}
        
function clear1(){
    document.getElementById("total").value = ""
}