import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://sfbbloifgvwdlflhehmt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYmJsb2lmZ3Z3ZGxmbGhlaG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNjY3NzgsImV4cCI6MjA1MDc0Mjc3OH0.O0S-hvYdhRHXUTCCf4Zu7GUziwzAxSZwWtB6C-B01rM'
);

export default supabase;
