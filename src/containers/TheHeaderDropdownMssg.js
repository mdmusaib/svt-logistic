import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownMssg = () => {
  const itemsCount = 4
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false} onClick={()=>{console.log('clicked')}}>
        <CIcon name="cil-envelope-open" /><CBadge shape="pill" color="info">{itemsCount}</CBadge>
      </CDropdownToggle>
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg