import React, { Component } from 'react'

import classNames from 'classnames'
import EmptyIcon from '../assets/images/connected-accounts.svg'
import fillWithGhostItems from './helpers/fillWithGhostItems'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getInstalledKonnectors } from '../reducers'
import { translate } from 'cozy-ui/react/I18n'
import sortBy from 'lodash/sortBy'

import KonnectorTile from './KonnectorTile'
import AddServiceTile from './AddServiceTile'

class Services extends Component {
  render() {
    const { t, installedKonnectors } = this.props
    const hasConnections = !!installedKonnectors.length
    return (
      <div
        className={classNames('services-list-wrapper', {
          'services-list-wrapper--empty': !hasConnections
        })}
      >
        {hasConnections ? (
          <div className="list connector-list" data-tutorial="home-services">
            {installedKonnectors.map((konnector, index) => (
              <KonnectorTile
                key={index}
                konnector={konnector}
                route={`connected/${konnector.slug}`}
              />
            ))}
            {<AddServiceTile label={t('add_service')} />}
            {fillWithGhostItems(6)}
          </div>
        ) : (
          <div className="connector-list col-empty-list">
            <div className="col-empty-list--img">
              <img
                src={EmptyIcon}
                data-tutorial="home-services"
                alt={t('connector.empty')}
              />
            </div>
            <div className="col-empty-list--text">
              <h2>{t('connector.no-connectors-connected')}</h2>
              <p>{t('connector.get-info')}</p>
              <NavLink to="/providers/all" className="col-button">
                <span>{t('connector.connect-account')}</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    installedKonnectors: sortBy(
      getInstalledKonnectors(state),
      konnector => konnector.name
    )
  }
}

export default connect(mapStateToProps)(translate()(Services))
