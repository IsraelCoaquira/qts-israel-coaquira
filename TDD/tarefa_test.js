import{

    assertNotEquals,

    assertStrictEquals,

    assertLessThan,

} from "http://deno.land/std/testing/asserts.ts"





Deno.test("Teste de diferente", () => {

    const batata = 15;

    const cebola = 20;




    assertNotEquals(batata, cebola);

})




Deno.test("Teste de diferente, de valor estrito", () => {

    const batata = 20;

    const cebola = "25";




    assertStrictEquals(batata, cebola);

})




Deno.test("Teste de diferente, valendo estritamente", () => {

    const abacate = 50;

    const messi = 25;




    assertLessThan(abacate, messi);

})