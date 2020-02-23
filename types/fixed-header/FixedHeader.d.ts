import React, { ReactElement } from "react";
import { CSSObject } from "@emotion/core";
interface Props {
    children: React.ReactNode | React.ReactNode[];
    styles?: CSSObject;
    initialHeight: string;
    fixedHeight: string;
    onUpdateHeight: (h: string) => void;
}
export declare class FixedHeader extends React.Component<Props> {
    innerRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateHeight: () => void;
    getHeight: () => string;
    render(): ReactElement;
}
export {};