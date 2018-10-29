import './material-button.scss';

import classNames = require('classnames');
import * as React from 'react';

interface Props {
    title: string;
    onClick: () => void;
    style?: 'rounded' | 'curved';
    color?: 'primary' | 'accent'
    className?: string;
}

interface State {
}

class MaterialButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const props = this.props;
        return (
            <button className={classNames('material-button', props.color || 'primary', props.style || 'curved', props.className)}
                onClick={() => this.props.onClick()}>
                {this.props.title.toUpperCase()}
            </button>
        );
    }
}

export default MaterialButton;