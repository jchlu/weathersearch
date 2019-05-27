import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default ({ data, color }) => (
  <Sparklines
    height={120} /* also set in '../../style/style.css' due to bug */
    width={180}
    data={data}
  >
    <SparklinesLine color={color} />
    <SparklinesReferenceLine />
  </Sparklines>
)
