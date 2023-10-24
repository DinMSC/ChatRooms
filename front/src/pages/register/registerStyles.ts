import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const MainBox = styled(Box, { name: 'mainbox' })(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(4),

    /*    [theme.breakpoints.up('xl')]: {
        flexDirection: 'row',
    }, */
}));

export const FormBox = styled(Box, { name: 'formbox' })(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(10),
    border: '1px solid',
    borderRadius: theme.spacing(1),
}));

export const AuthInput = styled(TextField)({
    width: 500,
    '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':
        {
            '-webkit-appearance': 'none',
            margin: 0,
        },
    '& input[type="number"]': {
        '-moz-appearance': 'textfield',
    },
});

export const AuthButton = styled(Button, { name: 'authbuton' })(
    ({ theme }) => ({
        width: 500,
    })
);
