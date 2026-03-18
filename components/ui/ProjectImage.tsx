interface ProjectImageProps {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  )
}
