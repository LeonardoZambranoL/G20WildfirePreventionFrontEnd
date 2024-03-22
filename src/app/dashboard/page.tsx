import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  const mapSRC =
    "http://172.208.114.118:5601/app/dashboards#/view/3971c0d0-e809-11ee-87e8-994380542f30?embed=true&_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:0),time:(from:now-1y%2Fd,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(description:'',layerListJSON:'%5B%7B%22sourceDescriptor%22:%7B%22type%22:%22EMS_TMS%22,%22isAutoSelect%22:true%7D,%22id%22:%22a10b7eba-4740-42fd-827b-726d9fd8cfb2%22,%22label%22:null,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:1,%22visible%22:true,%22style%22:%7B%22type%22:%22TILE%22%7D,%22includeInFitToBounds%22:true,%22type%22:%22VECTOR_TILE%22%7D%5D',mapStateJSON:'%7B%22zoom%22:2.48,%22center%22:%7B%22lon%22:-24.55322,%22lat%22:-13.90141%7D,%22timeFilters%22:%7B%22from%22:%22now-15m%22,%22to%22:%22now%22%7D,%22refreshConfig%22:%7B%22isPaused%22:true,%22interval%22:0%7D,%22query%22:%7B%22query%22:%22%22,%22language%22:%22kuery%22%7D,%22filters%22:%5B%5D,%22settings%22:%7B%22autoFitToDataBounds%22:false,%22backgroundColor%22:%22%23ffffff%22,%22disableInteractive%22:false,%22disableTooltipControl%22:false,%22hideToolbarOverlay%22:false,%22hideLayerControl%22:false,%22hideViewControl%22:false,%22initialLocation%22:%22LAST_SAVED_LOCATION%22,%22fixedLocation%22:%7B%22lat%22:0,%22lon%22:0,%22zoom%22:2%7D,%22browserLocation%22:%7B%22zoom%22:2%7D,%22maxZoom%22:24,%22minZoom%22:0,%22showScaleControl%22:false,%22showSpatialFilters%22:true,%22showTimesliderToggleButton%22:true,%22spatialFiltersAlpa%22:0.3,%22spatialFiltersFillColor%22:%22%23DA8B45%22,%22spatialFiltersLineColor%22:%22%23DA8B45%22%7D%7D',title:'',uiStateJSON:'%7B%22isLayerTOCOpen%22:true,%22openTOCDetails%22:%5B%5D%7D'),enhancements:(),hiddenLayers:!(),hidePanelTitles:!f,isLayerTOCOpen:!f,mapBuffer:(maxLat:40.9799,maxLon:45,minLat:-66.51326,minLon:-135),mapCenter:(lat:-25.27131,lon:-41.99565,zoom:2.48),openTOCDetails:!()),gridData:(h:20,i:ee16f160-eea2-46be-a001-eaa02af2be4e,w:48,x:0,y:0),panelIndex:ee16f160-eea2-46be-a001-eaa02af2be4e,title:'G20%20Wildfire%20Map',type:map,version:'7.17.18'),(embeddableConfig:(enhancements:(),hidePanelTitles:!t,vis:(colors:('0%20-%20500':%23BF1B00,'1000%20-%201500':%237EB26D,'500%20-%201000':%23F2C96D),defaultColors:('0%20-%20500':'rgb(165,0,38)','1000%20-%201500':'rgb(0,104,55)','500%20-%201000':'rgb(255,255,190)'),legendOpen:!f)),gridData:(h:7,i:'9fe4c2c6-fa82-4802-b81c-eb966271a83e',w:16,x:0,y:20),id:'69a34b00-9ee8-11e7-8711-e7a007dcef99',panelIndex:'9fe4c2c6-fa82-4802-b81c-eb966271a83e',title:'',type:visualization,version:'7.17.18'),(embeddableConfig:(attributes:(references:!((id:'90943e30-9a47-11e8-b64d-95841ca0b247',name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:'90943e30-9a47-11e8-b64d-95841ca0b247',name:indexpattern-datasource-layer-be520a8c-8085-46f4-978c-3916af56a8e2,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(be520a8c-8085-46f4-978c-3916af56a8e2:(columnOrder:!(ff1805cc-663e-4c29-882b-a06e905a43eb,'8a2ec92e-1050-4e7c-a46f-4675102f6340'),columns:('8a2ec92e-1050-4e7c-a46f-4675102f6340':(dataType:number,isBucketed:!f,label:'Average%20of%20hour_of_day',operationType:average,scale:ratio,sourceField:hour_of_day),ff1805cc-663e-4c29-882b-a06e905a43eb:(dataType:string,isBucketed:!t,label:Filters,operationType:filters,params:(filters:!((input:(language:kuery,query:''),label:''))),scale:ordinal)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((accessors:!('8a2ec92e-1050-4e7c-a46f-4675102f6340'),layerId:be520a8c-8085-46f4-978c-3916af56a8e2,layerType:data,position:top,seriesType:area,showGridlines:!f,xAccessor:ff1805cc-663e-4c29-882b-a06e905a43eb)),legend:(isVisible:!t,position:right),preferredSeriesType:area,title:'Empty%20XY%20chart',valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY)),gridData:(h:7,i:'878d1a33-a551-411c-8fd6-418930069d01',w:32,x:16,y:20),panelIndex:'878d1a33-a551-411c-8fd6-418930069d01',type:lens,version:'7.17.18')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'G20%20Wildifre%20MAp',viewMode:edit)&hide-filter-bar=true";
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
      <iframe src={mapSRC} height="900" className="w-full"></iframe>
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
        {thirdRow}
      </div>
    </>
  );
}
