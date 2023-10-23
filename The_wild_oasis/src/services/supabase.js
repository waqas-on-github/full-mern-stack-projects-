
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://umalufopljdktkfizetc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtYWx1Zm9wbGpka3RrZml6ZXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MjY4MDAsImV4cCI6MjAxMzUwMjgwMH0.TGFVdObek-s5MM_uDmVmx5omz0ae0oQgmd0cIWWjEmw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase