import { Card } from "@/components/ui/card";
import Iframe from "react-iframe";
type Props = {
  src: string;
};

export default function KibanaIframe({ src }: Props) {
  return (
    <Card className="w-full h-full">
      <Iframe
        url={src}
        height="320px"
        id=""
        className="w-full"
        display="block"
        position="relative"
      />
    </Card>
  );
}
