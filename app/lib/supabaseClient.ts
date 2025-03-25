import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Key must be defined");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
