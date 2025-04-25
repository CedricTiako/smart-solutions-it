/*
  # Contact form messages schema

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text) - For tracking message status (new, read, replied)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for authenticated users to create messages
    - Add policy for admin users to read all messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT contact_messages_status_check CHECK (status IN ('new', 'read', 'replied'))
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid IN (
    SELECT id FROM auth.users WHERE auth.email() IN ('Tiako1998@gmail.com')
  ));