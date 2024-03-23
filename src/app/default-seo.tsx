import { DefaultSeo } from "next-seo";

export function DefaultSEO() {
  return (
    <DefaultSeo
      title="NSDEV Creative"
      description="Transforme sua empresa e aumente seus resultados "
      openGraph={{
          type: 'website',
          locale: 'pr_BR',
          url: 'https://www.nsdev.vercel.app/',
          siteName: 'NSDEV Creative',
      }}
    />
  )
}