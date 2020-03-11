// interface from https://github.com/ant-design/ant-design/blob/master/components/badge/index.tsx
// example from https://ant.design/components/badge/

export interface BadgeProps {
    /**
     * @desc Number to show in badge
     */
    count?: React.ReactNode;
    /**
     * @desc Whether to show badge when count is zero
     * @default false
     */
    showZero?: boolean;
    /**
     * @desc Max count to show
     * @default 99
     */
    overflowCount?: number;
    /**
     * @desc Whether to display a red dot instead of count
     * @default false
     */
    dot?: boolean;
    // style?: React.CSSProperties;
    prefixCls?: string;
    scrollNumberPrefixCls?: string;
    className?: string;
    /**
     * @desc Set Badge as a status dot
     * @default ''
     */
    status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    /**
     * @desc Customize Badge dot color
     */
    color?: string;
    /**
     * @desc If status is set, text sets the display text of the status dot
     * @default ''
     */
    text?: React.ReactNode;
    /**
     * @desc set offset of the badge dot, like[x, y]
     */
    offset?: [number | string, number | string];
    /**
     * @desc Text to show when hovering over the badge
     * @default count
     */
    title?: string;
}