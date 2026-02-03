-- Profiles table for public artist pages
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  slug TEXT UNIQUE,
  display_name TEXT,
  bio TEXT,
  logo_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  instagram TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Anyone can read public profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (is_public = true);

-- Users can read their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Add is_public column to artworks if it doesn't exist
ALTER TABLE artworks ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT false;

-- Add policy for public artwork viewing (if not exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Public artworks are viewable by everyone'
  ) THEN
    CREATE POLICY "Public artworks are viewable by everyone"
      ON artworks FOR SELECT
      USING (is_public = true);
  END IF;
END $$;

-- Index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_profiles_slug ON profiles(slug);
CREATE INDEX IF NOT EXISTS idx_profiles_is_public ON profiles(is_public);
CREATE INDEX IF NOT EXISTS idx_artworks_is_public ON artworks(is_public);
