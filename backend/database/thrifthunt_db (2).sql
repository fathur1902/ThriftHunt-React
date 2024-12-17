-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Des 2024 pada 14.43
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thrifthunt_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `selected` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usersId` int(11) DEFAULT NULL,
  `status` enum('pending','checked_out') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `cart`
--

INSERT INTO `cart` (`id`, `productId`, `quantity`, `selected`, `createdAt`, `updatedAt`, `usersId`, `status`) VALUES
(27, 48, 1, 1, '2024-12-16 11:41:12', '2024-12-16 11:41:12', 58, 'pending'),
(28, 3, 1, 1, '2024-12-17 06:23:52', '2024-12-17 06:23:52', 58, 'pending'),
(29, 9, 1, 1, '2024-12-17 06:25:02', '2024-12-17 06:25:02', 55, 'pending'),
(30, 54, 1, 1, '2024-12-17 08:22:32', '2024-12-17 08:22:32', 58, 'pending');

-- --------------------------------------------------------

--
-- Struktur dari tabel `checkout`
--

CREATE TABLE `checkout` (
  `id` int(11) NOT NULL,
  `usersId` int(11) NOT NULL,
  `total` float NOT NULL,
  `paymentMethod` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT 'Pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `checkout`
--

INSERT INTO `checkout` (`id`, `usersId`, `total`, `paymentMethod`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 58, 140000, 'bank', 'Pending', '2024-12-15 03:31:28', '2024-12-15 03:31:28'),
(2, 58, 40000, 'bank', 'Pending', '2024-12-15 03:39:17', '2024-12-15 03:39:17'),
(3, 58, 110000, 'cod', 'Pending', '2024-12-15 04:08:07', '2024-12-15 04:08:07'),
(4, 58, 40000, 'bank', 'Pending', '2024-12-15 04:20:42', '2024-12-15 04:20:42'),
(5, 58, 40000, 'bank', 'Pending', '2024-12-15 06:16:55', '2024-12-15 06:16:55'),
(6, 58, 40000, 'bank', 'Pending', '2024-12-15 06:21:39', '2024-12-15 06:21:39'),
(7, 58, 105000, 'bank', 'Pending', '2024-12-15 08:56:27', '2024-12-15 08:56:27'),
(8, 58, 40000, 'bank', 'Pending', '2024-12-15 09:01:22', '2024-12-15 09:01:22'),
(9, 58, 140000, 'bank', 'Pending', '2024-12-15 09:09:46', '2024-12-15 09:09:46'),
(10, 58, 340000, 'bank', 'Pending', '2024-12-15 09:13:27', '2024-12-15 09:13:27'),
(11, 58, 110000, 'bank', 'Pending', '2024-12-15 09:15:20', '2024-12-15 09:15:20'),
(12, 58, 110000, 'bank', 'Pending', '2024-12-15 16:09:27', '2024-12-15 16:09:27'),
(13, 58, 110000, 'bank', 'Pending', '2024-12-15 16:10:27', '2024-12-15 16:10:27'),
(14, 58, 100000, 'bank', 'Pending', '2024-12-16 11:41:33', '2024-12-16 11:41:33'),
(15, 58, 100000, 'bank', 'Pending', '2024-12-16 17:36:30', '2024-12-16 17:36:30'),
(16, 58, 150000, 'bank', 'Pending', '2024-12-17 06:24:08', '2024-12-17 06:24:08'),
(17, 55, 40000, 'bank', 'Pending', '2024-12-17 06:25:15', '2024-12-17 06:25:15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sizes` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `image`, `createdAt`, `updatedAt`, `sizes`, `category`) VALUES
(2, 'Celana Jeans', 'Celana jeans santai dengan potongan loose fit yang nyaman dan modis. Terbuat dari bahan denim berkualitas tinggi, memberikan tampilan klasik namun tetap kekinian. Sempurna untuk aktivitas sehari-hari atau acara santai. Kondisi barang sudah dibersihkan, terdapat noda kecil pada bagian atas saku. Terbuat dari bahan  Stretch denim berwarna denim.ww', '50000.00', '1732715125942.jpg', '2024-11-27 06:10:02', '2024-12-11 03:58:11', 'L', 'BawahanWanita'),
(3, 'Celana Chino', 'Celana panjang  yang terbuat dari kain katun twill yang ringan dan nyaman. Cocok digunakan untuk berbagai musim dan dapat dipadukan dengan berbagai jenis pakaian. Kondisi barang tidak ada noda. tersedia warna Cream,bahan terbuat dari 100% katun twill sehingga nyaman digunakan.', '50000.00', '1732715277424.jpg', '2024-11-27 13:38:42', '2024-12-12 09:19:12', 'M', 'BawahanPria'),
(5, 'Rok A-Line', '\"Rok A-line klasik dengan warna cream lembut yang memberikan kesan anggun dan feminin.Potongannya yang simpel membuatnya mudah dipadukan dengan berbagai atasan. Sempurna untuk acara formal maupun santai. Kondisi barang bekas, sudah di cuci, tidak ada noda. Terbuat dari 100% Sifon, tersedia warna cream.\"\n', '30000.00', '1732715959629.jpg', '2024-11-27 13:59:19', '2024-11-27 13:59:19', 'S', 'BawahanWanita'),
(6, 'Celana Pendek ', '\"Celana pendek pria casual, warna abu-abu muda. Terbuat dari bahan katun yang lembut dan nyaman dipakai. Dilengkapi dua saku samping yang fungsional. Kondisi bekas sangat baik, sudah dicuci dan tidak ada noda atau kerusakan. tersedia warna abu-abu.\",\n\n', '50000.00', '1732718835152.jpg', '2024-11-27 14:47:15', '2024-11-27 14:47:15', 'L', 'BawahanPria'),
(7, 'Celana Corduroy', '\"Celana corduroy panjang warna merah bata, bahan katun tebal yang khas. Model klasik dengan potongan straight yang timeless. Warna merah batanya memberikan kesan hangat dan stylish. Kondisi masih sangat bagus, sudah dicuci bersih dan siap pakai. Sempurna untuk tampilan retro atau casual yang kekinian.\",\n,\n\n', '50000.00', '1732718970564.jpg', '2024-11-27 14:49:30', '2024-11-27 14:49:30', 'S', 'BawahanWanita'),
(8, 'Topi', 'Topi Trucker bekas dengan desain art corat-coret warna cream yang unik. Bahan kanvasnya tebal dan nyaman dipakai. Cocok untuk gaya kasual yang ingin tampil beda. Kondisi masih sangat bagus, sudah dicuci, tidak ada noda. \",\r\n,\r\n\r\n', '50000.00', '1732719086756.jpg', '2024-11-27 14:51:26', '2024-12-11 01:27:40', 'L', 'Aksesoris'),
(9, 'Sepatu Thruffle Boots', 'Sepatu boots wanita Thruffle bekas, model ankle boots dengan warna hitam elegan. Terbuat dari kulit asli yang berkualitas tinggi, memberikan kenyamanan dan tampilan yang mewah. Sol sepatu masih bagus, tidak ada kerusakan. Sempurna untuk melengkapi berbagai outfit.', '50000.00', '1732719174946.jpg', '2024-11-27 14:52:54', '2024-11-27 14:52:54', 'L', 'Aksesoris'),
(10, 'Ransel Denim', 'Ransel denim wanita bekas dengan desain yang stylish. Terbuat dari bahan denim berkualitas, warna denim klasik yang tidak mudah lekang oleh waktu. Tali punggungnya yang berwarna hitam dilengkapi dengan aksen bordir yang menambah kesan vintage. Kondisi masih sangat baik, sudah di cuci, tidak ada kerusakan dan noda.', '50000.00', '1732719336393.jpg', '2024-11-27 14:55:36', '2024-11-27 14:55:36', 'L', 'Aksesoris'),
(11, 'Celana drawstring', 'Celana drawstring wanita bekas dengan warna cream yang kalem. Terbuat dari bahan katun yang lembut dan menyerap keringat. Desainnya yang simpel dengan tali serut (drawstring) di bagian pinggang membuat celana ini nyaman digunakan. Kondisi masih sangat baik, tidak ada noda atau kerusakan.', '50000.00', '1733697589464.jpg', '2024-11-27 14:57:15', '2024-12-08 22:39:49', 'L', 'BawahanWanita'),
(16, 'Rok Mini', '      \"Rok mini kotak-kotak warna hitam merah, bahan tebal seperti wol atau tweed. Model klasik, cocok untuk gaya vintage. Kondisi masih bagus, sudah di cuci , bisa langsung pakai, tidak ada noda.', '200000.00', '1733848473109.jpg', '2024-12-10 16:34:33', '2024-12-10 16:34:33', 'M', 'BawahanWanita'),
(17, 'Cardigan', 'Cardigan berbahan lembut dengan warna putih yang netral. Desainnya yang simpel dan klasik membuatnya mudah dipadukan dengan berbagai outfit. Cocok untuk memberikan sentuhan feminin pada penampilanmu.Terbuat dari bahan woll. kondisi barang minus pada lengan terdapat noda, sudah di cuci.', '100000.00', '1733848639767.jpg', '2024-12-10 16:37:19', '2024-12-10 16:37:19', 'XXL', 'AtasanWanita'),
(18, 'Crop Top', 'Crop top dengan potongan yang simpel dan modern. Bahannya yang nyaman membuatmu merasa bebas bergerak. Cocok dipadukan dengan rok mini, celana high-waist, atau bahkan jaket jeans.Terbuat dari bahan Cotton blend yang nyaman dan tahan lama. kondisi barang sudah dicuci, siap pakai, tidak ada noda.', '150000.00', '1733848722653.jpg', '2024-12-10 16:38:42', '2024-12-10 16:38:42', 'M', 'AtasanWanita'),
(19, 'Celana Formal', 'Celana panjang dengan potongan yang formal dan elegan. Warna hitamnya yang klasik membuatnya cocok untuk berbagai acara resmi. Bahannya yang berkualitas memberikan kenyamanan saat digunakan. terbuat dari bahan Viscose.kondisi barang sudah dicuci, siap pakai, tidak ada noda.', '200000.00', '1733848866603.jpg', '2024-12-10 16:41:06', '2024-12-10 16:41:06', 'L', 'BawahanWanita'),
(20, 'Blouse', 'Blouse cream dengan desain yang feminin dan elegan. Detail kancing pada bagian depan menambah kesan klasik pada blouse ini. Warna kremnya yang lembut memberikan kesan yang lembut dan anggun.Cocok untuk digunakan saat bekerja atau menghadiri acara semi-formal. terbuat dari bahan linen .kondisi barang sudah dicuci, siap pakai, tidak ada noda.', '115000.00', '1733848931002.jpg', '2024-12-10 16:42:11', '2024-12-10 16:42:11', 'XL', 'AtasanWanita'),
(21, 'Hoodie', 'Hoodie dengan warna merah marun yang klasik. Cocok untuk tampilan kasual sehari-hari atau untuk berolahraga. Hoodie ini memiliki kantong depan yang praktis untuk menyimpan barang-barang kecil.Terbuat dari bahan katun fleece. Kondisi produk bekas, sudah dicuci bersih dan siap pakaii. tersedia warna maroon', '120000.00', '1733848984229.jpg', '2024-12-10 16:43:04', '2024-12-10 16:43:04', 'XL', 'AtasanPria'),
(22, 'Kemeja Flanel', 'Kemeja flanel dengan motif kotak-kotak yang timeless. Cocok untuk tampilan santai atau semi-formal. Kemeja ini memiliki potongan regular fit yang nyaman. Kombinasi kotak-kotak warna biru-putih. siap pakai ,tidak ada noda.', '120000.00', '1733849051169.jpg', '2024-12-10 16:44:11', '2024-12-10 17:29:20', 'XXL', 'FlashSale'),
(23, 'Kemeja', 'Kemeja polos berwarna abu-abu muda ini memberikan kesan minimalis yang elegan. Bahannya yang ringan dan lembut membuatnya nyaman digunakan sehari-hari. Cocok dipadukan dengan berbagai gaya,baik formal maupun kasual. Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '70000.00', '1733849118383.jpg', '2024-12-10 16:45:18', '2024-12-10 16:45:18', 'L', 'AtasanPria'),
(24, 'Jaket Bomber', 'Jaket bomber dengan warna krem yang lembut dan tampilan yang sporty. Bahannya yang ringan dan tahan lama membuatnya ideal untuk berbagai aktivitas. Desainnya yang timeless akan selalu membuatmu tampil stylish. Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '135000.00', '1733849168945.jpg', '2024-12-10 16:46:08', '2024-12-10 16:46:08', 'XL', 'AtasanPria'),
(25, 'Jaket Varsity', 'Jaket varsity dengan kombinasi warna hitam dan krem yang memberikan kesan retro yang stylish. Detail bordir pada bagian depan menambah kesan unik pada jaket ini. Bahannya yang tebal dan hangat akan membuatmu tetap nyaman dalam cuaca dingin. Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '120000.00', '1733849221476.jpg', '2024-12-10 16:47:01', '2024-12-10 16:47:01', 'XXL', 'AtasanPria'),
(26, 'Sweater', 'Sweater garis-garis hijau-putih ini terbuat dari bahan acrylic yang lembut dan tidak mudah kusut. Desainnya yang simpel membuatnya mudah dipadukan dengan berbagai gaya. Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '50000.00', '1733849289540.jpg', '2024-12-10 16:48:09', '2024-12-10 16:48:09', 'XL', 'AtasanPria'),
(27, 'Celana Jeans 4 saku', 'Celana jeans denim 4 saku dengan warna biru tua yang timeless ini memberikan kesan santai namun tetap stylish. Bahan denimnya yang tebal dan kuat membuat celana ini awet digunakan. Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '75000.00', '1733849345129.jpg', '2024-12-10 16:49:05', '2024-12-10 16:49:05', 'XL', 'BawahanPria'),
(28, 'Celana Formal', 'Celana formal hitam untuk pria ini terbuat dari bahan polyester yang halus dan licin. Potongannya yang slim fit membuat penampilanmu semakin elegan.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '75000.00', '1733849391232.jpg', '2024-12-10 16:49:51', '2024-12-10 16:49:51', 'L', 'BawahanPria'),
(29, 'Celana Jogger', 'Celana jogger berwarna hitam ini sangat nyaman digunakan sehari-hari. Bahannya yang lembut dan elastis memberikan kebebasan bergerak. bahan misty.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '50000.00', '1733849448049.jpg', '2024-12-10 16:50:48', '2024-12-10 16:50:48', 'XL', 'BawahanPria'),
(30, 'Celana Cargo', 'Celana kargo berwarna hitam putihini memiliki banyak kantong yang praktis untuk menyimpan barang-barang kecil. Bahannya yang kuat dan tahan lama membuat celana ini cocok untuk aktivitas outdoor.Kondisi produk bekas, sudah dicuci bersih dan siap pakai', '65000.00', '1733849601407.jpg', '2024-12-10 16:53:21', '2024-12-10 16:53:21', 'XL', 'BawahanPria'),
(31, 'Celana Bot Cut', 'Celana bot cut berwarna hitam ini memberikan kesan retro yang unik. Potongannya yang mengecil di bagian bawah membuat kaki terlihat lebih jenjang. Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '50000.00', '1733849650183.jpg', '2024-12-10 16:54:10', '2024-12-10 16:54:10', 'XL', 'BawahanPria'),
(32, 'Dress Hitam', 'Dress hitam dengan asken warna cream pada lengan, klasik dengan potongan A-line ini terbuat dari bahan polyester yang lembut dan tidak mudah kusut. Cocok untuk acara formal maupun semi-formal. Kondisi produk bekas,sudah dicuci bersih dan siap pakai.', '160000.00', '1733850122623.jpg', '2024-12-10 17:02:02', '2024-12-10 17:02:02', 'XL', 'AtasanWanita'),
(33, 'Dress', '      \"Dress tiered berwarna cokelat muda ini memberikan kesan manis dan feminin. Bahannya yang ringan dan nyaman membuatmu bebas bergerak. Kondisi produk bekas, sudah dicuci bersih dan siap pakai', '170000.00', '1733850232955.jpg', '2024-12-10 17:03:52', '2024-12-10 17:03:52', 'L', 'AtasanWanita'),
(34, 'Kaos', 'Kaos berwarna cream dengan potongan oversized ini sangat nyaman digunakan sehari-hari. Bahannya yang lembut dan menyerap keringat membuatmu merasa nyaman.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai', '50000.00', '1733850298459.jpg', '2024-12-10 17:04:58', '2024-12-10 17:04:58', 'M', 'AtasanWanita'),
(35, 'Kemeja Flanel', 'Kemeja flanel kotak-kotak ini memberikan kesan santai dan kasual. Bahannya yang hangat membuatmu tetap nyaman saat cuaca dingin.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '75000.00', '1733850346345.jpg', '2024-12-10 17:05:46', '2024-12-10 17:05:46', 'XL', 'AtasanWanita'),
(36, 'Cardigan', 'Cardigan berwarna putih dengan detail rajutan ini memberikan kesan manis dan feminin. Bahannya yang lembut dan hangat membuatmu tetap nyaman.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '120000.00', '1733850388624.jpg', '2024-12-10 17:06:28', '2024-12-10 17:06:28', 'XXL', 'AtasanWanita'),
(37, 'Blouse', 'Blouse berwarna biru muda dengan detail pita ini memberikan kesan romantis. Bahannya yang lembut dan jatuh membuat penampilanmu semakin anggun.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '60000.00', '1733850436684.jpg', '2024-12-10 17:07:16', '2024-12-10 17:07:16', 'XL', 'AtasanWanita'),
(38, 'Sweater', 'Sweater berwarna putih dengan motif bunga ini memberikan kesan feminin. Bahannya yang hangat dan nyaman membuatmu tetap nyaman saat cuaca dingin.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai. ', '95000.00', '1733850477819.jpg', '2024-12-10 17:07:57', '2024-12-10 17:07:57', 'XL', 'AtasanWanita'),
(39, 'Cardigan', 'Cardigan berwarna cream dengan motif kotak-kotak ini memberikan kesan klasik. Bahannya yang lembut dan hangat membuatmu tetap nyaman.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '80000.00', '1733850536031.jpg', '2024-12-10 17:08:56', '2024-12-10 17:08:56', 'XXL', 'AtasanWanita'),
(40, 'Kemeja Wanita', 'Kemeja putih dengan potongan crop top ini memberikan kesan modern dan stylish. Bahannya yang ringan dan nyaman membuatmu bebas bergerak.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '50000.00', '1733850583662.jpg', '2024-12-10 17:09:43', '2024-12-10 17:09:43', 'M', 'AtasanWanita'),
(41, 'Cropped T-Shirt', 'Kaos cropped berwarna putih ini sangat cocok dipadukan dengan berbagai jenis bawahan. Bahannya yang lembut dan menyerap keringat membuatmu merasa nyaman. Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '50000.00', '1733850636648.jpg', '2024-12-10 17:10:36', '2024-12-10 17:10:36', 'L', 'AtasanWanita'),
(42, 'Hoodie', 'Hoodie berwarna cream  dengan detail pada sakunya ini memberikan kesan unik dan menarik. Bahannya yang hangat dan nyaman membuatmu tetap nyaman saat cuaca dingin.  Kondisi produk bekas, sudah dicuci bersih dan siap pakai.', '60000.00', '1733850676396.jpg', '2024-12-10 17:11:16', '2024-12-10 17:11:16', 'XXL', 'AtasanWanita'),
(43, 'Celana Kulot', 'Celana kulot berbahan linen berkualitas tinggi, memberikan kenyamanan maksimal. Warna krem yang netral membuatnya mudah dipadukan dengan berbagai atasan. Sudah dicuci dan siap pakai, tanpa noda atau kerusakan.', '70000.00', '1733850733997.jpg', '2024-12-10 17:12:13', '2024-12-10 17:12:13', 'XL', 'BawahanWanita'),
(44, 'Rok Lipit', 'Rok lipit dengan perpaduan bahan woll yang memberikan kesan mewah dan hangat. Lipatan yang rapi memberikan detail yang menarik. Warna cokelat mudanya yang timeless membuatnya mudah dipadukan dengan berbagai gaya. Produk ini telah dicuci dan siap untuk Anda kenakan.', '55000.00', '1733850810358.jpg', '2024-12-10 17:13:30', '2024-12-10 17:13:30', 'XL', 'BawahanWanita'),
(45, 'Celana Calca', 'Dapatkan tampilan casual yang keren dengan celana calca berbahan denim. Potongan lebar dan kantong samping yang fungsional membuatnya semakin stylish. Jahitan kontras berwarna putih menambah detail yang menarik. Produk ini telah dicuci dan siap untuk melengkapi gaya sehari-hari kamu.', '150000.00', '1733850908122.jpg', '2024-12-10 17:15:08', '2024-12-10 17:15:08', 'XXL', 'BawahanWanita'),
(46, 'Jeans Denim Boyfriend', 'Dapatkan tampilan santai namun tetap stylish dengan jeans boyfriend. Potongan lebar dan pinggang tinggi memberikan kenyamanan maksimal. Warna biru mudanya yang timeless mudah dipadukan dengan berbagai atasan. Produk ini telah dicuci dan siap untuk melengkapi gaya sehari-hari kamu.', '100000.00', '1733850960125.jpg', '2024-12-10 17:16:00', '2024-12-10 17:16:00', 'XL', 'BawahanWanita'),
(47, 'Sepatu Truffle Boots', 'Sepatu boots kulit dengan desain klasik. Terbuat dari bahan kulit asli yang berkualitas tinggi, memberikan tampilan yang elegan dan tahan lama. Warna hitamnya yang netral membuatnya mudah dipadukan dengan berbagai outfit.', '122000.00', '1733851027391.jpg', '2024-12-10 17:17:07', '2024-12-10 17:17:07', 'S', 'Aksesoris'),
(48, 'Dompet Coach Hitam', 'Dompet berbahan kulit dengan desain minimalis. Dilengkapi dengan beberapa slot kartu dan saku uang kertas. Warna hitamnya yang elegan membuatnya cocok untuk pria maupun wanita.', '110000.00', '1733851081327.jpg', '2024-12-10 17:18:01', '2024-12-10 17:18:01', 'S', 'Aksesoris'),
(49, 'Sepatu GSI Rossy', 'Sepatu sneakers dengan desain modern dan sporty. Terbuat dari bahan kombinasi kulit sintetis dan mesh yang nyaman dan ringan. Solnya yang empuk memberikan kenyamanan saat digunakan', '123000.00', '1733851138618.jpg', '2024-12-10 17:18:58', '2024-12-10 17:18:58', 'L', 'Aksesoris'),
(50, 'Jam Casio Analog', 'Jam tangan analog dengan desain klasik. Terbuat dari bahan stainless steel yang tahan lama. Tali jam terbuat dari kulit asli yang nyaman di kulit.', '250000.00', '1733851185834.jpg', '2024-12-10 17:19:45', '2024-12-10 17:19:45', 'L', 'Aksesoris'),
(51, 'Sepatu Bred AM', 'Sepatu sneakers dengan desain yang eye-catching. Terbuat dari bahan berkualitas tinggi dengan kombinasi warna yang menarik. Solnya yang tebal memberikan kenyamanan saat digunakan', '250000.00', '1733851228965.jpg', '2024-12-10 17:20:28', '2024-12-10 17:20:28', 'L', 'Aksesoris'),
(52, 'Kacamata', 'Kacamata hitam dengan desain yang stylish. Lensa yang berkualitas memberikan perlindungan maksimal bagi mata dari sinar UV. Bingkai kacamata terbuat dari bahan yang ringan dan nyaman.', '60000.00', '1733851269704.jpg', '2024-12-10 17:21:09', '2024-12-10 17:21:09', 'S', 'Aksesoris'),
(53, 'Jam Tangan Wellington', 'Jam tangan dengan desain minimalis dan elegan. Terbuat dari bahan stainless steel yang tahan lama. Tali jam terbuat dari kulit asli yang nyaman di kulit.', '300000.00', '1733851328770.jpg', '2024-12-10 17:22:08', '2024-12-10 17:22:08', 'L', 'Aksesoris'),
(54, 'Jeans Levi\'s 501 Vintage', 'Jeans klasik Levi\'s 501 dengan potongan lurus dan bahan denim tebal. Warna denim biasanya biru tua atau indigo. Jeans ini terkenal dengan kualitas dan ketahanannya', '250000.00', '1733851732057.jpg', '2024-12-10 17:28:52', '2024-12-10 17:28:52', 'XL', 'FlashSale'),
(55, 'Denim Wrangler 80s', 'Jeans denim Wrangler dengan gaya khas tahun 80-an. Potongannya cenderung lebih longgar dibandingkan jeans modern. Bahan denimnya biasanya lebih tebal dan kasar.', '200000.00', '1733851809587.jpg', '2024-12-10 17:30:09', '2024-12-10 17:30:09', 'S', 'FlashSale'),
(56, 'Tas Coach Signature', 'Tas selempang atau shoulder bag dari Coach dengan logo khas. Terbuat dari bahan kulit atau kanvas berkualitas tinggi. Desainnya klasik dan elegan.', '350000.00', '1733851849322.jpg', '2024-12-10 17:30:49', '2024-12-10 17:30:49', 'L', 'FlashSale'),
(57, 'Vans Checkerboard Classic', 'Sepatu sneakers klasik dari Vans dengan motif checkerboard. Terbuat dari kanvas yang ringan dan nyaman. Solnya yang fleksibel membuat sepatu ini cocok untuk aktivitas sehari-hari.', '300000.00', '1733851896340.jpg', '2024-12-10 17:31:36', '2024-12-10 17:31:36', 'L', 'FlashSale'),
(58, 'Kaos Band Metallica 90', 'Kaos band dengan desain grafis Metallica yang ikonik. Terbuat dari bahan katun yang lembut dan menyerap keringat. Cocok untuk penggemar musik rock.', '95000.00', '1733851935637.jpg', '2024-12-10 17:32:15', '2024-12-10 17:32:15', 'M', 'FlashSale'),
(59, 'Blazer Gucci Vintage', 'Blazer bergaya klasik dengan potongan yang pas. Terbuat dari bahan wool atau tweed yang memberikan kesan formal. Dapat di padukan dengan warna-warna netral seperti hitam, abu-abu, atau navy blue sering ditemui. kondisi barang tidak ada minus.', '400000.00', '1733851993250.jpg', '2024-12-10 17:33:13', '2024-12-10 17:33:13', 'XXL', 'FlashSale'),
(60, 'Jam Casio Vintage', 'Jam tangan digital klasik dari Casio. Desainnya sederhana namun fungsional. Terbuat dari bahan resin yang ringan dan tahan air.', '450000.00', '1733852054121.jpg', '2024-12-10 17:34:14', '2024-12-10 17:34:14', 'M', 'FlashSale'),
(61, 'Nike Air Max Limited', 'Sepatu sneakers Nike Air Max dengan desain yang limited edition. Terkenal dengan teknologi bantalan udara (Air Max) yang memberikan kenyamanan saat digunakan.', '400000.00', '1733852141213.jpg', '2024-12-10 17:35:41', '2024-12-10 17:35:41', 'XL', 'FlashSale'),
(62, 'Tas Sylvester Swift Hermes', 'Tas Hermes dengan model Sylvester yang mewah dan elegan. Terbuat dari kulit sapi berkualitas tinggi. Desainnya yang simpel namun berkelas membuatnya menjadi incaran para kolektor.', '450000.00', '1733852244425.jpg', '2024-12-10 17:37:24', '2024-12-10 17:37:24', 'S', 'FlashSale'),
(63, 'Polo Lacoste Original', 'Kaos polo klasik dari Lacoste dengan logo buaya yang ikonik. Terbuat dari bahan pique cotton yang nyaman dan menyerap keringat.', '350000.00', '1733852286674.jpg', '2024-12-10 17:38:06', '2024-12-10 17:38:06', 'L', 'FlashSale'),
(64, 'Jaket Kulit Harley Davidson', 'Jaket kulit dengan desain khas Harley Davidson. Terbuat dari kulit asli yang tebal dan tahan lama. Cocok untuk pengendara motor atau penggemar gaya biker.', '450000.00', '1733852328986.jpg', '2024-12-10 17:38:48', '2024-12-10 17:38:48', 'XXL', 'FlashSale'),
(65, 'Rok Kotak', 'Rok kotak dengan perpaduan bahan woll yang memberikan kesan mewah dan hangat. Lipatan yang rapi memberikan detail yang menarik. Warna cokelat mudanya yang timeless membuatnya mudah dipadukan dengan berbagai gaya. Produk ini telah dicuci dan siap untuk Anda kenakan.', '75000.00', '1733868851912.jpg', '2024-12-10 22:14:11', '2024-12-10 22:14:11', 'L', 'BawahanWanita'),
(66, 'Baret Abu', 'Baret abu dengan desain elegan. Terbuat dari bahan kulit sintetis yang berkualitas. Cocok digunakan untuk melengkapi berbagai gaya outfit', '75000.00', '1733868962497.jpg', '2024-12-10 22:16:02', '2024-12-10 22:16:02', 'L', 'Aksesoris'),
(67, 'dea cantik', 'adsa', '1405.00', '1733889474744.webp', '2024-12-11 03:57:54', '2024-12-17 03:01:48', 'S', 'AtasanWanita');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`, `profileImage`, `address`, `city`, `postalCode`, `province`, `country`, `phone`) VALUES
(3, 'Admin ThriftHunt', 'admin@thrifthunt.com', '$2b$10$5Fa.2Yd/7rmuYaxmJi8cYeXEkMJwAvN4FNO8fxFwgJGX8DCCADJGm', 'admin', '2024-12-01 07:44:54', '2024-12-01 07:44:54', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'fathur', 'fathur@gmail.com', '$2b$10$zMR0TbbNvrJpLICB4d87te7Tb96hUXLcamrje0PbCXVCgxfamQ/QG', 'user', '2024-12-01 15:27:40', '2024-12-01 15:27:40', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'lungg', 'tes@gmail.com', '$2b$10$hhypCasvogdqVsZ0ncVZje7f40XgXlhBxcqTOjxtDDXNxrL/SmggS', 'user', '2024-12-02 03:28:43', '2024-12-02 03:28:43', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 'Dapa Gaming', 'tes12@gmail.com', '$2b$10$2ilU/x0WNDNxSOvS8JmYT.8XitbSoDYQZ6VwISpbLEPsEuDmUQT5W', 'user', '2024-12-02 14:37:44', '2024-12-15 17:29:58', '/uploads/Screenshot 2024-12-11 102235.png', 'Jl. Sudirman No. 18', 'Probolinggo', '40120', 'Jawa Timur', 'Indonesia', '+628572976999'),
(56, 'tes lagi', 'tes123@gmail.com', '$2b$10$uRsRwTSnLJCReA7aZdUKFO9r92BSre5FHfOTdCsLyhRyRYTWhj/DK', 'user', '2024-12-03 03:08:35', '2024-12-06 07:35:20', NULL, 'Jl. Sudirman No. 15', 'Bandung', '40123', 'Jawa Barat', 'Indonesia', NULL),
(57, 'lala', 'sumbul@gmail.com', '$2b$10$BnTcAr3dOpfjZGMFIRTzj.t.8w7y7aRe01M16lo4iSRM77TTKN0CC', 'user', '2024-12-03 16:02:31', '2024-12-03 16:58:38', '/uploads/Screenshot 2024-11-28 091135.png', NULL, NULL, NULL, NULL, NULL, NULL),
(58, 'agung', 'agung@gmail.com', '$2b$10$Yi6wl2z4IyQN6xrG6r7ZFuBcKnXHBAbnrjKzBpCAEE7ICReEAA2Z6', 'user', '2024-12-10 13:27:57', '2024-12-15 17:30:40', '/uploads/6. NGATNO.jpeg.jpg', 'Jalan Kocak 1221', 'KoCAK', '161521', 'Sumatera Barat', 'Jepang', '+628572976933');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `usersId` (`usersId`);

--
-- Indeks untuk tabel `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usersId` (`usersId`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `checkout`
--
ALTER TABLE `checkout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `Cart_usersId_foreign_idx` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_10` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_11` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_12` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_13` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_14` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_15` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_16` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_17` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_18` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_5` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_6` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_7` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_8` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_9` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `checkout_ibfk_1` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `checkout_ibfk_2` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
