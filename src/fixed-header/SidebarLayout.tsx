import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import {
  MainElement,
  SidebarBody,
  SidebarContainer,
  SidebarLayoutContainer,
  SidebarVoid,
} from "./elements"
import { FixedHeaderLayoutContextProps } from "./FixedHeaderLayoutContext"
import { withFixedHeaderLayout } from "./withFixedHeaderLayout"

type Props = {
  children: ReactNode | ReactNode[],
  renderSidebar: () => ReactNode,
  sidebarWidth: string,
  containerStyle?: CSSObject,
  voidStyle?: CSSObject,
  bodyStyle?: CSSObject,
} & FixedHeaderLayoutContextProps

export const SidebarLayout = withFixedHeaderLayout(
  ({
    children,
    renderSidebar,
    headerHeight,
    mainHeight,
    sidebarWidth,
    containerStyle,
    voidStyle,
    bodyStyle,
  }: Props): ReactElement => (
    <SidebarLayoutContainer sidebarWidth={sidebarWidth}>
      <MainElement mainHeight={mainHeight}>{children}</MainElement>
      <SidebarContainer sidebarWidth={sidebarWidth} css={containerStyle}>
        <SidebarVoid headerHeight={headerHeight} css={voidStyle} />
        <SidebarBody mainHeight={mainHeight} css={bodyStyle}>
          {renderSidebar()}
        </SidebarBody>
      </SidebarContainer>
    </SidebarLayoutContainer>
  )
)
