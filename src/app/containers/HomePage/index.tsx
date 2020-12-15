import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core';
import theme from 'styles/theme';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Copyright } from 'app/components/Copyright';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('homePage.pageTitle')}</title>
        <meta name="description" content={t('homePage.pageMeta')} />
      </Helmet>

      <ContainerWrapper>
        <Container component="main" maxWidth="xs">
          <Paper>
            <PaperAvatar>
              <LockOutlinedIcon />
            </PaperAvatar>
            <Typography component="h1" variant="h5">
              {t('homePage.signIn')}
            </Typography>
            <Form noValidate>
              <TextField
                label={t('homePage.form.email')}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                label={t('homePage.form.password')}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t('homePage.form.checkbox')}
              />
              <SubmitButton type="submit" fullWidth variant="contained" color="primary">
                {t('homePage.form.submitButton')}
              </SubmitButton>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {t('homePage.form.forgotPassword')}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {t('homePage.form.forgotPasswordHint')}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Paper>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </ContainerWrapper>
    </>
  );
}

const SubmitButton = withStyles({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
})(Button);

const PaperAvatar = withStyles({
  root: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
})(Avatar);

const Form = styled.form`
  width: 100%;
  margin-top: ${theme.spacing(1)};
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${theme.spacing(8)};
`;

const ContainerWrapper = styled.div`
  position: absolute;
  top: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
`;
