import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  const mapSRC =
    "http://172.208.114.118:5601/app/dashboards#/view/3971c0d0-e809-11ee-87e8-994380542f30?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(description:'',layerListJSON:'%5B%7B%22sourceDescriptor%22:%7B%22type%22:%22EMS_TMS%22,%22isAutoSelect%22:true%7D,%22id%22:%22a10b7eba-4740-42fd-827b-726d9fd8cfb2%22,%22label%22:null,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:1,%22visible%22:true,%22style%22:%7B%22type%22:%22TILE%22%7D,%22includeInFitToBounds%22:true,%22type%22:%22VECTOR_TILE%22%7D%5D',mapStateJSON:'%7B%22zoom%22:2.48,%22center%22:%7B%22lon%22:-24.55322,%22lat%22:-13.90141%7D,%22timeFilters%22:%7B%22from%22:%22now-15m%22,%22to%22:%22now%22%7D,%22refreshConfig%22:%7B%22isPaused%22:true,%22interval%22:0%7D,%22query%22:%7B%22query%22:%22%22,%22language%22:%22kuery%22%7D,%22filters%22:%5B%5D,%22settings%22:%7B%22autoFitToDataBounds%22:false,%22backgroundColor%22:%22%23ffffff%22,%22disableInteractive%22:false,%22disableTooltipControl%22:false,%22hideToolbarOverlay%22:false,%22hideLayerControl%22:false,%22hideViewControl%22:false,%22initialLocation%22:%22LAST_SAVED_LOCATION%22,%22fixedLocation%22:%7B%22lat%22:0,%22lon%22:0,%22zoom%22:2%7D,%22browserLocation%22:%7B%22zoom%22:2%7D,%22maxZoom%22:24,%22minZoom%22:0,%22showScaleControl%22:false,%22showSpatialFilters%22:true,%22showTimesliderToggleButton%22:true,%22spatialFiltersAlpa%22:0.3,%22spatialFiltersFillColor%22:%22%23DA8B45%22,%22spatialFiltersLineColor%22:%22%23DA8B45%22%7D%7D',title:'',uiStateJSON:'%7B%22isLayerTOCOpen%22:true,%22openTOCDetails%22:%5B%5D%7D'),enhancements:(),hiddenLayers:!(),hidePanelTitles:!f,isLayerTOCOpen:!f,mapBuffer:(maxLat:40.9799,maxLon:45,minLat:-66.51326,minLon:-135),mapCenter:(lat:-25.27131,lon:-41.99565,zoom:2.48),openTOCDetails:!()),gridData:(h:20,i:ee16f160-eea2-46be-a001-eaa02af2be4e,w:48,x:0,y:0),panelIndex:ee16f160-eea2-46be-a001-eaa02af2be4e,title:'G20%20Wildfire%20Map',type:map,version:'7.17.18')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'G20%20Wildifre%20MAp',viewMode:view)&hide-filter-bar=true";
  const srcs = [
    "https://de.wikipedia.org/wiki/rat",
    "https://de.wikipedia.org/wiki/mouse",
    "https://de.wikipedia.org/wiki/bat",
    "https://de.wikipedia.org/wiki/fox",
    "https://de.wikipedia.org/wiki/squirrel",
    "https://de.wikipedia.org/wiki/horse",
    "https://de.wikipedia.org/wiki/cow",
    "https://de.wikipedia.org/wiki/lizard",
  ];
  const graphMap = (
    <>
      <iframe src={mapSRC} height="600" className="w-full"></iframe>
    </>
  );
  const firstRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="p-2 col-span-7 bg-secondary">
          <KibanaIframe src={srcs[0]} />
        </div>
        <div className="p-2 col-span-5 bg-secondary">
          <KibanaIframe src={srcs[1]} />
        </div>
      </div>
    </>
  );
  const secondRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="p-2 col-span-6 bg-secondary">
          <KibanaIframe src={srcs[2]} />
        </div>
        <div className="col-span-6 lg:grid lg:grid-cols-12">
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[3]} />
          </div>
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[4]} />
          </div>
        </div>
      </div>
    </>
  );
  const thirdRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="col-span-6 lg:grid lg:grid-cols-12">
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[5]} />
          </div>
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[6]} />
          </div>
        </div>
        <div className="p-2 col-span-6 bg-secondary">
          <KibanaIframe src={srcs[7]} />
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="mt-5 container flex flex-col gap-2">
        {graphMap}
        {firstRow}
        {secondRow}
        {thirdRow}
      </div>
    </>
  );
}
