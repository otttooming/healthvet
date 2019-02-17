import RX from 'reactxp';
import * as React from 'react';
import Avatar from '../Avatar';
import Name from './components/Name';
import Title from './components/Title';
import Icon, { IconName } from '../Icon';
import Description from './components/Description';

export interface CardProps {
  name: string;
  date: string;
  description: string;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    shadowOpacity: 0.27,
    shadowRadius: 16,
    shadowColor: 'rgb(254, 79, 21)',
    shadowOffset: { height: 0, width: 4 },
    overflow: 'visible',
  }),
  left: RX.Styles.createViewStyle({
    padding: 32,
  }),
  center: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    flex: 1,
    padding: 24,
    paddingRight: 88,
  }),
  right: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    padding: 32,
  }),
};

class Card extends RX.Component<CardProps, any> {
  static defaultProps = {
    name: null,
    date: null,
    description: null,
  };

  public render() {
    const { name, date, description } = this.props;

    return (
      <RX.View style={style.wrapper}>
        <RX.View style={style.left}>
          <Avatar />
          <Name name={name} />
        </RX.View>
        <RX.View style={style.center}>
          <Title title={name} date={date} />
          <Description description={description} />
        </RX.View>
        <RX.View style={style.right}>
          <Icon name={IconName.PLUS} />
          <Icon name={IconName.PLUS} />
          <Icon name={IconName.PLUS} />
        </RX.View>
      </RX.View>
    );
  }
}

export default Card;
