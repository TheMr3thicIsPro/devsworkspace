import { redirect } from 'next/navigation';

export default function SignupPageRedirect() {
  redirect('/auth/signup');
}