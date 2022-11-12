import { ReactNode } from "react"

export type IICategories = {
  mainImage?: string,
  mainImageNext?: ReactNode | string,
  title: string,
  linkHref?: string,
  isShowImageNext?: boolean
}