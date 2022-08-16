import joi from "joi";

export const chordSchema = joi.object({
    songName: joi.string().required(),
    songStyle: joi.string().required(),
    chordsUrl: joi.string().required(),
    favorite: joi.boolean().required()
})