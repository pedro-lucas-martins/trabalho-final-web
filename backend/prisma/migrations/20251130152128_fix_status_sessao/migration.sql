-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sessoes_estudo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "topicoId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AGENDADA',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "sessoes_estudo_topicoId_fkey" FOREIGN KEY ("topicoId") REFERENCES "topicos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_sessoes_estudo" ("createdAt", "dataFim", "dataInicio", "id", "titulo", "topicoId", "updatedAt") SELECT "createdAt", "dataFim", "dataInicio", "id", "titulo", "topicoId", "updatedAt" FROM "sessoes_estudo";
DROP TABLE "sessoes_estudo";
ALTER TABLE "new_sessoes_estudo" RENAME TO "sessoes_estudo";
CREATE INDEX "sessoes_estudo_topicoId_idx" ON "sessoes_estudo"("topicoId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
