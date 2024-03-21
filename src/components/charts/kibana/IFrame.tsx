type Props = {
  src: string;
};

export default function KibanaIframe({ src }: Props) {
  return <iframe src={src} className="w-full min-h-[200px]" />;
}
