interface ProjectHeroImageProps {
  src?: string
  alt: string
}

export function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  return (
    <figure className="relative aspect-video bg-[#111d37] overflow-hidden rounded-lg mb-8">
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
    </figure>
  )
}
