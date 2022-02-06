import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import SurveyItemListWrapper from '../../styled/survey-item-list-wrapper';

const DrapWrapper = styled.div`
  width: 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  width: 30px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const CustomInput = styled(Input)`
  width: 612px;
`;

interface IProps {
  data: string[];
  isSelected: boolean;
}

const SurveyItemDropdownList: React.FC<IProps> = ({ data, isSelected }) => {
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      {data.map((str, index) => (
        <ListWrapper key={str}>
          <DrapWrapper></DrapWrapper>
          {/* {Icon} */}
          <DropdownWrapper>{index + 1}</DropdownWrapper>
          <CustomInput value={str} />
        </ListWrapper>
      ))}
      <ListWrapper>
        <DrapWrapper></DrapWrapper>
        {/* {Icon} */}
        <DropdownWrapper>{data.length + 1}</DropdownWrapper>
        <div style={{ height: '32px', width: '612px', display: 'flex', alignItems: 'center' }}>옵션 추가</div>
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemDropdownList;
