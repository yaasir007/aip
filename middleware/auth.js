import { getCurrentUser } from '~/server/supabase';

export default defineNuxtRouteMiddleware(async () => {
  const user = await getCurrentUser();

  if (!user) {
    console.warn('User not authenticated. Redirecting to login.');
    return navigateTo('/auth/signin');
  }
});

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.href = '/';
  }
}