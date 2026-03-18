export const projectsContent = {
  subtitle: 'Portfolio',
  title: 'Projects',
  titleHighlight: 'selected',
  description: 'Each project is a unique exploration of form, function, and context. Discover our selection of recent works.',
  buttonLabel: 'View all projects',
  buttonHref: '/projects',
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  year: string
  location: string
  description: string
  architect: string
  area: string
  status: "Completed" | "Under Construction"
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "palermo-courtyard-house",
    title: "Palermo Courtyard House",
    category: "Residential",
    year: "2023",
    location: "Palermo, Buenos Aires",
    description: "A single-family residence organized around a central courtyard with native vegetation and large glass surfaces.",
    architect: "Architect Studio",
    area: "320 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Courtyard House.png"]
  },
  {
    id: 2,
    slug: "recoleta-410-building",
    title: "Recoleta 410 Building",
    category: "Residential Building",
    year: "2022",
    location: "Recoleta, Buenos Aires",
    description: "Low-rise residential building with terraced balconies and exposed concrete façade.",
    architect: "Architect Studio",
    area: "1200 m²",
    status: "Completed",
    images: ["/images/projects/Recoleta 410 Building.avif"]
  },
  {
    id: 3,
    slug: "palermo-soho-loft",
    title: "Palermo Soho Loft",
    category: "Interior Design",
    year: "2024",
    location: "Palermo Soho, Buenos Aires",
    description: "Transformation of a former industrial warehouse into a contemporary double-height loft.",
    architect: "Architect Studio",
    area: "180 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Soho Loft.avif"]
  },
  {
    id: 4,
    slug: "san-isidro-country-house",
    title: "San Isidro Country House",
    category: "Residential",
    year: "2021",
    location: "San Isidro, Buenos Aires",
    description: "Weekend country house featuring an open gallery, swimming pool, and large gardens.",
    architect: "Architect Studio",
    area: "420 m²",
    status: "Completed",
    images: ["/images/projects/San Isidro Country House.avif"]
  },
  {
    id: 5,
    slug: "belgrano-barrancas-residence",
    title: "Belgrano Barrancas Residence",
    category: "Residential",
    year: "2023",
    location: "Belgrano, Buenos Aires",
    description: "Family residence with green terraces and large social spaces connected to the exterior.",
    architect: "Architect Studio",
    area: "350 m²",
    status: "Completed",
    images: ["/images/projects/Belgrano Barracas Residence.avif"]
  },
  {
    id: 6,
    slug: "palermo-chico-garden-house",
    title: "Palermo Chico Garden House",
    category: "Residential",
    year: "2022",
    location: "Palermo Chico, Buenos Aires",
    description: "Contemporary residence integrating the garden with the social areas through large sliding windows.",
    architect: "Architect Studio",
    area: "370 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Chico Garden House.avif"]
  },
  {
    id: 7,
    slug: "recoleta-boutique-building",
    title: "Recoleta Boutique Building",
    category: "Residential Building",
    year: "2024",
    location: "Recoleta, Buenos Aires",
    description: "Boutique residential building with premium finishes, green balconies and exclusive amenities.",
    architect: "Architect Studio",
    area: "980 m²",
    status: "Under Construction",
    images: ["/images/projects/Recoleta Boutique Building .avif"]
  },
  {
    id: 8,
    slug: "nordelta-modern-house",
    title: "Nordelta Modern House",
    category: "Residential",
    year: "2023",
    location: "Nordelta, Buenos Aires",
    description: "Contemporary lakeside residence with minimalist volumes and panoramic glazing.",
    architect: "Architect Studio",
    area: "410 m²",
    status: "Completed",
    images: ["/images/projects/Nordelta Modern House.avif"]
  },
  {
    id: 9,
    slug: "recoleta-view-penthouse",
    title: "Recoleta View Penthouse",
    category: "Interior Design",
    year: "2024",
    location: "Recoleta, Buenos Aires",
    description: "Penthouse interior design project featuring open spaces and natural materials.",
    architect: "Architect Studio",
    area: "210 m²",
    status: "Completed",
    images: ["/images/projects/Recoleta View Penthouse.avif"]
  },
  {
    id: 10,
    slug: "house-among-trees",
    title: "House Among Trees",
    category: "Residential",
    year: "2022",
    location: "San Isidro, Buenos Aires",
    description: "Minimalist house designed to blend with the surrounding trees and natural landscape.",
    architect: "Architect Studio",
    area: "340 m²",
    status: "Completed",
    images: ["/images/projects/House Among Trees.avif"]
  },
  {
    id: 11,
    slug: "palermo-green-building",
    title: "Palermo Green Building",
    category: "Residential Building",
    year: "2023",
    location: "Palermo, Buenos Aires",
    description: "Urban residential building featuring green balconies and sustainable architectural strategies.",
    architect: "Architect Studio",
    area: "1100 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Green Building.avif"]
  },
  {
    id: 12,
    slug: "nordelta-lake-residence",
    title: "Nordelta Lake Residence",
    category: "Residential",
    year: "2021",
    location: "Nordelta, Buenos Aires",
    description: "Family residence facing the lake with open-plan interiors and private dock.",
    architect: "Architect Studio",
    area: "460 m²",
    status: "Completed",
    images: ["/images/projects/Nordelta Lake House.avif"]
  },
  {
    id: 13,
    slug: "recoleta-courtyard-renovation",
    title: "Recoleta Courtyard Renovation",
    category: "Renovation",
    year: "2022",
    location: "Recoleta, Buenos Aires",
    description: "Complete renovation of a classic residence incorporating a contemporary courtyard.",
    architect: "Architect Studio",
    area: "280 m²",
    status: "Completed",
    images: ["/images/projects/Recoleta Courtyard Renovation.avif"]
  },
  {
    id: 14,
    slug: "palermo-creative-offices",
    title: "Palermo Creative Offices",
    category: "Commercial Architecture",
    year: "2023",
    location: "Palermo Hollywood, Buenos Aires",
    description: "Collaborative office space with industrial aesthetics and flexible working areas.",
    architect: "Architect Studio",
    area: "520 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Creative Offices.avif"]
  },
  {
    id: 15,
    slug: "san-isidro-minimal-house",
    title: "San Isidro Minimal House",
    category: "Residential",
    year: "2024",
    location: "San Isidro, Buenos Aires",
    description: "Minimalist residence defined by pure volumes and strong indoor–outdoor relationships.",
    architect: "Architect Studio",
    area: "360 m²",
    status: "Under Construction",
    images: ["/images/projects/San Isidro Minimalist.avif"]
  },
  {
    id: 16,
    slug: "urban-courtyard-building",
    title: "Urban Courtyard Building",
    category: "Residential Building",
    year: "2022",
    location: "Belgrano, Buenos Aires",
    description: "Apartment building organized around an interior courtyard bringing natural light to circulation areas.",
    architect: "Architect Studio",
    area: "1050 m²",
    status: "Completed",
    images: ["/images/projects/Urban Courtyard Building.avif"]
  },
  {
    id: 17,
    slug: "northern-gallery-house",
    title: "Northern Gallery House",
    category: "Residential",
    year: "2023",
    location: "Tigre, Buenos Aires",
    description: "Weekend house with a large open gallery facing the garden and swimming pool.",
    architect: "Architect Studio",
    area: "390 m²",
    status: "Completed",
    images: ["/images/projects/Northern Gallery House.avif"]
  },
  {
    id: 18,
    slug: "palermo-design-apartment",
    title: "Palermo Design Apartment",
    category: "Interior Design",
    year: "2021",
    location: "Palermo, Buenos Aires",
    description: "Contemporary interior design for an urban apartment with custom furniture.",
    architect: "Architect Studio",
    area: "140 m²",
    status: "Completed",
    images: ["/images/projects/Palermo Design Apartment.avif"]
  },
  {
    id: 19,
    slug: "barrancas-view-residence",
    title: "Barrancas View Residence",
    category: "Residential",
    year: "2024",
    location: "Belgrano, Buenos Aires",
    description: "Modern house with terraces and panoramic views towards the Barrancas landscape.",
    architect: "Architect Studio",
    area: "380 m²",
    status: "Under Construction",
    images: ["/images/projects/Barrancas View Residence.avif"]
  },
  {
    id: 20,
    slug: "pilar-country-villa",
    title: "Pilar Country Villa",
    category: "Residential",
    year: "2022",
    location: "Pilar, Buenos Aires",
    description: "Modern country villa with pool, outdoor living areas and large landscaped gardens.",
    architect: "Architect Studio",
    area: "450 m²",
    status: "Completed",
    images: ["/images/projects/Pilar Country Villa.avif"]
  }
]
