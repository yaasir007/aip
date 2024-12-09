import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

// Sign in with email and password
export const signInWithEmail = async (email, password) => {
  try {
    // Sign in user
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Error signing in:', error.message)
      return
    }

    console.log('Signed in user:', user)

    // Check current session
    const session = supabase.auth.session()
    console.log('Session:', session)

    return user
  } catch (error) {
    console.error('Error signing in:', error.message)
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
  try {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      console.error('Error fetching current user:', error.message)
      return null
    }

    console.log('Current user:', user)
    return user
  } catch (err) {
    console.error('Unexpected error:', err)
    return null
  }
}
