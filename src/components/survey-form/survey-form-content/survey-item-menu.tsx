import React from 'react';
import styled from 'styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSurveyMenu } from '@/hooks/use-survey-menu';

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
  isNeccessary: boolean;
}
const SurveyItemMenu: React.FC<IProps> = ({ id, isNeccessary }) => {
  const { onChangeSurveyNeccessary, onRemoveSurvey, onCopySurvey } = useSurveyMenu();
  return (
    <Wrapper>
      <Flex>
        <IconButton type="button" onClick={() => onCopySurvey(id)}>
          <ContentCopyIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton type="button" onClick={() => onRemoveSurvey(id)}>
          <DeleteOutlineIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <Block />
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isNeccessary} onClick={() => onChangeSurveyNeccessary(id)} />}
            label="필수"
            labelPlacement="start"
          />
        </FormGroup>
      </Flex>
    </Wrapper>
  );
};

export default SurveyItemMenu;
