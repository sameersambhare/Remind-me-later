import { z } from "zod"
const formSchema = z.object({
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  message: z.string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" })
})

export default formSchema;