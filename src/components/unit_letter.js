import React from 'react'

export default ({ activeUnit }) => {
  switch (activeUnit) {
    case 'metric': return 'C'
    case 'imperial': return 'F'
    default: return 'K'
  }
}
