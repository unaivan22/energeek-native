-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 06, 2025 at 02:02 PM
-- Server version: 10.11.11-MariaDB-cll-lve
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eneg1777_ebrutalism`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `client` varchar(255) DEFAULT NULL,
  `screenshots` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `thumbnail`, `description`, `year`, `client`, `screenshots`) VALUES
(50, 'KSI SSO', '/api/uploads/project-67c92c6120bda.webp', '<p><strong style=\"color: rgb(104, 104, 118);\">KSI â€“ SSO&nbsp;</strong><span style=\"color: rgb(104, 104, 118);\">adalah fitur autentikasi yang memungkinkan pengguna untuk melakukan login satu kali menggunakan layanan Google. Dengan sekali login, pengguna dapat mengakses seluruh ekosistem aplikasi yang terhubung tanpa harus mengulangi proses login untuk setiap aplikasi, sehingga lebih praktis dan efisien.</span></p>', '2025', 'PT Krakatau Steel (Persero)', '[\"uploads/screenshot-67c92c617322e.webp\",\"uploads/screenshot-67c92c61733ce.webp\"]'),
(51, 'PKC - CCE', '/api/uploads/project-67c92d05d35f7.webp', '<p><strong style=\"color: rgb(104, 104, 118);\">PKC â€“ CCE&nbsp;</strong><span style=\"color: rgb(104, 104, 118);\">merupakan aplikasi berbasis web yang digunakan oleh PT Pupuk Kujang Cikampek untuk sarana peningkatan kepuasan pelanggan dalam pelayanan pemuatan produk non subsidi secara digital</span></p>', '2022', 'PT Pupuk Kujang Cikampek', '[\"uploads/screenshot-67c92d0748325.webp\",\"uploads/screenshot-67c92d0748453.webp\",\"uploads/screenshot-67c92d0748520.webp\"]');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `photo`, `role`, `email`) VALUES
(15, 'Aditya Tanjung', '/api/uploadteams/team-member-7115.webp', 'CEO', 'aditya.tanjung@energeek.co.id'),
(16, 'Zulmi Adi Rizky', '/api/uploadteams/team-member-5233.webp', 'VP Operations', 'zulmi.ar@energeek.co.id'),
(17, 'Rohmat Hanif Basuki', '/api/uploadteams/team-member-4417.webp', 'Assistant VP Mobile App Development', 'hanif@energeek.co.id'),
(18, 'Joko Susilo', '/api/uploadteams/team-member-8174.webp', 'Assistant VP Web Development', 'joko.susilo@energeek.co.id'),
(19, 'Nurul Aida Fitriani', '/api/uploadteams/team-member-67c9406a54033.webp', 'Staff Finance & Administration', 'accounting@energeek.co.id');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` enum('superadmin','admin') DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `created_at`, `updated_at`, `role`) VALUES
(6, 'admin', 'adad@adada.com', '$2y$10$YgHSxaNdfm7Q4s/WKacby.PErLMrrc7CZptoyiWazae2d7suUUAka', '2025-03-04 13:48:41', '2025-03-04 13:48:41', 'admin'),
(7, 'una', 'una', '$2y$10$Ce8vrs0Y5yPjT0hY1woAueh74VTT7kmDxM3TNmmcReaf9m0xboGfS', '2025-03-05 15:06:20', '2025-03-05 15:06:20', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
