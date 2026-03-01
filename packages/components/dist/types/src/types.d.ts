export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export type ButtonSize = 'large' | 'default' | 'small';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    plain?: boolean;
    round?: boolean;
}
