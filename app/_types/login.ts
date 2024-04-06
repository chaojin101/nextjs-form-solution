import { z } from "zod"
import { PASSWORD_LENGTH_ERR_MSG, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "./common"

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: PASSWORD_LENGTH_ERR_MSG,
  }).max(PASSWORD_MAX_LENGTH, {
    message: PASSWORD_LENGTH_ERR_MSG,
  }),
})

export const LoginReqSchema = LoginFormSchema

export type LoginForm = z.infer<typeof LoginFormSchema>