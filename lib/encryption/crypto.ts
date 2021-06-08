import crypto from "crypto";

const algorithm = "aes-256-ctr";
const secretKey = process.env.CRYPTO_SECRET_KEY;
const iv = crypto.randomBytes(16);

const encrypt = (text: string): Hash => {
  if (secretKey) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString("hex"),
      content: encrypted.toString("hex"),
    };
  }
  throw Error("No secret key");
};

const decrypt = (hash: Hash): string => {
  if (secretKey) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, "hex"));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, "hex")), decipher.final()]);

    return decrpyted.toString();
  }
  throw Error("No secret key");
};

export { encrypt, decrypt };

interface Hash {
  iv: string;
  content: string;
}
