import { z } from "zod";

const EMPTY_SELECTION_ERR_MSG = "Please select an item"
export const Gender = z.enum(["male", 'female', 'other'], { invalid_type_error: EMPTY_SELECTION_ERR_MSG })
export const Language = z.enum(["Javascript", 'Python', 'C'], {
  errorMap: (_, __) => ({ message: EMPTY_SELECTION_ERR_MSG })
})

export const OtherInputTypeFormSchema = z.object({
  tosIsRead: z.boolean(),
  gender: Gender,
  language: Language,
})

export const OtherInputTypeReqSchema = OtherInputTypeFormSchema

export type OtherInputTypeForm = z.infer<typeof OtherInputTypeFormSchema>
