export interface Project {
  id: number
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
    title: "Palermo Courtyard House",
    category: "Residential",
    year: "2023",
    location: "Palermo, Buenos Aires",
    description: "A single-family residence organized around a central courtyard with native vegetation and large glass surfaces.",
    architect: "Architect Studio",
    area: "320 m²",
    status: "Completed",
    images: []
  },
  {
    id: 2,
    title: "Recoleta 410 Building",
    category: "Residential Building",
    year: "2022",
    location: "Recoleta, Buenos Aires",
    description: "Low-rise residential building with terraced balconies and exposed concrete façade.",
    architect: "Architect Studio",
    area: "1200 m²",
    status: "Completed",
    images: []
  },
  {
    id: 3,
    title: "Palermo Soho Loft",
    category: "Interior Design",
    year: "2024",
    location: "Palermo Soho, Buenos Aires",
    description: "Transformation of a former industrial warehouse into a contemporary double-height loft.",
    architect: "Architect Studio",
    area: "180 m²",
    status: "Completed",
    images: []
  },
  {
    id: 4,
    title: "San Isidro Country House",
    category: "Residential",
    year: "2021",
    location: "San Isidro, Buenos Aires",
    description: "Weekend country house featuring an open gallery, swimming pool, and large gardens.",
    architect: "Architect Studio",
    area: "420 m²",
    status: "Completed",
    images: []
  },
  {
    id: 5,
    title: "Belgrano Barrancas Residence",
    category: "Residential",
    year: "2023",
    location: "Belgrano, Buenos Aires",
    description: "Family residence with green terraces and large social spaces connected to the exterior.",
    architect: "Architect Studio",
    area: "350 m²",
    status: "Completed",
    images: []
  },
  {
    id: 6,
    title: "Palermo Chico Garden House",
    category: "Residential",
    year: "2022",
    location: "Palermo Chico, Buenos Aires",
    description: "Contemporary residence integrating the garden with the social areas through large sliding windows.",
    architect: "Architect Studio",
    area: "370 m²",
    status: "Completed",
    images: []
  },
  {
    id: 7,
    title: "Recoleta Boutique Building",
    category: "Residential Building",
    year: "2024",
    location: "Recoleta, Buenos Aires",
    description: "Boutique residential building with premium finishes, green balconies and exclusive amenities.",
    architect: "Architect Studio",
    area: "980 m²",
    status: "Under Construction",
    images: []
  },
  {
    id: 8,
    title: "Nordelta Modern House",
    category: "Residential",
    year: "2023",
    location: "Nordelta, Buenos Aires",
    description: "Contemporary lakeside residence with minimalist volumes and panoramic glazing.",
    architect: "Architect Studio",
    area: "410 m²",
    status: "Completed",
    images: []
  },
  {
    id: 9,
    title: "Recoleta View Penthouse",
    category: "Interior Design",
    year: "2024",
    location: "Recoleta, Buenos Aires",
    description: "Penthouse interior design project featuring open spaces and natural materials.",
    architect: "Architect Studio",
    area: "210 m²",
    status: "Completed",
    images: []
  },
  {
    id: 10,
    title: "House Among Trees",
    category: "Residential",
    year: "2022",
    location: "San Isidro, Buenos Aires",
    description: "Minimalist house designed to blend with the surrounding trees and natural landscape.",
    architect: "Architect Studio",
    area: "340 m²",
    status: "Completed",
    images: []
  },
  {
    id: 11,
    title: "Palermo Green Building",
    category: "Residential Building",
    year: "2023",
    location: "Palermo, Buenos Aires",
    description: "Urban residential building featuring green balconies and sustainable architectural strategies.",
    architect: "Architect Studio",
    area: "1100 m²",
    status: "Completed",
    images: []
  },
  {
    id: 12,
    title: "Nordelta Lake Residence",
    category: "Residential",
    year: "2021",
    location: "Nordelta, Buenos Aires",
    description: "Family residence facing the lake with open-plan interiors and private dock.",
    architect: "Architect Studio",
    area: "460 m²",
    status: "Completed",
    images: []
  },
  {
    id: 13,
    title: "Recoleta Courtyard Renovation",
    category: "Renovation",
    year: "2022",
    location: "Recoleta, Buenos Aires",
    description: "Complete renovation of a classic residence incorporating a contemporary courtyard.",
    architect: "Architect Studio",
    area: "280 m²",
    status: "Completed",
    images: []
  },
  {
    id: 14,
    title: "Palermo Creative Offices",
    category: "Commercial Architecture",
    year: "2023",
    location: "Palermo Hollywood, Buenos Aires",
    description: "Collaborative office space with industrial aesthetics and flexible working areas.",
    architect: "Architect Studio",
    area: "520 m²",
    status: "Completed",
    images: []
  },
  {
    id: 15,
    title: "San Isidro Minimal House",
    category: "Residential",
    year: "2024",
    location: "San Isidro, Buenos Aires",
    description: "Minimalist residence defined by pure volumes and strong indoor–outdoor relationships.",
    architect: "Architect Studio",
    area: "360 m²",
    status: "Under Construction",
    images: []
  },
  {
    id: 16,
    title: "Urban Courtyard Building",
    category: "Residential Building",
    year: "2022",
    location: "Belgrano, Buenos Aires",
    description: "Apartment building organized around an interior courtyard bringing natural light to circulation areas.",
    architect: "Architect Studio",
    area: "1050 m²",
    status: "Completed",
    images: []
  },
  {
    id: 17,
    title: "Northern Gallery House",
    category: "Residential",
    year: "2023",
    location: "Tigre, Buenos Aires",
    description: "Weekend house with a large open gallery facing the garden and swimming pool.",
    architect: "Architect Studio",
    area: "390 m²",
    status: "Completed",
    images: []
  },
  {
    id: 18,
    title: "Palermo Design Apartment",
    category: "Interior Design",
    year: "2021",
    location: "Palermo, Buenos Aires",
    description: "Contemporary interior design for an urban apartment with custom furniture.",
    architect: "Architect Studio",
    area: "140 m²",
    status: "Completed",
    images: []
  },
  {
    id: 19,
    title: "Barrancas View Residence",
    category: "Residential",
    year: "2024",
    location: "Belgrano, Buenos Aires",
    description: "Modern house with terraces and panoramic views towards the Barrancas landscape.",
    architect: "Architect Studio",
    area: "380 m²",
    status: "Under Construction",
    images: []
  },
  {
    id: 20,
    title: "Pilar Country Villa",
    category: "Residential",
    year: "2022",
    location: "Pilar, Buenos Aires",
    description: "Modern country villa with pool, outdoor living areas and large landscaped gardens.",
    architect: "Architect Studio",
    area: "450 m²",
    status: "Completed",
    images: []
  }
]
