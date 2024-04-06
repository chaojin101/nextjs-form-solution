import { z } from "zod";
import { PASSWORD_LENGTH_ERR_MSG, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "./common"

export const RegisterReqSchema = z.object({
  email: z.string().email(),
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: PASSWORD_LENGTH_ERR_MSG,
  }).max(PASSWORD_MAX_LENGTH, {
    message: PASSWORD_LENGTH_ERR_MSG,
  }),
})

export const RegisterFormSchema = RegisterReqSchema.extend({
  confirmedPassword: z.string(),
}).refine(data => data.password === data.confirmedPassword, {
  message: "Passwords do not match",
  path: ["confirmedPassword"],
})

export type RegisterForm = z.infer<typeof RegisterFormSchema>