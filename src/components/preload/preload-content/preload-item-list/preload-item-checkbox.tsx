import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Input } from '@mui/material';
import styled from 'styled-components';
import { IPreloadCheckbox } from '@/types/preload';

interface IProps {
  id: number;
  data: string[];
  etc: boolean;
  preloadData: IPreloadCheckbox;
  index: number;
  onChangeAnswerStr: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  onChangeEtcAnswer: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  onChangeCheckBox: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EtcWrapper = styled.div`
  display: flex;
`;

const PreloadItemCheckbox: React.FC<IProps> = ({
  id,
  data,
  etc,
  preloadData,
  index,
  onChangeEtcAnswer,
  onChangeCheckBox,
}) => {
  const { checkArr, etcAnswer } = preloadData;
  return (
    <Wrapper>
      {data.map((str, dataIndex) => (
        <FormControlLabel
          key={dataIndex}
          label={data[dataIndex]}
          control={
            <Checkbox checked={checkArr[dataIndex]} value={dataIndex} onChange={(e) => onChangeCheckBox(e, index)} />
          }
        />
      ))}
      {etc && (
        <FormControl>
          <EtcWrapper>
            <FormControlLabel
              label="기타"
              control={
                <Checkbox
                  checked={checkArr[checkArr.length - 1]}
                  value={checkArr.length - 1}
                  onChange={(e) => onChangeCheckBox(e, index)}
                />
              }
            />
            <Input
              sx={{ width: '498px', margin: '0px !important' }}
              value={etcAnswer}
              onChange={(e) => onChangeEtcAnswer(e, index)}
            />
          </EtcWrapper>
        </FormControl>
      )}
    </Wrapper>
  );
};

export default PreloadItemCheckbox;
