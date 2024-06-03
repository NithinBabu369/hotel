import User from "@/database_models/user_model"
import Connect from "@/dbconfig/connect"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
          
          credentials: {
            email:{label: "email", type: "email", placeholder: "E-mail"},
            password: { label: "Password", type: "password", placeholder: "password" }
          },
          async authorize(credentials, req) {
          await Connect()
            const user = await User.findOne({
                                           email: credentials.email,
                                          password: credentials.password})
           
      
            
            if (user) {
              return user
            }
      
            return null
          }
        })
      ],
      pages: {
        signIn: '/',
        signOut: '/',
      },
     
      
})

export{handler as GET,handler as POST}