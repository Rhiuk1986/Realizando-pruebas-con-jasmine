//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    var sum=0;
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    var sum=0;
    sum =arr[0]+arr[arr.length-1];
    return sum;
}
//devuelve la suma de valor maximo con el valor minimo de un arreglo
function sumMaxMin(arr){
    var max=arr[0];
    var min=arr[0];

    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
          max=arr[i];
        }
    }
    return max+min;
}

describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});
describe("SET DE PRUEBA PARA FUNION sumMaxMin()", function() { 
    it("deberia retornar 11 cuando el arreglo sea [1,3,10] ", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("deberia retornar 11 cuando el arreglo sea [-2,-5,-10]", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    }); 
    it("deberia retornar 11 cuando el arreglo sea [1,2,5,3,6] ", function() { 
        expect(sumMaxMin([1,2,5,3,6])).toEqual(7); 
    }); 
});