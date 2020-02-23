/// <reference types="underscore" />
import React, { Component, ReactElement, ReactNode } from "react";
import { CSSObject } from "@emotion/core";
interface Props {
    children: ReactNode | ReactNode[];
    renderHeader: () => React.ReactElement;
    headerStyle?: CSSObject;
    initialViewportHeight: string;
    initialHeaderHeight: string;
}
interface State {
    viewportHeight: string;
    headerHeight: string;
    mainHeight: string;
}
export declare class FixedHeaderLayout extends Component<Props, State> {
    state: State;
    handleResize: (() => void) & import("underscore").Cancelable;
    isMountedNow: boolean;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    updateHeights: (nextHeaderHeight?: string | undefined) => void;
    getMainHeight: (viewportHeight: string, newHeaderHeight?: string | undefined) => string;
    getHeaderHeight: (newSize?: string | undefined) => string;
    getViewportHeight: () => string;
    createHeights: (nextHeaderHeight?: string | undefined) => State;
    render(): ReactElement;
}
export {};