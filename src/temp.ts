interface Counter {
    (start : number): void;
    interval : number
}

// const getCounter = () =>{
//     let counter :Counter
//     counter = function(start : number){
//         console.log('时钟开始时间为：' , start);
//     }

//     counter.interval = 1 // 间隔为1
//     return counter
// }