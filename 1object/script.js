// Cara membuat object pada Javascript
// 1. Object Literal -> tidak efektif untuk object yang banyak

// let child = {
//     name : 'Alila',
//     energy : 1,
//     makan : function(portion){
//         this.energy = this.energy + portion;
//         console.log(`Halo ${this.name}, selamat makan`);
//     }   
// }


//2. Function Declaration

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(portion){
//         this.energi += portion;
//         console.log(`halo ${this.nama}, selamat makan`)
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }


//     return mahasiswa;
// }

// let luky = Mahasiswa('Luky', 5);

// 3. Constructor

// function Biodata(nama, umur){
//     this.nama = nama;
//     this.umur = umur;
//     this.olahraga = function(tahun){
//         this.umur += tahun;
//     }
//     this.tidur = function(hari){
//         this.umur -= hari;
//     }
// }

// let luky = new Biodata('luky', 26);