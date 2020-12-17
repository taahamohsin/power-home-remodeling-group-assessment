import React from 'react'
import { Source } from '../../'

const SourceNoicon = () => (
  <>
    <Source
        hideIcon
        source="BJ's Johnston-208"
        type="retail"
    />

    <br />
    <br />

    <Source
        hideIcon
        source="Referral-phrg"
        type="inbound"
    />

    <br />
    <br />

    <Source
        hideIcon
        source="BJ's Future CB"
        type="user"
        user={
              { name: 'Anna Black',
                image: {
                  url: 'https://randomuser.me/api/portraits/women/44.jpg',
                  },
                userId: '48582',
                }
              }
    />
  </>
)

export default SourceNoicon