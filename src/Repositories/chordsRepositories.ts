import { Chords } from "@prisma/client";
import prisma from "../config/db.js";

export type Chord = Partial<Chords>
export type NewChord = Omit<Chords, "id">

export async function findAllChordsByUserId(userId: number) {
    const chords = await prisma.chords.findMany({
        where: {
            userId
        }
    });

    return chords
}

export async function findChordByUserIdAndSongName(songName: string, userId: number) {
    const chord = await prisma.chords.findFirst({
        where: {
            songName: {
                equals: songName,
                mode: "insensitive"
            },
            userId
        }
    })

    return chord
}

export async function createChord(chord: NewChord) {
    await prisma.chords.create({
        data: chord
    })
}