import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Display } from '../../types/display';
import BasicPopover from '../Popover';
import { AppThemeContext } from '../../contexts/themeProvider';
import { GithubContext } from '../../contexts/githubProvider';

import { sx } from './styles';


const CheckboxFilters = () => {
  const { types, setTypes, sorts, setSorts, languages, setLanguages } = useContext(GithubContext);
  
  const { mdDown } = useContext(AppThemeContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const display = searchParams.get('display') || 'grid';

  const styles = sx(mdDown);

  const handleDisplay = (displayClicked: Display) => {
    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);
      newState.set('display', displayClicked);
      return newState;
    });
  };

  return (
    <Box sx={styles.wrapper}>
  
      <FormControl>
        <RadioGroup value={display} onChange={(e) => handleDisplay(e.target.value as Display)} row>

          <FormControlLabel value='list' control={<Radio />} label='Lista' />
          <FormControlLabel value='grid' control={<Radio />} label='Grade' />
          <FormControlLabel value='carousel' control={<Radio />} label='Carrossel' />

        </RadioGroup>
      </FormControl>

      <Box sx={styles.boxPopovers}>
        <BasicPopover
          title='Tipo'
          label='Selecionar tipo'
          options={types}
          setOptions={setTypes}
        />

        <BasicPopover
          title='Linguagem'
          label='Selecionar idioma'
          options={languages}
          setOptions={setLanguages}
        />

        <BasicPopover
          title='Ordem'
          label='Selecionar ordem'
          options={sorts}
          setOptions={setSorts}
        />
      </Box>
    </Box>
  );
};

export default CheckboxFilters;
