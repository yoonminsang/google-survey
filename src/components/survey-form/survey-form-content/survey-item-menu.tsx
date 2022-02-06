import React, { useState } from 'react';
import styled from 'styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Wrapper = styled.div`
  border-top: 1px solid #dadce0;
  margin: 0 24px;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  margin: 0 10px;
`;

const Block = styled.div`
  border-left: 1px solid #dadce0;
  height: 32px;
  margin: 0 16px;
  width: 0;
`;

interface IProps {
  id: number;
}
const SurveyItemMenu: React.FC<IProps> = ({ id }) => {
  // 커스텀훅으로 3개이벤트랑 state값 id로 가져오기
  const [check, setCheck] = useState(false);
  return (
    <Wrapper>
      <Flex>
        <IconButton type="button">
          <ContentCopyIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton type="button">
          <DeleteOutlineIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <Block />
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={check} onClick={() => setCheck((check) => !check)} />}
            label="필수"
            labelPlacement="start"
          />
        </FormGroup>
      </Flex>
    </Wrapper>
  );
};

export default SurveyItemMenu;
