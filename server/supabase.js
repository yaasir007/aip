import { createClient } from '@supabase/supabase-js'

const supabaseUrl='https://iefvbpxuyrkjsnowiwvo.supabase.co'
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZnZicHh1eXJranNub3dpd3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1MzcyOTIsImV4cCI6MjA0NDExMzI5Mn0.kfv6tfPlT7tbJvWwfzyIHfvLfNCURX5NQ6EDK2NDBdQ'



export const supabase = createClient(supabaseUrl, supabaseKey)
