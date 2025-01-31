import * as React from 'react';
import BoneIcon from './components/BoneIcon';
import BellIcon from './components/BellIcon';
import styled from 'styled-components';
import GearIcon from './components/GearIcon';
import PawIcon from './components/PawIcon';
import SearchIcon from './components/SearchIcon';
import Squareblocks from './components/Squareblocks';
import ArrowIcon from './components/ArrowIcon';
import ArrowLeftIcon from './components/ArrowLeftIcon';
import MailIcon from './components/MailIcon';
import PlusIcon from './components/PlusIcon';

export enum IconSize {
  HUGE = 'huge',
  BIG = 'big',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum IconName {
  BONE = 'bone',
  BELL = 'bell',
  GEAR = 'gear',
  PAW = 'paw',
  SEARCH = 'search',
  SQUAREBLOCKS = 'squareblocks',
  ARROW = 'arrow',
  ARROW_LEFT = 'arrow_left',
  MAIL = 'mail',
  PLUS = 'plus',
}

export interface IconProps {
  name: IconName | null;
  size: IconSize;
  style?: React.CSSProperties;
}

interface WrapperProps {
  size: IconSize;
}

const getWrapperSize = ({ size }: WrapperProps) => {
  if (size === IconSize.HUGE) {
    return '213px';
  }

  if (size === IconSize.BIG) {
    return '130px';
  }

  if (size === IconSize.SMALL) {
    return '24px';
  }

  return '44px';
};

const Wrapper = styled.div<WrapperProps>`
  width: ${props => getWrapperSize(props)};
  height: ${props => getWrapperSize(props)};
`;

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    name: null,
    size: IconSize.MEDIUM,
  };

  renderIcon = () => {
    const { name } = this.props;

    if (name === IconName.BONE) {
      return <BoneIcon />;
    }

    if (name === IconName.BELL) {
      return <BellIcon />;
    }

    if (name === IconName.GEAR) {
      return <GearIcon />;
    }

    if (name === IconName.PAW) {
      return <PawIcon />;
    }

    if (name === IconName.SEARCH) {
      return <SearchIcon />;
    }

    if (name === IconName.SQUAREBLOCKS) {
      return <Squareblocks />;
    }

    if (name === IconName.ARROW) {
      return <ArrowIcon />;
    }

    if (name === IconName.ARROW_LEFT) {
      return <ArrowLeftIcon />;
    }

    if (name === IconName.MAIL) {
      return <MailIcon />;
    }

    if (name === IconName.PLUS) {
      return <PlusIcon />;
    }

    return null;
  };

  public render() {
    const { name, size, ...restProps } = this.props;

    if (!name) {
      return null;
    }

    return (
      <Wrapper {...restProps} size={size}>
        {this.renderIcon()}
      </Wrapper>
    );
  }
}
