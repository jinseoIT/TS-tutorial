/* 
 - The any will continue to propagate through your objects
 - After all, remember that all the convenience of any comes at the cost of losing type safety.
 - Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
*/

// noImplicitAny
function returnAny(message: any): any{
  console.log(message);
}

const any1 = returnAny('return message');

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
c.indexOf("0");