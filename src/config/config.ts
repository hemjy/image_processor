
declare var process : {
  env: {
    JWT_SECRET: string
  }
}
export const config = {
    "jwt": {
            "secret": process.env.JWT_SECRET
    }
  }