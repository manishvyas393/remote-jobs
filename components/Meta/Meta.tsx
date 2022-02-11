import { NextSeo } from 'next-seo';
interface Props{
      title: string,
      description: string,
      canonical: string,
      openGraph:any
}
export const Meta = ({title,description,canonical,openGraph}:Props) => {
      return (
            <NextSeo
                  title={title}
                  description={description}
                  canonical={canonical}
                  openGraph={openGraph}
            />
      );
};
