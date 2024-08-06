import {StreamClient} from "@stream-io/node-sdk"
import dotenv from "dotenv"

dotenv.config({
  path: './env'
})

export const client = new StreamClient(`${process.env.API_KEY}`,`${process.env.SECRET}`)
