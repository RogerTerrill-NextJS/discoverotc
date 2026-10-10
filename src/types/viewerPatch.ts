export type ViewerPatch = {
  id: string;
  slug: string;
  name: string;
  organization: string | null;
  category: string | null;
  location: string | null;
  submitted_by: string | null;
  story: string | null;
  history: string | null;
  image_path: string;
  reverse_image_path: string | null;
  image_alt: string | null;
  video_url: string | null;
  active: boolean;
  sort_order: number | null;
  created_at: string;
  updated_at: string;
};
