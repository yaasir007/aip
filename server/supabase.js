import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const logout = async () => {
  try {
    await supabase.auth.signOut();
    navigateTo('/');
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};

export const fetchOneProperty = async (id) => {
  try {
    let query = supabase
      .from('properties')
      .select('*')
      .eq('property_id', id)

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Error fetching user properties:', error.message);
    return [];
  }
};

export const fetchUserProperties = async (userId) => {
  try {
    let query = supabase
      .from('properties')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching user properties:', error.message);
    return [];
  }
};


export const isLoggedIn = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getSession()

    if (error) {
      console.error('Error fetching session:', error.message)
      return false
    }

    // Check if user is logged in
    if (user) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('Error checking user status:', error.message)
    return false
  }
}

// Subscribe to auth state changes
export const subscribeToAuthChanges = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    const isLoggedIn = session?.user ? true : false
    callback(isLoggedIn)
  })
}
// Sign in with email and password
export const signInWithEmail = async (email, password, router) => {
  try {
    // Sign in user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Error signing in:', error.message)
      return error.message
    }

    console.log('Signed in user:', data)
    router.push('/dashboard/mylistings');
    // return data.user
  } catch (error) {
    console.error('Error signing in:', error.message)
    return error.message
  }
}

// Fetch properties with validated flag as true
export const fetchProperty = async ({ type, limit }) => {
  try {
    let query = supabase
      .from('properties')
      .select('*')
      .eq('validated', true)
      .order('created_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    if (type && type !== 'All') {
      query = query.eq('property_type', type)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}

// Sign up a user
export const signUp = async (email, password, name) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    })

    if (error) {
      console.error('Error signing up:', error.message)
    } else {
      console.log('User signed up successfully:', data)
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

// Get the current user
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error fetching session:', error.message);
    return null;
  }

  return data?.session?.user || null;
};


export const createProperty = async (propertyData) => {
  try {
    const { data, error } = await supabase
      .from('properties')
      .insert([propertyData])
      .select()

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Error creating property:', error.message);
    throw error;
  }
};