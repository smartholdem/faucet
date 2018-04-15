CREATE SCHEMA IF NOT EXISTS `faucet` DEFAULT CHARACTER SET utf8 ;
USE `faucet` ;

CREATE TABLE IF NOT EXISTS `faucet`.`Unpaid_Balances` (
  `address` VARCHAR(34) NOT NULL,
  `pending` DECIMAL(65, 8) NOT NULL,
  PRIMARY KEY (`address`));

CREATE TABLE IF NOT EXISTS `faucet`.`Roll_Times` (
  `IP` VARCHAR(22) NOT NULL,
  `lastRoll` DATETIME,
  PRIMARY KEY (`IP`));

CREATE TABLE IF NOT EXISTS `faucet`.`Logs` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `IP` VARCHAR(22) NOT NULL,
  `address` VARCHAR(34) NOT NULL,
  `amount` DECIMAL(65, 8) NOT NULL,
  `rollTime` DATETIME,
  PRIMARY KEY (`id`));
