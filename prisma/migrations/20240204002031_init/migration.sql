-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_income" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "job" TEXT NOT NULL DEFAULT 'Job',
    "income" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_income" ("createdAt", "id", "income") SELECT "createdAt", "id", "income" FROM "income";
DROP TABLE "income";
ALTER TABLE "new_income" RENAME TO "income";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
