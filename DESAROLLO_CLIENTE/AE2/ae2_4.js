function findGreaterThan(){

    let numero=65;
    let values=[62,45,68,37,8];

    for(i=0;i<values.length;i++){
        if(values[i]>numero){
            console.log("Cierto");
        }else{
            console.log("Falso");
        }
    }

}
findGreaterThan();