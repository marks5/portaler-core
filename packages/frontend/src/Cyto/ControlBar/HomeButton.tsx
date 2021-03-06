import React, { FC, useCallback } from 'react'

import { IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import { ZoneLight } from '../../common/ZoneSearch/zoneSearchUtils'
import getHomeZone from '../../utils/getHomeZone'
import styles from './styles.module.scss'

export interface HomeButtonProps {
  handleHome: (zone: ZoneLight) => void
}

const HomeButton: FC<HomeButtonProps> = ({ handleHome }) => {
  const handleClick = useCallback(() => {
    handleHome(getHomeZone())
  }, [handleHome])

  return (
    <div className={styles.control}>
      <IconButton onClick={handleClick} aria-label="home" title="focus home">
        <HomeIcon fontSize="large" color="secondary" />
      </IconButton>
    </div>
  )
}

export default HomeButton
