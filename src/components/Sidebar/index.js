import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = (props) => {
  const onClickFunc = ()=>{
    props.toggle();
  };

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={()=> onClickFunc()}>
      <Icon onClick={()=> onClickFunc()}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='work'>My Works</SidebarLink>
          <SidebarLink to='contact'>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
