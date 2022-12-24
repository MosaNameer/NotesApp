import { createClient } from '@supabase/supabase-js'


const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZndyc2Vla3R4endkd3pmbWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4ODY2MjMsImV4cCI6MTk4NzQ2MjYyM30.BAIyZqaDV-_ow3QF-3xIrwwzEeMTL0aS9-4If6KLZIA";
const SUPABASE_URL = "https://tkfwrseektxzwdwzfmkd.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    return { 
        supabase, 
    };
};

export default useSupabase;
