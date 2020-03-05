const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} 个字符, ` +
            `${Buffer.byteLength(str, 'utf8')} 个字节`);

            const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf, Buffer.alloc(10, 1), Buffer.from("best"));
// for (const b of buf3) {
//   console.log(b);
// }
