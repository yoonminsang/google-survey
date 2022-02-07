import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import styled from 'styled-components';

interface IProps {
  id: number;
  data: string[];
  etc: boolean;
}

const EtcWrapper = styled.div`
  display: flex;
`;

const PreloadItemMultiple: React.FC<IProps> = ({ id, data, etc }) => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup value={value} name="radio-buttons-group" onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        {etc && (
          <EtcWrapper>
            <FormControlLabel value="etc" control={<Radio />} label="기타" />
            {value === 'etc' && <Input sx={{ width: '498px', margin: '0px !important' }} />}
          </EtcWrapper>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default PreloadItemMultiple;
