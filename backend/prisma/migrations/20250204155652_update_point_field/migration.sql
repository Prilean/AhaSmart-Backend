-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodCategory" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuestLog" ADD COLUMN     "completionTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "point" DROP NOT NULL,
ALTER COLUMN "point" SET DEFAULT 0;
