// to remove global scope pollution we use iife i.e. Immmediately Invked Expressions

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

// ()()
// (function definition)(for function immmediate execution)

(  (name) => {
    // Unamed IIFE
    console.log(`DB 2 connected${name} `);
})(" Manav")

