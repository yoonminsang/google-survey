import React, { useState } from 'react';
import styled from 'styled-components';
import { FilledInput, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SurveyFormItmeWrapper from '../sruvey-form-item-wrapper';
import { TSurveyType } from '@/types/survey';

const Wrapper = styled(SurveyFormItmeWrapper)`
  margin-top: 12px;
`;

const DrapWrapper = styled.div`
  height: 24px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(FilledInput)`
  width: 446px;
  background-color: transparent;
`;

const SelectWrapper = styled(FormControl)`
  width: 210px;
`;

const Item = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

interface IProps {
  type: TSurveyType;
  title: string;
  data: string[];
  isSelected: boolean;
}
const SurveyItem: React.FC<IProps> = ({ type, title, data, isSelected }) => {
  // TODO: 리덕스에서 props 넘겨주기
  const [age, setAge] = useState<TSurveyType>('short');
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Wrapper>
      <DrapWrapper></DrapWrapper>
      <Item>
        <Flex>
          <Title inputComponent="textarea" value={title} readOnly={!isSelected} />
          <SelectWrapper>
            <InputLabel id="select-label">타입</InputLabel>
            <Select labelId="select-label" value={age} label="type" onChange={handleChange}>
              <MenuItem value="short">단답형</MenuItem>
              <MenuItem value="long">장문형</MenuItem>
              <MenuItem value="multiple">객관식</MenuItem>
              <MenuItem value="chekcbox">체크박스</MenuItem>
              <MenuItem value="dropdown">드롭다운</MenuItem>
            </Select>
          </SelectWrapper>
        </Flex>
        {data}
      </Item>
    </Wrapper>
  );
};

export default SurveyItem;
{
  /* <FormControl disabled>
<Input readOnly />
</FormControl> */
}
