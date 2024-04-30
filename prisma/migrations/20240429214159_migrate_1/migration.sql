/*
  Warnings:

  - The values [Student_affairs] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `otp` INTEGER NULL,
    MODIFY `role` ENUM('Admin', 'Student', 'Dean', 'HOD', 'Student_Affairs') NOT NULL DEFAULT 'Student';

-- CreateTable
CREATE TABLE `AuditTrail` (
    `id` VARCHAR(191) NOT NULL,
    `actorId` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `timestramp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AuditTrail` ADD CONSTRAINT `AuditTrail_actorId_fkey` FOREIGN KEY (`actorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
