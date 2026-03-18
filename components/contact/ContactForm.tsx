import { FormField } from './FormField'
import { FormSelect } from './FormSelect'
import { FormTextarea } from './FormTextarea'
import { FormSubmitButton } from './FormSubmitButton'
import { projectOptions } from '@/data/contact'

interface ContactFormProps {
  formData: {
    name: string
    email: string
    project: string
    message: string
  }
  onFormDataChange: (data: any) => void
  onSubmit: (e: React.FormEvent) => void
}

export function ContactForm({ formData, onFormDataChange, onSubmit }: ContactFormProps) {
  const handleChange = (field: string, value: string) => {
    onFormDataChange({ ...formData, [field]: value })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FormField
        id="name"
        label="Name"
        placeholder="Your full name"
        value={formData.name}
        onChange={(value) => handleChange('name', value)}
        required
      />
      <FormField
        id="email"
        label="Email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(value) => handleChange('email', value)}
        required
      />
      <FormSelect
        id="project"
        label="Project"
        value={formData.project}
        onChange={(value) => handleChange('project', value)}
        options={projectOptions}
        required
      />
      <FormTextarea
        id="message"
        label="Message"
        placeholder=""
        value={formData.message}
        onChange={(value) => handleChange('message', value)}
        required
      />
      <FormSubmitButton label="Send Message" />
    </form>
  )
}
