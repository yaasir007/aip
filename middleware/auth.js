import { supabase } from '~/supabase.js'; // Ensure you adjust this import to your supabase setup

export default function ({ redirect }) {
  // Get the current authenticated user
  const user = supabase.auth.user();

  if (!user) {
    // If the user is not authenticated, redirect to the login page
    return redirect('/auth/login');
  }
}