-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Июл 04 2022 г., 18:38
-- Версия сервера: 5.7.32
-- Версия PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `nix_test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `dataItem`
--

CREATE TABLE `dataItem` (
  `id` int(11) NOT NULL,
  `numbers` varchar(100) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `ingredient` varchar(100) NOT NULL,
  `done` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `dataItem`
--

INSERT INTO `dataItem` (`id`, `numbers`, `unit`, `ingredient`, `done`) VALUES
(102, 'sdfvsdfv', 'sdfvsvff', 'sdfvsv', NULL),
(104, 'sdcsdc', 'sdcsdcs', 'dcsdcs', 'true'),
(105, 'sfdf', ' sdfsdf', 'sdfsdf', NULL),
(106, 'safdsa', ' fasdfasdf', 'asdfasdf', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `dataItem`
--
ALTER TABLE `dataItem`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `dataItem`
--
ALTER TABLE `dataItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
