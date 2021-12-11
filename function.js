function moyen (){
    var student =[10,12.5,15,20,8];
    var sum = 0;
    var moy = 0;
    for (var i=0;i<student.length;i++){
        sum = sum+student[i]
    }
    moy = sum/student.length
    return moy;
}

console.log(moyen ());