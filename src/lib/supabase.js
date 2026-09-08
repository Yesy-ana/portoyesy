import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Submit contact message to Supabase.
 */
export async function submitContactMessage({ name, email, subject, message }) {
  if (!supabase) {
    throw new Error(
      "Kredensial Supabase belum terkonfigurasi pada file .env"
    );
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        sender_name: name,
        sender_email: email,
        subject: subject || null,
        message: message,
      },
    ]);

  if (error) {
    throw new Error(error.message || "Gagal menyimpan pesan ke database.");
  }

  return { success: true };
}
