export type Lang = 'en' | 'id'

export interface BilingualText {
  en: string
  id: string
}

export interface NavLink {
  label: BilingualText
  href: string
}

export interface Feature {
  icon: string
  title: BilingualText
  description: BilingualText
}

export interface UseCase {
  key: string
  tab: BilingualText
  items: BilingualText[]
}

export interface Provider {
  name: string
  priority?: boolean
}

export interface RoutingRow {
  task: BilingualText
  providers: string
}

export interface PipelineStep {
  icon: string
  label: BilingualText
  status: 'default' | 'success' | 'warning'
}

export interface WhyCard {
  icon: string
  title: BilingualText
  body: BilingualText
}

export interface InstallTab {
  key: string
  label: string
  code: string
}

export interface Benefit {
  icon: string
  title: BilingualText
  body: BilingualText
}
