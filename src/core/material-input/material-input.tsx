import './material-input.scss';

import classNames = require('classnames');
import * as React from 'react';

interface Props {
    initialValue?: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    style?: 'rounded' | 'curved'
    type?: 'text' | 'password';
    className?: string;
}

interface State {
    value: string;
    isFocused: boolean;
}

class MaterialInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: this.props.initialValue || '',
            isFocused: false
        };
    }

    render() {
        return (
            <div className={classNames('material-input', this.props.style || 'curved', this.props.className)}>
                <div className={classNames('input-placeholder', { hide: !this.showPlaceholder })}>
                    {this.props.placeholder}
                </div>
                <input className={classNames('input')} type={this.props.type} value={this.state.value}
                    onChange={(event) => this.handleChange(event)}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()} />
            </div>
        );
    }

    private get showPlaceholder(): boolean {
        return !this.state.isFocused && !this.state.value;
    }

    private onFocus() {
        this.setState({
            isFocused: true
        });
    }

    private onBlur() {
        this.setState({
            isFocused: false
        });
    }

    private handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            value
        });
        this.props.onValueChange(value);
    }
}

export default MaterialInput;