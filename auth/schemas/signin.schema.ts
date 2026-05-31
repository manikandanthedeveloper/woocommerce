import { z } from "zod";

export const signinSchema = z.object({
	username: z.string().min(1, "Email is required").email("Invalid email"),

	password: z.string().min(8, "Password must be 8 characters"),
});

export type SigninFormData = z.infer<typeof signinSchema>;
