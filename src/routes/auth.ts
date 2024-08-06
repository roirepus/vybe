import { Router } from "express";
import { Request, Response } from "express";
import { client } from "../stream-client";
import { User } from "@stream-io/video-react-sdk";

const router = Router();

router.post("/createUser", async (req: Request, res: Response) => {
  const { username, name, image } = req.body;

  if (!username || !name || !image) {
    return res.status(400).json({ message: "Username and name are required" });
  }

  const newUser: User = {
    id: username,
    name,
    image,
  };

  // Creating  user
  // const user = await client.upsertUsers({
  //   users: {
  //     [newUser.id]: newUser,
  //   },
  // });

  const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
  const token = client.createToken(username, expiry);

  return res.status(200).json({ token, username, name });
});

export default router;
