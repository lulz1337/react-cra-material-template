/**
 *
 * Copyright
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export function Copyright() {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={t('homePage.copyrightLink')}>
        React CRA Material Template
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
