import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

const keypair = getKeypairFromEnvironment("SECRET_KEY")

console.log('Fnished! Your public key is: ', keypair.publicKey.toBase58())
