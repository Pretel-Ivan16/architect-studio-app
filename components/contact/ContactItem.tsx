import { InfoItem } from '@/components/ui/InfoItem'

interface ContactItemProps {
  label: string
  content: React.ReactNode
}

export function ContactItem({ label, content }: ContactItemProps) {
  return (
    <InfoItem
      label={label}
      content={content}
    />
  )
}
