export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMemberType {
  linkedin: string | undefined;
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string | undefined;
  phone: string | undefined;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}