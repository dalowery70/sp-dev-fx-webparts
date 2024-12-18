import React, { CSSProperties, FC, ReactNode } from 'react';
import { TooltipHost, ITooltipHostProps, Text } from '@fluentui/react';
import { InfoIcon } from '@fluentui/react-icons-mdl2';
import styles from "./styles/LiveTextField.module.scss";
const infoIconStyle: CSSProperties = {
    fontSize: 12,
    marginLeft: 4
};

interface IProps extends ITooltipHostProps {
    text: string;
    hideIcon?: boolean;
    tooltipHostProps?: ITooltipHostProps;
    children: ReactNode;
    isCssClassName?: boolean;
}

export const InfoTooltip: FC<IProps> = ({
    text,
    hideIcon = false,
    tooltipHostProps,
    children,
    isCssClassName = false
}: IProps) =>
    <TooltipHost {...tooltipHostProps} content={text}>
        <span className={isCssClassName ? styles.infoLabelStyle : ''}>
        {children}
        {text && !hideIcon && <Text><InfoIcon style={infoIconStyle} tabIndex={0} /></Text>}
        </span>
    </TooltipHost>
