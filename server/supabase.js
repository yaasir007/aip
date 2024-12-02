import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchProperty = async ({ type, limit }) => {
  try {
    let query = supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

      console.log("limit",limit)
    if(limit){
      query = query.limit(limit)
    }

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
