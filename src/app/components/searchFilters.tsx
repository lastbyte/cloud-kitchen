import { FormControl, FormControlLabel, FormGroup, NativeSelect, Paper, styled, Switch, SwitchProps } from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";

const VegSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,


  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    backgroundColor: blue[100],
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: blue[100],
        opacity: 1,
        border: 1,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    backgroundColor: green[400],
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: blue[100],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const NonVegSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: blue[100],
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18,
    backgroundColor: red[400],
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: blue[100],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


const SearchFiltersContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  minWidth: 300,
  maxWidth: 600,
  boxSizing: 'border-box',
  width: "75%",
  backgroundColor: theme.palette.background.paper,
}));

const SearchFilters = () => {
  return (
    <SearchFiltersContainer variant="outlined">
      <FormGroup sx={{ display: "flex", width: "50%", flexDirection: "row" }}>
        <FormControlLabel control={<VegSwitch color="success" />} label=" veg only" />
        <FormControlLabel control={<NonVegSwitch color="error" />} label=" non-veg only" />
      </FormGroup>
      <FormControl sx={{ m: 1, minWidth: 150, maxWidth: 300, width: "40%" }}>
        <NativeSelect
          value=""
        >
          <option value="">None</option>
          <option value={"indian"}>Indian</option>
          <option value={"chinese"}>Chinese</option>
          <option value={"italian"}>Italian</option>
        </NativeSelect>
      </FormControl>
    </SearchFiltersContainer>

  );
}

export default SearchFilters;
