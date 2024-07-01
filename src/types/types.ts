import React from 'react';

export type ThemeColorsProps = 'light' | 'dark';
export type ColorsProps = 'theme' | 'blue' | 'teal' | 'red' | 'green' | 'orange' | 'orange-dark' | 'grey-bg' | 'grey' | 'grey-dark' | 'grey-light';

export interface BadgeProps {
    type: ColorsProps,
    size?: 'sm' | 'small',
    text?: number | string,
    classNames?: string
}

export interface IconProps {
    name?: string,
    width?: number,
    height?: number,
    prepend?: boolean,
    append?: boolean,
    classNames?: string
}

export interface BadgeHelpProps {}

export interface BadgeSignalProps {
    type?: ColorsProps | string,
    classNames?: string
}

export type DropdownItemProps = {
    id: string,
    type?: 'note' | 'message' | string;
    title?: string,
    text?: string,
    time?: string,
    color: string,
    icon?: string,
    thumb?: string,
    avatar?: string,
    route: string,
    status?: ColorsProps | string,
    onRemove?: (id: string) => void
}

export interface QuotationProps {
    direction: 'up' | 'down',
    classNames?: string
}

export interface DropdownProps {
    type?: 'block' | string,
    direction?: 'right',
    title?: string,
    badge?: BadgeProps,
    classNames?: string,
    children?: React.ReactNode,
    items?: DropdownItemProps[],
    onClick?: (event: React.MouseEvent) => void;
    bottom?: {
        text: string
    },
    show?: boolean
}

export interface LangMenuProps {
    items: {
        icon: string,
        text: string
    }[]
}

export interface ProfileDropdownProps {
    items: {
        route: string,
        text: string,
        icon: string
    }[]
}

export interface ToggleSidebarProps {
    theme?: 'secondary',
    classNames?: string
}

export interface ToggleSearchProps {
    module?: boolean,
    classNames?: string,
    isActive: boolean,
    onToggle?: () => void
}

export interface HeaderProps {
    lang: LangMenuProps,
    notifications?: DropdownProps,
    messages?: DropdownProps,
    profile: {
        abbr: string,
        name: string,
        icon: string,
        dropdown: ProfileDropdownProps
    }
}

export interface HeaderToolsItemProps {
    typeButton: string,
    content: string,
    icon: string,
    classNames: string,
    dropdownClass: string,
    dropdown?: DropdownProps
}

export interface SidebarLinkProps {
    id?: string,
    icon?: string,
    text: string,
    badge?: string | number,
    href?: string,
    submenu?: {
        id?: string,
        text: string,
        href: string
    }[]
}

export interface SidebarEventsProps {
    color: ColorsProps,
    text: string
}

export interface SidebarProps {
    logoLink: string,
    logoIcon: string,
    logoName: string,
    menu: SidebarLinkProps[],
    events?: {
        title: string,
        items: SidebarEventsProps[]
    }
}

export interface MarkerItemProps {
    color: ColorsProps,
    size: 'md'
}

export type SwitcherButtonItemsProps = {
    active: boolean
    value: string
}

export interface TooltipProps {
    placement: 'bottom' | 'top',
    content: string,
    children?: React.ReactElement
}

export interface ChartCircleProps {
    value: number,
    color: string
}

export interface ButtonProps {
    type: 'button' | 'submit'
    block?: boolean,
    load?: boolean,
    theme: 'primary' | 'secondary',
    children?: React.ReactNode
    icon?: IconProps,
    onClick?: () => void,
    classNames?: string
}

export interface InputProps {
    side?: 'prepend' | 'append',
    select?: boolean,
    type?: string,
    value?: string
    onChange?: any,
    placeholder?: string,
    required?: boolean,
    readonly?: boolean
}

export interface InputGroupProps {
    type?: 'time',
    children?: React.ReactNode,
    label?: string,
    prepend?: boolean,
    append?: React.ReactNode,
    arrow?: boolean,
    icon?: IconProps,
    symbol?: '$' | '%',
    input?: InputProps,
    classNames?: string
}

export interface DropdownItemsProps {
    classNames?: string,
    show?: boolean,
    onClick?: () => void,
    direction?: 'up' | 'right' | 'left',
    fluid?: boolean,
    dropdown?: string,
    items?: {
        id: string,
        icon: string,
        text: string
    }[]
}

export type ProgressBarProps = {
    title: string,
    value: string,
    width: string,
    color: string
}

export type CreditCardProps = {
    type?: string,
    image: string,
    number: string,
    name: string,
    date: string
}

export type TransactionItemProps = {
    title: string,
    time: string,
    cost: string
}

export type MediaItemProps = {
    size?: 'medium',
    file?: boolean
    color: ColorsProps | string,
    avatarTitle: string,
    avatar?: string,
    title: string
}

export type TableProps = {
    lines?: boolean,
    striped?: boolean,
    groups?: boolean,
    spaces?: boolean,
    sticky?: boolean,
    classNames?: string,
    itemsMoreRef?: any,
    onToggleMore: (event: any) => void;
    data: {
        id: string,
        head: {
            sort?: boolean,
            title: string,
            nowrap?: boolean,
            actions?: boolean
        }[]
        rows: {
            value?: string,
            textGray?: boolean,
            status?: {
                color: ColorsProps | string,
                value: string
            },
            media?: MediaItemProps,
            actions?: DropdownItemsProps
        }[][]
    }
}

