import * as React from 'react';
import styled from 'styled-components';
import Message, { MessageProps } from '../../../components/Message/Message';
import ControlBar from '../../../components/ControlBar/ControlBar';
import TextField from '../../../components/TextField/TextField';
import { ScrollTo, ScrollArea } from 'react-scroll-to';
import Title from '../../../components/Title/Title';

const ScroolAreaFixed: any = ScrollArea;

export interface MessageSectionProps {}
export interface MessageSectionState {
  messages: MessageProps[];
}

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
  padding: 32px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Footer = styled.div`
  position: sticky;
  bottom: 0;
  margin-top: 100%;
`;

export default class MessageSection extends React.Component<
  MessageSectionProps,
  any
> {
  messages: MessageProps[] = [
    {
      title: 'Nahainfektsioon suuremal lambakoeral',
      description:
        'Nahainfektsioon suuremal lambakoeral kes on saanud pihta mingi autoga ja tal tuleb vist tagumine jalg üldse otsast ',
      icon: '',
    },
    {
      title: null,
      description:
        'Nahainfektsioon suuremal lambakoeral kes on saanud pihta mingi autoga ja tal tuleb vist tagumine jalg üldse otsast ',
      icon: '',
    },
  ];

  state = {
    messages: this.messages,
  };

  renderMessages = () => {
    return (
      <UnsortedList>
        {this.state.messages.map((item, index) => (
          <ListItem key={index}>
            <Message {...item} />
          </ListItem>
        ))}
      </UnsortedList>
    );
  };

  createNewMessage = (description: string) => {
    const { messages } = this.state;

    const message: MessageProps = {
      title: '',
      description:
        'Nahainfektsioon suuremal lambakoeral kes on saanud pihta mingi autoga ja tal tuleb vist tagumine jalg üldse otsast ära ja siin on hästi palju teksti suuremal lambakoeral kes on saanud pihta mingi autoga... ',
      icon: '',
    };

    this.setState({
      messages: [...messages, message],
    });
  };

  public render() {
    return (
      <ScrollTo>
        {({ scrollTo }) => (
          <ScroolAreaFixed id="foo">
            <Wrapper>
              <Top>
                <Title>Messages</Title>
                <ControlBar />
              </Top>

              {this.renderMessages()}

              <Footer>
                <TextField
                  placeholder="Write your text here"
                  onSubmit={() => {
                    scrollTo({ id: 'foo', x: 20, y: 500 });
                  }}
                />
              </Footer>
            </Wrapper>
          </ScroolAreaFixed>
        )}
      </ScrollTo>
    );
  }
}
