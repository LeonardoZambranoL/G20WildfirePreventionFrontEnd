import { Card } from "@/components/ui/card";
type Props = {
  src: string;
};

export default function KibanaIframe({ src }: Props) {
  return (
    <Card className="w-full h-full">
      <iframe src={src} className="w-full h-full min-h-[200px]" />
    </Card>
  );
}
