function saluda(){
    return "Hola";
}


describe("SET DE PRUEBAS para saludar", function() { 
    it("Debería retornar HOLA cuando llame a la funcion saluda()", function() { 
        expect (saluda()).toEqual("Hola"); 
    }); 
});
