
/**
 * @ Description:tab标签页
 */

import React, {
    ReactElement,
    useState,
  } from 'react';
  
  
  import {
    Tabs
  } from 'antd';

 
  import style from './TabCard.module.scss';
  
  interface Props {
    className?: string;
    renderCardList?: any;
    size?: string;
  }
 
  function TabCard(props: Props): ReactElement {
      const { TabPane } = Tabs
      const { renderCardList, size} = {...props}
    return (
        <Tabs  tabBarStyle={{display: 'flex',justifyContent:'center'}} size='large' defaultActiveKey={renderCardList[0].key}>
            {renderCardList && renderCardList.map(
                (item: any)=>{
                    return  <TabPane tab={item.tab} key={item.key}>{item.render}</TabPane>
                }
            )}
        </Tabs>
       )
  }
  
  export default TabCard
  
  