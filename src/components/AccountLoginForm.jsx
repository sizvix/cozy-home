import React from 'react'
import { translate } from 'cozy-ui/react/I18n'

import { AccountForm } from 'cozy-harvest'

export class AccountLoginForm extends React.Component {
  state = {
    submitEnabled: this.props.isOAuth || false
  }

  componentWillReceiveProps(props) {
    // eslint-disable-next-line no-console
    console.log('!!!!!!! props : !!!!!!!!!!', props)
    this.UNSAFE_componentWillReceiveProps(props)
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const {
      dirty,
      editing,
      isValid,
      isValidButPasswords,
      allRequiredFieldsAreFilled,
      allRequiredFilledButPasswords,
      forceEnabled,
      isOAuth
    } = newProps
    // we don't take in account passwords in editing
    // since they will be returned encrypted from the stack
    const submitEnabled =
      (editing &&
        dirty &&
        isValidButPasswords &&
        allRequiredFilledButPasswords) ||
      (!editing && isValid && allRequiredFieldsAreFilled) ||
      forceEnabled ||
      isOAuth
    this.setState({
      submitEnabled: submitEnabled
    })
  }

  render() {
    const { fields } = this.props

    return <AccountForm fields={{'login':{type:'text'},'plop':{type:'password'} }} />
  }
}

export default translate()(AccountLoginForm)
