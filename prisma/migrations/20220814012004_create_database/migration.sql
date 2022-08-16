-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "perfilUrl" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chords" (
    "id" SERIAL NOT NULL,
    "songName" TEXT NOT NULL,
    "songStyle" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "chords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "chords" ADD CONSTRAINT "chords_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
