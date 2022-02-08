import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Input } from '@mui/material';
import styled from 'styled-components';

interface IProps {
  id: number;
  data: string[];
  etc: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EtcWrapper = styled.div`
  display: flex;
`;

const PreloadItemCheckbox: React.FC<IProps> = ({ id, data, etc }) => {
  const [checked, setChecked] = React.useState([false, false, false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = +event.target.value;
    setChecked(() => {
      const nextChecked = checked.slice();
      nextChecked[index] = event.target.checked;
      return nextChecked;
    });
  };

  return (
    <Wrapper>
      <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} value="0" onChange={handleChange} />} />
      <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} value="1" onChange={handleChange} />} />
      {etc && (
        <FormControl>
          <EtcWrapper>
            <FormControlLabel
              label="기타"
              control={<Checkbox checked={checked[2]} value="2" onChange={handleChange} />}
            />
            {<Input sx={{ width: '498px', margin: '0px !important' }} />}
          </EtcWrapper>
        </FormControl>
      )}
    </Wrapper>
  );
};

export default PreloadItemCheckbox;
