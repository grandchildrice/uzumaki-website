import ZennEmbedElements from '@/components/zenn-embed-elements';
import { ZennEmbedScript } from '@/components/zenn-embed-script';

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <>
      <div className='my-20' />
      <ZennEmbedScript />
      <ZennEmbedElements />
      <div className="max-w-screen-md mx-auto">{children}</div>
    </>
  );
}
