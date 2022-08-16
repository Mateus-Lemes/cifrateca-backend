import { Request, Response } from "express";
import { createChordsService, getAllChordsByUserIdService } from "../Services/chordsService.js";

export async function getAllChordsByUserIdController(req: Request, res: Response) {

    const chords = await getAllChordsByUserIdService(+res.locals.user.id);

    res.status(200).send(chords)
}

export async function createChordsController(req: Request, res: Response) {
    const { body } = req

    await createChordsService(body, +res.locals.user.id)

    res.sendStatus(201)
}