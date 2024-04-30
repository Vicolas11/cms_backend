/*
  Warnings:

  - Added the required column `ipAddress` to the `AuditTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgent` to the `AuditTrail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `audittrail` DROP FOREIGN KEY `AuditTrail_actorId_fkey`;

-- AlterTable
ALTER TABLE `audittrail` ADD COLUMN `ipAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `userAgent` VARCHAR(191) NOT NULL,
    MODIFY `actorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `AuditTrail` ADD CONSTRAINT `AuditTrail_actorId_fkey` FOREIGN KEY (`actorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
