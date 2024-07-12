import { Grid, IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const SearchWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  boxSizing: 'border-box',
  background: theme.palette.background.paper,
  padding: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: "1px solid " + theme.palette.primary.main,
  minWidth: 300,
  maxWidth: 600,
  width: "75%",
}));


const SearchBox = () => {


  const navigate = useNavigate()
  return (
    <SearchWrapper>
      <InputBase
        sx={{ minWidth: "200px", minHeight: "48px", flex: 1, borderRadius: "24px", padding: "10px" }}
        placeholder="burger, pizza ..."
        inputProps={{ 'aria-label': 'burger, pizza ...' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => { navigate("/search") }}>
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
    </SearchWrapper>

  );
}

export default SearchBox;
