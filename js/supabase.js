
import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://tbxjsmbafuoknuchmncx.supabase.co";

const SUPABASE_KEY = "ТВОЙ_ТЕКУЩИЙ_PUBLISHABLE_KEY";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
