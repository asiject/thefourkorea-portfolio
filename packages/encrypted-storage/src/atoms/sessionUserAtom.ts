import { atom } from "recoil"
import { AES, enc } from "crypto-js"

const storageSecretKey = import.meta.env.VITE_STORAGE_SECRET_KEY || "portfolio-demo-secret"

export type SessionUser = {
  id: string
  displayName: string
  role: "user" | "admin"
}

const storageKey = "_portfolio_user"

// sessionStorage AES 암호화 persist (원본 userState 패턴 일반화)
export const sessionUserAtom = atom<SessionUser | null>({
  key: "sessionUserAtom",
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      const encryptedValue = sessionStorage.getItem(storageKey) ?? ""

      if (!encryptedValue) return

      try {
        const decryptedText = AES.decrypt(encryptedValue, storageSecretKey).toString(enc.Utf8)
        if (decryptedText) setSelf(JSON.parse(decryptedText) as SessionUser)
      } catch {
        sessionStorage.removeItem(storageKey)
      }

      onSet((newValue, _, isReset) => {
        if (isReset || !newValue) {
          sessionStorage.removeItem(storageKey)
          return
        }

        const jsonString = JSON.stringify(newValue)
        const encryptedText = AES.encrypt(jsonString, storageSecretKey).toString()
        sessionStorage.setItem(storageKey, encryptedText)
      })
    },
  ],
})
