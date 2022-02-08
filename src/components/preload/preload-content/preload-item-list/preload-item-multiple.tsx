import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import styled from 'styled-components';
import { IPreloadMultiple } from '@/types/preload';

interface IProps {
  data: string[];
  etc: boolean;
  preloadData: IPreloadMultiple;
  index: number;
  onChangeAnswerStr: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  onChangeEtcAnswer: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}

const EtcWrapper = styled.div`
  display: flex;
`;

const PreloadItemMultiple: React.FC<IProps> = ({
  data,
  etc,
  preloadData,
  index,
  onChangeAnswerStr,
  onChangeEtcAnswer,
}) => {
  const { answer, etcAnswer } = preloadData;
  return (
    <FormControl>
      <RadioGroup value={answer} name="radio-buttons-group" onChange={(e) => onChangeAnswerStr(e, index)}>
        {data.map((str, dataIndex) => (
          <FormControlLabel key={dataIndex} value={str} control={<Radio />} label={str} />
        ))}
        {etc && (
          <FormControl>
            <EtcWrapper>
              <FormControlLabel value="etc" control={<Radio />} label="기타" />
              <Input
                sx={{ width: '498px', margin: '0px !important' }}
                value={etcAnswer}
                onChange={(e) => onChangeEtcAnswer(e, index)}
              />
            </EtcWrapper>
          </FormControl>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default PreloadItemMultiple;
