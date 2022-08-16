import { createUser, findById, findUserByUsername, User } from "../Repositories/userRepositories.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUpService(user: User) {
    const userExist = await findUserByUsername(user.username);

    if(userExist) {
        throw {
            type: "conflict",
            message: "Username já está em uso"
        }
    }

    await createUser({
        username: user.username,
        password: bcrypt.hashSync(user.password, 10),
        perfilUrl: user.perfilUrl
    });
}

export async function findByUserId(id:number) {
    const user = await findById(id);
    if(!user) {
        throw {
            type: "Not Found",
            message: "No user was found"
        }
    }
    return user
}

export async function signInService(body: User) {
    const user = await findUserByUsername(body.username);

    if(!user) {
        throw {
            type: "not found",
            message: "Não existe usuário com este username"
        }
    }

    if(!bcrypt.compareSync(body.password, user.password)) {
        throw {
            type: "unauthorized",
            message: "senha inserida não confere com usuário"
        }
    }

    const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY)
    const data = {
        token,
        user: {
            id: user.id,
            username: user.username,
            perfilUrl: user.perfilUrl
        }

    }

    return data
}