export interface Profile {
  id: string
  user_id: string
  slug: string | null
  display_name: string | null
  bio: string | null
  logo_url: string | null
  contact_email: string | null
  contact_phone: string | null
  website: string | null
  instagram: string | null
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface Collection {
  id: string
  name: string
  description?: string
  user_id: string
  created_at: string
  is_public?: boolean
}

export interface Artwork {
  id: string
  title: string
  description?: string
  medium?: string
  dimensions?: string
  year?: number
  price?: number
  image_url: string
  watermarked_url?: string
  collection_id?: string
  user_id: string
  created_at: string
  updated_at: string
  height?: number
  width?: number
  depth?: number
  dimension_unit?: string
  year_created?: number
  status?: string
  sku?: string
  is_public?: boolean
}
