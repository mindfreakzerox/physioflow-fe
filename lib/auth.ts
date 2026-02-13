import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { config } from './config';

const mockUsers = [
  { id: 'admin', name: 'Clinic Admin', email: 'admin@physioflow.demo', password: 'demo123', role: 'admin' },
  { id: 'practitioner', name: 'Dr. Smith', email: 'dr.smith@physioflow.demo', password: 'demo123', role: 'practitioner' },
  { id: 'front', name: 'Front Desk', email: 'front@physioflow.demo', password: 'demo123', role: 'front-desk' },
  { id: 'patient', name: 'Demo Patient', email: 'patient@physioflow.demo', password: 'demo123', role: 'patient' }
];

export const authOptions: NextAuthOptions = {
  secret: config.nextAuthSecret,
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // Mock mode: static users
        if (config.useMockMode) {
          const user = mockUsers.find(
            (u) => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password
          );
          return user ? { id: user.id, name: user.name, email: user.email, role: user.role } as any : null;
        }

        // TODO: Requires real auth provider or database lookup
        throw new Error('Service not configured - add real auth backend');
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  }
};
