import { Title } from "@/components/ui/Title"

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  if (images.length <= 1) {
    return null
  }

  return (
    <section className="mb-16">
      <Title as="h2" className="text-[#0b0b0b] mb-8">
        Project Gallery
      </Title>
      <div className="grid md:grid-cols-2 gap-6">
        {images.slice(1).map((image, index) => (
          <figure key={index} className="relative aspect-video bg-[#111d37] overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${projectTitle} - View ${index + 2}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
