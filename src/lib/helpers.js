export const getAccountName = account => {
  if (!account) return null
  if (account.auth) {
    return account.auth.accountName || getAccountLogin(account) || account._id
  } else {
    return account._id
  }
}

export const getAccountLogin = account => {
  if (account && account.auth) {
    return account.auth.login || account.auth.identifier || account.auth.email
  }
}

export const getRandomKeyString = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15)

export const getCompleteFolderPath = (defaultDir, konnectorName, t) => {
  let folderPath = `/${defaultDir}/$konnector`
  return folderPath
    .replace(/\/\//g, '/')
    .replace(/\$konnector/gi, konnectorName)
    .replace(
      /\$administrative/gi,
      t('account.folder.placeholder.administrative')
    )
    .replace(/\$photos/gi, t('account.folder.placeholder.photos'))
}
