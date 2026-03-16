import { ContactItem } from './ContactItem'

interface ContactInfoProps {
  direction: string
  email: string
  phone: string
}

export function ContactInfo({ direction, email, phone }: ContactInfoProps) {
  return (
    <div className="mt-12 space-y-6">
      <ContactItem 
        label="Direction"
        content={<p>{direction}</p>}
      />
      <ContactItem 
        label="Email"
        content={
          <a href={`mailto:${email}`} className="hover:text-[#faf0ef]/80 transition-colors">
            {email}
          </a>
        }
      />
      <ContactItem 
        label="Telephone"
        content={
          <a href={`tel:${phone}`} className="hover:text-[#faf0ef]/80 transition-colors">
            {phone}
          </a>
        }
      />
    </div>
  )
}
