const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nilai = [];

rl.question('Masukkan nilai siswa (pisahkan dengan spasi): ', (input) => {
    nilai = input.split(' ').map(x => parseInt(x));

  // mencari nilai tertinggi dan terendah
    const nilaiTertinggi = Math.max(...nilai);
    const nilaiTerendah = Math.min(...nilai);
    console.log(`Nilai tertinggi: ${nilaiTertinggi}`);
    console.log(`Nilai terendah: ${nilaiTerendah}`);

  // mencari rata-rata
    const totalNilai = nilai.reduce((a, b) => a + b, 0);
    const rataRata = totalNilai / nilai.length;
    console.log(`Rata-rata: ${rataRata}`);

  // mencari jumlah siswa lulus dan tidak lulus
    const lulus = nilai.filter(x => x >= 60);
    const tidakLulus = nilai.filter(x => x < 60);
    console.log(`Jumlah siswa lulus: ${lulus.length}`);
    console.log(`Jumlah siswa tidak lulus: ${tidakLulus.length}`);

  // mengurutkan nilai siswa
    const nilaiUrut = nilai.sort((a, b) => a - b);
    console.log(`Nilai siswa (terurut): ${nilaiUrut}`);

  // mencari siswa dengan nilai 90 dan 100
    const siswa90 = nilai.filter(x => x === 90);
    const siswa100 = nilai.filter(x => x === 100);
    console.log(`Siswa nilai 90 dan nilai 100 : ${siswa90}, ${siswa100}`);

    rl.close();
});