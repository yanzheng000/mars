// import React, { Component } from 'react';
// import Tabs from './index';
// import Tab from './tab';

// export default class TabsWrapper extends Component {
//   render() {
//     return (
//       <Tabs defaultActiveKey="1" {...config.data}>
//         {
//           config.data.tabHeader.map( (v,k)=>{
//             const curpage = Pagestore.find(v.pageId);
//             return <Tab label={v.label} icon={v.icon} disabled={v.disabled} key={String(k)}>
//               <div className="tabs-content-page"><Page layouts={curpage.children} pageId={v.pageId} config={curpage.config} preview={true}/></div>
//             </Tab>;
//           }
//           )
//         }
//       </Tabs>
//     );
//   }
// }
