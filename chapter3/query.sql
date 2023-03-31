-- membuat database
CREATE DATABASE manufaktur;

-- menggunakan database yang dibuat
USE nama_database;

-- membuat tabel Produk
CREATE TABLE Produk (
id_product CHAR(36) NOT NULL PRIMARY KEY,
nama_produk VARCHAR(255) NOT NULL,
kuantitas INT NOT NULL,
id_komponen CHAR(36) NOT NULL,
FOREIGN KEY (id_komponen) REFERENCES Komponen(id_komponen)
);

-- membuat tabel Komponen
CREATE TABLE Komponen (
id_komponen CHAR(36) NOT NULL PRIMARY KEY,
nama_komponen VARCHAR(255) NOT NULL,
deskripsi TEXT NOT NULL
);

-- membuat tabel Pemasok
CREATE TABLE Pemasok (
id_pemasok CHAR(36) NOT NULL PRIMARY KEY,
nama_pemasok VARCHAR(255) NOT NULL,
alamat_pemasok TEXT NOT NULL,
telepon VARCHAR(255) NOT NULL
);

-- membuat tabel Komponen_Pemasok
CREATE TABLE Komponen_Pemasok (
id_komponen_pemasok CHAR(36) NOT NULL PRIMARY KEY,
id_komponen CHAR(36) NOT NULL,
id_pemasok CHAR(36) NOT NULL,
FOREIGN KEY (id_komponen) REFERENCES Komponen(id_komponen),
FOREIGN KEY (id_pemasok) REFERENCES Pemasok(id_pemasok)
);

-- Menambahkan data baru pada tabel Produk:
INSERT INTO Produk (id_product, nama_produk, kuantitas, id_komponen) VALUES ('123e4567-e89b-12d3-a456-426655440000', 'Produk Baru', 10, '223e4567-e89b-12d3-a456-426655440001');

-- Menambahkan data baru pada tabel Komponen:
INSERT INTO Komponen (id_komponen, nama_komponen, deskripsi) VALUES ('223e4567-e89b-12d3-a456-426655440001', 'Komponen Baru', 'Deskripsi komponen baru.');

-- Menambahkan data baru pada tabel Pemasok:
INSERT INTO Pemasok (id_pemasok, nama_pemasok, alamat_pemasok, telepon) VALUES ('323e4567-e89b-12d3-a456-426655440002', 'Pemasok Baru', 'Alamat Pemasok Baru', '081234567890');

-- Menambahkan data baru pada tabel Komponen_Pemasok:
INSERT INTO Komponen_Pemasok (id_komponen_pemasok, id_komponen, id_pemasok) VALUES ('423e4567-e89b-12d3-a456-426655440003', '223e4567-e89b-12d3-a456-426655440001', '323e4567-e89b-12d3-a456-426655440002');

-- Membaca semua data pada tabel Produk:
SELECT * FROM Produk;

-- Membaca data pada tabel Produk dengan kondisi tertentu:
SELECT * FROM Produk WHERE nama_produk = 'Produk Baru';

-- Membaca semua data pada tabel Komponen:
SELECT * FROM Komponen;

-- Membaca data pada tabel Komponen dengan kondisi tertentu:
SELECT * FROM Komponen WHERE nama_komponen = 'Komponen Baru';

-- Membaca semua data pada tabel Pemasok:
SELECT * FROM Pemasok;

-- Membaca data pada tabel Pemasok dengan kondisi tertentu:
SELECT * FROM Pemasok WHERE nama_pemasok = 'Pemasok Baru';

-- Membaca semua data pada tabel Komponen_Pemasok:
SELECT * FROM Komponen_Pemasok;

-- Membaca data pada tabel Komponen_Pemasok dengan kondisi tertentu:
SELECT * FROM Komponen_Pemasok WHERE id_pemasok = '323e4567-e89b-12d3-a456-426655440002';

-- Memperbarui data pada tabel Produk:
UPDATE Produk SET kuantitas = 20 WHERE nama_produk = 'Produk Baru';

-- Memperbarui data pada tabel Komponen:
UPDATE Komponen SET deskripsi = 'Deskripsi komponen yang telah diperbarui.' WHERE nama_komponen = 'Komponen Baru';

-- Memperbarui data pada tabel Pemasok:
UPDATE Pemasok SET alamat_pemasok = 'Alamat Pemasok yang telah diperbarui' WHERE nama_pemasok = 'Pemasok Baru';

--Memperbarui data pada tabel Komponen_Pemasok:
UPDATE Komponen_Pemasok SET id_pemasok = '223e4567-e89b-12d3-a456-426655440001' WHERE id_komponen = '223e4567-e89b-12d3-a456-426655440001';

-- Menghapus data pada tabel Produk:
DELETE FROM Produk WHERE nama_produk = 'Produk Baru';

-- Menghapus data pada tabel Komponen:
DELETE FROM Komponen WHERE nama_komponen = 'Komponen Baru';

-- Menghapus data pada tabel Pemasok:
DELETE FROM Pemasok WHERE nama_pemasok = 'Pemasok Baru';

-- Menghapus data pada tabel Komponen_Pemasok:
DELETE FROM Komponen_Pemasok WHERE id_komponen = '223e4567-e89b-12d3-a456-426655440001';

