import { Chord, createChord, findAllChordsByUserId, findChordByUserIdAndSongName } from "../Repositories/chordsRepositories.js";


export async function getAllChordsByUserIdService(userId: number) {

    const chords = await findAllChordsByUserId(userId);

    return chords
}

export async function createChordsService(chord: Chord, userId: number) {
    const {songName, songStyle, chordsUrl, favorite} = chord
    const chordExist:any = await findChordByUserIdAndSongName(chord.songName, userId)

    if(chordExist) {
        throw {
            type: "conflict",
            message: "Já existe uma cifra com este nome"
        }
    }

    const newChord = {
        songName,
        songStyle,
        chordsUrl,
        favorite,
        userId   
    }
    
    await createChord(newChord)
}