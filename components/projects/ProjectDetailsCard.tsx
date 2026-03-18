import { MapPin, Calendar, Ruler, User } from "lucide-react"

interface Project {
  category: string
  location: string
  year: string
  area: string
  status: string
  architect: string
}

interface ProjectDetailsCardProps {
  project: Project
}

export function ProjectDetailsCard({ project }: ProjectDetailsCardProps) {
  const detailItems = [
    { label: "Category", value: project.category, icon: null },
    { label: "Location", value: project.location, icon: MapPin },
    { label: "Year", value: project.year, icon: Calendar },
    { label: "Area", value: project.area, icon: Ruler },
    { label: "Status", value: project.status, icon: User },
    { label: "Architect", value: project.architect, icon: null },
  ]

  return (
    <aside className="space-y-6 bg-white p-8 rounded-lg border border-[#0b0b0b]/10">
      {detailItems.map((item) => (
        <div key={item.label}>
          <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
            {item.icon && <item.icon className="w-4 h-4" />}
            {item.label}
          </p>
          {item.label === "Status" ? (
            <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
              project.status === "Completed" 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {item.value}
            </span>
          ) : (
            <p className="text-[#0b0b0b] font-medium">
              {item.value}
            </p>
          )}
        </div>
      ))}
    </aside>
  )
}
