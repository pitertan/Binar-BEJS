const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(q){
    return new Promise(resolve => {
        interface.question(q, data => {
            resolve(data);
        });
    });
}

async function main(){
    try{
        let operasi = await question(`selamat datang di apliaksi kalkulator
        pilih operasi matematika yang anda inginkan :
        1.tambah
        2.kurang
        3.kali
        4.bagi
        5.akar
        6.luas persegi
        7.volume kubus
        8.volume tabung
        pilihan anda : `);
        console.log(`kamu pilih = ${operasi}`);
        let a,b
        if(operasi >= 5 && operasi <= 7  ){
        a = parseInt(await question('masukkan angka yang akan dihitung : '));
        }else if(operasi == 8){
        a = parseInt(await question('masukkan jari-jari alas : '));
        b = parseInt(await question('masukkan tinggi tabung : '))
        }else{
        a = parseInt(await question('masukkan angka pertama : '));
        b = parseInt(await question('masukkan angka kedua : '))
        }

        switch (operasi) {
            case '1':
                console.log(`${a} + ${b} = ${a + b}`);
                break;
            case '2':
                console.log(`${a} - ${b} = ${a - b}`);
                break;
            case '3':
                console.log(`${a} x ${b} = ${a * b}`);
                break;
            case '4':
                console.log(`${a} / ${b} = ${a / b}`);
                break;
            case '5':
                console.log(`Akar kuadrat dari ${a} adalah ${Math.sqrt(a)}`);
                break;
            case '6':
                console.log(`Luas persegi dengan sisi ${a} adalah ${Math.pow(a,2)}`);
                break;
            case '7':
                console.log(`Volume kubus dengan sisi ${a} adalah ${Math.pow(a,3)}`);
                break;
            case '8':
                if(a % 7 == 0 || b % 7 == 0){
                    console.log(`Volume tabung dengan jari-jari ${a} dan tinggi ${b} adalah ${22 / 7 * Math.pow(a,2) * b}`);
                }else{
                    console.log(`Volume tabung dengan jari-jari ${a} dan tinggi ${b} adalah ${3.14 * Math.pow(a,2) * b}`);
                }
                break;
            default:
                console.log('Operasi matematika tidak valid!');
        }
            
            let jawaban = await question('Apakah ingin menghitung lagi? (y/n) ');
            if (jawaban.toLowerCase() === 'y') {
                main();
            }else{
                console.log('terima kasih!')
                interface.close();
            }
    }catch(err){
        console.log(err);
    }
}
main();