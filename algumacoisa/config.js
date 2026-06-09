"Esse arquivo centraliza as chaves do seu Supabase para que você não precise ficar repetindo elas em todo script."
// Substitua com as credenciais reais do seu projeto do Supabase
const SUPABASE_URL = "https://udwshsoqmubzaofkbopm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_f4kKYeoVjNf5GIolfRzx6Q_q3D0oER3";

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);