
import { supabase } from "./supabase.js";

// Регистрация игрока
export async function register(email, password, username, profile) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw error;

  if (data.user) {
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: data.user.id,
        username,
        age: profile.age,
        height: profile.height,
        weight: profile.weight,
        level: profile.level,
        goal: profile.goal
      });

    if (profileError) throw profileError;
  }

  return data;
}

// Вход
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// Выход
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
