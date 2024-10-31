// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { createHash } from "crypto";

export const makePassword = (password: string) => {
	const hashPassword = createHash("sha256").update(password).digest("base64");
	return hashPassword;
};
