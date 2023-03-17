const readline = require('readline');

class NilaiSiswa {
    constructor() {
        this.nilai = [];
        this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    }

tambahNilai() {
    this.rl.question('Masukkan nilai siswa: ', (input) => {
    const nilaiSiswa = parseInt(input);
    this.nilai.push(nilaiSiswa);
    this.rl.question('Tambah nilai lagi? (y/n) ', (input) => {
        if (input === 'y') {
            this.tambahNilai();
        } else {
            this.tampilkanOutput();
            this.rl.close();
        }
        });
    });
}

tampilkanOutput() {
    // mencari nilai tertinggi dan terendah
    const nilaiTertinggi = Math.max(...this.nilai);
    const nilaiTerendah = Math.min(...this.nilai);
    console.log(`Nilai tertinggi: ${nilaiTertinggi}`);
    console.log(`Nilai terendah: ${nilaiTerendah}`);

    // mencari rata-rata
    const totalNilai = this.nilai.reduce((a, b) => a + b, 0);
    const rataRata = totalNilai / this.nilai.length;
    console.log(`Rata-rata: ${rataRata}`);

    // mencari jumlah siswa lulus dan tidak lulus
    const lulus = this.nilai.filter(x => x >= 60);
    const tidakLulus = this.nilai.filter(x => x < 60);
    console.log(`Jumlah siswa lulus: ${lulus.length}`);
    console.log(`Jumlah siswa tidak lulus: ${tidakLulus.length}`);

    // mengurutkan nilai siswa
    const nilaiUrut = this.nilai.sort((a, b) => a - b);
    console.log(`Nilai siswa (terurut): ${nilaiUrut}`);

    // mencari siswa dengan nilai 90 dan 100
    const siswa90 = this.nilai.filter(x => x === 90);
    const siswa100 = this.nilai.filter(x => x === 100);
    console.log(`Siswa nilai 90 dan nilai 100 : ${siswa90}, ${siswa100}`);
    }
}

const nilaiSiswa = new NilaiSiswa();
nilaiSiswa.tambahNilai();