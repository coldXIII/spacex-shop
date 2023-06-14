import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    secret: process.env.SECRET,
  });
}
