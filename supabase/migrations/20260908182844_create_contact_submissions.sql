/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `phone` (text) — sender's phone number (optional)
  - `company` (text) — sender's company name (optional)
  - `message` (text, not null) — the inquiry message
  - `service_type` (text) — which service they're interested in (optional)
  - `status` (text, default 'new') — tracking status: new, read, responded
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated to INSERT (so visitors can submit the contact form).
- No SELECT/UPDATE/DELETE for anon — only authenticated (admin) can read/manage submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(trim(email)) BETWEEN 3 AND 320),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 50),
  company text CHECK (company IS NULL OR char_length(company) <= 200),
  message text NOT NULL CHECK (char_length(trim(message)) BETWEEN 1 AND 5000),
  service_type text CHECK (service_type IS NULL OR char_length(service_type) <= 100),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "public submits contact requests" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "auth_select_contact" ON contact_submissions;
CREATE POLICY "internal staff read contact requests" ON contact_submissions FOR SELECT
  TO authenticated USING (current_org_id() IS NOT NULL);

DROP POLICY IF EXISTS "auth_update_contact" ON contact_submissions;
CREATE POLICY "internal managers update contact requests" ON contact_submissions FOR UPDATE
  TO authenticated USING (can_manage()) WITH CHECK (can_manage());

DROP POLICY IF EXISTS "auth_delete_contact" ON contact_submissions;
CREATE POLICY "admins delete contact requests" ON contact_submissions FOR DELETE
  TO authenticated USING (is_active_admin());

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions (status);
