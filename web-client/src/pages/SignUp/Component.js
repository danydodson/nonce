import React from 'react'
import Container from '@material-ui/core/Container'
import SignUpCtrl from '../../components/SignUp'
import Meta from 'components/Meta'
import useStyles from './styles'

function SignUpPage() {
  const classes = useStyles()

  return (
    <>
      <Meta title='Sign Up' description='User sign up page' />

      <Container maxWidth='sm' className={classes.root}>
        <SignUpCtrl className={classes.root} />
      </Container>
    </>
  )
}

export default SignUpPage
