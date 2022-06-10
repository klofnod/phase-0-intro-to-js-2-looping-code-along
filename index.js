function writeCards(list , event){
    let message = []
    for(let n=0; n < list.length; n++){
        message.push (`Thank you, ${list[n]}, for the wonderful ${event} gift!`)
    }   
    return message
}
function countDown(num){
    while (num >=0){
        console.log(num)
        num--
    }
}