import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://tbxjsmbafuoknuchmncx.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_QwbXHGkfhqF9K0kg0BgGug_VolsnjgN";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
