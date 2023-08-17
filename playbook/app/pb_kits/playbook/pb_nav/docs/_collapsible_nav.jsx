import React from "react";
import { Nav, NavItem } from '../..'

const CollapsibleNav = (props) => {
  return (
    <Nav>
      <NavItem
          active
          collapsible 
          collapsibleTrail
          fontWeight="bolder"
          iconLeft="city" 
          iconRight={["plus", "minus"]}
          link="#" 
          text="Overview" 
          {...props}
      >
        <NavItem
            link="#" 
            text="City"
            {...props}
        />
        <NavItem
            link="#"
            text="People"
            {...props}
        />
        <NavItem 
            link="#" 
            text="Business" 
            {...props}
        />
      </NavItem>
      <NavItem 
          collapsible 
          collapsibleTrail
          fontWeight="bolder"
          iconLeft="theater-masks"
          iconRight={["plus", "minus"]}
          link="#" 
          text="Albums" 
          {...props}
      >
        <NavItem 
            link="#" 
            text="Entertainment" 
            {...props}
        />
        <NavItem 
            link="#" 
            text="Food" 
            {...props}
        />
        <NavItem 
            link="#" 
            text="Style" 
            {...props}
        />
      </NavItem>
      <NavItem 
          collapsible 
          collapsibleTrail
          fontWeight="bolder"
          iconLeft="city" 
          iconRight={["plus", "minus"]}
          link="#" 
          text="Similar Artists" 
          {...props}
      >
        <NavItem 
            link="#" 
            text="City"
            {...props} 
        />
        <NavItem
            link="#"
            text="People"
            {...props}
        />
        <NavItem 
            link="#" 
            text="Business" 
            {...props}
        />
      </NavItem>
    </Nav>
  );
};

export default CollapsibleNav