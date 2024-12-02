import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iefvbpxuyrkjsnowiwvo.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchProperty = async ({ type }) => {
  try {
    let query = supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (type && type !== 'All') {
      query = query.eq('property_type', type);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};
