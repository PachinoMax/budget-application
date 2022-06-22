import { ReactElement, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Title, SetupTitle, Subtitle, GridContainer } from './style';
import AddButton from 'components/UI/button';
import AddChannelModal from 'components/channel/add-channel';

export default function Main(): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addChannel = () => {
    setIsModalVisible(true);
  }

  const onBackdropClick = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Title>Build your budget plan</Title>
      <GridContainer>
        <SetupTitle>Setup channels</SetupTitle>
        <Subtitle>
          Setup your added channels by adding baseline budgets out of your total
          budget. See the forecast impact with the help of tips and insights.
        </Subtitle>
        <AddButton onClick={addChannel}><FiPlus />
          Add Channel
          <AddChannelModal onClose={onBackdropClick} isModalVisible={isModalVisible} />
        </AddButton>
      </GridContainer>
    </>
  );
}
