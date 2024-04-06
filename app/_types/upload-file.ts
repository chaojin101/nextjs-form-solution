import { z } from "zod";

export const UploadFileFormSchema = z.object({
  files: z.any().transform(files => {
    if (files instanceof FileList) {
      return files;
    }

    return z.NEVER;
  })
});

export type UploadFileForm = z.infer<typeof UploadFileFormSchema>;